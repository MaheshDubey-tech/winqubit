'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, UserPlus, MapPin, ImageIcon, CheckCircle } from 'lucide-react';
import { ActivityEvent } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface EventCardProps {
  event: ActivityEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isCompleted = event.status === 'Completed' || event.status === 'Past';

  const badgeVariantMap: Record<string, 'upcoming' | 'ongoing' | 'completed' | 'past'> = {
    Upcoming: 'upcoming',
    Ongoing: 'ongoing',
    Completed: 'completed',
    Past: 'past'
  };

  const galleryCount = event.gallery ? event.gallery.length : 0;

  return (
    <div className="group rounded-[32px] overflow-hidden glass-panel glass-panel-hover border border-white/70 flex flex-col justify-between shadow-lg">
      {/* Top Image Banner with Floating Badges */}
      <div>
        <div className="relative w-full h-56 overflow-hidden bg-slate-100">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Top Floating Pill Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#5D1451] font-black text-[11px] tracking-wider uppercase border border-white shadow-sm">
              {event.category || 'WORKSHOP'}
            </span>
            <Badge variant={badgeVariantMap[event.status] || 'upcoming'} size="sm">
              {event.status}
            </Badge>
          </div>

          {/* Photo Count badge for Completed events */}
          {isCompleted && galleryCount > 0 && (
            <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-xs flex items-center gap-1.5 border border-white/30">
              <ImageIcon className="w-3.5 h-3.5 text-[#FFCFE5]" />
              <span>{galleryCount} Photo{galleryCount > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-3.5">
          {/* Date & Time Row */}
          <div className="flex items-center gap-2 text-xs font-black text-[#5D1451]">
            <div className="w-7 h-7 rounded-xl bg-[#EEF2FF] flex items-center justify-center border border-[#C7D2FE]/60">
              <Calendar className="w-3.5 h-3.5 text-[#4F46E5]" />
            </div>
            <span>{event.date}</span>
            {event.time && (
              <>
                <span className="text-[#6E6785] font-normal">•</span>
                <span className="text-[#6E6785] font-bold">{event.time}</span>
              </>
            )}
          </div>

          {/* Venue / Location Subtitle */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6E6785]">
            <MapPin className="w-3.5 h-3.5 text-[#E83CB7] flex-shrink-0" />
            <span className="truncate">{event.venue}</span>
          </div>

          {/* Event Title */}
          <Link href={`/events/${event.id}`}>
            <h3 className="text-xl font-black text-[#1E1632] group-hover:text-[#5D1451] transition-colors leading-tight line-clamp-2 cursor-pointer mt-1 font-outfit">
              {event.title}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-xs text-[#6E6785] line-clamp-3 leading-relaxed font-normal">
            {event.description}
          </p>

          {/* Speaker Box */}
          {event.speaker && (
            <div className="p-3.5 rounded-2xl bg-[#EEF2FF]/70 border border-[#C7D2FE]/60 text-xs text-[#4F46E5] space-y-0.5 shadow-sm">
              <p className="font-medium text-[#6E6785] text-[11px]">
                <strong className="font-extrabold text-[#1E1632]">Speaker:</strong> {event.speaker}
              </p>
              {event.speakerRole && (
                <p className="text-[10px] text-[#6E6785] font-medium pl-1">
                  ({event.speakerRole})
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions based on Completed vs Ongoing/Upcoming */}
      <div className="p-6 pt-2 border-t border-[#E9E6F2] flex items-center justify-between gap-3">
        {isCompleted ? (
          <>
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#059669] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle className="w-3 h-3" /> Event Concluded
            </span>
            <Link
              href={`/events/${event.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5D1451] text-white font-extrabold text-xs shadow-md hover:bg-[#851C74] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>View Photos & Summary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </>
        ) : (
          <>
            <Link
              href={`/events/${event.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#5D1451] hover:text-[#E83CB7] group/btn transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#E83CB7]" />
            </Link>

            <Link
              href={`/events/${event.id}/register`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs shadow-md shadow-[#E83CB7]/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Register Now</span>
              <UserPlus className="w-3.5 h-3.5" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
