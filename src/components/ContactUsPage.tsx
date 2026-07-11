import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Building, Mail, Phone, MapPin, 
  Clock, ShieldCheck, MessageSquare
} from 'lucide-react';
import InquiryForm from './InquiryForm';

interface ContactUsPageProps {
  preSelectedSector?: string;
  preSelectedService?: string;
  onInquirySubmitted: (data: any) => void;
  onBack: () => void;
}

export default function ContactUsPage({
  preSelectedSector,
  preSelectedService,
  onInquirySubmitted,
  onBack
}: ContactUsPageProps) {
  
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hello JJH Global Solutions! I would like to inquire about your professional training courses, corporate staffing, and software services.");
    window.open(`https://wa.me/919703222544?text=${message}`, '_blank');
  };

  return (
    <div id="contact-us-page" className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero Header Card */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-8">
        <div className="relative overflow-hidden bg-white text-slate-900 rounded-none p-12 sm:p-20 premium-shadow shadow-slate-200/20 border border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-bold uppercase tracking-[0.2em] shadow-sm"
            >
              <span>Vetted SLA Commitments</span>
            </motion.div>
            <h1 className="font-display font-semibold text-5xl sm:text-7xl tracking-tight  leading-[1.05] text-slate-900"> Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-blue-400">Advisors</span> </h1>
            <p className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
              Have questions about our professional training tracks, executive HR programs, or custom software SLA agreements? Fill out our corporate registry below.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Form and Contact Cards */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        
        {/* Left column: Contact Info, Support Cards & WhatsApp */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Corporate Office Details */}
          <div className="bg-white border border-slate-100 rounded-none p-8 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400  tracking-wider">Office Address</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold mt-1">
                    Pulaganipalem<br />
                    Pendurthi, Visakhapatnam<br />
                    Andhra Pradesh - 531173, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400  tracking-wider">Corporate Call Desks</h4>
                  <a href="tel:+919703222544" className="text-sm text-[#0F172A] hover:text-blue-800 leading-relaxed font-bold mt-1 block">
                    +91 97032 22544
                  </a>
                  <a href="tel:+918341119684" className="text-sm text-[#0F172A] hover:text-blue-800 leading-relaxed font-bold block">
                    +91 83411 19684
                  </a>
                  <p className="text-xs text-slate-400 mt-1 font-light">General and Admission hotlines available</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400  tracking-wider">Email Inquiry Desk</h4>
                  <a href="mailto:info@jjhglobalsolutions.com" className="text-sm text-[#0F172A] hover:text-blue-800 leading-relaxed font-bold mt-1 block break-all">
                    info@jjhglobalsolutions.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-400  tracking-wider">Business Working Hours</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold mt-1">
                    Monday to Saturday: 09:00 AM — 06:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Support Button Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-none p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-[#0F172A] text-white flex items-center justify-center premium-shadow shadow-slate-500/20">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 text-lg  tracking-tight">Instant Chat Support</h4>
                <p className="text-[10px] text-[#0F172A] font-bold tracking-widest uppercase mt-0.5">Average response: under 5 minutes</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Want answers right now? Click below to chat directly with our regional career advisory and corporate intake desk on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-[#0F172A] hover:bg-slate-900 text-white font-semibold py-4 rounded-sm text-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Guarantee Panel */}
          <div className="bg-slate-900 text-white rounded-none p-8 border border-slate-800 relative overflow-hidden space-y-6 premium-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-500/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center border border-white/10 relative z-10">
              <ShieldCheck className="w-6 h-6 text-slate-300" />
            </div>
            <div className="relative z-10 space-y-2">
              <h4 className="font-display font-semibold text-lg text-white tracking-tight ">Our 24-Hour Callback Promise</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                We understand the critical importance of operational timelines. Every submitted registry is direct-routed to the matching sector division desk, guaranteeing a verified corporate response and roadmap callback within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Lead capture form */}
        <div className="lg:col-span-7">
          <InquiryForm 
            preSelectedSectorId={preSelectedSector}
            preSelectedServiceId={preSelectedService}
            onInquirySubmitted={(data) => {
              onInquirySubmitted(data);
            }}
            onClose={() => onBack()}
          />
        </div>

      </div>

      {/* Google Map Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6 overflow-hidden">
          <div className="flex items-center gap-4 px-4 pt-2">
            <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center border border-slate-200 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-slate-900 text-lg  tracking-tight">Find Us on the Map</h4>
              <p className="text-xs text-slate-500 tracking-wider uppercase font-bold mt-0.5">Pulaganipalem, Pendurthi, Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>
          
          <div className="rounded-none overflow-hidden border border-slate-100 h-[400px] relative shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.809054719468!2d83.19794125!3d17.8385641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396781290bb3db%3A0xc3c509b7c9dd813d!2sPendurthi%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1715410100000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="JJH Corporate Location Map"
              id="google-map-embed-iframe"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
