'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Lightbulb, 
  Users, 
  Compass, 
  Wrench, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2 
} from 'lucide-react';

interface InnovateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InnovateModal: React.FC<InnovateModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [track, setTrack] = useState('idea');
  const [formData, setFormData] = useState({
    institution: 'Thakur Shyamnarayan Engineering College (TSEC)',
    fullName: '',
    email: '',
    phone: '',
    rollNo: '',
    branch: 'Computer Engineering',
    year: 'TE',
    domain: 'Artificial Intelligence & Deep Tech',
    ideaTitle: '',
    problemStatement: '',
    proposedSolution: '',
    currentStage: 'Concept / Ideation',
    supportNeeded: [] as string[],
    teamSize: '1',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const tracks = [
    {
      id: 'idea',
      label: 'I have an idea to build',
      icon: Lightbulb,
      desc: 'Submit your solution for technical validation & review',
    },
    {
      id: 'team',
      label: 'I need a multidisciplinary team',
      icon: Users,
      desc: 'Connect with coders, designers, or domain specialists',
    },
    {
      id: 'mentor',
      label: 'I need an industry mentor',
      icon: Compass,
      desc: 'Get paired with senior founders and technical experts',
    },
    {
      id: 'prototype',
      label: 'I want to build a prototype',
      icon: Wrench,
      desc: 'Apply for lab access and prototype micro-grants',
    },
    {
      id: 'challenge',
      label: 'I want to solve industry challenges',
      icon: Award,
      desc: 'Participate in corporate & HackSpark challenges',
    },
  ];

  const supportOptions = [
    'Prototype POC Grant (up to ₹1L)',
    '1-on-1 Industry Mentorship',
    'Campus Maker Lab / Hardware Access',
    'Cloud Server / API Credits',
    'Patent & Prior-Art Legal Help',
    'InQubit Venture Incubation Review',
  ];

  const handleSupportToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(item)
        ? prev.supportNeeded.filter(i => i !== item)
        : [...prev.supportNeeded, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setRefCode(`WINQ-2026-${code}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1632]/50 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] shadow-[0_25px_80px_rgba(93,20,81,0.2)] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 bg-gradient-to-r from-[#5D1451] via-[#E83CB7] to-[#ADD8E6] w-full" />
        
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E9E6F2]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#5D1451]/10 border border-[#5D1451]/20 flex items-center justify-center text-[#5D1451]">
                <Sparkles className="w-5 h-5 text-[#E83CB7]" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#1E1632] flex items-center gap-2">
                  Student Innovation Portal
                </h3>
                <p className="text-xs text-[#6E6785]">
                  WINQubit × InQubit Idea Intake & Acceleration Engine
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#6E6785] hover:text-[#1E1632] rounded-full hover:bg-[#F7F5FF] transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Success Screen */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl flex items-center justify-center mx-auto text-[#059669] shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-[#1E1632]">Innovation Proposal Submitted!</h4>
                <p className="text-xs text-[#6E6785] max-w-md mx-auto">
                  Thank you, <span className="text-[#1E1632] font-bold">{formData.fullName || 'Student Innovator'}</span>. Your proposal has been routed to the Faculty Coordinator and Student Committee at {formData.institution.split('(')[0]}.
                </p>
              </div>

              <div className="bg-[#F7F5FF] border border-[#E9E6F2] rounded-2xl p-5 max-w-sm mx-auto space-y-2.5 text-left text-xs">
                <div className="flex justify-between items-center text-[#6E6785]">
                  <span>Tracking Reference:</span>
                  <span className="font-mono font-bold text-[#5D1451]">{refCode}</span>
                </div>
                <div className="flex justify-between items-center text-[#6E6785]">
                  <span>Next Review Stage:</span>
                  <span className="text-[#1E1632] font-semibold">Institutional Faculty Review Board</span>
                </div>
                <div className="flex justify-between items-center text-[#6E6785]">
                  <span>Target Response:</span>
                  <span className="text-[#059669] font-bold">Within 72 Hours via WhatsApp / Email</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
              >
                Done & Return to Site
              </button>
            </div>
          ) : step === 1 ? (
            /* Step 1: Select Track */
            <div className="pt-6 space-y-5">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#1E1632]">How can WINQubit power your journey?</h4>
                <p className="text-xs text-[#6E6785]">Select your primary reason for reaching out today.</p>
              </div>

              <div className="space-y-2.5">
                {tracks.map(t => {
                  const Icon = t.icon;
                  const isSelected = track === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTrack(t.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#FCE7F3]/70 border-[#E83CB7] shadow-[0_4px_16px_rgba(232,60,183,0.15)]'
                          : 'bg-[#F7F5FF] border-[#E9E6F2] text-[#6E6785] hover:bg-white hover:border-[#5D1451]/30 hover:text-[#1E1632]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                          isSelected ? 'bg-[#5D1451] text-white' : 'bg-white text-[#5D1451] border border-[#E9E6F2]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-[#5D1451]' : 'text-[#1E1632]'}`}>
                            {t.label}
                          </div>
                          <div className="text-[11px] text-[#6E6785]">{t.desc}</div>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'border-[#E83CB7] bg-[#E83CB7] text-white' : 'border-[#E9E6F2] bg-white'
                      }`}>
                        {isSelected && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary inline-flex items-center gap-2 text-white text-xs font-bold px-7 py-3 rounded-full transition shadow-md"
                >
                  Continue to Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Step 2: Form Details */
            <form onSubmit={handleSubmit} className="pt-6 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#E9E6F2]">
                <div>
                  <h4 className="text-base font-bold text-[#1E1632]">Student & Campus Details</h4>
                  <p className="text-xs text-[#6E6785]">Tell us where you are studying and how we can reach you.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#E83CB7] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Change Track
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
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
                    <option value="Other Partner Institution">Other Partner Institution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">College Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. student@tsec.edu.in"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Branch & Academic Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Computer Engg / TE (3rd Year)"
                    value={formData.branch}
                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>
              </div>

              {/* Innovation Details */}
              <div className="pt-2 border-t border-[#E9E6F2] space-y-3">
                <h5 className="text-xs font-bold text-[#1E1632]">Innovation Project Details</h5>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Project / Idea Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Autonomous Drone for Hospital Logistics"
                    value={formData.ideaTitle}
                    onChange={e => setFormData({ ...formData, ideaTitle: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Problem Statement & Proposed Solution</label>
                  <textarea
                    rows={3}
                    placeholder="Describe what problem you are solving and how your technology/solution works..."
                    value={formData.problemStatement}
                    onChange={e => setFormData({ ...formData, problemStatement: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#E83CB7] focus:ring-2 focus:ring-[#E83CB7]/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1.5">Support Needed (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {supportOptions.map(opt => {
                      const isChecked = formData.supportNeeded.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSupportToggle(opt)}
                          className={`text-left p-2.5 rounded-xl border text-[11px] font-semibold transition ${
                            isChecked
                              ? 'bg-[#FCE7F3] border-[#FBCFE8] text-[#DB2777]'
                              : 'bg-[#F7F5FF] border-[#E9E6F2] text-[#6E6785] hover:border-[#5D1451]/30 hover:text-[#1E1632]'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '} {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-[#E9E6F2]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[#6E6785] hover:text-[#1E1632] text-xs font-bold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary text-white font-bold text-xs px-7 py-3 rounded-full transition shadow-md"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
