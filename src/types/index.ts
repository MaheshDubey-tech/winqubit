export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Past';

export interface ActivityEvent {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  gallery: string[];
  registrationUrl: string;
  status: EventStatus;
  featured: boolean;
  speaker?: string;
  speakerRole?: string;
  prerequisites?: string[];
  agenda?: Array<{ time: string; topic: string }>;
  outcomes?: string[];
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  interests?: string;
  registrationDate: string;
}

export interface CollegePartner {
  id: string;
  name: string;
  code: string;
  logo: string;
  location: string;
  website: string;
  description: string;
  isFoundingPartner: boolean;
}

export interface InnovateSubmission {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  college: string;
  projectTitle: string;
  category: string;
  description: string;
  submissionDate: string;
  status: 'New' | 'Under Review' | 'Shortlisted' | 'Accepted';
}

export interface CollaborateSubmission {
  id: string;
  contactName: string;
  email: string;
  phone: string;
  organizationName: string;
  organizationType: 'University' | 'Industry' | 'Research Institute' | 'Government / NGO' | 'Individual';
  proposalType: 'Research Collaboration' | 'Event Sponsorship' | 'Guest Lecture / Mentorship' | 'Student Internship' | 'Other';
  message: string;
  submissionDate: string;
  status: 'New' | 'In Discussion' | 'Partnered' | 'Archived';
}

export type AnnouncementPriority = 'Urgent' | 'Notice' | 'Update' | 'Opportunity';

export interface Attachment {
  name: string;
  url: string;
  size?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: AnnouncementPriority;
  pinned: boolean;
  attachments: Attachment[];
  expiryDate?: string;
  date: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo: string;
  order: number;
  category: 'Leadership' | 'Advisory' | 'Executive' | 'Student Chapter';
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    github?: string;
  };
}

export interface Collaboration {
  id: string;
  partnerName: string;
  logo: string;
  website: string;
  description: string;
  category: 'Academic' | 'Industry' | 'Research' | 'Global Partner';
  collaborationScope: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  eventRef?: string;
  tags: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  date: string;
  status: 'New' | 'Replied' | 'Archived';
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SectionHeaderContent {
  badge: string;
  title: string;
  subtitle: string;
}

export interface InnovateCollaborateCard {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
}

export interface ContactCtaContent {
  badge: string;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
}

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    studentPortalText: string;
    partnerPortalText: string;
    stats: Array<{ label: string; value: string }>;
  };
  sectionHeaders: {
    announcements: SectionHeaderContent;
    colleges: SectionHeaderContent;
    about: SectionHeaderContent;
    innovateCollaborate: SectionHeaderContent;
    events: SectionHeaderContent;
    committee: SectionHeaderContent;
  };
  innovateCard: InnovateCollaborateCard;
  collaborateCard: InnovateCollaborateCard;
  about: {
    badge: string;
    title: string;
    vision: string;
    mission: string;
    objectives: string[];
    journey: JourneyMilestone[];
  };
  contactCta: ContactCtaContent;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
    officeHours: string;
    mapEmbedUrl: string;
  };
}

