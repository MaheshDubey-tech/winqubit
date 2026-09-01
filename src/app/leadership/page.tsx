'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  ExternalLink,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { GOVERNING_COUNCIL, CAMPUSES } from '@/lib/initialData';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function LeadershipPage() {
  const [activeCampus, setActiveCampus] = useState(CAMPUSES[0].id);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const selectedCampus = CAMPUSES.find(c => c.id === activeCampus) || CAMPUSES[0];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-violet-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Connecting Academic Excellence with Industry Foresight
          </span>
          <div className="h-[1px] w-12 bg-violet-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-indigo-400">Governance</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          WINQubit unites a central management board with autonomous campus-level faculty and student innovation committees across Mumbai.
        </p>
      </section>

      {/* 2. Central Governing Council */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            Central Management Board
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Overall Management Committee
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Senior leadership guiding institutional alignment, innovation policy, budget approvals, and InQubit incubation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {GOVERNING_COUNCIL.map((leader) => (
            <div
              key={leader.id}
              className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 hover:border-violet-500/30 transition group flex flex-col justify-between"
            >
              <div className="space-y-4 text-center">
                <div className="w-24 h-24 rounded-2xl mx-auto overflow-hidden border-2 border-violet-500/30 group-hover:border-cyan-400 transition shadow-xl">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mt-0.5">{leader.designation}</div>
                  <div className="text-[11px] text-gray-500">{leader.organization}</div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {leader.expertise.map((exp, i) => (
                    <span key={i} className="text-[9px] bg-white/[0.03] border border-white/5 text-gray-400 px-2 py-0.5 rounded-md">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Campus Innovation Committees (Interactive Tabs) */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            Campus Chapters
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Campus Leadership & Student Committees
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Autonomous chapters run by Institutional Patrons, Faculty Mentors, and elected Student Directors.
          </p>
        </div>

        {/* Campus Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {CAMPUSES.map((campus) => {
            const isSelected = activeCampus === campus.id;
            return (
              <button
                key={campus.id}
                onClick={() => setActiveCampus(campus.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{campus.shortName}</span>
                <span className="text-[10px] opacity-75 font-normal">({campus.name.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Campus Overview */}
        <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-6 md:p-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${selectedCampus.badgeColor || 'border-violet-500/30 text-violet-400'}`}>
                  {selectedCampus.shortName}
                </span>
                <span className="text-xs text-gray-400">{selectedCampus.campusLocation}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {selectedCampus.name}
              </h3>
              <p className="text-xs text-cyan-400 font-semibold mt-0.5">
                {selectedCampus.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Building2 className="w-4 h-4 text-violet-400" />
              <span>{selectedCampus.established}</span>
            </div>
          </div>

          {/* Faculty Committee Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider text-violet-400">
              <ShieldCheck className="w-4 h-4" /> Faculty Committee & Institutional Patrons
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedCampus.faculty.map((f) => (
                <div
                  key={f.id}
                  className="bg-slate-950/80 border border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:border-violet-500/20 transition"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10">
                    <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{f.name}</h5>
                    <div className="text-[11px] text-cyan-400 font-semibold">{f.designation}</div>
                    <div className="text-[10px] text-gray-500">{f.roleInWINQubit}</div>
                    <div className="text-[9px] text-gray-600 mt-0.5">{f.department}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Innovation Committee Section */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider text-cyan-400">
              <Users className="w-4 h-4" /> Student Innovation Directors (5 Leads)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {selectedCampus.students.map((s) => (
                <div
                  key={s.id}
                  className="bg-slate-950/60 border border-white/5 rounded-2xl p-4 text-center hover:border-cyan-500/30 transition group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-14 h-14 rounded-full mx-auto overflow-hidden border border-white/10 group-hover:border-cyan-400 transition">
                      <img src={s.photoUrl} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                        {s.name}
                      </h5>
                      <div className="text-[10px] text-violet-400 font-bold mt-0.5">{s.role}</div>
                      <div className="text-[9px] text-gray-500">{s.branch} • {s.year}</div>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5 flex flex-wrap justify-center gap-1">
                    {s.skills.map((sk, i) => (
                      <span key={i} className="text-[8px] bg-white/[0.02] border border-white/5 text-gray-400 px-1.5 py-0.5 rounded">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Add Campus Chapter CTA */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">
            Add Your College Campus to the WINQubit Network
          </h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Higher education institutes in Mumbai and Maharashtra can apply to establish a chartered WINQubit Innovation Chapter with full laboratory, grant, and incubator access.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-cyan-500/20"
          >
            Apply for Campus Chapter Onboarding →
          </button>
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} defaultCategory="college" />
    </div>
  );
}
