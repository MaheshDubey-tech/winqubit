'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CreditCard, 
  CheckCircle2, 
  Compass, 
  Users, 
  Wrench, 
  Rocket, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown,
  Lock,
  Layers
} from 'lucide-react';
import { STUDENT_LIFECYCLE, FAQS } from '@/lib/initialData';
import { JoinModal } from '@/components/shared/JoinModal';
import { InnovateModal } from '@/components/shared/InnovateModal';

export default function StudentsPage() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const lifecycleIconMap: Record<string, any> = {
    Compass,
    Users,
    Wrench,
    CheckCircle2,
    Rocket,
  };

  const perks = [
    {
      title: 'Verified Campus Maker & Lab Access',
      desc: 'Access advanced 3D printers, AI GPUs, embedded IoT sensor kits, TIAT drone hangars, and TIHM food tech kitchens across Mumbai.',
      icon: Wrench,
    },
    {
      title: 'Prototype Micro-Grants (up to ₹2.5L)',
      desc: 'Apply for zero-equity proof-of-concept funding to buy hardware sensors, custom PCBs, cloud API credits, and fabrication materials.',
      icon: Sparkles,
    },
    {
      title: 'Multidisciplinary Team Matchmaking',
      desc: 'Connect with coders, data scientists, aviation pilots, business minds, and culinary specialists across the 4 partner campuses.',
      icon: Users,
    },
    {
      title: '1-on-1 Industry & Founder Mentorship',
      desc: 'Get matched with senior technical directors, venture capitalists, and serial entrepreneurs for weekly guidance.',
      icon: Compass,
    },
    {
      title: 'Free Entry to HackSpark & Sprints',
      desc: 'Guaranteed participation in multi-campus hackathons, hardware sprints, and venture pitch days with corporate problem statements.',
      icon: Rocket,
    },
    {
      title: 'Direct InQubit Incubation Gateway',
      desc: 'Fast-track transition into full institutional incubation, seed equity funding, co-working facilities, and enterprise client pilots.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Hero Header */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-cyan-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Student Innovator Hub
          </span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Start With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400">An Idea</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          “You don't need a finished product—just a burning curiosity to solve real problems.” Join 500+ student innovators across Mumbai.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => setJoinOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Get ₹500 Annual Pass
            <CreditCard className="w-4 h-4" />
          </button>
          <button
            onClick={() => setInnovateOpen(true)}
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition shadow-lg shadow-violet-600/20 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Submit Idea / Find Team
            <Sparkles className="w-4 h-4 text-cyan-300" />
          </button>
        </div>
      </section>

      {/* 2. Membership Perks & Digital Pass Card */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                Member Privileges
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                What You Get as a WINQubit Member
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                A single ₹500 annual membership unlocks complete multi-campus maker infrastructure across TSEC, TSDC, TIAT, and TIHM.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 space-y-2 hover:border-violet-500/30 transition group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition">{p.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pass Mockup Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-950 border border-violet-500/40 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white text-xs">
                    W
                  </div>
                  <span className="font-display text-sm font-bold text-white">STUDENT INNOVATOR PASS</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  2026-27
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Fee</span>
                  <span className="text-lg font-bold text-white">₹500 <span className="text-[10px] text-gray-500 font-normal">/ year</span></span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Campus Access</span>
                  <span className="font-semibold text-cyan-300">TSEC • TSDC • TIAT • TIHM</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Grant Eligibility</span>
                  <span className="font-semibold text-emerald-400">Up to ₹2,50,000</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Equity Retained</span>
                  <span className="font-semibold text-white">100% Student Owned</span>
                </div>
              </div>

              <button
                onClick={() => setJoinOpen(true)}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
              >
                Activate Student Membership Pass →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed 5-Stage Roadmap */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            Execution Lifecycle
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Your Step-by-Step Incubation Path
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Detailed milestones, deliverables, and support provided at each phase of your student venture journey.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {STUDENT_LIFECYCLE.map((step, idx) => {
            const Icon = lifecycleIconMap[step.icon] || Compass;
            return (
              <div
                key={step.step}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-violet-500/30 transition group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-110 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-cyan-400 font-mono">STAGE {step.step} — {step.name}</div>
                      <h3 className="text-lg font-bold text-white">{step.action}</h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5 self-start sm:self-auto">
                    {step.timeline}
                  </span>
                </div>

                <p className="text-xs text-gray-300 my-4 leading-relaxed">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1.5">
                    <div className="text-[10px] font-bold text-violet-400 uppercase tracking-wider">Required Deliverables</div>
                    <ul className="space-y-1 text-xs text-gray-400">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-cyan-400">✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1.5">
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Support Provided by WINQubit</div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.supportOffered}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Student FAQ Accordion */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            Common Questions
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Everything you need to know about membership, grants, teams, and incubation.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-cyan-400 transition"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Interactive Modals */}
      <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
    </div>
  );
}
