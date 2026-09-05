'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Sparkles, 
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Connecting Academic Excellence with Industry Foresight
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Governance</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          WINQubit unites a central management board with autonomous campus-level faculty and student innovation committees across Mumbai.
        </p>
      </section>

      {/* 2. Central Governing Council */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
            Central Management Board
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Overall Management Committee
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
            Senior leadership guiding institutional alignment, innovation policy, budget approvals, and InQubit incubation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {GOVERNING_COUNCIL.map((leader) => (
            <div
              key={leader.id}
              className="glass-card-light p-7 flex flex-col justify-between"
            >
              <div className="space-y-4 text-center">
                <div className="w-24 h-24 rounded-2xl mx-auto overflow-hidden border-2 border-[#5D1451]/20 shadow-md">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1E1632] group-hover:text-[#5D1451] transition">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-bold text-[#E83CB7] mt-0.5">{leader.designation}</div>
                  <div className="text-[11px] text-[#8E87A5] font-medium">{leader.organization}</div>
                </div>
                <p className="text-xs text-[#6E6785] leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E9E6F2]">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {leader.expertise.map((exp, i) => (
                    <span key={i} className="text-[10px] bg-white/90 border border-[#E9E6F2] text-[#5D1451] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs">
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
            Campus Chapters
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Campus Leadership & Student Committees
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
            Autonomous chapters run by Institutional Patrons, Faculty Mentors, and elected Student Directors.
          </p>
        </div>

        {/* Campus Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-3xl mx-auto">
          {CAMPUSES.map((campus) => {
            const isSelected = activeCampus === campus.id;
            return (
              <button
                key={campus.id}
                onClick={() => setActiveCampus(campus.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center gap-2 border shadow-sm ${
                  isSelected
                    ? 'btn-primary text-white scale-105 shadow-md'
                    : 'bg-white/80 border-[#E9E6F2] text-[#6E6785] hover:text-[#5D1451] hover:bg-white'
                }`}
              >
                <span>{campus.shortName}</span>
                <span className="text-[10px] opacity-75 font-normal">({campus.name.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Campus Overview */}
        <div className="glass-panel p-6 md:p-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E9E6F2]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/15">
                  {selectedCampus.shortName}
                </span>
                <span className="text-xs text-[#8E87A5] font-medium">{selectedCampus.campusLocation}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#1E1632]">
                {selectedCampus.name}
              </h3>
              <p className="text-xs text-[#E83CB7] font-semibold mt-0.5">
                {selectedCampus.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#5D1451]">
              <Building2 className="w-4 h-4 text-[#5D1451]" />
              <span>{selectedCampus.established}</span>
            </div>
          </div>

          {/* Faculty Committee Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-[#5D1451] flex items-center gap-2 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#5D1451]" /> Faculty Committee & Institutional Patrons
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedCampus.faculty.map((f) => (
                <div
                  key={f.id}
                  className="glass-card-light p-4 flex items-center gap-4 border border-white/95"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#E9E6F2] shadow-2xs">
                    <img src={f.photoUrl} alt={f.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1E1632]">{f.name}</h5>
                    <div className="text-[11px] text-[#E83CB7] font-semibold">{f.designation}</div>
                    <div className="text-[10px] text-[#5D1451] font-bold">{f.roleInWINQubit}</div>
                    <div className="text-[9px] text-[#8E87A5] mt-0.5">{f.department}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Innovation Committee Section */}
          <div className="space-y-4 pt-4 border-t border-[#E9E6F2]">
            <h4 className="text-xs font-black text-[#5D1451] flex items-center gap-2 uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#E83CB7]" /> Student Innovation Directors (5 Leads)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {selectedCampus.students.map((s) => (
                <div
                  key={s.id}
                  className="glass-card-light p-4 text-center group flex flex-col justify-between border border-white/95"
                >
                  <div className="space-y-2">
                    <div className="w-14 h-14 rounded-full mx-auto overflow-hidden border border-[#E9E6F2] shadow-2xs">
                      <img src={s.photoUrl} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#1E1632]">
                        {s.name}
                      </h5>
                      <div className="text-[10px] text-[#E83CB7] font-bold mt-0.5">{s.role}</div>
                      <div className="text-[9px] text-[#8E87A5]">{s.branch} • {s.year}</div>
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#E9E6F2] flex flex-wrap justify-center gap-1">
                    {s.skills.map((sk, i) => (
                      <span key={i} className="text-[8px] bg-white/90 border border-[#E9E6F2] text-[#6E6785] px-1.5 py-0.5 rounded font-medium">
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
        <div className="glass-panel p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-black text-[#1E1632]">
            Add Your College Campus to the WINQubit Network
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6785] max-w-xl mx-auto">
            Higher education institutes in Mumbai and Maharashtra can apply to establish a chartered WINQubit Innovation Chapter with full laboratory, grant, and incubator access.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
          >
            Apply for Campus Chapter Onboarding →
          </button>
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
