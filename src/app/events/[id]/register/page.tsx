'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowLeft,
  CheckCircle2,
  Send,
  Sparkles,
  Ticket,
  ShieldCheck,
  Building,
  Mail,
  Phone
} from 'lucide-react';
import { useData } from '@/context/DataContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import confetti from 'canvas-confetti';

export default function DedicatedEventRegistrationPage() {
  const params = useParams();
  const router = useRouter();
  const { events, registerForEvent } = useData();

  const eventId = params.id as string;
  const event = events.find((e) => e.id === eventId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Researcher / Scholar',
    interests: '',
    agreeTerms: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  if (!event) {
    return (
      <div className="py-20 text-center space-y-6">
        <GlassCard className="max-w-md mx-auto p-8 border-white/80 bg-white/75 space-y-4 shadow-xl">
          <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Event Not Found</h2>
          <p className="text-xs text-[#6E6785]">The requested event does not exist or registration is closed.</p>
          <GlassButton variant="ghost" href="/events">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </GlassButton>
        </GlassCard>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const result = registerForEvent({
      eventId: event.id,
      eventTitle: event.title,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      role: formData.role,
      interests: formData.interests
    });

    if (result.success) {
      setSubmitted(true);
      setRegId(result.id);
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 }
        });
      } catch (e) {}
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href={`/events/${event.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#E9E6F2] text-xs font-bold text-[#5D1451] hover:bg-[#EEF2FF] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Event Details</span>
        </Link>

        <span className="text-xs font-bold text-[#6E6785]">
          Event ID: <strong className="font-mono text-[#5D1451]">{event.id}</strong>
        </span>
      </div>

      {submitted ? (
        /* Confirmation Pass Card */
        <GlassCard className="p-8 sm:p-12 border-white/80 bg-white/90 backdrop-blur-3xl text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-400">
          <div className="w-20 h-20 rounded-full btn-primary text-white flex items-center justify-center mx-auto shadow-lg shadow-[#E83CB7]/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <Badge variant="featured">Registration Successful</Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E1632] font-outfit">You&apos;re Registered! 🎉</h2>
            <p className="text-sm text-[#6E6785] max-w-lg mx-auto">
              Your registration for <strong>{event.title}</strong> has been officially confirmed and recorded in the WINQubit database.
            </p>
          </div>

          {/* Virtual Pass Box */}
          <div className="max-w-md mx-auto p-6 rounded-3xl bg-[#EEF2FF]/70 border-2 border-[#C7D2FE] space-y-4 shadow-sm text-left">
            <div className="flex items-center justify-between border-b border-[#C7D2FE] pb-3">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-[#5D1451]" />
                <span className="text-xs font-black text-[#1E1632] uppercase tracking-wider font-outfit">Official Delegate Pass</span>
              </div>
              <span className="font-mono text-xs font-bold text-[#4F46E5] bg-white px-2.5 py-1 rounded-lg border border-[#C7D2FE]">
                {regId}
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#6E6785]">
              <p><strong className="text-[#1E1632]">Attendee:</strong> {formData.name}</p>
              <p><strong className="text-[#1E1632]">Email:</strong> {formData.email}</p>
              <p><strong className="text-[#1E1632]">Organization:</strong> {formData.organization || 'Independent Scholar'}</p>
              <p><strong className="text-[#1E1632]">Date:</strong> {event.date}</p>
              <p><strong className="text-[#1E1632]">Venue:</strong> {event.venue}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <GlassButton variant="ghost" href={`/events/${event.id}`}>
              <span>View Event Details</span>
            </GlassButton>
            <GlassButton variant="primary" href="/events">
              <span>Browse More Events</span>
            </GlassButton>
          </div>
        </GlassCard>
      ) : (
        /* Full Registration Form Card */
        <GlassCard className="p-8 sm:p-12 border-white/80 bg-white/85 backdrop-blur-3xl space-y-8 shadow-2xl">
          {/* Header Summary Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-3xl bg-[#EEF2FF]/60 border border-[#C7D2FE]">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border border-white shadow-sm">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#5D1451] text-white text-[10px] font-black uppercase">
                    {event.category}
                  </span>
                  <span className="text-xs font-bold text-[#4F46E5]">{event.date}</span>
                </div>
                <h3 className="text-base font-black text-[#1E1632] line-clamp-1 font-outfit">{event.title}</h3>
                <p className="text-xs text-[#6E6785] truncate">{event.venue}</p>
              </div>
            </div>

            <Link
              href={`/events/${event.id}`}
              className="text-xs font-bold text-[#5D1451] hover:underline flex-shrink-0"
            >
              View Full Overview →
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <Badge variant="featured">Delegate Application</Badge>
            <h2 className="text-3xl font-black text-[#1E1632] font-outfit">Event Registration Form</h2>
            <p className="text-xs text-[#6E6785]">
              Please fill in your details accurately. Confirmation passes and live links will be issued to your provided email.
            </p>
          </div>

          {/* Registration Inputs */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#5D1451]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adv. Ananya Mukherjee"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full glass-input px-4 py-3 text-xs font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#5D1451]" /> Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. ananya@scholar.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full glass-input px-4 py-3 text-xs font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#5D1451]" /> Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full glass-input px-4 py-3 text-xs font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#5D1451]" /> University / Institution
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cambridge Quantum Lab"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full glass-input px-4 py-3 text-xs font-bold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider">
                Academic or Professional Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full glass-input px-4 py-3 text-xs font-bold bg-white"
              >
                <option value="Researcher / Scholar">Researcher / Scholar</option>
                <option value="Postdoctoral Fellow">Postdoctoral Fellow</option>
                <option value="Faculty / Professor">Faculty / Professor</option>
                <option value="PhD Candidate">PhD Candidate</option>
                <option value="Graduate / Undergraduate Student">Graduate / Undergraduate Student</option>
                <option value="Industry Scientist / Engineer">Industry Scientist / Engineer</option>
                <option value="Patent Attorney / Legal Scholar">Patent Attorney / Legal Scholar</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black text-[#1E1632] uppercase tracking-wider">
                Areas of Interest & Questions for the Speaker
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific research focus, questions about patent claims or algorithms..."
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full glass-input p-4 text-xs font-bold"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full btn-primary text-white font-extrabold text-sm shadow-xl shadow-[#E83CB7]/35 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Submit & Complete Registration</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </GlassCard>
      )}
    </div>
  );
}
