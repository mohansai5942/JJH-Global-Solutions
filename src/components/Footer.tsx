import React, { useState } from 'react';
import { 
  ArrowUp, Mail, Phone, MapPin, Linkedin, 
  Twitter, Facebook, Instagram, Send 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-site-footer" className="bg-slate-900 border-t border-slate-800 text-slate-300 py-16 mt-auto">
      {/* 4-Column Layout */}
      <div className="w-full px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Company Info */}
        <div id="footer-col-company" className="space-y-6">
          <div className="flex items-center cursor-pointer select-none" onClick={() => onNavigate('home')}>
            <img 
              src="https://files.catbox.moe/xu4alo.webp" 
              alt="JJH Global Solutions Logo" 
              className="h-14 sm:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Transforming businesses through education, HR, and software solutions. Delivering high-impact custom workflows and accredited global academic frameworks.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div id="footer-col-links" className="space-y-4 lg:pl-8">
          <h5 className="text-xs font-bold text-white  tracking-wider ">Quick Links</h5>
          <ul className="space-y-2.5 text-xs font-light">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('hr-recruitment')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                HR Solutions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('tp-training-dev')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Training & Placement
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('edu-overseas')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Education
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('soft-web')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Software Services
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div id="footer-col-services" className="space-y-4">
          <h5 className="text-xs font-bold text-white  tracking-wider ">Core Services</h5>
          <ul className="space-y-2.5 text-xs font-light">
            <li>
              <button onClick={() => onNavigate('hr-recruitment')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Recruitment Services
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('tp-training-dev')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Training & Development
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('edu-overseas')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Overseas Education Advising
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('soft-mobile-android')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Mobile App Development
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('soft-web-enterprise')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Web Architecture & Development
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('soft-marketing-seo')} className="hover:text-white hover:underline transition-all cursor-pointer text-left text-slate-400 hover:translate-x-1 inline-block duration-200">
                Search Engine Optimization & Marketing
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div id="footer-col-contact" className="space-y-5">
          <h5 className="text-xs font-bold text-white  tracking-wider ">Contact & Social</h5>
          <div className="space-y-3.5 text-xs font-light text-slate-400">
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>Pulaganipalem, Pendurthi, Visakhapatnam, Andhra Pradesh - 531173, India.</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <a href="mailto:info@jjhglobalsolutions.com" className="hover:text-white transition-colors">
                info@jjhglobalsolutions.com
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <span>+91 97032 22544, +91 83411 19684</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2.5 pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-slate-600 hover:bg-slate-800 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-blue-400 hover:bg-slate-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-slate-800 hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 hover:border-pink-500 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="w-full px-4 sm:px-8 lg:px-12 pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-[10px]  text-slate-500">
          © 2026 JJH Global Solutions Group. All rights reserved.
        </span>

        {/* Back to Top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 hover:border-slate-600 px-3.5 py-2 rounded-sm text-[10px]  font-bold uppercase tracking-wider transition-all duration-300 premium-shadow"
          title="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
}
