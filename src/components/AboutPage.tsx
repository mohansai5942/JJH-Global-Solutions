import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Compass, Users, Target, ShieldCheck, Award, 
  MapPin, PhoneCall, Mail, Star, Sparkles, Building, ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onEnquire: () => void;
}

export default function AboutPage({ onBack, onEnquire }: AboutPageProps) {
  const leadership = [
    { name: 'E. Kiran Kumar', role: 'Founder', details: 'MBA, M.Tech, (Ph.D)', bio: 'Visionary leader dedicated to education consulting, placements, and technology-driven solutions, empowering students, professionals, and businesses to achieve growth and success.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'B. Jaya', role: 'Managing Director', details: 'B.Tech, M.Tech', bio: 'Leads JJH Global Solutions with a strong vision in education consulting, placements, and technology-driven growth strategies. Focused on building scalable solutions that empower students, professionals, and businesses.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' }
  ];

  const expertTeam = [
    { name: 'S. Prem Kumar', role: 'JAVA Developer, Gen AI Expert (Infosys)', details: 'Teaching Partner', bio: 'Java Developer & Generative AI Expert specializing in AI-powered applications, Machine Learning, and scalable enterprise solutions.', image: 'https://files.catbox.moe/it2u73.jpg' },
    { name: 'K. Mohan Rao', role: 'AI & Tech Expert', details: 'Diploma, B-Tech in AI.ML', bio: 'AI & Full-Stack Web Developer specializing in Generative AI, Machine Learning, and modern web technologies.', image: 'https://files.catbox.moe/hmmaap.png' },
    { name: 'K. Praveen Kumar', role: 'AI & Tech Expert', details: 'Diploma, B-Tech in AI.ML', bio: 'Specializes in Generative AI and Machine Learning workshop curriculum development and corporate training strategies.', image: 'https://cdn.imgchest.com/files/2eb5714c3cd9.png' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-24">

        <section className="space-y-6 text-center max-w-3xl mx-auto">
          <span className="text-[#0F172A] font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
          <h1 className="text-5xl sm:text-6xl font-display font-semibold text-slate-900  tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-blue-400">Us</span></h1>
          <p className="text-slate-500 text-xl font-light leading-relaxed">Empowering global growth through innovative solutions, strategic consulting, and technological excellence since our inception.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 space-y-6 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="w-16 h-16 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500 shadow-sm">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-display font-semibold text-2xl  tracking-tight text-slate-900 group-hover:text-[#0F172A] transition-colors">Our Purpose</h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">Driving Success Across Industries. At JJH Global Solutions, our mission is to empower individuals and organizations to achieve their full potential through comprehensive, innovative solutions across Education, Placements, and Software Services.</p>
          </div>
          <div className="bg-white p-10 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 space-y-6 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="w-16 h-16 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500 shadow-sm">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="font-display font-semibold text-2xl  tracking-tight text-slate-900 group-hover:text-[#0F172A] transition-colors">Our Vision</h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">To become a globally trusted solutions provider transforming education, careers, and digital growth through innovation and excellence.</p>
          </div>
          <div className="bg-white p-10 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 space-y-6 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="w-16 h-16 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500 shadow-sm">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="font-display font-semibold text-2xl  tracking-tight text-slate-900 group-hover:text-[#0F172A] transition-colors">Our Mission</h3>
            <p className="text-slate-600 text-base leading-relaxed font-light">To empower individuals and organizations with reliable education guidance, placement support, and advanced software solutions.</p>
          </div>
        </section>

        <section className="bg-white p-12 sm:p-16 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] pointer-events-none" />
          <div className="space-y-4 mb-16 relative z-10 text-center">
            <span className="text-[#0F172A] font-bold tracking-[0.3em] uppercase text-xs">Our DNA</span>
            <h3 className="font-display font-semibold text-4xl  tracking-tight text-slate-900">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { title: 'Excellence', icon: <Award className="w-6 h-6" />, desc: 'We strive for excellence in every service we provide, ensuring the highest quality outcomes for our clients.' },
              { title: 'Integrity', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Trust and transparency are at the core of everything we do, building lasting relationships with our clients.' },
              { title: 'Innovation', icon: <Sparkles className="w-6 h-6" />, desc: 'We embrace innovation and continuously evolve our services to meet the changing needs of our clients.' },
              { title: 'Collaboration', icon: <Users className="w-6 h-6" />, desc: 'Success is achieved through partnership and collaboration with our clients and team members.' }
            ].map((v, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-slate-50 text-[#0F172A] flex items-center justify-center shadow-inner border border-slate-100">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-xl text-slate-900">{v.title}</h4>
                <p className="text-slate-500 text-base font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#0F172A] font-bold tracking-[0.3em] uppercase text-xs">Governance</span>
            <h3 className="font-display font-semibold text-4xl  tracking-tight text-slate-900">Leadership</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((l, i) => (
              <div key={i} className="bg-white p-10 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 flex flex-col sm:flex-row gap-8 items-center sm:items-start group hover:-translate-y-2 transition-all duration-500">
                <img src={l.image} alt={l.name} className="w-32 h-32 rounded-full object-cover border-4 border-blue-50 premium-shadow shrink-0" />
                <div className="space-y-3 text-center sm:text-left">
                  <h4 className="font-display font-semibold text-2xl text-slate-900 group-hover:text-[#0F172A] transition-colors">{l.name}</h4>
                  <p className="text-[#0F172A] text-sm font-bold uppercase tracking-widest">{l.role}</p>
                  <p className="text-xs text-slate-400 font-mono tracking-wide">{l.details}</p>
                  <p className="text-base text-slate-600 pt-2 font-light leading-relaxed">{l.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#0F172A] font-bold tracking-[0.3em] uppercase text-xs">Our Talent</span>
            <h3 className="font-display font-semibold text-4xl  tracking-tight text-slate-900">Expert Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertTeam.map((m, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="relative bg-white p-10 rounded-none border border-slate-100 premium-shadow shadow-slate-200/20 flex flex-col items-center text-center space-y-6 cursor-pointer group overflow-hidden"
              >
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-50 transition-all duration-500 group-hover:absolute group-hover:inset-0 group-hover:w-full group-hover:h-full group-hover:rounded-none z-10" 
                />
                <div className="space-y-3 transition-opacity duration-300 group-hover:opacity-0 z-20">
                  <h4 className="font-display font-semibold text-2xl text-slate-900">{m.name}</h4>
                  <p className="text-[#0F172A] text-sm font-bold uppercase tracking-widest">{m.role}</p>
                  <p className="text-xs text-slate-400 font-mono italic tracking-wide">{m.details}</p>
                  <p className="text-base text-slate-500 pt-3 font-light leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0F172A] to-[#1e4bb3] text-white p-16 sm:p-24 rounded-none text-center space-y-10 premium-shadow relative overflow-hidden border border-blue-400/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h3 className="font-display font-semibold text-5xl sm:text-6xl  tracking-tight">Ready to Work Together?</h3>
            <p className="text-slate-100 text-xl font-light max-w-2xl mx-auto leading-relaxed">Join hundreds of satisfied clients who have achieved their goals with JJH Global Solutions.</p>
          </div>
          <button onClick={onEnquire} className="relative z-10 bg-white text-[#0F172A] px-10 py-5 rounded-sm font-bold transition-all hover:bg-slate-50 premium-shadow hover:scale-105 uppercase tracking-widest text-sm flex items-center gap-3 mx-auto">
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
}
