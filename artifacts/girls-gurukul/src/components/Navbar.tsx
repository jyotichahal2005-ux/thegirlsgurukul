import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Academics",
    href: "/academics",
    children: [
      { name: "Academics", href: "/academics" },
      { name: "Faculty", href: "/faculty" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    children: [
      { name: "Admissions", href: "/admissions" },
      { name: "Fee Structure", href: "/fee-structure" },
    ],
  },
  {
    name: "Student Life",
    href: "/gallery",
    children: [
      { name: "Gallery", href: "/gallery" },
      { name: "News & Events", href: "/news-events" },
    ],
  },
  { name: "Documents", href: "/documents" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (item: NavItem) => {
    if (item.href === location) return true;
    if (item.children) return item.children.some((c) => c.href === location);
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/98 backdrop-blur-md py-3"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1a2e5a] text-white text-xs py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5">
              <span className="text-[#d4a017]">📍</span> Kalayat, Haryana - 136027
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#d4a017]">📞</span> +91-1742-271XXX
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#d4a017]">✉️</span> info@girlsgurukul.edu.in
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#d4a017] font-medium animate-pulse">🎓 Admissions Open 2025-26</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between" ref={dropdownRef}>
        <Link href="/" className="flex items-center gap-3 py-1">
          <img
            src="/images/school-logo.png"
            alt="The Girls Gurukul Logo"
            className="w-12 h-12 object-contain flex-shrink-0 drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl text-[#1a2e5a] leading-tight">
              The Girls Gurukul
            </span>
            <span className="text-xs text-[#d4a017] font-semibold tracking-widest uppercase">
              Kalayat, Haryana
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-sm transition-all hover:text-[#d4a017] hover:bg-[#1a2e5a]/5 ${
                    isActive(item) ? "text-[#1a2e5a] font-semibold" : "text-gray-600"
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                  />
                  {isActive(item) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#d4a017] rounded-full"
                    />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative block px-3 py-2 rounded-lg font-medium text-sm transition-all hover:text-[#d4a017] hover:bg-[#1a2e5a]/5 ${
                    isActive(item) ? "text-[#1a2e5a] font-semibold" : "text-gray-600"
                  }`}
                >
                  {item.name}
                  {isActive(item) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#d4a017] rounded-full"
                    />
                  )}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && (
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[180px] z-50"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-[#1a2e5a]/5 hover:text-[#d4a017] ${
                            location === child.href ? "text-[#d4a017] font-medium bg-[#1a2e5a]/5" : "text-gray-700"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link href="/admissions" className="ml-2">
            <Button className="bg-[#d4a017] text-[#1a2e5a] hover:bg-[#d4a017]/90 font-bold rounded-full px-5 py-2 text-sm shadow-md">
              Apply Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1a2e5a] p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav className="flex flex-col px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[#1a2e5a] hover:bg-gray-50"
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2 px-3 text-sm text-gray-600 hover:text-[#d4a017]"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2.5 px-3 rounded-lg font-medium transition-colors ${
                        isActive(item) ? "text-[#d4a017] bg-[#1a2e5a]/5" : "text-[#1a2e5a] hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link href="/admissions" className="block w-full">
                  <Button className="w-full bg-[#d4a017] text-[#1a2e5a] hover:bg-[#d4a017]/90 font-bold rounded-full">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
