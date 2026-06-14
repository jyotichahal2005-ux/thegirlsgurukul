import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Clock, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const newsCategories = ["All", "Academic", "Sports", "Cultural", "Admissions", "Achievements", "School Life"];

const allNews = [
  { id: 1, date: "June 10, 2025", category: "Academic", title: "Annual Prize Distribution Ceremony 2025", desc: "The school celebrated its Annual Prize Distribution Ceremony with great pomp. Over 150 students were awarded for academic, sports and cultural excellence. Chief Guest was Dr. Ramesh Gupta, IAS.", img: "/images/gallery-annual-function.png", featured: true },
  { id: 2, date: "May 28, 2025", category: "Sports", title: "Students Win 8 Gold Medals at District Athletics Meet", desc: "Our athletes brought glory to the school by winning 8 gold medals at the District Level Athletics Meet 2025 held at Kaithal.", img: "/images/gallery-sports-day.png", featured: true },
  { id: 3, date: "May 20, 2025", category: "Academic", title: "Class XII Students Score 100% in Board Results", desc: "The Girls Gurukul achieved 100% results in CBSE Class XII Board Examination 2025. Three students scored above 95% marks.", img: "/images/gallery-science-fair.png", featured: false },
  { id: 4, date: "May 15, 2025", category: "Admissions", title: "Admissions Open for Academic Year 2025-26", desc: "Enroll your daughter for the academic year 2025-26. Classes available from Nursery to Class XII. Limited seats. Apply early.", img: "/images/hero-bg.png", featured: false },
  { id: 5, date: "April 30, 2025", category: "Cultural", title: "Students Win at State Folk Dance Competition", desc: "Our students won the Gold Award at the State Level Folk Dance Competition organised by Haryana Kala Parishad.", img: "/images/gallery-annual-function.png", featured: false },
  { id: 6, date: "April 20, 2025", category: "Achievements", title: "School Receives Best Girls School Award 2025", desc: "The Girls Gurukul was honoured with the Best Girls School Award by Haryana Education Department for outstanding academic results.", img: "/images/campus-aerial.png", featured: false },
  { id: 7, date: "April 10, 2025", category: "School Life", title: "New Smart Classrooms Inaugurated", desc: "10 new smart classrooms equipped with interactive whiteboards and high-speed internet were inaugurated by the Chairman.", img: "/images/gallery-science-fair.png", featured: false },
  { id: 8, date: "March 25, 2025", category: "Academic", title: "Science Exhibition Showcases Student Innovation", desc: "Over 80 students presented innovative science projects at the annual science exhibition. Three projects were selected for national level.", img: "/images/gallery-science-fair.png", featured: false },
  { id: 9, date: "March 10, 2025", category: "Sports", title: "Kabaddi Team Wins State Championship", desc: "Our Kabaddi team defeated 12 teams to win the Haryana State School Kabaddi Championship 2025.", img: "/images/gallery-sports-day.png", featured: false },
];

const upcomingEvents = [
  { date: { day: "25", month: "Jun", year: "2025" }, title: "Parent-Teacher Meeting", time: "9:00 AM – 12:00 PM", venue: "School Auditorium", category: "Academic", icon: "👨‍👩‍👧", desc: "Quarterly PTM for Classes I to XII. Parents are requested to be punctual." },
  { date: { day: "15", month: "Jul", year: "2025" }, title: "Independence Day Celebration", time: "8:00 AM – 11:00 AM", venue: "School Ground", category: "Cultural", icon: "🇮🇳", desc: "Flag hoisting ceremony, cultural performances and march past." },
  { date: { day: "05", month: "Aug", year: "2025" }, title: "Inter-School Science Exhibition", time: "10:00 AM – 4:00 PM", venue: "Science Block", category: "Academic", icon: "🔬", desc: "Annual science exhibition open to schools from Kaithal district." },
  { date: { day: "20", month: "Aug", year: "2025" }, title: "Annual Sports Day", time: "8:00 AM – 2:00 PM", venue: "School Ground", category: "Sports", icon: "⚽", desc: "Athletics, relay races, yoga demonstration and sports awards." },
  { date: { day: "05", month: "Sep", year: "2025" }, title: "Teachers' Day Celebration", time: "10:00 AM – 12:00 PM", venue: "School Auditorium", category: "Cultural", icon: "🎓", desc: "Students honour teachers with special performances and felicitation." },
  { date: { day: "02", month: "Oct", year: "2025" }, title: "Gandhi Jayanti Program", time: "9:00 AM – 11:00 AM", venue: "School Ground", category: "Cultural", icon: "🪷", desc: "Cleanliness drive, essay competition and inspirational talks." },
];

const pastEvents = [
  { month: "May 2025", title: "Annual Examination", category: "Academic" },
  { month: "April 2025", title: "Earth Day Plantation Drive", category: "Cultural" },
  { month: "March 2025", title: "Holi Milan Samaroh", category: "Cultural" },
  { month: "February 2025", title: "Republic Day Celebration", category: "Cultural" },
  { month: "January 2025", title: "Annual Sports Meet 2025", category: "Sports" },
  { month: "December 2024", title: "Christmas & New Year Cultural Night", category: "Cultural" },
];

const categoryColors: Record<string, string> = {
  Academic: "bg-blue-100 text-blue-700",
  Sports: "bg-green-100 text-green-700",
  Cultural: "bg-purple-100 text-purple-700",
  Admissions: "bg-amber-100 text-amber-700",
  Achievements: "bg-red-100 text-red-700",
  "School Life": "bg-cyan-100 text-cyan-700",
};

export default function NewsEvents() {
  useEffect(() => { document.title = "News & Events – The Girls Gurukul, Kalayat"; }, []);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = allNews.filter((n) => activeCategory === "All" || n.category === activeCategory);
  const featuredNews = allNews.filter((n) => n.featured);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Stay Updated</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">News & Events</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Stay informed with the latest news, upcoming events and achievements from The Girls Gurukul.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">News & Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Featured" title="Top Stories" subtitle="The most important recent news and highlights from our school." />
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map(({ id, date, category, title, desc, img }, i) => (
              <motion.div key={id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all card-hover border border-gray-100 group">
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a5c2e]/60 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-700"}`}>{category}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs flex items-center gap-1 mb-2"><Calendar size={11} /> {date}</p>
                  <h3 className="font-serif font-bold text-[#1a5c2e] text-xl mb-2 group-hover:text-[#ffffff] transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  <button className="mt-4 text-[#1a5c2e] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL NEWS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="All News" title="Latest From Our School" subtitle="Browse all news articles by category." />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {newsCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${cat === activeCategory ? "bg-[#1a5c2e] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a5c2e]"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(({ id, date, category, title, desc, img }, i) => (
              <motion.div key={id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all card-hover border border-gray-100 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-700"}`}>{category}</span>
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-xs flex items-center gap-1 mb-2"><Calendar size={10} /> {date}</p>
                  <h3 className="font-serif font-bold text-[#1a5c2e] mb-2 text-sm leading-snug group-hover:text-[#ffffff] transition-colors">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{desc}</p>
                  <button className="mt-3 text-[#1a5c2e] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Events Calendar" title="Upcoming Events" subtitle="Mark your calendars for these exciting upcoming events and activities." light />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingEvents.map(({ date, title, time, venue, category, icon, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-transform">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#ffffff] rounded-xl flex flex-col items-center justify-center text-[#1a5c2e]">
                    <span className="font-bold text-xl leading-none">{date.day}</span>
                    <span className="text-xs font-semibold uppercase leading-none">{date.month}</span>
                  </div>
                  <div>
                    <div className="text-lg mb-1">{icon}</div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-700"}`}>{category}</span>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-xs mb-3 leading-relaxed">{desc}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Clock size={11} className="text-[#ffffff]" /> {time}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <MapPin size={11} className="text-[#ffffff]" /> {venue}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Archive" title="Past Events" subtitle="A look back at the wonderful events and programs we have celebrated." />
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#ffffff]/30" />
              {pastEvents.map(({ month, title, category }, i) => (
                <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="relative mb-5 bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-[#ffffff]/30 hover:shadow-sm transition-all">
                  <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#ffffff] rounded-full border-2 border-white shadow" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#ffffff] text-xs font-bold mb-0.5">{month}</p>
                      <h4 className="font-serif font-semibold text-[#1a5c2e] text-sm">{title}</h4>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[category] || "bg-gray-100"}`}>{category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
