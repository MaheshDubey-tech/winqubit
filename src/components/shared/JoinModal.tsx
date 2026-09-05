'use client';

import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, CreditCard } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: 'Thakur Shyamnarayan Engineering College (TSEC)',
    department: 'Computer Engineering',
    yearOfStudy: 'Second Year',
    rollNo: '',
    interestAreas: [] as string[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const domains = [
    'AI & Intelligent Robotics',
    'Aviation & Drone Systems',
    'Food Tech & Culinary Science',
    'FinTech & Business Commerce',
    'CleanTech & Sustainability',
    'Cybersecurity & Web3',
  ];

  const handleInterestToggle = (domain: string) => {
    if (formData.interestAreas.includes(domain)) {
      setFormData({
        ...formData,
        interestAreas: formData.interestAreas.filter(d => d !== domain),
      });
    } else {
      setFormData({
        ...formData,
        interestAreas: [...formData.interestAreas, domain],
      });
    }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1632]/50 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] shadow-[0_25px_80px_rgba(93,20,81,0.2)] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 bg-gradient-to-r from-[#5D1451] via-[#E83CB7] to-[#ADD8E6] w-full" />

        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#E9E6F2]">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/15 mb-1 font-mono">
                Annual Student Pass (2026-27)
              </div>
              <h3 className="text-xl font-black text-[#1E1632]">Join the WINQubit Ecosystem</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#6E6785] hover:text-[#1E1632] rounded-full hover:bg-[#F7F5FF] transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="py-6 text-center space-y-5 animate-in fade-in">
              <div className="w-14 h-14 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl flex items-center justify-center mx-auto text-[#059669]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#1E1632]">Welcome to WINQubit!</h4>
                <p className="text-xs text-[#6E6785] mt-1">
                  Membership registration initialized for <span className="text-[#1E1632] font-bold">{formData.fullName}</span>.
                </p>
              </div>

              {/* Digital Pass Mockup */}
              <div className="bg-gradient-to-br from-[#5D1451] via-[#7B1C6D] to-[#2D0A27] text-white rounded-2xl p-5 max-w-sm mx-auto text-left shadow-xl space-y-4 border border-white/20">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-bold text-[#FFCFE5] tracking-wider uppercase">DIGITAL INNOVATOR PASS</div>
                  <Sparkles className="w-4 h-4 text-[#FFD6F3]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-white/70">Pass Holder</div>
                  <div className="text-base font-black text-white">{formData.fullName || 'Student Builder'}</div>
                  <div className="text-xs text-white/80">{formData.institution.split('(')[0]}</div>
                </div>
                <div className="flex justify-between items-end pt-2 border-t border-white/15 text-[10px]">
                  <div>
                    <div className="text-white/60 text-[9px]">MEMBER ID</div>
                    <div className="font-mono font-bold text-white text-xs">{passId}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-[9px]">STATUS</div>
                    <div className="text-[#A7F3D0] font-black">ACTIVE (2026-27)</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#6E6785] max-w-xs mx-auto">
                Your campus chapter coordinator will verify your student ID and issue your lab access clearance within 24 hours.
              </p>

              <button
                onClick={handleClose}
                className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
              >
                Close & Access Member Hub
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs">
              <div className="bg-[#F7F5FF] border border-[#E9E6F2] rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E1632]">Standard Annual Membership</div>
                    <div className="text-[11px] text-[#6E6785]">All 4 campus labs, hackathons & prototype grants</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-[#5D1451]">₹500</div>
                  <div className="text-[10px] text-[#8E87A5]">/ academic year</div>
                </div>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Campus / Institution *</label>
                  <select
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] font-medium focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  >
                    <option value="Thakur Shyamnarayan Engineering College (TSEC)">Thakur Shyamnarayan Engineering College (TSEC)</option>
                    <option value="Thakur Shyamnarayan Degree College (TSDC)">Thakur Shyamnarayan Degree College (TSDC)</option>
                    <option value="Thakur Institute of Aviation Technology (TIAT)">Thakur Institute of Aviation Technology (TIAT)</option>
                    <option value="Thakur Institute of Hotel Management (TIHM)">Thakur Institute of Hotel Management (TIHM)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1632] mb-1">College Roll / PRN Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 202410123"
                      value={formData.rollNo}
                      onChange={e => setFormData({ ...formData, rollNo: e.target.value })}
                      className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@college.edu.in"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#1E1632] mb-1">WhatsApp Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1.5">Primary Interests (Select 2 or more)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {domains.map(d => {
                      const isChecked = formData.interestAreas.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => handleInterestToggle(d)}
                          className={`text-left p-2.5 rounded-xl border text-[11px] font-semibold transition ${
                            isChecked
                              ? 'bg-[#FCE7F3] border-[#FBCFE8] text-[#DB2777]'
                              : 'bg-[#F7F5FF] border-[#E9E6F2] text-[#6E6785] hover:border-[#5D1451]/30 hover:text-[#1E1632]'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '} {d}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-primary w-full text-white font-bold text-xs py-3.5 rounded-xl transition shadow-lg"
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
