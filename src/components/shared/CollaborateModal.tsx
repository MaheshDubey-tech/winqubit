'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Send, CheckCircle2, HeartHandshake, User, Mail, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import { useData } from '@/context/DataContext';
import confetti from 'canvas-confetti';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CollaborateModal: React.FC<CollaborateModalProps> = ({ isOpen, onClose }) => {
  const { submitCollaborateForm } = useData();
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    phone: '',
    organizationName: '',
    organizationType: 'Industry' as const,
    proposalType: 'Research Collaboration' as const,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email || !formData.organizationName) return;

    const result = submitCollaborateForm({
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      organizationName: formData.organizationName,
      organizationType: formData.organizationType,
      proposalType: formData.proposalType,
      message: formData.message
    });

    if (result.success) {
      setAppId(result.id);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setAppId('');
    setFormData({
      contactName: '',
      email: '',
      phone: '',
      organizationName: '',
      organizationType: 'Industry',
      proposalType: 'Research Collaboration',
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/80 my-8 space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#F7F5FF] text-[#5D1451] hover:bg-[#EEF2FF] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] shadow-sm">
              <HeartHandshake className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span className="text-[11px] font-black tracking-wider text-[#4F46E5] uppercase">
                Institutional Partnership Portal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E1632] font-outfit">
              Partner & Collaborate With Us
            </h2>
            <p className="text-xs text-[#6E6785] leading-relaxed">
              We welcome universities, quantum laboratories, industry leaders, sponsors, and individual domain experts to partner with our Four-College WINQubit Consortium.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-[#EEF2FF] border border-[#C7D2FE] text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#4F46E5] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-[#1E1632] font-outfit">Partnership Proposal Submitted!</h3>
              <p className="text-xs text-[#4F46E5] font-semibold max-w-md mx-auto">
                Thank you, <strong>{formData.contactName}</strong> from <strong>{formData.organizationName}</strong>! Your collaboration inquiry has been routed to our Executive Directorate.
              </p>
              <div className="inline-block p-3.5 bg-white rounded-2xl border border-[#C7D2FE] text-xs font-mono font-bold text-[#4F46E5]">
                Reference Code: <strong>{appId}</strong>
              </div>
              <p className="text-[11px] text-[#6E6785]">
                Our partnership council will review your proposal and initiate direct communication within 2 business days.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-full bg-[#4F46E5] text-white font-extrabold text-xs shadow-md hover:bg-[#4338CA]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Contact Person Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6E6785] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Robert Vance"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full glass-input pl-9 pr-3 py-2.5 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6E6785] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. r.vance@quantumlabs.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input pl-9 pr-3 py-2.5 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Organization / Entity Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#6E6785] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Quantum Labs Inc."
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      className="w-full glass-input pl-9 pr-3 py-2.5 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Organization Type</label>
                  <select
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value as any })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold bg-white"
                  >
                    <option value="Industry">Industry / Enterprise Tech</option>
                    <option value="University">University / Academic Institution</option>
                    <option value="Research Institute">Research Institute / Lab</option>
                    <option value="Government / NGO">Government / Non-Profit Org</option>
                    <option value="Individual">Individual Researcher / Expert</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Phone Number</label>
                  <input
                    type="text"
                    placeholder="e.g. +1 (555) 782-9900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Proposal Scope</label>
                  <select
                    value={formData.proposalType}
                    onChange={(e) => setFormData({ ...formData, proposalType: e.target.value as any })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold bg-white"
                  >
                    <option value="Research Collaboration">Co-funded Research Collaboration</option>
                    <option value="Event Sponsorship">Event / Hackathon Sponsorship</option>
                    <option value="Guest Lecture / Mentorship">Guest Speaker & Faculty Exchange</option>
                    <option value="Student Internship">Student Internship & Hiring Track</option>
                    <option value="Other">Other Strategic Initiative</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1E1632]">Proposal Details / Collaboration Summary</label>
                <textarea
                  rows={3}
                  placeholder="Outline your collaboration goals, resource contributions, or partnership scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full glass-input p-3 text-xs font-bold"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-[#6E6785] hover:bg-[#F7F5FF]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#4F46E5] text-white font-extrabold text-xs shadow-lg shadow-[#4F46E5]/30 hover:bg-[#4338CA] active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Submit Partner Proposal</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
