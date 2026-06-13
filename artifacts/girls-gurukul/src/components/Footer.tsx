import { SiFacebook, SiYoutube, SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">
                The Girls Gurukul
              </h3>
              <p className="text-secondary font-medium uppercase tracking-wider text-sm mt-1">
                Kalayat
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              A prestigious girls' school that shapes futures and builds character. Combining the warmth of a gurukul with modern educational excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
                <SiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="YouTube">
                <SiYoutube size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors" aria-label="WhatsApp">
                <SiWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-secondary transition-colors text-sm">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Fee Structure</Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Mandatory Disclosures</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">Admission</Link>
              </li>
            </ul>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-white mb-4">Documents</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Download TC Form</Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Syllabus</Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Holiday List</Link>
              </li>
              <li>
                <Link href="/documents" className="text-gray-300 hover:text-secondary transition-colors text-sm">Circulars & Notices</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-secondary mt-1">📍</span>
                <span>The Girls Gurukul, Kalayat,<br />Haryana - 136027</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">📞</span>
                <span>+91-1742-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">✉️</span>
                <span>info@girlsgurukul.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The Girls Gurukul, Kalayat. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
