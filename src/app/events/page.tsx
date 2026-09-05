'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  X
} from 'lucide-react';
import { EVENTS } from '@/lib/initialData';
import { ActivityEvent } from '@/types';
import { EventCard } from '@/components/events/EventCard';
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Hackathons, Sprints & Mentorship
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Opportunities</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Participate in multi-campus hackathons, prototype showcases, industry challenges, and venture pitch days.
        </p>
      </section>

      {/* Confirmation Notification if just registered */}
      {registeredEventId && (
        <section className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 flex items-center justify-between gap-4 animate-in fade-in shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#1E1632]">Registration Confirmed! </span>
                <span className="text-[#6E6785]">You are registered for <span className="text-[#5D1451] font-bold">{registeredEventTitle}</span>. (Ref: <span className="font-mono text-[#059669] font-bold">{regRef}</span>)</span>
              </div>
            </div>
            <button
              onClick={() => setRegisteredEventId(null)}
              className="text-[#6E6785] hover:text-[#1E1632] text-xs shrink-0"
            >
              ✕
            </button>
          </div>
        </section>
      )}

      {/* 2. Flagship Hackathon Feature: HackSpark 2026 */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#5D1451] via-[#7B1C6D] to-[#E83CB7] rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-wider font-mono backdrop-blur-md">
                  FLAGSHIP CHALLENGE
                </span>
                <span className="px-3 py-1 rounded-full bg-[#A7F3D0]/20 border border-[#A7F3D0]/40 text-[#A7F3D0] text-[10px] font-black">
                  OPEN FOR ENTRIES • ₹2.5L GRANTS
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                {flagshipEvent.title}
              </h2>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                {flagshipEvent.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white pt-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <Calendar className="w-4 h-4 text-[#FFD6F3] shrink-0" />
                  <span>{flagshipEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <Clock className="w-4 h-4 text-[#FFD6F3] shrink-0" />
                  <span>{flagshipEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <MapPin className="w-4 h-4 text-[#FFD6F3] shrink-0" />
                  <span className="truncate">{flagshipEvent.venue.split(',')[0]}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenRegister(flagshipEvent)}
                  className="bg-white text-[#5D1451] hover:bg-white/95 font-black text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-lg hover:scale-105 active:scale-95"
                >
                  Register Your Team for HackSpark →
                </button>
                <span className="text-[11px] text-white/80">Free for WINQubit Member Pass Holders</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 space-y-4">
              <div className="text-xs font-black text-white uppercase tracking-wider">
                HackSpark Highlights
              </div>
              <ul className="space-y-2.5 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <span className="text-[#A7F3D0] font-black">✓</span> 36 Hours of Non-stop Making
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A7F3D0] font-black">✓</span> ₹2,50,000 Total Prize & POC Grants
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A7F3D0] font-black">✓</span> Hardware lab & 3D printer access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A7F3D0] font-black">✓</span> Fast-track InQubit Incubation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Events Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h3 className="font-display text-xl font-black text-[#1E1632]">Upcoming Events & Workshops</h3>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition border shadow-xs ${
                  selectedCategory === c.id
                    ? 'btn-primary text-white'
                    : 'bg-white/80 border-[#E9E6F2] text-[#6E6785] hover:text-[#5D1451] hover:bg-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </section>

      {/* 4. Host an Event Banner */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass-panel p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-black text-[#1E1632]">
            Want to Host an Event or Workshop?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6785] max-w-xl mx-auto">
            Student committees and partner companies can propose workshops, technical masterclasses, or sponsor hackathon tracks.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
          >
            Propose Workshop / Event →
          </button>
        </div>
      </section>

      {/* Event Registration Modal */}
      {isModalOpen && selectedEventForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1632]/50 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] shadow-[0_25px_80px_rgba(93,20,81,0.2)] p-6 md:p-8 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center pb-3 border-b border-[#E9E6F2]">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#5D1451] uppercase">Event Registration</span>
                <h3 className="text-base font-black text-[#1E1632]">{selectedEventForModal.title}</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-[#6E6785] hover:text-[#1E1632]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                  className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu.in"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Campus / Institution *</label>
                <select
                  value={form.campus}
                  onChange={e => setForm({ ...form, campus: e.target.value })}
                  className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] font-medium focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
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
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Team Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Quantum Pioneers"
                    value={form.teamName}
                    onChange={e => setForm({ ...form, teamName: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Team Members Count</label>
                  <select
                    value={form.teamSize}
                    onChange={e => setForm({ ...form, teamSize: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] font-medium focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
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
                  className="btn-primary w-full text-white font-bold text-xs py-3.5 rounded-xl transition shadow-md"
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
