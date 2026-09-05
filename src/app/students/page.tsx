'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  CreditCard, 
  CheckCircle2, 
  Compass, 
  Users, 
  Wrench, 
  Rocket, 
  ShieldCheck, 
  ChevronDown,
  ArrowRight
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Student Innovator Hub
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Start With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">An Idea</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          “You don't need a finished product—just a burning curiosity to solve real problems.” Join 500+ student innovators across Mumbai.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => setJoinOpen(true)}
            className="btn-primary text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg"
          >
            Get ₹500 Annual Pass
            <CreditCard className="w-4 h-4" />
          </button>
          <button
            onClick={() => setInnovateOpen(true)}
            className="btn-ghost text-[#5D1451] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2"
          >
            Submit Idea / Find Team
            <Sparkles className="w-4 h-4 text-[#E83CB7]" />
          </button>
        </div>
      </section>

      {/* 2. Membership Perks & Digital Pass Card */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                Member Privileges
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
                What You Get as a WINQubit Member
              </h2>
              <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
                A single ₹500 annual membership unlocks complete multi-campus maker infrastructure across TSEC, TSDC, TIAT, and TIHM.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card-light p-5 space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-[#1E1632]">{p.title}</h4>
                    <p className="text-[11px] text-[#6E6785] leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pass Mockup Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#5D1451] via-[#7B1C6D] to-[#2D0A27] text-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden border border-white/20">
              <div className="flex justify-between items-center border-b border-white/15 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="font-display text-base font-black tracking-tight text-white">STUDENT INNOVATOR PASS</span>
                </div>
                <span className="text-[10px] font-mono text-[#FFD6F3] font-black bg-white/10 px-3 py-0.5 rounded-full border border-white/20">
                  2026-27
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Membership Fee</span>
                  <span className="text-xl font-black text-white">₹500 <span className="text-[10px] text-white/60 font-normal">/ year</span></span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white/70">Campus Access</span>
                  <span className="font-bold text-[#FFD6F3]">TSEC • TSDC • TIAT • TIHM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white/70">Grant Eligibility</span>
                  <span className="font-bold text-[#A7F3D0]">Up to ₹2,50,000</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white/70">Equity Retained</span>
                  <span className="font-bold text-white">100% Student Owned</span>
                </div>
              </div>

              <button
                onClick={() => setJoinOpen(true)}
                className="w-full bg-white text-[#5D1451] hover:bg-white/95 font-black text-xs py-3.5 rounded-xl transition shadow-lg hover:scale-[1.02] active:scale-95"
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            Execution Lifecycle
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Your Step-by-Step Incubation Path
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
            Detailed milestones, deliverables, and support provided at each phase of your student venture journey.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {STUDENT_LIFECYCLE.map((step) => {
            const Icon = lifecycleIconMap[step.icon] || Compass;
            return (
              <div
                key={step.step}
                className="glass-card-light p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E9E6F2]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center font-bold text-base shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#E83CB7] font-mono">STAGE {step.step} — {step.name}</div>
                      <h3 className="text-lg font-black text-[#1E1632]">{step.action}</h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#5D1451] font-bold bg-[#5D1451]/10 px-3.5 py-1 rounded-full self-start sm:self-auto">
                    {step.timeline}
                  </span>
                </div>

                <p className="text-xs text-[#6E6785] my-4 leading-relaxed">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F7F5FF] border border-[#E9E6F2] space-y-2">
                    <div className="text-[10px] font-black text-[#5D1451] uppercase tracking-wider">Required Deliverables</div>
                    <ul className="space-y-1 text-xs text-[#6E6785]">
                      {step.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#059669] font-bold">✓</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F5FF] border border-[#E9E6F2] space-y-2">
                    <div className="text-[10px] font-black text-[#059669] uppercase tracking-wider">Support Provided by WINQubit</div>
                    <p className="text-xs text-[#6E6785] leading-relaxed">
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            Common Questions
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
            Everything you need to know about membership, grants, teams, and incubation.
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card-light overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#1E1632]">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#8E87A5] shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#5D1451]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#6E6785] leading-relaxed border-t border-[#E9E6F2] pt-3 animate-in fade-in">
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
