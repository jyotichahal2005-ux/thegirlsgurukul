import { useEffect } from "react";
import { motion } from "framer-motion";
import { Download, FileText, BookOpen, Award, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const downloadCategories = [
  {
    title: "Syllabus & Books",
    icon: BookOpen,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    files: [
      { name: "Class I–V Syllabus 2026-27", type: "PDF", size: "380 KB" },
      { name: "Class VI–VIII Syllabus 2026-27", type: "PDF", size: "420 KB" },
      { name: "Class IX–X Syllabus 2026-27", type: "PDF", size: "510 KB" },
      { name: "Class XI–XII Syllabus 2026-27", type: "PDF", size: "580 KB" },
      { name: "Booklist 2026-27 (All Classes)", type: "PDF", size: "290 KB" },
    ],
  },
  {
    title: "Certificates & Proformas",
    icon: Award,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    files: [
      { name: "Character Certificate Proforma", type: "PDF", size: "95 KB" },
      { name: "Bonafide Certificate Form", type: "PDF", size: "88 KB" },
      { name: "Income Certificate Form", type: "PDF", size: "102 KB" },
      { name: "Migration Certificate Form", type: "PDF", size: "115 KB" },
    ],
  },
  {
    title: "Mandatory Disclosures",
    icon: Shield,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    files: [
      { name: "CBSE Mandatory Disclosures 2024-25", type: "PDF", size: "1.2 MB" },
      { name: "School Self Declaration Form", type: "PDF", size: "340 KB" },
      { name: "Fee & Charges Structure", type: "PDF", size: "280 KB" },
      { name: "School Safety Audit Report", type: "PDF", size: "450 KB" },
      { name: "Academic Calendar 2026-27", type: "PDF", size: "310 KB" },
    ],
  },
];


const syllabus = [
  { class: "Nursery – UKG", board: "School Curriculum", subjects: 6, download: true },
  { class: "Class I – II", board: "School / CBSE", subjects: 7, download: true },
  { class: "Class III – V", board: "CBSE", subjects: 8, download: true },
  { class: "Class VI – VIII", board: "CBSE", subjects: 9, download: true },
  { class: "Class IX – X", board: "CBSE", subjects: 7, download: true },
  { class: "Class XI – XII (Science)", board: "CBSE", subjects: 6, download: true },
  { class: "Class XI – XII (Commerce)", board: "CBSE", subjects: 6, download: true },
];

function handleDownload(name: string) {
  alert(`Download starting for: ${name}\n\nNote: This is a demo. In production, the actual file will be downloaded.`);
}

export default function Documents() {
  useEffect(() => { document.title = "Documents & Downloads – The Girls Gurukul, Kalayat"; }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a5c2e] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#ffffff]/20 text-[#ffffff] mb-4">Downloads</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Documents & Forms</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Download admission forms, syllabi, certificates, mandatory disclosures and important circulars.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#ffffff]">Documents</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["TC Form", "Syllabus", "Mandatory Disclosures", "Fee Structure", "Academic Calendar"].map((item) => (
              <button key={item} onClick={() => handleDownload(item)}
                className="bg-[#1a5c2e] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1a5c2e]/90 transition-colors flex items-center gap-2">
                <Download size={14} /> {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="All Downloads" title="Document Library" subtitle="All official school documents, forms and resources available for download." />
          <div className="grid md:grid-cols-2 gap-8">
            {downloadCategories.map(({ title, icon: Icon, color, iconColor, files }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border ${color} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                    <Icon size={20} className={iconColor} />
                  </div>
                  <h3 className="font-serif font-bold text-[#1a5c2e] text-lg">{title}</h3>
                </div>
                <div className="space-y-3">
                  {files.map(({ name, type, size }) => (
                    <div key={name} className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:shadow-sm transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText size={14} className="text-red-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 group-hover:text-[#1a5c2e] transition-colors">{name}</p>
                          <p className="text-xs text-gray-400">{type} • {size}</p>
                        </div>
                      </div>
                      <button onClick={() => handleDownload(name)}
                        className="flex-shrink-0 w-8 h-8 bg-[#1a5c2e]/5 hover:bg-[#1a5c2e] rounded-lg flex items-center justify-center transition-all group-hover:bg-[#1a5c2e]">
                        <Download size={14} className="text-[#1a5c2e] group-hover:text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Curriculum" title="Class-wise Syllabus" subtitle="Download CBSE-aligned syllabus for each class and stream." />
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-[#1a5c2e] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">Class Group</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Board</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">No. of Subjects</th>
                  <th className="text-center px-6 py-4 font-semibold text-sm">Download</th>
                </tr>
              </thead>
              <tbody>
                {syllabus.map(({ class: cls, board, subjects, download }, i) => (
                  <tr key={cls} className={`border-t border-gray-100 hover:bg-[#ffffff]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 font-semibold text-[#1a5c2e] text-sm">{cls}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{board}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{subjects} subjects</td>
                    <td className="px-6 py-4 text-center">
                      {download && (
                        <button onClick={() => handleDownload(`${cls} Syllabus`)}
                          className="inline-flex items-center gap-1.5 bg-[#1a5c2e] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#ffffff] hover:text-[#1a5c2e] transition-all">
                          <Download size={12} /> Download
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOLIDAY LIST */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Academic Calendar" title="Holiday & Exam Schedule 2026-27" subtitle="Important dates, holidays, examinations and school events for the academic year." />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-bold text-[#1a5c2e] text-lg mb-4 flex items-center gap-2">📅 Public Holidays</h3>
              <div className="space-y-2">
                {[
                  { date: "15 Aug 2025", title: "Independence Day", type: "National" },
                  { date: "02 Oct 2025", title: "Gandhi Jayanti", type: "National" },
                  { date: "02 Nov 2025", title: "Diwali", type: "Festival" },
                  { date: "25 Dec 2025", title: "Christmas", type: "Festival" },
                  { date: "26 Jan 2026", title: "Republic Day", type: "National" },
                  { date: "14 Mar 2026", title: "Holi", type: "Festival" },
                ].map(({ date, title, type }) => (
                  <div key={title} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#1a5c2e]/20 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#1a5c2e] bg-[#1a5c2e]/10 px-2 py-0.5 rounded-full w-24 text-center">{date}</span>
                      <span className="text-sm font-medium text-gray-700">{title}</span>
                    </div>
                    <span className="text-xs text-gray-400">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-[#1a5c2e] text-lg mb-4 flex items-center gap-2">📝 Examination Schedule</h3>
              <div className="space-y-2">
                {[
                  { date: "Jul 2025", title: "Unit Test – I (All Classes)", type: "Exam" },
                  { date: "Sep 2025", title: "Half-Yearly Examinations", type: "Exam" },
                  { date: "Nov 2025", title: "Unit Test – II (All Classes)", type: "Exam" },
                  { date: "Dec 2025", title: "Pre-Board Examinations (IX–XII)", type: "Exam" },
                  { date: "Feb 2026", title: "Annual Examinations (I–VIII)", type: "Exam" },
                  { date: "Mar 2026", title: "CBSE Board Examinations (X, XII)", type: "Board" },
                ].map(({ date, title, type }) => (
                  <div key={title} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#1a5c2e]/20 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-white bg-[#1a5c2e] px-2 py-0.5 rounded-full w-24 text-center">{date}</span>
                      <span className="text-sm font-medium text-gray-700">{title}</span>
                    </div>
                    <span className={`text-xs font-semibold ${type === "Board" ? "text-red-500" : "text-gray-400"}`}>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTI & LEGAL */}
      <section className="py-16 bg-[#1a5c2e] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { icon: "📜", title: "RTI Information", desc: "Right to Information related school documents and disclosures as per Government regulations.", btn: "Download RTI Info" },
              { icon: "🔒", title: "Privacy Policy", desc: "Our commitment to protecting the privacy of students, parents and staff members.", btn: "View Policy" },
              { icon: "📋", title: "CBSE Affiliation", desc: "School affiliation certificate, recognition order and compliance documents.", btn: "Download Certificate" },
            ].map(({ icon, title, desc, btn }) => (
              <div key={title} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-serif font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{desc}</p>
                <button onClick={() => handleDownload(title)} className="text-[#ffffff] text-sm font-semibold underline hover:no-underline">{btn} →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
