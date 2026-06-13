import { SiFacebook, SiYoutube, SiWhatsapp, SiInstagram, SiX } from "react-icons/si";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news-events" },
];

const resourceLinks = [
  { label: "Fee Structure", href: "/fee-structure" },
  { label: "Documents & Forms", href: "/documents" },
  { label: "Mandatory Disclosures", href: "/documents" },
  { label: "Syllabus", href: "/documents" },
  { label: "Circulars", href: "/documents" },
  { label: "TC Form Download", href: "/documents" },
];

export default function Footer() {
  return (
    <footer className="bg-[#9b1c1c] text-white">
      {/* CTA strip */}
      <div className="bg-[#d4a017] py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif font-bold text-[#9b1c1c] text-xl">Admissions Open for 2025-26</p>
            <p className="text-[#9b1c1c]/80 text-sm">Limited seats available. Apply today!</p>
          </div>
          <Link
            href="/admissions"
            className="bg-[#9b1c1c] text-white font-bold px-8 py-3 rounded-full hover:bg-[#9b1c1c]/90 transition-colors text-sm whitespace-nowrap"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">The Girls Gurukul</h3>
              <p className="text-[#d4a017] font-semibold uppercase tracking-widest text-xs mt-1">
                Kalayat, Haryana
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier institution nurturing young minds with a perfect blend of ancient gurukul wisdom and modern educational excellence. Shaping futures, building character since 2005.
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { icon: SiFacebook, label: "Facebook", href: "#" },
                { icon: SiInstagram, label: "Instagram", href: "#" },
                { icon: SiYoutube, label: "YouTube", href: "#" },
                { icon: SiX, label: "Twitter", href: "#" },
                { icon: SiWhatsapp, label: "WhatsApp", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a017] hover:text-[#9b1c1c] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-xs text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              CBSE Affiliated School
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-[#d4a017] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-[#d4a017] group-hover:translate-x-1 transition-transform text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-[#d4a017] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-[#d4a017] group-hover:translate-x-1 transition-transform text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-white mb-5 pb-2 border-b border-white/10">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                <span>The Girls Gurukul, Kalayat,<br />Kaithal, Haryana - 136027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#d4a017] flex-shrink-0" />
                <a href="tel:+911742271000" className="hover:text-[#d4a017] transition-colors">
                  +91-1742-271XXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#d4a017] flex-shrink-0" />
                <a href="mailto:info@girlsgurukul.edu.in" className="hover:text-[#d4a017] transition-colors">
                  info@girlsgurukul.edu.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                <span>Mon–Sat: 8:00 AM – 2:30 PM<br />Office: 9:00 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} The Girls Gurukul, Kalayat. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
