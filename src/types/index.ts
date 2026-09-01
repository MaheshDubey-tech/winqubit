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
  image?: string;
  gallery?: string[];
  registrationUrl?: string;
  status: EventStatus;
  featured?: boolean;
  speaker?: string;
  speakerRole?: string;
  prerequisites?: string[];
  agenda?: Array<{ time: string; topic: string }>;
  outcomes?: string[];
  tags?: string[];
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

export interface GoverningCouncilMember {
  id: string;
  name: string;
  designation: string;
  organization: string;
  photoUrl: string;
  bio: string;
  expertise: string[];
}

export interface StrategicMandate {
  title: string;
  description: string;
}

export interface CampusFaculty {
  role: string;
  name: string;
  title: string;
  email: string;
}

export interface CampusLead {
  name: string;
  role: string;
  year: string;
  department: string;
}

export interface CampusInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badgeColor?: string;
  accentColor?: string;
  description: string;
  keyLabs: string[];
  leadership: {
    principal: string;
    facultyCoordinators: CampusFaculty[];
    studentLeads: CampusLead[];
  };
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

export interface StudentLifecycleStep {
  step: string;
  name: string;
  action: string;
  tagline: string;
  desc: string;
  icon: string;
  deliverables: string[];
  supportOffered: string;
  timeline: string;
}

export interface CoreProgram {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  intake: string;
  eligibility: string;
  grantAmount?: string;
  benefits: string[];
  icon: string;
  activeStatus: string;
}

export interface InnovationCluster {
  id: string;
  title: string;
  iconName: string;
  color?: string;
  subfields: string[];
  openProblems: string[];
  sampleProject: string;
  alignedCampuses: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'all' | 'students' | 'documents' | 'institutional' | 'reports';
  fileType: string;
  fileSize: string;
  description: string;
  tag: string;
  downloadCount: string;
  downloadUrl?: string;
}

export interface StatItem {
  label: string;
  value: string;
  sub: string;
  color?: string;
}

export interface InnovateSubmission {
  id: string;
  fullName?: string;
  studentName?: string;
  email: string;
  phone: string;
  institution?: string;
  college?: string;
  rollNo?: string;
  branch?: string;
  year?: string;
  domain?: string;
  category?: string;
  ideaTitle?: string;
  projectTitle?: string;
  problemStatement?: string;
  proposedSolution?: string;
  description?: string;
  currentStage?: string;
  supportNeeded?: string[];
  teamSize?: string;
  submissionDate: string;
  status: 'New' | 'Under Review' | 'Shortlisted' | 'Accepted';
}

export interface JoinSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  rollNo?: string;
  branch?: string;
  year?: string;
  interestAreas: string[];
  hasIdea: 'yes' | 'no';
  ideaSnippet?: string;
  passId: string;
  submissionDate: string;
  status: 'Active';
}

export interface CollaborateSubmission {
  id: string;
  category?: string;
  orgName?: string;
  organizationName?: string;
  contactPerson?: string;
  contactName?: string;
  designation?: string;
  organizationType?: string;
  proposalType?: string;
  email: string;
  phone: string;
  city?: string;
  collaborationGoals?: string[];
  notes?: string;
  message?: string;
  submissionDate: string;
  status: 'New' | 'In Discussion' | 'Partnered' | 'Archived';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  campus?: string;
  department?: string;
  category?: string;
  message: string;
  date: string;
  status: 'New' | 'Replied' | 'Archived';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'Urgent' | 'Notice' | 'Update' | 'Opportunity';
  pinned: boolean;
  attachments?: Array<{ name: string; url: string; size?: string }>;
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
  social?: {
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

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SiteContent {
  hero: {
    badge: string;
    title?: string;
    titleLine1: string;
    titleGradient: string;
    subtitle: string;
    description?: string;
    primaryCtaText?: string;
    studentPortalText?: string;
    partnerPortalText?: string;
    stats: Array<{ label: string; value: string; sub?: string }>;
  };
  sectionHeaders: Record<string, { badge: string; title: string; subtitle: string }>;
  innovateCard: {
    badge: string;
    title: string;
    description: string;
    benefits: string[];
    bullets: string[];
    ctaText?: string;
  };
  collaborateCard: {
    badge: string;
    title: string;
    description: string;
    benefits: string[];
    bullets: string[];
    ctaText?: string;
  };
  about: {
    mission: string;
    vision: string;
    philosophy: string;
    objectives: string[];
  };
  contactCta: {
    badge: string;
    title: string;
    subtitle: string;
    description?: string;
    email: string;
    phone: string;
    address: string;
    button1Text?: string;
    button2Text?: string;
  };
  contactInfo: {
    address: string;
    email: string;
    phone: string;
    hours: string;
    locationMapUrl: string;
  };
}
