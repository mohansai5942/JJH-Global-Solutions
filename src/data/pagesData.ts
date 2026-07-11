export interface PageSection {
  title: string;
  content: string;
  items?: string[];
}

export interface CustomPage {
  id: string;
  title: string;
  category: string;
  parentMenu?: string;
  tagline: string;
  heroDescription: string;
  themeColor: 'indigo' | 'emerald' | 'sky' | 'amber' | 'rose' | 'violet' | 'blue';
  iconName: string;
  imageUrl?: string;
  additionalImages?: string[];
  faqs?: { q: string, a: string }[];
  // Dynamic section naming for custom compliance
  section1: PageSection; // Software: Overview, HR: Overview, TP: Introduction, Edu: Eligibility
  section2: PageSection; // Software: Services Offered, HR: Process, TP: Programs Offered, Edu: Process
  section3: PageSection; // Software: Benefits, HR: Why Choose Us, TP: Outcomes, Edu: Benefits
}

export const customPages: CustomPage[] = [
  // ==================== HR SOLUTIONS ====================
  {
    id: 'hr-recruitment',
    title: 'Recruitment Services',
    category: 'HR Solutions',
    tagline: 'Precision Executive Search & Recruitment Systems',
    heroDescription: 'Sourcing and vetting premier industry talent to build robust leadership pipelines and skilled workforces for elite enterprises globally.',
    themeColor: 'indigo',
    iconName: 'UserCheck',
    section1: {
      title: 'Overview',
      content: 'Our Recruitment Services focus on understanding corporate cultures, technical specifications, and role parameters to identify and acquire high-performance candidates. We operate a multi-tier vetting system that filters candidates based on skill proficiency, behavioral alignment, and industrial certifications, ensuring a seamless recruitment lifecycle for your business.'
    },
    section2: {
      title: 'Process',
      content: 'We utilize a systematic 5-step search and deployment mechanism to ensure maximum efficiency and minimized time-to-hire metrics.',
      items: [
        'Requirement Mapping & Job Role Profiling',
        'Multi-channel Sourcing (Database, Headhunting, Networks)',
        'Pre-screening & Multi-level Technical/Behavioral Auditing',
        'Client Interview Coordination & Feedback Loop',
        'Onboarding Support, Reference Vetting & Transition Guidance'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'JJH Global offers unmatched executive search capabilities and candidate conversion rates.',
      items: [
        'Access to a vetted database of 150,000+ top-tier professional profiles',
        'Average industry-best turn-around-time (TAT) of only 9 business days',
        '90-day free candidate replacement clause integrated into standard SLAs',
        'Specialized headhunting teams for niche technologies and executive C-suite positions'
      ]
    }
  },
  {
    id: 'hr-consulting',
    title: 'HR Consulting',
    category: 'HR Solutions',
    tagline: 'Empowering Corporate Culture & Regulatory Governance',
    heroDescription: 'Bespoke corporate policy formulation, organizational design, and labor compliance auditing to elevate operational efficiency.',
    themeColor: 'indigo',
    iconName: 'Users',
    section1: {
      title: 'Overview',
      content: 'Our HR Consulting division partners with growing startups and enterprise groups to align their talent management structures with global best practices. We audit workspace protocols, draft operational guidelines, and execute performance management architectures that drive workplace productivity and compliance with local labor legislation.'
    },
    section2: {
      title: 'Process',
      content: 'Our consultants work closely with executive leadership to audit, design, and implement high-efficiency workflows.',
      items: [
        'Organizational Health Checkup & Gap Analysis',
        'Corporate Policy & Employee Handbook Formulation',
        'Performance Appraisal Framework Design',
        'Compliance & Labor Law Registry Setup',
        'Post-Implementation Audit & Continuous Tuning'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'With seasoned consultants and exhaustive regulatory knowledge, we mitigate HR risk metrics completely.',
      items: [
        'Comprehensive knowledge of statutory labor regulations and union compliance',
        'Tailor-made performance management structures that reduce employee turnover by 15%',
        'Transparent audits highlighting clear legal vulnerabilities and efficiency blocks',
        'Decades of collective experience counseling multinational enterprises and public institutions'
      ]
    }
  },
  {
    id: 'hr-performance',
    title: 'Performance Management',
    category: 'HR Solutions',
    tagline: 'Driving Accountability & High-Performance Standards',
    heroDescription: 'Designing objective appraisal systems, incentive plans, and continuous feedback mechanisms to foster high-performance teams.',
    themeColor: 'indigo',
    iconName: 'TrendingUp',
    section1: {
      title: 'Overview',
      content: 'Our Performance Management suite transforms subjective feedback into objective, quantifiable progress metrics. We design and integrate custom KPIs, KRAs, and balanced scorecards aligned with corporate objectives, allowing organization leaders to track talent contributions transparently and reward high performers efficiently.'
    },
    section2: {
      title: 'Process',
      content: 'We integrate modern performance tracking methodologies through structured corporate engagement.',
      items: [
        'Mapping of Strategic Corporate Objectives to Team Goals',
        'Defining Key Result Areas (KRAs) and Key Performance Indicators (KPIs)',
        'Appraisal Cycle Formulation (Continuous vs. Annual)',
        '360-Degree Feedback & Leadership Assessment Audits',
        'Feedback Documentation & Career Development Roadmapping'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'We construct performance models that bridge operational targets with workforce motivation.',
      items: [
        'Objective metrics that eliminate appraisal bias completely',
        'Integrated wellness and motivation plans that boost staff morale',
        'Customized software dashboards to track employee performance milestones',
        'Proven to increase overall business department output by up to 24% over 12 months'
      ]
    }
  },
  {
    id: 'hr-staffing-permanent',
    title: 'Permanent Staffing',
    category: 'HR Solutions',
    parentMenu: 'Staffing & Manpower Solutions',
    tagline: 'Securing Long-Term Core Talent',
    heroDescription: 'End-to-end recruitment pipelines to acquire full-time employees who align with your organizational goals and culture.',
    themeColor: 'emerald',
    iconName: 'Briefcase',
    section1: {
      title: 'Overview',
      content: 'Permanent Staffing is the foundation of any resilient business. We focus on matching long-term business objectives with candidates who demonstrate not only advanced technical and professional capabilities but also the cultural and behavioral compatibility required to thrive and grow within your core organizational framework.'
    },
    section2: {
      title: 'Process',
      content: 'Our comprehensive process filters long-term hires through extensive verification cycles.',
      items: [
        'Exhaustive JD (Job Description) Vetting and Role Profiling',
        'Programmatic and Network Sourcing across Target Industries',
        'In-depth Behavioral, Cultural, and Skill Pre-screening',
        'Strict Verification of Prior Academic and Career References',
        'Offer Negotiation, Onboarding Assistance, and Probation Monitoring'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'We secure high-retention talent with unmatched placement speed and safety clauses.',
      items: [
        '94.5% candidate retention rate across the first 12 months of employment',
        'Comprehensive 90-day replacement warranty for all full-time hires',
        'Rigorous verification practices that eliminate CV exaggeration completely',
        'Direct connection to elite executive circles for high-level management recruitment'
      ]
    }
  },
  {
    id: 'hr-staffing-temporary',
    title: 'Temporary Staffing',
    category: 'HR Solutions',
    parentMenu: 'Staffing & Manpower Solutions',
    tagline: 'Agile Scale-On-Demand Talent Deployment',
    heroDescription: 'Flexible project-based staffing solutions to manage seasonal workloads and critical project peaks without overhead.',
    themeColor: 'emerald',
    iconName: 'Clock',
    section1: {
      title: 'Overview',
      content: 'Modern market dynamics require fast scaling. Our Temporary Staffing solutions allow businesses to quickly add skilled contract workers, specialists, and operatives to handle project spikes, maternity leaves, seasonal demands, or sudden business growth without incurring permanent payroll costs and statutory administrative liabilities.'
    },
    section2: {
      title: 'Process',
      content: 'We coordinate rapid placement and immediate onboarding for on-demand workforce needs.',
      items: [
        'Immediate Talent Shortage Identification and Skill Specifying',
        'Fast-track Candidate Matching from our Active Ready-to-Deploy Pool',
        'JJH Pre-employment Briefing & Skill Alignment Vetting',
        'Instant Deployment with Complete Payroll Handled under JJH Co-Employer Model',
        'Flexible Project Exit Management upon Mission Accomplishment'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'Scale instantly with our pre-screened temp-workforce and robust payroll administration.',
      items: [
        'Ability to deploy skilled temp resources within 48 to 72 hours of request',
        'JJH handles all payroll, insurance, benefits, and statutory compliance obligations',
        'Seamless conversion opportunities from temporary roles to permanent slots',
        'Perfect for e-commerce spikes, audit cycles, and short-term tech rollouts'
      ]
    }
  },
  {
    id: 'hr-staffing-contract',
    title: 'Contract Staffing',
    category: 'HR Solutions',
    parentMenu: 'Staffing & Manpower Solutions',
    tagline: 'Expert Specialized Project Consultants',
    heroDescription: 'Bespoke contract developer, architect, and designer deployment for fixed-term milestones.',
    themeColor: 'emerald',
    iconName: 'FileText',
    section1: {
      title: 'Overview',
      content: 'Contract Staffing provides businesses with access to highly specialized, senior industry professionals for specific project lifecycles. Whether you need a veteran Cloud Architect, an iOS developer for a 6-month build, or a clinical compliance consultant, we deploy expert talent with clear, time-bound objectives.'
    },
    section2: {
      title: 'Process',
      content: 'Our niche recruitment desks specialize in mapping unique tech and business skills.',
      items: [
        'Niche Skill Definition & Scope of Work (SOW) Mapping',
        'Targeted Outbound Sourcing of Independent Contractors & Consultants',
        'Strict Technical & Portfolio Evaluation by Internal Subject Matter Experts',
        'Contract Formulation detailing Intellectual Property and NDA Compliance',
        'Seamless Onboarding & Immediate Alignment with client scrum sprints'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'Acquire elite, hard-to-find domain experts without long-term commitment issues.',
      items: [
        'Deep networks in high-demand domains like AI/ML, Cloud Security, and Big Data',
        'Full compliance with global independent contractor regulations (W-2, 1099, C2C)',
        'Zero onboarding friction; contractors arrive prepared for immediate task delivery',
        'Clear billing and hours tracking reporting mechanisms for full transparency'
      ]
    }
  },
  {
    id: 'hr-staffing-workforce',
    title: 'Workforce Management',
    category: 'HR Solutions',
    parentMenu: 'Staffing & Manpower Solutions',
    tagline: 'Optimizing Labor Productivity & Shifts',
    heroDescription: 'End-to-end scheduling, shift planning, attendance tracking, and labor cost optimization workflows.',
    themeColor: 'emerald',
    iconName: 'Layers',
    section1: {
      title: 'Overview',
      content: 'Workforce Management is essential for multi-shift operations, retail networks, and manufacturing facilities. We design automated scheduling systems, track real-time attendance, monitor workplace fatigue parameters, and optimize overall labor distribution to maximize productivity and lower operational cost metrics.'
    },
    section2: {
      title: 'Process',
      content: 'Our specialists integrate software and shift patterns to design efficient staffing systems.',
      items: [
        'Historical Labor Demand & Shift Pattern Analysis',
        'Integration of Modern Time & Attendance Auditing systems',
        'Automated Roster Design aligning with Labor Law limits',
        'Real-time Absenteeism Management and Standby-pool triggering',
        'Analytical Reporting on overall Labor Cost and Output Metrics'
      ]
    },
    section3: {
      title: 'Why Choose Us',
      content: 'Sustain maximum shift productivity while ensuring complete employee safety compliance.',
      items: [
        'Up to 18% reduction in unauthorized corporate overtime costs',
        'Improved roster compliance with labor regulatory maximum-hours guidelines',
        'User-friendly clocking integrations supporting biometric and mobile geofencing',
        'Proven history managing shift systems for factories, call centers, and delivery hubs'
      ]
    }
  },

  // ==================== TRAINING & PLACEMENT ====================
  {
    id: 'tp-training-dev',
    title: 'Training & Development',
    category: 'Training & Placement',
    tagline: 'Empowering Technical & Professional Excellence',
    heroDescription: 'Bespoke corporate upskilling programs, leadership training, and technical engineering bootcamps designed to keep teams at the cutting edge.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    section1: {
      title: 'Introduction',
      content: 'Continuous learning is the cornerstone of sustainable growth. Our Training & Development division customizes high-fidelity skill-building paths for corporate workforces and educational cohorts alike. Guided by veteran industry professionals, our training sessions focus on both next-generation technologies and critical soft skills required to drive team synergy and peak operational performance.'
    },
    section2: {
      title: 'Programs Offered',
      content: 'We provide structured corporate modules and collegiate programs focusing on highly sought-after industry skills.',
      items: [
        'Advanced Technical Bootcamps (Full-Stack Web, AI/ML, Cloud Architecture)',
        'Corporate Leadership & Executive Management Coaching',
        'Soft Skills, Corporate Communication & Cross-Cultural Training',
        'Aptitude, Logical Reasoning & Quantitative Prep (for Collegiate Batches)',
        'Agile, Scrum Product Management, and Devops Certification Tracks'
      ]
    },
    section3: {
      title: 'Outcomes',
      content: 'We measure our training efficacy by actual capability boosts and team certification metrics.',
      items: [
        'Over 25,000+ candidates trained with industry-standard certification success',
        'Proven 35% improvement in development team output metrics post-technical training',
        'Highly interactive, case-study-driven pedagogy that ensures maximum knowledge retention',
        'Customized post-training evaluation reports mapping candidate progression indexes'
      ]
    }
  },
  {
    id: 'tp-internships',
    title: 'Internships',
    category: 'Training & Placement',
    tagline: 'Bridging Classroom Learning with Industry Practice',
    heroDescription: 'Fully managed industrial internship programs providing students with hands-on corporate project experience and mentor guidance.',
    themeColor: 'sky',
    iconName: 'Laptop',
    section1: {
      title: 'Introduction',
      content: 'Traditional education teaches theories, but our Internship programs build practical expertise. We bridge collegiate study paths with real-world corporate demands. By participating in actual production lifecycles, working with real codebases, and resolving real business hurdles, our interns graduate into the job market with robust professional capabilities.'
    },
    section2: {
      title: 'Programs Offered',
      content: 'Our internships cover multiple sectors, matching diverse academic and professional career paths.',
      items: [
        'Software Engineering Internships (React, Node, Android Native, SwiftUI)',
        'Digital Marketing & Programmatic Ad Campaigns Internships',
        'Human Resource Administration & Client Acquisition Internships',
        'Financial Analytics & Corporate Modeling Internships',
        'Turnkey Interior Space Planning & 3D Rendering Internships'
      ]
    },
    section3: {
      title: 'Outcomes',
      content: 'Our internship program provides a launchpad for long-term career advancement and direct placement opportunities.',
      items: [
        'Direct project mentoring by veteran senior developers and business leaders',
        'UGC and University-accredited Internship Completion Certificates provided',
        'Over 42% of JJH interns receive Pre-Placement Offers (PPOs) from parent companies',
        'Builds a robust, real-world work portfolio to highlight during employment interviews'
      ]
    }
  },
  {
    id: 'tp-job-updates',
    title: 'Job Updates',
    category: 'Training & Placement',
    parentMenu: 'Placements',
    tagline: 'Real-Time Career Portal & Vacancy Tracking',
    heroDescription: 'Continuous curation of open corporate positions, entry-level careers, and lateral corporate openings across global sectors.',
    themeColor: 'rose',
    iconName: 'Bell',
    section1: {
      title: 'Introduction',
      content: 'Finding the right career path is a matter of timing and intelligence. Our dedicated Placement Desk operates a continuous Job Updates initiative. We track, vet, and publish verified employment opportunities from our extensive network of 45+ corporate partners, ensuring our candidates never miss an active hiring cycle.'
    },
    section2: {
      title: 'Programs Offered',
      content: 'We curate and broadcast career opportunities across multiple professional disciplines and hierarchies.',
      items: [
        'Daily updates of verified B.Tech/MCA/MBA entry-level bulk hire roles',
        'Lateral corporate vacancies for experienced software and finance professionals',
        'Weekly curated remote and hybrid positions from global technology startups',
        'Direct-apply referral links to skip general applicant tracking software (ATS) systems',
        'SMS & email alerts tailored to candidate qualification profiles'
      ]
    },
    section3: {
      title: 'Outcomes',
      content: 'We connect candidates with corporate opportunities, reducing search times and accelerating placements.',
      items: [
        'Saves up to 80% on candidate search and job application research timelines',
        'Guaranteed direct-to-recruiter application routes that ensure profile reviews',
        'Provides instant visibility of sudden bulk hiring and walk-in placement dates',
        'Helps fresh graduates secure interview schedules within 15 days of program registry'
      ]
    }
  },
  {
    id: 'tp-campus-placement',
    title: 'Campus Placement Drives',
    category: 'Training & Placement',
    parentMenu: 'Placements',
    tagline: 'High-Volume Institutional Recruitment Desks',
    heroDescription: 'Collaborating directly with colleges to host centralized and pooled campus placement drives with top multinational corporations.',
    themeColor: 'rose',
    iconName: 'Zap',
    section1: {
      title: 'Introduction',
      content: 'We bridge academic talent pools with corporate hiring requirements. Our Campus Placement Drives bring premium recruiters directly to institutional campuses. By managing the logistics, student screening, slotting, and evaluation stages, we provide colleges with record placement percentages and MNCs with high-volume, pre-screened fresh talent.'
    },
    section2: {
      title: 'Programs Offered',
      content: 'We configure and conduct diverse campus recruitment frameworks customized for partner institutes.',
      items: [
        'Centralized Exclusive Campus Hiring Drives for Tier-1/2 Partner Colleges',
        'Pooled Campus Drives bringing multiple regional colleges to a single hiring hub',
        'Direct Placement Drives with MNC consulting giants and IT services firms',
        'Virtual High-Volume Campus Screening & Selection Drives',
        'On-the-Spot Offer Letter Drives with instant recruiter evaluations'
      ]
    },
    section3: {
      title: 'Outcomes',
      content: 'Our drives scale institutional reputation metrics and secure life-changing placements.',
      items: [
        'Placing over 8,500+ collegiate candidates yearly in MNCs and bulk hiring hubs',
        'Accelerates overall college placement statistics, boosting academic enrollment rates',
        'Significantly reduces recruiter travel overhead through structured remote pooled desks',
        'Provides candidate counseling to ensure high joining-ratio compliance'
      ]
    }
  },

  // ==================== EDUCATION ====================
  {
    id: 'edu-overseas',
    title: 'Overseas Education',
    category: 'Education',
    tagline: 'Global Pathways to World-Class Campuses',
    heroDescription: 'End-to-end guidance for international studies, from university selection and scholarship mapping to student visa procurement.',
    themeColor: 'sky',
    iconName: 'Globe',
    section1: {
      title: 'Eligibility',
      content: 'Our overseas educational services are open to students pursuing Undergraduate, Postgraduate, or Research pathways. Recommended academic metrics include a minimum 55% score in prior secondary or graduation boards. Successful IELTS, TOEFL, GRE, or GMAT certifications are highly encouraged, although select universities offer alternative english pathways.'
    },
    section2: {
      title: 'Process',
      content: 'We manage your international education journey through a clear, stress-free 6-stage roadmap.',
      items: [
        'Profile Analysis, Country Mapping, and Career Pathway Counseling',
        'Targeted University Shortlisting & Scholarship Feasibility Assessment',
        'Exhaustive SOP Drafting, Letter of Recommendation Vetting & Application Filing',
        'Managing University Offer Letters and I-20/CAS Documents',
        'Compiling Secure Visa Dossiers, Financial Vetting & Mock Consular Interviews',
        'Pre-Departure Orientation, Student Housing Guidance & Flight Routing support'
      ]
    },
    section3: {
      title: 'Benefits',
      content: 'Secure admission to top global universities with India\'s premier overseas advisory team.',
      items: [
        'Direct institutional ties with 500+ top universities in US, UK, Canada, and Europe',
        'Industry-leading student visa success rate of 98.7% across major countries',
        'Dedicated guidance to access and win merit-based institutional scholarships',
        'Comprehensive post-landing support to assist in foreign city acclimation'
      ]
    }
  },
  {
    id: 'edu-open-10th',
    title: 'Open 10th',
    category: 'Education',
    parentMenu: 'Distance Education',
    tagline: 'NIOS & State Board Flexible Schooling',
    heroDescription: 'Ministry of Education recognized alternative secondary certification for private, distance, and resuming learners.',
    themeColor: 'emerald',
    iconName: 'BookOpen',
    section1: {
      title: 'Eligibility',
      content: 'Candidates must be at least 14 years of age on the date of application. There is no upper age limit. This open schooling framework is specifically designed for students who want to resume disrupted education, private candidates, sports professionals, or alternative learners looking for flexible pacing.'
    },
    section2: {
      title: 'Process',
      content: 'We streamline your NIOS or State Board Open School registry and certification cycle.',
      items: [
        'Comprehensive Profile Evaluation & Subject Selection Consulting',
        'Official Registry and Form Filing via Secured Board Portals',
        'Distribution of Approved Study Books, Syllabuses, and Notes',
        'Conducting Weekend Doubt-Clearing Workshops & Simulated Mock Exams',
        'Practical File Submissions, Exam Center Assignment & Final Results Collection'
      ]
    },
    section3: {
      title: 'Benefits',
      content: 'Gain a fully recognized secondary qualification with study flexibility.',
      items: [
        '100% equivalent to standard board qualifications for government job applications',
        'Recognized by all major Indian universities, CBSE, ICSE, and global boards',
        'Flexible examination slots (on-demand exams) that suit candidate timelines',
        'Selection of subjects that match individual interests, removing academic stress'
      ]
    }
  },
  {
    id: 'edu-open-inter',
    title: 'Open Inter',
    category: 'Education',
    parentMenu: 'Distance Education',
    tagline: 'NIOS & State Board Open Higher Secondary Schooling',
    heroDescription: 'UGC & Ministry of Education recognized 11th and 12th certification for flexible distance learning.',
    themeColor: 'emerald',
    iconName: 'Award',
    section1: {
      title: 'Eligibility',
      content: 'Candidates must have successfully completed their 10th standard or equivalent secondary schooling from a recognized board. Minimum entry age is 15. The program is ideal for candidates looking to clear their higher secondary education while managing employment, vocational training, or entrance exam prep.'
    },
    section2: {
      title: 'Process',
      content: 'We facilitate registration, subject selection, and examination preparation seamlessly.',
      items: [
        'Vetting of 10th Standard Academic Credentials for board eligibility',
        'Registration in Arts, Commerce, or Science streams with optional subjects',
        'Provision of curated study material and previous years\' solved papers',
        'Facilitation of Personal Contact Programs (PCP) and continuous internal assignments',
        'Final Examination guidance and provisional/original certification issuance'
      ]
    },
    section3: {
      title: 'Benefits',
      content: 'Complete your pre-university schooling without regular classroom constraints.',
      items: [
        'Fully valid for competitive entrance exams like JEE, NEET, and CLAT',
        'UGC, AIU, and Ministry of Education approved and recognized nationwide',
        'Enables flexible science, commerce, and humanities stream options',
        'Allows candidates to work full-time or prepare for specialized competitive exams'
      ]
    }
  },
  {
    id: 'edu-online-degree',
    title: 'Online Degree',
    category: 'Education',
    parentMenu: 'Distance Education',
    tagline: 'Accredited UGC-DEB Approved Degree Programs',
    heroDescription: 'UGC-DEB approved 100% online BCA, MCA, BBA, and MBA streams from highly ranked universities.',
    themeColor: 'emerald',
    iconName: 'Laptop',
    section1: {
      title: 'Eligibility',
      content: 'For Online Bachelor Degrees (BCA, BBA): Candidates must have passed 10+2 higher secondary from a recognized board. For Online Master Degrees (MCA, MBA): Candidates must hold a graduation degree with a minimum 50% score. Working executives with prior field experience are highly welcomed.'
    },
    section2: {
      title: 'Process',
      content: 'We handle your university registry and support you during your digital learning journey.',
      items: [
        'Career Counselling to select the appropriate degree and university partner',
        'Document Vetting, Admission Form Filing, and Fee Instalment Setup',
        'Onboarding to the University Digital LMS (Learning Management System)',
        'Support in participating in Live Webinars, Discussions, and Term Assignments',
        'AI-Proctored Secured Semester Examinations leading to Accredited Degree awards'
      ]
    },
    section3: {
      title: 'Benefits',
      content: 'Earn prestigious, fully-accredited university degrees from the comfort of your home.',
      items: [
        'UGC-DEB approved degrees carrying equal academic weight to offline regular degrees',
        '100% remote examinations and online digital classes designed for working executives',
        'Access to extensive online digital libraries, mentor sessions, and alumni portals',
        'Average career salary raise of 35% post-completion of remote professional degrees'
      ]
    }
  },
  // Educational Admissions Offered
  ...['B.Tech', 'MBA', 'M.Tech', 'MBBS', 'B.Com', 'B.Sc', 'B.Sc (Nursing)', 'BA', 'BBA', 'BCA'].map(course => {
    // Standardize IDs
    const courseId = `edu-${course.toLowerCase().replace(' (', '-').replace(')', '').replace('.', '')}`;
    return {
      id: courseId,
      title: `${course} Admissions`,
      category: 'Education',
      parentMenu: 'Admissions Offered',
      tagline: `Counseling & Seat Securing for ${course} Streams`,
      heroDescription: `Strategic, hassle-free admission counseling and seat reservation in top autonomous and private Indian institutes for ${course} streams.`,
      themeColor: 'rose' as const,
      iconName: 'Compass',
      section1: {
        title: 'Eligibility',
        content: `Standard eligibility for ${course} admissions requires compliance with central or state board criteria. Bachelor programs generally require 10+2 higher secondary clearance (with matching subject combinations like PCM for B.Tech, PCB for MBBS, or general streams for BBA/BCA). Postgraduate streams like MBA or M.Tech require minimum 50% marks in matching graduation degrees.`
      },
      section2: {
        title: 'Process',
        content: `We coordinate counseling rounds and strategic direct admissions under authorized university guidelines.`,
        items: [
          'Academic Profile Analysis & Rank Mapping (JEE, NEET, CAT, state exams)',
          'Detailed Institutional Comparisons matching Student Budget & Location priorities',
          'Counseling Round Mock Filings, Document Vetting & Timelines Tracking',
          'Securing Merit-Seat, Direct Management, or NRI Quota Allocations',
          'Final Seat Allocation Letters, Fee Payments & College Joining Formalities'
        ]
      },
      section3: {
        title: 'Benefits',
        content: `Navigate complex collegiate admission processes with our elite expert advisory desk.`,
        items: [
          `Affiliations with 240+ prestigious private and autonomous colleges across India`,
          'Transparent counseling processes with zero hidden fees or misleading claims',
          'Guarantees locating the absolute best-fit college matching your competitive rank',
          'Complete document vetting to prevent accidental administrative disqualifications'
        ]
      }
    };
  }),

  // ==================== SOFTWARE SERVICES ====================
  {
    id: 'soft-mobile',
    title: 'Mobile App Development',
    category: 'Software Services',
    tagline: 'Elite iOS & Android Native Solutions for Global Enterprises',
    heroDescription: 'Engineering performance-critical, highly-scalable mobile applications powered by Kotlin, SwiftUI, and React Native. We deliver military-grade security, seamless hardware integration, and ultra-fluid user experiences for market leaders.',
    themeColor: 'emerald',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Which framework is recommended for high-performance enterprise apps?",
        a: "For maximum performance and deep OS integration, we recommend Native Kotlin (Android) and Swift (iOS). For rapid scaling and cost-efficiency, React Native or Flutter provides near-native 60FPS fluid UI speeds."
      },
      {
        q: "How do you handle offline data synchronization?",
        a: "We implement local-first architectures using Room or CoreData. Our synchronization engines reconcile changes incrementally with central Cloud APIs once connectivity is restored, ensuring zero data loss."
      },
      {
        q: "Do you provide end-to-end store deployment services?",
        a: "Yes, we manage the entire lifecycle including store account setup, metadata optimization, promotional asset creation, and guiding the application through strict Apple/Google review guidelines."
      }
    ],
    section1: {
      title: 'Strategic Mobile Product Engineering',
      content: 'Our Mobile App Development division is dedicated to engineering ultra-premium, high-performance applications that drive sustainable business growth. We craft responsive, secure, and user-centric digital products conforming strictly to iOS Human Interface Guidelines and Android Material Design standards. Every architecture we build prioritizes long-term scalability, military-grade data encryption, and seamless hardware sensor integration, ensuring your product dominates the competitive app store landscape with superior technical stability.'
    },
    section2: {
      title: 'Full-Spectrum Mobile Solutions',
      content: 'We offer a comprehensive suite of mobile engineering services designed to take your visionary ideas from concept to global deployment. Our multidisciplinary team manages everything from initial UI/UX audit sessions to automated CI/CD pipeline setup for rapid, secure releases.',
      items: [
        'Native Android Development (Kotlin, Jetpack Compose, Advanced Room DB Caching)',
        'Native iOS Development (Swift, SwiftUI, Combine Framework, High-Security Keychain)',
        'Cross-Platform Hybrid Solutions (React Native, Flutter, Expo EAS integration)',
        'Strategic MVP Mobile Builds (Validated layouts, rapid iteration, investor-ready)',
        'Lifecycle Store Management (ASO optimization, Play Store deployment, 24/7 SLA)'
      ]
    },
    section3: {
      title: 'Lifecycle Excellence & Client ROI',
      content: 'Choosing our mobile engineering team means securing a partner committed to your product success. We follow a strict Agile-Scrum methodology, providing bi-weekly builds and transparent progress tracking via executive dashboards. By utilizing high-fidelity interactive mockups, we eliminate technical debt and ensure a reduced time-to-market.',
      items: [
        'Unified clean architectures ensuring easy, long-term codebase maintainability',
        'Optimized background processes and strict caching ensuring maximum battery efficiency',
        'Direct integration with secure hardware encryption keys and biometric auth (FaceID/TouchID)',
        'Senior product management consulting with decades of collective App Store success'
      ]
    }
  },
  {
    id: 'soft-web',
    title: 'Web Development',
    category: 'Software Services',
    tagline: 'High-Scale Responsive Enterprise Architectures',
    heroDescription: 'Architecting fast, highly-secure, and cloud-native web systems. We deliver custom enterprise SaaS portals and robust digital ecosystems powered by React, Next.js, and Node.js for global business scale.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What modern frontend technologies do you specialize in?",
        a: "We specialize in React, Next.js, and TypeScript, styled with Tailwind CSS. This stack guarantees modular component-based layouts, robust SSR/ISR for SEO, and complete type safety."
      },
      {
        q: "How do you guarantee enterprise-grade web security?",
        a: "Our platforms feature end-to-end TLS encryption, secure session handling via HTTP-only cookies, protection against CSRF/XSS, and strict database query parameterization to block SQL Injection."
      },
      {
        q: "Do you integrate with third-party ERP/CRM solutions?",
        a: "Yes. We build custom API bridges to connect web dashboards with major corporate suites including Salesforce, HubSpot, SAP, and QuickBooks, automating lead and billing synchronization."
      }
    ],
    section1: {
      title: 'High-Performance Web Ecosystems',
      content: 'Web development is the cornerstone of modern corporate expansion. Our Web engineering group implements resilient, search-optimized, and accessible solutions that drive real-world business outcomes. We specialize in React frontends paired with optimized Go or Node.js services, establishing high-performance, responsive systems that deliver 99.9% uptime. By utilizing modern architectures like JAMstack and Micro-frontends, we ensure your platform remains agile, secure, and ready to serve millions of concurrent requests.'
    },
    section2: {
      title: 'Enterprise Web Engineering Solutions',
      content: 'We engineer customized web systems tailored specifically to complex business workflows and high-traffic demands. Our team handles everything from custom SaaS architecture to high-speed e-commerce platforms.',
      items: [
        'Custom Enterprise SaaS Portals & Dashboards (React, Tailwind, Node.js)',
        'E-Commerce Marketplaces with high-speed search and secure payment gateways',
        'Progressive Web Applications (PWAs) with rich offline-capabilities and push alerts',
        'Custom CRM, ERP, and Supply-Chain portals aligning with staff operations',
        'Cloud-native Migration (AWS, GCP) and continuous DevOps CI/CD automation'
      ]
    },
    section3: {
      title: 'Technical Superiority & Business Impact',
      content: 'Secure a high-performance web platform built to handle enterprise-level loads with confidence. We prioritize Lighthouse performance scores, ensuring your site is lightning-fast and highly ranked by search algorithms.',
      items: [
        'SEO-optimized, lightweight static site rendering for immediate organic rankings',
        'Robust data isolation and end-to-end TLS encryption complying with GDPR/SOC2',
        'Responsive layouts that adapt flawlessly to mobile, tablet, and widescreen desktop',
        'Complete Post-Launch maintenance packages and proactive cybersecurity patching'
      ]
    }
  },
  {
    id: 'soft-game',
    title: 'Game Development',
    category: 'Software Services',
    tagline: 'Immersive Real-Time Multiplayer Gaming Ecosystems',
    heroDescription: 'Engineering high-performance 2D and 3D gaming experiences powered by Unity and Unreal Engine. We deliver scalable multiplayer backends and stunning visual effects for global gaming audiences.',
    themeColor: 'indigo',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1552824734-80607276903d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What game engines do you specialize in?",
        a: "We specialize in Unity for versatile 2D/3D cross-platform games and Unreal Engine for high-fidelity, photorealistic gaming experiences."
      },
      {
        q: "How do you handle real-time multiplayer synchronization?",
        a: "We implement authoritative server models using Photon, Mirror, or custom Node.js/Go socket servers to ensure fair play and low-latency synchronization."
      }
    ],
    section1: {
      title: 'Next-Generation Game Engineering',
      content: 'Gaming is the most interactive form of modern entertainment. Our Game Development studio combines technical excellence with creative storytelling to build immersive worlds. We focus on optimizing frame rates, minimizing latency, and creating engaging mechanics that keep players coming back. From mobile casual games to complex PC/Console titles, we deliver a complete gaming ecosystem.'
    },
    section2: {
      title: 'Full-Spectrum Gaming Solutions',
      content: 'We offer a comprehensive suite of game development services, covering everything from initial concept art to post-launch monetization and scaling.',
      items: [
        '2D & 3D Game Design and Development (Unity, Unreal Engine)',
        'Real-time Multiplayer Backend Engineering with global lobby systems',
        'Advanced Game Physics and high-fidelity Visual Effects (VFX)',
        'Cross-platform deployment (iOS, Android, PC, WebGL)',
        'Monetization strategy (In-app purchases, ad integration, season passes)'
      ]
    },
    section3: {
      title: 'Operational Excellence in Gaming',
      content: 'We provide the stability and scale needed for modern online games. Our architectures are designed to support millions of concurrent players with minimal overhead.',
      items: [
        'Robust anti-cheat and security measures protecting game integrity',
        'Integrated player analytics tracking retention and monetization metrics',
        'Continuous content update pipelines for live-service operations',
        'Optimized asset management ensuring fast initial loading times'
      ]
    }
  },
  {
    id: 'soft-graphic',
    title: 'Graphic Designing',
    category: 'Software Services',
    tagline: 'Elevating Brands through Visual Storytelling',
    heroDescription: 'Crafting world-class visual identities, high-fidelity UI/UX layouts, and compelling marketing assets that define your digital presence.',
    themeColor: 'violet',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What is included in a full branding package?",
        a: "A full package includes logo design, typography scales, color palettes, brand books, and marketing collateral templates for social and print."
      },
      {
        q: "Do you provide source files for all designs?",
        a: "Yes, we deliver original Figma, Adobe Illustrator, or Photoshop master files with full layer organization and font documentation."
      }
    ],
    section1: {
      title: 'Visual Identity & Strategic Design',
      content: 'Design is the first point of contact between your brand and your audience. Our Graphic Designing studio focuses on creating aesthetic and functional visuals that resonate. We combine creative artistry with strategic thinking to build identities that are not only beautiful but also effective in communicating your brand values and driving business growth.'
    },
    section2: {
      title: 'Our Design Ecosystem',
      content: 'We offer a complete suite of creative services designed to provide a cohesive visual experience across all platforms.',
      items: [
        'User-Centric UI/UX Design for Web and Mobile Apps',
        'Minimalist & Impactful Logo and Brand Identity Design',
        'High-Conversion Banner and Marketing Collateral Design',
        'Professional Video Editing and Motion Graphics production',
        'Comprehensive Corporate Brand Guidelines and Style Books'
      ]
    },
    section3: {
      title: 'Craftsmanship & Quality Standards',
      content: 'We adhere to the highest standards of design excellence. Every pixel is intentional, and every layout is tested for balance, hierarchy, and accessibility.',
      items: [
        'Pixel-perfect designs optimized for all digital and print formats',
        'Strict adherence to WCAG 2.1 accessibility and color contrast rules',
        'High-resolution exports in all industry-standard vector and raster formats',
        'Dedicated design support for long-term brand evolution'
      ]
    }
  },
  {
    id: 'soft-marketing',
    title: 'Digital Marketing',
    category: 'Software Services',
    tagline: 'Driving Growth through Data-Driven Strategies',
    heroDescription: 'Accelerating your digital presence with high-performance SEO, SEM, and Social Media campaigns designed for maximum ROI.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What is your approach to ROI?",
        a: "We focus on conversion-centric strategies. Every dollar spent is tracked to ensure maximum Return on Ad Spend (ROAS) and lower acquisition costs."
      },
      {
        q: "Do you provide monthly performance reports?",
        a: "Yes. We provide transparent, detailed reports every month highlighting traffic, leads, conversions, and strategic recommendations."
      }
    ],
    section1: {
      title: 'Data-Driven Marketing Ecosystem',
      content: 'In the digital age, marketing is a science. Our team combines creative copywriting with advanced data analytics to build campaigns that convert. We don\'t just drive traffic; we drive the right traffic that translates into measurable business growth.'
    },
    section2: {
      title: 'Comprehensive Marketing Services',
      content: 'We provide a full-spectrum digital marketing suite tailored to your business stage, from early-stage startups to global enterprises.',
      items: [
        'Strategic SEO and Permanent Organic Growth',
        'High-Intent SEM and PPC Campaign Management',
        'Authority-Building Social Media Marketing',
        'Full-Funnel Conversion Rate Optimization (CRO)',
        'Detailed Attribution and Analytics Tracking'
      ]
    },
    section3: {
      title: 'Scalable Growth Frameworks',
      content: 'Whether you are launching your first product or scaling an established brand, we have the frameworks to accelerate your growth securely and predictably.',
      items: [
        'Customized marketing strategies for every business stage',
        'Proven history of delivering high ROAS across industries',
        'Expertise in global market expansion and local targeting',
        'Continuous campaign optimization based on real-world data'
      ]
    }
  },

  // ==================== SOFTWARE SERVICES SUBPAGES ====================
  {
    id: 'soft-mobile-android',
    title: 'Android Applications',
    category: 'Software Services',
    parentMenu: 'Mobile App Development',
    tagline: 'High-Velocity Native Android Engineering',
    heroDescription: 'Harnessing the maximum potential of modern Android hardware with performance-tuned applications built with Kotlin and Jetpack Compose. We deliver robust, material-ready solutions for global scale.',
    themeColor: 'emerald',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What standards are integrated into your Android builds?",
        a: "We utilize Kotlin exclusively with Jetpack Compose for modern UI. Background services are managed via WorkManager, remote APIs via Retrofit, and local caching via Room DB with full Type Safety."
      },
      {
        q: "How do you handle Android device fragmentation?",
        a: "We target a minimum SDK of Android 8.0, covering 95%+ of global devices. Our automated testing suite runs across a massive cloud of physical devices with varying aspect ratios and DPIs."
      }
    ],
    section1: {
      title: 'Native Android Engineering Excellence',
      content: 'We build Android applications utilizing strict MVVM clean architectures paired with Jetpack Compose for fluid, interactive visual layouts. Every application complies fully with Google\'s latest Material Design specifications, ensuring a modern, intuitive, and consistent experience across a massive range of Android devices. Our development focuses on optimizing for fragmented screen sizes, maximizing battery efficiency, and integrating native features like biometric security, NFC, and advanced camera APIs to create powerful, high-performance tools.'
    },
    section2: {
      title: 'Core Implementation Architecture',
      content: 'Our Android development stack is centered around Kotlin and Android Jetpack, ensuring your application performs reliably under all network conditions. We specialize in hardware-level integrations and robust background processing.',
      items: [
        'Secure SQLite databases using Room DB with offline-first data synchronization',
        'Background threading and task optimization via Kotlin Coroutines and WorkManager',
        'Deep hardware integration including BLE, GPS tracking, and biometric encryption',
        'Custom interactive push notification channels and real-time socket listeners'
      ]
    },
    section3: {
      title: 'Performance & Google Play Standards',
      content: 'Investing in high-quality native Android engineering ensures better App Store rankings and superior user retention. We provide complete deliverable packages including structured source code and ready-to-publish App Bundles (AAB).',
      items: [
        'Guaranteed 99.9% crash-free session metrics verified by remote crash analytics',
        'Optimized build compilation sizes through advanced code-stripping and ProGuard',
        'Seamless integration with Google Play Services, in-app billing, and subscriptions',
        'Full compliance with Google Play Console submission standards and policy auditing'
      ]
    }
  },
  {
    id: 'soft-mobile-ios',
    title: 'iOS Applications',
    category: 'Software Services',
    parentMenu: 'Mobile App Development',
    tagline: 'Premium Fluid Native iOS Architectures',
    heroDescription: 'Crafting pixel-perfect, high-performance iPhone and iPad applications using Swift and SwiftUI. We deliver the elegance and fluid performance expected by Apple users worldwide.',
    themeColor: 'emerald',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What versions of iOS do your applications support?",
        a: "We support the latest iOS versions (current and previous 2 major versions) to leverage modern SwiftUI and Swift Concurrency, covering roughly 98% of active Apple devices."
      },
      {
        q: "How is biometric security handled in iOS apps?",
        a: "We integrate directly with Apple\'s LocalAuthentication framework. Secure tokens are held within the device Keychain, ensuring biometric data never leaves the hardware."
      }
    ],
    section1: {
      title: 'Premium iOS Engineering for the Apple Ecosystem',
      content: 'Our iOS studio designs interfaces that feel native to Apple\'s premium ecosystem. By adopting SwiftUI paired with modern Swift Concurrency, we deliver blazing-fast transitions and a highly responsive user experience. Every screen strictly adheres to Apple\'s Human Interface Guidelines (HIG), maximizing visual aesthetics, contrast, and accessibility features. We build sophisticated applications for iPhone and iPad that leverage the full power of Apple Silicon.'
    },
    section2: {
      title: 'Advanced Apple System Integrations',
      content: 'We go beyond basic development to integrate deep system-level features that enhance user engagement and provide cutting-edge functionality.',
      items: [
        'Secure local storage using CoreData or SwiftData with multi-device iCloud sync',
        'Hardware integrations including FaceID/TouchID, Apple Keychain, and camera sensors',
        'Apple Pay transaction flows with robust merchant-side verification layers',
        'Rich interactive Home Screen Widgets and dynamic Push Notifications via APNs'
      ]
    },
    section3: {
      title: 'Security & App Store Compliance',
      content: 'Our premium iOS development ensures your application stands out in a crowded App Store. We provide a rigorous QA process and coordinate TestFlight beta cycles to ensure a polished, bug-free release.',
      items: [
        'End-to-end data security utilizing App Transport Security (ATS) protocols',
        'Strict sandboxing and memory safety practices preventing buffer exploits',
        'Comprehensive TestFlight beta cycle coordination with full regression logging',
        'Hassle-free deployment and certification management inside Apple Developer portal'
      ]
    }
  },
  {
    id: 'soft-mobile-cross',
    title: 'Cross-Platform Applications',
    category: 'Software Services',
    parentMenu: 'Mobile App Development',
    tagline: 'Native Velocity, Unified Multi-Platform Codebase',
    heroDescription: 'Leveraging React Native and Flutter to deliver premium mobile applications for both iOS and Android simultaneously, maximizing reach while optimizing development costs.',
    themeColor: 'emerald',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does cross-platform perform as well as native apps?",
        a: "With modern compiler bridges and engines, the performance difference is imperceptible for 99% of apps. We write custom native C++ wrappers for heavy computing tasks if needed."
      },
      {
        q: "How do you handle over-the-air (OTA) updates?",
        a: "We configure tools like Expo EAS or CodePush, enabling us to deploy bug fixes directly to user devices in seconds, bypassing the multi-day App Store review process."
      }
    ],
    section1: {
      title: 'Strategic Code Reuse with Native Performance',
      content: 'Cross-platform engineering is the most strategic approach for modern digital brands looking to scale quickly. By implementing a single, unified codebase using React Native or Flutter, we ensure visual parity across iOS and Android while reusing up to 90% of business logic. This approach allows for simultaneous feature launches on both platforms, ensuring your entire user base receives updates at the same time.'
    },
    section2: {
      title: 'Advanced Cross-Platform Stack',
      content: 'Our technical architects evaluate your specific project needs to recommend either Flutter or React Native. Both frameworks allow us to integrate custom native modules for specialized computing tasks.',
      items: [
        'React Native builds leveraging JavaScript engine optimizations and native bridges',
        'Flutter systems utilizing Dart compiler to generate highly performant arm64 code',
        'Custom native wrappers written in Swift or Kotlin for deep OS-level dependencies',
        'Seamless Expo framework integrations for fast over-the-air (OTA) updates'
      ]
    },
    section3: {
      title: 'Strategic Engineering ROI',
      content: 'Choosing cross-platform development significantly lowers the Total Cost of Ownership (TCO) for your mobile product. Maintenance is simplified and bug fixes are deployed once to reach all users.',
      items: [
        'Substantially reduced overall development cost and faster time-to-market',
        'Unified QA cycles ensuring that bugs are resolved across both platforms simultaneously',
        'Flexible visual components that look entirely native on both Material and Apple layouts',
        'Simplified future feature rollouts requiring only a single team to coordinate'
      ]
    }
  },
  {
    id: 'soft-mobile-startup',
    title: 'App for Start-ups',
    category: 'Software Services',
    parentMenu: 'Mobile App Development',
    tagline: 'High-Velocity MVPs for Rapid Market Validation',
    heroDescription: 'Custom rapid mobile prototyping and functional MVP development designed to validate product concepts and secure venture capital with technical speed.',
    themeColor: 'emerald',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How fast can we build and deploy our startup MVP?",
        a: "Our standard startup mobile MVP development takes 6 to 10 weeks, covering everything from wireframes to cloud backend setup and store submission."
      },
      {
        q: "What tools do you use to keep initial backend costs low?",
        a: "We build on serverless resources like Google Cloud Functions or Supabase. This scales down to $0 when there is no traffic, ensuring no heavy maintenance fees during launch."
      }
    ],
    section1: {
      title: 'Lean Engineering & Rapid Market Entry',
      content: 'For startup founders, speed and focus are the ultimate competitive advantages. Our "App for Start" program delivers a fully functional, polished MVP within a compressed timeline. We help you identify and prioritize core features that prove your value proposition to early adopters, establishing analytical loops to help you iterate toward product-market fit.'
    },
    section2: {
      title: 'Startup-Focused Development Framework',
      content: 'Our process is tailored for high-uncertainty environments. We use modular, scalable architectures ready to scale to thousands of users overnight while keeping initial costs at near-zero.',
      items: [
        'Rapid wireframing and clickable Figma prototypes completed in just days',
        'Core user registration, profile management, and essential workflow setup',
        'Integration of seamless, lightweight backend infrastructures using serverless designs',
        'Setup of comprehensive user analytics pipelines (Mixpanel or Firebase)'
      ]
    },
    section3: {
      title: 'Strategic Growth Partnership',
      content: 'We act as your fractional CTO and engineering team, providing strategic advice on platform selection and cost-optimization. Our goal is to build a solid foundation that allows you to scale without a rewrite.',
      items: [
        'Fully-scaled cloud configurations prepared to grow from 10 to 10,000 users instantly',
        'Interactive, visually stunning product dashboards ready for high-stakes pitching decks',
        'Complete source code ownership and technical roadmap for post-MVP expansion',
        'Direct mentoring on App Store optimization and user acquisition tracking'
      ]
    }
  },
  {
    id: 'soft-web-startup',
    title: 'Web for Start-ups',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'High-Performance Web Launchpads for Digital Founders',
    heroDescription: 'Speed-to-market custom web applications and responsive landing portals built with React and Node.js to validate ideas and drive initial user traction.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How fast can you build a startup web MVP?",
        a: "Our rapid web MVP cycle takes 4 to 8 weeks. This includes architectural design, frontend development, serverless backend setup, and initial deployment."
      },
      {
        q: "What technologies do you use for startup speed?",
        a: "We use Next.js and Vercel for instant deployments, Supabase or Firebase for rapid backend scaling, and Tailwind CSS for high-speed UI development."
      }
    ],
    section1: {
      title: 'Agile Web Prototyping for Startups',
      content: 'In the startup world, the first to market often wins. Our "Web for Start" program is designed to deliver high-quality, scalable web products in record time. We focus on core features that drive user engagement and provide founders with the technical foundation needed to scale. Our approach minimizes initial overhead while ensuring the system can handle sudden traffic spikes during launch.'
    },
    section2: {
      title: 'Startup Engineering Framework',
      content: 'We use a modular stack that allows for rapid pivots and easy feature expansion. Our systems are built to be developer-friendly and cost-optimized for early-stage budgets.',
      items: [
        'Interactive Figma wireframing and clickable prototypes for investor pitches',
        'Custom landing pages and user onboarding flows designed for conversion',
        'Serverless backend architectures with near-zero initial maintenance costs',
        'Integrated product analytics to track user behavior from day one'
      ]
    },
    section3: {
      title: 'Strategic Path to Scaling',
      content: 'We build with the future in mind. Every "Web for Start" project includes a technical roadmap and source code ownership, ensuring you have full control over your digital asset as you grow.',
      items: [
        'Secure, production-ready codebases that pass initial security audits',
        '100% source code ownership and detailed technical documentation',
        'Scalable cloud infrastructure setup on AWS or Vercel',
        'Direct consultation on SEO and initial performance optimization'
      ]
    }
  },
  {
    id: 'soft-web-growing',
    title: 'For Growing Business',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'Expanding Digital Portals with Automated Workflows',
    heroDescription: 'Optimizing and scaling existing web platforms with advanced third-party integrations, automated lead capture, and performance-tuned architectures.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "When should we transition from a basic site to a scaling portal?",
        a: "If your staff is spending hours on manual data entry or your site slows down under traffic, it is time to upgrade to a scaling portal with automated CRM and database hooks."
      },
      {
        q: "Can you optimize our existing React or Next.js codebase?",
        a: "Yes, we perform code audits to identify memory leaks, unnecessary re-renders, and bloated assets, often improving site speed by over 40%."
      }
    ],
    section1: {
      title: 'Strategic Scaling for Established Brands',
      content: 'Growth brings complexity. Our "Web for Grow" program transforms static web presences into dynamic, automated business machines. We integrate your web platform with the essential tools your team uses daily, from CRM systems to inventory management, ensuring your digital growth is backed by operational efficiency.'
    },
    section2: {
      title: 'Optimization & Integration Suite',
      content: 'We focus on removing technical bottlenecks that prevent your business from reaching its full potential. Our engineering team specializes in performance tuning and deep third-party integrations.',
      items: [
        'Automated lead routing and CRM synchronization (Salesforce, HubSpot)',
        'Advanced user dashboard development with real-time data visualization',
        'Performance optimization and technical SEO audits to capture more organic traffic',
        'Secure API development to connect your web platform with internal databases'
      ]
    },
    section3: {
      title: 'Sustained Growth Infrastructure',
      content: 'We provide the stability needed to scale with confidence. Our scaling solutions are built on reliable cloud infrastructures that grow automatically with your traffic, ensuring zero downtime.',
      items: [
        'Autoscaling cloud configurations on AWS, GCP, or Azure',
        'Robust data backup and recovery systems ensuring zero information loss',
        'Continuous monitoring and proactive security patching for high-traffic apps',
        'Transparent reporting on site performance and conversion optimization'
      ]
    }
  },
  {
    id: 'soft-web-enterprise',
    title: 'Web for Enterprise',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'Military-Grade Web Systems for Global Corporations',
    heroDescription: 'Architecting ultra-secure, highly-available web infrastructures designed to support thousands of internal users and mission-critical workflows.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you ensure data privacy in enterprise portals?",
        a: "We implement advanced encryption-at-rest and in-transit. Access is governed by strict OAuth2/OpenID Connect protocols with multi-factor authentication (MFA) as standard."
      },
      {
        q: "Do you support on-premise or hybrid cloud deployments?",
        a: "Yes, we can deploy via Docker/Kubernetes to your private cloud or managed instances on AWS Outposts or Azure Stack."
      }
    ],
    section1: {
      title: 'Resilient Enterprise Web Architecture',
      content: 'Large-scale organizations require more than just a website; they need a resilient digital backbone. Our "Web for Enterprise" program focuses on high-availability architectures that eliminate single points of failure. We specialize in building custom internal tools, vendor portals, and customer-facing interfaces that adhere to the strictest security and compliance standards globally.'
    },
    section2: {
      title: 'Corporate Governance & Security',
      content: 'We prioritize technical security and organizational governance in every build. Our engineering team works closely with your IT department to ensure seamless integration with existing identity providers.',
      items: [
        'Single Sign-On (SSO) integration via SAML, Okta, or Active Directory',
        'Micro-frontend architectures allowing multiple teams to deploy independently',
        'Comprehensive audit logging and real-time security monitoring dashboards',
        'Data localization and sovereignty compliance for international operations'
      ]
    },
    section3: {
      title: 'Operational Excellence at Scale',
      content: 'Our enterprise solutions are designed for long-term sustainability. We provide complete CI/CD pipelines and automated testing suites that ensure your platform remains stable through every update.',
      items: [
        '99.99% Uptime SLAs backed by multi-region cloud distributions',
        'Custom interactive reporting engines for executive-level data insights',
        'Automated regression testing suites ensuring consistent platform stability',
        'Senior technical support and dedicated DevOps management teams'
      ]
    }
  },
  {
    id: 'soft-web-ecommerce',
    title: 'Ecommerce Development',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'High-Conversion Scalable Digital Storefronts',
    heroDescription: 'Engineering ultra-fast e-commerce marketplaces and direct-to-consumer online stores equipped with advanced filters and secure checkouts.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Which e-commerce platforms do you support?",
        a: "We specialize in custom Shopify Liquid development, headless BigCommerce architectures, and fully custom React/Node.js e-commerce engines for specialized business models."
      },
      {
        q: "How do you handle high-traffic sales events like Black Friday?",
        a: "We implement multi-layer caching, elastic cloud scaling, and serverless checkout functions that scale instantly to handle thousands of concurrent transactions without lag."
      }
    ],
    section1: {
      title: 'Conversion-Optimized E-Commerce Engineering',
      content: 'In the digital marketplace, speed and trust are the primary drivers of sales. Our e-commerce studio builds high-performance storefronts that prioritize mobile-first responsiveness and ultra-fast loading times. We integrate advanced search capabilities, AI-driven product recommendations, and frictionless checkout flows that significantly reduce cart abandonment and maximize your average order value (AOV).'
    },
    section2: {
      title: 'Advanced Retail Feature Set',
      content: 'We provide the technical tools needed to manage a modern global retail operation. Our builds focus on providing your marketing team with total control over content while the system handles the complexity of logic.',
      items: [
        'Secure multi-currency payment gateway integrations (Stripe, PayPal, Adyen)',
        'Advanced faceted search and filtering using Algolia or ElasticSearch',
        'Headless CMS integrations allowing for rich, story-driven product layouts',
        'Automated inventory synchronization across multiple sales channels and ERPs'
      ]
    },
    section3: {
      title: 'Strategic Commerce Performance',
      content: 'Our e-commerce platforms are built for global scale. We implement robust security protocols and automated SEO optimizations that ensure your products are discoverable and your customer data is protected.',
      items: [
        'Optimized Core Web Vitals ensuring high Google rankings and low bounce rates',
        'PCI-DSS compliant checkout architectures ensuring absolute payment security',
        'Integrated abandoned cart recovery and automated email marketing hooks',
        'Comprehensive sales analytics dashboards featuring cohort and churn analysis'
      ]
    }
  },
  {
    id: 'soft-web-app',
    title: 'Web App Development',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'Interactive Single-Page SaaS Systems',
    heroDescription: 'Building feature-rich, interactive web applications and software-as-a-service portals utilizing modern React, Vue, and high-performance server APIs.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What is the difference between a website and a web app?",
        a: "A website is primarily informational, while a web app is interactive and performant, allowing users to manipulate data, manage profiles, and perform complex tasks."
      },
      {
        q: "How do you ensure web app performance?",
        a: "We use code-splitting, lazy loading, and state management libraries like Redux or Zustand to ensure only necessary data is loaded, keeping the UI fluid and responsive."
      }
    ],
    section1: {
      title: 'Dynamic Web Application Engineering',
      content: 'We transform complex business logic into intuitive, high-performance web applications. Our engineering team specializes in building single-page applications (SPAs) that offer a seamless, app-like experience in the browser. Whether you are building a custom CRM, a project management tool, or a complex data dashboard, we deliver a robust solution that is fast, secure, and easy to scale.'
    },
    section2: {
      title: 'Advanced Interactive Features',
      content: 'Our web apps are built to handle high levels of user interaction and data complexity. We focus on creating responsive interfaces that provide immediate feedback and a smooth user journey.',
      items: [
        'Real-time data synchronization using WebSockets or Server-Sent Events',
        'Complex state management for multi-step workflows and data entry',
        'Secure user authentication and granular permission management',
        'Offline capabilities and background synchronization using Service Workers'
      ]
    },
    section3: {
      title: 'Production-Ready SaaS Architectures',
      content: 'We provide the technical foundation needed to launch and scale a successful SaaS product. Our architectures are designed for multi-tenancy, security, and high availability.',
      items: [
        'Scalable multi-tenant database designs ensuring data isolation',
        'Comprehensive API documentation and developer SDKs',
        'Integrated subscription management and billing systems',
        'Proactive monitoring and automated error tracking for high reliability'
      ]
    }
  },
  {
    id: 'soft-web-revamp',
    title: 'Website Revamp',
    category: 'Software Services',
    parentMenu: 'Web Development',
    tagline: 'Modern Overhaul of Legacy Digital Assets',
    heroDescription: 'Transforming slow, outdated corporate websites into fast, beautifully responsive, and SEO-optimized modern brand assets.',
    themeColor: 'sky',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Why should we revamp our existing website?",
        a: "A revamp improves loading speeds, mobile responsiveness, and SEO rankings, directly impacting user engagement and conversion rates."
      },
      {
        q: "Will we lose our existing SEO rankings during the move?",
        a: "No. We implement strict 301 redirect maps and maintain URL structures where possible to ensure your existing search engine authority is preserved."
      }
    ],
    section1: {
      title: 'Strategic Digital Modernization',
      content: 'A website revamp is more than just a new look; it is a technical upgrade to meet modern standards. We analyze your existing site to identify performance bottlenecks and UX friction points. Our team then rebuilds your platform using modern frameworks like Next.js, ensuring your new site is lightning-fast, secure, and ready for the next decade of digital competition.'
    },
    section2: {
      title: 'Modernization Roadmap',
      content: 'We follow a structured process to ensure a smooth transition from your old site to the new one. Our focus is on maintaining your brand identity while significantly improving the technical foundations.',
      items: [
        'Complete UI/UX overhaul focusing on modern design trends and accessibility',
        'Migration of legacy content to a flexible, modern Headless CMS',
        'Implementation of 301 redirect strategies to preserve SEO authority',
        'Performance optimization achieving perfect Lighthouse scores on launch'
      ]
    },
    section3: {
      title: 'Future-Proof Results',
      content: 'The results of a professional revamp are immediate. You will see improved engagement metrics, higher conversion rates, and a more professional brand representation that builds trust with your audience.',
      items: [
        'Dramatic improvements in mobile and desktop loading speeds',
        'Higher organic search visibility through modern technical SEO',
        'Reduced maintenance costs through clean, modern codebases',
        'Seamless integration with modern marketing and analytics tools'
      ]
    }
  },
  {
    id: 'soft-game-rummy',
    title: 'Rummy Game Development',
    category: 'Software Services',
    parentMenu: 'Game Development',
    tagline: 'Certified RNG & Real-Time Multiplayer Rummy Platforms',
    heroDescription: 'Engineering high-performance, secure multiplayer Rummy card games with server-authoritative logic, certified RNG, and seamless visual animations.',
    themeColor: 'rose',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is your card shuffling algorithm certified for fairness?",
        a: "Yes. Our Rummy engines integrate cryptographically secure PRNG algorithms that conform to GLI-19 certification standards, ensuring completely random, unpredictable card shuffles."
      },
      {
        q: "How does the platform handle mid-game disconnects?",
        a: "We implement server-authoritative auto-play routines. If a player disconnects, an intelligent AI bot manages their turn based on configurable house rules."
      }
    ],
    section1: {
      title: 'Server-Authoritative Rummy Engineering',
      content: 'Multiplayer card games require absolute trust. Our Rummy platforms are built on server-authoritative architectures that prevent any client-side manipulation. Every move is validated by the server in real-time, ensuring a fair and competitive environment for all players. We focus on low-latency synchronization and robust state management to deliver a smooth gaming experience even on slower networks.'
    },
    section2: {
      title: 'Premium Card Gaming Features',
      content: 'We provide a complete feature set for professional Rummy operations, from advanced lobby management to secure financial transaction logging.',
      items: [
        'Certified RNG (Random Number Generator) for 100% fair card distribution',
        'Multiple Rummy Variants (Points, Pool, Deals) in a single application',
        'Fluid HTML5 canvas animations running at 60FPS on mobile and web',
        'Integrated multi-layer anti-fraud and anti-collusion detection systems'
      ]
    },
    section3: {
      title: 'Operator Controls & Economy Management',
      content: 'Manage your gaming platform with ease using our comprehensive admin dashboards. We provide deep insights into player behavior and platform health.',
      items: [
        'Real-time administrative dashboards for monitoring active tables and lobbies',
        'Secure digital wallet integration with automated KYC and fraud detection',
        'Detailed player analytics and retention tracking tools',
        'Scalable cloud infrastructure designed for thousands of concurrent players'
      ]
    }
  },
  {
    id: 'soft-game-unity',
    title: 'Unity 3D Game Development',
    category: 'Software Services',
    parentMenu: 'Game Development',
    tagline: 'Immersive Cross-Platform Game Production',
    heroDescription: 'Building high-fidelity 3D and 2D games with beautiful graphics, realistic physics, and smooth optimization for mobile, desktop, and web consoles.',
    themeColor: 'rose',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Why choose Unity for game development?",
        a: "Unity offers unparalleled cross-platform capabilities, allowing us to deploy to iOS, Android, PC, and Web with a single codebase while maintaining high performance."
      },
      {
        q: "How do you optimize 3D games for mobile devices?",
        a: "We use advanced techniques like occlusion culling, baked lighting, and optimized shader pipelines to ensure high frame rates even on mid-range mobile hardware."
      }
    ],
    section1: {
      title: 'High-Performance Unity Engineering',
      content: 'Unity is the world\'s leading platform for real-time 3D development. Our team leverages its full potential to create visually stunning and engaging games. We focus on writing clean, performant C# code and utilizing the Universal Render Pipeline (URP) to deliver high-quality visuals without compromising on mobile performance. From casual 2D platformers to complex 3D RPGs, we bring your vision to life.'
    },
    section2: {
      title: 'Full-Cycle Unity Development',
      content: 'We provide a complete development pipeline, from initial concept art and 3D modeling to final deployment and post-launch support.',
      items: [
        'Custom 3D modeling, rigging, and character animation in Blender/Maya',
        'Advanced physics simulation and interactive environment design',
        'Cross-platform input management (Touch, Controller, Keyboard)',
        'Integration of complex AI behavior trees and pathfinding systems'
      ]
    },
    section3: {
      title: 'Monetization & Analytics Integration',
      content: 'We ensure your game is not just a creative success, but a business success as well. We integrate the essential tools needed to grow and monetize your audience.',
      items: [
        'Secure in-app purchase (IAP) integration for iOS and Android',
        'Implementation of rewarded video and interstitial ad networks',
        'Deep analytics tracking player progression and economy balance',
        'Automated build and deployment pipelines for rapid updates'
      ]
    }
  },
  {
    id: 'soft-game-ludo',
    title: 'Ludo Game Development',
    category: 'Software Services',
    parentMenu: 'Game Development',
    tagline: 'High-Retention Multiplayer Ludo Gaming Portals',
    heroDescription: 'Engineering engaging, turn-based multiplayer Ludo games featuring real-time dice rolls, online matching lobbies, and robust social integrations.',
    themeColor: 'rose',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does your Ludo game support voice chat?",
        a: "Yes, we can integrate real-time voice and text chat features using SDKs like Agora or Vivox to enhance social interaction during gameplay."
      },
      {
        q: "Can players play against AI bots?",
        a: "Absolutely. We implement intelligent AI with multiple difficulty levels to ensure players can always find a match, even when fewer human players are online."
      }
    ],
    section1: {
      title: 'Engaging Ludo Gameplay Experience',
      content: 'Ludo is a classic board game that translates perfectly to the digital space. Our Ludo platforms focus on providing a fun, social, and competitive experience. We implement real-time dice rolls with certified RNG and smooth token animations to keep the gameplay feeling organic and satisfying. Our architecture supports multiple game modes, including Quick Ludo, Classic, and Team Up, catering to different player preferences.'
    },
    section2: {
      title: 'Advanced Social & Competitive Features',
      content: 'We integrate the features that drive long-term player retention and community growth. Our Ludo games are built to be social hubs.',
      items: [
        'Real-time multiplayer matching with global and private room options',
        'Integrated social features including friends lists and in-game gifting',
        'Daily, weekly, and monthly leaderboards with custom reward systems',
        'Customizable board themes, token skins, and expressive emojis'
      ]
    },
    section3: {
      title: 'Scalable Multiplayer Infrastructure',
      content: 'Our Ludo backends are designed to handle massive concurrent user bases. We provide the tools needed to manage a successful global gaming portal.',
      items: [
        'High-concurrency WebSocket servers ensuring low-latency interactions',
        'Robust anti-cheat systems preventing dice manipulation and collusion',
        'Detailed player data management and history tracking',
        'Secure payment and wallet integrations for skill-based gaming'
      ]
    }
  },
  {
    id: 'soft-game-tambola',
    title: 'Tambola Game Development',
    category: 'Software Services',
    parentMenu: 'Game Development',
    tagline: 'High-Concurrency Live Multiplayer Tambola Platforms',
    heroDescription: 'Architecting interactive real-time Tambola (Bingo) game platforms featuring automated number calling, multi-ticket purchasing, and instant prize verification.',
    themeColor: 'rose',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1543196387-5fa7b6860dbd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How many tickets can a player buy per game?",
        a: "Our system supports multi-ticket purchasing, allowing players to buy and manage up to 6 tickets simultaneously with automated marking features."
      },
      {
        q: "How is the winner determined in real-time?",
        a: "The game server performs instant ticket verification for every called number. As soon as a player claims a pattern (Full House, Lines, etc.), the server validates it in milliseconds."
      }
    ],
    section1: {
      title: 'High-Energy Multiplayer Tambola Engineering',
      content: 'Tambola (also known as Bingo or Housie) is a high-energy social game that requires precise real-time synchronization. Our Tambola platforms feature automated number calling with high-quality audio and a responsive UI that allows players to easily manage multiple tickets. We focus on creating a live, community-driven experience with integrated chat and real-time winner announcements.'
    },
    section2: {
      title: 'Rich Interactive Tambola Features',
      content: 'We provide a complete suite of features for professional Tambola operations, focusing on player engagement and platform security.',
      items: [
        'Automated and manual number calling modes with multilingual support',
        'Real-time ticket generation and automated "Auto-Cut" features',
        'Integrated social features including live chat, emojis, and gifting',
        'Instant prize verification and automated wallet settlements'
      ]
    },
    section3: {
      title: 'Robust Backend & Economy Management',
      content: 'Our Tambola backends are built for high concurrency, supporting thousands of players in a single game room without lag.',
      items: [
        'Scalable WebSocket architecture for real-time number broadcasting',
        'Detailed game history and ticket auditing for transparency',
        'Secure payment gateway integration for ticket purchases',
        'Advanced admin controls for scheduling games and managing prizes'
      ]
    }
  },
  {
    id: 'soft-graphic-uiux',
    title: 'UI/UX Designing',
    category: 'Software Services',
    parentMenu: 'Graphic Designing',
    tagline: 'User-Centric High-Fidelity App & Web Designs',
    heroDescription: 'Crafting clean, accessible, and highly-converting user journeys and interactive layouts in Figma driven by scientific user research.',
    themeColor: 'violet',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What is your design process?",
        a: "We follow a multi-stage process: Research & Personas, Wireframing, High-Fidelity UI Design, and Interactive Prototyping."
      },
      {
        q: "How do you ensure accessibility?",
        a: "We test all color contrasts, font sizes, and tap targets against WCAG 2.1 AA standards to ensure inclusivity."
      }
    ],
    section1: {
      title: 'Strategic UX Research & Wireframing',
      content: 'Great experiences are built on understanding. We conduct deep user research to map out journeys that are intuitive and friction-free. Our wireframing phase focuses on information architecture and user flow, ensuring that the logic of your application is sound before we move into visual styling.'
    },
    section2: {
      title: 'High-Fidelity UI Systems',
      content: 'We create visually stunning interfaces that are consistent and scalable. Our designers build comprehensive design systems in Figma that empower your developers and ensure brand integrity.',
      items: [
        'Bespoke visual identity and UI component libraries',
        'Responsive layouts for mobile, tablet, and desktop screens',
        'Interactive, clickable prototypes for stakeholder validation',
        'Seamless developer handoff with full asset documentation'
      ]
    },
    section3: {
      title: 'Conversion-Driven Design',
      content: 'Our designs are not just pretty; they are engineered to convert. We use behavioral psychology principles to guide user actions and improve key performance metrics.',
      items: [
        'Optimized user journeys that reduce bounce rates and drop-offs',
        'High-contrast, legible typography for maximum readability',
        'Clear call-to-action (CTA) hierarchy and button placement',
        'Continuous design auditing based on real-world user feedback'
      ]
    }
  },
  {
    id: 'soft-graphic-banner',
    title: 'Banner Designing',
    category: 'Software Services',
    parentMenu: 'Graphic Designing',
    tagline: 'High-Impact Digital & Print Advertising Assets',
    heroDescription: 'Crafting visually arresting banners for web, social media, and physical events designed to capture attention and drive engagement.',
    themeColor: 'violet',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557831454-750ca147cb36?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What types of banners do you design?",
        a: "We design web sliders, social media headers, Google Display ads, and physical event banners (roll-ups, backdrops)."
      },
      {
        q: "Can you provide animated banners?",
        a: "Yes, we create HTML5 animated banners and GIF versions for high-performance digital advertising campaigns."
      }
    ],
    section1: {
      title: 'Visual Impact & Advertisement Strategy',
      content: 'A banner has only a few seconds to make an impression. Our design philosophy centers on high-contrast visuals, clear typography, and strong call-to-action (CTA) elements. We study your campaign goals to create assets that not only look great but also deliver measurable results.'
    },
    section2: {
      title: 'Multichannel Banner Solutions',
      content: 'We provide optimized assets for every platform, ensuring your message remains consistent and visually sharp across the entire digital ecosystem.',
      items: [
        'Web Sliders and Hero Banners for high-conversion landing pages',
        'Social Media kits for Facebook, LinkedIn, Instagram, and Twitter',
        'Google Display Network (GDN) ad sets in all standard dimensions',
        'Large-format print designs for trade shows and outdoor advertising'
      ]
    },
    section3: {
      title: 'Aesthetic Precision & Brand Alignment',
      content: 'Every banner we design is a reflection of your brand identity. We ensure that colors, fonts, and imagery align perfectly with your existing style guides.',
      items: [
        'High-resolution vector and raster exports optimized for web/print',
        'Attention-grabbing layouts driven by modern visual trends',
        'Strict adherence to brand safety and messaging guidelines',
        'Rapid turnaround for time-sensitive marketing campaigns'
      ]
    }
  },
  {
    id: 'soft-graphic-logo',
    title: 'Logo Designing',
    category: 'Software Services',
    parentMenu: 'Graphic Designing',
    tagline: 'Timeless & Memorable Corporate Brand Assets',
    heroDescription: 'Formulating distinct, minimalist vector logos and corporate brand books that anchor your business identity across global markets.',
    themeColor: 'violet',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What file formats do I receive?",
        a: "We deliver all industry-standard formats including AI, EPS, SVG, PDF (vectors) and high-res PNG/JPG for web use."
      },
      {
        q: "Do I own the copyrights to my logo?",
        a: "Yes. Upon completion and final payment, we provide a full transfer of intellectual property rights to you."
      }
    ],
    section1: {
      title: 'Aesthetic Branding & Visual Psychology',
      content: 'A logo is the face of your company. We design minimalist and symbolic logos that are memorable and versatile. Our process involves studying your industry, competition, and target audience to create a mark that communicates your brand essence at a glance.'
    },
    section2: {
      title: 'Complete Branding Deliverables',
      content: 'We provide more than just a logo. We deliver a cohesive visual system that ensures your brand looks professional across all touchpoints.',
      items: [
        'Custom vector logo designs in multiple variations',
        'Professional typography and color palette selection',
        'Comprehensive corporate brand book and style guide',
        'Social media kit and stationery design templates'
      ]
    },
    section3: {
      title: 'Strategic Brand Evolution',
      content: 'Your brand should grow with you. We design logos that are timeless and scalable, ensuring they remain relevant as your business expands into new markets.',
      items: [
        'Versatile designs that work on small screens and large billboards',
        'Unique, non-generic artwork that carries IP guarantees',
        'Consistent visual identity across digital and physical media',
        'Professional consultation on brand positioning and visual strategy'
      ]
    }
  },
  {
    id: 'soft-graphic-video',
    title: 'Video Editing',
    category: 'Software Services',
    parentMenu: 'Graphic Designing',
    tagline: 'Cinematic Storytelling & Professional Post-Production',
    heroDescription: 'Transforming raw footage into compelling visual narratives with professional editing, color grading, and dynamic motion graphics.',
    themeColor: 'violet',
    iconName: 'Palette',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "What video editing software do you use?",
        a: "We primarily use Adobe Premiere Pro for editing, After Effects for motion graphics, and DaVinci Resolve for professional color grading."
      },
      {
        q: "Can you edit videos for social media?",
        a: "Yes, we specialize in creating high-engagement vertical videos for Instagram Reels, TikTok, and YouTube Shorts."
      }
    ],
    section1: {
      title: 'Professional Post-Production Mastery',
      content: 'Video is the most powerful medium for communication. Our editing team focuses on rhythm, pacing, and visual flow to ensure your message is delivered effectively. From corporate interviews and promotional ads to cinematic short films, we provide the technical expertise needed to elevate your footage.'
    },
    section2: {
      title: 'Comprehensive Video Services',
      content: 'We provide a full range of post-production services to ensure your video looks and sounds professional.',
      items: [
        'Multi-camera editing and seamless transition effects',
        'Professional color correction and cinematic color grading',
        'High-quality audio mixing and sound design',
        'Dynamic motion graphics and kinetic typography'
      ]
    },
    section3: {
      title: 'Output & Delivery Standards',
      content: 'We deliver your videos in the optimal formats for your target platforms, ensuring maximum quality and compatibility.',
      items: [
        'High-resolution exports up to 4K at 60FPS',
        'Optimized versions for YouTube, Vimeo, and social media',
        'Subtitle and closed caption integration (SRT/Burned-in)',
        'Efficient project turnaround with multiple review cycles'
      ]
    }
  },
  {
    id: 'soft-marketing-startup',
    title: 'For Start-ups',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'Strategic Growth for Early-Stage Ventures',
    heroDescription: 'Validating your product-market fit and acquiring your first users with lean, highly-targeted marketing campaigns.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you help startups with limited budgets?",
        a: "We focus on lean, high-impact strategies like technical SEO and laser-targeted PPC to maximize every dollar and validate acquisition channels."
      },
      {
        q: "Can you help with investor pitch decks?",
        a: "Yes, we provide the data and metrics (CAC, LTV projections) needed to build a compelling growth narrative for your investors."
      }
    ],
    section1: {
      title: 'Lean Traction Strategies',
      content: 'For a startup, speed and validation are everything. We execute lean marketing experiments to identify your most profitable user acquisition channels. Our approach focuses on building a foundation for sustainable growth without wasting your initial runway.'
    },
    section2: {
      title: 'Startup Launchpad Services',
      content: 'We provide the essential marketing infrastructure needed to take your product from zero to one.',
      items: [
        'Hyper-targeted user acquisition through PPC and Paid Social',
        'Early-stage Technical SEO and Content Strategy',
        'Conversion-optimized landing page design and copywriting',
        'Setup of core analytics and event tracking (GA4, Mixpanel)'
      ]
    },
    section3: {
      title: 'Metrics That Matter',
      content: 'We focus on the metrics that define startup success, helping you build a data-driven narrative that investors love.',
      items: [
        'Optimization of Customer Acquisition Cost (CAC)',
        'Validation of product-market fit through user behavior data',
        'Predictable lead generation funnels for early scaling',
        'Strategic consulting on long-term growth and retention'
      ]
    }
  },
  {
    id: 'soft-marketing-growing',
    title: 'For Growing Business',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'Predictable Growth Scaling',
    heroDescription: 'Expanding your market share and lead pipelines with advanced funnels and data-driven advertising strategies.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you scale existing campaigns?",
        a: "We use systematic A/B testing and audience expansion to increase reach while maintaining or improving your Return on Ad Spend (ROAS)."
      },
      {
        q: "Do you integrate with our CRM?",
        a: "Yes, we ensure all leads are automatically synced with your CRM (Salesforce, HubSpot, etc.) for instant sales follow-up."
      }
    ],
    section1: {
      title: 'Scaling Outbound Pipelines',
      content: 'As your business grows, so should your reach. We focus on scaling your most successful acquisition channels while exploring new opportunities for expansion. Our goal is to provide a predictable and high-quality flow of leads that fuels your sales team.'
    },
    section2: {
      title: 'Growth Acceleration Modules',
      content: 'We provide advanced marketing solutions designed to dominate your market and capture high-intent audiences.',
      items: [
        'Multi-channel Paid Advertising (Google, Meta, LinkedIn)',
        'Advanced Retargeting and Remarketing Funnels',
        'Competitor Analysis and Market Share Expansion',
        'Automated Lead Management and CRM Integration'
      ]
    },
    section3: {
      title: 'Performance & ROAS Mastery',
      content: 'We prioritize measurable results, ensuring that every dollar of your increased budget delivers a positive return.',
      items: [
        'Continuous optimization of Return on Ad Spend (ROAS)',
        'Rigorous A/B testing of creatives and ad copy',
        'In-depth Conversion Rate Optimization (CRO)',
        'Bi-weekly strategic reviews and performance dashboards'
      ]
    }
  },
  {
    id: 'soft-marketing-seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'Permanent Organic Visibility & Authority',
    heroDescription: 'Dominating search engine results through technical excellence, strategic content, and high-authority backlink building.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How long does it take to see results?",
        a: "While technical fixes show immediate crawl improvements, sustainable organic ranking growth typically takes 3 to 6 months of consistent effort."
      },
      {
        q: "Do you follow white-hat SEO practices?",
        a: "Exclusively. we focus on high-quality content, technical performance, and ethical outreach to build lasting domain authority without risk of penalties."
      }
    ],
    section1: {
      title: 'Technical & Strategic SEO Mastery',
      content: 'Organic search is the most sustainable source of high-quality traffic. We perform deep technical audits to fix underlying architectural issues, while simultaneously aligning your content with user intent and search engine algorithms to ensure permanent visibility.'
    },
    section2: {
      title: 'SEO Implementation Pillars',
      content: 'We provide a comprehensive SEO framework designed to build and maintain your digital authority over the long term.',
      items: [
        'Advanced Technical Audits and Core Web Vitals optimization',
        'Keyword Intelligence and Content Gap Analysis',
        'On-Page Semantic Optimization and Schema integration',
        'High-Authority Backlink Building and Digital PR'
      ]
    },
    section3: {
      title: 'Sustainable Organic Growth',
      content: 'Our strategies focus on long-term results, reducing your dependence on paid advertising and establishing your brand as a leader in your industry.',
      items: [
        'Significant and permanent growth in organic search traffic',
        'Improved Domain Authority and Trust Flow metrics',
        'Higher conversion rates through targeted keyword alignment',
        'Detailed monthly performance tracking and strategic adjustments'
      ]
    }
  },
  {
    id: 'soft-marketing-sem',
    title: 'Search Engine Marketing (SEM)',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'High-Conversion Paid Search Optimization',
    heroDescription: 'Capturing immediate buyer intent with high-performance Google Ads and Social Ad campaigns optimized for maximum conversion.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you optimize ad spend?",
        a: "We focus on high-intent keywords, strict negative matching, and continuous Quality Score optimization to ensure you get the most value for every click."
      },
      {
        q: "Do you run A/B tests for ad copy?",
        a: "Yes, we continuously test different headlines and descriptions to identify the highest-performing combinations for your target audience."
      }
    ],
    section1: {
      title: 'Immediate Results & Strategic Bidding',
      content: 'Paid search allows you to connect with customers at the exact moment they are looking for your services. We manage and optimize your PPC campaigns to ensure you capture this high-intent traffic with the lowest possible Cost-Per-Click (CPC).'
    },
    section2: {
      title: 'PPC Management Solutions',
      content: 'We provide a full-service PPC management suite designed to drive immediate leads and measurable revenue.',
      items: [
        'Strategic Keyword Bidding and Management',
        'High-Conversion Ad Copywriting and Creative Design',
        'Strict Negative Keyword Filtering to reduce waste',
        'Advanced Conversion Tracking and Attribution'
      ]
    },
    section3: {
      title: 'Maximizing Return on Ad Spend (ROAS)',
      content: 'Our goal is to deliver a predictable and scalable source of leads, ensuring that your advertising budget is a true growth driver for your business.',
      items: [
        'Proven history of delivering high ROAS across channels',
        'Continuous campaign monitoring and real-time optimization',
        'Detailed reporting on clicks, conversions, and cost-per-lead',
        'Strategic audience targeting and retargeting funnels'
      ]
    }
  },
  {
    id: 'soft-marketing-social',
    title: 'Social Media Marketing',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'Engaging Brand Presence Across Social Ecosystems',
    heroDescription: 'Fostering deep brand authority and customer engagement across LinkedIn, Instagram, Meta, and Twitter via professional visual copywriting and hyper-targeted paid ads.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Which social media platforms should our business focus on?",
        a: "For B2B brands, we focus heavily on LinkedIn and Twitter. For B2C retail, we prioritize highly visual Instagram, TikTok, and Facebook ad systems."
      },
      {
        q: "Do you handle content creation and copywriting for social posts?",
        a: "Yes. We design a detailed custom monthly content calendar including custom-designed graphics, video copy, captions, and hashtag research."
      }
    ],
    section1: {
      title: 'Organic Engagement & Paid Amplification',
      content: 'Modern social media marketing requires a strategic balance between authentic organic presence and hyper-targeted paid amplification. We combine premium, informative organic content curation with sophisticated social advertising across LinkedIn, Instagram, and Meta. By crafting industry-leading copy, custom high-fidelity graphic assets, and engaging video content, we position your brand as a leading authority in your space. Our focus is on fostering deep brand equity while simultaneously driving high-conversion traffic and leads directly to your digital products and services.'
    },
    section2: {
      title: 'Full-Service Social Management',
      content: 'We manage and scale your entire social presence across multiple platforms, ensuring a consistent and polished brand voice. Our team designs a detailed custom monthly content calendar that aligns perfectly with your brand theme and marketing goals. We handle the creation of professional LinkedIn articles, engaging social updates, and stunning visual assets designed to capture attention in crowded feeds. We also configure hyper-targeted paid social ads matching specific buyer lookalike audiences, while systematically monitoring and engaging with your community through direct messages and comments.',
      items: [
        'Designing a detailed custom monthly content calendar matching your brand theme',
        'Authoring professional LinkedIn articles, engaging Twitter updates, and Instagram visuals',
        'Configuring hyper-targeted paid social ads matching specific buyer lookalikes',
        'Systematic monitoring and replying to incoming visitor direct-messages and comments'
      ]
    },
    section3: {
      title: 'Building Authentic Brand Equity',
      content: 'Upgrade your digital interactions to foster long-term community trust and organic sharing that builds a moat around your brand. Our social strategies deliver measurable growth in total brand followers, positive engagement, and organic referral traffic to your lead-capture portals. By establishing a highly consistent and visually polished brand identity across all digital feeds, we ensure your brand remains top-of-mind for your target audience. Every month, you receive detailed analytical reports monitoring your top-performing content, total impressions, and click-through metrics to guide future strategy.',
      items: [
        'Measurable growth in total brand followers, positive engagement, and organic sharing rates',
        'Establishes a highly consistent, polished visual brand identity across all digital feeds',
        'Increased referral web traffic directly from social profiles to your lead-capture portals',
        'Detailed analytical reporting monitoring top-performing content, impressions, and clicks'
      ]
    }
  },
  {
    id: 'soft-marketing-enterprise',
    title: 'For Enterprise',
    category: 'Software Services',
    parentMenu: 'Digital Marketing',
    tagline: 'Global Brand Authority & Market Dominance',
    heroDescription: 'Managing complex, high-scale digital marketing operations for global enterprises focused on sustained market leadership.',
    themeColor: 'amber',
    iconName: 'TrendingUp',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you handle multi-regional marketing?",
        a: "We execute localized SEO and ad campaigns across multiple languages and regions, ensuring brand consistency while respecting local market nuances."
      },
      {
        q: "What kind of reporting do you provide for large corporations?",
        a: "We provide high-level executive summaries alongside granular data dashboards, customized for different stakeholders within your organization."
      }
    ],
    section1: {
      title: 'Enterprise-Scale Growth Strategy',
      content: 'Large organizations require a sophisticated approach to digital marketing that balances global brand safety with local performance. We manage complex, multi-channel ecosystems, focusing on long-term authority and permanent market dominance through technical SEO and high-scale programmatic advertising.'
    },
    section2: {
      title: 'Global Marketing Solutions',
      content: 'We provide the technical and creative resources needed to manage and scale international marketing operations.',
      items: [
        'Multi-lingual SEO and International Market Expansion',
        'High-Scale Programmatic and Display Advertising',
        'Enterprise Brand Governance and Asset Management',
        'Advanced Data Science and Predictive Growth Modeling'
      ]
    },
    section3: {
      title: 'Institutional ROI & Accountability',
      content: 'We focus on high-level business outcomes, providing the transparency and security that global enterprises demand.',
      items: [
        'Sustained growth in global domain authority and market share',
        'Highly secure, enterprise-grade data tracking and attribution',
        'Dedicated senior account management and strategic consulting',
        'Comprehensive compliance and brand safety monitoring'
      ]
    }
  },
  {
    id: 'soft-edu',
    title: 'Education Management',
    category: 'Software Services',
    tagline: 'Streamlining Educational Operations',
    heroDescription: 'End-to-end management solutions for universities, schools, and colleges designed to enhance administrative efficiency and student success.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Can the system be customized for our specific curriculum?",
        a: "Yes, our education management suites are highly modular and can be tailored to match the specific academic and administrative workflows of your institution."
      },
      {
        q: "Is student data kept secure?",
        a: "Absolutely. We implement enterprise-grade encryption and strict access controls to ensure all student and administrative data remains confidential and secure."
      }
    ],
    section1: {
      title: 'Digital Transformation in Education',
      content: 'Modern educational institutions require robust digital tools to manage complex administrative tasks and provide a seamless experience for students and faculty. Our education management solutions integrate academic, financial, and administrative workflows into a single, unified platform.'
    },
    section2: {
      title: 'Our Education Software Suite',
      content: 'We provide specialized management modules designed to cover every aspect of educational administration.',
      items: [
        'University and College Enterprise Resource Planning (ERP)',
        'Comprehensive School Management Systems',
        'Integrated Hostel and Residential Management',
        'Digital Library and Resource Management',
        'Student Information Systems (SIS) and Portals'
      ]
    },
    section3: {
      title: 'Benefits for Institutions',
      content: 'Upgrade your institutional management to improve efficiency, reduce overhead, and enhance the overall learning environment for your students.',
      items: [
        'Automated academic and administrative workflows',
        'Real-time data insights for better decision-making',
        'Seamless communication between faculty, students, and parents',
        'Highly scalable architecture supporting institutional growth'
      ]
    }
  },
  {
    id: 'soft-edu-university',
    title: 'University Management',
    category: 'Software Services',
    parentMenu: 'Education',
    tagline: 'Enterprise-Grade University Administration',
    heroDescription: 'A unified platform for managing complex university ecosystems, from admissions and academics to finance and alumni.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1498243639359-2818a74e2001?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support multi-campus management?",
        a: "Yes, our system is designed to handle multiple campuses with centralized administration and localized operational controls."
      },
      {
        q: "Can we integrate existing third-party tools?",
        a: "Yes, we provide robust API integrations for existing financial, academic, and communication tools used by your university."
      }
    ],
    section1: {
      title: 'Unifying the University Ecosystem',
      content: 'Managing a university involves coordinating a vast array of departments, faculty, and students. Our University Management System provides a centralized hub that streamlines admissions, academic scheduling, financial management, and alumni relations, ensuring a cohesive experience for all stakeholders.'
    },
    section2: {
      title: 'Core University Modules',
      content: 'We provide a comprehensive range of features designed to manage every aspect of a modern university.',
      items: [
        'End-to-end Admissions and Enrollment management',
        'Advanced Academic Planning and Scheduling',
        'Integrated Financial and Fee Management',
        'Student Records and Performance Tracking',
        'Alumni Relations and Career Services portals'
      ]
    },
    section3: {
      title: 'Strategic Institutional Advantages',
      content: 'Empower your university with data-driven insights and automated workflows that improve efficiency and student outcomes.',
      items: [
        'Centralized data management for cross-departmental collaboration',
        'Automated compliance and regulatory reporting',
        'Enhanced student engagement through integrated portals',
        'Scalable infrastructure supporting large-scale institutional growth'
      ]
    }
  },
  {
    id: 'soft-edu-school',
    title: 'School Management',
    category: 'Software Services',
    parentMenu: 'Education',
    tagline: 'Comprehensive School Administration & Learning',
    heroDescription: 'Streamlining school operations and enhancing parent-teacher communication with a unified, easy-to-use platform.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1577891729319-f4871c6ec9d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is there a mobile app for parents?",
        a: "Yes, we provide dedicated iOS and Android apps for parents to track their child's attendance, grades, and school announcements in real-time."
      },
      {
        q: "Can teachers manage assignments online?",
        a: "Absolutely. Teachers can upload assignments, grade submissions, and provide feedback directly through the integrated learning management module."
      }
    ],
    section1: {
      title: 'Modernizing the School Experience',
      content: 'Our School Management System is designed to reduce administrative burden and foster a more connected school community. By automating attendance, grading, and fee collection, we allow educators to focus more on teaching and less on paperwork, while keeping parents fully informed of their child\'s progress.'
    },
    section2: {
      title: 'Integrated School Features',
      content: 'We offer a complete suite of tools tailored to the unique needs of primary and secondary educational institutions.',
      items: [
        'Real-time Attendance and Leave Management',
        'Digital Gradebooks and Progress Reporting',
        'Automated Fee Collection and Invoicing',
        'Parent-Teacher Communication and Announcement tools',
        'Integrated Learning Management System (LMS)'
      ]
    },
    section3: {
      title: 'Efficiency & Engagement Outcomes',
      content: 'Improve school efficiency and build stronger relationships with parents through a transparent and automated administrative platform.',
      items: [
        'Significant reduction in manual administrative tasks',
        'Enhanced transparency in student performance and attendance',
        'Improved fee collection rates through automated reminders',
        'Safe and secure storage of all student and staff records'
      ]
    }
  },
  {
    id: 'soft-edu-hostel',
    title: 'Hostel Management',
    category: 'Software Services',
    parentMenu: 'Education',
    tagline: 'Safe & Efficient Residential Management',
    heroDescription: 'Managing student accommodation, room allocations, and mess operations with precision and security.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1555854817-5b2260d50cbf?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Can we track visitor logs?",
        a: "Yes, our system includes a comprehensive visitor management module that tracks entries, exits, and purpose of visits for enhanced security."
      },
      {
        q: "Does it manage mess billing?",
        a: "Yes, it includes a complete mess management system for menu planning, inventory tracking, and automated student billing."
      }
    ],
    section1: {
      title: 'Residential Operational Excellence',
      content: 'Hostel management requires careful coordination of room allocations, student safety, and daily operations. Our system provides a unified platform for managing student residences, ensuring that administrative tasks are handled efficiently while maintaining a high standard of security and comfort for residents.'
    },
    section2: {
      title: 'Core Hostel Management Modules',
      content: 'We provide specialized tools for every aspect of residential administration.',
      items: [
        'Automated Room Allocation and Bed Management',
        'Student Check-in/Check-out and Attendance tracking',
        'Integrated Mess and Canteen Management',
        'Maintenance and Complaint tracking system',
        'Visitor and Security Management modules'
      ]
    },
    section3: {
      title: 'Security & Efficiency Benefits',
      content: 'Improve the safety and operational efficiency of your student accommodations with our professional management suite.',
      items: [
        'Enhanced student safety through integrated security logs',
        'Automated billing and fee collection for residential services',
        'Real-time inventory tracking for mess and maintenance',
        'Clear, transparent communication for students and staff'
      ]
    }
  },
  {
    id: 'soft-edu-library',
    title: 'Library Management',
    category: 'Software Services',
    parentMenu: 'Education',
    tagline: 'Digital Cataloging & Resource Management',
    heroDescription: 'Modernizing library operations with digital cataloging, automated circulation, and resource tracking.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support barcode scanning?",
        a: "Yes, our system is fully compatible with standard barcode and RFID scanning for fast check-outs and returns."
      },
      {
        q: "Can students reserve books online?",
        a: "Absolutely. We provide an Online Public Access Catalog (OPAC) where students can search for, reserve, and track their borrowed items."
      }
    ],
    section1: {
      title: 'The Digital Library Revolution',
      content: 'A modern library is more than just a collection of books; it is a dynamic resource hub. Our Library Management System digitizes your entire catalog, automates the circulation process, and provides students with easy access to both physical and digital resources, significantly enhancing their research capabilities.'
    },
    section2: {
      title: 'Core Library Features',
      content: 'We offer a complete suite of cataloging and circulation tools designed for high-efficiency resource management.',
      items: [
        'Digital Cataloging (MARC21, DDC compatibility)',
        'Automated Circulation (Issue/Return/Renew)',
        'Online Public Access Catalog (OPAC) for students',
        'Fine Calculation and automated payment reminders',
        'Digital Resource and E-book Management'
      ]
    },
    section3: {
      title: 'Resource Accessibility & Tracking',
      content: 'Improve the accessibility of your library resources and maintain total control over your inventory with our automated management tools.',
      items: [
        'Real-time tracking of all library assets and their status',
        'Significant reduction in manual data entry and circulation errors',
        'Enhanced student access to resources through digital portals',
        'Detailed analytical reports on resource usage and popular titles'
      ]
    }
  },
  {
    id: 'soft-edu-college',
    title: 'College Management',
    category: 'Software Services',
    parentMenu: 'Education',
    tagline: 'Unified College Administration & Academic Growth',
    heroDescription: 'A comprehensive management platform tailored for the unique administrative and academic needs of professional colleges.',
    themeColor: 'sky',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Can it handle specialized course structures?",
        a: "Yes, our system supports complex credit-based and semester-based academic structures, common in professional colleges."
      },
      {
        q: "Does it help with campus placement tracking?",
        a: "Yes, we include a dedicated module for tracking placement drives, student resumes, and industry collaborations."
      }
    ],
    section1: {
      title: 'Empowering Professional Higher Education',
      content: 'Professional colleges require administrative tools that are as specialized as the courses they offer. Our College Management System integrates academic planning, placement tracking, and financial operations into a single platform, ensuring that your institution runs smoothly and efficiently.'
    },
    section2: {
      title: 'Integrated College Modules',
      content: 'We provide a range of specialized features designed for higher education administration.',
      items: [
        'Advanced Academic and Semester Management',
        'Integrated Placement and Career Services tracking',
        'Comprehensive Faculty and Staff Management',
        'Student Performance Analytics and Mentoring tools',
        'Integrated Inventory and Asset Management'
      ]
    },
    section3: {
      title: 'Strategic Growth & Excellence',
      content: 'Drive institutional excellence with automated workflows and data-driven insights that improve academic outcomes and administrative efficiency.',
      items: [
        'Centralized management of all college operations',
        'Enhanced placement success through systematic tracking',
        'Improved academic quality through performance monitoring',
        'Secure and scalable cloud-based infrastructure'
      ]
    }
  },
  {
    id: 'soft-hr',
    title: 'HR Software Solutions',
    category: 'Software Services',
    tagline: 'Modernizing Human Capital Management',
    heroDescription: 'Cloud-based HR software designed to automate payroll, attendance, and compliance, allowing you to focus on your people.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is the payroll system compliant with local tax laws?",
        a: "Yes, our payroll module is continuously updated to ensure full compliance with the latest local tax regulations and statutory requirements."
      },
      {
        q: "Can students/employees track their own attendance?",
        a: "Yes, we provide an Employee Self-Service (ESS) portal where staff can view their attendance, apply for leave, and download payslips."
      }
    ],
    section1: {
      title: 'Automating the Employee Lifecycle',
      content: 'Managing a modern workforce requires more than just spreadsheets. Our HR software solutions automate the entire employee lifecycle, from onboarding and attendance to payroll and performance management, ensuring accuracy and efficiency at every step.'
    },
    section2: {
      title: 'Core HR Software Modules',
      content: 'We provide a comprehensive range of HR tools designed to streamline your people operations.',
      items: [
        'Automated Payroll and Tax Management',
        'Biometric and Geo-fenced Attendance tracking',
        'Centralized Employee Information Systems',
        'Automated Statutory Compliance reporting',
        'Integrated Performance and Appraisal management'
      ]
    },
    section3: {
      title: 'Strategic Workforce Advantages',
      content: 'Improve employee satisfaction and administrative efficiency with our professional HR management suite.',
      items: [
        '99.9% accuracy in payroll and tax calculations',
        'Significant reduction in manual attendance processing',
        'Improved transparency and employee self-service',
        'Seamless integration with existing financial systems'
      ]
    }
  },
  {
    id: 'soft-hr-payroll',
    title: 'Payroll Management',
    category: 'Software Services',
    parentMenu: 'HR Solutions',
    tagline: 'Accurate & Automated Payroll Processing',
    heroDescription: 'Simplify your payroll operations with automated tax calculations, direct deposits, and compliance reporting.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-04ff03473211?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it handle different salary structures?",
        a: "Yes, our system is highly flexible and can accommodate complex salary structures, including various allowances, deductions, and bonuses."
      },
      {
        q: "Can we generate automated payslips?",
        a: "Absolutely. The system generates professional, digital payslips that are automatically distributed to employees via email or the ESS portal."
      }
    ],
    section1: {
      title: 'Precision in Payroll',
      content: 'Payroll is one of the most critical functions of any organization. Our Payroll Management System eliminates manual errors and ensures that your employees are paid accurately and on time, every time, while handling all complex tax and statutory calculations in the background.'
    },
    section2: {
      title: 'Payroll Management Features',
      content: 'We offer a complete suite of tools to manage your organization\'s financial obligations to your staff.',
      items: [
        'Automated Gross-to-Net Salary Calculations',
        'Direct Bank Transfer file generation',
        'Customizable Allowances and Deductions',
        'Automated TDS and Professional Tax processing',
        'Digital Payslip generation and distribution'
      ]
    },
    section3: {
      title: 'Financial Efficiency & Compliance',
      content: 'Reduce the time spent on payroll administration and ensure total financial transparency with our automated processing engine.',
      items: [
        'Total elimination of manual calculation errors',
        'Guaranteed compliance with the latest tax regulations',
        'Seamless integration with attendance and leave data',
        'Secure and confidential storage of financial records'
      ]
    }
  },
  {
    id: 'soft-hr-attendance',
    title: 'Attendance Management',
    category: 'Software Services',
    parentMenu: 'HR Solutions',
    tagline: 'Real-Time Workforce Tracking',
    heroDescription: 'Managing employee presence and leave with biometric integration and real-time tracking.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support remote work tracking?",
        a: "Yes, our system includes geo-fencing and mobile app check-ins for remote or field-based employees."
      },
      {
        q: "Can we set custom leave policies?",
        a: "Absolutely. You can define various leave types, accrual rules, and approval workflows to match your company policy."
      }
    ],
    section1: {
      title: 'Optimizing Workforce Presence',
      content: 'Accurate attendance tracking is the foundation of efficient operations. Our Attendance Management System provides real-time visibility into your workforce presence, integrating seamlessly with biometric devices and mobile apps to provide a tamper-proof record of working hours and leave.'
    },
    section2: {
      title: 'Core Attendance Features',
      content: 'We provide a range of tracking and management tools designed for high-accuracy workforce monitoring.',
      items: [
        'Biometric and RFID integration support',
        'Geo-fenced Mobile Attendance for remote staff',
        'Automated Leave Request and Approval workflows',
        'Overtime and Shift Management controls',
        'Real-time Presence Dashboards for managers'
      ]
    },
    section3: {
      title: 'Operational Transparency & Insight',
      content: 'Improve workforce discipline and simplify leave management with our integrated attendance tracking platform.',
      items: [
        'Significant reduction in attendance-related disputes',
        'Automated calculation of payable days for payroll',
        'Improved transparency in leave balances and approvals',
        'Clear visibility into workforce availability and shift coverage'
      ]
    }
  },
  {
    id: 'soft-hr-employee',
    title: 'Employee Management',
    category: 'Software Services',
    parentMenu: 'HR Solutions',
    tagline: 'Centralized Talent Information',
    heroDescription: 'A unified database for managing the entire employee lifecycle, from recruitment to retirement.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is employee data secure?",
        a: "Yes, we use industry-standard encryption and role-based access controls to ensure that sensitive personal data is only visible to authorized personnel."
      },
      {
        q: "Can employees update their own profiles?",
        a: "Yes, the Self-Service portal allows employees to update their personal details, contact information, and professional documents."
      }
    ],
    section1: {
      title: 'Centralizing the Human Resource',
      content: 'Effective HR starts with accurate data. Our Employee Management System provides a centralized, secure repository for all employee information, documents, and history, ensuring that your HR team has the data they need to make informed decisions at their fingertips.'
    },
    section2: {
      title: 'Core Management Features',
      content: 'We offer a complete suite of tools to manage your organization\'s most valuable asset: your people.',
      items: [
        'Digital Employee Profiles and Document Vault',
        'Onboarding and Offboarding checklists',
        'Asset Allocation and Tracking management',
        'Organizational Chart and Directory management',
        'Employee Self-Service (ESS) portals'
      ]
    },
    section3: {
      title: 'Organizational Clarity & Efficiency',
      content: 'Reduce manual record-keeping and improve data accuracy with our unified employee management platform.',
      items: [
        'Single source of truth for all employee-related data',
        'Significant reduction in HR administrative overhead',
        'Improved compliance through systematic document tracking',
        'Better employee engagement through self-service tools'
      ]
    }
  },
  {
    id: 'soft-hr-compliance',
    title: 'Statutory Compliance',
    category: 'Software Services',
    parentMenu: 'HR Solutions',
    tagline: 'Automated Regulatory Peace of Mind',
    heroDescription: 'Ensuring your organization remains fully compliant with the latest labor laws and statutory requirements.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-04ff03473211?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How do you stay updated with law changes?",
        a: "Our system is updated in real-time by a dedicated legal and compliance team to reflect the latest labor law amendments and statutory changes."
      },
      {
        q: "Does it generate automated returns?",
        a: "Yes, the system automatically generates PF, ESI, and other statutory return files in the exact format required by the respective authorities."
      }
    ],
    section1: {
      title: 'Mitigating Regulatory Risk',
      content: 'Navigating complex labor laws can be challenging for any organization. Our Statutory Compliance module automates the tracking and reporting of PF, ESI, LWF, and professional tax, ensuring that your business remains in good standing with the authorities while avoiding costly penalties.'
    },
    section2: {
      title: 'Compliance Management Features',
      content: 'We offer a robust set of tools designed to ensure total regulatory adherence for your workforce.',
      items: [
        'Automated PF and ESI calculation and reporting',
        'Professional Tax and LWF management',
        'Automated generation of statutory registers and forms',
        'Audit-ready compliance reports and archives',
        'Real-time updates on labor law amendments'
      ]
    },
    section3: {
      title: 'Risk Reduction & Efficiency',
      content: 'Eliminate the risk of compliance failures and reduce the manual effort required for statutory reporting.',
      items: [
        'Total peace of mind through automated regulatory tracking',
        'Significant reduction in manual filing and reporting time',
        'Zero risk of late fees or penalties through automated alerts',
        'Transparent and audit-ready compliance records'
      ]
    }
  },
  {
    id: 'soft-hr-performance',
    title: 'Performance Management',
    category: 'Software Services',
    parentMenu: 'HR Solutions',
    tagline: 'Driving Organizational Excellence',
    heroDescription: 'Enhancing productivity through structured goal setting, continuous feedback, and automated appraisals.',
    themeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552664688-cf412dd27db2?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Can we customize the appraisal forms?",
        a: "Yes, you can design custom performance review templates, rating scales, and goal-setting frameworks to match your organizational culture."
      },
      {
        q: "Does it support 360-degree feedback?",
        a: "Absolutely. The system allows for feedback from peers, subordinates, and external stakeholders for a comprehensive performance view."
      }
    ],
    section1: {
      title: 'Nurturing High-Performance Culture',
      content: 'Our Performance Management System transforms the traditional appraisal process into a continuous growth journey. By aligning individual goals with organizational objectives and providing a platform for regular feedback, we help you build a motivated and high-performing workforce.'
    },
    section2: {
      title: 'Performance Tracking Features',
      content: 'We provide a range of tools designed to measure and improve employee productivity and growth.',
      items: [
        'Customizable OKR and Goal Tracking management',
        'Automated Performance Appraisal cycles',
        'Continuous Feedback and Recognition portals',
        '360-degree and Peer Review capabilities',
        'Performance Analytics and Skill Mapping tools'
      ]
    },
    section3: {
      title: 'Growth & Productivity Outcomes',
      content: 'Improve employee alignment and drive organizational success through structured performance management.',
      items: [
        'Enhanced alignment between individual and company goals',
        'Improved employee engagement through regular feedback',
        'Data-driven insights for promotions and increments',
        'Reduced bias in performance reviews through structured data'
      ]
    }
  },
  {
    id: 'soft-erp',
    title: 'Corporate ERP Solutions',
    category: 'Software Services',
    tagline: 'Empowering Enterprise Excellence',
    heroDescription: 'Next-generation Enterprise Resource Planning (ERP) software tailored to streamline your core business processes and drive sustainable growth.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is the ERP system cloud-based?",
        a: "Yes, our ERP solutions are primarily cloud-based, providing real-time access and data synchronization across all your business locations."
      },
      {
        q: "Can it handle complex manufacturing workflows?",
        a: "Absolutely. Our Manufacturing ERP module is designed specifically for complex production environments, including bill of materials (BOM) and shop floor control."
      }
    ],
    section1: {
      title: 'A Unified Business Architecture',
      content: 'Disparate systems lead to data silos and operational inefficiency. Our Corporate ERP solutions integrate your manufacturing, inventory, accounting, and customer relations into a single, cohesive architecture, providing a real-time view of your entire business operations.'
    },
    section2: {
      title: 'Our ERP Software Suite',
      content: 'We provide specialized modules designed to optimize every key department within your enterprise.',
      items: [
        'Advanced Manufacturing and Production Planning',
        'Real-time Inventory and Supply Chain Management',
        'Professional Enterprise Accounting and Finance',
        'High-Performance CRM and Sales Automation',
        'Unified Billing and Invoicing systems'
      ]
    },
    section3: {
      title: 'Operational Excellence & Scalability',
      content: 'Upgrade your corporate infrastructure with a scalable and secure ERP platform that grows with your business.',
      items: [
        'Total elimination of redundant data entry',
        'Enhanced cross-departmental collaboration',
        'Real-time financial and operational visibility',
        'Robust security and regulatory compliance'
      ]
    }
  },
  {
    id: 'soft-erp-manufacturing',
    title: 'Manufacturing ERP',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Precision Production Management',
    heroDescription: 'Optimizing your production floor with integrated planning, resource allocation, and quality control.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support Bill of Materials (BOM)?",
        a: "Yes, our system includes multi-level BOM management with real-time inventory checks and cost estimation."
      },
      {
        q: "Can we track machine downtime?",
        a: "Absolutely. The shop floor control module tracks machine status, downtime, and overall equipment effectiveness (OEE) in real-time."
      }
    ],
    section1: {
      title: 'Streamlining the Production Cycle',
      content: 'Modern manufacturing requires precise coordination of materials, machines, and labor. Our Manufacturing ERP provides a unified platform for managing the entire production cycle, from demand forecasting and resource planning to shop floor execution and quality assurance.'
    },
    section2: {
      title: 'Core Manufacturing Modules',
      content: 'We provide specialized tools for every aspect of industrial production management.',
      items: [
        'Advanced Production Planning and Scheduling (APS)',
        'Multi-level Bill of Materials (BOM) management',
        'Real-time Shop Floor Control and Monitoring',
        'Integrated Quality Management and Inspection',
        'Preventive Maintenance for machines and equipment'
      ]
    },
    section3: {
      title: 'Efficiency & Quality Outcomes',
      content: 'Improve your production throughput and reduce waste with our integrated manufacturing management platform.',
      items: [
        'Significant reduction in production lead times',
        'Improved resource utilization and reduced waste',
        'Enhanced product quality through systematic inspection',
        'Total transparency in production costs and margins'
      ]
    }
  },
  {
    id: 'soft-erp-inventory',
    title: 'Inventory Management',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Real-Time Supply Chain Visibility',
    heroDescription: 'Managing your global inventory with precision, automated reordering, and multi-location tracking.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support barcode scanning?",
        a: "Yes, our system is fully compatible with mobile barcode and RFID scanning for fast stock updates and order fulfillment."
      },
      {
        q: "Can it manage multiple warehouses?",
        a: "Absolutely. You can track stock levels across multiple locations with centralized control and automated inter-warehouse transfers."
      }
    ],
    section1: {
      title: 'Optimizing the Supply Chain',
      content: 'Inventory represents a significant portion of capital for most businesses. Our Inventory Management System provides real-time visibility into your stock levels, automating reordering and tracking movements across your entire supply chain to ensure you never miss a sale or overstock.'
    },
    section2: {
      title: 'Inventory Management Features',
      content: 'We offer a complete suite of tools to manage your global inventory with total precision.',
      items: [
        'Real-time Multi-location Stock Tracking',
        'Automated Reorder Points and Low-stock Alerts',
        'Barcode and RFID integration for fast processing',
        'Batch and Serial Number tracking for traceability',
        'Automated Purchase Order (PO) generation'
      ]
    },
    section3: {
      title: 'Inventory Accuracy & Savings',
      content: 'Reduce carrying costs and improve order fulfillment with our integrated inventory tracking engine.',
      items: [
        'Up to 99.9% inventory data accuracy',
        'Significant reduction in stock-outs and overstocks',
        'Improved warehouse efficiency and fulfillment speed',
        'Enhanced traceability for compliance and returns'
      ]
    }
  },
  {
    id: 'soft-erp-accounting',
    title: 'Enterprise Accounting',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Unified Financial Intelligence',
    heroDescription: 'Transforming your financial operations with automated bookkeeping, real-time reporting, and global compliance.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Is it compliant with GST/VAT regulations?",
        a: "Yes, our accounting module is configured to handle complex tax structures and automatically generates tax-ready financial reports."
      },
      {
        q: "Can we generate real-time balance sheets?",
        a: "Absolutely. All financial data is updated in real-time, allowing you to generate Balance Sheets, P&L statements, and Cash Flow reports instantly."
      }
    ],
    section1: {
      title: 'Financial Clarity & Control',
      content: 'Effective financial management is the cornerstone of business success. Our Enterprise Accounting software provides a unified platform for managing your general ledger, accounts payable/receivable, and cash flow, providing the real-time financial intelligence needed to drive strategic decisions.'
    },
    section2: {
      title: 'Accounting Software Features',
      content: 'We provide a range of specialized tools for professional financial management.',
      items: [
        'Unified General Ledger and Bookkeeping',
        'Automated Accounts Payable and Receivable',
        'Real-time Multi-currency and Global Compliance',
        'Integrated Tax calculation and reporting',
        'Advanced Budgeting and Financial Forecasting'
      ]
    },
    section3: {
      title: 'Strategic Financial Outcomes',
      content: 'Improve your financial accuracy and simplify compliance with our integrated enterprise accounting engine.',
      items: [
        'Total elimination of manual bookkeeping errors',
        'Real-time visibility into company-wide financial health',
        'Significant reduction in month-end closing times',
        'Audit-ready financial records and transparency'
      ]
    }
  },
  {
    id: 'soft-erp-crm',
    title: 'Customer Relations (CRM)',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Deepening Customer Connections',
    heroDescription: 'Building stronger customer relationships with integrated lead tracking, sales automation, and service management.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Can we track lead sources?",
        a: "Yes, our CRM tracks exactly where each lead came from (SEO, Social, PPC) to help you measure marketing effectiveness."
      },
      {
        q: "Does it include sales forecasting?",
        a: "Absolutely. The system uses your pipeline data to provide accurate sales forecasts and help you plan your resources accordingly."
      }
    ],
    section1: {
      title: 'A Customer-Centric Business',
      content: 'Relationships are the lifeblood of business. Our CRM module provides a unified 360-degree view of your customers, integrating communications, sales pipelines, and service history to ensure that every interaction is meaningful and every lead is followed up.'
    },
    section2: {
      title: 'Core CRM Features',
      content: 'We provide a complete suite of tools to manage your customer lifecycle with total precision.',
      items: [
        'Unified Lead and Opportunity Management',
        'Sales Pipeline Visualization and Automation',
        'Integrated Email and Communication Tracking',
        'Customer Service Ticketing and Support',
        'Advanced Sales Analytics and Forecasting'
      ]
    },
    section3: {
      title: 'Growth & Retention Benefits',
      content: 'Improve your sales conversion rates and customer retention with our integrated relationship management platform.',
      items: [
        'Significant increase in sales team productivity',
        'Improved lead conversion ratios through automated follow-ups',
        'Enhanced customer satisfaction through personalized service',
        'Clear visibility into sales performance and trends'
      ]
    }
  },
  {
    id: 'soft-erp-billing',
    title: 'Enterprise Billing',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Seamless Revenue Operations',
    heroDescription: 'Automating your revenue cycle with integrated invoicing, payment tracking, and automated reminders.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-04ff03473211?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "Does it support recurring billing?",
        a: "Yes, we provide advanced subscription and recurring billing modules with automated invoice generation."
      },
      {
        q: "Can customers pay online?",
        a: "Absolutely. Our billing system integrates with all major payment gateways for seamless online payment processing."
      }
    ],
    section1: {
      title: 'Accelerating the Revenue Cycle',
      content: 'Efficient billing is critical for cash flow. Our Enterprise Billing module automates the generation of professional invoices, tracks payments in real-time, and sends automated reminders for overdue accounts, ensuring your revenue cycle is as fast and friction-less as possible.'
    },
    section2: {
      title: 'Integrated Billing Features',
      content: 'We offer a robust set of tools designed to manage your organization\'s revenue operations with total accuracy.',
      items: [
        'Automated Invoice and Quote Generation',
        'Recurring Subscription Billing management',
        'Integrated Online Payment Gateway support',
        'Automated Payment Reminders and Dunning',
        'Real-time Revenue and Aging reports'
      ]
    },
    section3: {
      title: 'Cash Flow & Accuracy Benefits',
      content: 'Improve your cash flow and reduce administrative overhead with our automated billing and invoicing platform.',
      items: [
        'Significant reduction in payment turnaround times',
        'Total elimination of manual invoicing errors',
        'Improved transparency in customer payment status',
        'Reduced administrative time spent on collections'
      ]
    }
  },
  {
    id: 'soft-erp-custom',
    title: 'Custom ERP',
    category: 'Software Services',
    parentMenu: 'Corporate Softwares (ERP)',
    tagline: 'Bespoke Enterprise Solutions',
    heroDescription: 'Building a custom ERP architecture designed specifically for the unique workflows of your business.',
    themeColor: 'indigo',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
    faqs: [
      {
        q: "How long does a custom ERP take to build?",
        a: "The timeline depends on the complexity of your requirements, but typically ranges from 4 to 12 months for a fully bespoke solution."
      },
      {
        q: "Do we own the source code?",
        a: "Yes, for fully custom solutions, we provide the option for full IP ownership and source code transfer upon completion."
      }
    ],
    section1: {
      title: 'ERP Tailored to Your Vision',
      content: 'Standard software doesn\'t always fit non-standard business models. Our Custom ERP services involve building a bespoke enterprise architecture from the ground up, designed specifically to match your unique operational workflows and strategic goals, providing a true competitive advantage.'
    },
    section2: {
      title: 'Custom ERP Development Phases',
      content: 'We follow a rigorous development process to ensure your custom ERP meets the highest standards of performance and usability.',
      items: [
        'Deep Operational Workflow Analysis and Discovery',
        'Bespoke Database Architecture and UI/UX design',
        'Agile Module Development and Iterative Testing',
        'System-wide Integration and Data Migration',
        'Post-deployment Support and Continuous Evolution'
      ]
    },
    section3: {
      title: 'Competitive Strategic Advantage',
      content: 'Empower your business with a unique digital infrastructure that perfectly matches your operations and supports your long-term vision.',
      items: [
        'Software that maps perfectly to your unique business processes',
        'Total control over the feature roadmap and evolution',
        'High performance optimized for your specific data volumes',
        'Enhanced security through a proprietary, non-standard architecture'
      ]
    }
  },
];

