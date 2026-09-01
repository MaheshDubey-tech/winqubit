'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, Clock, MapPin, ExternalLink, User, Image as ImageIcon, Sparkles } from 'lucide-react';
import { ActivityEvent } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';

interface EventDetailsModalProps {
  event: ActivityEvent | null;
  onClose: () => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, onClose }) => {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  if (!event) return null;

  const statusVariantMap = {
    Upcoming: 'accent' as const,
    Ongoing: 'urgent' as const,
    Completed: 'success' as const,
    Past: 'outline' as const
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E0E1C]/80 backdrop-blur-2xl animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full my-8 glass-panel border border-white/70 bg-white/40 backdrop-blur-3xl p-6 sm:p-8 shadow-2xl rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/70 text-[#5D1451] hover:bg-[#5D1451] hover:text-white transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Event Image */}
        <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 group">
          <Image
            src={selectedGalleryImg || event.image || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'}
            alt={event.title}
            fill
            className="object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0E1C]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Badge variant={statusVariantMap[event.status]} size="md">
              {event.status}
            </Badge>
            <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              {event.category}
            </span>
          </div>
        </div>

        {/* Header Metadata */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E0E1C] leading-snug">
            {event.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/50 border border-white/60">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#5D1451]">
              <Calendar className="w-4 h-4 text-[#E83CB7]" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#5D1451]">
              <Clock className="w-4 h-4 text-[#E83CB7]" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#5D1451]">
              <MapPin className="w-4 h-4 text-[#E83CB7]" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          {event.speaker && (
            <div className="flex items-center gap-2 text-xs font-bold text-[#5D1451] bg-[#E83CB7]/10 px-3.5 py-2 rounded-xl border border-[#E83CB7]/20">
              <User className="w-4 h-4 text-[#E83CB7]" />
              <span>Featured Speaker / Host: {event.speaker}</span>
            </div>
          )}

          {/* Description Content */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-[#1E0E1C] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E83CB7]" />
              Event Overview & Agenda
            </h4>
            <p className="text-sm text-[#6E5B70] leading-relaxed">
              {event.fullContent || event.description}
            </p>
          </div>

          {/* Additional Event Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <div className="space-y-2 pt-4">
              <h4 className="text-xs font-bold text-[#1E0E1C] uppercase tracking-wider flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5 text-[#E83CB7]" />
                Event Photos Gallery
              </h4>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedGalleryImg(event.image || null)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 ${
                    selectedGalleryImg === event.image || !selectedGalleryImg ? 'border-[#E83CB7] scale-105' : 'border-transparent'
                  }`}
                >
                  <Image src={event.image || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'} alt="Main" fill className="object-cover" />
                </button>
                {event.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGalleryImg(img)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 ${
                      selectedGalleryImg === img ? 'border-[#E83CB7] scale-105' : 'border-transparent'
                    }`}
                  >
                    <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Registration CTA */}
          <div className="pt-6 flex items-center justify-between gap-4 border-t border-white/40">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold text-[#6E5B70] hover:text-[#1E0E1C]"
            >
              Close Window
            </button>

            {event.registrationUrl && (
              <GlassButton
                variant="gradient"
                size="md"
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Register for Event</span>
                <ExternalLink className="w-4 h-4" />
              </GlassButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
