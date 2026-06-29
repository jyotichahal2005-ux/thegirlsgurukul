import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, ChevronDown } from "lucide-react";

interface Message {
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

function getBotReply(input: string): { text: string; quickReplies?: string[] } {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("namaste") || msg.includes("helo")) {
    return {
      text: "Namaste! 🙏 Welcome to The Girls Gurukul, Kalayat. I'm here to help you with admissions, fees, timings, and more. What would you like to know?",
      quickReplies: QUICK_TOPICS,
    };
  }

  if (msg.includes("admission") || msg.includes("apply") || msg.includes("enroll") || msg.includes("dakhila")) {
    return {
      text: "📋 Admissions are open for 2026-27!\n\n✅ Classes: Nursery to Class XII\n✅ CBSE Affiliated\n\nProcess:\n1. Collect / download admission form\n2. Fill and submit with documents\n3. Entrance test (Class VI onwards)\n4. Pay fee and confirm admission\n\nFor more info, visit our Admissions page or call +91-1742-271XXX.",
      quickReplies: ["Documents Required", "Eligibility Criteria", "Fee Structure", "Contact Info"],
    };
  }

  if (msg.includes("eligib") || msg.includes("age") || msg.includes("criteria")) {
    return {
      text: "📚 Eligibility by Class:\n\n• Nursery/LKG: 3–4 years\n• Class I–V: 6–11 years (TC required)\n• Class VI–VIII: 11–14 years (Entrance test)\n• Class IX: 14–15 years (Min 50% in Class VIII)\n• Class XI Science: Min 60% in Class X\n• Class XI Commerce: Min 50% in Class X",
      quickReplies: ["Documents Required", "Admission Process", "Fee Structure"],
    };
  }

  if (msg.includes("document") || msg.includes("kagaz") || msg.includes("required")) {
    return {
      text: "📁 Documents Required for Admission:\n\n• Birth Certificate\n• Aadhaar Card (student + parents)\n• Transfer Certificate (TC)\n• Previous class marksheet\n• 4 passport-size photographs\n• Residence proof\n• Caste certificate (if applicable)\n• Income certificate (for scholarship)",
      quickReplies: ["Admission Process", "Fee Structure", "Contact Info"],
    };
  }

  if (msg.includes("fee") || msg.includes("faida") || msg.includes("payment") || msg.includes("cost") || msg.includes("kitna") || msg.includes("charge")) {
    return {
      text: "💰 Fee Structure Overview:\n\n• Admission Fee: One-time at the time of joining\n• Tuition Fee: Monthly / Quarterly\n• Annual charges: Exam, Sports, Library, Misc.\n\nFee is payable by:\n💵 Cash at school office\n📱 UPI / Online transfer\n\nFor exact class-wise fees, please visit our Fee Structure page or contact the school office.",
      quickReplies: ["Contact Info", "Admission Process", "School Timing"],
    };
  }

  if (msg.includes("timing") || msg.includes("time") || msg.includes("hour") || msg.includes("samay") || msg.includes("schedule")) {
    return {
      text: "🕗 School Timings:\n\n🌅 School Hours: 8:00 AM – 2:30 PM\n🏢 Office Hours: 9:00 AM – 4:00 PM\n📅 Days: Monday to Saturday\n\n🚌 School bus facility available for nearby villages.\n\nFor holiday schedule, check our Documents page.",
      quickReplies: ["Contact Info", "Facilities", "Courses Offered"],
    };
  }

  if (msg.includes("contact") || msg.includes("phone") || msg.includes("address") || msg.includes("location") || msg.includes("where") || msg.includes("kahan")) {
    return {
      text: "📍 Contact Information:\n\n🏫 The Girls Gurukul\nKalayat, Kaithal District\nHaryana – 136027\n\n📞 Phone: +91-1742-271XXX\n📧 Email: info@girlsgurukul.edu.in\n\n🕐 Office Hours: Mon–Sat, 9 AM – 4 PM\n\nYou can also fill the Contact form on our website!",
      quickReplies: ["School Timing", "Admission Process", "Facilities"],
    };
  }

  if (msg.includes("course") || msg.includes("stream") || msg.includes("subject") || msg.includes("class") || msg.includes("विषय")) {
    return {
      text: "📚 Courses & Streams Offered:\n\n🔹 Pre-Primary: Nursery, LKG, UKG\n🔹 Primary: Class I – V\n🔹 Middle: Class VI – VIII\n🔹 Secondary: Class IX – X (CBSE)\n🔹 Sr. Secondary:\n   • Science (PCM / PCB)\n   • Commerce (with Maths)\n\nAll CBSE aligned curriculum.",
      quickReplies: ["Admission Process", "Fee Structure", "Facilities"],
    };
  }

  if (msg.includes("facilit") || msg.includes("lab") || msg.includes("library") || msg.includes("sport") || msg.includes("khel") || msg.includes("infrastructure")) {
    return {
      text: "🏫 World-Class Facilities:\n\n🔬 Physics, Chemistry & Biology Labs\n💻 Computer Lab (100+ systems)\n📚 Library (15,000+ books)\n🏹 Archery Range\n⚽ Multi-Sports Ground\n🎨 Art Studio & Music Room\n🍽️ Hygienic Cafeteria\n🖥️ Smart Classrooms\n🚌 School Bus Service",
      quickReplies: ["Courses Offered", "School Timing", "Contact Info"],
    };
  }

  if (msg.includes("result") || msg.includes("board") || msg.includes("pass") || msg.includes("cbse")) {
    return {
      text: "🏆 Academic Results:\n\n✅ 100% pass rate in CBSE Board exams (10 consecutive years)\n🥇 District Topper in Kaithal – 2024\n🎖️ Best Girls School award – Haryana Govt 2023\n\nOur students have gone on to top colleges across India!",
      quickReplies: ["Courses Offered", "Admission Process", "Facilities"],
    };
  }

  if (msg.includes("principal") || msg.includes("teacher") || msg.includes("faculty") || msg.includes("staff")) {
    return {
      text: "👩‍🏫 Our Faculty:\n\n• Experienced and highly qualified teaching staff\n• All teachers B.Ed. trained\n• 12+ years average experience\n• Departments: Science, Maths, Languages, Social Studies, Arts, Sports\n\nVisit our Faculty page to meet the team!",
      quickReplies: ["Courses Offered", "Facilities", "Contact Info"],
    };
  }

  if (msg.includes("transport") || msg.includes("bus") || msg.includes("pick") || msg.includes("drop")) {
    return {
      text: "🚌 Transport Facility:\n\nSchool bus service is available for students from nearby villages and areas.\n\nFor bus routes and timings, please contact the school office:\n📞 +91-1742-271XXX",
      quickReplies: ["School Timing", "Contact Info", "Fee Structure"],
    };
  }

  if (msg.includes("uniform") || msg.includes("dress")) {
    return {
      text: "👗 School Uniform:\n\nThe school has a prescribed uniform for all students. Details about the uniform are provided at the time of admission confirmation.\n\nFor more info, contact the school office:\n📞 +91-1742-271XXX",
      quickReplies: ["Admission Process", "Contact Info"],
    };
  }

  if (msg.includes("scholarship") || msg.includes("concession") || msg.includes("discount") || msg.includes("छात्रव")) {
    return {
      text: "🎓 Scholarships & Fee Concessions:\n\n• Sibling Discount: 10% on 2nd child\n• Merit Scholarship: Top performers\n• SC/ST Concession: As per Govt norms\n• Single Parent: Special consideration\n• Sports Excellence: Fee waiver available\n\nFor details, visit our Fee Structure page.",
      quickReplies: ["Fee Structure", "Admission Process", "Contact Info"],
    };
  }

  if (msg.includes("thank") || msg.includes("shukriya") || msg.includes("dhanyawad") || msg.includes("ok") || msg.includes("okay") || msg.includes("great") || msg.includes("good")) {
    return {
      text: "You're welcome! 😊 Is there anything else I can help you with? Feel free to ask anytime!\n\nFor any other queries, call us at +91-1742-271XXX or visit the school.",
      quickReplies: QUICK_TOPICS.slice(0, 4),
    };
  }

  return {
    text: "I'm not sure I understood that. 😊 Here are some topics I can help you with:",
    quickReplies: QUICK_TOPICS,
  };
}

const WELCOME: Message = {
  id: 0,
  from: "bot",
  text: "Namaste! 🙏 I'm the Girls Gurukul Assistant.\n\nI can help you with admissions, fees, timings, and more. What would you like to know?",
  quickReplies: QUICK_TOPICS,
};

let msgId = 1;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: msgId++, from: "user", text: text.trim() };
    const reply = getBotReply(text.trim());
    const botMsg: Message = { id: msgId++, from: "bot", ...reply };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
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
              className="w-14 h-14 bg-[#1a5c2e] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative"
              title="Chat with us"
            >
              <Bot className="text-white w-7 h-7" />
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
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="text-white w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Gurukul Assistant</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Online – Ask me anything!
                </p>
              </div>
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
                          <button key={qr} onClick={() => sendMessage(qr)}
                            className="text-xs bg-white border border-[#1a5c2e]/30 text-[#1a5c2e] px-3 py-1.5 rounded-full hover:bg-[#1a5c2e] hover:text-white transition-all font-semibold shadow-sm">
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="bg-white border-t border-gray-100 px-3 py-3 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }}
                placeholder="Type your question…"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a5c2e] transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
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
