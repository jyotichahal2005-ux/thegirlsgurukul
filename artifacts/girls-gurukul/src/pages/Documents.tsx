import { motion } from "framer-motion";
import { Download, FileText, AlertCircle, Bell, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const syllabus = [
  { class: "Class I", subjects: "Hindi, English, Maths, Environmental Science" },
  { class: "Class II", subjects: "Hindi, English, Maths, Environmental Science" },
  { class: "Class III", subjects: "Hindi, English, Maths, EVS, Drawing" },
  { class: "Class IV", subjects: "Hindi, English, Maths, EVS, Drawing" },
  { class: "Class V", subjects: "Hindi, English, Maths, Social, Science" },
  { class: "Class VI", subjects: "Hindi, English, Maths, Science, S.St., Computer" },
  { class: "Class VII", subjects: "Hindi, English, Maths, Science, S.St., Computer" },
  { class: "Class VIII", subjects: "Hindi, English, Maths, Science, S.St., Computer" },
  { class: "Class IX", subjects: "Hindi, English, Maths, Science, Social Science, IT" },
  { class: "Class X", subjects: "Hindi, English, Maths, Science, Social Science, IT" },
  { class: "Class XI (Sci)", subjects: "Physics, Chemistry, Maths/Biology, English, CS" },
  { class: "Class XII (Sci)", subjects: "Physics, Chemistry, Maths/Biology, English, CS" },
];

const certificates = [
  { title: "Affiliation Certificate", issuer: "HBSE, Bhiwani", year: "Valid till 2027" },
  { title: "Recognition Certificate", issuer: "Director, School Education Haryana", year: "2001" },
  { title: "Building Safety Certificate", issuer: "PWD Haryana", year: "Renewed 2024" },
  { title: "Fire NOC", issuer: "Fire Department, Kaithal", year: "Renewed 2024" },
];

const notices = [
  { title: "Annual Examination Schedule 2024–25", date: "12 Jan 2025" },
  { title: "Holiday List 2025 (Summer Vacation Update)", date: "5 Jan 2025" },
  { title: "Parent-Teacher Meeting Notice — February", date: "28 Dec 2024" },
  { title: "Fee Submission Reminder — Q4 2024", date: "15 Dec 2024" },
  { title: "Republic Day Celebration Programme", date: "20 Jan 2025" },
];

const feeStructure = [
  { class: "Class I – V", tuition: "₹800", annual: "₹1,500", computer: "₹500", sports: "₹300", total: "₹3,100" },
  { class: "Class VI – VIII", tuition: "₹1,000", annual: "₹1,800", computer: "₹600", sports: "₹400", total: "₹3,800" },
  { class: "Class IX – X", tuition: "₹1,200", annual: "₹2,000", computer: "₹700", sports: "₹500", total: "₹4,400" },
  { class: "Class XI – XII", tuition: "₹1,500", annual: "₹2,500", computer: "₹800", sports: "₹500", total: "₹5,300" },
];

const disclosures = [
  "Name of the School with address, Phone, Fax",
  "Year of establishment",
  "Name of the Principal with qualification",
  "Affiliation number and validity",
  "Name of Trust / Society running the school",
  "Period of academic sessions",
  "Languages taught",
  "Status of availability of playground",
  "Composition of management committee",
  "Names, qualification and salary of all teaching staff",
];

export default function Documents() {
  return (
    <div className="overflow-x-hidden">

      {/* Header */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Documents</h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">All academic documents, fee structures, certificates and circulars in one place.</p>
        </motion.div>
      </section>

      {/* Syllabus */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <FileText className="text-secondary" size={28} /> Academic Syllabus
            </h2>
            <p className="text-gray-500 mt-1 text-sm">Click Download PDF to get the syllabus for each class.</p>
          </motion.div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4">Class</th>
                  <th className="text-left px-6 py-4">Subjects</th>
                  <th className="px-6 py-4 text-center">Download</th>
                </tr>
              </thead>
              <tbody>
                {syllabus.map((row, i) => (
                  <motion.tr key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-medium text-primary whitespace-nowrap">{row.class}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.subjects}</td>
                    <td className="px-6 py-4 text-center">
                      <button data-testid={`button-download-syllabus-${i}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <Download size={14} /> PDF
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <AlertCircle className="text-secondary" size={28} /> School Certificates & Approvals
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary">{cert.title}</h3>
                  <p className="text-gray-500 text-sm">{cert.issuer} · {cert.year}</p>
                </div>
                <button data-testid={`button-download-cert-${i}`} className="text-secondary hover:scale-110 transition-transform">
                  <Download size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Public Disclosure */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-primary">Mandatory Public Disclosure</h2>
            <p className="text-gray-500 mt-1 text-sm">As per HBSE / CBSE norms, the following information is publicly available.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3">
            {disclosures.map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
                <button data-testid={`button-download-disclosure-${i}`} className="ml-auto text-secondary">
                  <Download size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circulars & Notices */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
              <Bell className="text-secondary" size={28} /> Circulars & Notices
            </h2>
          </motion.div>
          <div className="space-y-3">
            {notices.map((n, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Bell size={18} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-primary">{n.title}</p>
                  <p className="text-gray-400 text-sm">{n.date}</p>
                </div>
                <button data-testid={`button-download-notice-${i}`} className="text-secondary hover:scale-110 transition-transform">
                  <Download size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TC Request Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Transfer Certificate (TC)</h2>
            <p className="text-gray-500 mb-6 text-sm">Download the TC request form or contact the school office directly.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button data-testid="button-download-tc" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
                <Download size={16} className="mr-2" /> Download TC Form
              </Button>
              <Button data-testid="button-request-tc" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-8">
                Request TC Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <IndianRupee size={36} className="mx-auto text-secondary mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Fee Structure</h2>
            <p className="text-gray-300 mt-1">Academic Year 2025–26</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-2xl mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-primary">
                  <th className="text-left px-5 py-4 font-bold">Class</th>
                  <th className="text-center px-4 py-4 font-bold">Tuition Fee</th>
                  <th className="text-center px-4 py-4 font-bold">Annual Charges</th>
                  <th className="text-center px-4 py-4 font-bold">Computer Fee</th>
                  <th className="text-center px-4 py-4 font-bold">Sports Fee</th>
                  <th className="text-center px-4 py-4 font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white/10" : "bg-white/5"}>
                    <td className="px-5 py-4 font-medium text-white">{row.class}</td>
                    <td className="text-center px-4 py-4 text-gray-200">{row.tuition}</td>
                    <td className="text-center px-4 py-4 text-gray-200">{row.annual}</td>
                    <td className="text-center px-4 py-4 text-gray-200">{row.computer}</td>
                    <td className="text-center px-4 py-4 text-gray-200">{row.sports}</td>
                    <td className="text-center px-4 py-4 font-bold text-secondary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Payment Schedule", items: ["Q1: April 10", "Q2: July 10", "Q3: October 10", "Q4: January 10", "Late fee: ₹50/month"] },
              { title: "Payment Methods", items: ["UPI / Paytm / PhonePe", "Online NEFT / Net Banking", "Cash at School Office", "Bank: SBI, Kalayat Branch", "A/C: 0123XXXXXXXXXX"] },
              { title: "Scholarships", items: ["Merit-based: Top 5% — 50% waiver", "SC / ST / OBC: As per Govt. norms", "Sibling discount: 10% on 2nd child", "Orphan students: Full concession", "No refund on annual charges"] },
            ].map((block, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                <h3 className="font-bold text-secondary text-lg mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="text-gray-200 text-sm flex items-start gap-2">
                      <span className="text-secondary mt-1">·</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
