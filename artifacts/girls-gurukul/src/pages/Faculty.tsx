import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, Mail, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const departments = ["All", "Leadership", "Science", "Mathematics", "Languages", "Social Studies", "Arts & Sports"];

const faculty = [
  { name: "Mrs. Kavita Sharma", role: "Principal", dept: "Leadership", qual: "M.Ed., Ph.D.", exp: "22 years", initial: "K", color: "bg-purple-500", specialty: "Educational Leadership" },
  { name: "Mrs. Sunita Verma", role: "Vice Principal", dept: "Leadership", qual: "M.Sc., B.Ed.", exp: "18 years", initial: "S", color: "bg-blue-500", specialty: "Academic Administration" },
  { name: "Dr. Rekha Singh", role: "HOD – Science", dept: "Science", qual: "M.Sc. Physics, Ph.D.", exp: "15 years", initial: "R", color: "bg-green-500", specialty: "Physics & Research" },
  { name: "Mrs. Anita Rani", role: "Chemistry Teacher", dept: "Science", qual: "M.Sc. Chemistry, B.Ed.", exp: "12 years", initial: "A", color: "bg-teal-500", specialty: "Organic Chemistry" },
  { name: "Mrs. Pooja Devi", role: "Biology Teacher", dept: "Science", qual: "M.Sc. Biology, B.Ed.", exp: "10 years", initial: "P", color: "bg-emerald-500", specialty: "Botany & Zoology" },
  { name: "Mr. Rajesh Kumar", role: "HOD – Mathematics", dept: "Mathematics", qual: "M.Sc. Mathematics, B.Ed.", exp: "14 years", initial: "R", color: "bg-amber-500", specialty: "Algebra & Calculus" },
  { name: "Mrs. Meena Gupta", role: "Mathematics Teacher", dept: "Mathematics", qual: "M.Sc., B.Ed.", exp: "9 years", initial: "M", color: "bg-orange-500", specialty: "Statistics & Geometry" },
  { name: "Mrs. Priya Sharma", role: "HOD – English", dept: "Languages", qual: "M.A. English, B.Ed.", exp: "16 years", initial: "P", color: "bg-rose-500", specialty: "Literature & Communication" },
  { name: "Mrs. Geeta Rani", role: "Hindi Teacher", dept: "Languages", qual: "M.A. Hindi, B.Ed.", exp: "11 years", initial: "G", color: "bg-red-500", specialty: "Hindi Literature" },
  { name: "Mrs. Usha Kumari", role: "Sanskrit Teacher", dept: "Languages", qual: "M.A. Sanskrit, B.Ed.", exp: "13 years", initial: "U", color: "bg-yellow-600", specialty: "Sanskrit Grammar" },
  { name: "Mrs. Sonia Devi", role: "HOD – Social Studies", dept: "Social Studies", qual: "M.A. History, B.Ed.", exp: "12 years", initial: "S", color: "bg-indigo-500", specialty: "History & Geography" },
  { name: "Mr. Amit Yadav", role: "Computer Science", dept: "Social Studies", qual: "M.Sc. CS, B.Ed.", exp: "8 years", initial: "A", color: "bg-cyan-500", specialty: "Programming & IT" },
  { name: "Mrs. Kiran Bala", role: "Art Teacher", dept: "Arts & Sports", qual: "B.F.A., M.A. Fine Arts", exp: "10 years", initial: "K", color: "bg-pink-500", specialty: "Painting & Crafts" },
  { name: "Miss. Deepa Sharma", role: "Music Teacher", dept: "Arts & Sports", qual: "M.A. Music (Classical)", exp: "7 years", initial: "D", color: "bg-violet-500", specialty: "Classical Vocals" },
  { name: "Mrs. Neha Singh", role: "Physical Education", dept: "Arts & Sports", qual: "M.P.Ed.", exp: "9 years", initial: "N", color: "bg-lime-500", specialty: "Athletics & Kabaddi" },
];

export default function Faculty() {
  useEffect(() => { document.title = "Faculty – The Girls Gurukul, Kalayat"; }, []);
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = faculty.filter((f) => {
    const matchesDept = dept === "All" || f.dept === dept;
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.role.toLowerCase().includes(search.toLowerCase()) || f.specialty.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#9b1c1c] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/20 text-[#d4a017] mb-4">Our Team</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Meet Our Faculty</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Dedicated, qualified and passionate educators committed to every student's success.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#d4a017]">Faculty</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-10 bg-[#d4a017]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ val: "65+", label: "Faculty Members" }, { val: "100%", label: "Postgraduates" }, { val: "12+", label: "Avg Experience (Yrs)" }, { val: "B.Ed.", label: "All Teachers Trained" }].map(({ val, label }) => (
              <div key={label}>
                <p className="font-serif font-bold text-3xl text-[#9b1c1c]">{val}</p>
                <p className="text-[#9b1c1c]/80 font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Leadership" title="School Leadership" subtitle="Experienced leaders guiding our school towards excellence and innovation." />
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {faculty.filter((f) => f.dept === "Leadership").map(({ name, role, qual, exp, initial, color, specialty }, i) => (
              <motion.div key={name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 flex gap-5 items-start border border-gray-100 card-hover hover:shadow-xl transition-all">
                <div className={`${color} w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>{initial}</div>
                <div>
                  <h3 className="font-serif font-bold text-[#9b1c1c] text-lg">{name}</h3>
                  <p className="text-[#d4a017] font-semibold text-sm mb-1">{role}</p>
                  <p className="text-gray-500 text-xs mb-1">{qual}</p>
                  <p className="text-gray-400 text-xs mb-2">Experience: {exp}</p>
                  <span className="bg-[#9b1c1c]/10 text-[#9b1c1c] text-xs px-2 py-0.5 rounded-full">{specialty}</span>
                </div>
              </motion.div>
            ))}
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
                className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#9b1c1c] bg-white"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {departments.map((d) => (
                <button key={d} onClick={() => setDept(d)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold transition-all ${d === dept ? "bg-[#9b1c1c] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#9b1c1c]"}`}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(({ name, role, qual, exp, initial, color, specialty, dept: d }, i) => (
              <motion.div key={name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 border border-gray-100 card-hover hover:shadow-lg transition-all flex gap-4">
                <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>{initial}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-[#9b1c1c] text-sm truncate">{name}</h3>
                  <p className="text-[#d4a017] text-xs font-semibold">{role}</p>
                  <p className="text-gray-400 text-xs">{qual}</p>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className="bg-[#9b1c1c]/8 text-[#9b1c1c] text-xs px-2 py-0.5 rounded-full">{d}</span>
                    <span className="text-gray-400 text-xs">{exp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No faculty found matching your search.</p>
              <button onClick={() => { setSearch(""); setDept("All"); }} className="text-[#d4a017] text-sm mt-2 underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-16 bg-gradient-to-r from-[#9b1c1c] to-[#9b1c1c]/80">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif font-bold text-3xl text-white mb-3">Join Our Teaching Family</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">We are always looking for passionate, qualified educators. Send your CV to us.</p>
            <a href="mailto:careers@girlsgurukul.edu.in">
              <button className="bg-[#d4a017] text-[#9b1c1c] font-bold px-8 py-3 rounded-full hover:bg-[#d4a017]/90 transition-colors">
                Send Your Application →
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
