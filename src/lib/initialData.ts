import {
  ActivityEvent,
  Announcement,
  CommitteeMember,
  Collaboration,
  GalleryItem,
  SiteContent,
  ContactSubmission,
  CollegePartner,
  InnovateSubmission,
  CollaborateSubmission
} from '@/types';

export const INITIAL_SITE_CONTENT: SiteContent = {
  hero: {
    title: 'Pioneering Quantum & AI Innovation Led By Women',
    subtitle: 'WOMEN LED INNOVATION — DREAM. BUILD. INNOVATE.',
    description: 'Empowering female researchers, student innovators, and industry leaders to reshape quantum technology, deep-tech engineering, and intelligent computing across our four-college consortium.',
    primaryCtaText: 'Explore Flagship Events',
    primaryCtaLink: '/events',
    studentPortalText: 'Student Portal',
    partnerPortalText: 'Partner Portal',
    stats: [
      { label: 'Innovators & Scholars', value: '1,250+' },
      { label: 'Keynotes & Workshops', value: '48+' },
      { label: 'Collaborating Colleges', value: '4' },
      { label: 'Research Grants & Awards', value: '$450K+' }
    ]
  },
  sectionHeaders: {
    announcements: {
      badge: 'Official Bulletins',
      title: 'Announcements & Notices',
      subtitle: 'Stay informed on research fellowship deadlines, compute credits, and four-college consortium notices.'
    },
    colleges: {
      badge: 'Institutional Alliance',
      title: 'Four-College Collaboration',
      subtitle: 'WINQubit is a joint multi-campus alliance uniting four premier academic institutions to drive research, student innovation, and deep-tech excellence.'
    },
    about: {
      badge: 'About WINQubit',
      title: 'Empowering Visionary Women in Deep-Tech & Quantum',
      subtitle: 'Building an internationally recognized, inclusive ecosystem where women lead breakthrough innovations in Quantum Computing & Artificial Intelligence.'
    },
    innovateCollaborate: {
      badge: 'Dual Portal Access',
      title: 'Innovate & Collaborate',
      subtitle: 'Whether you are a student ready to pitch groundbreaking ideas or an organization seeking institutional partnership, choose your path below.'
    },
    events: {
      badge: 'Consortium Gatherings',
      title: 'Flagship Events & Masterclasses',
      subtitle: 'Explore upcoming workshops with open student seat reservation, or view photos and recap summaries from completed events.'
    },
    committee: {
      badge: 'Leadership & Council',
      title: 'Committee & Mentorship',
      subtitle: 'Pioneering researchers and academic faculty steering WINQubit innovation initiatives across consortium campuses.'
    }
  },
  innovateCard: {
    badge: 'For Students & Scholars',
    title: 'Innovate',
    description: 'Submit research ideas, apply for quantum fellowship grants, join inter-campus hackathons, or propose hardware prototypes across our four partner colleges.',
    bullets: [
      'Student Research Fellowship Applications',
      'Inter-College Hackathons & Competitions',
      'Lab Simulator Access & Mentorship'
    ],
    ctaText: 'Open Student Innovate Application'
  },
  collaborateCard: {
    badge: 'For Organizations & Partners',
    title: 'Collaborate',
    description: 'Partner with the WINQubit Four-College Consortium. We welcome universities, quantum labs, corporate sponsors, and guest experts to co-fund research and host joint programs.',
    bullets: [
      'Co-funded Research & Lab Collaborations',
      'Corporate Hackathon & Event Sponsorships',
      'Faculty Exchanges & Expert Keynotes'
    ],
    ctaText: 'Submit Partner Collaboration Request'
  },
  about: {
    badge: 'About WINQubit',
    title: 'Empowering Visionary Women in Deep-Tech & Quantum',
    vision: 'To build an internationally recognized, inclusive ecosystem where women lead breakthrough innovations in Quantum Computing, Artificial Intelligence, and Frontier Technologies across institutional alliances.',
    mission: 'To bridge gender gaps in high-tech research, cultivate student talent through mentorship and hands-on hackathons, foster strategic global collaborations, and commercialize women-led intellectual properties.',
    objectives: [
      'Cultivate high-impact research initiatives in Quantum Algorithms, Superconducting Circuits, and Applied AI.',
      'Deliver world-class technical workshops, developer bootcamps, and leadership masterclasses.',
      'Establish global university and corporate partnerships for co-funded innovation programs.',
      'Provide seed incubation, IP guidance, and venture acceleration for women-founded deep-tech startups.'
    ],
    journey: [
      {
        id: 'j-1',
        year: '2022',
        title: 'Founding WINQubit Initiative',
        description: 'Established WINQubit as a pioneering Women-Led Innovation council uniting visionary researchers across four partner colleges.'
      },
      {
        id: 'j-2',
        year: '2023',
        title: 'First Four-College Consortium Summit',
        description: 'Hosted over 500 delegates from partner campuses, releasing collaborative research whitepapers on quantum security.'
      },
      {
        id: 'j-3',
        year: '2024',
        title: 'Global Industry Consortium',
        description: 'Formed strategic alliances with leading quantum computing laboratories, tech giants, and venture incubators.'
      },
      {
        id: 'j-4',
        year: '2025',
        title: 'Incubation & Research Lab Expansion',
        description: 'Launched the WINQubit Quantum Simulator Lab, incubating student-led hardware and software research projects.'
      },
      {
        id: 'j-5',
        year: '2026',
        title: 'Next-Gen Global Horizon',
        description: 'Expanding footprint across institutions with fellowship grants, real-time quantum cloud testbeds, and annual student awards.'
      }
    ]
  },
  contactCta: {
    badge: 'Four-College Innovation Hub',
    title: 'Ready to Innovate & Collaborate?',
    description: 'Join the WINQubit community today to participate in quantum hackathons, apply for fellowship grants, and connect with global female researchers.',
    button1Text: 'Student Innovate Portal',
    button2Text: 'Partner Collaborate Portal'
  },
  contactInfo: {
    email: 'contact@winqubit.org',
    phone: '+1 (800) 946-7824',
    address: 'WINQubit Four-College Consortium Hub, 450 Quantum Parkway, Innovation Campus',
    officeHours: 'Monday – Friday: 09:00 AM – 06:00 PM',
    mapEmbedUrl: 'https://maps.google.com/maps?q=37.3860517,-122.0838511&z=14&output=embed'
  }
};

export const INITIAL_COLLEGES: CollegePartner[] = [
  {
    id: 'col-iqet',
    name: 'Institute of Quantum & Engineering Tech',
    code: 'IQET',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=80',
    location: 'Main Engineering Campus',
    website: 'https://iqet.edu',
    description: 'Founding partner institution leading quantum hardware research, cleanroom fabrication, and nanotech labs.',
    isFoundingPartner: true
  },
  {
    id: 'col-ncas',
    name: 'National College of Applied Sciences & AI',
    code: 'NCAS',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80',
    location: 'North Technology Quad',
    website: 'https://ncas.edu',
    description: 'Pioneering institution specializing in machine learning, post-quantum cryptography, and intelligent algorithms.',
    isFoundingPartner: true
  },
  {
    id: 'col-aiar',
    name: 'Apex Institute of Advanced Research',
    code: 'AIAR',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80',
    location: 'Central Science Park',
    website: 'https://aiar.edu',
    description: 'Center of excellence for interdisciplinary research, student incubation, and IP commercialization.',
    isFoundingPartner: true
  },
  {
    id: 'col-muti',
    name: 'Metropolitan University of Tech & Innovation',
    code: 'MUTI',
    logo: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=400&q=80',
    location: 'Metropolitan Innovation Hub',
    website: 'https://muti.edu',
    description: 'Lead campus driving industry collaborations, hackathons, and female leadership mentorship programs.',
    isFoundingPartner: true
  }
];

export const INITIAL_EVENTS: ActivityEvent[] = [
  {
    id: 'evt-ipr-masterclass',
    title: 'IPR & Patent Filing Masterclass for Scholars',
    description: 'Step-by-step guidance on drafting patent specifications, prior art search techniques, international PCT applications, and filing women-led IP commercialization.',
    fullContent: 'An intensive masterclass designed for researchers, scholars, and deep-tech innovators across our four partner colleges. You will learn fundamental patent drafting methodologies, claims formatting, freedom-to-operate searches, and how to protect novel quantum algorithms and AI architectures. The session covers practical case studies from patent grant approvals and commercial licensing frameworks.',
    category: 'WORKSHOP',
    date: 'September 04, 2026',
    time: '10:00 AM – 01:30 PM PST',
    venue: 'Virtual Conference Hall & IQET Campus Auditorium',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    registrationUrl: '/events/evt-ipr-masterclass/register',
    status: 'Upcoming',
    featured: true,
    speaker: 'Adv. Ananya Mukherjee',
    speakerRole: 'Senior Patent Attorney & Tech IP Strategist',
    prerequisites: [
      'Basic understanding of research methodology or technical project documentation',
      'Working draft of an innovation concept or research topic (optional for live review)'
    ],
    agenda: [
      { time: '10:00 AM', topic: 'Welcome & Introduction to High-Tech Intellectual Property' },
      { time: '10:30 AM', topic: 'Prior Art Searching & Patentability Assessment' },
      { time: '11:30 AM', topic: 'Drafting Patent Claims & Specifications (Live Demo)' },
      { time: '12:30 PM', topic: 'PCT Filing & Global Commercialization Roadmap' },
      { time: '01:00 PM', topic: 'Open Q&A and Direct Legal Clinic' }
    ]
  },
  {
    id: 'evt-quantum-hackathon',
    title: 'WINQubit Four-College Inter-Campus Hackathon 2026',
    description: 'A 48-hour hackathon focusing on Qiskit algorithms, post-quantum cryptography, and fault-tolerant quantum error correction for student coders.',
    fullContent: 'Join over 800 coders, mathematicians, and engineers across all four partner colleges. Participants will work on real IBM Quantum & Qiskit simulators, solving high-impact problems in drug discovery, financial modeling, and cryptographic resilience. Mentors from all 4 college faculties will be available 24/7.',
    category: 'HACKATHON',
    date: 'October 12, 2026',
    time: '09:00 AM PST (48 Hours)',
    venue: 'MUTI Innovation Center & Hybrid Virtual Cloud',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    registrationUrl: '/events/evt-quantum-hackathon/register',
    status: 'Upcoming',
    featured: true,
    speaker: 'Dr. Elena Rostova & Prof. Sarah Lin',
    speakerRole: 'Principal Quantum Scientists, WINQubit Council',
    prerequisites: [
      'Python programming familiarity',
      'Basic linear algebra and quantum logic gates knowledge'
    ],
    agenda: [
      { time: 'Day 1 - 09:00 AM', topic: 'Keynote & Problem Statements Unveiling' },
      { time: 'Day 1 - 02:00 PM', topic: 'Mentor Office Hours & Simulator Access Setup' },
      { time: 'Day 2 - 08:00 PM', topic: 'Project Submissions & Code Freeze' },
      { time: 'Day 3 - 11:00 AM', topic: 'Live Pitching & Grand Prize Ceremony' }
    ]
  },
  {
    id: 'evt-leadership-summit',
    title: 'Women in AI & Quantum Leadership Summit',
    description: 'Executive summit featuring keynote presentations from female leaders in deep technology, quantum hardware, and AI ethics across partner campuses.',
    fullContent: 'An exclusive assembly of CTOs, principal scientists, and venture directors discussing the roadmap of quantum commercialization, career trajectories for female innovators, and funding frameworks for academic spin-offs.',
    category: 'SUMMIT',
    date: 'August 28, 2026',
    time: '10:00 AM – 05:00 PM PST',
    venue: 'NCAS Auditorium & Global Live Stream',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
    ],
    registrationUrl: '/events/evt-leadership-summit/register',
    status: 'Ongoing',
    featured: true,
    speaker: 'Dr. Aris Thorne & Maria Gonzalez',
    speakerRole: 'Executive Directors, WINQubit Consortium'
  },
  {
    id: 'evt-pqc-masterclass',
    title: 'Post-Quantum Cryptography Technical Workshop',
    description: 'Hands-on technical workshop on NIST lattice-based standards, Kyber algorithms, and enterprise security implementation.',
    fullContent: 'Detailed exploration of lattice-based cryptography standards held at the AIAR campus. Attendees learned practical implementation tactics for securing legacy systems against future quantum threats using open-source PQC libraries. Includes successful student projects and benchmark demos.',
    category: 'MASTERCLASS',
    date: 'May 12, 2026',
    time: '02:00 PM – 06:00 PM PST',
    venue: 'AIAR Interactive Research Lab',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
    ],
    registrationUrl: '',
    status: 'Completed',
    featured: false,
    speaker: 'Dr. Sophia Vance',
    speakerRole: 'Lead Cybersecurity & PQC Chair',
    outcomes: [
      'Trained 140+ student participants across the four partner colleges in Kyber and Dilithium algorithms.',
      'Published 3 student research posters on quantum-safe network protocols.',
      'Established open open-source PQC code repository accessible to all consortium scholars.'
    ]
  },
  {
    id: 'evt-quantum-cleanroom-bootcamp',
    title: 'Superconducting Qubit Cleanroom Fabrication Bootcamp',
    description: 'Specialized 3-day practical bootcamp on micro-fabrication, electron-beam lithography, and cryostat microwave testing for superconducting circuits.',
    fullContent: 'An intensive hands-on lab experience conducted in the IQET Nanofabrication Facility. 45 female scholars built and characterized aluminum-junction superconducting resonators, operating dilute refrigeration equipment at 15 mK.',
    category: 'BOOTCAMP',
    date: 'March 18, 2026',
    time: 'Full Day (3 Days)',
    venue: 'IQET Cleanroom & Cryogenics Complex',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
    ],
    registrationUrl: '',
    status: 'Completed',
    featured: false,
    speaker: 'Prof. Amara Patel',
    speakerRole: 'Head of Quantum Hardware & Research',
    outcomes: [
      'Fabricated 12 test chip wafers with microwave resonators achieving Q-factors over 100,000.',
      'Awarded cleanroom access fellowships to 8 top-performing student teams.'
    ]
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'WINQubit $100K Research Grant Fellowship Open for Four-College Students',
    content: 'We are thrilled to announce our 2026 Research Fellowship Grant! Female PhD candidates and undergraduate student innovators from our four partner colleges are invited to submit project proposals.',
    priority: 'Urgent',
    pinned: true,
    attachments: [
      { name: 'Fellowship_Guidelines_2026.pdf', url: '#', size: '2.4 MB' },
      { name: 'Application_Template.docx', url: '#', size: '450 KB' }
    ],
    expiryDate: '2026-10-01',
    date: '2026-08-10'
  },
  {
    id: 'ann-2',
    title: 'Strategic Partnership with Global Quantum Cloud Network',
    content: 'WINQubit has partnered with leading cloud quantum providers to deliver 500 hours of free QPU access for our student researchers and active hackathon participants.',
    priority: 'Opportunity',
    pinned: true,
    attachments: [
      { name: 'Cloud_Access_Portal_Guide.pdf', url: '#', size: '1.1 MB' }
    ],
    date: '2026-08-05'
  },
  {
    id: 'ann-3',
    title: 'Call for Speakers: WINQubit Four-College Annual Science Symposium',
    content: 'Submissions are open for keynotes, lightning talks, and student poster sessions for the upcoming Q4 conference across consortium campuses.',
    priority: 'Notice',
    pinned: false,
    attachments: [],
    expiryDate: '2026-09-01',
    date: '2026-07-28'
  },
  {
    id: 'ann-4',
    title: 'WINQubit Monthly Newsletter & Student Research Digest Released',
    content: 'Read the latest issue covering breakthrough papers in neutral atom quantum computing, interviews with female student founders, and college spotlights.',
    priority: 'Update',
    pinned: false,
    attachments: [
      { name: 'Digest_Issue_42.pdf', url: '#', size: '3.8 MB' }
    ],
    date: '2026-07-15'
  }
];

export const INITIAL_COMMITTEE: CommitteeMember[] = [
  {
    id: 'mem-1',
    name: 'Dr. Evelyn Carter',
    position: 'Founder & President',
    bio: 'Pioneer in Quantum Information Processing with over 15 years leading research labs. Professor of Physics at IQET Campus.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    order: 1,
    category: 'Leadership',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'evelyn.carter@winqubit.org',
      github: 'https://github.com'
    }
  },
  {
    id: 'mem-2',
    name: 'Prof. Amara Patel',
    position: 'Head of Quantum Hardware & Research',
    bio: 'Professor at NCAS specializing in superconducting qubits and microwave resonator architectures. Author of 40+ peer-reviewed papers.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    order: 2,
    category: 'Leadership',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'amara.patel@winqubit.org'
    }
  },
  {
    id: 'mem-3',
    name: 'Dr. Sophia Vance',
    position: 'Lead Cybersecurity & PQC Chair',
    bio: 'Specialist in post-quantum cryptography standards and lattice mathematics at AIAR campus.',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    order: 3,
    category: 'Executive',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'mem-4',
    name: 'Maria Gonzalez',
    position: 'Director of Global Partnerships & Growth',
    bio: 'Venture strategist connecting MUTI academic research with enterprise capital and corporate accelerators.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    order: 4,
    category: 'Executive',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'maria.g@winqubit.org'
    }
  },
  {
    id: 'mem-5',
    name: 'Dr. Chloe Zhang',
    position: 'AI & Neural Quantum Systems Specialist',
    bio: 'Research scientist focusing on machine-learning-assisted quantum state tomography and variational quantum eigensolvers (VQE).',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    order: 5,
    category: 'Advisory',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 'mem-6',
    name: 'Aaliyah Sharma',
    position: 'Student Chapter & Consortium Lead',
    bio: 'Quantum Computing graduate lead orchestrating student bootcamps, campus ambassador networks across all 4 colleges, and open-source drives.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    order: 6,
    category: 'Student Chapter',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const INITIAL_COLLABORATIONS: Collaboration[] = [
  {
    id: 'col-1',
    partnerName: 'IBM Quantum Network',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
    website: 'https://ibm.com/quantum',
    description: 'Providing hardware access, quantum cloud compute credits, and joint developer certification programs for WINQubit researchers across all four colleges.',
    category: 'Industry',
    collaborationScope: 'QPU Access & Certification'
  },
  {
    id: 'col-2',
    partnerName: 'MIT Quantum Science Institute',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80',
    website: 'https://mit.edu',
    description: 'Joint research exchange program for female postdoctorates working on topological insulators and superconducting circuits.',
    category: 'Academic',
    collaborationScope: 'Academic Exchange & Postdoc Grants'
  },
  {
    id: 'col-3',
    partnerName: 'DeepMind AI Research Initiative',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300&q=80',
    website: 'https://deepmind.google',
    description: 'Co-developing AI models for quantum pulse control and automated error mitigation algorithms.',
    category: 'Research',
    collaborationScope: 'AI-Quantum Hybrid Models'
  },
  {
    id: 'col-4',
    partnerName: 'European Quantum Flagship',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&q=80',
    website: 'https://qt.eu',
    description: 'International consortium alliance advocating diversity policy, joint symposia, and global student exchange.',
    category: 'Global Partner',
    collaborationScope: 'Global Policy & Symposia'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [];

export const INITIAL_INNOVATE_SUBMISSIONS: InnovateSubmission[] = [
  {
    id: 'inn-101',
    studentName: 'Riya Deshmukh',
    email: 'riya.d@ncas.edu',
    phone: '+1 (555) 382-9102',
    college: 'National College of Applied Sciences & AI (NCAS)',
    projectTitle: 'Quantum Approximate Optimization Algorithm for Power Grid Efficiency',
    category: 'Quantum Software',
    description: 'A student project developing a 12-qubit QAOA simulation aimed at minimizing distribution loss in microgrids.',
    submissionDate: '2026-08-14',
    status: 'Shortlisted'
  },
  {
    id: 'inn-102',
    studentName: 'Meera Sen',
    email: 'meera.sen@iqet.edu',
    phone: '+1 (555) 901-2384',
    college: 'Institute of Quantum & Engineering Tech (IQET)',
    projectTitle: 'Cryogenic Low-Noise Amplifier for Superconducting Qubit Readout',
    category: 'Hardware',
    description: 'Design and simulation of a CMOS cryogenic LNA operating at 4 Kelvin with sub-1dB noise figure.',
    submissionDate: '2026-08-13',
    status: 'Under Review'
  }
];

export const INITIAL_COLLABORATE_SUBMISSIONS: CollaborateSubmission[] = [
  {
    id: 'col-201',
    contactName: 'Dr. Robert Vance',
    email: 'r.vance@quantumlabs.org',
    phone: '+1 (555) 782-[#1E1632]',
    organizationName: 'Quantum Labs Inc.',
    organizationType: 'Industry',
    proposalType: 'Research Collaboration',
    message: 'We wish to establish a co-funded research program with WINQubit four partner colleges to benchmark quantum error mitigation algorithms.',
    submissionDate: '2026-08-12',
    status: 'In Discussion'
  },
  {
    id: 'col-202',
    contactName: 'Prof. David K. Miller',
    email: 'miller@techuniv.edu',
    phone: '+1 (555) 441-0092',
    organizationName: 'State Tech University',
    organizationType: 'University',
    proposalType: 'Guest Lecture / Mentorship',
    message: 'Interested in joint faculty exchanges and participating in the annual four-college inter-campus symposium.',
    submissionDate: '2026-08-11',
    status: 'New'
  }
];

export const INITIAL_CONTACT_SUBMISSIONS: ContactSubmission[] = [
  {
    id: 'cs-1',
    name: 'Dr. Mark Henderson',
    email: 'm.henderson@research-inst.org',
    subject: 'Proposed Joint Research Project on Qubit Fidelity',
    category: 'Research Collaboration',
    message: 'We are submitting a proposal to collaborate with WINQubit on characterization of superconducting qubit coherence times. Please let us know who to contact on the executive committee.',
    date: '2026-08-12',
    status: 'New'
  },
  {
    id: 'cs-2',
    name: 'Sarah Jenkins',
    email: 'sarah.j@techventure.com',
    subject: 'Sponsorship Query for Upcoming Hackathon',
    category: 'Partnership & Sponsorship',
    message: 'Our firm would love to sponsor prize funds and provide cloud credits for the WINQubit Quantum Hackathon 2026. Looking forward to discussing details.',
    date: '2026-08-11',
    status: 'Replied'
  }
];
