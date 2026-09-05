'use client';

import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CollaborateModal: React.FC<CollaborateModalProps> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState<'corporate' | 'academic' | 'incubator' | 'vendor' | 'investor'>('corporate');
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    collaborationGoals: [] as string[],
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    { id: 'corporate', label: 'Corporate & Industry', icon: Briefcase },
    { id: 'academic', label: 'Academic & College', icon: GraduationCap },
    { id: 'incubator', label: 'Incubator & Accelerator', icon: Building2 },
    { id: 'investor', label: 'Angel / Seed Investor', icon: Sparkles },
    { id: 'vendor', label: 'Technology / Hardware Partner', icon: Cpu },
  ];

  const goals = [
    'Sponsor HackSpark Innovation Challenges',
    'Provide Industry Mentors & Jury Members',
    'Offer POC Prototyping Grants (CSR/Venture)',
    'Co-create Academic Innovation Center',
    'Host Campus Demo Days & Hackathons',
    'Direct Pipeline to Incubator / Seed Capital',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1632]/50 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] shadow-[0_25px_80px_rgba(93,20,81,0.2)] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 bg-gradient-to-r from-[#059669] via-[#E83CB7] to-[#5D1451] w-full" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E9E6F2]">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] mb-1 font-mono">
                Partner with WINQubit
              </div>
              <h3 className="text-xl font-black text-[#1E1632]">Institutional, Corporate & Ecosystem Collaboration</h3>
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
            <div className="py-8 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl flex items-center justify-center mx-auto text-[#059669] shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-[#1E1632]">Partnership Request Received!</h4>
                <p className="text-xs text-[#6E6785] max-w-md mx-auto">
                  Thank you, <span className="text-[#1E1632] font-bold">{formData.contactPerson || formData.orgName}</span>. Our Central Secretariat and InQubit Venture team will review your proposal and initiate an onboarding discussion.
                </p>
              </div>

              <div className="bg-[#F7F5FF] border border-[#E9E6F2] rounded-2xl p-5 max-w-sm mx-auto space-y-2.5 text-left text-xs">
                <div className="flex justify-between items-center text-[#6E6785]">
                  <span>Organization:</span>
                  <span className="font-bold text-[#1E1632]">{formData.orgName || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center text-[#6E6785]">
                  <span>Next Steps:</span>
                  <span className="text-[#059669] font-bold">Introductory Call & MoA Framework</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-5 space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-[#1E1632] mb-2">
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
                        className={`text-left p-3 rounded-2xl border transition ${
                          isSelected
                            ? 'bg-[#ECFDF5] border-[#059669] text-[#059669] font-bold shadow-sm'
                            : 'bg-[#F7F5FF] border-[#E9E6F2] text-[#6E6785] hover:bg-white hover:border-[#059669]/40 hover:text-[#1E1632]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? 'text-[#059669]' : 'text-[#8E87A5]'}`} />
                        <div className="text-[11px] font-bold">{c.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Organization / Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Tech / University Name"
                    value={formData.orgName}
                    onChange={e => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Khanna"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@organization.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Phone / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1E1632] mb-1.5">
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
                        className={`text-left p-2.5 rounded-xl text-xs font-semibold border transition ${
                          isChecked
                            ? 'bg-[#ECFDF5] border-[#059669] text-[#059669]'
                            : 'bg-[#F7F5FF] border-[#E9E6F2] text-[#6E6785] hover:border-[#059669]/30 hover:text-[#1E1632]'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '} {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1E1632] mb-1">Specific Initiatives or Details</label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements, student count, industry problem areas, or partnership timeline..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F7F5FF] border border-[#E9E6F2] rounded-xl px-3.5 py-2.5 text-[#1E1632] placeholder:text-[#8E87A5] focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-md"
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
