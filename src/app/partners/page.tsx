'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Rocket, 
  Briefcase, 
  Cloud, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import { CAMPUSES } from '@/lib/initialData';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function PartnersPage() {
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'college' | 'industry' | 'mentor'>('industry');

  const openModalWithCategory = (cat: 'college' | 'industry' | 'mentor') => {
    setActiveCategory(cat);
    setCollaborateOpen(true);
  };

  const partnerTypes = [
    {
      title: 'Academic Institutions',
      desc: 'Chartered campuses running WINQubit innovation chapters, student maker spaces, and faculty-led research tracks.',
      icon: Building2,
      action: 'Add Your College Chapter',
      cat: 'college' as const,
    },
    {
      title: 'Corporate & Enterprise Partners',
      desc: 'Industry leaders submitting live technical problem statements, sponsoring buildathons, and recruiting top engineering graduates.',
      icon: Briefcase,
      action: 'Bring Corporate Sprints',
      cat: 'industry' as const,
    },
    {
      title: 'Technology & Cloud Vendors',
      desc: 'Cloud platforms, API providers, and hardware manufacturers offering developer toolkits and compute credits.',
      icon: Cloud,
      action: 'Offer Cloud / Dev Credits',
      cat: 'industry' as const,
    },
    {
      title: 'Angel Investors & Mentors',
      desc: 'Seasoned tech founders, domain experts, and seed investors providing weekly feedback and early-stage capital.',
      icon: HeartHandshake,
      action: 'Join as Mentor / Investor',
      cat: 'mentor' as const,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-emerald-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Ecosystem & Campus Alliance
          </span>
          <div className="h-[1px] w-12 bg-emerald-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">Partners</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          WINQubit unites academic powerhouses, incubation ventures, and industry leaders to create an unmatched innovation playground in Mumbai.
        </p>
      </section>

      {/* 2. Academic Campuses Network */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            Academic Pillars
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Institutional Higher Education Partners
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Higher education institutes in Mumbai powering WINQubit innovation chapters on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUSES.map((c) => (
            <div
              key={c.id}
              className="bg-slate-900/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${c.badgeColor || 'border-violet-500/30 text-violet-400'}`}>
                    {c.shortName}
                  </span>
                  <span className="text-[10px] text-gray-500">{c.established}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                    {c.name}
                  </h3>
                  <div className="text-[11px] text-gray-400 mt-0.5">{c.tagline}</div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {c.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-[10px] text-gray-400 space-y-1">
                  <div className="text-white font-bold">Campus Governance:</div>
                  <div>• Principal + 2 Faculty Mentors</div>
                  <div>• 5 Student Leads</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5">
                <Link
                  href="/leadership"
                  className="text-xs font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  View Campus Committee →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. InQubit Venture Incubation Feature */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border border-violet-500/30 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold font-mono">
                <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                POWERED BY INQUBIT
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                InQubit Venture Incubator Alignment
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                InQubit acts as the institutional venture backing engine for WINQubit. Student teams with validated proof of concepts transition directly into InQubit’s full-scale venture pipeline—receiving pre-seed capital, co-working facilities, legal entity incorporation, and introductions to angel syndicates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3.5">
                  <div className="text-xs font-bold text-white">Pre-Seed Capital</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Direct investment routes for vetted student-led ventures.</div>
                </div>
                <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3.5">
                  <div className="text-xs font-bold text-white">Enterprise Pilots</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Introductions to Fortune 500 corporate deployment partners.</div>
                </div>
                <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-3.5">
                  <div className="text-xs font-bold text-white">Legal & Compliance</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Pvt. Ltd. incorporation, cap-table, and patent protection.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => openModalWithCategory('industry')}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg shadow-cyan-500/20"
              >
                Inquire About Co-Incubation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner Engagement Tiers */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            Collaboration Channels
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Ways to Partner with WINQubit
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Choose your profile to initiate an institutional or corporate onboarding discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partnerTypes.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <button
                    onClick={() => openModalWithCategory(pt.cat)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    {pt.action} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} defaultCategory={activeCategory} />
    </div>
  );
}
