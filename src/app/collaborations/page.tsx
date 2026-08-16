'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, ExternalLink, Handshake, Building2, Sparkles, School, HeartHandshake } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function CollaborationsPage() {
  const { colleges, collaborations } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [collaborateModalOpen, setCollaborateModalOpen] = useState<boolean>(false);

  const categories = ['All', 'Industry', 'Academic', 'Research', 'Global Partner'];

  const filteredCollabs = activeCategory === 'All'
    ? collaborations
    : collaborations.filter(c => c.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      <SectionHeader
        badge="Global Alliance"
        title="Collaborations & Partnerships"
        subtitle="Uniting our four founding colleges with world-class industry labs, research centers, and global partners to accelerate women-led deep-tech breakthroughs."
        centered
      />

      {/* Four Founding Colleges Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-black text-[#5D1451] uppercase tracking-wider">
          <School className="w-4 h-4 text-[#E83CB7]" />
          <span>Four Founding Consortium Colleges</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colleges.map((col) => (
            <GlassCard key={col.id} className="p-6 border-white/80 bg-white/85 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-white shadow-sm">
                  <Image src={col.logo} alt={col.name} fill className="object-cover" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#5D1451] font-black text-[10px] uppercase">
                      {col.code}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-extrabold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase border border-[#C7D2FE]">
                    Consortium Member
                  </span>
                  <h3 className="text-base font-black text-[#1E1632] font-outfit mt-2">{col.name}</h3>
                  <p className="text-[11px] text-[#6E6785] font-semibold mt-0.5">📍 {col.location}</p>
                </div>

                <p className="text-xs text-[#6E6785] leading-relaxed line-clamp-3">{col.description}</p>
              </div>

              <a
                href={col.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5D1451] hover:text-[#E83CB7] transition-colors pt-2 border-t border-[#E9E6F2]"
              >
                <span>Visit Campus Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-black text-[#5D1451] uppercase tracking-wider">
            <Handshake className="w-4 h-4 text-[#5D1451]" />
            <span>External Industry & Global Research Alliances</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'btn-primary text-white shadow-md'
                    : 'bg-white/70 text-[#1E1632] hover:bg-[#EEF2FF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCollabs.map((col) => (
            <GlassCard key={col.id} className="p-8 border-white/80 bg-white/75 backdrop-blur-3xl space-y-6 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden glass-panel p-2 border border-white bg-white/90 shadow-sm flex items-center justify-center flex-shrink-0">
                    <Image
                      src={col.logo}
                      alt={col.partnerName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="ongoing">{col.category}</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1E1632] font-outfit">{col.partnerName}</h3>
                  <p className="text-xs font-bold text-[#5D1451] mt-0.5">{col.collaborationScope}</p>
                </div>

                <p className="text-xs text-[#6E6785] leading-relaxed font-normal">
                  {col.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E6F2] flex items-center justify-between">
                <span className="text-xs font-bold text-[#5D1451] flex items-center gap-1.5">
                  <Handshake className="w-4 h-4 text-[#E83CB7]" /> Active Agreement
                </span>

                {col.website && (
                  <a
                    href={col.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-black text-[#4F46E5] hover:text-[#5D1451] transition-colors"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Joint Partner Initiative Box */}
      <GlassCard className="p-8 sm:p-12 border-white/80 bg-white/70 backdrop-blur-3xl text-center space-y-6 shadow-xl max-w-3xl mx-auto">
        <Badge variant="featured">Become a Consortium Partner</Badge>
        <h3 className="text-3xl font-black text-[#1E1632] font-outfit">Partner with WINQubit</h3>
        <p className="text-sm text-[#6E6785] leading-relaxed max-w-xl mx-auto font-normal">
          We welcome universities, deep-tech research laboratories, and corporate accelerators to co-sponsor hackathons, offer compute grants, and mentor researchers.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setCollaborateModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#4F46E5] text-white font-extrabold text-xs shadow-lg shadow-[#4F46E5]/30 hover:bg-[#4338CA] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Submit Partner Collaboration Proposal</span>
          </button>
        </div>
      </GlassCard>

      <CollaborateModal
        isOpen={collaborateModalOpen}
        onClose={() => setCollaborateModalOpen(false)}
      />
    </div>
  );
}
