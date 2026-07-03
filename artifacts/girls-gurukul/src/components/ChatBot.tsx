import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, AlertCircle, Mic, MicOff, Volume2, VolumeX } from "lucide-react";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

const QUICK_TOPICS = [
  "Admission Process",
  "Fee Structure",
  "School Timing",
  "Contact Info",
  "Courses Offered",
  "Documents Required",
  "Facilities",
];

const WELCOME: ChatMessage = {
  id: 0,
  from: "bot",
  text: "Namaste! 🙏 I'm the Girls Gurukul AI Assistant.\n\nI can help you with admissions, fees, timings, facilities and more. What would you like to know?",
  quickReplies: QUICK_TOPICS,
};

let msgId = 1;

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      audioRef.current?.pause();
      setSpeaking(false);
    };
  }, []);

  // Stop audio when chat is closed
  useEffect(() => {
    if (!open) { audioRef.current?.pause(); setSpeaking(false); }
  }, [open]);

  const speak = useCallback(async (text: string) => {
    if (!voiceEnabled) return;
    // Stop any currently playing audio
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setSpeaking(false);

    // Strip emojis & normalise newlines for cleaner speech
    const clean = text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").replace(/\n+/g, ". ").trim();
    if (!clean) return;

    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clean }),
      });
      if (!res.ok) return;

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onplay = () => setSpeaking(true);
      audio.onended = () => { setSpeaking(false); URL.revokeObjectURL(url); };
      audio.onerror = () => { setSpeaking(false); URL.revokeObjectURL(url); };

      await audio.play();
    } catch {
      setSpeaking(false);
    }
  }, [voiceEnabled]);

  const startListening = () => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setError("Voice input is not supported in your browser.");
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "hi-IN";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInput(transcript);
    };

    recognition.onend = () => {
      setListening(false);
      setTimeout(() => {
        setInput((prev) => {
          if (prev.trim()) sendMessage(prev);
          return prev;
        });
      }, 300);
    };

    recognition.onerror = () => {
      setListening(false);
      setError("Voice input failed. Please try again.");
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setError(null);

    const userMsg: ChatMessage = { id: msgId++, from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const newHistory = [...history, { role: "user", content: text.trim() }];

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? `Server error ${res.status}`);
      }

      const data = await res.json() as { reply: string };
      const botMsg: ChatMessage = {
        id: msgId++,
        from: "bot",
        text: data.reply,
        quickReplies: QUICK_TOPICS.slice(0, 4),
      };
      setMessages((prev) => [...prev, botMsg]);
      setHistory([...newHistory, { role: "assistant", content: data.reply }]);
      speak(data.reply);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setMessages((prev) => [...prev, {
        id: msgId++,
        from: "bot",
        text: "Sorry, I'm having trouble connecting right now. Please try again or call us at +91-1742-271XXX. 🙏",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-24 right-5 z-50">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setOpen(true)}
              className="w-16 h-16 hover:scale-110 transition-transform relative bg-transparent"
              title="Chat with AI Assistant"
            >
              <img
                src="/images/chatbot-robot.png"
                alt="AI Assistant"
                className="w-full h-full object-contain drop-shadow-lg"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4a017] rounded-full animate-pulse border-2 border-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.92 }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-20px)] flex flex-col rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-[#1a5c2e] px-5 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white/10">
                <img src="/images/chatbot-robot.png" alt="AI" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Gurukul AI Assistant</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Powered by AI — Ask me anything!
                </p>
              </div>
              <button
                onClick={() => { setVoiceEnabled((v) => !v); window.speechSynthesis?.cancel(); setSpeaking(false); }}
                title={voiceEnabled ? "Turn off voice" : "Turn on voice"}
                className="text-white/70 hover:text-white transition-colors flex-shrink-0 mr-1"
              >
                {voiceEnabled
                  ? <Volume2 size={18} className={speaking ? "text-green-300 animate-pulse" : ""} />
                  : <VolumeX size={18} />
                }
              </button>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors flex-shrink-0">
                <ChevronDown size={22} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 bg-[#1a5c2e] rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1 shadow-sm">
                      <Bot className="text-white w-3.5 h-3.5" />
                    </div>
                  )}
                  <div className="max-w-[85%]">
                    <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.from === "user"
                        ? "bg-[#1a5c2e] text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
                    }`}>
                      {msg.text}
                    </div>
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.quickReplies.map((qr) => (
                          <button
                            key={qr}
                            onClick={() => sendMessage(qr)}
                            disabled={loading}
                            className="text-xs bg-white border border-[#1a5c2e]/30 text-[#1a5c2e] px-3 py-1.5 rounded-full hover:bg-[#1a5c2e] hover:text-white transition-all font-semibold shadow-sm disabled:opacity-50"
                          >
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 bg-[#1a5c2e] rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                    <Bot className="text-white w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#1a5c2e]/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-[#1a5c2e]/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-[#1a5c2e]/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Error banner */}
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-red-600 text-xs">
                  <AlertCircle size={12} className="flex-shrink-0" />
                  {error}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-100 px-3 py-3 flex gap-2 flex-shrink-0 items-center">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !loading) sendMessage(input); }}
                placeholder={listening ? "Listening… speak now 🎙️" : "Type or speak your question…"}
                disabled={loading}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c2e] transition-colors disabled:opacity-60"
              />
              {/* Mic Button */}
              <button
                onClick={startListening}
                disabled={loading}
                title={listening ? "Stop listening" : "Speak your question"}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40 ${
                  listening
                    ? "bg-red-500 animate-pulse"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {listening
                  ? <MicOff className="text-white w-4 h-4" />
                  : <Mic className="text-gray-600 w-4 h-4" />
                }
              </button>
              {/* Send Button */}
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                className="w-10 h-10 bg-[#1a5c2e] rounded-xl flex items-center justify-center hover:bg-[#1a5c2e]/90 transition-colors disabled:opacity-40 flex-shrink-0"
              >
                <Send className="text-white w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
