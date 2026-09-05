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
  ArrowRight 
} from 'lucide-react';
import { CAMPUSES } from '@/lib/initialData';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function PartnersPage() {
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const partnerTypes = [
    {
      title: 'Academic Institutions',
      desc: 'Chartered campuses running WINQubit innovation chapters, student maker spaces, and faculty-led research tracks.',
      icon: Building2,
      action: 'Add Your College Chapter',
    },
    {
      title: 'Corporate & Enterprise Partners',
      desc: 'Industry leaders submitting live technical problem statements, sponsoring buildathons, and recruiting top engineering graduates.',
      icon: Briefcase,
      action: 'Bring Corporate Sprints',
    },
    {
      title: 'Technology & Cloud Vendors',
      desc: 'Cloud platforms, API providers, and hardware manufacturers offering developer toolkits and compute credits.',
      icon: Cloud,
      action: 'Offer Cloud / Dev Credits',
    },
    {
      title: 'Angel Investors & Mentors',
      desc: 'Seasoned tech founders, domain experts, and seed investors providing weekly feedback and early-stage capital.',
      icon: HeartHandshake,
      action: 'Join as Mentor / Investor',
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Ecosystem & Campus Alliance
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Partners</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          WINQubit unites academic powerhouses, incubation ventures, and industry leaders to create an unmatched innovation playground in Mumbai.
        </p>
      </section>

      {/* 2. Academic Campuses Network */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
            Academic Pillars
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Institutional Higher Education Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
            Higher education institutes in Mumbai powering WINQubit innovation chapters on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUSES.map((c) => (
            <div
              key={c.id}
              className="glass-card-light p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/15">
                    {c.shortName}
                  </span>
                  <span className="text-[11px] font-bold text-[#8E87A5]">{c.established}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1E1632] group-hover:text-[#5D1451] transition">
                    {c.name}
                  </h3>
                  <div className="text-xs text-[#E83CB7] font-semibold mt-0.5">{c.tagline}</div>
                </div>

                <p className="text-xs text-[#6E6785] leading-relaxed">
                  {c.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#F7F5FF] border border-[#E9E6F2] text-xs text-[#6E6785] space-y-1">
                  <div className="text-[#1E1632] font-bold">Campus Governance:</div>
                  <div>• Principal + 2 Faculty Mentors</div>
                  <div>• 5 Student Leads</div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E9E6F2]">
                <Link
                  href="/leadership"
                  className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] hover:underline inline-flex items-center gap-1"
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
        <div className="bg-gradient-to-r from-[#5D1451] via-[#7B1C6D] to-[#E83CB7] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold font-mono backdrop-blur-md">
                <Rocket className="w-3.5 h-3.5 text-[#FFD6F3]" />
                POWERED BY INQUBIT
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">
                InQubit Venture Incubator Alignment
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                InQubit acts as the institutional venture backing engine for WINQubit. Student teams with validated proof of concepts transition directly into InQubit’s full-scale venture pipeline—receiving pre-seed capital, co-working facilities, legal entity incorporation, and introductions to angel syndicates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="text-xs font-bold text-white">Pre-Seed Capital</div>
                  <div className="text-[11px] text-white/70 mt-0.5">Direct investment routes for vetted student-led ventures.</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="text-xs font-bold text-white">Enterprise Pilots</div>
                  <div className="text-[11px] text-white/70 mt-0.5">Introductions to Fortune 500 corporate deployment partners.</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="text-xs font-bold text-white">Legal & Compliance</div>
                  <div className="text-[11px] text-white/70 mt-0.5">Pvt. Ltd. incorporation, cap-table, and patent protection.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => setCollaborateOpen(true)}
                className="bg-white text-[#5D1451] hover:bg-white/95 font-black text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg hover:scale-105 active:scale-95"
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
            Collaboration Channels
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Ways to Partner with WINQubit
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
            Choose your profile to initiate an institutional or corporate onboarding discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partnerTypes.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="glass-card-light p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E1632]">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#6E6785] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E9E6F2]">
                  <button
                    onClick={() => setCollaborateOpen(true)}
                    className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] inline-flex items-center gap-1"
                  >
                    {pt.action} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
