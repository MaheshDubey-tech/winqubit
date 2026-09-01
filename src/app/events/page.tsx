'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Award, 
  Zap,
  Filter,
  X
} from 'lucide-react';
import { EVENTS } from '@/lib/initialData';
import { ActivityEvent } from '@/types';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);
  const [registeredEventTitle, setRegisteredEventTitle] = useState('');
  const [regRef, setRegRef] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const [selectedEventForModal, setSelectedEventForModal] = useState<ActivityEvent | null>(null);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    campus: 'TSEC (Engineering)',
    teamName: '',
    teamSize: '3',
  });

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'Innovation Hackathon', label: 'Hackathons' },
    { id: 'Technical Workshop', label: 'Workshops' },
    { id: 'Ideathon & Pitch', label: 'Ideathons' },
    { id: 'Demo Day & Investor Pitch', label: 'Demo Days' },
  ];

  const filteredEvents = selectedCategory === 'all'
    ? EVENTS
    : EVENTS.filter(e => e.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const flagshipEvent = EVENTS[0];

  const handleOpenRegister = (event: ActivityEvent) => {
    setSelectedEventForModal(event);
    setIsModalOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setRegRef(`EVT-2026-${code}`);
    setRegisteredEventId(selectedEventForModal?.id || 'evt-1');
    setRegisteredEventTitle(selectedEventForModal?.title || 'HackSpark 2026');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-cyan-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Hackathons, Sprints & Mentorship
          </span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400">Opportunities</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Participate in multi-campus hackathons, prototype showcases, industry challenges, and venture pitch days.
        </p>
      </section>

      {/* Confirmation Notification if just registered */}
      {registeredEventId && (
        <section className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white">Registration Confirmed! </span>
                <span className="text-gray-300">You are registered for <span className="text-cyan-300 font-semibold">{registeredEventTitle}</span>. (Ref: <span className="font-mono text-emerald-400 font-bold">{regRef}</span>)</span>
              </div>
            </div>
            <button
              onClick={() => setRegisteredEventId(null)}
              className="text-gray-400 hover:text-white text-xs shrink-0"
            >
              ✕
            </button>
          </div>
        </section>
      )}

      {/* 2. Flagship Hackathon Feature: HackSpark 2026 */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-950 border border-violet-500/40 rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider font-mono">
                  FLAGSHIP CHALLENGE
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  OPEN FOR ENTRIES • ₹2.5L GRANTS
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {flagshipEvent.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {flagshipEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300 pt-2">
                <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{flagshipEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                  <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>{flagshipEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-white/5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{flagshipEvent.venue.split(',')[0]}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenRegister(flagshipEvent)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition shadow-lg shadow-cyan-500/20 hover:scale-105"
                >
                  Register Your Team for HackSpark →
                </button>
                <span className="text-[11px] text-gray-400">Free for WINQubit Member Pass Holders</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="text-xs font-bold text-white uppercase tracking-wider text-violet-400">
                HackSpark Highlights
              </div>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span> 36 Hours of Non-stop Making
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span> ₹2,50,000 Total Prize & POC Grants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span> Hardware lab & 3D printer access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span> Fast-track InQubit Incubation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Events Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="font-display text-xl font-bold text-white">Upcoming Events & Workshops</h3>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                  selectedCategory === c.id
                    ? 'bg-violet-600 border-violet-500 text-white font-bold'
                    : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-500/30 transition group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {evt.category}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    {evt.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {evt.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {evt.description}
                </p>

                <div className="space-y-1.5 text-[11px] text-gray-400 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    <span>{evt.date} • {evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500">Free for Members</span>
                <button
                  onClick={() => handleOpenRegister(evt)}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-4 py-2 rounded-full border border-white/10 transition hover:border-cyan-400"
                >
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Host an Event Banner */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">
            Want to Host an Event or Workshop?
          </h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Student committees and partner companies can propose workshops, technical masterclasses, or sponsor hackathon tracks.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/20"
          >
            Propose Workshop / Event →
          </button>
        </div>
      </section>

      {/* Event Registration Modal */}
      {isModalOpen && selectedEventForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">Event Registration</span>
                <h3 className="text-base font-bold text-white">{selectedEventForModal.title}</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu.in"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">Campus / Institution *</label>
                <select
                  value={form.campus}
                  onChange={e => setForm({ ...form, campus: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Thakur Shyamnarayan Engineering College (TSEC)">TSEC (Engineering)</option>
                  <option value="Thakur Shyamnarayan Degree College (TSDC)">TSDC (Degree/Commerce)</option>
                  <option value="Thakur Institute of Aviation Technology (TIAT)">TIAT (Aviation Tech)</option>
                  <option value="Thakur Institute of Hotel Management (TIHM)">TIHM (Hospitality)</option>
                  <option value="Other Partner Institution">Other Partner Institution</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Quantum Pioneers"
                    value={form.teamName}
                    onChange={e => setForm({ ...form, teamName: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Members Count</label>
                  <select
                    value={form.teamSize}
                    onChange={e => setForm({ ...form, teamSize: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="1">1 (Individual)</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                    <option value="5">5 Members</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
