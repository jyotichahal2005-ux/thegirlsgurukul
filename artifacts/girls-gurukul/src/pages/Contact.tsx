import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { SiFacebook, SiYoutube, SiWhatsapp, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const departments = [
  { dept: "Principal Office", contact: "+91-1742-2XXXXX", email: "principal@girlsgurukul.edu.in" },
  { dept: "Admission Enquiry", contact: "+91-98XXX-XXXXX", email: "admissions@girlsgurukul.edu.in" },
  { dept: "Accounts / Fee", contact: "+91-1742-2XXXXX", email: "accounts@girlsgurukul.edu.in" },
  { dept: "Transport", contact: "+91-99XXX-XXXXX", email: "transport@girlsgurukul.edu.in" },
  { dept: "General Enquiry", contact: "+91-1742-2XXXXX", email: "info@girlsgurukul.edu.in" },
];

const admissionSteps = [
  { step: "1", title: "Fill Form", desc: "Complete the online or offline admission form with student and parent details" },
  { step: "2", title: "Document Verification", desc: "Submit required documents at the school office for verification" },
  { step: "3", title: "Entrance Test", desc: "Appear for entrance test (applicable for Classes VI and above)" },
  { step: "4", title: "Fee Payment", desc: "Pay the admission fee and first quarter fees at the accounts office" },
  { step: "5", title: "Confirmation", desc: "Receive your admission confirmation letter and school diary" },
];

const eligibility = [
  { class: "Nursery / KG", age: "3–5 years" },
  { class: "Class I", age: "5–7 years" },
  { class: "Class II – V", age: "Age appropriate" },
  { class: "Class VI – VIII", age: "Entrance test + Last class TC" },
  { class: "Class IX", age: "Passed Class VIII — minimum 45%" },
  { class: "Class XI", age: "Passed Class X — minimum 50%" },
];

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [admissionSent, setAdmissionSent] = useState(false);

  return (
    <div className="overflow-x-hidden">

      {/* Header */}
      <section className="bg-primary py-20 px-4 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Contact Us</h1>
          <p className="text-gray-200 mt-3 max-w-xl mx-auto">We're here to answer your questions about admissions, fees, and everything else.</p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: MapPin, label: "Address", value: "The Girls Gurukul, Kalayat, Kaithal, Haryana - 136027", color: "bg-blue-50 border-blue-200 text-blue-600" },
              { icon: Phone, label: "Phone", value: "+91-1742-XXXXXX\n+91-98XXX-XXXXX", color: "bg-green-50 border-green-200 text-green-600" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91-98XXX-XXXXX\n(for quick enquiries)", color: "bg-emerald-50 border-emerald-200 text-emerald-600" },
              { icon: Mail, label: "Email", value: "info@girlsgurukul.edu.in\npricipal@girlsgurukul.edu.in", color: "bg-purple-50 border-purple-200 text-purple-600" },
              { icon: Clock, label: "Office Hours", value: "Mon–Sat: 8:00 AM – 2:00 PM\n(Closed Sunday & Holidays)", color: "bg-orange-50 border-orange-200 text-orange-600" },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className={`rounded-2xl border p-6 ${card.color} hover:scale-105 transition-transform`}
              >
                <card.icon size={28} className="mb-3" />
                <h3 className="font-bold text-primary text-base mb-1">{card.label}</h3>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{card.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Map + Contact Form */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-primary mb-5">Find Us</h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-3" />
                  <p className="font-bold text-primary">The Girls Gurukul</p>
                  <p className="text-gray-500 text-sm">Kalayat, Kaithal, Haryana</p>
                  <a
                    href="https://maps.google.com/?q=Kalayat,Haryana"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-open-maps"
                    className="mt-3 inline-block text-secondary font-medium text-sm hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="text-2xl font-bold text-primary mb-5">Send us a Message</h2>
              {formSent ? (
                <div className="flex items-center gap-3 bg-green-50 rounded-2xl p-6 border border-green-200">
                  <CheckCircle size={28} className="text-green-600" />
                  <p className="text-green-700 font-medium">Message sent! We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-1 block">Full Name</label>
                      <input data-testid="input-contact-name" type="text" required placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1 block">Mobile</label>
                      <input data-testid="input-contact-mobile" type="tel" required placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Email</label>
                    <input data-testid="input-contact-email" type="email" required placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Subject</label>
                    <input data-testid="input-contact-subject" type="text" required placeholder="Admission enquiry, fee, etc."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Message</label>
                    <textarea data-testid="input-contact-message" required rows={4} placeholder="Write your message here..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
                  </div>
                  <Button data-testid="button-send-message" type="submit" className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl py-3 font-semibold">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-primary">Department Contacts</h2>
          </motion.div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4">Department</th>
                  <th className="text-left px-6 py-4">Phone</th>
                  <th className="text-left px-6 py-4">Email</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((d, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-primary">{d.dept}</td>
                    <td className="px-6 py-4 text-gray-600">{d.contact}</td>
                    <td className="px-6 py-4 text-gray-600">{d.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <h2 className="text-3xl font-bold text-primary">Admission Eligibility</h2>
            <p className="text-gray-500 mt-1 text-sm">Age and class-wise eligibility criteria for new admissions.</p>
          </motion.div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary text-primary">
                  <th className="text-left px-6 py-4 font-bold">Class</th>
                  <th className="text-left px-6 py-4 font-bold">Age / Requirement</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-primary">{row.class}</td>
                    <td className="px-6 py-4 text-gray-600">{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Admission Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Online Admission Form</h2>
            <p className="text-gray-500 mt-2 text-sm">Academic Year 2025–26</p>
          </motion.div>

          {admissionSent ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-center bg-green-50 rounded-3xl p-12 border border-green-200"
            >
              <CheckCircle size={56} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">Application Submitted!</h3>
              <p className="text-green-600">We will contact you within 2 working days. Thank you.</p>
            </motion.div>
          ) : (
            <form className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 space-y-8"
              onSubmit={(e) => { e.preventDefault(); setAdmissionSent(true); }}
            >
              {/* Student Details */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-secondary/30 pb-3 mb-5">Student Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", id: "s-name", type: "text", ph: "As per birth certificate" },
                    { label: "Date of Birth", id: "s-dob", type: "date", ph: "" },
                    { label: "Aadhaar Number", id: "s-aadhaar", type: "text", ph: "XXXX XXXX XXXX" },
                    { label: "Previous School Name", id: "s-prev-school", type: "text", ph: "Leave blank if first admission" },
                    { label: "Last Class Passed", id: "s-last-class", type: "text", ph: "e.g. Class IV" },
                    { label: "Percentage / Grade", id: "s-percentage", type: "text", ph: "e.g. 82% or A+" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="text-sm font-medium text-primary mb-1 block">{field.label}</label>
                      <input data-testid={`input-admission-${field.id}`} type={field.type} placeholder={field.ph}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Gender</label>
                    <select data-testid="input-admission-gender" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary">
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Class Applying For</label>
                    <select data-testid="input-admission-class" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary">
                      {["Nursery", "KG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-secondary/30 pb-3 mb-5">Parent / Guardian Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Father's Name", id: "p-father-name", ph: "Full name" },
                    { label: "Father's Occupation", id: "p-father-occ", ph: "e.g. Farmer, Teacher" },
                    { label: "Father's Mobile", id: "p-father-mobile", ph: "+91 XXXXX XXXXX" },
                    { label: "Mother's Name", id: "p-mother-name", ph: "Full name" },
                    { label: "Mother's Occupation", id: "p-mother-occ", ph: "e.g. Housewife, Teacher" },
                    { label: "Mother's Mobile", id: "p-mother-mobile", ph: "+91 XXXXX XXXXX" },
                    { label: "Email Address", id: "p-email", ph: "parent@email.com" },
                    { label: "Annual Family Income", id: "p-income", ph: "e.g. ₹2,00,000" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="text-sm font-medium text-primary mb-1 block">{f.label}</label>
                      <input data-testid={`input-admission-${f.id}`} type="text" placeholder={f.ph}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-secondary/30 pb-3 mb-5">Address Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-primary mb-1 block">Current Address</label>
                    <textarea data-testid="input-admission-current-address" rows={2} placeholder="House/Village, Ward, District"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-1 block">Permanent Address</label>
                      <textarea data-testid="input-admission-permanent-address" rows={2} placeholder="If same as current, write 'Same as above'"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-1 block">Pincode</label>
                      <input data-testid="input-admission-pincode" type="text" placeholder="136XXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-secondary/30 pb-3 mb-5">Document Upload</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["Birth Certificate", "Aadhar Card", "Previous Marksheet", "Transfer Certificate", "Passport Photo", "Caste Certificate (if any)"].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 border border-dashed border-gray-300 rounded-xl p-4 hover:border-primary/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                        📄
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary">{doc}</p>
                        <p className="text-xs text-gray-400">PDF, JPG (max 2MB)</p>
                      </div>
                      <input data-testid={`input-upload-doc-${i}`} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" id={`doc-upload-${i}`} />
                      <label htmlFor={`doc-upload-${i}`} className="text-xs text-secondary font-semibold cursor-pointer hover:underline">Upload</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button data-testid="button-submit-admission" type="submit" className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-xl py-4 text-base font-bold">
                  Submit Application
                </Button>
                <Button data-testid="button-download-pdf-form" type="button" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-xl py-4 text-base font-semibold">
                  Download PDF Form
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Admission Process</h2>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-4">
            {admissionSteps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex-1 relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center h-full hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-secondary font-bold z-10">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl font-bold mb-6">Follow Us on Social Media</h2>
          <div className="flex justify-center gap-6">
            {[
              { Icon: SiFacebook, label: "Facebook", color: "hover:bg-blue-600", href: "#" },
              { Icon: SiYoutube, label: "YouTube", color: "hover:bg-red-600", href: "#" },
              { Icon: SiInstagram, label: "Instagram", color: "hover:bg-pink-600", href: "#" },
              { Icon: SiWhatsapp, label: "WhatsApp Group", color: "hover:bg-green-600", href: "#" },
            ].map(({ Icon, label, color, href }, i) => (
              <a key={i} href={href} data-testid={`link-social-${label.toLowerCase()}`}
                className={`w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white ${color} transition-colors border border-white/20 hover:border-transparent`}
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
