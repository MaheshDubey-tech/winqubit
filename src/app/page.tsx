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
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2,
  Briefcase
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

export default function HomePage() {
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tsec');

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
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[450px] bg-[radial-gradient(circle_at_50%_0%,#1e1b4b,transparent_75%)] pointer-events-none -z-10" />

        <div className="container mx-auto px-4 md:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-violet-500/30" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Women-Led • Inclusive • Student-Driven
            </span>
            <div className="h-[1px] w-12 bg-violet-500/30" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 max-w-4xl mx-auto leading-[1.1]">
            Dream. Build.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400">
              Lead.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            WINQubit is a multi-campus student innovation and pre-incubation ecosystem powered by InQubit across premier academic institutions in Mumbai—uniting engineering, commerce, aviation, and hospitality creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <button
              onClick={() => setJoinOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Get Student Pass (₹500)
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setInnovateOpen(true)}
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-full transition shadow-lg shadow-violet-600/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Submit Idea / Find Team
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </button>

            <button
              onClick={() => setCollaborateOpen(true)}
              className="bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/10 transition flex items-center gap-2"
            >
              Partner with Us
            </button>
          </div>

          {/* Key Metrics / Target Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 text-center backdrop-blur-sm hover:border-violet-500/30 transition group"
              >
                <div className={`font-display text-2xl sm:text-3xl font-bold ${stat.color || 'text-white'} group-hover:scale-105 transition`}>
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-white mt-1">{stat.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE 4 PILLARS OF WINQUBIT */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            Core Foundations
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Built on Four Pillars of Excellence
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            A comprehensive framework designed to convert student curiosity into scalable, venture-backed enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:border-violet-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Women-Led & Inclusive</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Empowering diverse leadership and fostering equal access to maker spaces, grant funding, and leadership chapters across Mumbai.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:border-cyan-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Multidisciplinary Synergy</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Uniting engineers, business strategists, aviation technicians, and food scientists to build complete, defensible products.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:border-emerald-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Student-Driven Governance</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Autonomous campus innovation committees led by student directors in tech, marketing, operations, networking, and finance.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 hover:border-amber-500/30 transition group">
            <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">InQubit Incubation Pipeline</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Direct transition from student prototype to institutional incubation, seed capital, IP registration, and commercial launch.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR PARTICIPATING CAMPUSES */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              Campus Chapters
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Participating Higher Education Institutions
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Active innovation chapters with specialized hardware labs, faculty mentors, and student boards.
            </p>
          </div>

          <Link
            href="/leadership"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start md:self-auto"
          >
            View Governance & Committees <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUSES.map((campus) => (
            <div
              key={campus.id}
              className="bg-slate-900/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-violet-500/30 transition group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${campus.badgeColor || 'border-violet-500/30 text-violet-400'}`}>
                    {campus.shortName}
                  </span>
                  <span className="text-[10px] text-gray-500">{campus.established}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {campus.name}
                  </h3>
                  <div className="text-[11px] text-gray-400 font-medium mt-1">
                    {campus.tagline}
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {campus.description}
                </p>

                <div className="pt-2">
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Core Labs & Facilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {campus.keyLabs.slice(0, 3).map((lab, i) => (
                      <span key={i} className="text-[9px] bg-white/[0.03] border border-white/5 text-gray-300 px-2 py-0.5 rounded-md">
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">
                  {campus.faculty.length} Faculty • {campus.students.length} Student Leads
                </span>
                <Link
                  href="/leadership"
                  className="text-[11px] text-cyan-400 hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  Board <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STUDENT INNOVATION LIFECYCLE (5 STAGES) */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/30 border border-white/10 rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-3">
              5-Stage Journey
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              The Student Innovation Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              From an initial spark of curiosity in campus classrooms to validated proof of concepts and full-scale venture incubation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {STUDENT_LIFECYCLE.map((step, idx) => {
              const Icon = lifecycleIconMap[step.icon] || Compass;
              return (
                <div
                  key={step.step}
                  className="bg-slate-950/80 border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:border-violet-500/40 transition group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-400">{step.step}</span>
                      <div className="w-8 h-8 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center group-hover:scale-110 transition">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-violet-400 uppercase tracking-wider">{step.name}</div>
                      <h4 className="text-sm font-bold text-white mt-0.5">{step.action}</h4>
                    </div>

                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 text-[10px] text-gray-500 font-mono">
                    {step.timeline}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/students"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs px-7 py-3 rounded-full transition shadow-lg shadow-violet-600/20"
            >
              Explore Full Student Roadmap & Grants
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CORE PROGRAMS */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3">
            Incubation Tracks
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Core Programs & Cohorts
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Structured hackathons, acceleration bootcamps, prototype grants, and continuous venture pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CORE_PROGRAMS.map((prog) => {
            const Icon = programIconMap[prog.icon] || Sparkles;
            return (
              <div
                key={prog.id}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-violet-500/30 transition group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {prog.duration}
                        </span>
                        <h3 className="text-lg font-bold text-white">{prog.title}</h3>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-bold">
                      {prog.activeStatus}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {prog.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-bold text-violet-400">
                    {prog.grantAmount || prog.intake}
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    Apply for Track <ArrowRight className="w-3 h-3" />
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              Focus Domains
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Six Key Innovation Clusters
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Multi-institutional research clusters mapped to faculty expertise and specialized laboratories.
            </p>
          </div>

          <Link
            href="/innovation"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 self-start md:self-auto"
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
                className="bg-slate-900/50 border border-white/5 rounded-3xl p-6 hover:border-cyan-500/30 transition group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                      {cluster.title}
                    </h3>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Campuses: {cluster.alignedCampuses.join(' • ')}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cluster.subfields.slice(0, 3).map((sub, i) => (
                      <span key={i} className="text-[9px] bg-white/[0.03] border border-white/5 text-gray-400 px-2 py-0.5 rounded-md">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-gray-400 space-y-1">
                    <span className="text-[9px] font-bold text-violet-400 uppercase tracking-wider block">Sample Project</span>
                    <p className="line-clamp-2">{cluster.sampleProject}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-[11px] font-bold text-cyan-400 hover:underline"
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
        <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-6 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-3">
              Strategic Oversight
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Governing Council & Leadership
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Steering ecosystem strategy, institutional policy, prototype grants, and direct alignment with InQubit venture incubation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {GOVERNING_COUNCIL.map((leader) => (
              <div
                key={leader.id}
                className="bg-slate-950 border border-white/5 rounded-3xl p-6 text-center hover:border-violet-500/30 transition group"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-violet-500/30 group-hover:border-cyan-400 transition">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-bold text-white">{leader.name}</h4>
                <div className="text-[11px] text-cyan-400 font-semibold">{leader.designation}</div>
                <div className="text-[10px] text-gray-500 mb-3">{leader.organization}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/leadership"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              Explore Governing Council & All 4 Campus Committees <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border border-violet-500/30 rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Cohort 2026-27 Enrollment Open
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Turn Your Campus Project Into a Viable Startup?
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Join 500+ student creators across TSEC, TSDC, TIAT, and TIHM. Get verified lab access, prototype grants, and 1-on-1 venture mentorship today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setJoinOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95"
              >
                Get Student Pass (₹500)
              </button>
              <button
                onClick={() => setInnovateOpen(true)}
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg shadow-violet-600/20 hover:scale-105 active:scale-95"
              >
                Submit Innovation Idea
              </button>
              <button
                onClick={() => setCollaborateOpen(true)}
                className="bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full border border-white/10 transition"
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
