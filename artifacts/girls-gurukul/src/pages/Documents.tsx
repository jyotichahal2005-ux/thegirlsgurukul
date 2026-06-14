import { useEffect } from "react";
import { motion } from "framer-motion";
import { Download, FileText, AlertCircle, Bell, BookOpen, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const downloadCategories = [
  {
    title: "Admission Forms",
    icon: FileText,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    files: [
      { name: "Admission Form 2025-26", type: "PDF", size: "245 KB" },
      { name: "Re-Admission Form", type: "PDF", size: "180 KB" },
      { name: "Transfer Certificate (TC) Request Form", type: "PDF", size: "120 KB" },
    ],
  },
  {
    title: "Syllabus & Books",
    icon: BookOpen,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    files: [
      { name: "Class I–V Syllabus 2025-26", type: "PDF", size: "380 KB" },
      { name: "Class VI–VIII Syllabus 2025-26", type: "PDF", size: "420 KB" },
      { name: "Class IX–X Syllabus 2025-26", type: "PDF", size: "510 KB" },
      { name: "Class XI–XII Syllabus 2025-26", type: "PDF", size: "580 KB" },
      { name: "Booklist 2025-26 (All Classes)", type: "PDF", size: "290 KB" },
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
      { name: "Academic Calendar 2025-26", type: "PDF", size: "310 KB" },
    ],
  },
];

const circulars = [
  { date: "June 5, 2025", title: "Summer Vacation Homework Instructions", urgent: false },
  { date: "May 28, 2025", title: "Annual Examination Timetable Class IX & XI", urgent: true },
  { date: "May 20, 2025", title: "Parent-Teacher Meeting – June 25, 2025", urgent: false },
  { date: "May 15, 2025", title: "Fee Submission Reminder – Last Date June 30", urgent: true },
  { date: "May 10, 2025", title: "Sports Day Registration Open – June 20 Deadline", urgent: false },
  { date: "April 30, 2025", title: "New Academic Year 2025-26 School Uniform Guidelines", urgent: false },
  { date: "April 20, 2025", title: "Digital Portal Login Instructions for Parents", urgent: false },
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
            {["TC Form", "Admission Form", "Syllabus", "Mandatory Disclosures", "Fee Structure", "Academic Calendar"].map((item) => (
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

      {/* CIRCULARS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Notices" title="Latest Circulars & Notices" subtitle="Stay updated with the latest school notifications and announcements." />
          <div className="max-w-3xl mx-auto space-y-3">
            {circulars.map(({ date, title, urgent }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#ffffff]/30 hover:shadow-sm transition-all group">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${urgent ? "bg-red-50" : "bg-[#ffffff]/10"}`}>
                  {urgent ? <AlertCircle size={18} className="text-red-500" /> : <Bell size={18} className="text-[#ffffff]" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {urgent && <span className="text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">URGENT</span>}
                    <span className="text-xs text-gray-400">{date}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm group-hover:text-[#1a5c2e] transition-colors">{title}</p>
                </div>
                <button onClick={() => handleDownload(title)} className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-[#1a5c2e] hover:border-[#1a5c2e] transition-all group/btn">
                  <Download size={14} className="text-gray-400 group-hover/btn:text-white" />
                </button>
              </motion.div>
            ))}
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
