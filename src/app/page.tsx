'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Rocket, 
  CheckCircle2, 
  Compass, 
  Wrench, 
  Award, 
  Cpu, 
  Bot, 
  Plane, 
  Utensils, 
  TrendingUp, 
  Leaf, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Building2, 
  CreditCard,
  HeartHandshake
} from 'lucide-react';
import { 
  CAMPUSES, 
  STATS, 
  STUDENT_LIFECYCLE, 
  CORE_PROGRAMS, 
  INNOVATION_CLUSTERS, 
  GOVERNING_COUNCIL 
} from '@/lib/initialData';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { JoinModal } from '@/components/shared/JoinModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const clusterIconMap: Record<string, any> = {
    Cpu,
    Bot,
    Plane,
    Utensils,
    TrendingUp,
    Leaf,
  };

  const lifecycleIconMap: Record<string, any> = {
    Compass,
    Users,
    Wrench,
    CheckCircle2,
    Rocket,
  };

  const programIconMap: Record<string, any> = {
    Flame: Zap,
    Sparkles: Sparkles,
    Award: Award,
    Rocket: Rocket,
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 md:pt-16 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
            <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
              Women-Led • Inclusive • Student-Driven
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#1E1632] mb-6 max-w-4xl mx-auto leading-[1.1]">
            Dream. Build.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">
              Lead.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#6E6785] max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            WINQubit is a multi-campus student innovation and pre-incubation ecosystem powered by InQubit across premier academic institutions in Mumbai—uniting engineering, commerce, aviation, and hospitality creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setJoinOpen(true)}
              className="btn-primary text-white text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg"
            >
              Get Student Pass (₹500)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setInnovateOpen(true)}
              className="btn-ghost text-[#5D1451] text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2"
            >
              Submit Idea / Find Team
              <Sparkles className="w-4 h-4 text-[#E83CB7]" />
            </button>

            <button
              onClick={() => setCollaborateOpen(true)}
              className="btn-glass text-[#6E6785] hover:text-[#5D1451] text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-[#059669]" />
              Partner with Us
            </button>
          </div>

          {/* Key Metrics / Target Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card-light p-5 text-center"
              >
                <div className="font-display text-2xl sm:text-3xl font-black text-[#5D1451]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#1E1632] mt-1">{stat.label}</div>
                <div className="text-[11px] text-[#6E6785] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE 4 PILLARS OF WINQUBIT */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            Core Foundations
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
            Built on Four Pillars of Excellence
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
            A comprehensive framework designed to convert student curiosity into scalable, venture-backed enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card-light p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#5D1451]" />
              </div>
              <h3 className="text-base font-bold text-[#1E1632] mb-2">Women-Led & Inclusive</h3>
              <p className="text-xs text-[#6E6785] leading-relaxed">
                Empowering diverse leadership and fostering equal access to maker spaces, grant funding, and leadership chapters across Mumbai.
              </p>
            </div>
          </div>

          <div className="glass-card-light p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E83CB7]/10 text-[#E83CB7] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#E83CB7]" />
              </div>
              <h3 className="text-base font-bold text-[#1E1632] mb-2">Multidisciplinary Synergy</h3>
              <p className="text-xs text-[#6E6785] leading-relaxed">
                Uniting engineers, business strategists, aviation technicians, and food scientists to build complete, defensible products.
              </p>
            </div>
          </div>

          <div className="glass-card-light p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="text-base font-bold text-[#1E1632] mb-2">Student-Driven Governance</h3>
              <p className="text-xs text-[#6E6785] leading-relaxed">
                Autonomous campus innovation committees led by student directors in tech, marketing, operations, networking, and finance.
              </p>
            </div>
          </div>

          <div className="glass-card-light p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ADD8E6]/40 text-[#0284C7] flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#0284C7]" />
              </div>
              <h3 className="text-base font-bold text-[#1E1632] mb-2">InQubit Incubation Pipeline</h3>
              <p className="text-xs text-[#6E6785] leading-relaxed">
                Direct transition from student prototype to institutional incubation, seed capital, IP registration, and commercial launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PARTICIPATING CAMPUSES */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
              Campus Chapters
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
              Participating Higher Education Institutions
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
              Active innovation chapters with specialized hardware labs, faculty mentors, and student boards.
            </p>
          </div>

          <Link
            href="/leadership"
            className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] inline-flex items-center gap-1 self-start md:self-auto"
          >
            View Governance & Committees <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUSES.map((campus) => (
            <div
              key={campus.id}
              className="glass-card-light p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/15">
                    {campus.shortName}
                  </span>
                  <span className="text-[11px] font-bold text-[#8E87A5]">{campus.established}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#1E1632] group-hover:text-[#5D1451] transition">
                    {campus.name}
                  </h3>
                  <div className="text-xs text-[#E83CB7] font-semibold mt-1">
                    {campus.tagline}
                  </div>
                </div>

                <p className="text-xs text-[#6E6785] leading-relaxed">
                  {campus.description}
                </p>

                <div className="pt-2">
                  <div className="text-[10px] font-bold text-[#8E87A5] uppercase tracking-wider mb-1.5">
                    Core Labs & Facilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {campus.keyLabs.slice(0, 3).map((lab, i) => (
                      <span key={i} className="text-[10px] bg-white/90 border border-[#E9E6F2] text-[#5D1451] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs">
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E9E6F2] flex items-center justify-between">
                <span className="text-[11px] text-[#6E6785] font-medium">
                  {campus.faculty.length} Faculty • {campus.students.length} Leads
                </span>
                <Link
                  href="/leadership"
                  className="text-xs text-[#5D1451] hover:text-[#E83CB7] font-bold inline-flex items-center gap-0.5"
                >
                  Board <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDENT INNOVATION LIFECYCLE (5 STAGES) */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass-panel p-6 md:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
              5-Stage Journey
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
              The Student Innovation Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
              From an initial spark of curiosity in campus classrooms to validated proof of concepts and full-scale venture incubation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {STUDENT_LIFECYCLE.map((step) => {
              const Icon = lifecycleIconMap[step.icon] || Compass;
              return (
                <div
                  key={step.step}
                  className="glass-card-light p-5 flex flex-col justify-between border border-white/95"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-[#5D1451] bg-[#5D1451]/10 px-2.5 py-0.5 rounded-md">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-[#E83CB7] uppercase tracking-wider">{step.name}</div>
                      <h4 className="text-sm font-bold text-[#1E1632] mt-0.5">{step.action}</h4>
                    </div>

                    <p className="text-[11px] text-[#6E6785] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#E9E6F2] text-[10px] text-[#8E87A5] font-mono font-semibold">
                    {step.timeline}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/students"
              className="btn-primary inline-flex items-center gap-2 text-white font-bold text-xs px-8 py-3.5 rounded-full transition shadow-lg"
            >
              Explore Full Student Roadmap & Grants
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CORE PROGRAMS */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            Incubation Tracks
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
            Core Programs & Cohorts
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
            Structured hackathons, acceleration bootcamps, prototype grants, and continuous venture pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CORE_PROGRAMS.map((prog) => {
            const Icon = programIconMap[prog.icon] || Sparkles;
            return (
              <div
                key={prog.id}
                className="glass-card-light p-6 md:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#5D1451]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#E83CB7] font-bold uppercase tracking-wider">
                          {prog.duration}
                        </span>
                        <h3 className="text-lg font-bold text-[#1E1632]">{prog.title}</h3>
                      </div>
                    </div>
                    <Badge variant={prog.activeStatus === 'Ongoing' ? 'ongoing' : 'upcoming'} size="sm">
                      {prog.activeStatus}
                    </Badge>
                  </div>

                  <p className="text-xs text-[#6E6785] leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {prog.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#6E6785]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E9E6F2] flex items-center justify-between">
                  <div className="text-xs font-bold text-[#5D1451]">
                    {prog.grantAmount || prog.intake}
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-xs font-bold text-[#E83CB7] hover:text-[#5D1451] inline-flex items-center gap-1"
                  >
                    Apply for Track <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. INNOVATION CLUSTERS PREVIEW */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
              Focus Domains
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
              Six Key Innovation Clusters
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
              Multi-institutional research clusters mapped to faculty expertise and specialized laboratories.
            </p>
          </div>

          <Link
            href="/innovation"
            className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] inline-flex items-center gap-1 self-start md:self-auto"
          >
            Explore All Clusters & Problem Statements <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INNOVATION_CLUSTERS.map((cluster) => {
            const Icon = clusterIconMap[cluster.iconName] || Cpu;
            return (
              <div
                key={cluster.id}
                className="glass-card-light p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#5D1451]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#1E1632]">
                      {cluster.title}
                    </h3>
                    <div className="text-[11px] text-[#8E87A5] font-medium mt-0.5">
                      Campuses: {cluster.alignedCampuses.join(' • ')}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cluster.subfields.slice(0, 3).map((sub, i) => (
                      <span key={i} className="text-[10px] bg-white/90 border border-[#E9E6F2] text-[#6E6785] font-medium px-2 py-0.5 rounded-md">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F5FF] border border-[#E9E6F2] text-xs text-[#6E6785] space-y-1">
                    <span className="text-[10px] font-bold text-[#5D1451] uppercase tracking-wider block">Sample Project</span>
                    <p className="line-clamp-2">{cluster.sampleProject}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E9E6F2] flex items-center justify-between">
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7]"
                  >
                    Submit Project in this Cluster →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. GOVERNING COUNCIL HIGHLIGHT */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass-panel p-6 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-3">
              Strategic Oversight
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#1E1632]">
              Governing Council & Leadership
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6785] mt-2">
              Steering ecosystem strategy, institutional policy, prototype grants, and direct alignment with InQubit venture incubation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {GOVERNING_COUNCIL.map((leader) => (
              <div
                key={leader.id}
                className="glass-card-light p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#5D1451]/20 shadow-md">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-[#1E1632]">{leader.name}</h4>
                <div className="text-xs text-[#E83CB7] font-bold mt-0.5">{leader.designation}</div>
                <div className="text-[11px] text-[#8E87A5] mb-3">{leader.organization}</div>
                <p className="text-xs text-[#6E6785] leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/leadership"
              className="text-xs font-bold text-[#5D1451] hover:text-[#E83CB7] inline-flex items-center gap-1"
            >
              Explore Governing Council & All 4 Campus Committees <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#5D1451] via-[#851C6C] to-[#E83CB7] rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD6F3]" />
              Cohort 2026-27 Enrollment Open
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Ready to Turn Your Campus Project Into a Viable Startup?
            </h2>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Join 500+ student creators across TSEC, TSDC, TIAT, and TIHM. Get verified lab access, prototype grants, and 1-on-1 venture mentorship today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
              <button
                onClick={() => setJoinOpen(true)}
                className="bg-white text-[#5D1451] hover:bg-white/90 font-black text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg hover:scale-105 active:scale-95"
              >
                Get Student Pass (₹500)
              </button>
              <button
                onClick={() => setInnovateOpen(true)}
                className="border-2 border-white/80 hover:bg-white/10 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition hover:scale-105 active:scale-95"
              >
                Submit Innovation Idea
              </button>
              <button
                onClick={() => setCollaborateOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-white/20 transition"
              >
                Enterprise / College Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Interactive Modals */}
      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
      <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
