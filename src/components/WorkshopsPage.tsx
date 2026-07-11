import React from 'react';
import { 
  Award, Cpu, BookOpen, Laptop, Code, Layers, FileText, Briefcase, 
  ChevronRight, ArrowRight, CheckCircle2, Shield, Users, Clock, GitBranch
} from 'lucide-react';
import { motion } from 'motion/react';
import { workshopsData, Workshop } from '../data/workshopsData';

interface WorkshopsPageProps {
  onSelectWorkshop: (workshopId: string) => void;
  onNavigateToContact: () => void;
}

export default function WorkshopsPage({ onSelectWorkshop, onNavigateToContact }: WorkshopsPageProps) {
  
  // Custom Icon selection for workshops based on ID
  const getWorkshopIcon = (id: string) => {
    switch (id) {
      case 'generative-ai': return <Cpu className="w-5 h-5" />;
      case 'full-stack-java': return <Layers className="w-5 h-5" />;
      case 'n8n-automation': return <Code className="w-5 h-5" />;
      case 'web-development': return <Laptop className="w-5 h-5" />;
      case 'machine-learning': return <Cpu className="w-5 h-5" />;
      case 'ai-powered-web-application': return <Layers className="w-5 h-5" />;
      case 'full-stack-python': return <Code className="w-5 h-5" />;
      case 'soft-skills': return <Users className="w-5 h-5" />;
      case 'revit': return <Briefcase className="w-5 h-5" />;
      case 'git-and-github': return <GitBranch className="w-5 h-5" />;
      case 'wordpress': return <Laptop className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getThemeColorClass = (id: string) => {
    return 'text-[#0F172A] bg-slate-50 border-slate-200';
  };

  return (
    <div id="workshops-parent-page" className="bg-slate-50 min-h-screen pb-24">
      
      {/* SECTION 1 - HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 py-32 sm:py-40 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-bold tracking-[0.2em] uppercase shadow-sm"
          >
            <span>Collegiate Upskilling & Workshops</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-5xl sm:text-7xl tracking-tight leading-[1.05] uppercase text-slate-900"
          >
            Empowering Colleges with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-blue-400">Industry Workshops</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            JJH Global Solutions delivers specialized, hand-on, corporate-aligned workshops directly inside collegiate campuses in Visakhapatnam. Master engineering workflows, AI orchestration, full stack development, and soft skills with our veteran instructors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8"
          >
            <a
              href="#workshops-grid-section"
              className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-900 text-white font-semibold px-10 py-5 rounded-sm text-sm premium-shadow shadow-slate-900/20 active:scale-95 transition-all uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3 hover:scale-105 group"
            >
              <span>View Workshop Catalog</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0F172A] font-bold px-10 py-5 rounded-sm text-sm shadow-sm active:scale-95 transition-all border border-slate-200 uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
            >
              <span>Request College Workshop</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – TRUST POINTS / CONDUCTED COLLEGES IN VISAKHAPATNAM */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-24 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-20 premium-shadow shadow-slate-200/20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-full bg-[#0F172A]" />
          <div className="lg:col-span-7 space-y-10 relative z-10">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-[#0F172A] uppercase block">
                Educational Legacy
              </span>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl text-slate-900 tracking-tight  leading-[1.1]"> Connecting Elite Academia with Modern Practice </h2>
            </div>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light">
              We work in close proximity with academic councils across premium institutions in Visakhapatnam, designing multi-day bootcamps, hands-on lab sprints, and expert panels. Our workshops are engineered to bridge classroom theory with industry requirements.
            </p>
            <div className="pt-4">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.2em] block mb-6">Conducting College Partners Includes:</span>
              <div className="flex flex-wrap gap-4">
                {[
                  'Andhra University', 'GITAM University', 'Gayatri Vidya Parishad',
                  'Vignan’s VIIT', 'ANITS', 'Raghu Engineering College'
                ].map((col, idx) => (
                  <span key={idx} className="bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-sm text-sm font-bold text-slate-700 shadow-sm hover:shadow-sm hover:-translate-y-1 transition-all cursor-default">
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-10 sm:p-12 rounded-none border border-blue-900/30 space-y-8 premium-shadow relative overflow-hidden self-stretch flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-500/20 rounded-full blur-[80px]" />
            
            <h4 className="font-display font-semibold text-2xl text-white  tracking-tight border-b border-white/10 pb-6 relative z-10"> Workshop Highlights </h4>
            <ul className="space-y-5 text-base font-light text-slate-300 relative z-10">
              {[
                'Practical Industry-Level Lab Setups',
                'Verified Completion Certificates Issued',
                'Mentorship from Senior Engineering Staff',
                'Direct Pathing to Placement Drives',
                'Real-Time Code & Designing Challenges'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] transition-colors duration-300 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WORKSHOPS CATALOG GRID */}
      <section id="workshops-grid-section" className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-7xl mx-auto space-y-16 scroll-mt-12">
        <div className="text-center space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-[#0F172A] uppercase block">
            Select Your Workshop Path
          </span>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-slate-900 tracking-tight  leading-[1.1]"> Active College Workshop Modules </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Choose any workshop below to inspect curriculum outlines, conducting venues, lab criteria, hands-on tasks, and photo archives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopsData.map((workshop) => (
            <div 
              key={workshop.id}
              className="group bg-white border border-slate-100 p-8 sm:p-10 rounded-none shadow-sm hover:premium-shadow hover:shadow-slate-900/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Banner visual */}
              <div className="h-56 w-full rounded-sm overflow-hidden relative bg-slate-100 mb-8 border border-slate-100 shadow-sm relative z-10">
                <img 
                  src={workshop.bannerImage} 
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-slate-200/50">
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] uppercase text-slate-700 font-bold tracking-widest leading-none">Active</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-sm text-[10px] text-white tracking-widest uppercase font-bold border border-white/10">
                  {workshop.category}
                </div>
              </div>

              <div className="space-y-6 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0F172A] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] shadow-sm">
                      {getWorkshopIcon(workshop.id)}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight group-hover:text-[#0F172A] transition-colors leading-tight"> {workshop.title} </h4>
                      <span className="text-xs font-bold text-[#0F172A]/80 block mt-1 uppercase tracking-widest">
                        {workshop.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    {workshop.shortDescription}
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                    {workshop.colleges.length} Visakhapatnam Colleges
                  </span>
                  <button
                    onClick={() => onSelectWorkshop(workshop.id)}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#0F172A] text-white font-bold px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest cursor-pointer transition-all shadow-sm hover:premium-shadow hover:shadow-slate-500/20 active:scale-95 group/btn shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 - CALL TO ACTION */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1e4bb3] text-white p-12 sm:p-24 rounded-[4rem] border border-blue-400/20 premium-shadow relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="space-y-6 max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/10 text-slate-100 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              <span>Collegiate Booking Gateway</span>
            </span>
            <h3 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight leading-[1.1] text-white"> Request This Workshop Sequence For Your Campus </h3>
            <p className="text-lg text-slate-100 leading-relaxed font-light">
              Are you an academic director, head of department, or placement coordinator? We deliver tailored 2-day to 5-day workshop bootcamps directly in your lecture halls and labs. Includes comprehensive software setups, syllabus binders, and printed participant certificates.
            </p>
          </div>

          <button
            onClick={onNavigateToContact}
            className="relative z-10 bg-white hover:bg-slate-50 text-[#0F172A] font-semibold px-10 py-6 rounded-sm text-sm premium-shadow active:scale-95 transition-all hover:scale-105 uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3 shrink-0 group"
          >
            <span>Discuss Campus Booking</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
