'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Building2, 
  Users, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { CAMPUSES } from '@/lib/initialData';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: 'General Inquiries',
    campus: 'TSEC (Engineering)',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setForm({
      name: '',
      email: '',
      department: 'General Inquiries',
      campus: 'TSEC (Engineering)',
      message: '',
    });
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Get in Touch with the Committee
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">WINQubit</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Reach our Central Management Committee, campus Faculty Coordinators, or Student Innovation Leads.
        </p>
      </section>

      {/* 2. Central Ecosystem Hub & Contact Form */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Office & Direct Desks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 md:p-8 space-y-6">
              <div className="border-b border-[#E9E6F2] pb-4">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/15 mb-2 font-mono">
                  Central Ecosystem Office
                </div>
                <h3 className="text-xl font-black text-[#1E1632]">Main Innovation Hub</h3>
                <p className="text-xs text-[#6E6785] mt-1 leading-relaxed">
                  Managed in coordination with Thakur Educational Campus innovation centers and InQubit Venture Labs.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E1632]">Campus Address</div>
                    <div className="text-[#6E6785] leading-relaxed mt-0.5">
                      Zagdu Singh Charitable Trust Campus, Thakur Village, Kandivali (East), Mumbai, Maharashtra 400101
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E83CB7]/10 text-[#E83CB7] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E1632]">Official Inquiries</div>
                    <div className="text-[#6E6785] mt-0.5">
                      <a href="mailto:info@winqubit.org" className="text-[#5D1451] hover:text-[#E83CB7] font-semibold transition">info@winqubit.org</a>
                      <span className="text-[#8E87A5] mx-1.5">•</span>
                      <a href="mailto:partnerships@winqubit.org" className="text-[#5D1451] hover:text-[#E83CB7] font-semibold transition">partnerships@winqubit.org</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1E1632]">Helpline & WhatsApp Hub</div>
                    <div className="text-[#6E6785] mt-0.5 font-medium">
                      +91 (022) 6730 8000 / 8100
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 space-y-6">
              <div className="border-b border-[#E9E6F2] pb-4">
                <h3 className="text-xl font-black text-[#1E1632]">Send a Message to the Secretariat</h3>
                <p className="text-xs text-[#6E6785] mt-0.5">
                  We route your inquiry directly to the concerned Faculty Coordinator or Student Chapter Lead.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-6">
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-[#059669]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-[#1E1632]">Message Dispatched!</h4>
                  <p className="text-xs text-[#6E6785] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-[#1E1632] font-bold">{form.name}</span>. Your message has been routed to the {form.campus} desk. A representative will respond shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-primary text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarti Verma"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs text-[#1E1632] placeholder:text-[#8E87A5]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="aarti@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs text-[#1E1632] placeholder:text-[#8E87A5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Department / Inquiry Type</label>
                      <select
                        value={form.department}
                        onChange={e => setForm({ ...form, department: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs text-[#1E1632]"
                      >
                        <option value="General Inquiries">General Inquiries</option>
                        <option value="Student Pass & Grants">Student Pass & Grants</option>
                        <option value="HackSpark 2026 Registration">HackSpark 2026 Registration</option>
                        <option value="Institutional Chapter Partnership">Institutional Chapter Partnership</option>
                        <option value="Corporate Challenge / Sponsorship">Corporate Challenge / Sponsorship</option>
                        <option value="InQubit Incubation Alignment">InQubit Incubation Alignment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Select Campus</label>
                      <select
                        value={form.campus}
                        onChange={e => setForm({ ...form, campus: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs text-[#1E1632]"
                      >
                        <option value="TSEC (Engineering)">TSEC (Engineering)</option>
                        <option value="TSDC (Sciences & Commerce)">TSDC (Sciences & Commerce)</option>
                        <option value="TIAT (Aviation Tech)">TIAT (Aviation Tech)</option>
                        <option value="TIHM (Hotel Management)">TIHM (Hotel Management)</option>
                        <option value="Central Secretariat">Central Secretariat (All)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your question, proposal, or feedback here..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full glass-input px-3.5 py-2.5 text-xs text-[#1E1632] placeholder:text-[#8E87A5]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Campus Innovation Desk Addresses */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-2">
            Local Presence
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
            Campus Innovation Desks
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6785] mt-1">
            Visit the designated WINQubit faculty mentors at each campus location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAMPUSES.map((c) => {
            const coordinator = c.faculty[1] || c.faculty[0];
            return (
              <div
                key={c.id}
                className="glass-card-light p-5 hover:border-[#E83CB7]/30 transition group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#5D1451] bg-[#5D1451]/10 px-2 py-0.5 rounded-full border border-[#5D1451]/15">{c.shortName}</span>
                  <span className="text-[10px] text-[#8E87A5] font-semibold">Innovation Desk</span>
                </div>
                <h4 className="text-xs font-bold text-[#1E1632] group-hover:text-[#5D1451] transition">{c.name}</h4>
                <div className="text-[11px] text-[#E83CB7] font-semibold">
                  Coordinator: {coordinator.name}
                </div>
                <div className="text-[10px] text-[#8E87A5]">
                  {coordinator.department}
                </div>
                <div className="text-[10px] text-[#6E6785] pt-2 border-t border-[#E9E6F2] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#5D1451] shrink-0" />
                  <span>{c.campusLocation}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
