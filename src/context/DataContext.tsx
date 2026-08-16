'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ActivityEvent,
  Announcement,
  CommitteeMember,
  Collaboration,
  GalleryItem,
  SiteContent,
  ContactSubmission,
  EventRegistration,
  CollegePartner,
  InnovateSubmission,
  CollaborateSubmission
} from '@/types';
import {
  INITIAL_SITE_CONTENT,
  INITIAL_COLLEGES,
  INITIAL_EVENTS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_COMMITTEE,
  INITIAL_COLLABORATIONS,
  INITIAL_CONTACT_SUBMISSIONS,
  INITIAL_INNOVATE_SUBMISSIONS,
  INITIAL_COLLABORATE_SUBMISSIONS
} from '@/lib/initialData';

interface DataContextType {
  // Data State
  siteContent: SiteContent;
  colleges: CollegePartner[];
  events: ActivityEvent[];
  announcements: Announcement[];
  committee: CommitteeMember[];
  collaborations: Collaboration[];
  contactSubmissions: ContactSubmission[];
  eventRegistrations: EventRegistration[];
  innovateSubmissions: InnovateSubmission[];
  collaborateSubmissions: CollaborateSubmission[];

  // Admin Auth State
  isAdmin: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Site Content Actions
  updateSiteContent: (newContent: SiteContent) => void;

  // College Partners CRUD
  addCollegePartner: (col: Omit<CollegePartner, 'id'>) => void;
  updateCollegePartner: (id: string, col: Partial<CollegePartner>) => void;
  deleteCollegePartner: (id: string) => void;

  // Events CRUD
  addEvent: (evt: Omit<ActivityEvent, 'id'>) => void;
  updateEvent: (id: string, evt: Partial<ActivityEvent>) => void;
  deleteEvent: (id: string) => void;

  // Event Registration Action
  registerForEvent: (reg: Omit<EventRegistration, 'id' | 'registrationDate'>) => { success: boolean; id: string };
  deleteEventRegistration: (id: string) => void;

  // Innovate Submissions (Student Portal)
  submitInnovateForm: (sub: Omit<InnovateSubmission, 'id' | 'submissionDate' | 'status'>) => { success: boolean; id: string };
  updateInnovateStatus: (id: string, status: InnovateSubmission['status']) => void;
  deleteInnovateSubmission: (id: string) => void;

  // Collaborate Submissions (Organization/Individual Portal)
  submitCollaborateForm: (sub: Omit<CollaborateSubmission, 'id' | 'submissionDate' | 'status'>) => { success: boolean; id: string };
  updateCollaborateStatus: (id: string, status: CollaborateSubmission['status']) => void;
  deleteCollaborateSubmission: (id: string) => void;

  // Announcements CRUD
  addAnnouncement: (ann: Omit<Announcement, 'id'>) => void;
  updateAnnouncement: (id: string, ann: Partial<Announcement>) => void;
  deleteAnnouncement: (id: string) => void;

  // Committee CRUD
  addCommitteeMember: (mem: Omit<CommitteeMember, 'id'>) => void;
  updateCommitteeMember: (id: string, mem: Partial<CommitteeMember>) => void;
  deleteCommitteeMember: (id: string) => void;

  // Collaborations CRUD
  addCollaboration: (col: Omit<Collaboration, 'id'>) => void;
  updateCollaboration: (id: string, col: Partial<Collaboration>) => void;
  deleteCollaboration: (id: string) => void;

  // Contact Form Actions
  submitContactForm: (submission: Omit<ContactSubmission, 'id' | 'date' | 'status'>) => void;
  updateContactStatus: (id: string, status: 'New' | 'Replied' | 'Archived') => void;
  deleteContactSubmission: (id: string) => void;

  // Reset to default seed
  resetDataToDefault: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SITE_CONTENT: 'winqubit_site_content_v4',
  COLLEGES: 'winqubit_colleges_v4',
  EVENTS: 'winqubit_events_v4',
  ANNOUNCEMENTS: 'winqubit_announcements_v4',
  COMMITTEE: 'winqubit_committee_v4',
  COLLABORATIONS: 'winqubit_collaborations_v4',
  CONTACT: 'winqubit_contact_v4',
  REGISTRATIONS: 'winqubit_registrations_v4',
  INNOVATE: 'winqubit_innovate_v4',
  COLLABORATE: 'winqubit_collaborate_v4',
  AUTH: 'winqubit_admin_auth_v4'
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [siteContent, setSiteContent] = useState<SiteContent>(INITIAL_SITE_CONTENT);
  const [colleges, setColleges] = useState<CollegePartner[]>(INITIAL_COLLEGES);
  const [events, setEvents] = useState<ActivityEvent[]>(INITIAL_EVENTS);
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [committee, setCommittee] = useState<CommitteeMember[]>(INITIAL_COMMITTEE);
  const [collaborations, setCollaborations] = useState<Collaboration[]>(INITIAL_COLLABORATIONS);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>(INITIAL_CONTACT_SUBMISSIONS);
  const [innovateSubmissions, setInnovateSubmissions] = useState<InnovateSubmission[]>(INITIAL_INNOVATE_SUBMISSIONS);
  const [collaborateSubmissions, setCollaborateSubmissions] = useState<CollaborateSubmission[]>(INITIAL_COLLABORATE_SUBMISSIONS);

  const [eventRegistrations, setEventRegistrations] = useState<EventRegistration[]>([
    {
      id: 'REG-8921-A',
      eventId: 'evt-ipr-masterclass',
      eventTitle: 'IPR & Patent Filing Masterclass for Scholars',
      name: 'Dr. Ananya Mukherjee',
      email: 'ananya.m@mit.edu',
      phone: '+1 (555) 234-5678',
      organization: 'IQET Campus',
      role: 'Postdoctoral Fellow',
      interests: 'Patent claims drafting for quantum algorithms',
      registrationDate: '2026-08-12'
    },
    {
      id: 'REG-7721-C',
      eventId: 'evt-quantum-hackathon',
      eventTitle: 'WINQubit Four-College Inter-Campus Hackathon 2026',
      name: 'Elena Vance',
      email: 'elena.vance@ncas.edu',
      phone: '+1 (555) 987-6543',
      organization: 'NCAS AI Initiative',
      role: 'Graduate Researcher',
      interests: 'Qiskit optimization track',
      registrationDate: '2026-08-13'
    }
  ]);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem(STORAGE_KEYS.AUTH);
      if (savedAuth === 'true') setIsAdmin(true);

      const savedContent = localStorage.getItem(STORAGE_KEYS.SITE_CONTENT);
      if (savedContent) {
        const parsed = JSON.parse(savedContent);
        setSiteContent({
          ...INITIAL_SITE_CONTENT,
          ...parsed,
          hero: { ...INITIAL_SITE_CONTENT.hero, ...(parsed.hero || {}) },
          sectionHeaders: { ...INITIAL_SITE_CONTENT.sectionHeaders, ...(parsed.sectionHeaders || {}) },
          innovateCard: { ...INITIAL_SITE_CONTENT.innovateCard, ...(parsed.innovateCard || {}) },
          collaborateCard: { ...INITIAL_SITE_CONTENT.collaborateCard, ...(parsed.collaborateCard || {}) },
          about: { ...INITIAL_SITE_CONTENT.about, ...(parsed.about || {}) },
          contactCta: { ...INITIAL_SITE_CONTENT.contactCta, ...(parsed.contactCta || {}) },
          contactInfo: { ...INITIAL_SITE_CONTENT.contactInfo, ...(parsed.contactInfo || {}) },
        });
      }

      const savedColleges = localStorage.getItem(STORAGE_KEYS.COLLEGES);
      if (savedColleges) setColleges(JSON.parse(savedColleges));

      const savedEvents = localStorage.getItem(STORAGE_KEYS.EVENTS);
      if (savedEvents) setEvents(JSON.parse(savedEvents));

      const savedAnnouncements = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
      if (savedAnnouncements) setAnnouncements(JSON.parse(savedAnnouncements));

      const savedCommittee = localStorage.getItem(STORAGE_KEYS.COMMITTEE);
      if (savedCommittee) setCommittee(JSON.parse(savedCommittee));

      const savedCollabs = localStorage.getItem(STORAGE_KEYS.COLLABORATIONS);
      if (savedCollabs) setCollaborations(JSON.parse(savedCollabs));

      const savedContact = localStorage.getItem(STORAGE_KEYS.CONTACT);
      if (savedContact) setContactSubmissions(JSON.parse(savedContact));

      const savedRegs = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      if (savedRegs) setEventRegistrations(JSON.parse(savedRegs));

      const savedInnovate = localStorage.getItem(STORAGE_KEYS.INNOVATE);
      if (savedInnovate) setInnovateSubmissions(JSON.parse(savedInnovate));

      const savedCollaborate = localStorage.getItem(STORAGE_KEYS.COLLABORATE);
      if (savedCollaborate) setCollaborateSubmissions(JSON.parse(savedCollaborate));
    } catch (e) {
      console.error('Failed to parse localStorage data:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync state changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEYS.SITE_CONTENT, JSON.stringify(siteContent));
      localStorage.setItem(STORAGE_KEYS.COLLEGES, JSON.stringify(colleges));
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
      localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
      localStorage.setItem(STORAGE_KEYS.COMMITTEE, JSON.stringify(committee));
      localStorage.setItem(STORAGE_KEYS.COLLABORATIONS, JSON.stringify(collaborations));
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(contactSubmissions));
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(eventRegistrations));
      localStorage.setItem(STORAGE_KEYS.INNOVATE, JSON.stringify(innovateSubmissions));
      localStorage.setItem(STORAGE_KEYS.COLLABORATE, JSON.stringify(collaborateSubmissions));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [siteContent, colleges, events, announcements, committee, collaborations, contactSubmissions, eventRegistrations, innovateSubmissions, collaborateSubmissions, isLoaded]);

  // Auth Functions
  const loginAdmin = (user: string, pass: string): boolean => {
    if (user === 'admin' && pass === 'admin') {
      setIsAdmin(true);
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  };

  // Site Content Action
  const updateSiteContent = (newContent: SiteContent) => {
    setSiteContent(newContent);
  };

  // College Partners CRUD
  const addCollegePartner = (col: Omit<CollegePartner, 'id'>) => {
    const newCol: CollegePartner = {
      ...col,
      id: `col-${Date.now()}`
    };
    setColleges(prev => [...prev, newCol]);
  };

  const updateCollegePartner = (id: string, updated: Partial<CollegePartner>) => {
    setColleges(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteCollegePartner = (id: string) => {
    setColleges(prev => prev.filter(item => item.id !== id));
  };

  // Events CRUD
  const addEvent = (evt: Omit<ActivityEvent, 'id'>) => {
    const newEvt: ActivityEvent = {
      ...evt,
      id: `evt-${Date.now()}`
    };
    setEvents(prev => [newEvt, ...prev]);
  };

  const updateEvent = (id: string, updated: Partial<ActivityEvent>) => {
    setEvents(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(item => item.id !== id));
  };

  // Register for Event
  const registerForEvent = (reg: Omit<EventRegistration, 'id' | 'registrationDate'>) => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newId = `REG-${randomCode}-${Date.now().toString().slice(-3)}`;
    const newReg: EventRegistration = {
      ...reg,
      id: newId,
      registrationDate: new Date().toISOString().split('T')[0]
    };
    setEventRegistrations(prev => [newReg, ...prev]);
    return { success: true, id: newId };
  };

  const deleteEventRegistration = (id: string) => {
    setEventRegistrations(prev => prev.filter(item => item.id !== id));
  };

  // Innovate Submissions Actions
  const submitInnovateForm = (sub: Omit<InnovateSubmission, 'id' | 'submissionDate' | 'status'>) => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newId = `INN-${randomCode}-${Date.now().toString().slice(-3)}`;
    const newSub: InnovateSubmission = {
      ...sub,
      id: newId,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setInnovateSubmissions(prev => [newSub, ...prev]);
    return { success: true, id: newId };
  };

  const updateInnovateStatus = (id: string, status: InnovateSubmission['status']) => {
    setInnovateSubmissions(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  const deleteInnovateSubmission = (id: string) => {
    setInnovateSubmissions(prev => prev.filter(item => item.id !== id));
  };

  // Collaborate Submissions Actions
  const submitCollaborateForm = (sub: Omit<CollaborateSubmission, 'id' | 'submissionDate' | 'status'>) => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newId = `COL-${randomCode}-${Date.now().toString().slice(-3)}`;
    const newSub: CollaborateSubmission = {
      ...sub,
      id: newId,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setCollaborateSubmissions(prev => [newSub, ...prev]);
    return { success: true, id: newId };
  };

  const updateCollaborateStatus = (id: string, status: CollaborateSubmission['status']) => {
    setCollaborateSubmissions(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  const deleteCollaborateSubmission = (id: string) => {
    setCollaborateSubmissions(prev => prev.filter(item => item.id !== id));
  };

  // Announcements CRUD
  const addAnnouncement = (ann: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = {
      ...ann,
      id: `ann-${Date.now()}`
    };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  const updateAnnouncement = (id: string, updated: Partial<Announcement>) => {
    setAnnouncements(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(item => item.id !== id));
  };

  // Committee CRUD
  const addCommitteeMember = (mem: Omit<CommitteeMember, 'id'>) => {
    const newMem: CommitteeMember = {
      ...mem,
      id: `mem-${Date.now()}`
    };
    setCommittee(prev => [...prev, newMem]);
  };

  const updateCommitteeMember = (id: string, updated: Partial<CommitteeMember>) => {
    setCommittee(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteCommitteeMember = (id: string) => {
    setCommittee(prev => prev.filter(item => item.id !== id));
  };

  // Collaborations CRUD
  const addCollaboration = (col: Omit<Collaboration, 'id'>) => {
    const newCol: Collaboration = {
      ...col,
      id: `col-${Date.now()}`
    };
    setCollaborations(prev => [newCol, ...prev]);
  };

  const updateCollaboration = (id: string, updated: Partial<Collaboration>) => {
    setCollaborations(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteCollaboration = (id: string) => {
    setCollaborations(prev => prev.filter(item => item.id !== id));
  };

  // Contact Form Actions
  const submitContactForm = (submission: Omit<ContactSubmission, 'id' | 'date' | 'status'>) => {
    const newSub: ContactSubmission = {
      ...submission,
      id: `cs-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setContactSubmissions(prev => [newSub, ...prev]);
  };

  const updateContactStatus = (id: string, status: 'New' | 'Replied' | 'Archived') => {
    setContactSubmissions(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  const deleteContactSubmission = (id: string) => {
    setContactSubmissions(prev => prev.filter(item => item.id !== id));
  };

  // Reset function
  const resetDataToDefault = () => {
    setSiteContent(INITIAL_SITE_CONTENT);
    setColleges(INITIAL_COLLEGES);
    setEvents(INITIAL_EVENTS);
    setAnnouncements(INITIAL_ANNOUNCEMENTS);
    setCommittee(INITIAL_COMMITTEE);
    setCollaborations(INITIAL_COLLABORATIONS);
    setContactSubmissions(INITIAL_CONTACT_SUBMISSIONS);
    setInnovateSubmissions(INITIAL_INNOVATE_SUBMISSIONS);
    setCollaborateSubmissions(INITIAL_COLLABORATE_SUBMISSIONS);
    setEventRegistrations([]);
    localStorage.clear();
  };

  return (
    <DataContext.Provider
      value={{
        siteContent,
        colleges,
        events,
        announcements,
        committee,
        collaborations,
        contactSubmissions,
        eventRegistrations,
        innovateSubmissions,
        collaborateSubmissions,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        updateSiteContent,
        addCollegePartner,
        updateCollegePartner,
        deleteCollegePartner,
        addEvent,
        updateEvent,
        deleteEvent,
        registerForEvent,
        deleteEventRegistration,
        submitInnovateForm,
        updateInnovateStatus,
        deleteInnovateSubmission,
        submitCollaborateForm,
        updateCollaborateStatus,
        deleteCollaborateSubmission,
        addAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
        addCommitteeMember,
        updateCommitteeMember,
        deleteCommitteeMember,
        addCollaboration,
        updateCollaboration,
        deleteCollaboration,
        submitContactForm,
        updateContactStatus,
        deleteContactSubmission,
        resetDataToDefault
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
