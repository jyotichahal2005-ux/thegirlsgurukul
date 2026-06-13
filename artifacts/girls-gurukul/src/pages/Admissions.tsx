import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar, ChevronRight, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const steps = [
  { step: "01", title: "Download Form", desc: "Collect the admission form from school office or download it from the Documents page.", icon: "📋" },
  { step: "02", title: "Fill Application", desc: "Complete the form with all required details of the student and parent/guardian.", icon: "✍️" },
  { step: "03", title: "Submit Documents", desc: "Submit the filled form along with all required documents at the school office.", icon: "📁" },
  { step: "04", title: "Entrance Test / Interview", desc: "Appear for the entrance test (Class VI onwards) or interaction session as scheduled.", icon: "📝" },
  { step: "05", title: "Fee Payment", desc: "Upon selection, pay the admission and tuition fee as per fee structure.", icon: "💳" },
  { step: "06", title: "Admission Confirmed", desc: "Receive confirmation letter, school uniform details and welcome kit.", icon: "🎉" },
];

const eligibility = [
  { class: "Nursery / LKG", age: "3 – 4 years", criteria: "Age proof required. Direct admission based on availability." },
  { class: "Class I – V", age: "6 – 11 years", criteria: "Passing of previous class or TC from previous school required." },
  { class: "Class VI – VIII", age: "11 – 14 years", criteria: "Entrance test + previous marksheet + TC from previous school." },
  { class: "Class IX", age: "14 – 15 years", criteria: "Entrance test + Class VIII marksheet + TC. Minimum 50% required." },
  { class: "Class X", age: "15 – 16 years", criteria: "Direct lateral admission based on availability and merit." },
  { class: "Class XI (Science)", age: "16+ years", criteria: "Min 60% in Class X with Science subjects. Entrance test mandatory." },
  { class: "Class XI (Commerce)", age: "16+ years", criteria: "Min 50% in Class X. Entrance test and counselling required." },
];

const documents = [
  "Birth Certificate (Original + 2 copies)",
  "Aadhaar Card of student and parents",
  "Transfer Certificate (TC) from previous school",
  "Previous class marksheet / Report Card",
  "Caste Certificate (if applicable, for fee concession)",
  "Residence Proof (Aadhaar / Voter ID)",
  "4 recent passport-size photographs",
  "Medical fitness certificate",
  "Income Certificate (for scholarship consideration)",
];

const importantDates = [
  { event: "Admission Forms Available", date: "April 1, 2025", status: "open" },
  { event: "Last Date for Form Submission", date: "July 31, 2025", status: "upcoming" },
  { event: "Entrance Test (Class VI, IX)", date: "August 10, 2025", status: "upcoming" },
  { event: "Result Declaration", date: "August 15, 2025", status: "upcoming" },
  { event: "Fee Payment Deadline", date: "August 25, 2025", status: "upcoming" },
  { event: "Classes Begin", date: "September 1, 2025", status: "upcoming" },
];

export default function Admissions() {
  useEffect(() => { document.title = "Admissions – The Girls Gurukul, Kalayat"; }, []);

  const [form, setForm] = useState({ name: "", dob: "", class: "", fatherName: "", motherName: "", mobile: "", email: "", address: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#1a2e5a] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/20 text-[#d4a017] mb-4">Enroll Today</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Admissions 2025-26</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Begin your daughter's journey of excellence. Admissions open for Nursery to Class XII.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#d4a017]">Admissions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOTICE BANNER */}
      <section className="py-4 bg-[#d4a017]">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <AlertCircle className="text-[#1a2e5a] flex-shrink-0" size={20} />
          <p className="text-[#1a2e5a] font-semibold text-sm">
            Admissions are open for 2025-26. Limited seats available. Apply early to secure your daughter's seat.
          </p>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="How to Apply" title="Admission Process" subtitle="Simple 6-step process to secure your daughter's seat at The Girls Gurukul." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc, icon }, i) => (
              <motion.div key={step} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#d4a017]/30 hover:shadow-lg transition-all duration-300 card-hover">
                <div className="absolute top-4 right-4 text-5xl font-bold text-[#1a2e5a]/5 font-serif">{step}</div>
                <div className="text-3xl mb-4">{icon}</div>
                <div className="inline-block bg-[#d4a017] text-[#1a2e5a] text-xs font-bold px-2 py-0.5 rounded-full mb-2">Step {step}</div>
                <h3 className="font-serif font-bold text-lg text-[#1a2e5a] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Criteria" title="Eligibility Criteria" subtitle="Age and academic requirements for admission into different classes." />
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-[#1a2e5a] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">Class</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Age Requirement</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">Eligibility Criteria</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map(({ class: cls, age, criteria }, i) => (
                  <motion.tr key={cls} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className={`border-t border-gray-100 hover:bg-[#d4a017]/5 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 font-semibold text-[#1a2e5a] text-sm">{cls}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{age}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{criteria}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DOCUMENTS + DATES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader badge="Required" title="Documents Needed" center={false} />
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <motion.div key={doc} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-[#d4a017]/5 transition-colors">
                    <FileText size={16} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader badge="Schedule" title="Important Dates" center={false} />
              <div className="space-y-3">
                {importantDates.map(({ event, date, status }, i) => (
                  <motion.div key={event} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${status === "open" ? "bg-green-500 animate-pulse" : "bg-gray-300"}`} />
                      <div>
                        <p className="font-semibold text-[#1a2e5a] text-sm">{event}</p>
                        <p className="text-gray-400 text-xs flex items-center gap-1"><Calendar size={10} /> {date}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${status === "open" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {status === "open" ? "OPEN" : "UPCOMING"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE ENQUIRY FORM */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Enquire Now" title="Submit Admission Enquiry" subtitle="Fill the form below and our team will contact you within 24 hours." />
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1a2e5a] mb-2">Enquiry Submitted!</h3>
                <p className="text-gray-500">Thank you for your interest. Our admissions team will contact you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} className="mt-6 bg-[#1a2e5a] text-white rounded-full px-8">
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Student's Full Name *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter student's name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth *</label>
                    <input required type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Seeking Admission in Class *</label>
                    <select required value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all bg-white">
                      <option value="">Select Class</option>
                      {["Nursery", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI (Science)", "XI (Commerce)", "XII (Science)", "XII (Commerce)"].map((c) => (
                        <option key={c} value={c}>Class {c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Father's Name *</label>
                    <input required value={form.fatherName} onChange={(e) => setForm({ ...form, fatherName: e.target.value })} placeholder="Father's name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Number *</label>
                    <input required type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="parent@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Residential Address</label>
                  <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Village / Town, District, State" rows={2}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific questions or requirements?" rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a2e5a] focus:ring-2 focus:ring-[#1a2e5a]/10 transition-all resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#1a2e5a] text-white hover:bg-[#1a2e5a]/90 rounded-xl font-bold py-4">
                  Submit Enquiry <ArrowRight size={18} className="ml-2" />
                </Button>
                <p className="text-center text-xs text-gray-400">We will contact you within 24 hours of submission.</p>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#d4a017] via-[#f0c040] to-[#d4a017]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-[#1a2e5a] mb-3">Have Questions About Admissions?</h2>
          <p className="text-[#1a2e5a]/80 mb-6">Call us or visit the school office. We're happy to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+911742271000">
              <Button size="lg" className="bg-[#1a2e5a] text-white hover:bg-[#1a2e5a]/90 font-bold rounded-full px-8">📞 Call Now</Button>
            </a>
            <a href="https://wa.me/911742271000" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-[#1a2e5a] text-[#1a2e5a] hover:bg-[#1a2e5a] hover:text-white font-semibold rounded-full px-8 bg-transparent">
                💬 WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
