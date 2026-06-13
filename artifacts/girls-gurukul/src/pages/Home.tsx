import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronRight, Star, Award, BookOpen, Users, Trophy,
  ArrowRight, CheckCircle, Quote, Calendar, Newspaper, ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const stats = [
  { label: "Students Enrolled", value: 1200, suffix: "+", icon: Users, color: "bg-blue-500" },
  { label: "Expert Teachers", value: 65, suffix: "+", icon: BookOpen, color: "bg-amber-500" },
  { label: "Years of Excellence", value: 19, suffix: "+", icon: Award, color: "bg-green-500" },
  { label: "Board Results 100%", value: 100, suffix: "%", icon: Trophy, color: "bg-purple-500" },
];

const features = [
  { icon: "🎓", title: "CBSE Curriculum", desc: "Comprehensive curriculum aligned with national standards for holistic development." },
  { icon: "🏫", title: "Modern Infrastructure", desc: "State-of-the-art classrooms, labs, library and sports facilities." },
  { icon: "🧪", title: "Science Labs", desc: "Fully equipped Physics, Chemistry and Biology labs for practical learning." },
  { icon: "🎨", title: "Arts & Culture", desc: "Rich cultural programs fostering creativity, music, dance and fine arts." },
  { icon: "⚽", title: "Sports Excellence", desc: "Extensive sports facilities and trained coaches for physical development." },
  { icon: "🌱", title: "Gurukul Values", desc: "Ancient gurukul wisdom integrated with modern education for character building." },
];

const testimonials = [
  { name: "Sunita Devi", role: "Parent of Class X Student", text: "The Girls Gurukul has transformed my daughter's life. The teachers are dedicated, the environment is nurturing, and the academic results speak for themselves. We couldn't be prouder.", rating: 5 },
  { name: "Priya Sharma", role: "Alumni, Batch 2020", text: "My years at The Girls Gurukul were the most formative of my life. The values instilled here helped me succeed at Delhi University and in my career. Forever grateful!", rating: 5 },
  { name: "Rekha Malhotra", role: "Parent of Class VII Student", text: "Excellent teachers, safe environment, and a truly holistic approach. My daughter loves going to school every day. The school has exceeded all our expectations.", rating: 5 },
  { name: "Meena Kumari", role: "Parent of Class XII Student", text: "My daughter scored 95% in boards thanks to the exceptional guidance here. The faculty is highly qualified and always available. Best school in Kaithal district!", rating: 5 },
];

const achievements = [
  { icon: "🏆", title: "District Topper 2024", desc: "Our student ranked 1st in Kaithal district board results" },
  { icon: "🥇", title: "Sports Championship", desc: "State-level inter-school athletics championship winners" },
  { icon: "🎖️", title: "Best School Award", desc: "Best Girls School in Haryana by State Govt 2023" },
  { icon: "📚", title: "100% Board Results", desc: "Consistent 100% pass rate in CBSE board examinations" },
  { icon: "🌟", title: "Cultural Excellence", desc: "National winners in folk dance and classical music" },
  { icon: "💡", title: "Innovation Award", desc: "Recognised for science innovation projects at NCERT" },
];

const news = [
  { date: "June 10, 2025", category: "Academic", title: "Annual Prize Distribution Ceremony 2025", desc: "Celebrating excellence with our top performers and achievers across all classes." },
  { date: "May 28, 2025", category: "Sports", title: "Inter-School Athletics Championship Victory", desc: "Our students won 8 gold medals at the district-level sports meet." },
  { date: "May 15, 2025", category: "Admissions", title: "Admissions Open for Academic Year 2025-26", desc: "Enroll now for Nursery to Class XII. Limited seats available." },
];

const events = [
  { date: { day: "25", month: "Jun" }, title: "Parent-Teacher Meeting", time: "9:00 AM – 12:00 PM", icon: "👨‍👩‍👧" },
  { date: { day: "15", month: "Jul" }, title: "Independence Day Celebration", time: "8:00 AM – 11:00 AM", icon: "🇮🇳" },
  { date: { day: "05", month: "Aug" }, title: "Science Exhibition 2025", time: "10:00 AM – 4:00 PM", icon: "🔬" },
  { date: { day: "20", month: "Aug" }, title: "Annual Sports Day", time: "8:00 AM – 2:00 PM", icon: "⚽" },
];

const galleryImages = [
  { src: "/images/school-gate.png", label: "Our School Gate" },
  { src: "/images/school-building.png", label: "School Building" },
  { src: "/images/gallery-annual-function.png", label: "Annual Function" },
  { src: "/images/gallery-sports-day.png", label: "Sports Day" },
  { src: "/images/gallery-science-fair.png", label: "Science Fair" },
  { src: "/images/campus-aerial.png", label: "Our Campus" },
];

const heroSlides = [
  { src: "/images/school-gate.png", label: "Welcome to The Girls Gurukul" },
  { src: "/images/school-building.png", label: "World-Class Infrastructure" },
];

export default function Home() {
  useEffect(() => {
    document.title = "The Girls Gurukul, Kalayat – Shaping Futures, Building Characters";
  }, []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [autoplay]);

  useEffect(() => {
    const t = setInterval(() => setCurrentHeroSlide((p) => (p + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Sliding background photos */}
        {heroSlides.map((slide, i) => (
          <div key={slide.src} className="absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: `url('${slide.src}')`, opacity: i === currentHeroSlide ? 1 : 0 }} />
        ))}
        {/* Strong left gradient so left side is readable, right side shows photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b1c1c] via-[#9b1c1c]/85 to-[#9b1c1c]/20" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#9b1c1c]/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-2xl">

            {/* Text Content */}
            <div>
              {/* Location badge */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                📍 Kalayat, Kaithal, Haryana
              </motion.div>

              {/* Admissions badge */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 bg-[#ffffff]/25 border border-[#ffffff]/50 text-[#ffffff] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse" /> Admissions Open 2025-26
                </span>
              </motion.div>

              {/* School Name */}
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-3">
                The Girls<br />
                <span className="text-[#ffffff]">Gurukul</span>
              </motion.h1>

              {/* Divider */}
              <motion.div initial={{ width: 0 }} animate={{ width: "5rem" }} transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-[#ffffff] rounded-full mb-5" />

              {/* Tagline */}
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                className="text-white/75 text-base md:text-lg max-w-md mb-8 leading-relaxed italic">
                "Shaping Futures, Building Characters — Where Ancient Wisdom Meets Modern Excellence"
              </motion.p>

              {/* Quick stats row */}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
                className="flex gap-6 mb-10">
                {[{ val: "1200+", lbl: "Students" }, { val: "19+", lbl: "Years" }, { val: "100%", lbl: "Results" }].map(({ val, lbl }) => (
                  <div key={lbl} className="text-center">
                    <p className="text-[#ffffff] font-bold text-xl leading-none">{val}</p>
                    <p className="text-white/60 text-xs mt-0.5">{lbl}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-4">
                <Link href="/admissions">
                  <Button size="lg" className="bg-[#ffffff] text-[#9b1c1c] hover:bg-[#ffffff]/90 font-bold px-8 py-4 rounded-full text-base shadow-2xl shadow-[#ffffff]/30">
                    Apply Now <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-2 border-white/60 text-white hover:bg-white hover:text-[#9b1c1c] font-semibold px-8 py-4 rounded-full text-base bg-transparent">
                    Explore School <ChevronRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Slide dots — bottom center */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentHeroSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === currentHeroSlide ? "w-8 h-2 bg-[#ffffff]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-1.5 text-white/40 text-xs">
          <span className="rotate-90 tracking-widest text-[10px] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-4 h-7 border border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-0.5 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-[#ffffff] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, suffix, icon: Icon, color }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-serif font-bold text-4xl md:text-5xl text-[#9b1c1c] mb-1">
                  <AnimatedCounter to={value} suffix={suffix} />
                </div>
                <p className="text-[#9b1c1c]/80 font-semibold text-sm uppercase tracking-wide">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/campus-aerial.png" alt="Our Campus" className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9b1c1c]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 glass-card rounded-2xl p-4 text-white">
                  <p className="font-bold text-lg">Est. 2005</p>
                  <p className="text-sm text-white/80">19+ Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/15 text-[#ffffff] mb-4">About Our School</span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#9b1c1c] leading-tight mb-6">
                A Legacy of Excellence in <span className="gold-text">Girls' Education</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Girls Gurukul, Kalayat is a premier educational institution committed to providing world-class education to girls of Haryana. Founded in 2005, we blend the timeless values of the ancient gurukul tradition with modern academics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our CBSE-affiliated school offers classes from Nursery to Class XII with a focus on academic excellence, character development, and holistic growth.
              </p>
              <ul className="space-y-3 mb-8">
                {["CBSE Affiliated Institution", "ISO Certified School", "Smart classrooms & digital labs", "Qualified & experienced faculty"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-[#ffffff] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-[#9b1c1c] text-white hover:bg-[#9b1c1c]/90 rounded-full px-8 font-semibold">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Why Choose Us" title="A Complete Educational Experience" subtitle="We provide everything a child needs to grow academically, physically, and emotionally." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 group">
                <div className="w-14 h-14 bg-[#9b1c1c]/5 group-hover:bg-[#ffffff]/10 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-colors">{icon}</div>
                <h3 className="font-serif font-bold text-lg text-[#9b1c1c] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="py-20 bg-[#9b1c1c] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
              <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">From The Principal's Desk</span>
              <Quote className="text-[#ffffff] w-10 h-10 mb-4" />
              <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                "At The Girls Gurukul, we believe every girl has the potential to achieve greatness. Our mission is not merely academic excellence but the complete development of each student — her intellect, character, creativity, and compassion."
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                Our dedicated educators work tirelessly to ensure every student receives individual attention and the best possible opportunities. We invite you to be part of our family.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#9b1c1c] font-bold text-lg">K</div>
                <div>
                  <p className="font-bold text-white text-lg">Mrs. Kavita Sharma</p>
                  <p className="text-[#ffffff] text-sm">Principal, The Girls Gurukul</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffffff]/30">
                  <img src="/images/principal.png" alt="Principal" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#ffffff] rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#9b1c1c" className="text-[#9b1c1c]" />)}</div>
                  <p className="text-[#9b1c1c] font-bold text-sm mt-1">Top Educator</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Achievements" title="Our Pride & Recognition" subtitle="Years of hard work reflected in the achievements of our students and institution." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#ffffff]/30 hover:shadow-lg transition-all duration-300 bg-white card-hover">
                <div className="text-3xl flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-serif font-bold text-[#9b1c1c] mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Photo Gallery" title="Life at The Girls Gurukul" subtitle="A glimpse into the vibrant campus life, events and activities at our school." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryImages.map(({ src, label }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md aspect-square">
                <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9b1c1c]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-2 border-[#9b1c1c] text-[#9b1c1c] hover:bg-[#9b1c1c] hover:text-white rounded-full px-8 font-semibold">
                View Full Gallery <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#9b1c1c] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Testimonials" title="What Parents & Alumni Say" light />
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 md:p-10 text-center" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <Star key={i} size={20} fill="#ffffff" className="text-[#ffffff]" />)}
                </div>
                <Quote className="text-[#ffffff]/40 w-10 h-10 mx-auto mb-4" />
                <p className="text-white/90 text-lg leading-relaxed mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-[#ffffff] rounded-full flex items-center justify-center text-[#9b1c1c] font-bold">
                    {testimonials[currentTestimonial].name[0]}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">{testimonials[currentTestimonial].name}</p>
                    <p className="text-[#ffffff] text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button onClick={() => { setAutoplay(false); setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length); }}
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setAutoplay(false); setCurrentTestimonial(i); }}
                  className={`h-2 rounded-full transition-all ${i === currentTestimonial ? "bg-[#ffffff] w-6" : "bg-white/30 w-2"}`} />
              ))}
              <button onClick={() => { setAutoplay(false); setCurrentTestimonial((p) => (p + 1) % testimonials.length); }}
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS & NEWS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader badge="Events" title="Upcoming Events" center={false} />
              <div className="space-y-4">
                {events.map(({ date, title, time, icon }, i) => (
                  <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#ffffff]/30 hover:shadow-md transition-all">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#9b1c1c] rounded-xl flex flex-col items-center justify-center text-white">
                      <span className="font-bold text-lg leading-none">{date.day}</span>
                      <span className="text-xs text-[#ffffff] uppercase">{date.month}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1"><span>{icon}</span><h4 className="font-serif font-semibold text-[#9b1c1c]">{title}</h4></div>
                      <p className="text-gray-500 text-sm flex items-center gap-1"><Calendar size={12} /> {time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/news-events">
                  <Button variant="outline" className="border-2 border-[#9b1c1c] text-[#9b1c1c] hover:bg-[#9b1c1c] hover:text-white rounded-full px-6 font-semibold">
                    All Events <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <SectionHeader badge="News" title="Latest News" center={false} />
              <div className="space-y-4">
                {news.map(({ date, category, title, desc }, i) => (
                  <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="p-4 rounded-2xl border border-gray-100 hover:border-[#ffffff]/30 hover:shadow-md transition-all card-hover cursor-pointer">
                    <div className="flex gap-2 mb-2">
                      <span className="text-xs bg-[#9b1c1c]/10 text-[#9b1c1c] font-semibold px-2 py-0.5 rounded-full">{category}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Newspaper size={10} /> {date}</span>
                    </div>
                    <h4 className="font-serif font-semibold text-[#9b1c1c] mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/news-events">
                  <Button variant="outline" className="border-2 border-[#9b1c1c] text-[#9b1c1c] hover:bg-[#9b1c1c] hover:text-white rounded-full px-6 font-semibold">
                    All News <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#ffffff] via-[#f0c040] to-[#ffffff]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#9b1c1c] mb-4">Give Your Daughter the Best Start</h2>
            <p className="text-[#9b1c1c]/80 text-lg max-w-xl mx-auto mb-8">Join The Girls Gurukul family. Seats are limited for 2025-26. Apply today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#9b1c1c] text-white hover:bg-[#9b1c1c]/90 font-bold rounded-full px-10">
                  Apply for Admission <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-[#9b1c1c] text-[#9b1c1c] hover:bg-[#9b1c1c] hover:text-white font-semibold rounded-full px-10 bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
