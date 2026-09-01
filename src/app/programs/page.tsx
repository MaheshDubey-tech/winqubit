'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Award, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Cpu,
  Plane,
  Utensils,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';
import { CORE_PROGRAMS } from '@/lib/initialData';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function ProgramsPage() {
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const iconMap: Record<string, any> = {
    Flame: Zap,
    Sparkles: Sparkles,
    Award: Award,
    Rocket: Rocket,
  };

  const synergies = [
    {
      campuses: 'TSEC (Engineering) + TIAT (Aviation)',
      title: 'Autonomous Drone Logistics & Avionics IoT',
      desc: 'Computer science & electronics students at TSEC build AI flight software and sensor telemetry for heavy-lift drones fabricated at TIAT hangar bays.',
      icon: Plane,
    },
    {
      campuses: 'TSEC (Engineering) + TIHM (Hospitality)',
      title: 'Smart Kitchen Automation & Sustainable Packaging',
      desc: 'Robotics and embedded systems engineers partner with culinary scientists to design automated food dispensing machines and compostable packaging.',
      icon: Utensils,
    },
    {
      campuses: 'TSDC (Commerce/Data) + TSEC (Software)',
      title: 'FinTech & Algorithmic Student Commerce',
      desc: 'Finance and data science students build economic models, escrow wallets, and gig platforms with software engineers.',
      icon: TrendingUp,
    },
    {
      campuses: 'TIAT (Aviation) + TIHM (Hospitality)',
      title: 'In-Flight Hospitality & Food Preservation Tech',
      desc: 'Aviation systems specialists collaborate with food science researchers on pressure-stable meal formulations and galley logistics.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-violet-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Incubation Cohorts & Acceleration Tracks
          </span>
          <div className="h-[1px] w-12 bg-violet-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400">Programs</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          From weekend hackathons to intensive 12-week venture bootcamps and full-stage InQubit institutional incubation.
        </p>
      </section>

      {/* 2. Programs In-Depth Cards */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_PROGRAMS.map((prog) => {
            const Icon = iconMap[prog.icon] || Sparkles;
            return (
              <div
                key={prog.id}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-violet-500/30 transition group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center group-hover:scale-110 transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {prog.category}
                        </div>
                        <h3 className="text-lg font-bold text-white">{prog.title}</h3>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-bold">
                      {prog.activeStatus}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 font-medium">
                    {prog.tagline}
                  </p>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950/60 p-3.5 rounded-2xl border border-white/5">
                    <div>
                      <span className="text-[10px] text-gray-500 block">Duration</span>
                      <span className="font-semibold text-white">{prog.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Cohort Size</span>
                      <span className="font-semibold text-cyan-400">{prog.intake}</span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-white/5">
                      <span className="text-[10px] text-gray-500 block">Eligibility</span>
                      <span className="font-semibold text-gray-300 text-[11px]">{prog.eligibility}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-bold text-violet-400 uppercase tracking-wider">Key Benefits & Offerings</div>
                    {prog.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs font-bold text-emerald-400">
                    {prog.grantAmount || 'Zero-Equity Grant Support'}
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-5 py-2 rounded-full transition shadow-lg shadow-violet-600/20"
                  >
                    Apply for Cohort →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Cross-Campus Synergy Matrix */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/30 border border-white/10 rounded-[2.5rem] p-6 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
              Interdisciplinary Power
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Cross-Campus Synergy Matrix
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Why our 4-institution ecosystem creates unique product advantages that single-discipline colleges cannot replicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {synergies.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/30 transition group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                      {s.campuses}
                    </span>
                    <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">{s.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
