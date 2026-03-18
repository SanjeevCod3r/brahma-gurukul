import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2D1B10] text-[#FFF8E7] pt-16 pb-8 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 inline-block">
              <span className="text-4xl font-serif text-primary">ॐ</span>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white">Brahma Gurukul</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Shree Kamta Prashad Memorial Shikshan Sansthan. Blending ancient Indian Gurukul traditions with modern CBSE education to create holistic leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "CBSE Curriculum", path: "/cbse" },
                { name: "Gurukul System", path: "/gurukul" },
                { name: "Admissions", path: "/admissions" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm leading-relaxed">
                  Brahma Gurukul Campus,<br />
                  Vedic Heritage Road,<br />
                  India 110001
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm">info@brahmagurukul.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-6">School Hours</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 2:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white">8:00 AM - 12:30 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-primary font-medium">Holiday</span>
              </li>
              <li className="pt-2">
                <p className="text-xs text-white/50 italic">
                  * Office hours for admission inquiries: 9:00 AM - 4:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Brahma Gurukul. All rights reserved.</p>
          <p>Under Shree Kamta Prashad Memorial Shikshan Sansthan</p>
        </div>
      </div>
    </footer>
  );
}
