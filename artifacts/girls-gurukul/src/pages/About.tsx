import { motion } from "framer-motion";
import { BookOpen, Target, Star, Award, Clock, Filter } from "lucide-react";
import { useState } from "react";
const principalImg = "/images/principal.png";
const campusImg = "/images/campus-aerial.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const coreValues = [
  { icon: "🎯", label: "Discipline", desc: "Self-regulation and commitment to excellence in all pursuits" },
  { icon: "⭐", label: "Integrity", desc: "Honesty, transparency and ethical conduct in every action" },
  { icon: "🏆", label: "Excellence", desc: "Striving beyond expectations in academics and character" },
  { icon: "💡", label: "Innovation", desc: "Creative thinking and modern approaches to learning" },
  { icon: "🤝", label: "Inclusivity", desc: "Welcoming every girl regardless of background or ability" },
];

const infrastructure = [
  { title: "Smart Classrooms", desc: "12 digital classrooms with interactive whiteboards, projectors and internet-enabled learning stations for an engaging academic experience.", bg: "bg-blue-50 border-blue-200" },
  { title: "Science Laboratory", desc: "Well-equipped Physics, Chemistry and Biology labs with modern apparatus allowing students to conduct hands-on experiments.", bg: "bg-green-50 border-green-200" },
  { title: "Computer Lab", desc: "50-seat computer lab with latest hardware and software, high-speed broadband internet and coding curriculum.", bg: "bg-purple-50 border-purple-200" },
  { title: "Library", desc: "A vast library with 5,000+ books, magazines, newspapers and a quiet reading room for self-directed learning and research.", bg: "bg-yellow-50 border-yellow-200" },
  { title: "Sports Ground", desc: "Multi-use sports complex with athletics track, volleyball court, kabaddi ground and dedicated coaching for interschool competitions.", bg: "bg-red-50 border-red-200" },
];

const management = [
  { name: "Sh. Ram Kumar Sharma", designation: "Chairman, Management Committee" },
  { name: "Sh. Mohan Lal Yadav", designation: "Secretary" },
  { name: "Sh. Rajesh Bansal", designation: "Treasurer" },
  { name: "Mrs. Geeta Devi", designation: "Parent Representative" },
];

const staffCategories = ["All", "Primary", "Middle", "Senior", "Non-Teaching"] as const;

const staffData = [
  { name: "Mrs. Anita Gupta", subject: "Mathematics", qual: "M.Sc., B.Ed.", exp: "15 yrs", cat: "Senior", bio: "HOD Mathematics. Expert in board exam preparation and competitive math olympiads." },
  { name: "Mrs. Renu Sharma", subject: "Science", qual: "M.Sc., B.Ed.", exp: "12 yrs", cat: "Senior", bio: "HOD Science. Guides students for NTSE and Science Olympiad with exceptional results." },
  { name: "Mrs. Priya Verma", subject: "English", qual: "M.A., B.Ed.", exp: "10 yrs", cat: "Middle", bio: "Specialises in communicative English and has produced top scorers in HBSE exams." },
  { name: "Mrs. Kavita Rani", subject: "Hindi", qual: "M.A., B.Ed.", exp: "8 yrs", cat: "Middle", bio: "Passionate about literature and helps students explore Hindi poetry and prose." },
  { name: "Mrs. Sunita Bhatt", subject: "Social Science", qual: "M.A., B.Ed.", exp: "11 yrs", cat: "Senior", bio: "Makes history and geography come alive through interactive storytelling." },
  { name: "Mrs. Deepa Singh", subject: "Computer Science", qual: "MCA, B.Ed.", exp: "7 yrs", cat: "Senior", bio: "Teaches programming and digital literacy; coaches for coding competitions." },
  { name: "Mrs. Meena Devi", subject: "Primary (Class I-V)", qual: "D.El.Ed.", exp: "9 yrs", cat: "Primary", bio: "Nurtures foundational literacy and numeracy with patience and creativity." },
  { name: "Mr. Suresh Kumar", subject: "Sports Coach", qual: "B.P.Ed.", exp: "13 yrs", cat: "Non-Teaching", bio: "State-level kabaddi coach. Has led teams to multiple district championships." },
  { name: "Mrs. Rekha Joshi", subject: "Counselor", qual: "M.A. Psychology", exp: "6 yrs", cat: "Non-Teaching", bio: "Provides academic and emotional guidance to students and parents." },
  { name: "Mrs. Lalita Yadav", subject: "Librarian", qual: "M.Lib.Sc.", exp: "10 yrs", cat: "Non-Teaching", bio: "Manages the school library and runs the reading enrichment programme." },
];

const timings = [
  { class: "Class I–V", summer: "7:00 AM – 12:30 PM", winter: "8:00 AM – 1:30 PM" },
  { class: "Class VI–X", summer: "7:00 AM – 1:30 PM", winter: "8:00 AM – 2:30 PM" },
  { class: "Class XI–XII", summer: "7:00 AM – 1:30 PM", winter: "8:00 AM – 2:30 PM" },
  { class: "Office Hours", summer: "6:30 AM – 3:00 PM", winter: "7:30 AM – 4:00 PM" },
];

export default function About() {
  const [activeStaffCat, setActiveStaffCat] = useState<typeof staffCategories[number]>("All");
  const filteredStaff = activeStaffCat === "All" ? staffData : staffData.filter(s => s.cat === activeStaffCat);

  return (
    <div className="overflow-x-hidden">

      {/* Page Header */}
      <section className="bg-primary py-20 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${campusImg})`, backgroundSize: "cover" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">The Institution</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">About Us</h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">Discover our history, values, and the people who make The Girls Gurukul extraordinary.</p>
        </motion.div>
      </section>

      {/* History */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-4">History & Background</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Girls Gurukul was established in 1995 by Sh. Ram Kumar Sharma with a singular vision: to provide quality education to the girls of Kalayat and surrounding villages of Haryana who lacked access to a dedicated girls' school.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              What began as a small school with 3 teachers and 80 students in a rented building has grown into a thriving institution with over 1,200 students, 60+ dedicated educators, and an 8-acre campus equipped with modern infrastructure.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over three decades, we have produced thousands of successful women — doctors, engineers, teachers, civil servants — who carry our values of discipline and excellence wherever they go.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="rounded-3xl overflow-hidden shadow-xl">
            <img src={campusImg} alt="School Campus" className="w-full h-72 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Mission & Vision</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, label: "Our Mission", color: "from-blue-600 to-primary", text: "To empower every girl with quality education, life skills and values that enable her to lead a fulfilling, purposeful life and contribute meaningfully to her family, community and nation." },
              { icon: Star, label: "Our Vision", color: "from-yellow-500 to-secondary", text: "To be the most trusted and inspiring educational institution in Haryana, where every girl realizes her full potential and steps into the world with confidence, compassion and competence." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="rounded-2xl p-8 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Core Values</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {coreValues.map((v, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 w-44 hover:bg-primary hover:text-white group transition-all hover:shadow-lg"
              >
                <span className="text-4xl mb-3">{v.icon}</span>
                <h3 className="font-bold text-primary group-hover:text-white text-lg mb-1">{v.label}</h3>
                <p className="text-gray-500 group-hover:text-gray-100 text-xs leading-snug">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Infrastructure</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className={`rounded-2xl border p-6 ${item.bg} hover:scale-105 transition-transform`}
              >
                <BookOpen size={28} className="text-primary mb-3" />
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Award size={40} className="mx-auto text-secondary mb-4" />
            <h2 className="text-3xl font-bold mb-4">Affiliation & Recognition</h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-6">
              Affiliated with the Haryana Board of School Education (HBSE), Bhiwani. School Code: 330XXX. Recognition Certificate No.: EDN/HRY/2001-45.
            </p>
            <div className="inline-flex gap-8 justify-center flex-wrap">
              {["HBSE Affiliated", "ISO Certified School", "Government Recognised", "Minority Institution"].map((label, i) => (
                <div key={i} className="px-5 py-2 border border-secondary/50 rounded-full text-secondary font-medium text-sm">{label}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Management Committee */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Management Committee</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((m, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{m.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-primary">{m.name}</h3>
                <p className="text-secondary text-sm mt-1 font-medium">{m.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Full Message */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Principal's Full Message</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-start bg-white rounded-3xl p-8 md:p-12 border border-primary/10 shadow-sm"
          >
            <div className="shrink-0 text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary shadow-lg mx-auto">
                <img src={principalImg} alt="Principal" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-primary mt-3">Mrs. Sunita Sharma</p>
              <p className="text-secondary text-sm">Principal</p>
              <p className="text-gray-500 text-xs">M.A., M.Ed., Ph.D.</p>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Dear Parents, Students and Well-wishers,</p>
              <p>It is with immense pride and gratitude that I greet you as the Principal of The Girls Gurukul. For nearly three decades, this institution has stood as a beacon of quality education and character formation for the girls of Kalayat and neighbouring regions of Haryana.</p>
              <p>Education, in its truest sense, goes beyond textbooks and examinations. At The Girls Gurukul, we endeavour to build complete human beings — young women who are intellectually curious, emotionally resilient, socially responsible, and spiritually grounded. We draw inspiration from the ancient gurukul tradition, where learning was holistic, and the relationship between teacher and student was one of deep respect and mentorship.</p>
              <p>I invite you to be an active partner in your daughter's education. Together — school, family and community — we can shape a future where every girl of Haryana reaches her highest potential. Welcome to The Girls Gurukul family.</p>
              <p className="font-semibold text-primary italic">— With blessings, Mrs. Sunita Sharma</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Timings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <Clock size={36} className="mx-auto text-secondary mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">School Timings</h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-semibold">Class</th>
                    <th className="text-left px-6 py-4 font-semibold">Summer Timings</th>
                    <th className="text-left px-6 py-4 font-semibold">Winter Timings</th>
                  </tr>
                </thead>
                <tbody>
                  {timings.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-primary">{t.class}</td>
                      <td className="px-6 py-4 text-gray-600">{t.summer}</td>
                      <td className="px-6 py-4 text-gray-600">{t.winter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Staff</h2>
          </motion.div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {staffCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveStaffCat(cat)}
                data-testid={`button-staff-filter-${cat.toLowerCase()}`}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${activeStaffCat === cat ? "bg-primary text-white shadow-md" : "bg-white text-primary border border-primary/30 hover:bg-primary/5"}`}
              >
                <Filter size={14} className="inline mr-1" />{cat}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors">{s.name.charAt(4)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base">{s.name}</h3>
                    <p className="text-secondary text-sm font-medium">{s.subject}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-xs text-gray-500 mb-3">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{s.qual}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{s.exp}</span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">{s.cat}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">{s.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
