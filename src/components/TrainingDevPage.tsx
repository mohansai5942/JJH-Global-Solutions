import React, { useRef } from 'react';
import { 
  GraduationCap, CheckCircle2, Award, Users, BookOpen, Clock, Laptop, 
  ArrowRight, Shield, Sparkles, Code, Cpu, Layers, FileText, Briefcase, Play
} from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData, SkillDetail } from '../data/skillsData';

interface TrainingDevPageProps {
  onSelectSkill: (skillId: string) => void;
  onNavigateToContact: () => void;
}

export default function TrainingDevPage({ onSelectSkill, onNavigateToContact }: TrainingDevPageProps) {
  const coursesRef = useRef<HTMLDivElement>(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Helper to map string to lucide icons for skills
  const getSkillIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Code': return <Code className={className} />;
      case 'Globe': return <Layers className={className} />; // Fallback or customize
      case 'FileText': return <FileText className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Section 3: Why Choose Cards
  const whyChooseItems = [
    { title: 'Industry Expert Trainers', desc: 'Learn directly from veteran software engineers, certified accountants, and BIM architects with years of real field experience.', icon: Users, color: 'bg-[#0F172A]' },
    { title: 'Real-Time Project Training', desc: 'Work on actual production-level codebases, architectural designs, and ledger books to build your real workplace experience.', icon: Laptop, color: 'bg-[#0F172A]' },
    { title: 'Placement Assistance', desc: 'We offer direct corporate connection slots, resume review clinics, and interview scheduling with over 45+ partner MNC companies.', icon: Briefcase, color: 'bg-[#0F172A]' },
    { title: 'Certification Programs', desc: 'Receive ISO-compliant and industry-recognized certifications to make your resume highly searchable to recruiters.', icon: Award, color: 'bg-[#0F172A]' },
    { title: 'Flexible Learning Options', desc: 'Study at your own pace with our flexible classroom batches, weekend modules, and online hybrid courses.', icon: Clock, color: 'bg-[#0F172A]' },
    { title: 'Corporate Standard Training', desc: 'Our rigorous curriculum is developed in tandem with enterprise staffing managers to guarantee immediate workplace readiness.', icon: Shield, color: 'bg-[#0F172A]' }
  ];

  return (
    <div id="training-development-parent-page" className="bg-slate-50 min-h-screen pb-24">
      
      {/* SECTION 1 - HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-slate-900 py-32 sm:py-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]" />
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 text-center space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-bold tracking-[0.2em] uppercase shadow-sm"
          >
            <span>Training & Placements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-5xl sm:text-7xl tracking-tight leading-[1.05] uppercase text-slate-900"
          >
            Professional Development at <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-blue-400">JJH Global Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Master high-demand technical and professional skills through our industry-vetted training programs. Designed for students and professionals seeking career acceleration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8"
          >
            <button
              onClick={scrollToCourses}
              className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-900 text-white font-semibold px-10 py-5 rounded-sm text-sm premium-shadow shadow-slate-900/20 active:scale-95 transition-all uppercase tracking-widest cursor-pointer flex items-center justify-center gap-3 hover:scale-105 group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-bold px-10 py-5 rounded-sm text-sm shadow-sm active:scale-95 transition-all hover:bg-slate-50 uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
            >
              <span>Get in Touch</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – ABOUT OUR TRAINING */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-24 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-20 premium-shadow shadow-slate-200/20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-full bg-[#0F172A]" />
          <div className="lg:col-span-7 space-y-10 relative z-10">
            <div className="space-y-6">
              <span className="text-xs tracking-[0.3em] text-[#0F172A] uppercase font-bold block">
                Educational Philosophy
              </span>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl text-slate-900 tracking-tight  leading-[1.1]"> About Our Training Ecosystem </h2>
            </div>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light">
              JJH Global Solutions offers industry-oriented training programs designed by experienced professionals. 
              Our training is focused on practical knowledge, real-time implementation, and industry exposure.
            </p>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light">
              By working closely with multinational tech divisions, structural engineering agencies, and accounting consultancies, 
              we continuously adjust our syllabus arrays to ensure candidates gain skills that match current recruitment needs.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-10 sm:p-12 rounded-none border border-blue-900/30 space-y-8 premium-shadow relative overflow-hidden self-stretch flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-500/20 rounded-full blur-[80px]" />
            <h4 className="font-display font-semibold text-2xl text-white  tracking-tight border-b border-white/10 pb-6 relative z-10"> Key Program Features </h4>
            <ul className="space-y-5 text-base font-light text-slate-300 relative z-10">
              {[
                'Practical Hands-on Training',
                'Live Project Experience',
                'Industry Standard Curriculum',
                'Placement Assistance',
                'Certification Support'
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

      {/* SECTION 3 – WHY CHOOSE OUR TRAINING */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <span className="text-xs tracking-[0.3em] text-[#0F172A] uppercase font-bold block">
            The JJH Advantage
          </span>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-slate-900 tracking-tight  leading-[1.1]"> Why Choose Our Training? </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Gaining professional readiness demands excellence across curriculum, projects, and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="group bg-white border border-slate-100 p-10 rounded-none shadow-sm hover:premium-shadow hover:shadow-slate-900/10 transition-all duration-500 space-y-6 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className={`w-14 h-14 rounded-sm ${item.color} flex items-center justify-center text-white premium-shadow shadow-slate-500/20 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-4 relative z-10">
                  <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight leading-tight group-hover:text-[#0F172A] transition-colors"> {item.title} </h4>
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 – TECHNICAL SKILLS TRAINING */}
      <section ref={coursesRef} className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <span className="text-xs tracking-[0.3em] text-[#0F172A] uppercase font-bold block">
            Career Tracks
          </span>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-slate-900 tracking-tight  leading-[1.1]"> Explore Professional Skills </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Select a program to view detailed curriculum modules, tools, and certification details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              onClick={() => onSelectSkill(skill.id)}
              className="group bg-white border border-slate-100 hover:border-slate-300 p-8 rounded-none shadow-sm hover:premium-shadow hover:shadow-slate-900/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Highlight accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#0F172A] transition-colors duration-500" />
              
              <div className="space-y-6 pt-2">
                <div className="w-14 h-14 rounded-sm bg-slate-50 group-hover:bg-[#0F172A] flex items-center justify-center text-[#0F172A] group-hover:text-white transition-all duration-500 shadow-sm group-hover:premium-shadow group-hover:shadow-slate-500/30 group-hover:scale-110">
                  {getSkillIcon(skill.iconName, 'w-6 h-6')}
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-display font-semibold text-slate-900 text-lg  tracking-tight group-hover:text-[#0F172A] transition-colors leading-tight"> {skill.name} </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                    {skill.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-[10px] text-slate-400 group-hover:text-[#0F172A] transition-colors">
                <span className="font-bold uppercase tracking-widest">{skill.duration} • {skill.mode.split(' ')[0]}</span>
                <span className="font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  View Syllabus <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 – SKILLS TRAINING APPROACH */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white rounded-none p-12 sm:p-20 relative overflow-hidden premium-shadow border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs tracking-[0.3em] text-slate-400 uppercase font-bold block">
                Pedagogy & Execution
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight  leading-[1.1]"> Our Skills Training Approach </h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl">
                Our training programs bridge the gap between academic learning and industry requirements. 
                Students gain practical experience through live projects, real-time case studies, and hands-on sessions.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-white/5 border border-white/10 rounded-none p-8 space-y-4 max-w-sm backdrop-blur-sm">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Practical Model</span>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  We emphasize a balanced practical-to-conceptual ratio to ensure skill retention and workplace readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – CALL TO ACTION */}
      <section className="w-full px-4 sm:px-8 lg:px-12 mt-32 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="font-display font-semibold text-4xl sm:text-6xl text-slate-900  tracking-tight leading-[1.05]"> Start Your Career Transformation Today </h2>
        <p className="text-slate-500 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Unlock accredited certification catalogs and schedule immediate direct corporate recruiter slots with JJH Global.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
          <button
            onClick={scrollToCourses}
            className="w-full sm:w-auto bg-[#0F172A] hover:bg-slate-900 text-white font-semibold px-12 py-5 rounded-sm text-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 uppercase tracking-widest cursor-pointer group flex items-center justify-center gap-3"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onNavigateToContact}
            className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-12 py-5 rounded-sm text-sm shadow-sm transition-all hover:scale-105 uppercase tracking-widest cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}
