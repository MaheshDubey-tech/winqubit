'use client';

import React from 'react';
import { Eye, Target, Compass, Milestone, Sparkles, CheckCircle2 } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export default function AboutPage() {
  const { siteContent } = useData();
  const { vision, mission, objectives, journey } = siteContent.about;

  return (
    <div className="space-y-20">
      {/* Header */}
      <SectionHeader
        badge="About WINQubit"
        title="Vision, Mission & Journey"
        subtitle="WINQubit (Women Led Innovation) is dedicated to empowering female researchers and pioneers in Quantum Computing, Artificial Intelligence, and Frontier Technologies."
        centered
      />

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8 sm:p-10 border-white/80 bg-white/75 backdrop-blur-3xl space-y-4 shadow-lg">
          <div className="w-14 h-14 rounded-2xl bg-[#FCE7F3] text-[#DB2777] flex items-center justify-center shadow-sm border border-[#FBCFE8]">
            <Eye className="w-7 h-7" />
          </div>
          <Badge variant="featured">Global Horizon</Badge>
          <h3 className="text-2xl font-black text-[#1E1632] font-outfit">Our Vision</h3>
          <p className="text-base text-[#6E6785] leading-relaxed">
            {vision}
          </p>
        </GlassCard>

        <GlassCard className="p-8 sm:p-10 border-white/80 bg-white/75 backdrop-blur-3xl space-y-4 shadow-lg">
          <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shadow-sm border border-[#C7D2FE]">
            <Target className="w-7 h-7" />
          </div>
          <Badge variant="upcoming">Strategic Purpose</Badge>
          <h3 className="text-2xl font-black text-[#1E1632] font-outfit">Our Mission</h3>
          <p className="text-base text-[#6E6785] leading-relaxed">
            {mission}
          </p>
        </GlassCard>
      </div>

      {/* Strategic Objectives Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="featured">Core Pillars</Badge>
          <h3 className="text-3xl font-black text-[#1E1632] font-outfit">Our Strategic Objectives</h3>
          <p className="text-sm font-bold text-[#6E6785]">Four fundamental pillars driving female innovation in deep tech.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {objectives.map((obj, idx) => (
            <GlassCard key={idx} className="p-6 flex items-start gap-4 border-white/80 bg-white/75 shadow-sm">
              <div className="p-2.5 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex-shrink-0 mt-0.5 border border-[#C7D2FE]">
                <CheckCircle2 className="w-5 h-5 text-[#E83CB7]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black text-[#5D1451] uppercase tracking-wider bg-[#FCE7F3] px-2.5 py-0.5 rounded-full border border-[#FBCFE8]">Pillar 0{idx + 1}</span>
                <p className="text-xs text-[#1E1632] font-bold leading-relaxed pt-1">
                  {obj}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Interactive Timeline Journey */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="upcoming">Milestone Timeline</Badge>
          <h3 className="text-3xl font-black text-[#1E1632] font-outfit">The WINQubit Journey</h3>
          <p className="text-sm font-bold text-[#6E6785]">Tracing our growth from a local research initiative to a global quantum council.</p>
        </div>

        <div className="relative border-l-2 border-[#E83CB7]/30 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
          {journey.map((item, idx) => (
            <div key={item.id || idx} className="relative group">
              {/* Year Pill Node */}
              <div className="absolute -left-[31px] sm:-left-[178px] top-0 flex items-center gap-3">
                <span className="hidden sm:inline-block text-right w-28 text-lg font-black text-[#5D1451] font-numbers">
                  {item.year}
                </span>
                <div className="w-5 h-5 rounded-full bg-[#E83CB7] border-4 border-[#F7F5FF] shadow-md group-hover:scale-125 transition-transform" />
              </div>

              {/* Milestone Content Card */}
              <GlassCard className="p-6 border-white/80 bg-white/75 backdrop-blur-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 sm:hidden">
                  <Badge variant="featured">{item.year}</Badge>
                </div>
                <h4 className="text-xl font-black text-[#1E1632] mb-2 font-outfit">{item.title}</h4>
                <p className="text-sm text-[#6E6785] leading-relaxed font-normal">
                  {item.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
