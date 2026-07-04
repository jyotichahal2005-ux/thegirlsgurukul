import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, AlertCircle, Mic, MicOff, Volume2, VolumeX, Map, X } from "lucide-react";
import { useLocation } from "wouter";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
  isTour?: boolean;
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

const TOUR_STEPS = [
  {
    path: "/",
    label: "Home",
    text: "Welcome to The Girls Gurukul! This is our Home page. Here you can see school highlights, key statistics, principal message, achievements, and student testimonials.",
  },
  {
    path: "/about",
    label: "About Us",
    text: "This is the About page. Learn about our school history, mission, vision, core values, infrastructure, and meet our management team.",
  },
  {
    path: "/admissions",
    label: "Admissions",
    text: "This is the Admissions page. Find the step by step admission process, eligibility criteria for each class, required documents, important dates, and submit your enquiry here.",
  },
  {
    path: "/academics",
    label: "Academics",
    text: "On the Academics page, explore our complete curriculum from Nursery to Class 12, including Science with PCM and PCB, and Commerce stream.",
  },
  {
    path: "/faculty",
    label: "Faculty",
    text: "This is our Faculty page. Meet our experienced and qualified teachers who are dedicated to guiding every student towards excellence.",
  },
  {
    path: "/gallery",
    label: "Gallery",
    text: "This is our Gallery page. Browse photos of campus life, sports events, cultural programs, and student achievements.",
  },
  {
    path: "/fee-structure",
    label: "Fee Structure",
    text: "This is the Fee Structure page with complete and transparent fee details for all classes.",
  },
  {
    path: "/news-events",
    label: "News and Events",
    text: "Stay updated on the News and Events page with the latest school news, upcoming programs, and recent achievements.",
  },
  {
    path: "/contact",
    label: "Contact",
    text: "Finally, this is our Contact page. Reach us by phone, email, WhatsApp, or fill the contact form directly. We are open Monday to Saturday.",
  },
];

const WELCOME: ChatMessage = {
  id: 0,
  from: "bot",
  text: "Namaste! 🙏 I'm the Girls Gurukul AI Assistant.\n\nI can help you with admissions, fees, timings, facilities and more — or take you on a guided website tour!",
  quickReplies: ["🗺️ Website Tour", ...QUICK_TOPICS.slice(0, 4)],
};

let msgId = 1;

interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((event: Event) => void) | null;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

export default function ChatBot() {
  const [, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [tourStep, setTourStep] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tourActiveRef = useRef(false);

  const isTourActive = tourStep >= 0;

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

  useEffect(() => {
    if (!open) { audioRef.current?.pause(); setSpeaking(false); }
  }, [open]);

  // Returns a promise that resolves when speech finishes
  const speak = useCallback((text: string): Promise<void> => {
    if (!voiceEnabled) return Promise.resolve();

    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setSpeaking(false);

    const clean = text
      .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}]/gu, "")
      .replace(/[*_~`#]/g, "")
      .replace(/\+91[-\s]?[\dX\-]+/g, "")
      .replace(/[-]{2,}/g, " ")
      .replace(/\n{2,}/g, ". ")
      .replace(/\n/g, ", ")
      .replace(/\s{2,}/g, " ")
      .trim();
    if (!clean) return Promise.resolve();

    return new Promise((resolve) => {
      fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clean }),
      })
        .then((res) => (res.ok ? res.blob() : null))
        .then((blob) => {
          if (!blob) { resolve(); return; }
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          audioRef.current = audio;
          audio.onplay = () => setSpeaking(true);
          audio.onended = () => { setSpeaking(false); URL.revokeObjectURL(url); resolve(); };
          audio.onerror = () => { setSpeaking(false); URL.revokeObjectURL(url); resolve(); };
          audio.play().catch(() => resolve());
        })
        .catch(() => { setSpeaking(false); resolve(); });
    });
  }, [voiceEnabled]);

  const stopTour = useCallback(() => {
    tourActiveRef.current = false;
    setTourStep(-1);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    setSpeaking(false);
    setMessages((prev) => [
      ...prev,
      {
        id: msgId++,
        from: "bot",
        text: "Tour stopped. Feel free to ask me anything about the school!",
        quickReplies: QUICK_TOPICS.slice(0, 4),
      },
    ]);
  }, []);

  const startTour = useCallback(async () => {
    setOpen(true);
    tourActiveRef.current = true;

    setMessages((prev) => [
      ...prev,
      {
        id: msgId++,
        from: "bot",
        text: "🗺️ Starting the website tour! I'll take you through all pages one by one. You can stop anytime.",
        isTour: true,
      },
    ]);

    await speak("Starting the website tour. I will take you through all pages one by one.");

    for (let i = 0; i < TOUR_STEPS.length; i++) {
      if (!tourActiveRef.current) break;

      const step = TOUR_STEPS[i];
      setTourStep(i);
      setLocation(step.path);
      window.scrollTo({ top: 0, behavior: "smooth" });

      setMessages((prev) => [
        ...prev,
        {
          id: msgId++,
          from: "bot",
          text: `📍 ${step.label}\n${step.text}`,
          isTour: true,
        },
      ]);

      await speak(step.text);

      if (tourActiveRef.current && i < TOUR_STEPS.length - 1) {
        await new Promise((r) => setTimeout(r, 800));
      }
    }

    if (tourActiveRef.current) {
      setTourStep(-1);
      tourActiveRef.current = false;
      setMessages((prev) => [
        ...prev,
        {
          id: msgId++,
          from: "bot",
          text: "✅ Tour complete! You've seen all pages of The Girls Gurukul website. What would you like to know more about?",
          quickReplies: QUICK_TOPICS.slice(0, 4),
        },
      ]);
      await speak("Tour complete! You have seen all pages of the website. Feel free to ask me anything.");
    }

    tourActiveRef.current = false;
    setTourStep(-1);
  }, [speak, setLocation]);

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

    // Handle tour trigger
    if (text === "🗺️ Website Tour") {
      startTour();
      return;
    }

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
        text: "Sorry, I'm having trouble connecting right now. Please try again or call us. 🙏",
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
                  {isTourActive ? (
                    <>
                      <Map size={10} className="text-yellow-300" />
                      <span className="text-yellow-300 font-semibold">
                        Tour: {TOUR_STEPS[tourStep]?.label} ({tourStep + 1}/{TOUR_STEPS.length})
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                      Powered by AI — Ask me anything!
                    </>
                  )}
                </p>
              </div>

              {isTourActive ? (
                <button
                  onClick={stopTour}
                  title="Stop Tour"
                  className="text-red-300 hover:text-red-200 transition-colors flex-shrink-0 mr-1"
                >
                  <X size={18} />
                </button>
              ) : (
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
              )}

              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors flex-shrink-0">
                <ChevronDown size={22} />
              </button>
            </div>

            {/* Tour progress bar */}
            {isTourActive && (
              <div className="h-1 bg-white/20 flex-shrink-0">
                <div
                  className="h-full bg-yellow-400 transition-all duration-700"
                  style={{ width: `${((tourStep + 1) / TOUR_STEPS.length) * 100}%` }}
                />
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "bot" && (
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1 shadow-sm overflow-hidden ${msg.isTour ? "bg-yellow-100" : "bg-white"}`}>
                      {msg.isTour
                        ? <Map size={14} className="text-[#1a5c2e]" />
                        : <img src="/images/chatbot-robot.png" alt="AI" className="w-full h-full object-contain" />
                      }
                    </div>
                  )}
                  <div className="max-w-[85%]">
                    <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.from === "user"
                        ? "bg-[#1a5c2e] text-white rounded-br-sm"
                        : msg.isTour
                          ? "bg-yellow-50 text-gray-800 rounded-bl-sm border border-yellow-200"
                          : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
                    }`}>
                      {msg.text}
                    </div>
                    {msg.quickReplies && msg.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.quickReplies.map((qr) => (
                          <button
                            key={qr}
                            onClick={() => qr === "🗺️ Website Tour" ? startTour() : sendMessage(qr)}
                            disabled={loading || isTourActive}
                            className={`text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm transition-all disabled:opacity-50 ${
                              qr === "🗺️ Website Tour"
                                ? "bg-yellow-400 text-[#1a5c2e] hover:bg-yellow-500 border border-yellow-500"
                                : "bg-white border border-[#1a5c2e]/30 text-[#1a5c2e] hover:bg-[#1a5c2e] hover:text-white"
                            }`}
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
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1 overflow-hidden bg-white shadow-sm">
                    <img src="/images/chatbot-robot.png" alt="AI" className="w-full h-full object-contain" />
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
              {isTourActive ? (
                <button
                  onClick={stopTour}
                  className="flex-1 bg-red-50 border border-red-200 text-red-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                >
                  <X size={14} /> Stop Tour
                </button>
              ) : (
                <>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !loading) sendMessage(input); }}
                    placeholder={listening ? "Listening… speak now 🎙️" : "Type or speak your question…"}
                    disabled={loading}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c2e] transition-colors disabled:opacity-60"
                  />
                  <button
                    onClick={startListening}
                    disabled={loading}
                    title={listening ? "Stop listening" : "Speak your question"}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40 ${
                      listening ? "bg-red-500 animate-pulse" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {listening
                      ? <MicOff className="text-white w-4 h-4" />
                      : <Mic className="text-gray-600 w-4 h-4" />
                    }
                  </button>
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || loading}
                    className="w-10 h-10 bg-[#1a5c2e] rounded-xl flex items-center justify-center hover:bg-[#1a5c2e]/90 transition-colors disabled:opacity-40 flex-shrink-0"
                  >
                    <Send className="text-white w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
