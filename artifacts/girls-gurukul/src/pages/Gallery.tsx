import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";
const galleryAnnual = "/images/gallery-annual-function.png";
const gallerySports = "/images/gallery-sports-day.png";
const galleryScience = "/images/gallery-science-fair.png";
const campusImg = "/images/campus-aerial.png";
const heroBg = "/images/hero-bg.png";

const categories = ["All", "Annual Function", "Sports Day", "Science Fair", "Republic Day", "Independence Day", "Classroom Activities", "Cultural Programs", "Field Trips", "Prize Distribution"] as const;

type Category = typeof categories[number];

const galleryItems: { img: string; category: Category; caption: string }[] = [
  { img: galleryAnnual, category: "Annual Function", caption: "Annual Day 2024 — Cultural Extravaganza" },
  { img: gallerySports, category: "Sports Day", caption: "Inter-House Sports Competition" },
  { img: galleryScience, category: "Science Fair", caption: "District Science Exhibition — Gold Medal" },
  { img: campusImg, category: "Republic Day", caption: "Republic Day Parade & Flag Hoisting" },
  { img: heroBg, category: "Independence Day", caption: "75th Independence Day Celebration" },
  { img: galleryAnnual, category: "Cultural Programs", caption: "Classical Dance Performance" },
  { img: gallerySports, category: "Field Trips", caption: "Educational Trip to Kurukshetra Museum" },
  { img: galleryScience, category: "Prize Distribution", caption: "Annual Prize Distribution Ceremony" },
  { img: campusImg, category: "Classroom Activities", caption: "Project Work — Class IX Science" },
  { img: heroBg, category: "Annual Function", caption: "Drama Performance by Class XI" },
  { img: galleryAnnual, category: "Sports Day", caption: "100m Sprint — District Winner" },
  { img: gallerySports, category: "Science Fair", caption: "Biology Model Exhibition" },
  { img: galleryScience, category: "Republic Day", caption: "NCC Parade — Republic Day" },
  { img: campusImg, category: "Cultural Programs", caption: "Haryanvi Folk Dance" },
  { img: heroBg, category: "Prize Distribution", caption: "Toppers Felicitation — Board Results" },
  { img: galleryAnnual, category: "Classroom Activities", caption: "Reading Hour — Primary Wing" },
  { img: gallerySports, category: "Field Trips", caption: "Nature Walk — Eco Club" },
  { img: galleryScience, category: "Independence Day", caption: "Patriotic Song Competition" },
  { img: campusImg, category: "Annual Function", caption: "Valedictory Function — Class XII" },
  { img: heroBg, category: "Cultural Programs", caption: "Art Exhibition — Creative Week" },
];

const videos = [
  { title: "School Campus Tour 2024", duration: "3:45" },
  { title: "Annual Function Highlights 2023", duration: "8:20" },
  { title: "Students Share Their Experience", duration: "5:12" },
];

const achievements = [
  { title: "State Kabaddi Champions", year: "2024", type: "trophy" },
  { title: "Board Topper — 98.6%", year: "2024", type: "certificate" },
  { title: "District Science Fair — Gold", year: "2023", type: "trophy" },
  { title: "100% Board Results", year: "2022-23", type: "certificate" },
  { title: "Best School Award — District", year: "2023", type: "trophy" },
  { title: "National Olympiad Winner", year: "2024", type: "certificate" },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<null | { img: string; caption: string }>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <div className="overflow-x-hidden">

      {/* Header */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Visual Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Gallery</h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">Celebrating the vibrant life of The Girls Gurukul — events, achievements, and everyday moments.</p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="py-10 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-testid={`button-gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? "bg-primary text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.caption}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => setLightbox(item)}
                  data-testid={`button-gallery-item-${i}`}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm"
                >
                  <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-sm font-medium leading-tight">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              data-testid="button-close-lightbox"
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.img} alt={lightbox.caption} className="w-full rounded-2xl shadow-2xl" />
              <p className="text-white text-center mt-4 font-medium">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Video Gallery</h2>
            <p className="text-gray-500 mt-2">Watch our school in action</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center cursor-pointer relative">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">{v.duration}</div>
                </div>
                <div className="p-4">
                  <p className="font-medium text-primary text-sm">{v.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Achievements Gallery</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-6 text-center border hover:scale-105 transition-transform ${a.type === "trophy" ? "bg-yellow-50 border-yellow-200" : "bg-blue-50 border-blue-200"}`}
              >
                <div className="text-5xl mb-3">{a.type === "trophy" ? "🏆" : "📜"}</div>
                <h3 className="font-bold text-primary text-base">{a.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{a.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
