import React from 'react';
import { 
  ArrowLeft, ArrowRight, Calendar, Clock, BookOpen, CheckCircle2, Cpu, Laptop, 
  ChevronRight, Award, Shield, Send, MapPin, Phone, 
  HelpCircle, Code, Users, Briefcase, ExternalLink, Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { workshopsData, Workshop } from '../data/workshopsData';

interface WorkshopDetailPageProps {
  workshopId: string;
  onBack: () => void;
  onNavigateToContact: () => void;
}

export default function WorkshopDetailPage({ workshopId, onBack, onNavigateToContact }: WorkshopDetailPageProps) {
  const workshop = workshopsData.find(w => w.id === workshopId);

  if (!workshop) {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-12 py-24 text-center space-y-4 max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-slate-900 font-display  tracking-wider">Workshop Not Found</h2>
        <p className="text-slate-500 text-sm">We couldn't locate the workshop catalog you requested.</p>
      </div>
    );
  }

  return (
    <div id={`workshop-detail-page-${workshop.id}`} className="bg-slate-50 min-h-screen pb-20">
      
      {/* 2. Hero Section with Banner Image */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white text-slate-900 rounded-none p-12 sm:p-20 premium-shadow shadow-slate-200/20 border border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs tracking-[0.2em] uppercase font-bold shadow-sm">
                <span>{workshop.category}</span>
              </div>

              <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight  leading-[1.05] text-slate-900"> {workshop.title} </h1>

              <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light">
                {workshop.tagline}
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                {workshop.shortDescription}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-4 pt-4 text-xs tracking-[0.1em] uppercase font-bold text-slate-500">
                <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-sm flex items-center gap-3 shadow-sm">
                  <Clock className="w-4 h-4 text-[#0F172A]" />
                  <span>Interactive Sprints: 2-5 Days</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-sm flex items-center gap-3 shadow-sm">
                  <Laptop className="w-4 h-4 text-[#0F172A]" />
                  <span>Format: Practical Labs & Demos</span>
                </div>
              </div>
            </div>

            {/* Hero Right Media */}
            <div className="lg:col-span-5 h-[400px] w-full rounded-none overflow-hidden premium-shadow shadow-slate-200/50 bg-slate-100 border-4 border-white">
              <img 
                src={workshop.bannerImage} 
                alt={workshop.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Workshop Details Layout */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
        
        {/* Left Column: Topics, Audience, Relevance */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Topics Covered */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight"> Topics Covered inside the Workshop </h3>
              <p className="text-slate-500 text-sm font-light">
                A progressive hands-on curriculum distributed across structured code sprints and conceptual labs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workshop.topicsCovered.map((topic, idx) => (
                <div key={idx} className="border border-slate-100 rounded-sm p-5 bg-slate-50/50 flex items-start gap-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 text-sm font-bold shadow-sm">
                    {idx + 1}
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed pt-1">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Scope & Industry Relevance */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-6">
            <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight border-b border-slate-100 pb-4"> Industry Relevance & Professional Outlook </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {workshop.industryRelevance}
            </p>
          </div>

          {/* Workshop Photos Section */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-[#0F172A]" />
                <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight"> Workshop Gallery & Active Participation </h3>
              </div>
              <p className="text-slate-500 text-sm font-light">
                Real-time snapshots from active training sessions, lab implementations, student projects, and certificates distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshop.photos.map((photo, pIdx) => (
                <div key={pIdx} className="group relative rounded-sm overflow-hidden aspect-video shadow-sm bg-slate-100">
                  <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-bold text-white tracking-wider uppercase block leading-tight">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Tools, Who can Attend, Colleges */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Tools & Technologies */}
          <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6">
            <h4 className="font-display font-semibold text-lg text-slate-900  tracking-tight border-b border-slate-100 pb-4"> Tools & Technologies Used </h4>
            <div className="flex flex-wrap gap-3">
              {workshop.toolsUsed.map((tool, idx) => (
                <span key={idx} className="bg-slate-50 border border-slate-100 text-xs px-4 py-2 rounded-sm font-bold tracking-[0.1em] text-slate-700 uppercase shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Who Can Attend */}
          <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6">
            <h4 className="font-display font-semibold text-lg text-slate-900  tracking-tight border-b border-slate-100 pb-4"> Who Can Attend </h4>
            <ul className="space-y-4">
              {workshop.whoCanAttend.map((audience, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colleges Section */}
          <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <MapPin className="w-6 h-6 text-[#0F172A] shrink-0" />
              <h4 className="font-display font-semibold text-lg text-slate-900  tracking-tight"> Venues in Visakhapatnam </h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              This workshop sequence has been successfully hosted and conducted at premium engineering campuses across Visakhapatnam:
            </p>
            <div className="space-y-3">
              {workshop.colleges.map((college, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A] shrink-0" />
                  <span className="text-sm font-bold text-slate-700 leading-none">{college}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Certification Details Block */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-16 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs tracking-[0.2em] uppercase font-bold shadow-sm">
              <Award className="w-5 h-5" />
              <span>Institutional Certificate Provided</span>
            </div>
            <h3 className="font-display font-semibold text-4xl  tracking-tight text-slate-900 leading-[1.1]"> {workshop.certification.title} </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {workshop.certification.description}
            </p>
            <div className="space-y-4 text-sm text-slate-500 font-light">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F172A] shrink-0" />
                <span>Includes verified academic seal & unique QR verification block.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F172A] shrink-0" />
                <span>Provides career leverage when uploaded to LinkedIn portfolios & resume pools.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[350px] w-full rounded-none overflow-hidden border border-slate-200 premium-shadow bg-slate-50 relative p-6 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="border-2 border-amber-600/30 h-full rounded-none p-8 flex flex-col justify-between relative bg-white shadow-inner">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold block">JJH Global Solutions</span>
                  <span className="text-sm font-display font-semibold text-slate-900 uppercase tracking-tight">Certificate of Excellence</span>
                </div>
                <Award className="w-12 h-12 text-amber-500" />
              </div>
              
              <div className="space-y-2 py-6 border-y border-slate-100 text-center">
                <span className="text-[10px] text-slate-500 block font-light uppercase tracking-widest">This is proudly awarded to</span>
                <span className="text-lg font-serif italic text-slate-900 tracking-wide font-bold block px-2">Participating Engineering Student</span>
                <span className="text-[10px] text-slate-500 block font-light uppercase tracking-widest">for successful completion of {workshop.title} Bootcamp</span>
              </div>

              <div className="flex justify-between items-end text-[10px] text-slate-500 tracking-[0.2em] font-bold">
                <div className="text-left">
                  <span>DATE: JULY 2026</span>
                </div>
                <div className="text-center">
                  <span className="block border-t-2 border-slate-300 pt-2 px-2 text-slate-600">DIRECTOR SEAL</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Custom CTA Banner */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 max-w-7xl mx-auto">
        <div className="bg-white text-slate-900 rounded-none p-12 sm:p-20 border border-slate-100 premium-shadow shadow-slate-200/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs tracking-[0.2em] uppercase font-bold mx-auto shadow-sm">
              <Send className="w-4 h-4 text-[#0F172A]" />
              <span>Establish Campus Contact</span>
            </span>

            <h2 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight leading-[1.1] text-slate-900"> Bring the {workshop.title} Workshop to Your College </h2>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">
              Submit your inquiry with your target department, expected batch headcount, and prospective dates. Our educational desk will formulate a customized prospectus brochure and follow up in under 24 hours.
            </p>
            
            <div className="pt-6">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-3 bg-[#0F172A] hover:bg-slate-900 text-white font-semibold px-12 py-5 rounded-sm text-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 uppercase tracking-widest cursor-pointer group"
              >
                <span>Request Workshop for Your College</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
