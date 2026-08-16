'use client';

import React, { useState } from 'react';
import { Search, Calendar, Sparkles, CheckCircle2, UserPlus, ImageIcon } from 'lucide-react';
import { useData } from '@/context/DataContext';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { EventCard } from '@/components/events/EventCard';

export default function EventsPage() {
  const { events } = useData();
  const [activeTab, setActiveTab] = useState<string>('Upcoming & Ongoing');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tabs = [
    { id: 'Upcoming & Ongoing', label: 'Ongoing / Upcoming Events' },
    { id: 'Completed', label: 'Completed Events' },
    { id: 'All', label: 'All Events' }
  ];

  const filteredEvents = events.filter(evt => {
    const isCompleted = evt.status === 'Completed' || evt.status === 'Past';
    let matchesTab = true;

    if (activeTab === 'Upcoming & Ongoing') {
      matchesTab = !isCompleted;
    } else if (activeTab === 'Completed') {
      matchesTab = isCompleted;
    }

    const matchesQuery = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         evt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (evt.speaker && evt.speaker.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesQuery;
  });

  return (
    <div className="space-y-12 pb-16">
      <SectionHeader
        badge="Consortium Events"
        title="Events & Masterclasses"
        subtitle="Explore upcoming hackathons and workshops with open student registration, or browse highlights and photo galleries from completed events."
        centered
      />

      {/* Filter Tabs & Search Bar Header */}
      <GlassCard className="p-4 border-white/80 bg-white/75 backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
        {/* Status Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-extrabold rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'btn-primary text-white shadow-md shadow-[#E83CB7]/30 scale-105'
                  : 'bg-white/70 text-[#1E1632] hover:bg-[#EEF2FF]'
              }`}
            >
              {tab.id === 'Upcoming & Ongoing' && <UserPlus className="w-3.5 h-3.5" />}
              {tab.id === 'Completed' && <ImageIcon className="w-3.5 h-3.5" />}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6E6785]" />
          <input
            type="text"
            placeholder="Search events, speakers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-input pl-10 pr-4 py-2.5 text-xs font-bold focus:outline-none"
          />
        </div>
      </GlassCard>

      {/* Category Hint Banner */}
      {activeTab === 'Upcoming & Ongoing' && (
        <div className="p-4 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE] text-xs text-[#4F46E5] font-semibold flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
            <span>Showing active events open for student seat reservation and instant registration.</span>
          </div>
          <span className="font-mono text-[11px] font-bold bg-white px-2.5 py-1 rounded-lg border border-[#C7D2FE]">
            {filteredEvents.length} Active Event(s)
          </span>
        </div>
      )}

      {activeTab === 'Completed' && (
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-800 font-semibold flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span>Showing completed events. Click any event to view event photos, recap summaries, and outcomes.</span>
          </div>
          <span className="font-mono text-[11px] font-bold bg-white px-2.5 py-1 rounded-lg border border-purple-200">
            {filteredEvents.length} Completed Event(s)
          </span>
        </div>
      )}

      {/* Events Grid Display */}
      {filteredEvents.length === 0 ? (
        <GlassCard className="p-12 text-center border-white/80 bg-white/75 space-y-4 shadow-sm">
          <Calendar className="w-10 h-10 text-[#5D1451] mx-auto opacity-50" />
          <h3 className="text-xl font-black text-[#1E1632] font-outfit">No Events Found</h3>
          <p className="text-xs text-[#6E6785]">Try adjusting your search query or selecting a different status tab.</p>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      )}
    </div>
  );
}
