'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Globe, Users, Award, Sparkles, ExternalLink, Share2, Code } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export default function CommitteePage() {
  const { committee } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Leadership', 'Executive', 'Advisory', 'Student Chapter'];

  const filteredMembers = activeCategory === 'All'
    ? committee
    : committee.filter(m => m.category === activeCategory);

  // Sorted by order
  const sortedMembers = [...filteredMembers].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-16">
      <SectionHeader
        badge="Governance & Mentorship"
        title="Our Committee & Leadership"
        subtitle="Visionary leaders, pioneering researchers, and passionate mentors driving gender equality and technical excellence in Quantum and AI."
        centered
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              activeCategory === cat
                ? 'btn-primary text-white shadow-md shadow-[#E83CB7]/30 scale-105'
                : 'bg-white/70 text-[#1E1632] hover:bg-[#EEF2FF]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Committee Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedMembers.map((member) => (
          <GlassCard
            key={member.id}
            className="p-6 border-white/80 bg-white/75 backdrop-blur-3xl space-y-4 flex flex-col justify-between shadow-lg hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 border border-white shadow-sm group">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="featured">{member.category}</Badge>
                </div>
              </div>

              {/* Title & Position */}
              <div className="space-y-1">
                <h3 className="text-xl font-black text-[#1E1632] font-outfit">{member.name}</h3>
                <p className="text-xs font-bold text-[#5D1451]">{member.position}</p>
              </div>

              {/* Bio Summary */}
              <p className="text-xs text-[#6E6785] leading-relaxed mt-3 font-normal line-clamp-3">
                {member.bio}
              </p>
            </div>

            {/* Social / Contact Links Footer */}
            <div className="pt-4 border-t border-[#E9E6F2] flex items-center justify-between">
              <div className="flex items-center gap-2">
                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#E9E6F2] text-[#4F46E5] hover:bg-[#EEF2FF] hover:text-[#5D1451] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.social?.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-[#E9E6F2] text-[#1E1632] hover:bg-slate-100 transition-all"
                    aria-label="GitHub"
                  >
                    <Code className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.social?.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-xl bg-white border border-[#E9E6F2] text-[#DB2777] hover:bg-[#FCE7F3] transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <span className="text-[10px] font-bold text-[#6E6785] bg-[#EEF2FF] px-2.5 py-1 rounded-full border border-[#C7D2FE]">
                Council Member
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
