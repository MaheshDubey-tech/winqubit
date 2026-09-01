'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Rocket, 
  HeartHandshake, 
  Cloud, 
  Compass, 
  X, 
  CheckCircle2 
} from 'lucide-react';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: 'college' | 'industry' | 'mentor';
}

export const CollaborateModal: React.FC<CollaborateModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'industry',
}) => {
  const [category, setCategory] = useState(defaultCategory);
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    city: '',
    collaborationGoals: [] as string[],
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    {
      id: 'college',
      label: 'College / University',
      icon: Building2,
      desc: 'Establish a WINQubit Innovation Chapter on campus',
    },
    {
      id: 'industry',
      label: 'Industry / Enterprise',
      icon: Briefcase,
      desc: 'Bring corporate challenges & hire top engineering talent',
    },
    {
      id: 'startup',
      label: 'Startup / Scaleup',
      icon: Rocket,
      desc: 'Mentor creators, test beta tech, and co-build MVPs',
    },
    {
      id: 'csr',
      label: 'CSR / Impact Foundation',
      icon: HeartHandshake,
      desc: 'Sponsor women in tech & prototype seed grants',
    },
    {
      id: 'tech',
      label: 'Technology / Cloud Vendor',
      icon: Cloud,
      desc: 'Provide developer tools, hardware kits, and cloud credits',
    },
    {
      id: 'mentor',
      label: 'Individual Mentor / Investor',
      icon: Compass,
      desc: 'Guide student founders and review early stage pitches',
    },
  ];

  const goals = [
    'Establish Campus Innovation Chapter',
    'Bring Live Industry Problem Statements',
    'Offer Technical & Executive Mentorship',
    'Sponsor Student Prototype Grants',
    'Offer Internships & Pre-Placement Offers (PPOs)',
    'Co-host HackSpark Hackathons / Ideathons',
    'Establish Joint R&D / Testing Lab',
    'Explore InQubit Venture Co-Investment',
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      collaborationGoals: prev.collaborationGoals.includes(goal)
        ? prev.collaborationGoals.filter(g => g !== goal)
        : [...prev.collaborationGoals, goal],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8">
        <div className="h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 w-full" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1 font-mono">
                Partner with WINQubit
              </div>
              <h3 className="text-lg font-bold text-white">Institutional, Corporate & Ecosystem Collaboration</h3>
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
            <div className="py-8 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Partnership Request Received!</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.contactPerson || formData.orgName}</span>. Our Central Secretariat and InQubit Venture team will review your proposal and initiate an onboarding discussion.
                </p>
              </div>

              <div className="bg-slate-950 border border-white/10 rounded-2xl p-4 max-w-sm mx-auto space-y-2 text-left text-xs">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Organization:</span>
                  <span className="font-semibold text-white">{formData.orgName || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Next Steps:</span>
                  <span className="text-emerald-400">Introductory Call & MoA Framework</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-emerald-600/30"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-2">
                  What best describes your organization / profile?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map(c => {
                    const Icon = c.icon;
                    const isSelected = category === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setCategory(c.id as any)}
                        className={`text-left p-2.5 rounded-xl border transition ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                            : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-emerald-400' : 'text-gray-500'}`} />
                        <div className="text-[11px] font-bold">{c.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Organization / Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Tech / University Name"
                    value={formData.orgName}
                    onChange={e => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Khanna"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@organization.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1.5">
                  How would you like to collaborate with WINQubit? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goals.map(g => {
                    const isChecked = formData.collaborationGoals.includes(g);
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => handleGoalToggle(g)}
                        className={`text-left p-2.5 rounded-xl text-xs font-medium border transition ${
                          isChecked
                            ? 'bg-emerald-500/15 border-emerald-400 text-emerald-200'
                            : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '} {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">Specific Initiatives or Details</label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements, student count, industry problem areas, or partnership timeline..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs px-7 py-3 rounded-full transition shadow-lg shadow-emerald-500/20"
                >
                  Submit Partnership Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
