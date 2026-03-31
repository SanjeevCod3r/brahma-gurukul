import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import VedicDrawer from "@/components/ui/vedic-drawer";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academic", path: "/academic" },
  { name: "Coaching", path: "/coaching?enroll=true" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const announcements = [
  "🎉 Admissions Open for 2026–27 Academic Session — Apply Now!",
  "📅 Annual Day Celebration — March 25, 2026 • All Parents Welcome",
  "🏆 98% Board Exam Pass Rate in 2025 — Our Students Excel!",
  "🆕 New Science & Computer Lab Inaugurated for Students",
  "📞 Book a Free Campus Visit — Call or WhatsApp +91 98765 43210",
  "✨ Gurukul Yoga & Meditation Programme — Every Morning at 5 AM",
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Announcement Ticker */}
      {showTicker && (
        <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden" style={{height:"32px", background:"linear-gradient(90deg,#1a0800,#2d1200,#1a0800)", borderBottom:"1px solid rgba(212,175,55,0.3)"}}>
          <div className="flex items-center h-full">
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee flex gap-16 whitespace-nowrap">
                {[...announcements, ...announcements].map((a, i) => (
                  <span key={i} className="text-xs font-medium" style={{color:"#FFD700"}}>
                    {a} &nbsp;✦&nbsp;
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowTicker(false)}
              className="px-3 text-xs font-bold shrink-0 h-full hover:bg-white/10 transition-colors"
              style={{color:"rgba(212,175,55,0.7)"}}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
        style={{top: showTicker ? "32px" : "0"}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className={`text-3xl font-serif text-primary transition-colors ${!isScrolled && location === '/' ? 'text-white' : ''}`}>ॐ</span>
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-serif font-bold leading-none ${!isScrolled && location === '/' ? 'text-white' : 'text-foreground'}`}>
                  Brahma Gurukul
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${!isScrolled && location === '/' ? 'text-white/80' : 'text-muted-foreground'}`}>
                  Tradition Meets Modernity
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = location === link.path.split('?')[0];
                const isHomeAndTop = location === '/' && !isScrolled;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`
                      relative px-3 py-2 text-sm font-medium transition-colors
                      ${isActive 
                        ? (isHomeAndTop ? 'text-white' : 'text-primary') 
                        : (isHomeAndTop ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-primary')}
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isHomeAndTop ? 'bg-white' : 'bg-primary'}`}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <Link
                href="/admissions"
                className={`ml-4 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 ${
                  location === '/' && !isScrolled
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                Admissions Open
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={!isScrolled && location === '/' ? 'text-white' : 'text-foreground'} />
              ) : (
                <Menu className={!isScrolled && location === '/' ? 'text-white' : 'text-foreground'} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Vedic Drawer for Mobile */}
      <VedicDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
