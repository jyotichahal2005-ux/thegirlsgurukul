import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Shield, Star, Award, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const values = [
  { icon: "🌟", title: "Excellence", desc: "We pursue academic and personal excellence in everything we do, setting the highest standards for our students and faculty." },
  { icon: "❤️", title: "Compassion", desc: "We nurture empathy and kindness, teaching our students to care for others and contribute positively to society." },
  { icon: "🏛️", title: "Integrity", desc: "Honesty, transparency and ethical conduct are the foundation of our institution and everything we stand for." },
  { icon: "🌱", title: "Growth", desc: "We believe in lifelong learning and continuous improvement — for our students, teachers and institution." },
  { icon: "🤝", title: "Community", desc: "Strong bonds between students, families and educators create a supportive learning community." },
  { icon: "🎯", title: "Discipline", desc: "Structured routine, responsibility and self-discipline prepare our students for success in all walks of life." },
];

const timeline = [
  { year: "2005", title: "School Founded", desc: "The Girls Gurukul was established with a vision to provide quality education to girls of rural Haryana." },
  { year: "2008", title: "CBSE Affiliation", desc: "Received CBSE affiliation and expanded classes from Primary to Class X." },
  { year: "2012", title: "Science Wing Expansion", desc: "Inaugurated fully equipped Science and Computer labs, expanding STEM education." },
  { year: "2016", title: "Senior Secondary Wing", desc: "Class XI and XII added with Science and Commerce streams." },
  { year: "2020", title: "Digital Transformation", desc: "Launched smart classrooms, e-learning infrastructure and online student portal." },
  { year: "2024", title: "Excellence Milestone", desc: "Achieved 100% board results for 10th consecutive year. Recognised as Best School in Kaithal district." },
];

const infrastructure = [
  { icon: "📚", title: "Library", desc: "Collection of 15,000+ books, journals, magazines and e-resources" },
  { icon: "🔬", title: "Science Labs", desc: "Physics, Chemistry & Biology labs with latest equipment" },
  { icon: "💻", title: "Computer Lab", desc: "100+ computers with high-speed internet and latest software" },
  { icon: "🎵", title: "Music Room", desc: "Dedicated music room with classical and modern instruments" },
  { icon: "🎨", title: "Art Studio", desc: "Creative arts studio with professional art supplies" },
  { icon: "⚽", title: "Sports Ground", desc: "Large multi-sports ground for athletics, cricket, football & more" },
  { icon: "🏊", title: "Indoor Gym", desc: "Fully equipped indoor gymnasium for physical fitness" },
  { icon: "🍽️", title: "Cafeteria", desc: "Hygienic cafeteria serving nutritious meals at subsidised rates" },
];

const management = [
  { name: "Sh. Ramesh Kumar", role: "Chairman", initial: "R" },
  { name: "Sh. Vijay Singh", role: "Vice Chairman", initial: "V" },
  { name: "Mrs. Anita Rani", role: "Secretary", initial: "A" },
  { name: "Sh. Mohan Lal", role: "Treasurer", initial: "M" },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us – The Girls Gurukul, Kalayat";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/campus-aerial.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Our Story</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">About Our School</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover the story, mission and values behind The Girls Gurukul — a legacy of excellence since 2005.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 19, suffix: "+", label: "Years of Excellence" },
              { value: 1200, suffix: "+", label: "Students" },
              { value: 65, suffix: "+", label: "Faculty Members" },
              { value: 100, suffix: "%", label: "Board Pass Rate" },
            ].map(({ value, suffix, label }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="font-serif font-bold text-3xl md:text-4xl text-[#1a5c2e]">
                  <AnimatedCounter to={value} suffix={suffix} />
                </div>
                <p className="text-[#1a5c2e]/80 font-semibold text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/15 text-[#ffffff] mb-4">Our History</span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1a5c2e] mb-6 leading-tight">
                Two Decades of Shaping<br /><span className="gold-text">Young Women Leaders</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Girls Gurukul was founded in 2005 by visionary educationists who believed that every girl in rural Haryana deserves access to world-class education. What started as a small primary school has grown into a full-fledged senior secondary institution serving over 1,200 students.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our journey has been one of continuous growth and innovation. From establishing state-of-the-art laboratories to launching smart classrooms, we have always kept our students' needs at the forefront of every decision.
              </p>
              <ul className="space-y-3">
                {["Recognised by Haryana State Government", "CBSE Affiliated (Aff. No. XXXXXXX)", "Member of CBSE School Association", "Recipient of multiple national awards"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#ffffff] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/campus-aerial.png" alt="Campus" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a5c2e]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Journey" title="Our Milestones" subtitle="Key moments that have shaped The Girls Gurukul into the institution it is today." />
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#1a5c2e]/20 -translate-x-1/2 hidden md:block" />
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div key={year} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative flex items-center mb-10 gap-0">
                {/* LEFT side */}
                <div className="flex-1 pr-10 flex justify-end">
                  {i % 2 === 0 ? (
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 max-w-xs w-full text-right">
                      <span className="inline-block text-xs font-bold text-[#1a5c2e] bg-[#1a5c2e]/10 px-2 py-0.5 rounded-full mb-2">{year}</span>
                      <h3 className="font-serif font-bold text-[#1a5c2e] mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </motion.div>
                  ) : <div className="hidden md:block" />}
                </div>
                {/* Center badge */}
                <div className="flex-shrink-0 z-10 hidden md:flex">
                  <div className="w-14 h-14 bg-[#1a5c2e] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-gray-50">
                    {year.slice(-2)}
                  </div>
                </div>
                {/* RIGHT side */}
                <div className="flex-1 pl-10 flex justify-start">
                  {i % 2 === 1 ? (
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 max-w-xs w-full text-left">
                      <span className="inline-block text-xs font-bold text-[#1a5c2e] bg-[#1a5c2e]/10 px-2 py-0.5 rounded-full mb-2">{year}</span>
                      <h3 className="font-serif font-bold text-[#1a5c2e] mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </motion.div>
                  ) : <div className="hidden md:block" />}
                </div>
                {/* Mobile: full-width card */}
                <div className="md:hidden flex-1">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-3 items-start">
                    <div className="w-12 h-12 bg-[#1a5c2e] rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">{year}</div>
                    <div>
                      <h3 className="font-serif font-bold text-[#1a5c2e] text-sm mb-1">{title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Our Purpose" title="Mission & Vision" light />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8">
              <div className="w-14 h-14 bg-[#ffffff] rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#1a5c2e]" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To provide quality, value-based education that empowers every girl to achieve her fullest potential. We are committed to creating a safe, inclusive and stimulating environment where students develop academically, spiritually and socially — preparing them to become responsible citizens and leaders of tomorrow.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8">
              <div className="w-14 h-14 bg-[#ffffff] rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-[#1a5c2e]" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be the most respected and sought-after institution for girls' education in Haryana — a school where every girl finds her voice, discovers her strengths, and leaves prepared to make a meaningful difference in the world. We envision a generation of educated, confident and compassionate women leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Core Values" title="What We Stand For" subtitle="Our values guide every decision, interaction and initiative at The Girls Gurukul." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-[#ffffff]/20 card-hover">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif font-bold text-lg text-[#1a5c2e] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Infrastructure" title="World-Class Facilities" subtitle="Exceptional learning environments designed to inspire, innovate and educate." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/fac-cafeteria.jpg", label: "Cafeteria & Dining" },
              { src: "/images/fac-archery.webp", label: "Archery Range" },
              { src: "/images/fac-physics-lab.webp", label: "Physics Laboratory" },
              { src: "/images/fac-smart-class.jpg", label: "Smart Classrooms" },
              { src: "/images/fac-sports-ground.webp", label: "Sports Ground" },
              { src: "/images/fac-classroom.jpg", label: "Classrooms" },
            ].map(({ src, label }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-sm group h-52">
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-semibold text-sm drop-shadow">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Leadership" title="From the Principal's Desk" />
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-52 h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/principal-photo.webp" alt="Principal" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="text-center mt-3">
                    <p className="font-bold text-[#1a5c2e] text-sm">Bhawna Cholia</p>
                    <p className="text-gray-400 text-xs">Principal</p>
                    <div className="flex justify-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ffffff" className="text-[#ffffff]" />)}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dear Students, Parents and Well-wishers,
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to The Girls Gurukul — a place where dreams are nurtured and futures are shaped. As Principal of this wonderful institution, I am proud to lead a team of dedicated educators who are passionate about every student's success.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We believe that education is not just about academic achievement, but about developing the whole person — intellectually, emotionally, socially and ethically. Our curriculum is designed to challenge students while also providing the support they need to thrive.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I invite every parent and student to partner with us in this journey of learning and growth. Together, we will ensure that every girl at The Girls Gurukul reaches her highest potential.
                  </p>
                  <p className="text-gray-600 font-semibold">With warm regards,<br />Bhawna Cholia</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT / STAFF */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Our Team" title="Our Staff" subtitle="Dedicated and qualified educators shaping the future of every student at The Girls Gurukul." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { name: "Bharat", role: "PGT Physics", img: "/images/teacher-bharat.webp", pos: "center top" },
              { name: "Jangeer Singh", role: "PGT Hindi", img: "/images/teacher-jangeer.webp", pos: "center top" },
              { name: "Nisha Atri", role: "PGT Maths", img: "/images/teacher-nisha-arti.webp", pos: "center top" },
              { name: "Kajal", role: "PGT Chemistry", img: "/images/teacher-kajal.webp", pos: "center top" },
              { name: "Ritu", role: "PGT Biology", img: "/images/teacher-ritu.webp", pos: "center top" },
              { name: "Jyoti", role: "PRT", img: "/images/teacher-jyoti.webp", pos: "center top" },
              { name: "Priyanka", role: "Receptionist", img: "/images/teacher-priyanka.webp", pos: "center top" },
              { name: "Tannu", role: "Dance Teacher", img: "/images/teacher-tannu.webp", pos: "center top" },
              { name: "Monika", role: "PTI", img: "/images/teacher-monika.webp", pos: "center top" },
              { name: "Tannu", role: "PGT Pol. Science", img: "/images/teacher-tannu.webp", pos: "center top" },
              { name: "Shweta", role: "PRT", img: "/images/teacher-shweta.webp", pos: "center top" },
              { name: "Mamta", role: "PRT", img: "/images/teacher-mamta.webp", pos: "center top" },
              { name: "Neha Rana", role: "PRT", img: "/images/teacher-neha-rana.webp", pos: "center top" },
              { name: "Gourav Bharti", role: "Teacher", img: "/images/teacher-gourav.webp", pos: "center top" },
              { name: "Ranjeet", role: "Teacher", img: "/images/teacher-ranjeet.webp", pos: "center top" },
            ].map(({ name, role, img, pos }, i) => (
              <motion.div key={`${name}-${i}`} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex card-hover hover:shadow-md transition-all">
                <div className="w-28 h-36 flex-shrink-0">
                  <img src={img} alt={name} className="w-full h-full" style={{ objectFit: "cover", objectPosition: pos }} />
                </div>
                <div className="flex flex-col justify-center px-4 py-3">
                  <h3 className="font-serif font-bold text-[#1a5c2e] text-sm leading-tight">{name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL TIMING */}
      <section className="py-16 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { icon: "🌅", label: "School Hours", time: "8:00 AM – 2:30 PM", sub: "Monday to Saturday" },
              { icon: "🏢", label: "Office Hours", time: "9:00 AM – 4:00 PM", sub: "Monday to Saturday" },
              { icon: "📞", label: "Contact", time: "+91-1742-271XXX", sub: "info@girlsgurukul.edu.in" },
            ].map(({ icon, label, time, sub }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-2xl p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-serif font-semibold text-white mb-2">{label}</h3>
                <p className="text-[#ffffff] font-bold">{time}</p>
                <p className="text-white/60 text-sm mt-1">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
