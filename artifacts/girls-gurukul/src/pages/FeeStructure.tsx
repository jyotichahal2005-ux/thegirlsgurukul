import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, IndianRupee, AlertCircle, Download } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const feeData = [
  {
    group: "Pre-Primary (Nursery – UKG)",
    color: "border-pink-300",
    headerColor: "bg-pink-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹2,500" },
      { label: "Annual Charges", amount: "₹3,000" },
      { label: "Tuition Fee (monthly)", amount: "₹800" },
      { label: "Activity Fee (monthly)", amount: "₹200" },
      { label: "Exam Fee (per term)", amount: "₹500" },
    ],
    total: "₹13,200",
    note: "Per annum (approx.)",
  },
  {
    group: "Primary (Class I – V)",
    color: "border-green-300",
    headerColor: "bg-green-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹3,000" },
      { label: "Annual Charges", amount: "₹4,000" },
      { label: "Tuition Fee (monthly)", amount: "₹1,100" },
      { label: "Computer Lab Fee (monthly)", amount: "₹150" },
      { label: "Exam Fee (per term)", amount: "₹600" },
    ],
    total: "₹18,200",
    note: "Per annum (approx.)",
  },
  {
    group: "Middle School (Class VI – VIII)",
    color: "border-blue-300",
    headerColor: "bg-blue-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹3,500" },
      { label: "Annual Charges", amount: "₹5,000" },
      { label: "Tuition Fee (monthly)", amount: "₹1,400" },
      { label: "Lab & Computer Fee (monthly)", amount: "₹200" },
      { label: "Exam Fee (per term)", amount: "₹800" },
    ],
    total: "₹24,500",
    note: "Per annum (approx.)",
  },
  {
    group: "Secondary (Class IX – X)",
    color: "border-purple-300",
    headerColor: "bg-purple-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹4,000" },
      { label: "Annual Charges", amount: "₹6,000" },
      { label: "Tuition Fee (monthly)", amount: "₹1,800" },
      { label: "Lab Fee (monthly)", amount: "₹250" },
      { label: "CBSE Exam Fee (annual)", amount: "₹2,500" },
    ],
    total: "₹32,500",
    note: "Per annum (approx.)",
  },
  {
    group: "Sr. Secondary – Science (XI – XII)",
    color: "border-amber-300",
    headerColor: "bg-amber-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹5,000" },
      { label: "Annual Charges", amount: "₹8,000" },
      { label: "Tuition Fee (monthly)", amount: "₹2,200" },
      { label: "Lab Fee (monthly)", amount: "₹400" },
      { label: "CBSE Exam Fee (annual)", amount: "₹3,000" },
    ],
    total: "₹43,200",
    note: "Per annum (approx.)",
  },
  {
    group: "Sr. Secondary – Commerce (XI – XII)",
    color: "border-cyan-300",
    headerColor: "bg-cyan-50",
    fees: [
      { label: "Admission Fee (one-time)", amount: "₹5,000" },
      { label: "Annual Charges", amount: "₹7,500" },
      { label: "Tuition Fee (monthly)", amount: "₹2,000" },
      { label: "Computer Lab Fee (monthly)", amount: "₹250" },
      { label: "CBSE Exam Fee (annual)", amount: "₹3,000" },
    ],
    total: "₹40,500",
    note: "Per annum (approx.)",
  },
];

const paymentModes = [
  { icon: "🏦", title: "Bank Transfer (NEFT/RTGS)", desc: "Transfer directly to school's HDFC Bank account. Use student roll number as reference." },
  { icon: "💳", title: "Online Payment Portal", desc: "Pay via debit/credit card or UPI on our secure school payment portal." },
  { icon: "📱", title: "UPI / PhonePe / GPay", desc: "Scan school's UPI QR code available at the office. Send screenshot to office." },
  { icon: "🏫", title: "School Office (Cash/DD)", desc: "Pay at school office via cash or demand draft in favour of 'The Girls Gurukul'." },
];

const concessions = [
  { type: "Sibling Discount", benefit: "10% discount on second sibling's tuition fee", criteria: "Both siblings must be enrolled simultaneously" },
  { type: "Meritorious Student", benefit: "25% waiver on annual charges", criteria: "Students scoring 90%+ in previous class" },
  { type: "SC/ST Students", benefit: "50% concession on tuition fee", criteria: "Valid caste certificate required" },
  { type: "BPL Families", benefit: "Up to 100% fee waiver", criteria: "Valid BPL card and income proof required" },
  { type: "Staff Children", benefit: "50% concession on all fees", criteria: "Regular teaching & non-teaching staff" },
];

export default function FeeStructure() {
  useEffect(() => { document.title = "Fee Structure – The Girls Gurukul, Kalayat"; }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative py-24 bg-[#9b1c1c] overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#d4a017]/20 text-[#d4a017] mb-4">2025-26</span>
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4">Fee Structure</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Transparent and affordable fee structure for all classes. Quality education at reasonable cost.</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-white/50">
              <span>Home</span><span>/</span><span className="text-[#d4a017]">Fee Structure</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="py-4 bg-[#d4a017]">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <AlertCircle size={18} className="text-[#9b1c1c] flex-shrink-0" />
          <p className="text-[#9b1c1c] font-semibold text-sm">
            Fee structure is for Academic Year 2025-26. Fees are subject to annual revision. Amounts shown are approximate — contact school for exact details.
          </p>
        </div>
      </section>

      {/* FEE CARDS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Annual Fee" title="Class-wise Fee Structure" subtitle="Transparent fee structure designed to make quality education accessible to all." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeData.map(({ group, color, headerColor, fees, total, note }, i) => (
              <motion.div key={group} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`rounded-2xl border-2 ${color} overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover`}>
                <div className={`${headerColor} px-6 py-4`}>
                  <h3 className="font-serif font-bold text-[#9b1c1c] text-sm leading-tight">{group}</h3>
                </div>
                <div className="px-6 py-4 space-y-3">
                  {fees.map(({ label, amount }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs">{label}</span>
                      <span className="font-semibold text-[#9b1c1c] text-sm">{amount}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-3 mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400">{note}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif font-bold text-xl text-[#9b1c1c]">{total}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => alert("Fee structure PDF download starting...")}
              className="inline-flex items-center gap-2 bg-[#9b1c1c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#9b1c1c]/90 transition-colors shadow-lg">
              <Download size={18} /> Download Complete Fee Structure PDF
            </button>
          </div>
        </div>
      </section>

      {/* PAYMENT MODES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Payment" title="Fee Payment Methods" subtitle="Multiple convenient ways to pay fees — choose what works best for you." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentModes.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 card-hover hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif font-bold text-[#9b1c1c] text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bank Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 max-w-2xl mx-auto bg-[#9b1c1c] rounded-2xl p-6 text-white">
            <h3 className="font-serif font-bold text-lg mb-4 text-center flex items-center justify-center gap-2">
              <IndianRupee size={20} className="text-[#d4a017]" /> Bank Account Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: "Account Name", value: "The Girls Gurukul" },
                { label: "Account Number", value: "XXXX XXXX XXXX" },
                { label: "Bank", value: "HDFC Bank" },
                { label: "Branch", value: "Kalayat, Kaithal" },
                { label: "IFSC Code", value: "HDFC0XXXXXX" },
                { label: "Account Type", value: "Current Account" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-white/50 text-xs">{label}</p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONCESSIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Scholarships" title="Fee Concessions & Scholarships" subtitle="We believe no deserving girl should be deprived of quality education due to financial constraints." />
          <div className="space-y-4 max-w-3xl mx-auto">
            {concessions.map(({ type, benefit, criteria }, i) => (
              <motion.div key={type} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#d4a017]/30 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-[#d4a017]/15 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#d4a017]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#9b1c1c] mb-1">{type}</h3>
                  <p className="text-green-600 font-semibold text-sm mb-1">{benefit}</p>
                  <p className="text-gray-500 text-xs">{criteria}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="py-16 bg-[#9b1c1c] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container mx-auto px-4">
          <SectionHeader badge="Important" title="Fee Payment Guidelines" light />
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Fee must be paid by the 10th of every month to avoid late charges.",
              "Late payment attracts ₹50/- fine per month after due date.",
              "Fee once paid is non-refundable except in specific cases.",
              "Annual charges to be paid in April at the start of each year.",
              "Submit a filled fee slip along with payment at school office.",
              "Keep all payment receipts safely for future reference.",
              "Fee hike, if any, will be communicated 30 days in advance.",
              "Scholarships require fresh application each academic year.",
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-4">
                <div className="w-5 h-5 bg-[#d4a017] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#9b1c1c] text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
