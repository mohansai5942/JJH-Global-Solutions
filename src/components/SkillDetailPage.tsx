import React from 'react';
import { 
  ArrowLeft, Calendar, Clock, BookOpen, CheckCircle2, Cpu, Laptop, 
  HelpCircle, ChevronRight, Award, Shield, Send, MapPin, Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import { skillsData, SkillDetail } from '../data/skillsData';

interface SkillDetailPageProps {
  skillId: string;
  onBack: () => void;
  onNavigateToContact: () => void;
}

export default function SkillDetailPage({ skillId, onBack, onNavigateToContact }: SkillDetailPageProps) {
  const skill = skillsData.find(s => s.id === skillId);

  if (!skill) {
    return (
      <div className="w-full px-4 sm:px-8 lg:px-12 py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Course not found</h2>
      </div>
    );
  }

  return (
    <div id={`skill-detail-page-${skill.id}`} className="bg-slate-50 min-h-screen pb-20">
      
      {/* 2. Hero Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-8">
        <div className="relative overflow-hidden bg-white text-slate-900 rounded-none p-12 sm:p-20 premium-shadow shadow-slate-200/20 border border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 space-y-8 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-xs tracking-[0.2em] uppercase font-bold shadow-sm">
              <span>Specialized Syllabus Core</span>
            </div>

            <h1 className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl tracking-tight  leading-[1.05] text-slate-900"> {skill.name} </h1>

            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light max-w-3xl">
              {skill.tagline}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs tracking-[0.1em] uppercase font-bold text-slate-500">
              <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-sm flex items-center gap-3 shadow-sm">
                <Clock className="w-4 h-4 text-[#0F172A]" />
                <span>Duration: {skill.duration}</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 px-5 py-3 rounded-sm flex items-center gap-3 shadow-sm">
                <Laptop className="w-4 h-4 text-[#0F172A]" />
                <span>Mode: {skill.mode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. About & Course Metadata Layout */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: About & Curriculum */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* About Course */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-6">
            <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight border-b border-slate-100 pb-4"> About the Course </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {skill.aboutCourse}
            </p>
          </div>

          {/* Curriculum Modules */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight"> Course Syllabus & Curriculum </h3>
              <p className="text-slate-500 text-sm font-light">
                A structured, progressive syllabus designed to take candidates from novice concepts to corporate deployment.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              
              {/* Beginner */}
              <div className="border border-slate-100 rounded-sm overflow-hidden shadow-sm">
                <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Module 1: Beginner level Foundations</span>
                  <span className="text-[10px] tracking-[0.2em] text-[#0F172A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase">Phase 1</span>
                </div>
                <div className="p-6 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skill.modules.beginner.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                        <ChevronRight className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Intermediate */}
              <div className="border border-slate-100 rounded-sm overflow-hidden shadow-sm">
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Module 2: Intermediate Implementation</span>
                  <span className="text-[10px] tracking-[0.2em] text-slate-600 bg-slate-200 px-3 py-1 rounded-md font-bold uppercase">Phase 2</span>
                </div>
                <div className="p-6 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skill.modules.intermediate.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                        <ChevronRight className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Advanced */}
              <div className="border border-slate-100 rounded-sm overflow-hidden shadow-sm">
                <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Module 3: Advanced Systems & Capstone</span>
                  <span className="text-[10px] tracking-[0.2em] text-[#0F172A] bg-slate-100 px-3 py-1 rounded-md font-bold uppercase">Phase 3</span>
                </div>
                <div className="p-6 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skill.modules.advanced.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                        <ChevronRight className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white border border-slate-100 rounded-none p-10 sm:p-12 shadow-sm space-y-6">
            <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl  tracking-tight border-b border-slate-100 pb-4"> Tools & Technologies Handled </h3>
            <div className="flex flex-wrap gap-3 pt-2">
              {skill.tools.map((tool, i) => (
                <span 
                  key={i} 
                  className="bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2 rounded-sm border border-slate-200/60 uppercase tracking-[0.15em]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Audience, Training features & Call to Action info */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Who can join card */}
          <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6">
            <h4 className="font-display font-semibold text-slate-900 text-lg sm:text-xl  tracking-tight border-b border-slate-100 pb-4"> Who Can Join? </h4>
            <ul className="space-y-4">
              {skill.whoCanJoin.map((target, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Training features card */}
          <div className="bg-white border border-slate-100 rounded-none p-8 shadow-sm space-y-6">
            <h4 className="font-display font-semibold text-slate-900 text-lg sm:text-xl  tracking-tight border-b border-slate-100 pb-4"> Training Features </h4>
            <ul className="space-y-4">
              {skill.trainingFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#0F172A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to action card */}
          <div className="bg-white text-slate-900 rounded-none p-8 border border-slate-100 premium-shadow shadow-slate-200/30 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#0F172A]" />
            <div className="space-y-4">
              <span className="text-xs tracking-[0.2em] text-[#0F172A] uppercase font-bold block">
                Join Syllabus
              </span>
              <h4 className="font-display font-semibold text-xl sm:text-2xl  tracking-tight leading-tight"> Begin Your Learning Curve </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Secure placement assistance and verified global course certifications under direct JJH corporate training SLAs.
              </p>
            </div>

            <button
              onClick={onNavigateToContact}
              className="w-full bg-[#0F172A] hover:bg-slate-900 text-white font-semibold py-5 rounded-sm text-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 uppercase tracking-widest cursor-pointer text-center"
            >
              Contact Us to Join
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
