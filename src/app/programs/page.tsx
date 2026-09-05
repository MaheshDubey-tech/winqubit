'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  Award, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Plane, 
  Utensils, 
  TrendingUp 
} from 'lucide-react';
import { CORE_PROGRAMS } from '@/lib/initialData';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';
import { Badge } from '@/components/ui/Badge';

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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Incubation Cohorts & Acceleration Tracks
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Programs</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
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
                className="glass-card-light p-6 md:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#5D1451]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#E83CB7] font-bold uppercase tracking-wider">
                          {prog.category}
                        </div>
                        <h3 className="text-lg font-black text-[#1E1632]">{prog.title}</h3>
                      </div>
                    </div>
                    <Badge variant={prog.activeStatus === 'Ongoing' ? 'ongoing' : 'upcoming'} size="sm">
                      {prog.activeStatus}
                    </Badge>
                  </div>

                  <p className="text-xs text-[#5D1451] font-bold">
                    {prog.tagline}
                  </p>

                  <p className="text-xs text-[#6E6785] leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-[#F7F5FF] p-4 rounded-2xl border border-[#E9E6F2]">
                    <div>
                      <span className="text-[10px] text-[#8E87A5] font-semibold block">Duration</span>
                      <span className="font-bold text-[#1E1632]">{prog.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8E87A5] font-semibold block">Cohort Size</span>
                      <span className="font-bold text-[#5D1451]">{prog.intake}</span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-[#E9E6F2]">
                      <span className="text-[10px] text-[#8E87A5] font-semibold block">Eligibility</span>
                      <span className="font-medium text-[#6E6785] text-[11px]">{prog.eligibility}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-black text-[#5D1451] uppercase tracking-wider">Key Benefits & Offerings</div>
                    {prog.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#6E6785]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9E6F2] flex items-center justify-between">
                  <div className="text-xs font-bold text-[#059669]">
                    {prog.grantAmount || 'Zero-Equity Grant Support'}
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="btn-primary text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-md"
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
        <div className="glass-panel p-6 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
              Interdisciplinary Power
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
              Cross-Campus Synergy Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
              Why our 4-institution ecosystem creates unique product advantages that single-discipline colleges cannot replicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {synergies.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-light p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#5D1451] bg-[#5D1451]/10 px-2.5 py-0.5 rounded-full border border-[#5D1451]/15">
                      {s.campuses}
                    </span>
                    <Icon className="w-4 h-4 text-[#E83CB7]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#1E1632]">{s.title}</h4>
                  <p className="text-xs text-[#6E6785] leading-relaxed">{s.desc}</p>
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
