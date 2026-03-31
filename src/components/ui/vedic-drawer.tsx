import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "About", path: "/about", icon: "📿" },
  { name: "Academic", path: "/academic", icon: "�" },
  { name: "Coaching", path: "/coaching?enroll=true", icon: "🎯" },
  { name: "Admissions", path: "/admissions", icon: "🎓" },
  { name: "Gallery", path: "/gallery", icon: "🖼️" },
  { name: "Contact", path: "/contact", icon: "📞" },
];

interface VedicDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VedicDrawer({ isOpen, onClose }: VedicDrawerProps) {
  const [location] = useLocation();
  const [currentQuote, setCurrentQuote] = useState(0);
  const previousLocation = useRef(location);

  const vedicQuotes = [
    "विद्या ददाति विनयम् - Knowledge gives humility",
    "अहिंसा परमो धर्मः - Non-violence is the highest virtue",
    "सत्यमेव जयते - Truth alone triumphs",
    "धर्मो रक्षति रक्षितः - Dharma protects those who protect it",
    "वसुधैव कुटुम्बकम् - The world is one family",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % vedicQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    // Only close if location actually changes and drawer is open
    if (isOpen && previousLocation.current !== location) {
      onClose();
    }
    // Update previous location
    previousLocation.current = location;
  }, [location, onClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with vedic pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-10 0c0-5.523-4.477-10-10-10S0 14.477 0 20s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 z-50 md:hidden flex flex-col"
          >
            <div className="flex-1 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden flex flex-col">
              {/* Decorative border pattern */}
              <div className="absolute inset-0 border-4 border-orange-200/30 pointer-events-none">
                <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-amber-300/30 rounded-lg">
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-yellow-400/20 rounded"></div>
                </div>
              </div>

              {/* Header with Om symbol */}
              <div className="relative p-6 bg-gradient-to-r from-orange-600/90 to-amber-600/90 backdrop-blur-sm flex-shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
                
                <div className="relative flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                      <span className="text-2xl">ॐ</span>
                    </div>
                    <div>
                      <h3 className="text-white font-serif text-xl font-bold">Brahma Gurukul</h3>
                      <p className="text-orange-100 text-xs">Ancient Wisdom</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto relative p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location === link.path.split("?")[0];
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.path}
                        className={`group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                            : "hover:bg-white/60 text-amber-900 hover:shadow-md"
                        }`}
                      >
                        {/* Decorative corner */}
                        <div className={`absolute top-0 right-0 w-8 h-8 overflow-hidden ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        } transition-opacity`}>
                          <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 translate-x-2 -translate-y-2"></div>
                        </div>

                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-serif font-medium text-lg">{link.name}</span>
                        
                        {isActive && (
                          <motion.div
                            layoutId="drawer-indicator"
                            className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl -z-10"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/admissions"
                    className="block w-full text-center py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-serif font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Apply for Admission</span>
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Vedic Quote Section */}
              <div className="relative p-6 bg-gradient-to-t from-orange-100/80 to-transparent flex-shrink-0">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <span className="text-2xl">🕉️</span>
                  </div>
                  <p className="text-amber-900 font-serif text-sm italic">
                    {vedicQuotes[currentQuote]}
                  </p>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-20 left-4 text-orange-300 text-2xl opacity-30 pointer-events-none">✦</div>
              <div className="absolute top-32 right-6 text-amber-300 text-xl opacity-30 pointer-events-none">✧</div>
              <div className="absolute bottom-40 left-8 text-yellow-500 text-2xl opacity-30 pointer-events-none">ॐ</div>
              <div className="absolute bottom-20 right-4 text-orange-400 text-xl opacity-30 pointer-events-none">✦</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
