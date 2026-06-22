import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, Mail, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const departments = ["All", "Science", "Mathematics", "Languages", "Social Studies", "Arts & Sports", "Primary", "Admin"];

const faculty = [
  { name: "Bharat", role: "PGT Physics", dept: "Science", img: "/images/staff-group-1.png", pos: "10% 25%" },
  { name: "Satish", role: "PGT Geography", dept: "Social Studies", img: "/images/staff-group-1.png", pos: "50% 25%" },
  { name: "Jangeer Singh", role: "PGT Hindi", dept: "Languages", img: "/images/staff-group-1.png", pos: "90% 25%" },
  { name: "Nisha Atri", role: "PGT Mathematics", dept: "Mathematics", img: "/images/staff-group-2.png", pos: "10% 25%" },
  { name: "Kajal", role: "PGT Chemistry", dept: "Science", img: "/images/staff-group-2.png", pos: "50% 25%" },
  { name: "Ritu", role: "PGT Biology", dept: "Science", img: "/images/staff-group-2.png", pos: "90% 25%" },
  { name: "Jyoti", role: "PRT", dept: "Primary", img: "/images/staff-group-3.png", pos: "10% 25%" },
  { name: "Priyanka", role: "Receptionist", dept: "Admin", img: "/images/staff-group-3.png", pos: "50% 25%" },
  { name: "Tannu", role: "Dance Teacher", dept: "Arts & Sports", img: "/images/staff-group-3.png", pos: "90% 25%" },
  { name: "Monika", role: "PTI", dept: "Arts & Sports", img: "/images/staff-group-4.png", pos: "10% 25%" },
  { name: "Tannu", role: "PGT Political Science", dept: "Social Studies", img: "/images/staff-group-4.png", pos: "50% 25%" },
  { name: "Shweta", role: "PRT", dept: "Primary", img: "/images/staff-group-4.png", pos: "90% 25%" },
  { name: "Mamta", role: "PRT", dept: "Primary", img: "/images/staff-group-5.png", pos: "10% 25%" },
  { name: "Ruma Rana", role: "PRT", dept: "Primary", img: "/images/staff-group-5.png", pos: "50% 25%" },
  { name: "Neha Rana", role: "PRT", dept: "Primary", img: "/images/staff-group-5.png", pos: "90% 25%" },
];

export default function Faculty() {
  useEffect(() => { document.title = "Faculty – The Girls Gurukul, Kalayat"; }, []);
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = faculty.filter((f) => {
    const matchesDept = dept === "All" || f.dept === dept;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.role.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Our Team</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Meet Our Faculty</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Dedicated, qualified and passionate educators committed to every student's success.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">Faculty</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ val: "65+", label: "Faculty Members" }, { val: "100%", label: "Postgraduates" }, { val: "12+", label: "Avg Experience (Yrs)" }, { val: "B.Ed.", label: "All Teachers Trained" }].map(({ val, label }) => (
              <div key={label}>
                <p className="font-serif font-bold text-3xl text-[#1a5c2e]">{val}</p>
                <p className="text-[#1a5c2e]/80 font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Leadership" title="School Leadership" subtitle="Experienced leaders guiding our school towards excellence and innovation." />
          <div className="max-w-sm mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 flex gap-5 items-start border border-gray-100 card-hover hover:shadow-xl transition-all">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                <img src="/images/principal-photo.webp" alt="Principal" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#1a5c2e] text-lg">Principal</h3>
                <p className="text-gray-500 font-semibold text-sm mb-1">The Girls Gurukul, Kalayat</p>
                <span className="bg-[#1a5c2e]/10 text-[#1a5c2e] text-xs px-2 py-0.5 rounded-full">School Leadership</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FACULTY DIRECTORY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Faculty Directory" title="All Teaching Staff" subtitle="Browse our complete faculty list by department." />

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, subject..."
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a5c2e] bg-white"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {departments.map((d) => (
                <button key={d} onClick={() => setDept(d)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${d === dept ? "bg-[#1a5c2e] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a5c2e]"}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {filtered.map(({ name, role, img, pos, dept: d }, i) => (
              <motion.div key={`${name}-${i}`} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 border border-gray-100 card-hover hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-3 shadow-sm">
                  <img src={img} alt={name} className="w-full h-full" style={{ objectFit: "cover", objectPosition: pos }} />
                </div>
                <h3 className="font-serif font-bold text-[#1a5c2e] text-sm">{name}</h3>
                <p className="text-gray-500 text-xs font-semibold mt-0.5">{role}</p>
                <span className="inline-block bg-[#1a5c2e]/10 text-[#1a5c2e] text-xs px-2 py-0.5 rounded-full mt-1.5">{d}</span>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No faculty found matching your search.</p>
              <button onClick={() => { setSearch(""); setDept("All"); }} className="text-[#ffffff] text-sm mt-2 underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* TEACHING PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Our Approach" title="Teaching Philosophy" subtitle="We believe in a student-centred approach that nurtures curiosity, critical thinking and character." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🎯", title: "Student-Centred Learning", desc: "Every lesson is designed keeping individual student's pace, learning style and potential in mind. No student is left behind." },
              { icon: "🔬", title: "Inquiry-Based Education", desc: "We encourage students to ask questions, explore concepts and discover answers through hands-on experiments and activities." },
              { icon: "🌱", title: "Holistic Development", desc: "Beyond academics, we focus on emotional intelligence, social skills, physical fitness and moral values." },
              { icon: "💬", title: "Open Communication", desc: "Teachers maintain open, respectful communication with students and parents to ensure transparency and trust." },
              { icon: "🏆", title: "Excellence & Accountability", desc: "High expectations for both teachers and students, with regular self-assessment and accountability mechanisms." },
              { icon: "🤝", title: "Collaborative Spirit", desc: "Team teaching, peer learning and collaborative projects prepare students for real-world teamwork." },
            ].map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all card-hover">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-serif font-bold text-[#1a5c2e] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL DEVELOPMENT */}
      <section className="py-20 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Growth" title="Professional Development" subtitle="Our faculty continuously upgrades their skills through workshops, training and research." light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📚", title: "Annual Training Workshop", desc: "3-day workshop every summer on pedagogy, technology and student counselling." },
              { icon: "🖥️", title: "Digital Teaching Tools", desc: "All teachers trained in smart board technology, e-learning platforms and digital assessment." },
              { icon: "🎓", title: "Higher Education Support", desc: "School supports teachers pursuing M.Ed., Ph.D. and specialised certifications." },
              { icon: "🌐", title: "CBSE Orientation Programs", desc: "Regular participation in CBSE-organised Sahodaya cluster workshops and seminars." },
            ].map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-serif font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* JOIN CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a5c2e] to-[#1a5c2e]/80">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif font-bold text-3xl text-white mb-3">Join Our Teaching Family</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">We are always looking for passionate, qualified educators. Send your CV to us.</p>
            <a href="mailto:careers@girlsgurukul.edu.in">
              <button className="bg-[#ffffff] text-[#1a5c2e] font-bold px-8 py-3 rounded-full hover:bg-[#ffffff]/90 transition-colors">
                Send Your Application →
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
