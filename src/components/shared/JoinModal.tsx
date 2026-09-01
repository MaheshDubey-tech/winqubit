'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Sparkles } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    institution: 'Thakur Shyamnarayan Engineering College (TSEC)',
    fullName: '',
    email: '',
    phone: '',
    rollNo: '',
    branch: 'Computer Engineering',
    year: 'SE',
    interestAreas: ['Artificial Intelligence & ML', 'Robotics & Embedded IoT'],
    hasIdea: 'no' as 'yes' | 'no',
    ideaSnippet: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const domains = [
    'Artificial Intelligence & ML',
    'Robotics & Embedded IoT',
    'Aerospace & Drone Engineering',
    'Biotech & HealthTech',
    'Hospitality & Food Technology',
    'CleanTech & Sustainability',
    'FinTech & Business Modeling',
    'Patent & Research Writing',
  ];

  const handleInterestToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(item)
        ? prev.interestAreas.filter(i => i !== item)
        : [...prev.interestAreas, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setPassId(`WQ-2026-${code}`);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8">
        <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 w-full" />

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1 font-mono">
                Annual Student Pass (2026-27)
              </div>
              <h3 className="text-lg font-bold text-white">Join the WINQubit Ecosystem</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-6 text-center space-y-5 animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Welcome to WINQubit!</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Membership registration initialized for <span className="text-white font-semibold">{formData.fullName}</span>.
                </p>
              </div>

              {/* Digital Pass Mockup */}
              <div className="bg-gradient-to-br from-violet-950/80 via-slate-900 to-indigo-950/80 border border-violet-500/30 rounded-2xl p-5 max-w-sm mx-auto text-left shadow-xl space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-bold text-violet-400 tracking-wider">DIGITAL INNOVATOR PASS</div>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider text-[9px]">Pass Holder</div>
                  <div className="text-sm font-bold text-white">{formData.fullName || 'Student Builder'}</div>
                  <div className="text-[11px] text-gray-400">{formData.institution.split('(')[0]}</div>
                </div>
                <div className="flex justify-between items-end pt-2 border-t border-white/10 text-[10px]">
                  <div>
                    <div className="text-gray-500 text-[9px]">MEMBER ID</div>
                    <div className="font-mono font-bold text-cyan-400">{passId}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[9px]">STATUS</div>
                    <div className="text-emerald-400 font-bold">ACTIVE (2026-27)</div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 max-w-xs mx-auto">
                Your campus chapter coordinator will verify your student ID and issue your lab access clearance within 24 hours.
              </p>

              <button
                onClick={handleClose}
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/30"
              >
                Close & Access Member Hub
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Standard Annual Membership</div>
                    <div className="text-[11px] text-gray-400">All 4 campus labs, hackathons & prototype grants</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-cyan-400">₹500</div>
                  <div className="text-[9px] text-gray-500">/ academic year</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Campus / Institution *</label>
                  <select
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-violet-400"
                  >
                    <option value="Thakur Shyamnarayan Engineering College (TSEC)">Thakur Shyamnarayan Engineering College (TSEC)</option>
                    <option value="Thakur Shyamnarayan Degree College (TSDC)">Thakur Shyamnarayan Degree College (TSDC)</option>
                    <option value="Thakur Institute of Aviation Technology (TIAT)">Thakur Institute of Aviation Technology (TIAT)</option>
                    <option value="Thakur Institute of Hotel Management (TIHM)">Thakur Institute of Hotel Management (TIHM)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">College Roll / PRN Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 202410123"
                      value={formData.rollNo}
                      onChange={e => setFormData({ ...formData, rollNo: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@college.edu.in"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">WhatsApp Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5">Primary Interests (Select 2 or more)</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {domains.map(d => {
                      const isChecked = formData.interestAreas.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => handleInterestToggle(d)}
                          className={`text-left p-2 rounded-xl border text-[10px] transition ${
                            isChecked
                              ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200'
                              : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '} {d}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-xs py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
                >
                  Proceed to Activate Member Pass (₹500)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
