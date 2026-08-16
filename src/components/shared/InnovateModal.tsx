'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Lightbulb, User, Mail, School, FileText, ArrowRight } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { Badge } from '@/components/ui/Badge';
import confetti from 'canvas-confetti';

interface InnovateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InnovateModal: React.FC<InnovateModalProps> = ({ isOpen, onClose }) => {
  const { colleges, submitInnovateForm } = useData();
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    college: colleges[0]?.name || 'Institute of Quantum & Engineering Tech (IQET)',
    projectTitle: '',
    category: 'Quantum Software',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.email || !formData.projectTitle) return;

    const result = submitInnovateForm({
      studentName: formData.studentName,
      email: formData.email,
      phone: formData.phone,
      college: formData.college,
      projectTitle: formData.projectTitle,
      category: formData.category,
      description: formData.description
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
      studentName: '',
      email: '',
      phone: '',
      college: colleges[0]?.name || 'Institute of Quantum & Engineering Tech (IQET)',
      projectTitle: '',
      category: 'Quantum Software',
      description: ''
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#FBCFE8] shadow-sm">
              <Lightbulb className="w-3.5 h-3.5 text-[#E83CB7]" />
              <span className="text-[11px] font-black tracking-wider text-[#5D1451] uppercase">
                Student Innovation Portal
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E1632] font-outfit">
              Submit Your Idea & Innovate
            </h2>
            <p className="text-xs text-[#6E6785] leading-relaxed">
              Are you a student or scholar eager to build, pitch, or research in Quantum Computing, AI, or Hardware? Register your innovation project with the WINQubit Four-College Consortium.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-[#EEF2FF] border border-[#C7D2FE] text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full btn-primary text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-[#1E1632] font-outfit">Innovation Proposal Received!</h3>
              <p className="text-xs text-[#5D1451] font-semibold max-w-md mx-auto">
                Thank you, <strong>{formData.studentName}</strong>! Your project <strong>"{formData.projectTitle}"</strong> has been registered with our review committee.
              </p>
              <div className="inline-block p-3.5 bg-white rounded-2xl border border-[#C7D2FE] text-xs font-mono font-bold text-[#5D1451]">
                Application Pass ID: <strong>{appId}</strong>
              </div>
              <p className="text-[11px] text-[#6E6785]">
                Our academic mentorship board will contact you shortly regarding lab access, seed grant opportunities, and hackathon tracks.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-full btn-primary text-white font-extrabold text-xs shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Student Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6E6785] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Riya Deshmukh"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full glass-input pl-9 pr-3 py-2.5 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Student Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6E6785] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. riya@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input pl-9 pr-3 py-2.5 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Phone / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">College / University *</label>
                  <select
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold bg-white"
                  >
                    {colleges.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.code} — {c.name}
                      </option>
                    ))}
                    <option value="Other Institution">Other University / College</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Project / Idea Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Qiskit QAOA Algorithm for Microgrids"
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Innovation Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full glass-input px-3 py-2.5 text-xs font-bold bg-white"
                  >
                    <option value="Quantum Software">Quantum Software & Algorithms</option>
                    <option value="Quantum Hardware">Quantum Hardware & Circuits</option>
                    <option value="AI & Neural Systems">AI & Neural Systems</option>
                    <option value="Post-Quantum Security">Post-Quantum Security & Cryptography</option>
                    <option value="Deep Tech Incubation">Deep Tech Incubation Idea</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1E1632]">Brief Pitch / Idea Summary</label>
                <textarea
                  rows={3}
                  placeholder="Describe your innovation concept, research objectives, or prototype details..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                  className="px-7 py-3 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg shadow-[#E83CB7]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Submit Innovation Application</span>
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
