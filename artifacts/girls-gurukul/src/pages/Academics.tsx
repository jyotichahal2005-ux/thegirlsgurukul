import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Star, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const programs = [
  {
    level: "Pre-Primary", classes: "Nursery – UKG", icon: "🌱", color: "bg-pink-50 border-pink-200",
    desc: "Play-based learning that nurtures curiosity, creativity and foundational skills.",
    subjects: ["English", "Hindi", "Mathematics", "Environmental Science", "Art & Craft", "Music & Dance", "Physical Education"],
  },
  {
    level: "Primary", classes: "Class I – V", icon: "🌿", color: "bg-green-50 border-green-200",
    desc: "Strong foundational education with emphasis on reading, writing and mathematical thinking.",
    subjects: ["English", "Hindi", "Mathematics", "Environmental Science", "Computer Science", "General Knowledge", "Art", "P.E."],
  },
  {
    level: "Middle School", classes: "Class VI – VIII", icon: "🌳", color: "bg-blue-50 border-blue-200",
    desc: "Expanding horizons with introduction to Science, Social Science and languages.",
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer", "Art", "P.E."],
  },
  {
    level: "Secondary", classes: "Class IX – X", icon: "🎓", color: "bg-purple-50 border-purple-200",
    desc: "CBSE board preparation with comprehensive subject coverage and exam excellence.",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT/Computer", "Sanskrit (optional)"],
  },
  {
    level: "Sr. Secondary – Science", classes: "Class XI – XII", icon: "🔬", color: "bg-amber-50 border-amber-200",
    desc: "Rigorous science curriculum preparing students for JEE, NEET and other competitive exams.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Physical Education / Computer"],
  },
  {
    level: "Sr. Secondary – Commerce", classes: "Class XI – XII", icon: "📊", color: "bg-cyan-50 border-cyan-200",
    desc: "Commerce curriculum for aspiring business leaders, CA aspirants and management students.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Informatics Practices"],
  },
];

const coActivities = [
  { icon: "🎭", title: "Drama & Theatre", desc: "Annual plays, skits and drama competitions fostering confidence and expression." },
  { icon: "🎵", title: "Music & Dance", desc: "Classical and folk music, Bharatanatyam, folk dance and western dance classes." },
  { icon: "🎨", title: "Fine Arts", desc: "Painting, sketching, pottery and craft workshops led by professional artists." },
  { icon: "⚽", title: "Sports", desc: "Kabaddi, volleyball, athletics, badminton, kho-kho and yoga training." },
  { icon: "🌍", title: "Eco Club", desc: "Environment awareness programs, tree plantation drives and nature education." },
  { icon: "🧹", title: "Swachh Bharat Club", desc: "Cleanliness drives and social responsibility initiatives aligned with national missions." },
  { icon: "📸", title: "Photography Club", desc: "Learn photography, videography and digital media production skills." },
  { icon: "🤖", title: "Science & Robotics", desc: "Innovation labs, science projects, robotics workshops and STEM challenges." },
];

const achievements = [
  { stat: "100%", label: "Board Pass Rate", sub: "10 consecutive years" },
  { stat: "95%+", label: "Average Score", sub: "Class XII Science 2024" },
  { stat: "50+", label: "Board Toppers", sub: "District level since 2010" },
  { stat: "200+", label: "Competitive Selections", sub: "JEE, NEET, NDA etc." },
];

const teaching = [
  { title: "Experienced Faculty", desc: "All teachers are postgraduates in their subjects with B.Ed./M.Ed. qualifications." },
  { title: "Personalized Attention", desc: "Low student-to-teacher ratio ensures every student gets individual guidance." },
  { title: "Smart Classrooms", desc: "Interactive whiteboards, projectors and digital content for engaging lessons." },
  { title: "Remedial Classes", desc: "Extra support for students needing additional help in any subject." },
  { title: "Doubt Sessions", desc: "Daily doubt-clearing sessions and one-on-one mentoring available." },
  { title: "Mock Tests", desc: "Regular tests, unit tests and mock board exams for continuous assessment." },
];

export default function Academics() {
  useEffect(() => { document.title = "Academics – The Girls Gurukul, Kalayat"; }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Curriculum</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Academics</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">World-class CBSE curriculum designed for holistic excellence — from Nursery to Class XII.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">Academics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS STRIP */}
      <section className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map(({ stat, label, sub }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-serif font-bold text-3xl md:text-4xl text-[#1a5c2e]">{stat}</p>
                <p className="text-[#1a5c2e] font-bold text-sm">{label}</p>
                <p className="text-[#1a5c2e]/60 text-xs">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Programs Offered" title="Academic Programs" subtitle="Comprehensive education across all levels — tailored for every stage of a student's growth." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(({ level, classes, icon, color, desc, subjects }, i) => (
              <motion.div key={level} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl p-6 border ${color} card-hover hover:shadow-lg transition-all`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-[#1a5c2e]">{level}</h3>
                    <span className="text-xs text-gray-500 font-medium">{classes}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {subjects.map((s) => (
                    <span key={s} className="bg-white/70 border border-white text-gray-600 text-xs px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING METHODOLOGY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Teaching Excellence" title="Our Teaching Approach" subtitle="Modern pedagogy combined with personal attention for the best learning outcomes." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teaching.map(({ title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all card-hover">
                <div className="flex-shrink-0 w-10 h-10 bg-[#ffffff]/15 rounded-xl flex items-center justify-center">
                  <CheckCircle size={18} className="text-[#ffffff]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#1a5c2e] mb-1 text-sm">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CO-CURRICULAR */}
      <section className="py-20 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Beyond Academics" title="Co-Curricular Activities" subtitle="Developing well-rounded personalities through sports, arts, culture and community." light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {coActivities.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-serif font-bold text-white text-sm mb-1">{title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAM PREP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Competitive Exams" title="Exam Preparation & Guidance" subtitle="Our students consistently excel in national level competitive examinations." />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { exam: "JEE Main & Advanced", icon: "⚙️", desc: "Special coaching batches for Class XI-XII Science students targeting IITs and NITs." },
              { exam: "NEET-UG", icon: "🏥", desc: "Biology-focused preparation program with mock tests and expert mentoring." },
              { exam: "NDA / CDS / SSC", icon: "🎖️", desc: "Defence and government service exam preparation with physical and written training." },
            ].map(({ exam, icon, desc }, i) => (
              <motion.div key={exam} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center card-hover hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif font-bold text-[#1a5c2e] mb-2">{exam}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
