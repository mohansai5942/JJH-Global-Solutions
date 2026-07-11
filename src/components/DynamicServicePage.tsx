import React, { useState } from 'react';
import { CustomPage } from '../data/pagesData';
import { 
  ArrowLeft, CheckCircle2, Shield, Layers, ArrowRight,
  UserCheck, Users, TrendingUp, Briefcase, Clock, FileText,
  GraduationCap, Laptop, Bell, Zap, Globe, Award, Compass,
  Smartphone, Gamepad2, Palette, BookOpen, ChevronDown, ChevronUp,
  Cpu, Terminal, Code, ShieldCheck
} from 'lucide-react';

interface DynamicServicePageProps {
  page: CustomPage;
  onBack: () => void;
  onEnquire: () => void;
}

export default function DynamicServicePage({ page, onBack, onEnquire }: DynamicServicePageProps) {
  
  // State manager for collapsible FAQ sections
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Custom theme gradient backgrounds - updated to be professional blue-focused
  const themeGradients = {
    indigo: 'from-blue-600 to-blue-700',
    emerald: 'from-blue-500 to-blue-600',
    sky: 'from-blue-600 to-blue-700',
    amber: 'from-blue-600 to-blue-700',
    rose: 'from-blue-600 to-blue-700',
    violet: 'from-blue-600 to-blue-700',
    blue: 'from-blue-600 to-blue-800'
  };

  const activeGradient = themeGradients[page.themeColor] || themeGradients.indigo;

  // Render appropriate icons based on the page's iconName property
  const renderPageIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className={className} />;
      case 'Users': return <Users className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      case 'Bell': return <Bell className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Gamepad2': return <Gamepad2 className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'Code': return <Code className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      default: return <Layers className={className} />;
    }
  };

  // Map of professional, topic-relevant Unsplash images for each page ID
  const getPageImage = (id: string, category: string, title: string): string => {
    const images: Record<string, string> = {
      // HR Solutions
      'hr-recruitment': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      'hr-consulting': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      'hr-performance': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      'hr-staffing-permanent': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      'hr-staffing-temporary': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      'hr-staffing-contract': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      'hr-staffing-workforce': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      
      // Software Services
      'soft-mobile-android': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
      'soft-mobile-ios': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      'soft-mobile-hybrid': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'soft-mobile-mvp': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'soft-web-saas': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      'soft-web-ecommerce': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      'soft-web-pwa': 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80',
      'soft-web-crm': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'soft-game-unity': 'https://images.unsplash.com/photo-1580234810907-b40315b76418?auto=format&fit=crop&w=800&q=80',
      'soft-game-html5': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      'soft-game-lobby': 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80',
      'soft-graphic-uiux': 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80',
      'soft-graphic-brand': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      'soft-graphic-marketing': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      'soft-marketing-seo': 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80',
      'soft-marketing-sem': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'soft-marketing-social': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      'soft-marketing-content': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      
      // Education
      'edu-overseas': 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
      'edu-open-10th': 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      'edu-open-inter': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
      'edu-online-degree': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      'edu-btech': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'edu-mba': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      'edu-mtech': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'edu-mbbs': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      'edu-bcom': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      'edu-bsc': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      'edu-bsc-nursing': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      'edu-ba': 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
      'edu-bba': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      'edu-bca': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    };

    if (page.imageUrl) return page.imageUrl;
    if (images[id]) return images[id];

    // Direct fallbacks by category
    if (category === 'HR Solutions') {
      return 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80';
    } else if (category === 'Software Services') {
      return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
    } else {
      return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
    }
  };

  // Map of page-specific FAQ lists to ensure high content density and relevancy
  const getPageFaqs = (id: string, category: string): { q: string, a: string }[] => {
    if (page.faqs && page.faqs.length > 0) return page.faqs;
    const hrFaqs = [
      {
        q: "What is your standard turnaround time (TAT) for candidate shortlisting?",
        a: "Our typical recruitment lifecycle delivers a highly targeted, pre-vetted candidate shortlist within 5 to 9 business days, depending on the niche technical specifications required."
      },
      {
        q: "How does the 90-day free replacement policy operate?",
        a: "Should an onboarded candidate depart or fail to meet specified corporate benchmarks within the first 90 days, we initiate a priority scouting cycle to transition a matching replacement at zero additional cost."
      },
      {
        q: "Do you handle complete regulatory payroll, tax, and insurance compliance?",
        a: "Yes. Under our co-employer and staffing frameworks, we manage complete payroll execution, tax withholdings, ESI, PF registrations, statutory compliance audits, and liability insurance."
      }
    ];

    const softFaqs = [
      {
        q: "Do we receive 100% ownership of the custom source code and assets?",
        a: "Yes, absolutely. Upon successful milestone completion and project handoff, 100% of the custom-written source code, visual designs, database schemas, and intellectual property rights are legally transferred to your enterprise."
      },
      {
        q: "What methodology do you utilize to ensure sprint deadlines are met?",
        a: "We utilize strict Agile-Scrum methodologies. We organize work in 2-week sprints, coordinate daily stand-ups, provide transparent project management boards for tracking, and deliver functional builds at the end of every cycle."
      },
      {
        q: "How do you handle post-launch application maintenance and security updates?",
        a: "We offer structured maintenance agreements for ongoing support. This includes regular server monitoring, bug-fixing patches, API dependency updates, and continuous security scanning."
      }
    ];

    const eduFaqs = [
      {
        q: "Are the distance degrees and open school certifications globally recognized?",
        a: "Yes, entirely. We exclusively coordinate admissions with UGC-DEB approved, AICTE-accredited, and NAAC A+ rated universities. These qualifications are fully recognized by global employers and public service commissions."
      },
      {
        q: "How do your academic consultants assist with the overseas admission visa process?",
        a: "We provide comprehensive support: from shortlisting target universities to preparing Statement of Purpose (SOP) essays, translating credential dossiers, managing financial audits, and conducting extensive mock visa interviews."
      },
      {
        q: "What academic and counseling resources are provided to students during their studies?",
        a: "Every enrolled student is assigned a dedicated academic mentor. We provide access to digital learning repositories, exam preparation modules, regular weekend webinars, and direct liaison with university administrative offices."
      }
    ];

    if (id.startsWith('hr-') || category === 'HR Solutions') return hrFaqs;
    if (id.startsWith('soft-') || category === 'Software Services') return softFaqs;
    return eduFaqs;
  };

  // Map of page-specific descriptions for Section 2 and Section 3 items to eliminate repetition
  const getItemDescription = (pageId: string, section: 'section2' | 'section3', itemTitle: string, index: number, pageTitle: string): string => {
    const cleanTitle = itemTitle.toLowerCase().trim();
    
    const dict: Record<string, string> = {
      // Recruitment & Staffing
      'requirement mapping & job role profiling': 'We collaborate with your hiring managers to map out exact technical skills, leadership values, and team alignment metrics for the role.',
      'multi-channel sourcing (database, headhunting, networks)': 'Our team searches through exclusive talent vaults, industry registries, and passive candidate networks to source high-caliber candidates.',
      'pre-screening & multi-level technical/behavioral auditing': 'Candidates undergo rigorous technical evaluation, peer-reviews, and emotional intelligence auditing before the shortlist is finalized.',
      'client interview coordination & feedback loop': 'We manage the interview scheduling and feedback cycles, ensuring communication stays rapid, clear, and professional.',
      'onboarding support, reference vetting & transition guidance': 'We perform intensive background verification, reference auditing, and help coordinate the final offer-to-hire transition phase.',
      'access to a vetted database of 150,000+ top-tier professional profiles': 'Gives you instant access to pre-evaluated top performers, speeding up shortlisting cycles dramatically.',
      'average industry-best turn-around-time (tat) of only 9 business days': 'Our highly streamlined process gets qualified specialists in front of your decision-makers within just over a week.',
      '90-day free candidate replacement clause integrated into standard agreements': 'Provides reassurance that we will backfill the position at no cost if the candidate departs within the first quarter.',
      'specialized headhunting teams for niche technologies and executive c-suite positions': 'Experienced executive search consultants locate and engage hard-to-reach corporate leadership and niche architects.',

      // HR Consulting & Performance
      'organizational health checkup & gap analysis': 'We assess your current operational team hierarchy to find workflow bottlenecks, culture blocks, and productivity leakages.',
      'corporate policy & employee handbook formulation': 'We write legally compliant, comprehensive handbooks covering workspace conducts, benefits, leaves, and core organizational guidelines.',
      'performance appraisal framework design': 'We set up objective key result (OKR) tracking and appraisal architectures to foster a culture of accountability.',
      'compliance & labor law registry setup': 'We audit and configure your company registry to satisfy all national and state-specific statutory regulations, ESI, PF, and labor codes.',
      'post-implementation audit & continuous tuning': 'We review the newly deployed processes quarterly to resolve friction, train supervisors, and maintain peak workforce performance.',
      'comprehensive knowledge of statutory labor regulations and union compliance': 'Minimizes legal liabilities and audit compliance issues across regional and national operating hubs.',
      'tailor-made performance management structures that reduce employee turnover by 15%': 'Aligns worker goals with corporate objectives, boosting employee retention and workspace satisfaction.',
      'transparent audits highlighting clear legal vulnerabilities and efficiency blocks': 'Delivers actionable management insights and risk mitigation maps to protect corporate integrity.',
      'decades of collective experience counseling multinational enterprises and public institutions': 'Brings seasoned, senior global expertise and battle-tested change-management protocols to your company.',

      // Web App & Software Shared
      'interactive, modular frontends built with react, vite, and tailwind layouts': 'We write declarative, fast React components bundled with Vite and styled with fully responsive Tailwind layouts.',
      'fast and secure restful or graphql apis engineered to deliver data efficiently': 'We construct type-safe server-side routes with modern frameworks, implementing advanced query optimization and secure headers.',
      'robust relational or document databases optimized for rapid read/write metrics': 'Our database schemas utilize Postgres or MongoDB with connection pooling and caching to serve concurrent requests instantly.',
      'dynamic visual charts, drag-and-drop components, and real-time collaboration engines': 'We integrate charts and interactives that respond to user interactions for deep software utility.',
      'exhaustive unit and integration tests to prevent regression': 'Guarantees that new feature rollouts or platform updates will never break your core existing workflows.',
      'tailored, elegant dark and light theme profiles matching corporate visual guidelines': 'Creates a polished, eye-safe user interface that matches your exact brand palette and aesthetics.',
      'strict type-safety utilizing typescript across both frontend and backend modules': 'Prevents runtime errors, facilitates rapid code refactoring, and documents code interfaces automatically.',
      'clean, modular code structures that allow new developers to onboard in hours': 'Reduces technical debt and enables frictionless engineering scaling as your business grows.',
      
      // UI/UX Design & Graphics Shared
      'bespoke visual mood boards, custom color palettes, and typographic scales': 'We define the artistic style, picking typography pairs and custom high-contrast color boards for your company.',
      'exhaustive design systems with reusable, responsive ui components': 'We organize robust design libraries with component variants, auto-layouts, and design tokens for clean handoffs.',
      'clean layouts built with grid systems and consistent spacing guides': 'Ensures pristine alignment, optimal scanning patterns, and consistent visual rhythm across all screens.',
      'interactive, clickable high-fidelity mockup screens mapping full user pathways': 'Simulates a real working app environment, letting stakeholders test user flows before coding.',
      'proven to lower user drop-off metrics on checkouts and sign-up layouts by up to 40%': 'Optimizes critical funnels, guiding clients to convert with minimal cognitive friction.',
      'seamless responsive layouts optimized for mobile, tablet, and wide screens': 'Ensures visual elegance and accessibility regardless of what device your audience is using.',
      'immaculate developer handoffs with full asset exporting and visual specs documentation': 'Reduces communication gaps, allowing software teams to build the exact visual layout as designed.',
      'full compliance with wcag 2.1 color contrast and accessibility requirements': 'Guarantees your digital platform is highly legible and usable for people of all abilities.',

      // === MOBILE APP DEVELOPMENT (MAIN) ===
      'native android applications (kotlin, jetpack compose, room db)': 'We build native Android apps leveraging modern frameworks for optimal performance and responsive views.',
      'native ios applications (swift, swiftui, coredata)': 'Our native iOS products feature SwiftUI, offering pixel-perfect visuals matching Apple’s Human Interface Guidelines.',
      'cross-platform hybrid applications (react native, flutter)': 'We craft cross-platform architectures to share business logic across iOS and Android with zero performance compromises.',
      'startup mvp mobile builds (validated layouts, fast iteration, high security)': 'Accelerate your product launch with a secure, scaled MVP mobile app designed for maximum agility.',
      'app store and play store deployment, optimization & ongoing maintenance': 'We coordinate complete App Store submission checklists and deploy continuous support to monitor platform uptime and security.',
      'unified clean architectures that ensure easy, long-term codebase maintenance': 'We employ strict architecture layers to keep the codebase highly maintainable and ready for future developer additions.',
      'optimized background processes and strict caching that ensure high battery efficiency': 'Our background threading runs task queues efficiently, ensuring minimal battery consumption and smooth multitasking execution.',
      'direct integration with secure hardware encryption keys and biometric authentication': 'Protect user information at the hardware level using FaceID, TouchID, and secure storage.',
      'direct consulting from senior product managers with years of success': 'Our senior technical managers guide your product roadmap, aligning app features with real-world user metrics and conversion goals.',

      // === ANDROID APPLICATIONS ===
      'secure sqlite databases using room db with offline-first data sync layers': 'Our Android builds store data locally using encrypted databases, syncing to cloud endpoints only when networks are fully stable.',
      'background threading and task optimization via modern task managers': 'We schedule periodic network tasks, media uploads, and data fetching protocols using efficient task management.',
      'deep hardware sensor integration including ble, gps tracking, and biometric keys': 'We connect to local devices, track coordinates via location APIs, and authorize with native biometrics.',
      'custom interactive push notification channels and real-time socket listeners': 'We build high-impact push notification categories and establish real-time updates for instant in-app changes.',
      'guaranteed crash-free session metrics verified by automated tracking': 'We integrate monitoring systems to track session performance and log runtime exceptions.',
      'optimized build compilation sizes through advanced code-stripping': 'We compress your application bundles, ensuring fast downloads and minimal memory footprint.',
      'seamless integration with play services, in-app billing, and subscription apis': 'We hook directly into official billing APIs to safely handle single-purchases and recurring subscriptions.',
      'full compatibility with play store submission standards and policy compliance': 'Our teams manage the entire submission cycle, conforming fully to target rules and safety standards.',

      // === IOS APPLICATIONS ===
      'secure local storage using coredata or swiftdata with multi-device sync': 'We architect resilient offline storage structures and synchronize user profiles across multiple devices.',
      'hardware integrations including faceid/touchid, keychain, and camera sensors': 'We protect confidential user authentication tokens and integrate advanced high-frame-rate cameras.',
      'apple pay transaction flows with robust merchant-side verification layers': 'We deploy custom processing workflows to accept Apple Pay safely, validating certificates and handling callback loops.',
      'rich interactive home screen widgets and dynamic push notifications': 'We build modern widgets for home screens and integrate push notifications for real-time customer reach.',
      'end-to-end data transmission security utilizing modern transport protocols': 'We protect all outbound requests with secure transport protocols, enforcing strict encryption standards.',
      'strict sandboxing and memory safety practices preventing buffer exploits': 'We design secure memory spaces, ensuring zero buffer overflow leaks or memory leaks.',
      'comprehensive testflight beta cycle coordination with full regression logging': 'We manage the complete external testing pipeline, compiling tester logs and feedback before release.',
      'hassle-free deployment and certification management inside developer portal': 'We coordinate provisioning profiles and distribution certificates to streamline official approvals.',

      // === CROSS-PLATFORM APPLICATIONS ===
      'react native builds leveraging engine optimizations and native bridges': 'We optimize React Native runtimes ensuring fast boot times and smooth scrolling.',
      'flutter systems utilizing dart compiler to generate highly performant code': 'We develop custom Flutter widgets compiled directly to native machine instructions for outstanding efficiency.',
      'custom native wrappers written in swift or kotlin for deep os-level dependencies': 'When cross-platform plugins are insufficient, we write native Swift and Kotlin modules to bridge specific platform features.',
      'seamless framework integrations for fast over-the-air (ota) updates': 'We harness modern deployment tools to push instant visual corrections directly to users without store reviews.',
      'substantially reduced overall development cost and faster time-to-market metrics': 'Build once and deploy to both markets simultaneously, dramatically lowering overall engineering overhead and design cycles.',
      'unified qa cycles ensuring that bugs are resolved across both platforms simultaneously': 'Our testing teams write single-script automated tests, validating logic across iOS and Android in the exact same QA cycle.',
      'flexible visual components that look entirely native on both material and apple layouts': 'We render adaptive components that switch styles dynamically, matching system guidelines on both platforms.',
      'simplified future feature rollouts requiring only a single team to coordinate changes': 'Keep your product highly agile by relying on one cohesive developer squad to maintain and expand your entire mobile suite.',

      // === APP FOR START-UPS ===
      'rapid wireframing and clickable prototypes completed in just days': 'We sketch user flows and build interactive wireframes quickly to validate product mechanics before writing code.',
      'core user registration, profile management, and essential workflow setup': 'We build high-priority onboarding pathways and user account directories to get your core concept into early users’ hands.',
      'integration of seamless, lightweight backend infrastructures using serverless designs': 'We deploy serverless functions and lightweight databases to keep infrastructure operational costs minimal during early growth.',
      'setup of comprehensive user analytics pipelines': 'We track critical behavioral events and onboarding funnels, providing actionable data to present in stakeholder meetings.',
      'fully-scaled cloud configurations prepared to grow from 10 to 10,000 active users instantly': 'We set up auto-scaling rules on modern container clusters, ensuring your backend handles sudden traffic surges.',
      'visually stunning product dashboards ready for high-stakes pitching decks': 'Our high-fidelity prototypes and dashboards show stakeholders exactly how your product functions under load.',
      'integrated feedback forms allowing direct, fast iteration with your initial user cohort': 'Capture early customer reviews and suggestions directly inside the app for rapid product tuning.',
      'direct consultation with senior product owners to fine-tune your business-logic funnel': 'Partner with seasoned consultants who help refine your product roadmap, pricing funnels, and retention hooks.',

      // === WEB DEVELOPMENT (MAIN) ===
      'custom enterprise saas portals & dashboards': 'We build fully responsive, custom dashboards with secure role-based permissions and high-performance states.',
      'e-commerce marketplaces with high-speed search and secure payment gateways': 'We engineer fast digital commerce platforms featuring product catalogs, instant searching, and secure checkouts.',
      'progressive web applications (pwas) with rich offline-capabilities': 'We construct installable PWAs using modern web technologies, caching assets locally for seamless offline accessibility.',
      'custom crm, erp, and supply-chain portals aligning with staff operations': 'We design secure corporate tools to manage clients, inventory, and staff tasks in a single centralized system.',
      'cloud-native migration and continuous devops automation': 'We migrate legacy sites to containerized cloud systems with automated deployment pipelines for zero-downtime updates.',
      'seo-optimized, lightweight static site rendering for immediate rankings': 'We implement modern rendering to achieve high performance scores and search rankings.',
      'robust data isolation and end-to-end encryption complying with privacy standards': 'We protect customer privacy at all times, securing active databases and encrypting personal data.',
      'responsive layouts that adapt flawlessly to mobile, tablet, and widescreen desktop': 'We construct highly fluid layouts that reorganize elements perfectly for any viewport size.',
      'complete post-launch maintenance packages and proactive cybersecurity patches': 'Our maintenance contracts cover security updates, server logging, and software upgrades to ensure zero vulnerabilities.',

      // === WEB FOR START-UPS ===
      'integrated email capture systems and automated marketing drip funnels': 'We set up robust email capture modules and connect automated newsletters to start nurturing your incoming traffic immediately.',
      'custom interactive product landing layouts with smooth, modern scroll effects': 'We design highly engaging product landing pages with interactive scroll animations that convert visitors into leads.',
      'user management and social login options (google, apple, github, etc.)': 'We integrate secure single-sign-on (SSO) options to reduce login friction and increase user onboarding rates.',
      'dynamic analytic trackers to monitor product signups and drop-off rates': 'We implement precise click and event tracking to identify conversion blocks and streamline your signup funnels.',
      'perfect 100 lighthouse performance and seo scores for maximum discoverability': 'We construct ultra-lightweight pages that search engine algorithms rank higher due to near-instant loading speeds.',
      'highly responsive, fluid layouts that render flawlessly across mobile and desktop': 'We ensure your startup web product looks clean and professional across all target browsers.',
      'modular component architectures that allow developers to scale the product with ease': 'Our developers write reusable, well-documented code components, making it simple to expand features as your company grows.',
      'clean, clear, and well-documented codebases handed over to your internal team': 'We provide a complete code handoff package with detailed setup guides, enabling your team to take ownership easily.',

      // === WEB FOR GROWING BUSINESS ===
      'secure multi-role authentication layers (admin, staff, customer, partner)': 'We build granular role-based access control (RBAC) layers, restricting access to sensitive administrative data.',
      'custom dashboard visualizations featuring interactive real-time data charts': 'We integrate dynamic data charts with custom filters, giving managers a clear view of business metrics.',
      'automated document generating engines for quotes, invoices, and shipping labels': 'We design automated PDF generation layers to create invoices and receipts instantly, removing manual admin tasks.',
      'deep api integrations connecting your crm, erp, or accounting packages': 'We connect your web systems directly to tools like Salesforce or QuickBooks to synchronize datasets automatically.',
      'continuous automatic daily cloud backups with rapid recovery': 'We configure automated backup pipelines to secure system databases and ensure rapid data recovery if needed.',
      'strict data validation and protection conforming to cybersecurity guidelines': 'We deploy strict data validation layers on all API requests to protect databases against vulnerabilities.',
      'custom caching layers that speed up client interactions': 'We configure modern caching rules to serve data instantly, improving user response times.',
      'dedicated ongoing support packages to monitor and patch system vulnerabilities': 'We offer continuous monitoring packages, applying security updates promptly to protect against potential exploits.',

      // === WEB FOR ENTERPRISE ===
      'microservice-oriented architectures written in performance-tuned languages': 'We break massive web structures into independent microservices to ensure easy scaling and isolation.',
      'highly distributed caching networks utilizing global cdn setups': 'We deploy global content distribution networks to deliver web assets in sub-milliseconds.',
      'sso (single sign-on) support using saml, oauth 2.0, and active directory': 'We connect corporate login flows directly to identity providers for secure staff logins.',
      'comprehensive database setups featuring real-time replication and failover': 'We architect database clusters with real-time replication and automated failovers to prevent data loss.',
      'full compliance with gdpr, hipaa, and soc-2 security auditing criteria': 'We build strict access controls and encrypted storage spaces, satisfying international data security standards.',
      'guaranteed 99.9% uptime backed by automated multi-region failovers': 'We configure load-balanced servers across multiple regions, ensuring system accessibility even during local outages.',
      'rigorous automated security penetration tests executed before every release': 'We run automated security scanners on our code repositories, patching vulnerabilities before updating production.',
      'complete devops pipeline automation featuring secure, zero-downtime rolling deploys': 'We implement continuous delivery pipelines, deploying software updates incrementally to ensure zero disruption.',

      // === ECOMMERCE DEVELOPMENT ===
      'advanced, fast faceted search engines powered by modern search APIs': 'We build high-speed search modules with custom filters, allowing customers to locate products in milliseconds.',
      'secure multi-gateway payment integrations (stripe, paypal, apple pay)': 'We integrate secure payment checkouts with multi-currency support, safeguarding buyer transactions.',
      'comprehensive backend inventory managers featuring automated real-time alerts': 'We construct automated stock management systems that update listings instantly and alert admins when stock runs low.',
      'dynamic coupon, discount, and referral systems tailored to marketing campaigns': 'We configure custom promotion engines to handle percentage discounts, buy-one-get-one deals, and referral tracking.',
      'proven capability to withstand massive concurrent holiday traffic spikes': 'Our cloud storefronts automatically scale up resources during flash sales and high-volume holiday seasons.',
      'direct automated connections with global shipping logistics and carrier apis': 'We connect checkout flows directly to carriers like FedEx, DHL, and UPS to calculate live rates and print labels.',
      'optimized product page schemas for maximum shopping and search visibility': 'We implement structured metadata to display price and availability directly in search results.',
      'intuitive customer profile dashboards to manage past orders, tracking, and returns': 'We design secure client dashboards where shoppers can view order history and track shipments.',

      // === WEB APP DEVELOPMENT ===
      // Handled by shared Web App & Software Shared section above
      
      // === WEBSITE REVAMP ===
      'complete custom ui/ux visual redesign matching contemporary global standards': 'We completely overhaul old interfaces, designing fresh layouts that align with modern web aesthetics.',
      'rebuilding legacy slow code with lightweight, speed-optimized modern frameworks': 'We replace slow templates or obsolete codebases with fast React architectures to improve load times.',
      'implementing strict url redirection to protect all of your search engine ranks': 'We set up permanent redirect maps for all old pages, preserving your Google search rankings and authority.',
      'adding accessible, user-friendly cms setups to let your staff update content instantly': 'We integrate custom CMS dashboards, allowing your team to update text and media without developers.',
      'loading speed metrics slashed from several seconds down to sub-second load times': 'We optimize code bundles and image formats, achieving near-instant page loads to improve visitor engagement.',
      '100% responsive visual layouts that render beautifully across mobile devices and tablets': 'We design custom layouts that adapt flawlessly to smartphone, tablet, and desktop viewports.',
      'compliance with the latest accessibility and privacy guidelines': 'We adjust contrast ratios and add descriptive tags, making your site accessible to all while meeting privacy standards.',
      'immediate improvements in user engagement time and overall conversion metrics': 'Our user-friendly layouts and fast performance lead to longer visit times and higher lead inquiries.',

      // === GAME DEVELOPMENT (MAIN) ===
      'unity 3d and 2d mobile games for ios and android platforms': 'We build engaging 3D and 2D mobile games with custom physics and gameplay systems.',
      'html5 & webgl browser games for instant desktop playing': 'We compile optimized builds that load instantly in desktop browsers without plug-ins.',
      'real-time multi-player skill games': 'We design secure multiplayer matchmaking lobbies for skill games, ensuring low-latency interactions.',
      'server authoritative multi-user game architecture': 'We build secure server-side game loops, preventing client-side gameplay manipulation.',
      'in-game economy, ad networks, and secure payment gateway integrations': 'We integrate secure payment wallets and in-app purchase systems, maximizing game monetization options.',
      'server-authoritative game loops that eliminate game cheating and tampering': 'We validate all player moves directly on the game server, protecting platform integrity.',
      'sustained 60fps fluid rendering and optimized asset sizes for fast downloads': 'We optimize game textures and memory management to achieve smooth rendering on all devices.',
      'comprehensive analytical dashboards to track active users and monetization': 'We design detailed admin screens to monitor active players, server health, and transaction metrics.',
      'immersive game soundscapes and custom particle animations': 'We create dynamic spatial audio and custom visual effects to enhance player engagement.',

      // === RUMMY GAME DEVELOPMENT ===
      'certified rng algorithms for completely fair deck shuffling': 'We deploy certified RNG algorithms to shuffle decks fairly, preventing any predictable patterns.',
      'fluid html5 canvas and webgl visual animations running smoothly at 60 frames per second': 'We design smooth card-dealing and sorting animations that run seamlessly on mobile browsers.',
      'integrated secure payment gateways and digital wallets with anti-fraud tracking': 'We integrate secure deposit and withdrawal systems with real-time fraud monitoring.',
      'interactive in-game live chats, player profiles, emojis, and daily loyalty rewards': 'We build engaging player profiles with quick-chat shortcuts, active emojis, and daily login rewards.',
      'comprehensive anti-collusion and device fingerprinting security tracking systems': 'We implement active anti-cheat systems that block team-play exploits and detect multiple accounts on one device.',
      'intuitive, detailed admin dashboard to monitor active lobbies, game histories, and audits': 'We design complete admin interfaces to track game room metrics, transaction logs, and security flags.',
      'full compatibility with major app stores and responsive html5 mobile browser layouts': 'We optimize games to run flawlessly as native app store downloads or as instant browser games.',
      'scalable server setups built to manage thousands of active players simultaneously': 'We build clustered servers to host thousands of concurrent rummy boards without lag.',

      // === UNITY 3D GAME DEVELOPMENT ===
      'custom 3d character rigging, animation states, and dynamic visual effects': 'We rig 3D models and build complex state machines to create smooth, realistic movements and effects.',
      'immersive spatial soundscapes and responsive physics-based collision triggers': 'We configure 3D audio listener systems and precise colliders to make gameplay highly responsive.',
      'cross-platform gameplay setups matching mobile, web, and standalone consoles': 'We deploy unified codebases that compile seamlessly to iOS, Android, WebGL, and PC platforms.',
      'integrated in-app purchase systems, ad networks, and global game leaderboards': 'We connect ad networks and handle real-time leaderboards with low database latency.',
      'sustained high frame rates achieved through strict memory auditing': 'We run detailed profiling on meshes, materials, and scripts to achieve 60 frames per second.',
      'optimized game bundle sizes utilizing dynamic asset management': 'We utilize modern asset management, downloading high-res files on-demand to keep the initial app size minimal.',
      'continuous automated testing across multiple real mobile and tablet devices': 'We run automated test suites on physical device farms to catch performance issues early.',
      'complete developer support from early concept drafting up to store deployment': 'Our game architects assist with game mechanics, graphic design, sound production, and store setup.',

      // === LUDO GAME DEVELOPMENT ===
      'real-time, secure server-side dice roll generators preventing game tampering': 'We generate all dice values on secure servers, ensuring completely fair, untampered outcomes.',
      'interactive quick-chats, customizable audio clips, and animative emojis': 'We build interactive chat wheels, local language voice clips, and animated emojis to make games fun.',
      'beautifully designed visual themes, board layouts, and customizable player tokens': 'We design multiple theme choices with unique animations.',
      'weekly online tournament setups with automated leaderboard point calculations': 'We manage automated, bracket-style tournaments with real-time leaderboard rankings.',
      'multiple monetization modules including non-intrusive ads and premium token purchases': 'We integrate rewarded video ads and custom token stores to monetize the player base safely.',
      'robust websocket backend capable of maintaining tens of thousands of active game boards': 'We build lightweight server-side room managers to handle massive player volumes without latency.',
      'detailed admin dashboard providing player analytics, session histories, and coin logs': 'We design admin portals to view user signup funnels, match statistics, and virtual currency logs.',
      'lightweight mobile builds that download instantly and load with minimal network delay': 'We optimize game code and pack assets efficiently, ensuring fast load times even on slow networks.',

      // === TAMBOLA GAME DEVELOPMENT ===
      'automated live number announcer supporting multiple languages and audio accents': 'We build voice synthesis modules that announce numbers clearly in multiple languages.',
      'responsive multi-ticket purchase options letting players manage up to 6 tickets simultaneously': 'We design clean mobile views, allowing players to view and mark numbers on multiple tickets easily.',
      'automatic ticket auto-daub options for casual and fast-paced players': 'We integrate automated marking options to help players focus on social features and chats.',
      'interactive group chat channels with custom sticker sets and room moderators': 'We build secure live chat rooms allowing players to socialize during games.',
      'fully-integrated secure payment systems with instant automated prize distribution': 'We deploy automated prize checkouts, validating winning claims and distributing rewards instantly.',
      'custom room creator letting administrators schedule upcoming game rooms and ticket prices': 'We design simple tools for admins to configure upcoming game schedules, ticket costs, and prizes.',
      'comprehensive security layer validating ticket generation and numbers calling history': 'We write secure server validations to log every called number, preventing ticket manipulation.',
      'optimized data streams that keep bandwidth usage minimal for mobile browser players': 'We reduce networking overhead, allowing players to participate in live rooms with low data usage.',
      'interactive mobile app & web clickable prototypes': 'We animate screen transitions and compile clickable prototypes to let clients test workflows before coding.',
      'corporate brand book & unique logo designing packages': 'We formulate clean vector logos, custom color schemes, and brand books to unify your business identity.',
      'marketing collateral, presentation pitch-decks & print material design': 'We design custom slide decks and print-ready marketing materials that communicate your business value.',
      'digital vector art & digital cartoon character creation': 'We illustrate unique character assets, brand mascots, and high-fidelity graphics for marketing campaigns.',
      'user experiences optimized to drive high conversion rates and lower dropoffs': 'We analyze user patterns to remove visual friction, helping customers navigate and complete signups.',
      'pristine, eye-catching visual aesthetics that establish immediate corporate trust': 'We craft high-quality visuals with balanced typography, helping your business stand out from competitors.',
      'exhaustive design system guidelines covering typography, margins, and brand colors': 'We create exhaustive component guides, ensuring consistent typography and colors across all products.',
      'fast turnaround times with multiple style revisions to match your aesthetic goals': 'We provide rapid prototype iterations with collaborative feedback cycles to finalize designs.',

      // === UI/UX DESIGNING ===
      // Handled by shared UI/UX Design & Graphics Shared section above
      
      // === MOBILE APP PROTOTYPING ===
      'highly interactive, click-through app layouts showing complete visual navigations': 'We wire complete screen paths, letting you navigate your upcoming application in real-time.',
      'dynamic component animations showing buttons, menu sliders, and text input behaviors': 'We configure interactive hover and press states to make static designs look like active software.',
      'realistic simulation of transitions (e.g., card slide-ups, fade effects, page flips)': 'We animate elegant screen transitions to define the exact interaction design for development.',
      'shareable web preview links that load on mobile browsers for instant hands-on testing': 'We export easy-to-use prototype links that load on smartphones, facilitating user testing.',
      'perfect interactive material to highlight on landing portals and seed-investor pitch decks': 'We build impressive, clickable demos that grab investor attention and prove your product idea.',
      'allows direct usability testing with target users to refine ux before starting backend setups': 'We run user testing with prototypes, catching and fixing usability issues before writing any code.',
      'serves as an exhaustive functional manual for software developers, cutting build times by 30%': 'We provide visual blueprints of user flows, clarifying software requirements and speeding up development.',
      'saves thousands of dollars by capturing user-experience flaws early in the design cycle': 'We locate layout bottlenecks in the prototype phase, preventing expensive adjustments later in code.',

      // === LOGO DESIGNING ===
      'custom designed vector logos delivered in scalable formats (svg, pdf, eps, png)': 'We design scalable, custom vector logos that print clearly at any scale, from tiny favicons to large banners.',
      'flexible visual variations (full color, dark backgrounds, monochrome, icon-only)': 'We provide multi-contrast logo versions, making your brand look polished across all physical and digital media.',
      'comprehensive corporate brand book mapping exact brand colors, typography, and margins': 'We draft extensive visual guidelines to control brand colors, typography, and logo spacing.',
      'pre-formatted visual assets ready for social profiles, business cards, and letterheads': 'We export pre-sized images for social channels, email signatures, and corporate stationary.',
      'highly memorable, custom vector artwork carrying unique intellectual copyright guarantees': 'We illustrate original, custom logos, guaranteeing unique visual identity assets with full IP rights.',
      'versatile, clean designs that scale flawlessly without loss of resolution': 'We construct clean vector outlines, ensuring your assets load quickly and remain crisp on all displays.',
      'consistent visual identity guidelines that elevate your company\'s premium positioning': 'We unify your corporate aesthetic to present high professionalism and gain consumer trust.',
      'full ownership and transfer of intellectual property rights handed over upon completion': 'We sign over all visual intellectual property and source files to your company after project completion.',

      // === DIGITAL CARTOON MAKING ===
      'bespoke digital vector character designs delivered in high-resolution master layers': 'We draw high-fidelity digital vector characters with fully layered source files for easy edits.',
      'comprehensive character sheets showing multiple emotional expressions and actions': 'We illustrate diverse character poses and expressions, providing custom assets for various screen scenarios.',
      'scalable graphics ready for app ui integration, physical print merchandise, and animations': 'We compile scalable character vectors ready for app interfaces, game assets, or merchandise printing.',
      'bespoke branding mascots designed to align perfectly with corporate style profiles': 'We design brand mascots that humanize your platform and make brand messaging approachable.',
      'proven to increase user engagement metrics inside mobile onboarding screens and tutorials': 'We illustrate friendly characters for app guides, improving onboarding completion and user retention.',
      'establishes a highly consistent, polished visual brand presence across web channels': 'We align character styles with your color palette, unifying your brand image across web channels.',
      'saves cost on licensing stock assets by delivering fully custom, copyright-owned designs': 'We build unique illustrations owned entirely by you, eliminating stock licensing costs and legal risks.',
      'impeccable vector compilation ensuring that illustrations remain razor-sharp at any scale': 'We outline character vectors meticulously, ensuring they remain clear on high-resolution displays.',

      // === DIGITAL MARKETING (MAIN) ===
      'advanced search engine optimization (technical seo, on-page & backlinking)': 'We implement technical SEO audits and backlink building to grow your organic traffic and visibility.',
      'search engine marketing (google search ads, ppc, retargeting campaigns)': 'We build high-intent paid ad campaigns across Google and Bing to target ready-to-buy customers.',
      'social media marketing & brand building (linkedin, instagram, meta ads)': 'We manage social content calendars and run targeted social ads to grow brand engagement.',
      'high-value corporate copywriting & seo blog content writing': 'We research and write authoritative articles that answer customer questions and rank on Google.',
      'analytical conversion rate optimization (cro) and funnel tracking metrics': 'We track user clicks and event paths to identify conversion leaks and optimize user signups.',
      'sustainable, long-term organic search traffic that reduces paid marketing costs': 'We build permanent organic keyword rankings, bringing in continuous qualified traffic at zero cost.',
      'precisely targeted campaigns that ensure your budget connects with qualified buyers': 'We configure high-intent keyword targets and search filters, focusing ad budgets on qualified leads.',
      'transparent weekly analytical reporting of conversion metrics, roas, and clicks': 'We share detailed conversion data, keyword performance, and ad spend reports every week.',
      'tailored marketing systems matching the budgets of growing startups or enterprises': 'We optimize growth strategies, delivering high ROI for both early-stage startups and large enterprises.',

      // === FOR START-UPS (MARKETING) ===
      'thorough analysis of target user demographics and niche keyword search volumes': 'We research search behavior to identify high-potential keywords and target audiences.',
      'setup of advanced web event tracking (google analytics 4, pixel trackers, events)': 'We configure Google Analytics 4 and tracking pixels to capture traffic behaviors and conversions.',
      'hyper-targeted, low-waste ppc search ad campaigns capturing high-intent inquiries': 'We build precise search ad campaigns, avoiding wasted spend on low-intent queries.',
      'persuasive, highly optimized landing page copywriting that drives email signups': 'We write compelling, benefits-focused copy for landing pages to increase email signups.',
      'highly optimized customer acquisition cost (cac) metrics that maximize your budget runway': 'We refine audience targets and bidding strategies to lower acquisition costs and save budget.',
      'predictable, repeatable conversion funnels highlighting clear user acquisition paths': 'We build clear, structured marketing funnels that turn visitors into leads consistently.',
      'weekly transparent analytical dashboards detailing exact click, signups, and cost metrics': 'We provide simple, visual reports to track click volumes, ad spend, and cost per lead.',
      'direct consulting from seasoned startup growth experts who understand early marketing hurdles': 'Partner with seasoned growth consultants who know how to scale early-stage startups efficiently.',

      // === FOR GROWING BUSINESS (MARKETING) ===
      'strategic paid campaigns tailored for linkedin corporate audiences and google search maps': 'We run targeted LinkedIn campaigns to reach B2B decision-makers and optimize local maps traffic.',
      'advanced visual dynamic retargeting campaigns capturing warm, high-intent web visitors': 'We display retargeting ads to past visitors, bringing them back to complete purchases.',
      'in-depth competitor keyword analysis and programmatic backlink building': 'We analyze competitor keywords and build high-quality links to outrank them on search results.',
      'automated crm integration feeding incoming leads directly to sales representatives': 'We connect web forms to CRMs like HubSpot or Salesforce, routing leads to sales teams instantly.',
      'proven history delivering sustained 3x+ return on ad spend across paid marketing channels': 'Our dynamic optimization systems consistently deliver a minimum 3x return on your ad spend.',
      'rigorous a/b testing of visual creatives, titles, and call-to-action scripts monthly': 'We test multiple ad creatives and copy variations monthly, scaling the highest-performing versions.',
      'detailed conversion-rate optimization (cro) to maximize roi of existing web traffic': 'We analyze user heatmaps and click logs to optimize landing layouts and increase signups.',
      'bi-weekly live video dashboard reviews with certified senior marketing consultants': 'We hold regular video reviews to discuss campaign metrics, ROAS progress, and next steps.',

      // === SEARCH ENGINE OPTIMIZATION (SEO) ===
      'in-depth keyword research identifying high-volume, low-competition buyer keywords': 'We locate valuable search terms with high purchase intent and low competition for your niche.',
      'correction of page indexing errors, sitemaps, and core web vitals speed metrics': 'We fix sitemaps, resolve indexing blocks, and optimize page performance for search engines.',
      'on-page content optimization matching exact keyword variations, headers, and schemas': 'We adjust heading tags, align keyword densities, and implement schema markup to improve search rankings.',
      'high-authority outreach campaign securing premium, permanent editorial backlinks': 'We connect with top-tier industry blogs to secure high-quality, permanent backlinks for your domain.',
      'significant, permanent growth in organic search traffic and overall google keywords rankings': 'Our long-term optimization strategies deliver stable search visibility and organic traffic growth.',
      'substantial long-term savings on paid search advertising by ranking organically for key terms': 'By ranking organically for key commercial terms, you reduce the need for high paid search spend.',
      'exhaustive monthly search performance tracking highlighting traffic, clicks, and impressions': 'We deliver detailed monthly reports on keyword ranks, organic traffic, and total impressions.',
      'clear optimization of local maps and business profile directories to capture regional leads': 'We set up and optimize Google Business Profiles and local directory listings to attract regional leads.',

      // === SEARCH ENGINE MARKETING (SEM) ===
      'strict keyword segmentation matching exact match, broad match modifiers, and phrase match': 'We organize keywords into precise match types to prevent irrelevant ad triggers.',
      'curating exhaustive lists of negative keywords to eliminate wasted, unrelated click spends': 'We filter out search terms that waste budget, focusing your spend on highly relevant clicks.',
      'optimization of google ads quality scores through landing page relevance alignment': 'We align ad messaging with landing page content, increasing quality scores and lowering cost-per-click.',
      'custom ad extensions setup adding click-to-call, sitelinks, and localized office maps': 'We add useful ad extensions like phone numbers and subpage links to boost ad click rates.',
      'direct tracking of paid ad conversion campaigns using advanced tagging systems': 'We implement conversion tags across checkouts and forms to track ad ROI accurately.',
      'sustained lower cost-per-click (cpc) and dramatically increased ad conversion ratios': 'Our active bid management lowers click costs while increasing the quality of incoming leads.',
      'rigorous automated bidding setup leveraging machine learning and manual limits': 'We configure smart bidding strategies to maximize conversions within your budget constraints.',
      'transparent, clear monthly performance reviews reviewing spend, click, and cost-per-lead metrics': 'We share clear summaries of monthly ad spend, cost per lead, and total conversion volumes.',

      // === SOCIAL MEDIA MARKETING ===
      'designing a detailed custom monthly content calendar matching your brand theme': 'We plan highly engaging monthly post topics and graphic themes that support your brand voice.',
      'authoring professional linkedin articles, engaging twitter updates, and instagram visuals': 'We write polished, informative B2B articles and design custom eye-catching visuals for social feeds.',
      'configuring hyper-targeted paid social ads matching specific buyer lookalikes': 'We build targeted ad campaigns using lookalike audiences to reach potential customers.',
      'systematic monitoring and replying to incoming visitor direct-messages and comments': 'We monitor incoming messages and comments to ensure active customer communication.',
      'measurable growth in total brand followers, positive engagement, and organic sharing rates': 'Our organic and paid strategies consistently increase brand awareness, followers, and social reach.',
      'establishes a highly consistent, polished visual brand identity across all digital feeds': 'We apply consistent colors and typography, presenting a highly professional brand image.',
      'increased referral web traffic directly from social profiles to your lead-capture portals': 'We direct social followers to optimized landing pages, growing your lead inquiries.',
      'detailed analytical reporting monitoring top-performing content, impressions, and clicks': 'We provide simple, visual reports to track post engagement, click volumes, and audience growth.',

      // === CONTENT WRITING ===
      'highly researched seo blog articles and long-form comprehensive visual guides': 'We research and write long-form articles that cover topics in-depth and rank on Google.',
      'high-conversion product descriptions and landing page copywriting layouts': 'We write compelling product copy and landing page text to convert readers into buyers.',
      'informative corporate newsletters, company press releases, and email copy sequences': 'We write high-impact newsletters and email workflows to keep your leads engaged.',
      'in-depth technical whitepapers, corporate ebooks, and detailed case studies': 'We research and draft detailed whitepapers and case studies that highlight your business success.',
      '100% original, plagiarism-free, and highly engaging content checked by top industry tools': 'We write 100% original, copyedited content that meets high editorial standards.',
      'strategic placement of high-intent keywords that secures organic search visibility': 'We position key search terms naturally, ensuring your articles read well and rank on search engines.',
      'impeccable structural readability utilizing scannable lists and clear call-to-actions': 'We design content with scannable headers and clear call-to-actions, driving user conversions.',
      'enhanced reader dwell-time metrics that help lift overall search rankings on google': 'Our engaging, informative writing keeps visitors on your page longer, boosting search ranks.'
    };

    if (dict[cleanTitle]) {
      return dict[cleanTitle];
    }

    // Heuristics based on sector categories
    if (section === 'section2') {
      if (pageId.startsWith('hr-')) {
        return `Our HR consultants establish rigorous execution guidelines, verifying compliance benchmarks and coordinating structural mapping of ${itemTitle} to maximize organizational productivity.`;
      } else if (pageId.startsWith('soft-')) {
        return `Our certified software architects engineer, test, and deploy ${itemTitle} utilizing modular component patterns, clean code design, and continuous integration audits.`;
      } else if (pageId.startsWith('edu-')) {
        return `Our academic admissions advisors streamline the certification criteria, manage document dossiers, and coordinate direct university liaisons for ${itemTitle} to secure success.`;
      }
      return `We construct, optimize, and manage the execution of ${itemTitle} to ensure a fully customized, professional rollout that aligns perfectly with your operations.`;
    } else {
      // section3 - Benefits
      if (pageId.startsWith('hr-')) {
        return `Significantly enhances organizational agility, minimizes human resource liabilities, and ensures comprehensive alignment with corporate standards through ${itemTitle}.`;
      } else if (pageId.startsWith('soft-')) {
        return `Slashes production overhead, increases performance metrics, and establishes modern, scalable frameworks with zero technical debt through ${itemTitle}.`;
      } else if (pageId.startsWith('edu-')) {
        return `Unlocks global career opportunities, guarantees academic compliance, and provides extensive counseling support through our direct liaison for ${itemTitle}.`;
      }
      return `Delivers immediate tactical value, reduces ongoing administrative overhead, and provides professional auditing transparency to protect and accelerate your growth through ${itemTitle}.`;
    }
  };

  // Sector Highlight Panels
  const renderSectorHighlights = () => {
    if (page.category === 'HR Solutions') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Scouting Speed</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">5-9 Days TAT</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <UserCheck className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Match Accuracy</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">98% Fit Rate</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Quality Assurance</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">100% Compliant</h4>
            </div>
          </div>
        </div>
      );
    } else if (page.category === 'Software Services') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Development Model</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">Agile Sprints</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <Code className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Asset Transfer</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">100% Owned</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">System Reliability</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">99.9% Uptime</h4>
            </div>
          </div>
        </div>
      );
    } else {
      // Education
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Success Record</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">95% Success</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Tie-ups</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">UGC Approved</h4>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-[24px] p-8 shadow-sm flex items-center gap-6 group hover:border-slate-600/30 transition-all">
            <div className="w-14 h-14 rounded-sm bg-slate-800 text-white flex items-center justify-center premium-shadow shadow-slate-600/20 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-1">Guidance Path</p>
              <h4 className="font-display font-semibold text-slate-900 text-xl  tracking-tight">End-to-End</h4>
            </div>
          </div>
        </div>
      );
    }
  };

  // 1. ORIGINAL TEMPLATE (ONLY rendered for EXCLUDED Training & Placement sub-pages)
  const renderOriginalLayout = () => {
    return (
      <div id={`dynamic-page-${page.id}`} className="bg-slate-50 min-h-screen pb-20">
        <div className="w-full px-4 sm:px-8 lg:px-12 mt-6">
          <div className="relative overflow-hidden bg-[#0F172A] text-white rounded-sm p-6 sm:p-8 premium-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 px-3 py-1 rounded-full text-white text-[10px] tracking-widest uppercase font-bold">
                  JJH Executive Advisory Desk
                </span>
                <h2 className="font-display font-semibold text-xl sm:text-2xl tracking-tight "> Let us discuss your custom requirements </h2>
                <p className="text-slate-50 text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
                  Connect directly with the regional consultants of {page.category} at JJH Global Solutions. Our team will provide a comprehensive project proposal, syllabus mapping, or service proposal within 24 hours.
                </p>
              </div>
              <button
                onClick={onEnquire}
                className="w-full md:w-auto shrink-0 bg-white text-[#0F172A] font-bold px-8 py-3.5 rounded-sm text-xs sm:text-sm shadow-sm active:scale-98 transition-all text-center border border-white/25 uppercase tracking-wider cursor-pointer hover:bg-slate-50"
              >
                Consult with Us Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 mt-8">
          <div className="relative overflow-hidden bg-white text-slate-900 rounded-sm p-8 sm:p-12 shadow-sm border border-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:20px_20px] opacity-75" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 hidden sm:block">
                    <div className={`w-14 h-14 rounded-sm bg-[#0F172A] flex items-center justify-center text-white shadow-sm`}>
                      {renderPageIcon(page.iconName, "w-7.5 h-7.5")}
                    </div>
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] tracking-widest text-[#0F172A] bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded uppercase font-semibold">
                        {page.category}
                      </span>
                      {page.parentMenu && (
                        <span className="text-[9px] tracking-widest text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded uppercase font-semibold">
                          {page.parentMenu}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[9px] text-slate-800 bg-slate-50 px-2.5 py-0.5 rounded font-semibold uppercase border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                        Operational
                      </span>
                    </div>
                    <h1 className="font-display font-semibold text-slate-900 text-2xl sm:text-3xl lg:text-4xl tracking-tight  leading-none"> {page.title} </h1>
                  </div>
                </div>

                <p className="font-display font-semibold text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {page.tagline}
                </p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light max-w-2xl">
                  {page.heroDescription}
                </p>
              </div>

              <div className="lg:col-span-5 h-full min-h-[220px] rounded-sm overflow-hidden border border-slate-200 relative shadow-sm bg-slate-50 self-stretch flex">
                <img 
                  src={page.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"} 
                  alt={page.title} 
                  className="w-full h-full object-cover min-h-[220px] absolute inset-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 mt-10 space-y-10">
          <section className="bg-white border border-slate-200/80 rounded-sm p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0F172A]" />
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest text-[#0F172A] uppercase font-bold block">
                  01 / {page.section1.title.toUpperCase()}
                </span>
                <h2 className="font-display font-semibold text-2xl  tracking-tight text-slate-900"> {page.section1.title} </h2>
              </div>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {page.section1.content}
              </p>
              {page.section1.items && page.section1.items.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {page.section1.items.map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start bg-slate-50 border border-slate-100 p-3 rounded-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#0F172A] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-sm p-6 border border-blue-900/30 relative overflow-hidden self-stretch flex flex-col justify-between min-h-[220px]">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="space-y-3 relative z-10">
                  <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center">
                    <Shield className="w-4.5 h-4.5 text-slate-100" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white  tracking-wider">Continuous Quality Auditing</h3>
                  <p className="text-xs text-slate-50 leading-relaxed font-light">
                    Every customized rollout, student enrollment, training batch, or software sprint is backed by rigorous corporate QA criteria, establishing professional standards of transparency.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 mt-4 relative z-10 flex justify-between items-center text-[9px]  text-slate-100">
                  <span>Service Commitment</span>
                  <span className="text-white font-bold ">● FULL COMPLIANCE</span>
                </div>
            </div>
          </section>

          {/* Section 2: Methodology & Execution */}
          <section className="bg-white border border-slate-100 rounded-[32px] p-8 sm:p-16 premium-shadow shadow-slate-200/50 space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/5 rounded-full blur-[80px]" />
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest block">
                02 / {page.section2.title.toUpperCase()}
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl  tracking-tight text-slate-900 leading-tight"> {page.section2.title} </h2>
              <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-3xl">
                {page.section2.content}
              </p>
            </div>
            {page.section2.items && page.section2.items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.section2.items.map((item, idx) => (
                  <div key={idx} className="group bg-slate-50 hover:bg-slate-800 border border-slate-100 hover:border-slate-800 rounded-[24px] p-8 transition-all duration-500 relative overflow-hidden">
                    <div className="w-12 h-12 rounded-sm bg-white text-slate-800 text-sm font-bold flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-slate-900 group-hover:text-white group-hover:border-blue-700 transition-all shadow-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg mb-4 group-hover:text-white transition-colors  tracking-tight"> {item} </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal group-hover:text-slate-50 transition-colors">
                      {getItemDescription(page.id, 'section2', item, idx, page.title)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-white border border-slate-200/80 rounded-sm p-6 sm:p-10 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-800/80" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-slate-100">
              <div className="space-y-2">
                <span className="text-[10px]  tracking-widest text-slate-800 uppercase font-bold block">
                  03 / {page.section3.title.toUpperCase()}
                </span>
                <h2 className="font-display font-semibold text-2xl  tracking-tight text-slate-900"> {page.section3.title} </h2>
                <p className="text-xs text-slate-500 font-light leading-relaxed max-w-2xl">
                  {page.section3.content}
                </p>
              </div>
              <button
                onClick={onEnquire}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-5 py-3 rounded-sm transition-all shadow-sm active:scale-98 cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wider  shrink-0 border border-slate-600/25"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {page.section3.items && page.section3.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {page.section3.items.map((item, idx) => (
                  <div key={idx} className="group bg-slate-50 hover:bg-white border border-slate-150 hover:border-slate-600/40 rounded-sm p-5 flex flex-col justify-between hover:shadow-sm hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-200 group-hover:bg-slate-800 transition-colors duration-300" />
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-blue-800 text-[8px] font-bold uppercase">
                        FEATURE MATCH {idx + 1}
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm  tracking-wider group-hover:text-slate-900 transition-colors"> {item} </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                        Engineered to provide immediate tactical alignment, minimal friction, and robust transparency for institutional or commercial growth.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:text-blue-800 transition-colors">
                      <span>Read Details</span>
                      <ArrowRight className="w-3.5 h-3.5" group-hover:translate-x-1 transition-transform />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    );
  };

  // Unified rendering for all non-excluded categories
  const renderUnifiedLayout = () => {
    return (
      <div id={`dynamic-page-unified-${page.id}`} className="bg-slate-50 min-h-screen pb-20 selection:bg-[#0F172A] selection:text-white">
        
        {/* Hero Header Section - Refined for Professional Excellence */}
        <div className="w-full px-4 sm:px-8 lg:px-12 mt-8">
          <div className="relative overflow-hidden bg-white text-slate-900 rounded-[40px] p-8 sm:p-20 shadow-sm border border-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#0F172A] text-[10px] font-bold uppercase tracking-widest">
                      {page.category} Excellence
                    </span>
                    <span className="flex items-center gap-2 text-[10px] font-bold text-slate-800 bg-slate-50 px-4 py-1.5 rounded-full uppercase border border-slate-200 tracking-widest">
                      <ShieldCheck className="w-4 h-4" />
                      Quality Guaranteed
                    </span>
                  </div>
                  
                  <h1 className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl tracking-tight  leading-[1.05] text-slate-900"> {page.title} </h1>
                  
                  <p className="font-display font-medium text-[#0F172A] text-lg sm:text-2xl leading-relaxed max-w-2xl border-l-4 border-[#0F172A] pl-6">
                    {page.tagline}
                  </p>
                </div>

                <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl">
                  {page.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={onEnquire}
                    className="bg-[#0F172A] hover:bg-slate-900 text-white font-bold px-10 py-5 rounded-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 cursor-pointer flex items-center gap-3 group uppercase tracking-widest text-sm"
                  >
                    <span>Consult with Experts</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 h-full rounded-[32px] overflow-hidden border border-slate-200 relative shadow-sm aspect-square lg:aspect-auto min-h-[400px]">
                <img 
                  src={getPageImage(page.id, page.category, page.title)} 
                  alt={page.title} 
                  className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/20 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Structured Multi-Section Content */}
        <div className="w-full px-4 sm:px-8 lg:px-12 mt-12 space-y-16">
          
          {/* Metric Highlights Strip */}
          <div className="max-w-7xl mx-auto w-full">
            {renderSectorHighlights()}
          </div>

        {/* Section 1: Strategic Core & Focus */}
        <section className="bg-white border border-slate-100 rounded-none p-10 sm:p-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative overflow-hidden premium-shadow shadow-slate-200/20">
          <div className="absolute top-0 left-0 w-3 h-full bg-[#0F172A]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-50 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-10 relative z-10">
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-[0.3em] block">
                01 / {page.section1.title.toUpperCase()}
              </span>
              <h2 className="font-display font-semibold text-4xl sm:text-6xl  tracking-tight text-slate-900 leading-[1.1]"> {page.section1.title} </h2>
            </div>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              {page.section1.content}
            </p>
            {page.section1.items && page.section1.items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {page.section1.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-slate-50 border border-slate-100 p-6 rounded-sm shadow-sm transition-all hover:shadow-sm hover:bg-white group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-[#0F172A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-base text-slate-800 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            )}
            {page.additionalImages && page.additionalImages.length > 0 && (
              <div className="grid grid-cols-2 gap-6 pt-6 mt-4">
                {page.additionalImages.map((imgUrl, imgIdx) => (
                  <div key={imgIdx} className="group relative rounded-sm overflow-hidden shadow-sm h-48 sm:h-64 bg-slate-100">
                    <img 
                      src={imgUrl} 
                      alt={`${page.title} Gallery Showcase ${imgIdx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-none p-10 border border-blue-900/30 relative overflow-hidden self-stretch flex flex-col justify-between min-h-[300px] premium-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-500/20 rounded-full blur-[80px]" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-sm bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Shield className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-white  tracking-tight">Continuous Quality Auditing</h3>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                Every customized rollout, student enrollment, training batch, or software sprint is backed by rigorous corporate QA criteria, establishing professional standards of transparency.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-8 relative z-10 flex justify-between items-center text-xs font-bold tracking-widest text-slate-400 uppercase">
              <span>Service Commitment</span>
              <span className="text-slate-400">● FULL COMPLIANCE</span>
            </div>
          </div>
        </section>

          {/* Section 2: Structured Methodology & Processes */}
          <section className="bg-white border border-slate-100 rounded-none p-10 sm:p-20 premium-shadow shadow-slate-200/20 space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#0F172A]" />
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] text-[#0F172A] uppercase font-bold block">
                02 / {page.section2.title.toUpperCase()}
              </span>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight text-slate-900"> {page.section2.title} </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-3xl">
                {page.section2.content}
              </p>
            </div>
            {page.section2.items && page.section2.items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {page.section2.items.map((item, idx) => (
                  <div key={idx} className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-none p-8 hover:premium-shadow hover:shadow-slate-900/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#0F172A] transition-colors duration-500" />
                    
                    <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0F172A] text-sm font-semibold flex items-center justify-center absolute top-6 right-6 group-hover:bg-[#0F172A] group-hover:text-white transition-all shadow-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="w-14 h-14 rounded-sm bg-white text-[#0F172A] flex items-center justify-center border border-slate-100 mb-8 group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-colors duration-500 shadow-sm">
                      {renderPageIcon(page.iconName, "w-6 h-6")}
                    </div>
                    
                    <div className="space-y-4 mt-auto">
                      <h4 className="font-display font-semibold text-slate-900 text-xl group-hover:text-[#0F172A] transition-colors  tracking-tight leading-tight"> {item} </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {getItemDescription(page.id, 'section2', item, idx, page.title)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 3: Value Propositions & Advantages */}
          <section className="bg-white border border-slate-100 rounded-none p-10 sm:p-20 premium-shadow shadow-slate-200/20 space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-[#0F172A]" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-slate-100">
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs tracking-[0.3em] text-[#0F172A] uppercase font-bold block">
                  03 / {page.section3.title.toUpperCase()}
                </span>
                <h2 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight text-slate-900"> {page.section3.title} </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  {page.section3.content}
                </p>
              </div>
              <button
                onClick={onEnquire}
                className="bg-[#0F172A] hover:bg-slate-900 text-white font-bold text-sm px-8 py-4 rounded-sm transition-all premium-shadow hover:scale-105 cursor-pointer inline-flex items-center gap-2 uppercase tracking-widest shrink-0"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {page.section3.items && page.section3.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {page.section3.items.map((item, idx) => (
                  <div key={idx} className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-none p-8 flex flex-col justify-between hover:premium-shadow hover:shadow-slate-900/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden min-h-[280px]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-[#0F172A] transition-colors duration-500" />
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-slate-100 text-[#0F172A] text-[10px] font-bold uppercase tracking-widest">
                        BENEFIT {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h4 className="font-display font-semibold text-slate-900 text-lg  tracking-tight leading-tight group-hover:text-[#0F172A] transition-colors"> {item} </h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {getItemDescription(page.id, 'section3', item, idx, page.title)}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F172A] group-hover:text-blue-800 transition-colors">
                      <span>Read Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 4: Collapsible Frequently Asked Questions (FAQ Accordion) */}
          <section className="bg-[#0F172A] text-white rounded-[40px] p-8 sm:p-20 space-y-12 relative overflow-hidden premium-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold text-slate-100 uppercase tracking-widest block">
                04 / FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-5xl  tracking-tight leading-tight"> Service Operations & <span className="text-white opacity-80">Standards FAQ</span> </h2>
              <p className="text-lg text-slate-50 font-normal leading-relaxed max-w-2xl">
                Understand how our customized consultation pathways and delivery benchmarks protect your organization.
              </p>
            </div>

            <div className="relative z-10 space-y-4 max-w-5xl">
              {getPageFaqs(page.id, page.category).map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className={`border rounded-[24px] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white border-white' : 'bg-white/10 border-white/20 hover:border-white/50'}`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className={`w-full flex items-center justify-between p-8 text-left font-display font-bold text-base sm:text-lg uppercase tracking-tight transition-colors focus:outline-none ${isOpen ? 'text-[#0F172A]' : 'text-white'}`}
                    >
                      <span>{faq.q}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#0F172A] text-white rotate-180' : 'bg-white/10 text-white'}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className={`px-8 pb-8 pt-2 text-lg font-normal leading-relaxed border-t ${isOpen ? 'border-slate-200 text-[#0F172A]' : 'border-white/10 text-slate-50'}`}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Unified Bottom Call-to-Action Banner - High Impact */}
          <section className="relative overflow-hidden bg-white text-slate-900 rounded-[4rem] p-16 sm:p-32 premium-shadow shadow-slate-200/30 border border-slate-100 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(#0F172A05_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/80 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-8 py-3 rounded-full text-[#0F172A] text-sm font-bold uppercase tracking-[0.2em] shadow-sm">
                  <Award className="w-5 h-5" /> 
                  Executive Consultation Portal
                </span>
                <h2 className="font-display font-semibold text-5xl sm:text-7xl  tracking-tight leading-[1.05] text-slate-900"> Ready to Formulate Your Customized Service Proposal? </h2>
                <p className="text-xl sm:text-2xl text-slate-500 leading-relaxed font-light max-w-4xl mx-auto">
                  Connect directly with our regional officers and senior advisors. Submit an advisory request today, and we will construct a bespoke strategy blueprint mapped precisely to your parameters within 24 hours.
                </p>
              </div>
              
              <div className="flex justify-center pt-8">
                <button
                  onClick={onEnquire}
                  className="inline-flex items-center gap-4 bg-[#0F172A] hover:bg-slate-900 text-white font-semibold px-14 py-7 rounded-none text-base premium-shadow shadow-slate-600/20 active:scale-95 transition-all hover:scale-105 uppercase tracking-widest cursor-pointer group"
                >
                  <span>Initiate Advisory Session</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  };

  return renderUnifiedLayout();
}
