import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Play } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

const categories = ["All", "Campus", "Events", "Sports", "Academic", "Cultural"];

const photos = [
  { src: "/images/gallery-1.jpg", title: "School Assembly", category: "Events", desc: "Students attending morning assembly in the school hall" },
  { src: "/images/gallery-3.jpg", title: "Pratibha Khoj Event", category: "Events", desc: "Annual talent search event at The Girls Gurukul" },
  { src: "/images/gallery-4.jpg", title: "Student Achievers", category: "Academic", desc: "Top students at the school's achievement banner" },
  { src: "/images/gallery-5.jpg", title: "Diwali Celebration", category: "Cultural", desc: "Students and teacher celebrating Diwali with Rangoli" },
  { src: "/images/gallery-6.jpg", title: "Educational Trip", category: "Events", desc: "Students on educational excursion trip" },
  { src: "/images/gallery-7.jpg", title: "Zoo Visit", category: "Events", desc: "Students at Mahendra Chaudhary Zoological Park" },
  { src: "/images/gallery-8.jpg", title: "Golden Temple Visit", category: "Events", desc: "Students offering prayers at the Golden Temple, Amritsar" },
  { src: "/images/gallery-9.jpg", title: "Classroom Learning", category: "Academic", desc: "Students attentively studying in class" },
  { src: "/images/gallery-10.jpg", title: "Writing Practice", category: "Academic", desc: "A student focused on her studies" },
  { src: "/images/gallery-11.jpg", title: "Result Ceremony", category: "Events", desc: "Annual result ceremony with family members" },
  { src: "/images/gallery-12.jpg", title: "Convocation 2024", category: "Events", desc: "Students receiving certificates at prize distribution" },
  { src: "/images/gallery-13.jpg", title: "Finest Facilities", category: "Campus", desc: "Science lab, assembly and classroom facilities" },
  { src: "/images/gallery-14.jpg", title: "Sports Facilities", category: "Sports", desc: "Archery, football, badminton and volleyball" },
  { src: "/images/gallery-15.jpg", title: "Holistic Development", category: "Academic", desc: "Boarding school holistic development of girls" },
  { src: "/images/gallery-16.jpg", title: "Sports Day", category: "Sports", desc: "Students competing in track and field events" },
  { src: "/images/gallery-17.jpg", title: "School Batch", category: "Campus", desc: "Students assembled in front of school building" },
  { src: "/images/gallery-18.jpg", title: "Yoga Session", category: "Sports", desc: "Students practicing yoga in the school hall" },
  { src: "/images/gallery-19.jpg", title: "Yoga Practice", category: "Sports", desc: "Yoga and wellness session for students" },
  { src: "/images/school-gate.png", title: "School Gate", category: "Campus", desc: "The beautiful entrance gate of The Girls Gurukul" },
  { src: "/images/school-building.png", title: "School Building", category: "Campus", desc: "Our modern school building and campus" },
];

const videos = [
  { thumb: "/images/gallery-annual-function.png", title: "Annual Day 2024 Highlights", duration: "3:45", category: "Events" },
  { thumb: "/images/gallery-sports-day.png", title: "Sports Day Best Moments", duration: "2:30", category: "Sports" },
  { thumb: "/images/gallery-science-fair.png", title: "Science Exhibition Showcase", duration: "4:15", category: "Academic" },
];

export default function Gallery() {
  useEffect(() => { document.title = "Gallery – The Girls Gurukul, Kalayat"; }, []);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; title: string; desc: string }>(null);

  const filtered = photos.filter((p) => activeCategory === "All" || p.category === activeCategory);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/gallery-annual-function.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Photos & Videos</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Our Gallery</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">A visual journey through campus life, events, achievements and the vibrant spirit of The Girls Gurukul.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Photo Gallery" title="Campus & Events" subtitle="Browse through our collection of memorable moments and milestones." />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  cat === activeCategory ? "bg-[#1a5c2e] text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map(({ src, title, category, desc }, i) => (
                <motion.div
                  key={`${title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${i % 5 === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
                  onClick={() => setLightbox({ src, title, desc })}
                >
                  <img src={src} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a5c2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <span className="text-[#ffffff] text-xs">{category}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Video Gallery" title="Watch Our Moments" subtitle="Relive our best events through these wonderful video highlights." />
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map(({ thumb, title, duration, category }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all card-hover">
                <div className="aspect-video">
                  <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-[#1a5c2e]/50 group-hover:bg-[#1a5c2e]/70 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play size={24} fill="#1a5c2e" className="text-[#1a5c2e] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a5c2e] to-transparent">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#ffffff] text-xs">{category}</span>
                    <span className="text-white/50 text-xs">• {duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS GALLERY */}
      <section className="py-20 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Awards & Trophies" title="Our Trophy Cabinet" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "🏆", title: "District Topper", year: "2024", org: "CBSE Board" },
              { icon: "🥇", title: "State Athletics Champion", year: "2024", org: "Haryana Sports Dept." },
              { icon: "🎖️", title: "Best Girls School", year: "2023", org: "State Govt. Award" },
              { icon: "🌟", title: "National Culture Award", year: "2023", org: "NCERT" },
              { icon: "📚", title: "100% Board Result", year: "2023", org: "10th Consecutive Year" },
              { icon: "🔬", title: "Science Innovation", year: "2022", org: "NCERT Competition" },
              { icon: "🎵", title: "Classical Music Gold", year: "2022", org: "State Level" },
              { icon: "💡", title: "Green School Award", year: "2021", org: "MoEF India" },
            ].map(({ icon, title, year, org }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="font-serif font-bold text-white text-sm mb-1">{title}</h3>
                <p className="text-[#ffffff] text-xs font-semibold">{year}</p>
                <p className="text-white/50 text-xs">{org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightbox(null)}>
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[75vh] object-contain rounded-2xl" />
              <div className="text-center mt-4">
                <h3 className="text-white font-serif font-bold text-xl">{lightbox.title}</h3>
                <p className="text-white/60 text-sm mt-1">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
