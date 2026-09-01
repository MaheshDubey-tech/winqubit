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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8">
        <div className="h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 w-full" />
        
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Student Innovation Portal
                </h3>
                <p className="text-[11px] text-gray-400">
                  WINQubit × InQubit Idea Intake & Acceleration Engine
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Success Screen */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-xl font-bold text-white">Innovation Proposal Submitted!</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.fullName || 'Student Innovator'}</span>. Your proposal has been routed to the Faculty Coordinator and Student Committee at {formData.institution.split('(')[0]}.
                </p>
              </div>

              <div className="bg-slate-950 border border-white/10 rounded-2xl p-4 max-w-sm mx-auto space-y-2 text-left text-xs">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Tracking Reference:</span>
                  <span className="font-mono font-bold text-cyan-400">{refCode}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Next Review Stage:</span>
                  <span className="text-slate-300">Institutional Faculty Review Board</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Target Response:</span>
                  <span className="text-emerald-400">Within 72 Hours via WhatsApp / Email</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/30"
              >
                Done & Return to Site
              </button>
            </div>
          ) : step === 1 ? (
            /* Step 1: Select Track */
            <div className="pt-6 space-y-5">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">How can WINQubit power your journey?</h4>
                <p className="text-xs text-gray-400">Select your primary reason for reaching out today.</p>
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
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-violet-600/15 border-violet-500 text-white shadow-lg shadow-violet-500/10'
                          : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                          isSelected ? 'bg-violet-600 text-white' : 'bg-slate-800 text-gray-400 group-hover:text-white'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-violet-300' : 'text-white'}`}>
                            {t.label}
                          </div>
                          <div className="text-[11px] text-gray-500">{t.desc}</div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected ? 'border-violet-400 bg-violet-500 text-white' : 'border-white/20'
                      }`}>
                        {isSelected && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/20"
                >
                  Continue to Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Step 2: Form Details */
            <form onSubmit={handleSubmit} className="pt-6 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white">Student & Campus Details</h4>
                  <p className="text-[11px] text-gray-400">Tell us where you are studying and how we can reach you.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[11px] text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" /> Change Track
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
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
                    <option value="Other Partner Institution">Other Partner Institution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">College Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. student@tsec.edu.in"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Branch & Academic Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Computer Engg / TE (3rd Year)"
                    value={formData.branch}
                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>
              </div>

              {/* Innovation Details */}
              <div className="pt-2 border-t border-white/5 space-y-3">
                <h5 className="text-xs font-bold text-white">Innovation Project Details</h5>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Project / Idea Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Autonomous Drone for Hospital Logistics"
                    value={formData.ideaTitle}
                    onChange={e => setFormData({ ...formData, ideaTitle: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Problem Statement & Proposed Solution</label>
                  <textarea
                    rows={3}
                    placeholder="Describe what problem you are solving and how your technology/solution works..."
                    value={formData.problemStatement}
                    onChange={e => setFormData({ ...formData, problemStatement: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5">Support Needed (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {supportOptions.map(opt => {
                      const isChecked = formData.supportNeeded.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSupportToggle(opt)}
                          className={`text-left p-2 rounded-xl border text-[11px] transition ${
                            isChecked
                              ? 'bg-violet-600/20 border-violet-500 text-violet-200'
                              : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '} {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-gray-400 hover:text-white text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/20"
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
