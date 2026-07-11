import React from 'react';
import { Award, ShieldCheck, Briefcase, GraduationCap, ChevronUp, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function SectorStats() {
  const highlightStats = [
    { label: 'Visas Approved', value: '3,200+', detail: 'USA, UK & EU', icon: GraduationCap, color: 'text-slate-800 bg-slate-50 border-slate-200' },
    { label: 'Bulk Hiring Placements', value: '8,500+', detail: 'Avg 9-day onboarding', icon: Briefcase, color: 'text-slate-900 bg-slate-50 border-slate-200' },
    { label: 'Institution Affiliates', value: '120+', detail: 'Engineering & Degree', icon: Award, color: 'text-sky-600 bg-sky-50 border-sky-100' },
    { label: 'Active Corporate Clients', value: '85+', detail: 'HR & Tech projects', icon: Users, color: 'text-blue-800 bg-slate-50 border-slate-200' },
  ];

  const sectorPerformances = [
    { name: 'Education - Placements & Training', score: '94%', count: '25k+ Trained', growth: '+18.4% YoY' },
    { name: 'Education - Overseas Visas', score: '98.7%', count: '3.2k Placed', growth: '+22.1% YoY' },
    { name: 'Software Services - Development', score: '91%', count: '110+ Delivered', growth: '+28.5% YoY' },
    { name: 'HR Solutions - Permanent & Temporary Staffing', score: '95.2%', count: '12k+ Placed', growth: '+15.6% YoY' },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-900 rounded-sm p-6 md:p-10 border border-slate-200 shadow-sm space-y-8">
      <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:20px_20px] opacity-75" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl" />
      
      {/* Upper section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#0F172A] uppercase font-bold block">
            Annual Business Review 2026
          </span>
          <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight  mt-1 text-slate-900"> Group Capabilities Index </h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-sm px-4 py-2 text-xs text-slate-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
          <span>Vetted & ISO Certified Operations</span>
        </div>
      </div>

      {/* Grid of highlights */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {highlightStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-sm p-5 space-y-3 relative group overflow-hidden transition-all hover:border-[#0F172A]/30 shadow-3xs">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#0F172A]/5 rounded-full blur-xl group-hover:bg-[#0F172A]/10 transition-all duration-500" />
              
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-sm flex items-center justify-center border ${stat.color.replace('blue-600', '[#0F172A]').replace('blue-50', 'white').replace('blue-100', 'slate-200')}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center text-[#0F172A] text-[10px] font-mono font-bold">
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>9.4%</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="block font-display text-2xl font-bold tracking-tight text-slate-900 font-mono">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold text-slate-600">
                  {stat.label}
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">
                  {stat.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grid of growth bars */}
      <div className="relative z-10 border-t border-slate-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-slate-900  tracking-wider"> Operational Delivery Index </h4>
          <p className="text-xs text-slate-500 leading-relaxed font-light">
            Each branch operates under strict, independently audited service SLAs, guaranteeing maximum placement conversion, legal vetting transparency, and software up-time.
          </p>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-sm border border-slate-200 shadow-3xs">
            <div className="text-center shrink-0 border-r border-slate-200 pr-4">
              <span className="block font-mono text-xl font-bold text-[#0F172A]">97.4%</span>
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Overall Rating</span>
            </div>
            <p className="text-[11px] text-slate-500 font-light">
              Calculated across 45,000+ candidate inputs, global HR solutions, and high-scale software deployments.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-bold text-sm text-[#0F172A]  tracking-wider"> Sector Performance Matrix </h4>
          
          <div className="space-y-3">
            {sectorPerformances.map((perf, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-700">{perf.name}</span>
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="text-slate-400">{perf.count}</span>
                    <span className="text-[#0F172A] font-bold">{perf.score}</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className="h-full bg-[#0F172A] rounded-full" 
                    style={{ width: perf.score }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
