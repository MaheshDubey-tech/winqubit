'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Building2, 
  Rocket, 
  Lock, 
  ArrowRight,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { STRATEGIC_MANDATES } from '@/lib/initialData';
import { JoinModal } from '@/components/shared/JoinModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function AboutPage() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Brand & Ecosystem Philosophy
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">WINQubit</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Women-Led. Inclusive. Student-Driven. WINQubit is a multidisciplinary student innovation and pre-incubation ecosystem powered by InQubit across premier academic institutions in Mumbai.
        </p>

        {/* 4 Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto mt-10">
          <div className="glass-card-light p-5 text-center">
            <div className="font-display text-3xl font-black text-[#5D1451]">4</div>
            <div className="text-xs font-bold text-[#1E1632] mt-1">Active Campuses</div>
            <div className="text-[11px] text-[#6E6785]">TSEC, TSDC, TIAT, TIHM</div>
          </div>
          <div className="glass-card-light p-5 text-center">
            <div className="font-display text-3xl font-black text-[#E83CB7]">100%</div>
            <div className="text-xs font-bold text-[#1E1632] mt-1">Student IP Retained</div>
            <div className="text-[11px] text-[#6E6785]">Pre-Incubation Stage</div>
          </div>
          <div className="glass-card-light p-5 text-center">
            <div className="font-display text-3xl font-black text-[#059669]">₹2.5L</div>
            <div className="text-xs font-bold text-[#1E1632] mt-1">Prototype Grants</div>
            <div className="text-[11px] text-[#6E6785]">Zero-Equity Seed Support</div>
          </div>
          <div className="glass-card-light p-5 text-center">
            <div className="font-display text-3xl font-black text-[#0284C7]">Direct</div>
            <div className="text-xs font-bold text-[#1E1632] mt-1">InQubit Pipeline</div>
            <div className="text-[11px] text-[#6E6785]">Venture Incubation</div>
          </div>
        </div>
      </section>

      {/* 2. Identity & Origin Story */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest">
              Our Identity
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
              Bridging Campus Research and Market Reality
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#6E6785] leading-relaxed">
              <p>
                WINQubit was founded to dismantle the traditional academic silos that separate engineers from designers, commercial strategists from technicians, and student innovators from institutional venture capital.
              </p>
              <p>
                Operating across Thakur Shyamnarayan Engineering College (TSEC), Thakur Shyamnarayan Degree College (TSDC), Thakur Institute of Aviation Technology (TIAT), and Thakur Institute of Hotel Management (TIHM), WINQubit forms an integrated launchpad where interdisciplinary teams build real, tested prototypes.
              </p>
              <p>
                Powered by InQubit, student builders gain early-stage proof-of-concept funding, access to advanced fabrication labs, intellectual property guidance, and direct pathways into institutional venture incubation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E9E6F2] pb-4">
                <div className="font-mono text-xs text-[#5D1451] font-bold tracking-wider uppercase">ECOSYSTEM CHARTER</div>
                <Sparkles className="w-4 h-4 text-[#E83CB7]" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E1632]">4 Distinct Academic Campuses</h4>
                    <p className="text-[11px] text-[#6E6785]">Engineering, Sciences/Commerce, Aviation Sciences, and Hospitality Technology.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E83CB7]/10 text-[#E83CB7] flex items-center justify-center shrink-0">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E1632]">InQubit Venture Alignment</h4>
                    <p className="text-[11px] text-[#6E6785]">Direct escalation from student MVP to seed funding, equity structuring, and enterprise pilots.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E1632]">Zero-Equity Pre-Incubation</h4>
                    <p className="text-[11px] text-[#6E6785]">Students maintain complete intellectual property rights throughout the proof-of-concept phase.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E6F2] flex items-center justify-between">
                <button
                  onClick={() => setJoinOpen(true)}
                  className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] hover:underline"
                >
                  Join as Student Member (₹500) →
                </button>
                <button
                  onClick={() => setCollaborateOpen(true)}
                  className="text-xs font-bold text-[#6E6785] hover:text-[#1E1632]"
                >
                  Partner With Us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategic Mandates & Governance */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            Governance Framework
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Strategic Mandates & Network Responsibilities
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
            The core responsibilities overseen by the Central Management Board in coordination with campus faculty mentors and student leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STRATEGIC_MANDATES.map((mandate, idx) => (
            <div
              key={idx}
              className="glass-card-light p-6 space-y-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#5D1451]/10 text-[#5D1451] font-mono text-xs font-black flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-[#1E1632]">
                {mandate.title}
              </h3>
              <p className="text-xs text-[#6E6785] leading-relaxed">
                {mandate.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Interactive Modals */}
      <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
