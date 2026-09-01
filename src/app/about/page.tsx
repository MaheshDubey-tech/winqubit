'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Users, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Award,
  Zap,
  Lock
} from 'lucide-react';
import { STRATEGIC_MANDATES, CAMPUSES } from '@/lib/initialData';
import { JoinModal } from '@/components/shared/JoinModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function AboutPage() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-violet-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Brand & Ecosystem Philosophy
          </span>
          <div className="h-[1px] w-12 bg-violet-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400">WINQubit</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Women-Led. Inclusive. Student-Driven. WINQubit is a multidisciplinary student innovation and pre-incubation ecosystem powered by InQubit across premier academic institutions in Mumbai.
        </p>

        {/* 4 Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-10">
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-violet-400">4</div>
            <div className="text-[11px] font-bold text-white mt-0.5">Active Campuses</div>
            <div className="text-[10px] text-gray-500">TSEC, TSDC, TIAT, TIHM</div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-cyan-400">100%</div>
            <div className="text-[11px] font-bold text-white mt-0.5">Student IP Retained</div>
            <div className="text-[10px] text-gray-500">Pre-Incubation Stage</div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-emerald-400">₹2.5L</div>
            <div className="text-[11px] font-bold text-white mt-0.5">Prototype Grants</div>
            <div className="text-[10px] text-gray-500">Zero-Equity Seed Support</div>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center">
            <div className="font-display text-2xl font-bold text-indigo-400">Direct</div>
            <div className="text-[11px] font-bold text-white mt-0.5">InQubit Pipeline</div>
            <div className="text-[10px] text-gray-500">Venture Incubation</div>
          </div>
        </div>
      </section>

      {/* 2. Identity & Origin Story */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest">
              Our Identity
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Bridging Campus Research and Market Reality
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
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
            <div className="bg-gradient-to-br from-violet-950/40 via-slate-900 to-slate-950 border border-violet-500/20 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="font-mono text-xs text-cyan-400 font-bold">ECOSYSTEM CHARTER</div>
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">4 Distinct Academic Campuses</h4>
                    <p className="text-[11px] text-gray-400">Engineering, Sciences/Commerce, Aviation Sciences, and Hospitality Technology.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">InQubit Venture Alignment</h4>
                    <p className="text-[11px] text-gray-400">Direct escalation from student MVP to seed funding, equity structuring, and enterprise pilots.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Zero-Equity Pre-Incubation</h4>
                    <p className="text-[11px] text-gray-400">Students maintain complete intellectual property rights throughout the proof-of-concept phase.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setJoinOpen(true)}
                  className="text-xs font-bold text-cyan-400 hover:underline"
                >
                  Join as Student Member (₹500) →
                </button>
                <button
                  onClick={() => setCollaborateOpen(true)}
                  className="text-xs font-bold text-gray-400 hover:text-white"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            Governance Framework
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Strategic Mandates & Network Responsibilities
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            The core responsibilities overseen by the Central Management Board in coordination with campus faculty mentors and student leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STRATEGIC_MANDATES.map((mandate, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition group space-y-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-violet-600/20 text-violet-400 font-mono text-xs font-bold flex items-center justify-center">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                {mandate.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
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
