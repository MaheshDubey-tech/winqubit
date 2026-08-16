'use client';

import React, { useState } from 'react';
import { Bell, Bookmark, FileText, Download, Calendar, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { GlassButton } from '@/components/ui/GlassButton';

export default function AnnouncementsPage() {
  const { announcements } = useData();
  const [filterPriority, setFilterPriority] = useState<string>('All');

  const priorities = ['All', 'Urgent', 'Opportunity', 'Notice', 'Update'];

  const filteredAnnouncements = filterPriority === 'All'
    ? announcements
    : announcements.filter(a => a.priority === filterPriority);

  const pinnedList = filteredAnnouncements.filter(a => a.pinned);
  const regularList = filteredAnnouncements.filter(a => !a.pinned);

  return (
    <div className="space-y-16">
      <SectionHeader
        badge="Official Bulletins"
        title="Announcements & Notices"
        subtitle="Stay informed on fellowship grant applications, quantum simulator compute credits, and key community notices."
        centered
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {priorities.map((p) => (
          <button
            key={p}
            onClick={() => setFilterPriority(p)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
              filterPriority === p
                ? 'btn-primary text-white shadow-md shadow-[#E83CB7]/30 scale-105'
                : 'bg-white/70 text-[#1E1632] hover:bg-[#EEF2FF]'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Pinned Announcements High-Priority Banner */}
      {pinnedList.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-black text-[#5D1451] uppercase tracking-wider">
            <Bookmark className="w-4 h-4 fill-current text-[#E83CB7]" />
            <span>Pinned & Featured Announcements</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pinnedList.map((ann) => (
              <GlassCard
                key={ann.id}
                className="p-8 border-2 border-[#FBCFE8] bg-white/85 backdrop-blur-3xl space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={ann.priority === 'Urgent' ? 'important' : 'upcoming'}>
                      {ann.priority}
                    </Badge>
                    <span className="text-xs font-bold text-[#6E6785]">{ann.date}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#1E1632] font-outfit">{ann.title}</h3>
                  <p className="text-xs text-[#6E6785] leading-relaxed font-normal">
                    {ann.content}
                  </p>
                </div>

                {ann.attachments.length > 0 && (
                  <div className="pt-4 border-t border-[#E9E6F2] space-y-2">
                    <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-wider block">
                      Official Attachments:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ann.attachments.map((att, i) => (
                        <a
                          key={i}
                          href={att.url}
                          className="px-3.5 py-1.5 rounded-xl bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] hover:bg-[#FCE7F3] hover:text-[#DB2777] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{att.name}</span>
                          {att.size && <span className="opacity-70">({att.size})</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* Regular Announcements Stream */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-black text-[#5D1451] uppercase tracking-wider">
          <Bell className="w-4 h-4 text-[#5D1451]" />
          <span>All Recent Notices</span>
        </div>

        <div className="space-y-4">
          {regularList.map((ann) => (
            <GlassCard key={ann.id} className="p-6 border-white/80 bg-white/75 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <Badge variant={ann.priority === 'Urgent' ? 'important' : 'upcoming'}>{ann.priority}</Badge>
                  <span className="text-xs font-semibold text-[#6E6785]">{ann.date}</span>
                </div>
                <h4 className="text-lg font-black text-[#1E1632] font-outfit">{ann.title}</h4>
                <p className="text-xs text-[#6E6785] leading-relaxed font-normal">{ann.content}</p>
              </div>

              {ann.attachments.length > 0 && (
                <div className="flex items-center gap-2 flex-shrink-0">
                  {ann.attachments.map((att, idx) => (
                    <a
                      key={idx}
                      href={att.url}
                      className="px-4 py-2 rounded-full bg-white border border-[#E9E6F2] hover:bg-[#EEF2FF] text-[#5D1451] text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-[#E83CB7]" />
                      <span>{att.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
