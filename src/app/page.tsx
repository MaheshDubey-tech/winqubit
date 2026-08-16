'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Bell,
  Users,
  Award,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Lightbulb,
  Building2,
  HeartHandshake,
  Download,
  FileText,
  Bookmark,
  School,
  ExternalLink,
  ShieldCheck,
  ImageIcon
} from 'lucide-react';
import { useData } from '@/context/DataContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { EventCard } from '@/components/events/EventCard';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';
import { Announcement } from '@/types';

export default function HomePage() {
  const { siteContent, colleges, events, announcements, committee } = useData();

  // Modals for Innovate & Collaborate
  const [innovateModalOpen, setInnovateModalOpen] = useState(false);
  const [collaborateModalOpen, setCollaborateModalOpen] = useState(false);

  // Selected announcement for detail preview
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [announcementFilter, setAnnouncementFilter] = useState<string>('All');

  const featuredEvents = events.slice(0, 3);

  // Filtered homepage announcements
  const filteredAnnouncements = announcementFilter === 'All'
    ? announcements
    : announcements.filter(a => a.priority === announcementFilter);

  const committeePreview = committee.slice(0, 3);

  const statIcons = [
    <Users key="1" className="w-6 h-6 text-[#5D1451]" />,
    <Cpu key="2" className="w-6 h-6 text-[#E83CB7]" />,
    <School key="3" className="w-6 h-6 text-[#0284C7]" />,
    <Award key="4" className="w-6 h-6 text-[#5D1451]" />
  ];

  const statColors = ['#EEF2FF', '#FCE7F3', '#E0F2FE', '#F3E8FF'];

  return (
    <div className="space-y-28">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (HOME)                                    */}
      {/* ========================================================= */}
      <AnimatedSection id="hero" className="pt-6 pb-8 lg:pt-12 lg:pb-12 text-center max-w-5xl mx-auto space-y-8">
        {/* Transparent Logo Cutout Emblem */}
        <div className="flex justify-center items-center">
          <div className="relative w-36 h-28 sm:w-44 sm:h-32 transition-transform hover:scale-105 duration-500">
            <Image
              src="/winqubit-logo-cutout.png"
              alt="WINQubit Logo"
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Subtitle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FCE7F3] border border-[#FBCFE8] shadow-sm">
          <Sparkles className="w-4 h-4 text-[#E83CB7]" />
          <span className="text-xs font-black tracking-wider text-[#5D1451] uppercase">
            {siteContent.hero.subtitle}
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1E1632] tracking-tight leading-[1.1] font-outfit max-w-4xl mx-auto">
          {siteContent.hero.title}
        </h1>

        {/* Sub-paragraph */}
        <p className="text-lg sm:text-xl text-[#6E6785] leading-relaxed max-w-3xl mx-auto font-normal">
          {siteContent.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <GlassButton variant="primary" size="lg" href={siteContent.hero.primaryCtaLink || '/events'}>
            <span>{siteContent.hero.primaryCtaText || 'Explore Flagship Events'}</span>
            <ArrowRight className="w-5 h-5" />
          </GlassButton>

          <button
            onClick={() => setInnovateModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#5D1451] font-extrabold text-sm border border-[#E9E6F2] hover:bg-[#EEF2FF] shadow-md hover:scale-105 transition-all"
          >
            <Lightbulb className="w-4 h-4 text-[#E83CB7]" />
            <span>{siteContent.hero.studentPortalText || 'Student Portal'}</span>
          </button>

          <button
            onClick={() => setCollaborateModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] font-extrabold text-sm border border-[#C7D2FE] hover:bg-[#E0E7FF] shadow-md hover:scale-105 transition-all"
          >
            <HeartHandshake className="w-4 h-4 text-[#4F46E5]" />
            <span>{siteContent.hero.partnerPortalText || 'Partner Portal'}</span>
          </button>
        </div>

        {/* 4 Live Metric Stat Cards Grid */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-5 text-left">
          {siteContent.hero.stats.map((st, i) => (
            <div
              key={i}
              className="glass-panel p-6 border-white/80 bg-white/60 flex flex-col justify-between space-y-4 hover:-translate-y-1.5 transition-all duration-300 shadow-md"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white shadow-sm"
                style={{ backgroundColor: statColors[i % statColors.length] }}
              >
                {statIcons[i % statIcons.length]}
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#5D1451] tracking-tight font-numbers">
                  {st.value}
                </p>
                <p className="text-xs font-bold text-[#6E6785] mt-1">
                  {st.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 2. ANNOUNCEMENTS SECTION (MOVED RIGHT AFTER HOME/HERO)   */}
      {/* ========================================================= */}
      <AnimatedSection id="announcements">
        <SectionHeader
          badge={siteContent.sectionHeaders.announcements.badge}
          title={siteContent.sectionHeaders.announcements.title}
          subtitle={siteContent.sectionHeaders.announcements.subtitle}
          centered
        />

        {/* Priority Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-6">
          {['All', 'Urgent', 'Opportunity', 'Notice', 'Update'].map((p) => (
            <button
              key={p}
              onClick={() => setAnnouncementFilter(p)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                announcementFilter === p
                  ? 'btn-primary text-white shadow-md'
                  : 'bg-white/80 text-[#1E1632] hover:bg-[#EEF2FF]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Clean Homepage Announcements Stream */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredAnnouncements.slice(0, 4).map((ann) => {
            const isExpanded = selectedAnnouncement?.id === ann.id;
            return (
              <GlassCard
                key={ann.id}
                className="p-6 border-white/80 bg-white/75 backdrop-blur-2xl transition-all duration-300 space-y-3 shadow-md hover:shadow-lg"
              >
                <div
                  onClick={() => setSelectedAnnouncement(isExpanded ? null : ann)}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] text-[#5D1451] flex items-center justify-center flex-shrink-0 border border-[#FBCFE8]">
                      <Bell className="w-4 h-4 text-[#E83CB7]" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={ann.priority === 'Urgent' ? 'important' : 'upcoming'} size="sm">
                          {ann.priority}
                        </Badge>
                        {ann.pinned && (
                          <span className="text-[10px] font-black text-[#5D1451] bg-[#EEF2FF] px-2 py-0.5 rounded-full border border-[#C7D2FE]">
                            Pinned
                          </span>
                        )}
                        <span className="text-[11px] font-semibold text-[#6E6785]">
                          {ann.date}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-[#1E1632] hover:text-[#5D1451] transition-colors font-outfit">
                        {ann.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                    <span className="text-[11px] font-bold text-[#5D1451] bg-[#FCE7F3] px-3 py-1 rounded-full border border-[#FBCFE8]">
                      {isExpanded ? 'Hide Details' : 'Read Announcement'}
                    </span>
                  </div>
                </div>

                {/* Inline Expanded Content directly on Homepage */}
                {isExpanded && (
                  <div className="pt-4 border-t border-[#E9E6F2] space-y-3 text-xs text-[#6E6785] animate-in fade-in">
                    <p className="leading-relaxed font-normal text-sm text-[#1E1632]">
                      {ann.content}
                    </p>

                    {ann.attachments && ann.attachments.length > 0 && (
                      <div className="pt-2 space-y-1.5">
                        <span className="text-[10px] font-black text-[#5D1451] uppercase tracking-wider block">
                          Download Official Attachments:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {ann.attachments.map((att, i) => (
                            <a
                              key={i}
                              href={att.url}
                              className="px-3.5 py-1.5 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] hover:bg-[#FCE7F3] hover:text-[#DB2777] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>{att.name}</span>
                              {att.size && <span className="opacity-70">({att.size})</span>}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* View All Announcements Button */}
        <div className="pt-8 text-center">
          <GlassButton variant="primary" size="lg" href="/announcements">
            <span>View All Announcements</span>
            <ArrowRight className="w-5 h-5" />
          </GlassButton>
        </div>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 3. FOUR-COLLEGE INSTITUTIONAL COLLABORATION SECTION       */}
      {/* ========================================================= */}
      <AnimatedSection id="colleges">
        <GlassCard className="p-8 sm:p-12 border-white/80 bg-white/60 backdrop-blur-3xl shadow-xl space-y-8">
          <SectionHeader
            badge={siteContent.sectionHeaders.colleges.badge}
            title={siteContent.sectionHeaders.colleges.title}
            subtitle={siteContent.sectionHeaders.colleges.subtitle}
            centered
          />

          {/* 4 College Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colleges.map((col) => (
              <div
                key={col.id}
                className="glass-card-compact p-6 rounded-3xl bg-white/80 border border-white flex flex-col justify-between space-y-4 shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-white shadow-sm">
                    <Image
                      src={col.logo}
                      alt={col.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#5D1451] font-black text-[10px] uppercase shadow-sm">
                        {col.code}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full uppercase border border-[#C7D2FE]">
                      Founding Partner
                    </span>
                    <h4 className="text-base font-black text-[#1E1632] font-outfit mt-2 leading-snug">
                      {col.name}
                    </h4>
                    <p className="text-[11px] text-[#6E6785] mt-1 font-semibold">
                      📍 {col.location}
                    </p>
                  </div>

                  <p className="text-xs text-[#6E6785] leading-relaxed line-clamp-3">
                    {col.description}
                  </p>
                </div>

                <a
                  href={col.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5D1451] hover:text-[#E83CB7] transition-colors pt-2 border-t border-[#E9E6F2]"
                >
                  <span>Visit College Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 4. ABOUT US SECTION                                       */}
      {/* ========================================================= */}
      <AnimatedSection id="about">
        <GlassCard className="p-8 sm:p-14 border-white/80 bg-white/50 backdrop-blur-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="featured">{siteContent.about.badge || siteContent.sectionHeaders.about.badge}</Badge>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E1632] leading-snug font-outfit">
                {siteContent.about.title || siteContent.sectionHeaders.about.title}
              </h2>
              <p className="text-base text-[#6E6785] leading-relaxed">
                {siteContent.about.vision}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/70 border border-[#E9E6F2] shadow-sm space-y-1.5">
                  <span className="text-xs font-black text-[#5D1451] bg-[#FCE7F3] px-2.5 py-0.5 rounded-full">Our Mission</span>
                  <p className="text-xs text-[#6E6785] line-clamp-3 leading-relaxed">{siteContent.about.mission}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/70 border border-[#E9E6F2] shadow-sm space-y-1.5">
                  <span className="text-xs font-black text-[#5D1451] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">Four-College Key Focus</span>
                  <p className="text-xs text-[#6E6785] leading-relaxed">Quantum Computing, AI Hardware, Post-Quantum Security & Inclusive Grants.</p>
                </div>
              </div>
              <div className="pt-2">
                <GlassButton variant="ghost" href="/about">
                  <span>Discover Our Journey & Objectives</span>
                  <ChevronRight className="w-4 h-4" />
                </GlassButton>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {siteContent.about.objectives.slice(0, 4).map((obj, index) => (
                <div key={index} className="glass-card-compact p-5 flex flex-col justify-between space-y-3 bg-white/70">
                  <div className="w-9 h-9 rounded-2xl bg-[#FCE7F3] text-[#5D1451] flex items-center justify-center font-black text-sm border border-white font-numbers">
                    0{index + 1}
                  </div>
                  <p className="text-xs text-[#1E1632] font-bold leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 5. DUAL PORTALS SECTION (INNOVATE & COLLABORATE)          */}
      {/* ========================================================= */}
      <AnimatedSection id="innovate-collaborate">
        <SectionHeader
          badge={siteContent.sectionHeaders.innovateCollaborate.badge}
          title={siteContent.sectionHeaders.innovateCollaborate.title}
          subtitle={siteContent.sectionHeaders.innovateCollaborate.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: INNOVATE (Students) */}
          <div className="group rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-white/90 via-white/80 to-[#FCE7F3]/40 border-2 border-[#FBCFE8] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#E83CB7]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#FCE7F3] border border-[#FBCFE8] text-[#5D1451] flex items-center justify-center shadow-sm">
                <Lightbulb className="w-7 h-7 text-[#E83CB7]" />
              </div>

              <div>
                <span className="text-[11px] font-black tracking-wider text-[#5D1451] uppercase bg-[#FCE7F3] px-3 py-1 rounded-full border border-[#FBCFE8]">
                  {siteContent.innovateCard.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1E1632] font-outfit mt-3">
                  {siteContent.innovateCard.title}
                </h3>
              </div>

              <p className="text-xs text-[#6E6785] leading-relaxed font-medium">
                {siteContent.innovateCard.description}
              </p>

              <ul className="space-y-2 pt-2 text-xs text-[#1E1632] font-bold">
                {siteContent.innovateCard.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E83CB7] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 relative z-10">
              <button
                onClick={() => setInnovateModalOpen(true)}
                className="w-full py-4 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg shadow-[#E83CB7]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{siteContent.innovateCard.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: COLLABORATE (Organisations & Individuals) */}
          <div className="group rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-white/90 via-white/80 to-[#EEF2FF]/60 border-2 border-[#C7D2FE] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#4F46E5]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] flex items-center justify-center shadow-sm">
                <HeartHandshake className="w-7 h-7 text-[#4F46E5]" />
              </div>

              <div>
                <span className="text-[11px] font-black tracking-wider text-[#4F46E5] uppercase bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#C7D2FE]">
                  {siteContent.collaborateCard.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1E1632] font-outfit mt-3">
                  {siteContent.collaborateCard.title}
                </h3>
              </div>

              <p className="text-xs text-[#6E6785] leading-relaxed font-medium">
                {siteContent.collaborateCard.description}
              </p>

              <ul className="space-y-2 pt-2 text-xs text-[#1E1632] font-bold">
                {siteContent.collaborateCard.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 relative z-10">
              <button
                onClick={() => setCollaborateModalOpen(true)}
                className="w-full py-4 rounded-full bg-[#4F46E5] text-white font-extrabold text-xs shadow-lg shadow-[#4F46E5]/30 hover:bg-[#4338CA] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{siteContent.collaborateCard.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 6. EVENTS SECTION                                         */}
      {/* ========================================================= */}
      <AnimatedSection id="events">
        <SectionHeader
          badge={siteContent.sectionHeaders.events.badge}
          title={siteContent.sectionHeaders.events.title}
          subtitle={siteContent.sectionHeaders.events.subtitle}
          action={
            <GlassButton variant="ghost" href="/events">
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </GlassButton>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 7. COMMITTEE SECTION                                      */}
      {/* ========================================================= */}
      <AnimatedSection id="committee">
        <SectionHeader
          badge={siteContent.sectionHeaders.committee.badge}
          title={siteContent.sectionHeaders.committee.title}
          subtitle={siteContent.sectionHeaders.committee.subtitle}
          action={
            <GlassButton variant="ghost" href="/committee">
              <span>View Full Committee</span>
              <ArrowRight className="w-4 h-4" />
            </GlassButton>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {committeePreview.map((mem) => (
            <GlassCard
              key={mem.id}
              className="p-6 border-white/80 bg-white/75 space-y-4 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 border border-white shadow-sm">
                  <Image
                    src={mem.photo}
                    alt={mem.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="featured">{mem.category}</Badge>
                  </div>
                </div>
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">{mem.name}</h3>
                <p className="text-xs font-bold text-[#5D1451]">{mem.position}</p>
                <p className="text-xs text-[#6E6785] line-clamp-2 mt-2 font-normal">{mem.bio}</p>
              </div>

              <div className="pt-3 border-t border-[#E9E6F2] flex items-center justify-between text-xs">
                <span className="font-mono text-[#6E6785] text-[11px] truncate max-w-[160px]">
                  {mem.social?.email || 'Consortium Lead'}
                </span>
                <span className="text-[10px] font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-1 rounded-full">
                  Verified Lead
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>

      {/* ========================================================= */}
      {/* 8. CONTACT CTA SECTION                                    */}
      {/* ========================================================= */}
      <AnimatedSection id="contact">
        <div
          className="rounded-[32px] p-10 sm:p-16 text-white text-center relative overflow-hidden shadow-2xl border border-white/30"
          style={{
            background: 'linear-gradient(135deg, #5D1451 0%, #851C74 50%, #E83CB7 100%)'
          }}
        >
          {/* Subtle noise and light accents */}
          <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ADD8E6]/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black border border-white/30 tracking-wider shadow-sm uppercase">
              {siteContent.contactCta.badge}
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-outfit drop-shadow-md">
              {siteContent.contactCta.title}
            </h2>

            <p className="text-base sm:text-lg text-white leading-relaxed font-medium max-w-2xl mx-auto opacity-95">
              {siteContent.contactCta.description}
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setInnovateModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#5D1451] hover:bg-[#FCE7F3] font-black text-sm shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>{siteContent.contactCta.button1Text}</span>
                <Lightbulb className="w-4 h-4 text-[#E83CB7]" />
              </button>

              <button
                onClick={() => setCollaborateModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white text-white hover:bg-white/30 font-black text-sm shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>{siteContent.contactCta.button2Text}</span>
                <HeartHandshake className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Innovate & Collaborate Modals */}
      <InnovateModal
        isOpen={innovateModalOpen}
        onClose={() => setInnovateModalOpen(false)}
      />

      <CollaborateModal
        isOpen={collaborateModalOpen}
        onClose={() => setCollaborateModalOpen(false)}
      />
    </div>
  );
}
