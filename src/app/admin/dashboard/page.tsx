'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  LayoutDashboard,
  Calendar,
  Bell,
  Users,
  Building2,
  Home,
  Plus,
  Trash2,
  Edit3,
  CheckCircle,
  LogOut,
  Sparkles,
  RotateCcw,
  ShieldCheck,
  Save,
  Search,
  Ticket,
  Filter,
  X,
  School,
  Lightbulb,
  HeartHandshake,
  Mail,
  ImageIcon,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { useData } from '@/context/DataContext';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import {
  ActivityEvent,
  Announcement,
  CommitteeMember,
  Collaboration,
  CollegePartner,
  InnovateSubmission,
  CollaborateSubmission
} from '@/types';
import confetti from 'canvas-confetti';

export default function AdminDashboardPage() {
  const router = useRouter();
  const {
    isAdmin,
    logoutAdmin,
    siteContent,
    updateSiteContent,
    colleges,
    addCollegePartner,
    updateCollegePartner,
    deleteCollegePartner,
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    announcements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    committee,
    addCommitteeMember,
    updateCommitteeMember,
    deleteCommitteeMember,
    collaborations,
    addCollaboration,
    updateCollaboration,
    deleteCollaboration,
    contactSubmissions,
    eventRegistrations,
    deleteEventRegistration,
    innovateSubmissions,
    updateInnovateStatus,
    deleteInnovateSubmission,
    collaborateSubmissions,
    updateCollaborateStatus,
    deleteCollaborateSubmission,
    updateContactStatus,
    deleteContactSubmission,
    resetDataToDefault
  } = useData();

  const [activeTab, setActiveTab] = useState('overview');
  const [saveSuccess, setSaveSuccess] = useState('');

  // Filters
  const [selectedEventForRegs, setSelectedEventForRegs] = useState<string>('All');
  const [innovateFilter, setInnovateFilter] = useState<string>('All');
  const [collaborateFilter, setCollaborateFilter] = useState<string>('All');

  // Site content editing state
  const [editingHero, setEditingHero] = useState(siteContent.hero);
  const [editingHeaders, setEditingHeaders] = useState(siteContent.sectionHeaders);
  const [editingInnovateCard, setEditingInnovateCard] = useState(siteContent.innovateCard);
  const [editingCollaborateCard, setEditingCollaborateCard] = useState(siteContent.collaborateCard);
  const [editingAbout, setEditingAbout] = useState(siteContent.about);
  const [editingContactCta, setEditingContactCta] = useState(siteContent.contactCta);
  const [editingContactInfo, setEditingContactInfo] = useState(siteContent.contactInfo);

  useEffect(() => {
    if (siteContent) {
      setEditingHero(siteContent.hero);
      if (siteContent.sectionHeaders) setEditingHeaders(siteContent.sectionHeaders);
      if (siteContent.innovateCard) setEditingInnovateCard(siteContent.innovateCard);
      if (siteContent.collaborateCard) setEditingCollaborateCard(siteContent.collaborateCard);
      if (siteContent.about) setEditingAbout(siteContent.about);
      if (siteContent.contactCta) setEditingContactCta(siteContent.contactCta);
      if (siteContent.contactInfo) setEditingContactInfo(siteContent.contactInfo);
    }
  }, [siteContent]);

  // Edit Modals
  const [editingEvent, setEditingEvent] = useState<ActivityEvent | null>(null);
  const [editingCollege, setEditingCollege] = useState<CollegePartner | null>(null);
  const [editingAnn, setEditingAnn] = useState<Announcement | null>(null);
  const [editingMember, setEditingMember] = useState<CommitteeMember | null>(null);

  // Create Modals
  const [newEventModal, setNewEventModal] = useState(false);
  const [newCollegeModal, setNewCollegeModal] = useState(false);
  const [newAnnouncementModal, setNewAnnouncementModal] = useState(false);
  const [newCommitteeModal, setNewCommitteeModal] = useState(false);

  // Form states for creating items
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    fullContent: '',
    category: 'WORKSHOP',
    date: 'September 20, 2026',
    time: '10:00 AM – 01:00 PM PST',
    venue: 'IQET Campus Auditorium',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    gallery: [] as string[],
    galleryInput: '',
    registrationUrl: '',
    status: 'Upcoming' as const,
    featured: true,
    speaker: 'Dr. Sarah Lin',
    speakerRole: 'Principal Research Scientist'
  });

  const [newCollege, setNewCollege] = useState({
    name: '',
    code: '',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
    location: '',
    website: 'https://college.edu',
    description: '',
    isFoundingPartner: true
  });

  const [newAnn, setNewAnn] = useState({
    title: '',
    content: '',
    priority: 'Notice' as const,
    pinned: false,
    attachments: [],
    expiryDate: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    bio: '',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    order: committee.length + 1,
    category: 'Leadership' as const,
    social: { linkedin: 'https://linkedin.com', email: '', twitter: '', github: '' }
  });

  useEffect(() => {
    if (!isAdmin && typeof window !== 'undefined') {
      router.push('/admin');
    }
  }, [isAdmin, router]);

  if (!isAdmin) return null;

  const triggerSaveNotification = (msg: string) => {
    setSaveSuccess(msg);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch (e) {}
    setTimeout(() => setSaveSuccess(''), 4000);
  };

  const navItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'events', name: 'Events Manager', icon: Calendar, count: events.length },
    { id: 'registrations', name: 'Event Registrations', icon: Ticket, count: eventRegistrations.length },
    { id: 'innovate', name: 'Student Innovate', icon: Lightbulb, count: innovateSubmissions.length },
    { id: 'collaborate', name: 'Partner Collaborate', icon: HeartHandshake, count: collaborateSubmissions.length },
    { id: 'colleges', name: 'Four Colleges', icon: School, count: colleges.length },
    { id: 'announcements', name: 'Announcements', icon: Bell, count: announcements.length },
    { id: 'committee', name: 'Committee', icon: Users, count: committee.length },
    { id: 'content', name: 'Site Content', icon: Home },
    { id: 'contact', name: 'Contact Inquiries', icon: Mail, count: contactSubmissions.length }
  ];

  return (
    <div className="min-h-screen pb-20 pt-4">
      {/* Top Header */}
      <div className="bg-white/80 backdrop-blur-2xl border-b border-[#E9E6F2] sticky top-0 z-30 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Image src="/winqubit-logo-cutout.png" alt="WINQubit" width={36} height={36} className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#1E1632] flex items-center gap-2 font-outfit">
                WINQubit Admin CMS
                <ShieldCheck className="w-4 h-4 text-[#4F46E5]" />
              </h1>
              <p className="text-[11px] font-semibold text-[#6E6785]">Four-College Consortium Management Console</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold animate-in fade-in">
                ✓ {saveSuccess}
              </span>
            )}

            <button
              onClick={resetDataToDefault}
              className="px-3.5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold hover:bg-amber-100 flex items-center gap-1.5"
              title="Reset state to default seed data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Seed</span>
            </button>

            <button
              onClick={() => {
                logoutAdmin();
                router.push('/admin');
              }}
              className="px-4 py-2 rounded-full btn-primary text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 flex-shrink-0 ${
                  isActive
                    ? 'btn-primary text-white shadow-md'
                    : 'text-[#6E6785] hover:text-[#1E1632] hover:bg-[#EEF2FF]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.name}</span>
                {item.count !== undefined && (
                  <span className={`px-2 py-0.2 rounded-full text-[10px] font-black ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#EEF2FF] text-[#4F46E5]'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <GlassCard className="p-6 border-white/80 bg-white/70 space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-[#1E1632] font-numbers">{events.length}</p>
                <p className="text-xs font-bold text-[#6E6785]">Total Events Managed</p>
              </GlassCard>

              <GlassCard className="p-6 border-white/80 bg-white/70 space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] text-[#5D1451] flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-[#E83CB7]" />
                </div>
                <p className="text-3xl font-black text-[#5D1451] font-numbers">{eventRegistrations.length}</p>
                <p className="text-xs font-bold text-[#6E6785]">Event Seat Registrations</p>
              </GlassCard>

              <GlassCard className="p-6 border-white/80 bg-white/70 space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-[#1E1632] font-numbers">{innovateSubmissions.length}</p>
                <p className="text-xs font-bold text-[#6E6785]">Student Innovate Proposals</p>
              </GlassCard>

              <GlassCard className="p-6 border-white/80 bg-white/70 space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <p className="text-3xl font-black text-[#1E1632] font-numbers">{collaborateSubmissions.length}</p>
                <p className="text-xs font-bold text-[#6E6785]">Partner Collaborate Inquiries</p>
              </GlassCard>
            </div>

            <GlassCard className="p-8 border-white/80 bg-white/80 space-y-4">
              <h3 className="text-lg font-black text-[#1E1632] font-outfit">Quick Management Actions</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => { setActiveTab('events'); setNewEventModal(true); }}
                  className="px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
                >
                  <Plus className="w-4 h-4" /> Add New Event
                </button>

                <button
                  onClick={() => { setActiveTab('announcements'); setNewAnnouncementModal(true); }}
                  className="px-5 py-2.5 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] font-extrabold text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Announcement
                </button>

                <button
                  onClick={() => { setActiveTab('colleges'); setNewCollegeModal(true); }}
                  className="px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add Four-College Partner
                </button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* TAB 2: EVENTS MANAGER */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Events & Completed Photo Galleries</h2>
                <p className="text-xs text-[#6E6785]">Add, edit, or delete events. Set status to Completed to upload photo gallery URLs.</p>
              </div>
              <button
                onClick={() => setNewEventModal(true)}
                className="px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" /> Add Event
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((evt) => (
                <GlassCard key={evt.id} className="p-6 border-white/80 bg-white/85 space-y-4 shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#5D1451] text-white text-[10px] font-black uppercase">
                          {evt.category}
                        </span>
                        <Badge variant={evt.status === 'Completed' ? 'completed' : 'upcoming'}>
                          {evt.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-black text-[#1E1632] font-outfit">{evt.title}</h3>
                      <p className="text-xs text-[#6E6785]">{evt.date} • {evt.venue}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingEvent(evt)}
                        className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#C7D2FE]"
                        title="Edit event"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          deleteEvent(evt.id);
                          triggerSaveNotification('Event deleted successfully');
                        }}
                        className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                        title="Delete event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#6E6785] line-clamp-2">{evt.description}</p>

                  {/* Gallery photo indicator */}
                  {evt.gallery && evt.gallery.length > 0 && (
                    <div className="pt-2 border-t border-[#E9E6F2] flex items-center justify-between text-xs">
                      <span className="font-bold text-[#5D1451] flex items-center gap-1">
                        <ImageIcon className="w-3.5 h-3.5 text-[#E83CB7]" /> {evt.gallery.length} Event Photos Attached
                      </span>
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EVENT REGISTRATIONS */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Event Seat Registrations</h2>
                <p className="text-xs text-[#6E6785]">View student & scholar delegate registrations for ongoing/upcoming events.</p>
              </div>

              <select
                value={selectedEventForRegs}
                onChange={(e) => setSelectedEventForRegs(e.target.value)}
                className="glass-input px-4 py-2 text-xs font-bold bg-white"
              >
                <option value="All">All Events ({eventRegistrations.length})</option>
                {events.map((evt) => (
                  <option key={evt.id} value={evt.id}>
                    {evt.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              {eventRegistrations
                .filter(reg => selectedEventForRegs === 'All' || reg.eventId === selectedEventForRegs)
                .map((reg) => (
                  <GlassCard key={reg.id} className="p-5 border-white/80 bg-white/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md">
                          {reg.id}
                        </span>
                        <span className="text-xs font-semibold text-[#6E6785]">{reg.registrationDate}</span>
                      </div>
                      <h4 className="text-base font-black text-[#1E1632]">{reg.name}</h4>
                      <p className="text-xs text-[#6E6785]">
                        ✉ {reg.email} | 📞 {reg.phone} | 🏢 {reg.organization} ({reg.role})
                      </p>
                      <p className="text-[11px] font-bold text-[#5D1451]">Event: {reg.eventTitle}</p>
                    </div>

                    <button
                      onClick={() => {
                        deleteEventRegistration(reg.id);
                        triggerSaveNotification('Registration deleted');
                      }}
                      className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 self-end md:self-center"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </GlassCard>
                ))}
            </div>
          </div>
        )}

        {/* TAB 4: STUDENT INNOVATE SUBMISSIONS */}
        {activeTab === 'innovate' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Student Innovate Applications</h2>
                <p className="text-xs text-[#6E6785]">Submissions from students submitting project ideas, hackathon entries, or lab access requests.</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#6E6785]">Filter Status:</span>
                <select
                  value={innovateFilter}
                  onChange={(e) => setInnovateFilter(e.target.value)}
                  className="glass-input px-3 py-2 text-xs font-bold bg-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Accepted">Accepted</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {innovateSubmissions
                .filter(sub => innovateFilter === 'All' || sub.status === innovateFilter)
                .map((sub) => (
                  <GlassCard key={sub.id} className="p-6 border-white/80 bg-white/85 space-y-4 shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[#5D1451] bg-[#FCE7F3] px-2.5 py-0.5 rounded-md">
                            {sub.id}
                          </span>
                          <span className="text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-full">
                            {sub.category}
                          </span>
                          <span className="text-xs text-[#6E6785]">{sub.submissionDate}</span>
                        </div>
                        <h3 className="text-lg font-black text-[#1E1632] font-outfit">{sub.projectTitle}</h3>
                        <p className="text-xs font-bold text-[#5D1451]">
                          Student: {sub.studentName} ({sub.email} | {sub.college})
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={sub.status}
                          onChange={(e) => updateInnovateStatus(sub.id, e.target.value as any)}
                          className="glass-input px-3 py-1.5 text-xs font-bold bg-white"
                        >
                          <option value="New">New</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Accepted">Accepted</option>
                        </select>

                        <button
                          onClick={() => {
                            deleteInnovateSubmission(sub.id);
                            triggerSaveNotification('Innovate submission deleted');
                          }}
                          className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#6E6785] bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed font-mono">
                      {sub.description}
                    </p>
                  </GlassCard>
                ))}
            </div>
          </div>
        )}

        {/* TAB 5: PARTNER COLLABORATE SUBMISSIONS */}
        {activeTab === 'collaborate' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Partner Collaboration Requests</h2>
                <p className="text-xs text-[#6E6785]">Inquiries from organizations, universities, sponsors, and individual domain experts.</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#6E6785]">Filter Status:</span>
                <select
                  value={collaborateFilter}
                  onChange={(e) => setCollaborateFilter(e.target.value)}
                  className="glass-input px-3 py-2 text-xs font-bold bg-white"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="In Discussion">In Discussion</option>
                  <option value="Partnered">Partnered</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {collaborateSubmissions
                .filter(sub => collaborateFilter === 'All' || sub.status === collaborateFilter)
                .map((sub) => (
                  <GlassCard key={sub.id} className="p-6 border-white/80 bg-white/85 space-y-4 shadow-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-0.5 rounded-md">
                            {sub.id}
                          </span>
                          <span className="text-xs font-bold text-[#5D1451] bg-[#FCE7F3] px-2.5 py-0.5 rounded-full">
                            {sub.proposalType}
                          </span>
                          <span className="text-xs text-[#6E6785]">{sub.submissionDate}</span>
                        </div>
                        <h3 className="text-lg font-black text-[#1E1632] font-outfit">{sub.organizationName}</h3>
                        <p className="text-xs font-bold text-[#4F46E5]">
                          Contact: {sub.contactName} ({sub.email} | {sub.organizationType})
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={sub.status}
                          onChange={(e) => updateCollaborateStatus(sub.id, e.target.value as any)}
                          className="glass-input px-3 py-1.5 text-xs font-bold bg-white"
                        >
                          <option value="New">New</option>
                          <option value="In Discussion">In Discussion</option>
                          <option value="Partnered">Partnered</option>
                          <option value="Archived">Archived</option>
                        </select>

                        <button
                          onClick={() => {
                            deleteCollaborateSubmission(sub.id);
                            triggerSaveNotification('Collaboration inquiry deleted');
                          }}
                          className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#6E6785] bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed font-mono">
                      {sub.message}
                    </p>
                  </GlassCard>
                ))}
            </div>
          </div>
        )}

        {/* TAB 6: FOUR COLLEGES */}
        {activeTab === 'colleges' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Four-College Alliance Partners</h2>
                <p className="text-xs text-[#6E6785]">Manage the four member colleges representing the WINQubit Consortium.</p>
              </div>
              <button
                onClick={() => setNewCollegeModal(true)}
                className="px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" /> Add College Partner
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colleges.map((col) => (
                <GlassCard key={col.id} className="p-6 border-white/80 bg-white/85 space-y-4 shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white shadow-sm flex-shrink-0">
                        <Image src={col.logo} alt={col.name} fill className="object-cover" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                          {col.code}
                        </span>
                        <h3 className="text-base font-black text-[#1E1632] font-outfit">{col.name}</h3>
                        <p className="text-xs text-[#6E6785]">{col.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingCollege(col)}
                        className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#C7D2FE]"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          deleteCollegePartner(col.id);
                          triggerSaveNotification('College partner deleted');
                        }}
                        className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#6E6785] leading-relaxed">{col.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ANNOUNCEMENTS */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Homepage Bulletins & Announcements</h2>
                <p className="text-xs text-[#6E6785]">Create notices that render directly on the homepage and announcements feed.</p>
              </div>
              <button
                onClick={() => setNewAnnouncementModal(true)}
                className="px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" /> Add Announcement
              </button>
            </div>

            <div className="space-y-4">
              {announcements.map((ann) => (
                <GlassCard key={ann.id} className="p-6 border-white/80 bg-white/85 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-md">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <Badge variant={ann.priority === 'Urgent' ? 'important' : 'upcoming'}>
                        {ann.priority}
                      </Badge>
                      {ann.pinned && <span className="text-[10px] font-black text-[#5D1451] bg-[#EEF2FF] px-2 py-0.5 rounded-full">Pinned</span>}
                      <span className="text-xs text-[#6E6785]">{ann.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#1E1632] font-outfit">{ann.title}</h3>
                    <p className="text-xs text-[#6E6785] leading-relaxed">{ann.content}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingAnn(ann)}
                      className="p-2 rounded-xl bg-[#EEF2FF] text-[#4F46E5]"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        deleteAnnouncement(ann.id);
                        triggerSaveNotification('Announcement deleted');
                      }}
                      className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: COMMITTEE */}
        {activeTab === 'committee' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Committee & Mentorship</h2>
                <p className="text-xs text-[#6E6785]">Manage council members, faculty leads, and student chapter leads.</p>
              </div>
              <button
                onClick={() => setNewCommitteeModal(true)}
                className="px-5 py-2.5 rounded-full btn-primary text-white font-extrabold text-xs flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" /> Add Committee Member
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.map((mem) => (
                <GlassCard key={mem.id} className="p-6 border-white/80 bg-white/85 space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <Badge variant="featured">{mem.category}</Badge>
                    <button
                      onClick={() => {
                        deleteCommitteeMember(mem.id);
                        triggerSaveNotification('Member deleted');
                      }}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-white">
                      <Image src={mem.photo} alt={mem.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#1E1632]">{mem.name}</h4>
                      <p className="text-xs text-[#5D1451] font-bold">{mem.position}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#6E6785] line-clamp-2">{mem.bio}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* TAB 9: SITE CONTENT (FULL HOMEPAGE CMS) */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E1632] font-outfit">Homepage Content & Copy CMS</h2>
                <p className="text-xs text-[#6E6785]">Edit all headlines, badges, portal descriptions, bullet points, and contact info rendered across the homepage.</p>
              </div>
              <button
                onClick={() => {
                  updateSiteContent({
                    ...siteContent,
                    hero: editingHero,
                    sectionHeaders: editingHeaders,
                    innovateCard: editingInnovateCard,
                    collaborateCard: editingCollaborateCard,
                    about: editingAbout,
                    contactCta: editingContactCta,
                    contactInfo: editingContactInfo
                  });
                  triggerSaveNotification('All Homepage Content Saved Successfully!');
                }}
                className="px-6 py-3 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg flex items-center gap-2"
              >
                <Save className="w-4 h-4" /> Save All Site Changes
              </button>
            </div>

            {/* 1. HERO SECTION CMS */}
            <GlassCard className="p-8 border-white/80 bg-white/85 space-y-6 shadow-md">
              <div className="flex items-center gap-2 border-b border-[#E9E6F2] pb-3">
                <Sparkles className="w-5 h-5 text-[#E83CB7]" />
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">1. Hero Section Settings</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Main Headline Title</label>
                    <input
                      type="text"
                      value={editingHero.title}
                      onChange={(e) => setEditingHero({ ...editingHero, title: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Subtitle Badge Pill</label>
                    <input
                      type="text"
                      value={editingHero.subtitle}
                      onChange={(e) => setEditingHero({ ...editingHero, subtitle: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Hero Paragraph Description</label>
                  <textarea
                    rows={3}
                    value={editingHero.description}
                    onChange={(e) => setEditingHero({ ...editingHero, description: e.target.value })}
                    className="w-full glass-input p-3 text-xs font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Primary CTA Button Text</label>
                    <input
                      type="text"
                      value={editingHero.primaryCtaText}
                      onChange={(e) => setEditingHero({ ...editingHero, primaryCtaText: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Student Portal Button Text</label>
                    <input
                      type="text"
                      value={editingHero.studentPortalText}
                      onChange={(e) => setEditingHero({ ...editingHero, studentPortalText: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Partner Portal Button Text</label>
                    <input
                      type="text"
                      value={editingHero.partnerPortalText}
                      onChange={(e) => setEditingHero({ ...editingHero, partnerPortalText: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold text-[#1E1632] block mb-2">4 Metric Stat Cards (Value & Label)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {editingHero.stats.map((st, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[10px] font-black text-[#5D1451] uppercase">Stat {i + 1}</span>
                        <input
                          type="text"
                          value={st.value}
                          onChange={(e) => {
                            const newStats = [...editingHero.stats];
                            newStats[i] = { ...newStats[i], value: e.target.value };
                            setEditingHero({ ...editingHero, stats: newStats });
                          }}
                          placeholder="Value (e.g. 1,250+)"
                          className="w-full glass-input p-2 text-xs font-bold"
                        />
                        <input
                          type="text"
                          value={st.label}
                          onChange={(e) => {
                            const newStats = [...editingHero.stats];
                            newStats[i] = { ...newStats[i], label: e.target.value };
                            setEditingHero({ ...editingHero, stats: newStats });
                          }}
                          placeholder="Label (e.g. Scholars)"
                          className="w-full glass-input p-2 text-xs font-bold"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* 2. SECTION HEADERS CMS */}
            <GlassCard className="p-8 border-white/80 bg-white/85 space-y-6 shadow-md">
              <div className="flex items-center gap-2 border-b border-[#E9E6F2] pb-3">
                <Home className="w-5 h-5 text-[#4F46E5]" />
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">2. Section Headers (Badges, Titles & Subtitles)</h3>
              </div>

              <div className="space-y-6">
                {(['announcements', 'colleges', 'about', 'innovateCollaborate', 'events', 'committee'] as const).map((key) => {
                  const header = editingHeaders[key] || { badge: '', title: '', subtitle: '' };
                  const labels: Record<string, string> = {
                    announcements: 'Announcements & Notices Section',
                    colleges: 'Four Colleges Collaboration Section',
                    about: 'About Us Section',
                    innovateCollaborate: 'Dual Portals (Innovate & Collaborate) Section',
                    events: 'Flagship Events Section',
                    committee: 'Committee & Mentorship Section'
                  };

                  return (
                    <div key={key} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                      <h4 className="text-xs font-black text-[#5D1451] uppercase tracking-wider">{labels[key]}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="text-[10px] font-bold text-[#6E6785]">Badge</label>
                          <input
                            type="text"
                            value={header.badge}
                            onChange={(e) => setEditingHeaders({
                              ...editingHeaders,
                              [key]: { ...header, badge: e.target.value }
                            })}
                            className="w-full glass-input p-2.5 text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-[#6E6785]">Title</label>
                          <input
                            type="text"
                            value={header.title}
                            onChange={(e) => setEditingHeaders({
                              ...editingHeaders,
                              [key]: { ...header, title: e.target.value }
                            })}
                            className="w-full glass-input p-2.5 text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-[#6E6785]">Subtitle</label>
                          <input
                            type="text"
                            value={header.subtitle}
                            onChange={(e) => setEditingHeaders({
                              ...editingHeaders,
                              [key]: { ...header, subtitle: e.target.value }
                            })}
                            className="w-full glass-input p-2.5 text-xs font-bold"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            {/* 3. DUAL PORTALS CMS (INNOVATE & COLLABORATE CARDS) */}
            <GlassCard className="p-8 border-white/80 bg-white/85 space-y-6 shadow-md">
              <div className="flex items-center gap-2 border-b border-[#E9E6F2] pb-3">
                <Lightbulb className="w-5 h-5 text-[#E83CB7]" />
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">3. Dual Portals Copy (Student & Partner Cards)</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Innovate Card Form */}
                <div className="p-5 rounded-2xl bg-[#FCE7F3]/30 border border-[#FBCFE8] space-y-4">
                  <h4 className="text-xs font-black text-[#5D1451] uppercase">Student Innovate Card</h4>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Badge Text</label>
                    <input
                      type="text"
                      value={editingInnovateCard.badge}
                      onChange={(e) => setEditingInnovateCard({ ...editingInnovateCard, badge: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Title</label>
                    <input
                      type="text"
                      value={editingInnovateCard.title}
                      onChange={(e) => setEditingInnovateCard({ ...editingInnovateCard, title: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Description</label>
                    <textarea
                      rows={2}
                      value={editingInnovateCard.description}
                      onChange={(e) => setEditingInnovateCard({ ...editingInnovateCard, description: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#1E1632]">Bullet Features (3 Items)</label>
                    {editingInnovateCard.bullets.map((b, i) => (
                      <input
                        key={i}
                        type="text"
                        value={b}
                        onChange={(e) => {
                          const newB = [...editingInnovateCard.bullets];
                          newB[i] = e.target.value;
                          setEditingInnovateCard({ ...editingInnovateCard, bullets: newB });
                        }}
                        className="w-full glass-input p-2 text-xs font-bold"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">CTA Button Label</label>
                    <input
                      type="text"
                      value={editingInnovateCard.ctaText}
                      onChange={(e) => setEditingInnovateCard({ ...editingInnovateCard, ctaText: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                </div>

                {/* Collaborate Card Form */}
                <div className="p-5 rounded-2xl bg-[#EEF2FF]/40 border border-[#C7D2FE] space-y-4">
                  <h4 className="text-xs font-black text-[#4F46E5] uppercase">Partner Collaborate Card</h4>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Badge Text</label>
                    <input
                      type="text"
                      value={editingCollaborateCard.badge}
                      onChange={(e) => setEditingCollaborateCard({ ...editingCollaborateCard, badge: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Title</label>
                    <input
                      type="text"
                      value={editingCollaborateCard.title}
                      onChange={(e) => setEditingCollaborateCard({ ...editingCollaborateCard, title: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">Description</label>
                    <textarea
                      rows={2}
                      value={editingCollaborateCard.description}
                      onChange={(e) => setEditingCollaborateCard({ ...editingCollaborateCard, description: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#1E1632]">Bullet Features (3 Items)</label>
                    {editingCollaborateCard.bullets.map((b, i) => (
                      <input
                        key={i}
                        type="text"
                        value={b}
                        onChange={(e) => {
                          const newB = [...editingCollaborateCard.bullets];
                          newB[i] = e.target.value;
                          setEditingCollaborateCard({ ...editingCollaborateCard, bullets: newB });
                        }}
                        className="w-full glass-input p-2 text-xs font-bold"
                      />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1E1632]">CTA Button Label</label>
                    <input
                      type="text"
                      value={editingCollaborateCard.ctaText}
                      onChange={(e) => setEditingCollaborateCard({ ...editingCollaborateCard, ctaText: e.target.value })}
                      className="w-full glass-input p-2.5 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* 4. ABOUT US CMS */}
            <GlassCard className="p-8 border-white/80 bg-white/85 space-y-6 shadow-md">
              <div className="flex items-center gap-2 border-b border-[#E9E6F2] pb-3">
                <Users className="w-5 h-5 text-[#5D1451]" />
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">4. About Us Copy (Vision, Mission & Objectives)</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Vision Statement</label>
                  <textarea
                    rows={2}
                    value={editingAbout.vision}
                    onChange={(e) => setEditingAbout({ ...editingAbout, vision: e.target.value })}
                    className="w-full glass-input p-3 text-xs font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Mission Statement</label>
                  <textarea
                    rows={2}
                    value={editingAbout.mission}
                    onChange={(e) => setEditingAbout({ ...editingAbout, mission: e.target.value })}
                    className="w-full glass-input p-3 text-xs font-bold"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-[#1E1632] block">Key Objectives (4 Cards)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {editingAbout.objectives.map((obj, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="text-[10px] font-black text-[#5D1451]">Objective 0{i + 1}</span>
                        <textarea
                          rows={2}
                          value={obj}
                          onChange={(e) => {
                            const newObjs = [...editingAbout.objectives];
                            newObjs[i] = e.target.value;
                            setEditingAbout({ ...editingAbout, objectives: newObjs });
                          }}
                          className="w-full glass-input p-2 text-xs font-bold"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* 5. CONTACT CTA & HEADQUARTERS INFO CMS */}
            <GlassCard className="p-8 border-white/80 bg-white/85 space-y-6 shadow-md">
              <div className="flex items-center gap-2 border-b border-[#E9E6F2] pb-3">
                <Mail className="w-5 h-5 text-[#0284C7]" />
                <h3 className="text-lg font-black text-[#1E1632] font-outfit">5. Contact CTA & Headquarters Info</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black text-[#5D1451] uppercase">Bottom CTA Banner Settings</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Badge Text</label>
                    <input
                      type="text"
                      value={editingContactCta.badge}
                      onChange={(e) => setEditingContactCta({ ...editingContactCta, badge: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Main Banner Title</label>
                    <input
                      type="text"
                      value={editingContactCta.title}
                      onChange={(e) => setEditingContactCta({ ...editingContactCta, title: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Banner Description</label>
                  <textarea
                    rows={2}
                    value={editingContactCta.description}
                    onChange={(e) => setEditingContactCta({ ...editingContactCta, description: e.target.value })}
                    className="w-full glass-input p-3 text-xs font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Button 1 Text (Student)</label>
                    <input
                      type="text"
                      value={editingContactCta.button1Text}
                      onChange={(e) => setEditingContactCta({ ...editingContactCta, button1Text: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Button 2 Text (Partner)</label>
                    <input
                      type="text"
                      value={editingContactCta.button2Text}
                      onChange={(e) => setEditingContactCta({ ...editingContactCta, button2Text: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <hr className="my-4 border-[#E9E6F2]" />

                <h4 className="text-xs font-black text-[#4F46E5] uppercase">Consortium Headquarters Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Contact Email</label>
                    <input
                      type="email"
                      value={editingContactInfo.email}
                      onChange={(e) => setEditingContactInfo({ ...editingContactInfo, email: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E1632]">Phone Number</label>
                    <input
                      type="text"
                      value={editingContactInfo.phone}
                      onChange={(e) => setEditingContactInfo({ ...editingContactInfo, phone: e.target.value })}
                      className="w-full glass-input p-3 text-xs font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E1632]">Consortium Address</label>
                  <input
                    type="text"
                    value={editingContactInfo.address}
                    onChange={(e) => setEditingContactInfo({ ...editingContactInfo, address: e.target.value })}
                    className="w-full glass-input p-3 text-xs font-bold"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9E6F2] flex justify-end">
                <button
                  onClick={() => {
                    updateSiteContent({
                      ...siteContent,
                      hero: editingHero,
                      sectionHeaders: editingHeaders,
                      innovateCard: editingInnovateCard,
                      collaborateCard: editingCollaborateCard,
                      about: editingAbout,
                      contactCta: editingContactCta,
                      contactInfo: editingContactInfo
                    });
                    triggerSaveNotification('All Site Content and Homepage Copy Saved!');
                  }}
                  className="px-8 py-3 rounded-full btn-primary text-white font-extrabold text-xs shadow-lg flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Save All Site Changes
                </button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      {/* CREATE EVENT MODAL */}
      {newEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-white my-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-[#1E1632] font-outfit">Add New Consortium Event</h3>
              <button onClick={() => setNewEventModal(false)} className="p-2 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                addEvent({
                  title: newEvent.title,
                  description: newEvent.description,
                  fullContent: newEvent.fullContent,
                  category: newEvent.category,
                  date: newEvent.date,
                  time: newEvent.time,
                  venue: newEvent.venue,
                  image: newEvent.image,
                  gallery: newEvent.galleryInput ? newEvent.galleryInput.split(',').map(s => s.trim()) : [],
                  registrationUrl: newEvent.registrationUrl,
                  status: newEvent.status,
                  featured: newEvent.featured,
                  speaker: newEvent.speaker,
                  speakerRole: newEvent.speakerRole
                });
                setNewEventModal(false);
                triggerSaveNotification('New event published');
              }}
              className="space-y-4 text-xs font-bold"
            >
              <div>
                <label className="block text-[#1E1632] mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1E1632] mb-1">Status *</label>
                  <select
                    value={newEvent.status}
                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value as any })}
                    className="w-full glass-input p-2.5 bg-white"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Past">Past</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1E1632] mb-1">Category</label>
                  <input
                    type="text"
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    className="w-full glass-input p-2.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1E1632] mb-1">Date</label>
                  <input
                    type="text"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full glass-input p-2.5"
                  />
                </div>
                <div>
                  <label className="block text-[#1E1632] mb-1">Venue</label>
                  <input
                    type="text"
                    value={newEvent.venue}
                    onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                    className="w-full glass-input p-2.5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1E1632] mb-1">Main Banner Image URL</label>
                <input
                  type="text"
                  value={newEvent.image}
                  onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div>
                <label className="block text-[#1E1632] mb-1">Gallery Image URLs (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="https://image1.jpg, https://image2.jpg"
                  value={newEvent.galleryInput}
                  onChange={(e) => setNewEvent({ ...newEvent, galleryInput: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div>
                <label className="block text-[#1E1632] mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setNewEventModal(false)}
                  className="px-4 py-2 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full btn-primary text-white font-extrabold shadow-md"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT EVENT MODAL */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 border border-white my-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-[#1E1632] font-outfit">Edit Event ({editingEvent.id})</h3>
              <button onClick={() => setEditingEvent(null)} className="p-2 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-bold">
              <div>
                <label className="block text-[#1E1632] mb-1">Title</label>
                <input
                  type="text"
                  value={editingEvent.title}
                  onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1E1632] mb-1">Status</label>
                  <select
                    value={editingEvent.status}
                    onChange={(e) => setEditingEvent({ ...editingEvent, status: e.target.value as any })}
                    className="w-full glass-input p-2.5 bg-white"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Past">Past</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1E1632] mb-1">Category</label>
                  <input
                    type="text"
                    value={editingEvent.category}
                    onChange={(e) => setEditingEvent({ ...editingEvent, category: e.target.value })}
                    className="w-full glass-input p-2.5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#1E1632] mb-1">Photo Gallery URLs (Comma Separated)</label>
                <input
                  type="text"
                  value={editingEvent.gallery ? editingEvent.gallery.join(', ') : ''}
                  onChange={(e) => setEditingEvent({
                    ...editingEvent,
                    gallery: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div>
                <label className="block text-[#1E1632] mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingEvent.description}
                  onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                  className="w-full glass-input p-2.5"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  onClick={() => setEditingEvent(null)}
                  className="px-4 py-2 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    updateEvent(editingEvent.id, editingEvent);
                    setEditingEvent(null);
                    triggerSaveNotification('Event details updated');
                  }}
                  className="px-6 py-2.5 rounded-full btn-primary text-white font-extrabold shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
