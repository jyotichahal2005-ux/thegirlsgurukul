import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { SiFacebook, SiYoutube, SiWhatsapp, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const contactCards = [
  { icon: MapPin, title: "Our Address", lines: ["The Girls Gurukul,", "Kalayat, Kaithal,", "Haryana – 136027"], color: "bg-blue-50 border-blue-200", iconBg: "bg-blue-500" },
  { icon: Phone, title: "Phone Numbers", lines: ["+91-1742-271XXX (Office)", "+91-98765-XXXXX (Principal)", "+91-98765-XXXXX (Admissions)"], color: "bg-green-50 border-green-200", iconBg: "bg-green-500" },
  { icon: Mail, title: "Email Addresses", lines: ["info@girlsgurukul.edu.in", "admissions@girlsgurukul.edu.in", "principal@girlsgurukul.edu.in"], color: "bg-amber-50 border-amber-200", iconBg: "bg-amber-500" },
  { icon: Clock, title: "Working Hours", lines: ["School: 8:00 AM – 2:30 PM", "Office: 9:00 AM – 4:00 PM", "Monday to Saturday"], color: "bg-purple-50 border-purple-200", iconBg: "bg-purple-500" },
];

const departments = [
  { dept: "Principal's Office", contact: "+91-98765-XXXXX", email: "principal@girlsgurukul.edu.in" },
  { dept: "Admissions", contact: "+91-98765-XXXXX", email: "admissions@girlsgurukul.edu.in" },
  { dept: "Accounts & Fee", contact: "+91-98765-XXXXX", email: "accounts@girlsgurukul.edu.in" },
  { dept: "Examination Cell", contact: "+91-98765-XXXXX", email: "exams@girlsgurukul.edu.in" },
  { dept: "Sports Department", contact: "+91-98765-XXXXX", email: "sports@girlsgurukul.edu.in" },
  { dept: "Library", contact: "+91-98765-XXXXX", email: "library@girlsgurukul.edu.in" },
];

const faqs = [
  { q: "What is the admission process?", a: "Download the form from our website or collect from office, fill it and submit with required documents. Shortlisted candidates appear for an interaction session." },
  { q: "What are the school timings?", a: "School runs from 8:00 AM to 2:30 PM, Monday to Saturday. Office remains open from 9:00 AM to 4:00 PM." },
  { q: "Is school transport available?", a: "Yes, we provide bus facility covering Kalayat town and surrounding villages. Contact the transport coordinator for routes and charges." },
  { q: "What stream options are available in Class XI?", a: "We offer Science (PCB/PCM) and Commerce streams in Class XI-XII. Both streams have excellent faculty and infrastructure." },
  { q: "Are there hostel facilities?", a: "Currently we do not have hostel facilities. Students commute from home or arrange their own accommodation nearby." },
];

export default function Contact() {
  useEffect(() => { document.title = "Contact Us – The Girls Gurukul, Kalayat"; }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#9b1c1c] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/20 text-[#d4a017] mb-4">Get In Touch</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for admissions, queries, or to schedule a school visit.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#d4a017]">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK CONTACT BUTTONS */}
      <section className="py-6 bg-[#d4a017]">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
          <a href="tel:+911742271000" className="flex items-center gap-2 bg-[#9b1c1c] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#9b1c1c]/90 transition-colors text-sm">
            📞 Call Now
          </a>
          <a href="https://wa.me/911742271000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white font-bold px-6 py-2.5 rounded-full hover:bg-green-700 transition-colors text-sm">
            💬 WhatsApp
          </a>
          <a href="mailto:info@girlsgurukul.edu.in" className="flex items-center gap-2 bg-white text-[#9b1c1c] font-bold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors text-sm">
            ✉️ Send Email
          </a>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Contact Info" title="Reach Us Here" subtitle="Multiple ways to get in touch with The Girls Gurukul." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map(({ icon: Icon, title, lines, color, iconBg }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border p-6 ${color} card-hover hover:shadow-lg transition-all`}>
                <div className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-bold text-[#9b1c1c] mb-3">{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* MAP */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/15 text-[#d4a017] mb-3">Location</span>
                <h2 className="font-serif font-bold text-3xl text-[#9b1c1c]">Find Us on the Map</h2>
                <div className="h-0.5 w-16 bg-[#d4a017] rounded-full mt-3" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 bg-gray-200 border border-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.4!2d76.34!3d29.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKalayat+Kaithal+Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="School Location"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-5 p-4 bg-white rounded-2xl border border-gray-100 flex items-start gap-3 shadow-sm">
                <MapPin size={18} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#9b1c1c] text-sm">The Girls Gurukul, Kalayat</p>
                  <p className="text-gray-500 text-xs mt-0.5">Kaithal, Haryana – 136027, India</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                    className="text-[#d4a017] text-xs font-semibold mt-1 inline-block hover:underline">
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/15 text-[#d4a017] mb-3">Message Us</span>
                <h2 className="font-serif font-bold text-3xl text-[#9b1c1c]">Send Us a Message</h2>
                <div className="h-0.5 w-16 bg-[#d4a017] rounded-full mt-3" />
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100 h-72 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#9b1c1c] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-4">Thank you for contacting us. We will respond within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} className="bg-[#9b1c1c] text-white rounded-full px-6 text-sm">Send Another</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#9b1c1c] focus:ring-2 focus:ring-[#9b1c1c]/10 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#9b1c1c] focus:ring-2 focus:ring-[#9b1c1c]/10 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#9b1c1c] focus:ring-2 focus:ring-[#9b1c1c]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#9b1c1c] focus:ring-2 focus:ring-[#9b1c1c]/10 transition-all bg-white">
                      <option value="">Select a subject</option>
                      <option>Admission Enquiry</option>
                      <option>Fee Related Query</option>
                      <option>Academic Query</option>
                      <option>Transport Enquiry</option>
                      <option>TC / Documents</option>
                      <option>Complaint / Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message here..." rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#9b1c1c] focus:ring-2 focus:ring-[#9b1c1c]/10 transition-all resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#9b1c1c] text-white hover:bg-[#9b1c1c]/90 rounded-xl font-bold">
                    Send Message <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT CONTACTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Departments" title="Department-wise Contacts" subtitle="Reach the right person directly for faster resolution." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {departments.map(({ dept, contact, email }, i) => (
              <motion.div key={dept} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#d4a017]/30 hover:shadow-md transition-all card-hover">
                <h3 className="font-serif font-bold text-[#9b1c1c] mb-3">{dept}</h3>
                <div className="space-y-2">
                  <a href={`tel:${contact.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#d4a017] transition-colors">
                    <Phone size={13} className="text-[#d4a017]" /> {contact}
                  </a>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#d4a017] transition-colors truncate">
                    <Mail size={13} className="text-[#d4a017] flex-shrink-0" /> {email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" subtitle="Quick answers to the most common questions from parents and students." />
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map(({ q, a }, i) => (
              <motion.div key={q} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-serif font-semibold text-[#9b1c1c] text-sm pr-4">{q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 bg-[#d4a017]/15 rounded-full flex items-center justify-center text-[#d4a017] font-bold transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL + FOLLOW US */}
      <section className="py-16 bg-[#9b1c1c] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif font-bold text-3xl text-white mb-3">Follow Us on Social Media</h2>
            <p className="text-white/60 mb-8">Stay connected for the latest news, events and student achievements.</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: SiFacebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
                { icon: SiInstagram, label: "Instagram", href: "#", color: "hover:bg-pink-600" },
                { icon: SiYoutube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
                { icon: SiWhatsapp, label: "WhatsApp", href: "#", color: "hover:bg-green-600" },
              ].map(({ icon: Icon, label, href, color }) => (
                <a key={label} href={href} aria-label={label}
                  className={`w-14 h-14 glass-card rounded-full flex items-center justify-center text-white ${color} transition-all duration-200 hover:scale-110`}>
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
