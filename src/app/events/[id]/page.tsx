'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  User,
  ArrowLeft,
  UserPlus,
  BookOpen,
  CalendarCheck,
  Send,
  ExternalLink,
  CheckCircle2,
  ImageIcon,
  Award
} from 'lucide-react';
import { useData } from '@/context/DataContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { LightboxModal } from '@/components/shared/LightboxModal';
import { GalleryItem } from '@/types';
import confetti from 'canvas-confetti';

export default function EventDetailsPage() {
  const params = useParams();
  const { events, registerForEvent } = useData();

  const eventId = params.id as string;
  const event = events.find((e) => e.id === eventId);

  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Direct registration form state inside details page (for ongoing/upcoming events)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: 'Researcher / Scholar',
    interests: ''
  });
  const [registered, setRegistered] = useState(false);
  const [regId, setRegId] = useState('');

  if (!event) {
    return (
      <div className="py-20 text-center space-y-6">
        <GlassCard className="max-w-md mx-auto p-8 border-white/80 bg-white/75 space-y-4 shadow-xl">
          <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Event Not Found</h2>
          <p className="text-xs text-[#6E6785]">The requested event does not exist or may have been moved.</p>
          <GlassButton variant="ghost" href="/events">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </GlassButton>
        </GlassCard>
      </div>
    );
  }

  const isCompleted = event.status === 'Completed' || event.status === 'Past';

  const handleRegister = (e: React.FormEvent) => {
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
      setRegistered(true);
      setRegId(result.id);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }
  };

  // Format event.gallery into Lightbox items if available
  const galleryItems: GalleryItem[] = (event.gallery || []).map((imgUrl, i) => ({
    id: `event-gal-${i}`,
    title: `${event.title} — Photo ${i + 1}`,
    category: event.category,
    imageUrl: imgUrl,
    date: event.date,
    tags: ['Completed Event', event.category]
  }));

  return (
    <div className="space-y-12 pb-16">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#E9E6F2] text-xs font-bold text-[#5D1451] hover:bg-[#EEF2FF] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>

        {!isCompleted && (
          <Link
            href={`/events/${event.id}/register`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs shadow-md shadow-[#E83CB7]/30 hover:scale-105 active:scale-95 transition-all"
          >
            <UserPlus className="w-4 h-4" />
            <span>Register Now</span>
          </Link>
        )}
      </div>

      {/* Main Hero Card for Event */}
      <GlassCard className="p-8 sm:p-10 border-white/80 bg-white/80 backdrop-blur-3xl space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image & Media */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-white">
              <Image
                src={event.image || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-white/95 text-[#5D1451] font-black text-xs uppercase shadow-sm">
                  {event.category}
                </span>
                <Badge variant={isCompleted ? 'completed' : 'upcoming'}>
                  {event.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column: Title & Key Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-[#5D1451]">
                <div className="w-6 h-6 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
                  <Calendar className="w-3.5 h-3.5 text-[#4F46E5]" />
                </div>
                <span>{event.date}</span>
                {event.time && <span>• {event.time}</span>}
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#1E1632] leading-tight tracking-tight font-outfit">
                {event.title}
              </h1>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6785] bg-[#F7F5FF] p-3.5 rounded-2xl border border-[#E9E6F2]">
                <MapPin className="w-4 h-4 text-[#E83CB7] flex-shrink-0" />
                <span><strong>Venue:</strong> {event.venue}</span>
              </div>
            </div>

            {/* Speaker Card */}
            {event.speaker && (
              <div className="p-5 rounded-3xl bg-[#EEF2FF]/70 border border-[#C7D2FE] space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-black text-[#4F46E5]">
                  <User className="w-4 h-4 text-[#4F46E5]" />
                  <span>Featured Speaker & Masterclass Lead</span>
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#1E1632] font-outfit">{event.speaker}</h4>
                  {event.speakerRole && (
                    <p className="text-xs font-semibold text-[#6E6785]">{event.speakerRole}</p>
                  )}
                </div>
              </div>
            )}

            {/* Short Summary & CTAs */}
            <p className="text-sm text-[#6E6785] leading-relaxed font-normal">
              {event.description}
            </p>

            {!isCompleted ? (
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#register-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg shadow-[#E83CB7]/30 hover:scale-105 transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Fill Registration Form</span>
                </a>

                <Link
                  href={`/events/${event.id}/register`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#5D1451] font-extrabold text-xs border border-[#E9E6F2] hover:bg-[#EEF2FF] transition-all shadow-sm"
                >
                  <span>Open Dedicated Registration Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E83CB7]" />
                </Link>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>This event has concluded. Registration is closed. Explore the event recap and photos below.</span>
              </div>
            )}
          </div>
        </div>

        <hr className="border-[#E9E6F2]" />

        {/* Detailed Section: Completed Highlights OR Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className={isCompleted ? "lg:col-span-12 space-y-8" : "lg:col-span-7 space-y-6"}>
            <div className="space-y-3">
              <h3 className="text-xl font-black text-[#1E1632] flex items-center gap-2 font-outfit">
                <BookOpen className="w-5 h-5 text-[#5D1451]" />
                Event Description & Overview
              </h3>
              <p className="text-sm text-[#6E6785] leading-relaxed font-normal">
                {event.fullContent || event.description}
              </p>
            </div>

            {/* Event Gallery Showcase for Completed Events */}
            {isCompleted && galleryItems.length > 0 && (
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-[#1E1632] flex items-center gap-2 font-outfit">
                    <ImageIcon className="w-5 h-5 text-[#E83CB7]" />
                    Event Photo Gallery ({galleryItems.length})
                  </h3>
                  <span className="text-xs font-bold text-[#6E6785]">Click any image to expand</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedGalleryItem(item)}
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group border border-white shadow-sm hover:shadow-lg transition-all"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2.5 rounded-full bg-white text-[#5D1451]">
                          <ImageIcon className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Outcomes / Achievements for Completed Events */}
            {isCompleted && event.outcomes && event.outcomes.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#EEF2FF]/60 border border-[#C7D2FE] space-y-3">
                <h4 className="text-sm font-black text-[#4F46E5] uppercase tracking-wider font-outfit flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4F46E5]" />
                  Key Outcomes & Event Takeaways
                </h4>
                <ul className="space-y-2">
                  {event.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1E1632] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Agenda Timeline */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-black text-[#1E1632] flex items-center gap-2 font-outfit">
                  <CalendarCheck className="w-5 h-5 text-[#5D1451]" />
                  Schedule & Agenda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E9E6F2] shadow-sm flex items-start gap-3">
                      <span className="px-3 py-1 rounded-xl bg-[#EEF2FF] text-[#4F46E5] font-black text-xs flex-shrink-0">
                        {item.time}
                      </span>
                      <p className="text-xs font-bold text-[#1E1632] pt-0.5">{item.topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {event.prerequisites && event.prerequisites.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-black text-[#1E1632] uppercase tracking-wider font-outfit">Prerequisites & Recommended Background</h4>
                <ul className="space-y-2">
                  {event.prerequisites.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#6E6785] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Direct Built-in Registration Form ONLY for Ongoing / Upcoming */}
          {!isCompleted && (
            <div id="register-section" className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#C7D2FE] shadow-xl space-y-6">
                <div className="space-y-1">
                  <Badge variant="featured">Instant Seat Reservation</Badge>
                  <h3 className="text-2xl font-black text-[#1E1632] font-outfit">Register For This Event</h3>
                  <p className="text-xs text-[#6E6785]">Complete this form to reserve your seat and receive the meeting access pass.</p>
                </div>

                {registered ? (
                  <div className="p-6 rounded-3xl bg-[#EEF2FF] border border-[#C7D2FE] text-center space-y-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full btn-primary text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-[#1E1632] font-outfit">Registration Confirmed!</h4>
                    <p className="text-xs text-[#5D1451] font-semibold">
                      Thank you, <strong>{formData.name}</strong>! Your seat has been reserved.
                    </p>
                    <div className="p-3 bg-white rounded-2xl border border-[#C7D2FE] text-[11px] font-mono font-bold text-[#5D1451]">
                      Pass ID: <strong>{regId}</strong>
                    </div>
                    <p className="text-[11px] text-[#6E6785]">A confirmation email with session access details has been logged in the portal.</p>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E1632]">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Ananya Mukherjee"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E1632]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ananya@scholar.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E1632]">Phone Number</label>
                      <input
                        type="text"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E1632]">University / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. IQET Campus"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E1632]">Academic / Professional Role</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full glass-input px-3.5 py-2.5 text-xs font-bold bg-white"
                      >
                        <option value="Researcher / Scholar">Researcher / Scholar</option>
                        <option value="Postdoctoral Fellow">Postdoctoral Fellow</option>
                        <option value="Faculty / Professor">Faculty / Professor</option>
                        <option value="Student (UG/PG)">Student (UG/PG)</option>
                        <option value="Industry Professional">Industry Professional</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg shadow-[#E83CB7]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                      >
                        <span>Confirm Event Registration</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Lightbox Modal for Photo Gallery */}
      <LightboxModal
        item={selectedGalleryItem}
        items={galleryItems}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />
    </div>
  );
}
