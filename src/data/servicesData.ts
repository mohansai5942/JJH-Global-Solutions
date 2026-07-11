import { SectorCategory } from '../types';

export const sectorsData: SectorCategory[] = [
  {
    id: 'hr-solutions',
    title: 'HR Solutions',
    iconName: 'Users',
    tagline: 'Comprehensive Workforce & Corporate Governance Systems',
    description: 'Empowering enterprise growth through highly targeted recruitment, structural HR auditing, performance indexing, and vetted contract or permanent staffing solutions.',
    colorTheme: {
      primary: 'text-[#0F172A] border-[#0F172A]',
      secondary: 'bg-slate-50 text-slate-900',
      accent: 'blue',
      bgGradient: 'from-blue-600/5 to-blue-900/5'
    },
    services: [
      {
        id: 'hr-recruitment',
        name: 'Recruitment Services',
        tagline: 'Securing High-Yield Technical & Executive Leaders',
        shortDescription: 'Customized talent scouting, profile screening, behavioral matching, and permanent placements.',
        longDescription: 'Our Recruitment Services team coordinates with scaling corporate companies to bridge executive and technical talent needs, ensuring full cultural and competency alignment.',
        benefits: [
          'Direct access to 150K+ vetted expert profiles',
          '90-day candidate replacement commitment in corporate agreements',
          'Rigorous background checks and technical skill evaluations'
        ],
        metrics: [
          { label: 'Vetted Profiles', value: '150K+' },
          { label: 'Avg Time to Fill', value: '9 Days' }
        ],
        faq: [
          { question: 'What domains do you cover?', answer: 'Software Development, Product Management, FinTech, and Executive Administration.' }
        ],
        iconName: 'UserCheck',
        brochureAccent: 'blue'
      },
      {
        id: 'hr-consulting',
        name: 'HR Consulting',
        tagline: 'Compliance & Workspace Policy Formulations',
        shortDescription: 'Fractional HR support, corporate policy writing, compliance audits, and conflict management.',
        longDescription: 'Providing enterprise partners with modern employee handbooks, performance evaluation blueprints, and state-specific compliance checklists.',
        benefits: [
          '100% compliance alignment with national and state labor regulations',
          'Saves up to 45% on administrative HR overhead costs',
          'Custom employee handbooks tailored to company culture'
        ],
        metrics: [
          { label: 'Active Clients', value: '85+' },
          { label: 'Compliance Rating', value: '100%' }
        ],
        faq: [
          { question: 'Is this suitable for early startups?', answer: 'Yes, we provide scalable hourly packages perfect for early stage and growing businesses.' }
        ],
        iconName: 'Briefcase',
        brochureAccent: 'blue'
      }
    ]
  },
  {
    id: 'training-placement',
    title: 'Training & Placement',
    iconName: 'Award',
    tagline: 'Upskilling Academic Talents for Modern Corporate Careers',
    description: 'Direct collaboration with Engineering & Degree Colleges to conduct career bootcamps, structured virtual internships, and bulk campus hiring drives.',
    colorTheme: {
      primary: 'text-[#0F172A] border-[#0F172A]',
      secondary: 'bg-slate-50 text-slate-900',
      accent: 'blue',
      bgGradient: 'from-blue-600/5 to-blue-800/5'
    },
    services: [
      {
        id: 'tp-training-dev',
        name: 'Training & Development',
        tagline: 'Industry-Standard Skill Building for Academic Campuses',
        shortDescription: 'Comprehensive technical bootcamps, resume grooming, and aptitude coaching.',
        longDescription: 'Accelerating student capabilities in high-demand technologies like React, Cloud Architecture, and Machine Learning to drive college campus placement metrics.',
        benefits: [
          'Syllabus designed by veteran industry software architects',
          'Weekly mock reviews and technical code support',
          'Direct industry certification for participating students'
        ],
        metrics: [
          { label: 'Students Trained', value: '25k+' },
          { label: 'Institutes Partnered', value: '120+' }
        ],
        faq: [
          { question: 'Who leads these sessions?', answer: 'Senior software architects and corporate technical trainers with active industry credentials.' }
        ],
        iconName: 'Laptop',
        brochureAccent: 'blue'
      },
      {
        id: 'tp-internships',
        name: 'Internships',
        tagline: 'Practical Corporate Engagement for Fresh Graduates',
        shortDescription: 'Structured virtual or site-based technical internships with real-world project tracking.',
        longDescription: 'Providing college students with a robust stepping stone into full-time roles via corporate-sponsored development projects and mentoring.',
        benefits: [
          'Earn verified certificates of internship and recommendation credentials',
          'Work directly with senior industry guides and engineers',
          'Direct path to entry-level software development roles'
        ],
        metrics: [
          { label: 'Active Interns', value: '3,200+' },
          { label: 'Placement Rate', value: '88%' }
        ],
        faq: [
          { question: 'Are these internships recognized?', answer: 'Yes, all JJH Global internships are fully certified and recognized across major corporate sectors.' }
        ],
        iconName: 'Compass',
        brochureAccent: 'sky'
      }
    ]
  },
  {
    id: 'education',
    title: 'Education Sector',
    iconName: 'GraduationCap',
    tagline: 'Strategic Global Admissions & Accredited Alternative Portals',
    description: 'Providing student counseling for elite overseas universities, recognized remote distance learning portals, and verified Indian college placements.',
    colorTheme: {
      primary: 'text-[#0F172A] border-[#0F172A]',
      secondary: 'bg-slate-50 text-slate-900',
      accent: 'blue',
      bgGradient: 'from-blue-600/5 to-sky-600/5'
    },
    services: [
      {
        id: 'edu-overseas',
        name: 'Overseas Education',
        tagline: 'Securing Admissions in Elite Universities Globally',
        shortDescription: 'Comprehensive global profile counseling, visa dossiers compilement, and scholarship aid.',
        longDescription: 'Guiding students to top university campuses in the US, UK, Canada, and EU with end-to-end SOP preparation, exam coaching, and visa interviews.',
        benefits: [
          'Direct ties with 500+ top-ranked international universities',
          'Professional coaching for IELTS, TOEFL, GRE, and SAT profiles',
          'Exceptional success rate on global visa applications'
        ],
        metrics: [
          { label: 'Visa Success Ratio', value: 'High' },
          { label: 'Universities Partnered', value: '500+' }
        ],
        faq: [
          { question: 'Do you help with student housing?', answer: 'Yes, our global network actively assists with post-visa hostel or off-campus housing arrangements.' }
        ],
        iconName: 'Globe',
        brochureAccent: 'blue'
      },
      {
        id: 'edu-open-10th',
        name: 'Open 10th alternative schooling',
        tagline: 'UGC-DEB & Ministry of Education Approved Credentials',
        shortDescription: 'Flexible school secondary certifications via NIOS and state boards.',
        longDescription: 'Helping private, alternative, or remote learners secure valid matriculation certificates without classroom residency constraints.',
        benefits: [
          'Equal legal status for government jobs and college admissions',
          'Flexible subject combinations suited to personal capability',
          'Weekend doubt-clearing workshops and mock examinations'
        ],
        metrics: [
          { label: 'Program Success', value: '94.2%' },
          { label: 'Active Students', value: '1,500+' }
        ],
        faq: [
          { question: 'What is the minimum age?', answer: 'Any candidate aged 14 or above is eligible to apply for NIOS registration support.' }
        ],
        iconName: 'BookOpen',
        brochureAccent: 'blue'
      }
    ]
  },
  {
    id: 'software-services',
    title: 'Software Services',
    iconName: 'Cpu',
    tagline: 'Agile Custom Digital Engineering & Marketing Solutions',
    description: 'Architecting ultra-responsive mobile applications, progressive web layouts, immersive custom game servers, graphics, and data-driven marketing campaigns.',
    colorTheme: {
      primary: 'text-[#0F172A] border-[#0F172A]',
      secondary: 'bg-slate-50 text-slate-900',
      accent: 'blue',
      bgGradient: 'from-slate-700/5 to-blue-900/5'
    },
    services: [
      {
        id: 'soft-mobile',
        name: 'Mobile App Development',
        tagline: 'Native Android & iOS Custom Enterprise Pipelines',
        shortDescription: 'Hybrid, React Native, iOS, and Android applications with offline-first support.',
        longDescription: 'High-performance mobile app designs built for high scaling, robust cybersecurity encryption, and intuitive visual interfaces.',
        benefits: [
          'Offline-first synchronization with secure local data layers',
          'Modern native transitions and interactive micro-animations',
          'Full App Store and Play Store orchestration and continuous maintenance support'
        ],
        metrics: [
          { label: 'Mobile Apps Vetted', value: '45+' },
          { label: 'Platform Availability', value: '99.9%' }
        ],
        faq: [
          { question: 'What technologies do you use?', answer: 'React Native, Flutter, Swift, and Kotlin for peak native performances.' }
        ],
        iconName: 'Cpu',
        brochureAccent: 'blue'
      },
      {
        id: 'soft-web',
        name: 'Web Development',
        tagline: 'Next-Generation Full-Stack Enterprise Portals',
        shortDescription: 'Custom React dashboards, lightning-fast Vite static indexes, and robust Node.js servers.',
        longDescription: 'Engineering premium responsive web platforms with perfect accessibility scores, beautiful typography pairings, and clean database integrations.',
        benefits: [
          'SEO optimized indexes for maximum organic search ranking visibility',
          'Responsive grid structures for seamless smartphone and widescreen scaling',
          'Fully optimized cloud-native APIs with comprehensive monitoring'
        ],
        metrics: [
          { label: 'Web Systems Delivered', value: '110+' },
          { label: 'Performance Score', value: 'High' }
        ],
        faq: [
          { question: 'Do you provide web maintenance?', answer: 'Yes, we provide web AMC support plans with automatic security patches.' }
        ],
        iconName: 'Laptop',
        brochureAccent: 'blue'
      }
    ]
  }
];
