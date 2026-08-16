'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { siteContent, submitContactForm } = useData();
  const { contactInfo } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    submitContactForm(formData);
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  return (
    <div className="space-y-16">
      <SectionHeader
        badge="Get In Touch"
        title="Contact WINQubit"
        subtitle="Have queries regarding quantum hackathons, research partnerships, or fellowship applications? Reach out to our executive council."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-8 border-white/80 bg-white/75 backdrop-blur-3xl space-y-6 shadow-xl">
            <div className="space-y-2">
              <Badge variant="featured">Global Headquarters</Badge>
              <h3 className="text-2xl font-black text-[#1E1632] font-outfit">WINQubit Secretariat</h3>
              <p className="text-xs text-[#6E6785]">We respond to all verified academic and industry inquiries within 24 hours.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E6F2] shadow-sm">
                <div className="p-3 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E83CB7]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Address</h4>
                  <p className="text-xs text-[#6E6785] mt-0.5">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E6F2] shadow-sm">
                <div className="p-3 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#5D1451]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Email Inquiry</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-xs text-[#5D1451] font-bold hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E6F2] shadow-sm">
                <div className="p-3 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Phone Support</h4>
                  <p className="text-xs text-[#1E1632] font-bold mt-0.5">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E9E6F2] shadow-sm">
                <div className="p-3 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#5D1451]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1E1632] uppercase tracking-wider">Office Hours</h4>
                  <p className="text-xs text-[#6E6785] mt-0.5">{contactInfo.officeHours}</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Google Maps Embed Frame */}
          <GlassCard className="p-3 border-white/80 bg-white/75 overflow-hidden shadow-lg">
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white">
              <iframe
                title="WINQubit Headquarters Location"
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Contact Interactive Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8 sm:p-12 border-white/80 bg-white/80 backdrop-blur-3xl space-y-8 shadow-xl">
            <div className="space-y-2">
              <Badge variant="upcoming">Direct Council Form</Badge>
              <h3 className="text-3xl font-black text-[#1E1632] font-outfit">Send Us a Message</h3>
              <p className="text-xs text-[#6E6785]">Fill out the form below. Your message is delivered directly to our council officers.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-[#EEF2FF] border border-[#C7D2FE] text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#5D1451] to-[#E83CB7] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#E83CB7]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-[#1E1632] font-outfit">Message Successfully Sent!</h4>
                <p className="text-xs text-[#6E6785] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our partnership secretariat will review your submission and get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', category: 'General Inquiry', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full btn-primary text-white text-xs font-bold shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1E1632] uppercase tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-xs font-bold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1E1632] uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@research.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1E1632] uppercase tracking-wider">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-xs font-bold bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Hackathon Sponsorship">Hackathon Sponsorship</option>
                      <option value="Fellowship Grant Query">Fellowship Grant Query</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1E1632] uppercase tracking-wider">Subject Line</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Qubit Simulation Grant Application"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1E1632] uppercase tracking-wider">Your Message / Proposal *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details about your project, query, or proposed collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-input p-4 text-xs font-bold"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full btn-primary text-white font-extrabold text-sm shadow-xl shadow-[#E83CB7]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message to Council</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
