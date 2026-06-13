import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  MonitorSmartphone, Users, Trophy, Shield,
  Laptop, Music, Download, FileText, Star,
  ArrowRight, ChevronLeft, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const heroBg = "/images/hero-bg.png";
const principalImg = "/images/principal.png";
const galleryAnnual = "/images/gallery-annual-function.png";
const gallerySports = "/images/gallery-sports-day.png";
const galleryScience = "/images/gallery-science-fair.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const stats = [
  { label: "Founded Year", value: "1995" },
  { label: "Students Enrolled", value: "1,200+" },
  { label: "Experienced Teachers", value: "60+" },
  { label: "Acres of Campus", value: "8" },
];

const features = [
  { icon: MonitorSmartphone, label: "Smart Classrooms", desc: "State-of-the-art digital classrooms with interactive whiteboards" },
  { icon: Users, label: "Experienced Faculty", desc: "Highly qualified teachers with decades of combined experience" },
  { icon: Trophy, label: "Sports Facilities", desc: "Dedicated grounds for athletics, kabaddi, volleyball and more" },
  { icon: Shield, label: "Safe Environment", desc: "CCTV-monitored, walled campus with trained security staff" },
  { icon: Laptop, label: "Digital Learning", desc: "Computer labs with high-speed internet and modern software" },
  { icon: Music, label: "Co-curricular Activities", desc: "Dance, music, debate, art and dozens of clubs to explore" },
];

const achievements = [
  { title: "Board Topper 2024", sub: "Priya Sharma — 98.6% in Class XII HBSE", color: "from-yellow-50 to-yellow-100 border-yellow-300" },
  { title: "State Sports Winner", sub: "Gold Medal — Under-16 Kabaddi Championship", color: "from-blue-50 to-blue-100 border-blue-300" },
  { title: "Science Olympiad Gold", sub: "National Level — 3 students qualified", color: "from-green-50 to-green-100 border-green-300" },
  { title: "100% Board Result", sub: "Class X & XII — 5 consecutive years", color: "from-purple-50 to-purple-100 border-purple-300" },
];

const galleryTiles = [
  { label: "Annual Function", img: galleryAnnual, color: "from-purple-900/70" },
  { label: "Sports Day", img: gallerySports, color: "from-blue-900/70" },
  { label: "Science Fair", img: galleryScience, color: "from-green-900/70" },
  { label: "Republic Day", img: galleryAnnual, color: "from-orange-900/70" },
  { label: "Cultural Programs", img: gallerySports, color: "from-pink-900/70" },
  { label: "Prize Distribution", img: galleryScience, color: "from-yellow-900/70" },
  { label: "Field Trips", img: galleryAnnual, color: "from-teal-900/70" },
  { label: "Classroom Activities", img: gallerySports, color: "from-indigo-900/70" },
];

const testimonials = [
  { name: "Rekha Devi", role: "Parent, Class VIII", text: "The Girls Gurukul has transformed my daughter completely. The teachers are dedicated and the environment is incredibly safe. Best decision we made for her education.", stars: 5 },
  { name: "Kavita Sharma", role: "Parent, Class X", text: "Excellent faculty and discipline. My daughter has improved tremendously in both studies and co-curricular activities. We are proud to be part of this institution.", stars: 5 },
  { name: "Ananya Singh", role: "Student, Class XII", text: "The school taught me not just academics but life skills. The principal is very supportive and the teachers go beyond books to inspire us.", stars: 5 },
  { name: "Sunita Yadav", role: "Parent, Class VI", text: "Affordable fees with top-quality education. The infrastructure is modern and the school keeps parents informed at every step. Highly recommended!", stars: 5 },
];

const quickLinks = [
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: FileText, label: "Admission Form", href: "/contact" },
  { icon: Download, label: "Download TC", href: "/documents" },
  { icon: FileText, label: "Syllabus", href: "/documents" },
  { icon: FileText, label: "Holiday List", href: "/documents" },
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a2e5a 0%, #0d1e3d 60%, #1a2e5a 100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(212,160,23,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(212,160,23,0.1) 0%, transparent 50%)"
        }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 text-sm font-medium tracking-widest uppercase"
          >
            Admissions Open 2025–26
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
          >
            The Girls Gurukul
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-yellow-300 font-medium mb-2"
          >
            Kalayat, Haryana
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 italic mb-10"
          >
            "Shaping Futures, Building Characters"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about">
              <Button
                data-testid="button-explore-school"
                className="px-8 py-6 text-lg font-semibold rounded-full bg-yellow-500 text-primary hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/30"
              >
                Explore School <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                data-testid="button-apply-now"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all"
              >
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 800 0 600 40C400 80 200 10 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT SHORT ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Our Legacy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">About The Girls Gurukul</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in 1995, The Girls Gurukul, Kalayat has been nurturing generations of confident, educated young women of Haryana. With a legacy of nearly three decades, we blend the timeless wisdom of the gurukul tradition with modern academic excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our campus is a vibrant learning community where every girl is encouraged to discover her potential, develop her character, and prepare for a bright future.
              </p>
              <Link href="/about">
                <Button data-testid="button-read-more-about" className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
                  Read More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-primary p-6 text-center text-white shadow-lg hover:scale-105 transition-transform"
                >
                  <p className="text-3xl font-bold text-secondary mb-1">{s.value}</p>
                  <p className="text-sm text-gray-200 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Reasons</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Why Choose Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <f.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{f.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Principal's Message</h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/10"
          >
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <img src={principalImg} alt="Principal" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg italic">
                "At The Girls Gurukul, we believe every girl carries within her an infinite potential. Our mission is not merely to educate, but to inspire, nurture, and empower. We stand committed to building not just academic toppers, but confident, compassionate leaders who will make a difference in this world."
              </p>
              <p className="font-bold text-primary text-xl">Mrs. Sunita Sharma</p>
              <p className="text-secondary font-medium">Principal, The Girls Gurukul</p>
              <p className="mt-3 text-gray-400 italic text-sm font-serif">— Sunita Sharma</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Pride</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Achievements & Awards</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`rounded-2xl bg-gradient-to-br ${a.color} border p-6 hover:scale-105 transition-transform text-center`}
              >
                <Trophy size={36} className="mx-auto mb-3 text-yellow-600" />
                <h3 className="font-bold text-primary text-base mb-1">{a.title}</h3>
                <p className="text-gray-600 text-sm">{a.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Moments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">School Gallery</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryTiles.map((tile, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer shadow-sm"
              >
                <img src={tile.img} alt={tile.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${tile.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{tile.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery">
              <Button data-testid="button-view-gallery" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3">
                View Full Gallery <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Voices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What People Say</h2>
          </motion.div>
          <div className="relative">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 text-center border border-white/20"
            >
              <div className="flex justify-center mb-4 gap-1">
                {Array.from({ length: testimonials[testimonialIdx].stars }).map((_, i) => (
                  <Star key={i} size={18} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-gray-100 text-lg leading-relaxed italic mb-6">
                "{testimonials[testimonialIdx].text}"
              </p>
              <p className="font-bold text-white text-xl">{testimonials[testimonialIdx].name}</p>
              <p className="text-secondary text-sm font-medium">{testimonials[testimonialIdx].role}</p>
            </motion.div>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                data-testid="button-prev-testimonial"
                className="w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  data-testid={`button-testimonial-dot-${i}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all mt-3 ${i === testimonialIdx ? "bg-secondary w-6" : "bg-white/40"}`}
                />
              ))}
              <button
                onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}
                data-testid="button-next-testimonial"
                className="w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((ql, i) => (
                <Link key={i} href={ql.href}>
                  <Button
                    data-testid={`button-quick-link-${i}`}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-3 font-semibold transition-all"
                  >
                    <ql.icon size={16} className="mr-2" />
                    {ql.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
