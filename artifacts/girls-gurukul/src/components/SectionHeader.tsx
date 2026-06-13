import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${
          light ? "bg-white/20 text-white" : "bg-[#d4a017]/15 text-[#d4a017]"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
        light ? "text-white" : "text-[#1a2e5a]"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${
          light ? "text-white/80" : "text-gray-500"
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-[#d4a017] ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
