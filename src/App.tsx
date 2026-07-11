import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Briefcase, Laptop, Building, Cpu, Globe, 
  Search, PhoneCall, FileText, Database, MapPin, 
  Mail, ArrowRight, Quote, Plus, X, Award, CheckCircle2, ChevronRight,
  Users, UserCheck, GraduationCap, Compass, TrendingUp, Clock, Zap, Bell,
  Smartphone, Gamepad2, Palette
} from 'lucide-react';
import { sectorsData } from './data/servicesData';
import { LeadInquiry, ServiceItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import BrochurePreview from './components/BrochurePreview';
import InquiryForm from './components/InquiryForm';
import EnquiriesDashboard from './components/EnquiriesDashboard';
import SectorStats from './components/SectorStats';
import { motion, AnimatePresence } from 'motion/react';

// New dynamic pages
import { customPages } from './data/pagesData';
import DynamicServicePage from './components/DynamicServicePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import TrainingDevPage from './components/TrainingDevPage';
import SkillDetailPage from './components/SkillDetailPage';
import WorkshopsPage from './components/WorkshopsPage';
import WorkshopDetailPage from './components/WorkshopDetailPage';

export default function App() {
  const [activeSector, setActiveSector] = useState('all');
  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/workshops') return 'workshops';
    if (path.startsWith('/workshops/')) {
      const wId = path.substring(11);
      return `workshop-${wId}`;
    }
    return 'home';
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize history state
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.pageId) {
        setActivePage(e.state.pageId);
      } else {
        const path = window.location.pathname;
        if (path === '/workshops') {
          setActivePage('workshops');
        } else if (path.startsWith('/workshops/')) {
          setActivePage(`workshop-${path.substring(11)}`);
        } else {
          setActivePage('home');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  // Modals state
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedServiceForBrochure, setSelectedServiceForBrochure] = useState<ServiceItem | undefined>(undefined);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [preSelectedSector, setPreSelectedSector] = useState<string | undefined>(undefined);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);
  
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [inquiries, setInquiries] = useState<LeadInquiry[]>([]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('jjh_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    } else {
      seedTestLeads();
    }
  }, []);

  const saveInquiries = (updated: LeadInquiry[]) => {
    setInquiries(updated);
    localStorage.setItem('jjh_inquiries', JSON.stringify(updated));
  };

  // Seeding realistic inquiries for testing - matching software, education, and HR sectors
  const seedTestLeads = () => {
    const seed: LeadInquiry[] = [
      {
        id: 'lead-1',
        fullName: 'Dr. Vivek Sharma',
        email: 'principal@apexengineering.edu',
        phone: '+91 94421 88022',
        organization: 'Apex Institute of Technology',
        sectorId: 'education',
        serviceId: 'tp-training-dev',
        message: 'Requesting a customized technical bootcamp on Artificial Intelligence & Full-Stack Development for 450 final-year B.Tech students. We are planning a direct placement drive with bulk hiring partners in September 2026.',
        submittedAt: '2026-07-10 14:32',
        status: 'new'
      },
      {
        id: 'lead-2',
        fullName: 'Nisha Singhal',
        email: 'nisha.s@gmail.com',
        phone: '+91 98112 34455',
        organization: 'Self Study',
        sectorId: 'education',
        serviceId: 'edu-open-10th',
        message: 'Interested in registering for the Open 10th certification course (NIOS). I want to choose Science and Computer Application subjects. Kindly send details regarding the curriculum syllabus and exam centers.',
        submittedAt: '2026-07-11 08:15',
        status: 'contacted'
      },
      {
        id: 'lead-3',
        fullName: 'Vikram Malhotra',
        email: 'v.malhotra@malhotragroup.in',
        phone: '+91 90033 11222',
        organization: 'Malhotra Enterprise Holdings',
        sectorId: 'software-services',
        serviceId: 'soft-web',
        message: 'Need a premium enterprise web architecture and custom dashboard. Looking for immediate development timeline options.',
        submittedAt: '2026-07-11 10:45',
        status: 'new'
      },
      {
        id: 'lead-4',
        fullName: 'Rachel Green',
        email: 'rachel@hiringlabs.com',
        phone: '+1 415 555 2671',
        organization: 'HiringLabs Corp',
        sectorId: 'hr-solutions',
        serviceId: 'hr-recruitment',
        message: 'We require high-fidelity talent recruiting assistance for hiring mobile developers.',
        submittedAt: '2026-07-11 11:30',
        status: 'resolved'
      }
    ];
    setInquiries(seed);
    localStorage.setItem('jjh_inquiries', JSON.stringify(seed));
  };

  const handleAddInquiry = (data: {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    sectorId: string;
    serviceId: string;
    message: string;
  }) => {
    const newLead: LeadInquiry = {
      id: `lead-${Date.now()}`,
      ...data,
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'new'
    };
    const updated = [newLead, ...inquiries];
    saveInquiries(updated);
  };

  const handleUpdateStatus = (id: string, newStatus: 'new' | 'contacted' | 'resolved') => {
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq);
    saveInquiries(updated);
  };

  const handleDeleteLead = (id: string) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    saveInquiries(updated);
  };

  const handleClearAllLeads = () => {
    saveInquiries([]);
  };

  const triggerInquiry = (sectId?: string, servId?: string) => {
    setPreSelectedSector(sectId);
    setPreSelectedService(servId);
    setIsFormOpen(true);
  };

  const triggerBrochure = (service: ServiceItem) => {
    setSelectedServiceForBrochure(service);
    setIsBrochureOpen(true);
  };

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let newPath = '/';
    if (pageId === 'workshops') {
      newPath = '/workshops';
    } else if (pageId.startsWith('workshop-')) {
      newPath = `/workshops/${pageId.substring(9)}`;
    } else if (pageId === 'home') {
      newPath = '/';
    } else if (pageId === 'about' || pageId === 'contact' || pageId === 'tp-training-dev') {
      newPath = `/${pageId}`;
    } else if (pageId.startsWith('skill-')) {
      newPath = `/${pageId}`;
    } else {
      newPath = `/${pageId}`;
    }

    if (window.location.pathname !== newPath) {
      window.history.pushState({ pageId }, '', newPath);
    }
  };

  // Get filtered sectors for Home View tabs
  const filteredSectors = activeSector === 'all' 
    ? sectorsData 
    : sectorsData.filter(sec => sec.id === activeSector);

  // Search-filter services
  const getSearchedServices = (services: ServiceItem[]) => {
    if (!searchQuery) return services;
    return services.filter(ser => 
      ser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ser.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ser.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Main content conditional router
  const renderMainContent = () => {
    // Custom Overridden Training & Development page content
    if (activePage === 'tp-training-dev') {
      return (
        <TrainingDevPage 
          onSelectSkill={(skillId) => handleNavigation(`skill-${skillId}`)}
          onNavigateToContact={() => {
            setPreSelectedSector('Training & Placement');
            setPreSelectedService('tp-training-dev');
            handleNavigation('contact');
          }}
        />
      );
    }

    // Separate skill details pages
    if (activePage.startsWith('skill-')) {
      const skillId = activePage.substring(6);
      return (
        <SkillDetailPage 
          skillId={skillId}
          onBack={() => handleNavigation('tp-training-dev')}
          onNavigateToContact={() => {
            setPreSelectedSector('Training & Placement');
            setPreSelectedService('tp-training-dev');
            handleNavigation('contact');
          }}
        />
      );
    }

    // Workshops page
    if (activePage === 'workshops') {
      return (
        <WorkshopsPage 
          onSelectWorkshop={(workshopId) => handleNavigation(`workshop-${workshopId}`)}
          onNavigateToContact={() => {
            setPreSelectedSector('Training & Placement');
            setPreSelectedService('workshops');
            handleNavigation('contact');
          }}
        />
      );
    }

    // Workshop detail page
    if (activePage.startsWith('workshop-')) {
      const workshopId = activePage.substring(9);
      return (
        <WorkshopDetailPage 
          workshopId={workshopId}
          onBack={() => handleNavigation('workshops')}
          onNavigateToContact={() => {
            setPreSelectedSector('Training & Placement');
            setPreSelectedService(`workshop-${workshopId}`);
            handleNavigation('contact');
          }}
        />
      );
    }

    // 1. Check for custom page match
    const matchedCustomPage = customPages.find(page => page.id === activePage && page.id !== 'tp-training-dev');
    if (matchedCustomPage) {
      return (
        <DynamicServicePage 
          page={matchedCustomPage}
          onBack={() => handleNavigation('home')}
          onEnquire={() => {
            setPreSelectedSector(matchedCustomPage.category);
            setPreSelectedService(matchedCustomPage.id);
            handleNavigation('contact');
          }}
        />
      );
    }

    // 2. Check for About Us page
    if (activePage === 'about') {
      return (
        <AboutPage 
          onBack={() => handleNavigation('home')} 
          onEnquire={() => handleNavigation('contact')} 
        />
      );
    }

    // 3. Check for Contact Us page (Full Screen Lead Capture page)
    if (activePage === 'contact') {
      return (
        <ContactUsPage 
          preSelectedSector={preSelectedSector}
          preSelectedService={preSelectedService}
          onInquirySubmitted={(data) => {
            handleAddInquiry(data);
            handleNavigation('home');
          }}
          onBack={() => handleNavigation('home')}
        />
      );
    }

    // 4. Default: Render Home Page
    return (
      <>
        {/* HERO SECTION */}
        <section className="relative text-white overflow-hidden py-32 sm:py-48" style={{ backgroundImage: "url('https://www.gumtree.com/info/life/wp-content/uploads/sites/4/2025/01/gumtree-jobs-1-1534x1024.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-[#0F172A]/80 to-[#4F46E5]/90" />
          
          <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest"
            >
              <span>Global Solutions for Modern Business</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] max-w-5xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200">Transform Your Future with</span>
              <br />
              <img 
                src="https://files.catbox.moe/xu4alo.webp" 
                alt="JJH Global Solutions" 
                className="inline-block h-20 sm:h-28 w-auto object-contain mt-4" 
                referrerPolicy="no-referrer"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-lg sm:text-xl max-w-3xl font-normal leading-relaxed"
            >
              Your trusted partner for workforce solutions, academic excellence, and digital innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-[#0F172A] hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-sm premium-shadow shadow-slate-600/20 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Consult with Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 font-bold px-8 py-4 rounded-sm transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </section>

        {/* CORE HIGHLIGHT FOCUS SECTION - Matching Image Style */}
        <section className="bg-white py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-20 space-y-4">
              <span className="text-[#0F172A] font-bold tracking-[0.2em] uppercase text-xs">Excellence in Training</span>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight text-slate-900"> Technical & Professional Skills </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card Style Matching Image */}
              {[
                { name: 'AI & Machine Learning', desc: 'Master Python, TensorFlow, and Neural Networks.', icon: <Cpu className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Full Stack Java', desc: 'End-to-end development with Java, Spring Boot & React.', icon: <Laptop className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Full Stack Python', desc: 'Build robust apps with Python, Django & Flask.', icon: <Cpu className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Web Development', desc: 'Modern web stacks: MERN, HTML5, CSS3.', icon: <Globe className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'VLSI Design', desc: 'Chip design, Verilog, and FPGA programming.', icon: <Building className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Embedded Systems', desc: 'Microcontrollers, IoT, and RTOS.', icon: <Database className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Soft Skills', desc: 'Communication, Interview Prep & Personality Dev.', icon: <Users className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' },
                { name: 'Corporate Training', desc: 'Upskilling teams for enterprise success.', icon: <Briefcase className="w-6 h-6" />, color: 'bg-slate-50 text-[#0F172A]' }
              ].map((skill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-slate-100 p-8 rounded-sm transition-all duration-500 hover:premium-shadow hover:shadow-slate-900/5 relative overflow-hidden h-full flex flex-col hover:border-slate-200"
                >
                  <div className="space-y-6">
                    <div className={`w-14 h-14 rounded-sm ${skill.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 text-xl tracking-wide leading-tight group-hover:text-[#0F172A] transition-colors"> {skill.name} </h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REDEFINING SKILL DEVELOPMENT SECTION */}
        <section className="bg-slate-50 py-32 border-y border-slate-100 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(#0F172A08_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-20 relative z-10">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <span className="text-[#0F172A] font-bold tracking-[0.2em] uppercase text-xs">Transformative Learning</span>
                <h2 className="font-display font-semibold text-5xl sm:text-6xl tracking-tight text-slate-900 leading-[1.1]"> Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-blue-400">Skill Development</span> </h2>
                <p className="text-slate-600 text-xl leading-relaxed font-light max-w-lg">
                  At JJH Global Solutions, we don't just teach; we train you for the job. Our curriculum is curated by industry experts to ensure you learn what the market demands today.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  'Practical hands-on training sessions',
                  'Live projects with real-world scenarios',
                  'Curriculum aligned with industry standards',
                  'Dedicated placement assistance',
                  'Certification support and validation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#0F172A] transition-colors duration-500 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0F172A] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-slate-700 text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-8 bg-blue-200/40 rounded-none blur-3xl transition-all duration-700 hover:bg-blue-300/40" />
              <div className="relative rounded-none overflow-hidden premium-shadow shadow-slate-900/10 border-8 border-white">
                <img 
                  src="/src/assets/images/professional_training_classroom_1783779218711.jpg" 
                  alt="Professional Training" 
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DETAILED SERVICES EXPLORER */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-24 space-y-24">
          
          {/* Sector filtering tabs in main section */}
          <div id="services-grid" className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-slate-200 pb-12">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] text-[#0F172A] uppercase block">Discover Our Capabilities</span>
              <h2 className="font-display font-semibold text-5xl  text-slate-900 tracking-tight">Our Service Portfolio</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { id: 'all', label: 'All Sectors' },
                { id: 'hr-solutions', label: 'HR Solutions' },
                { id: 'training-placement', label: 'Training & Placement' },
                { id: 'education', label: 'Education' },
                { id: 'software-services', label: 'Software Services' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSector(tab.id)}
                  className={`px-6 py-3.5 text-xs font-bold rounded-sm transition-all cursor-pointer uppercase tracking-widest ${
                    activeSector === tab.id
                      ? 'bg-[#0F172A] text-white premium-shadow shadow-slate-600/20 scale-105'
                      : 'bg-white hover:bg-slate-50 hover:text-[#0F172A] text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sectors and services grids loop */}
          <div className="space-y-24">
            {filteredSectors.map((sector) => {
              const searchedServices = getSearchedServices(sector.services);
              if (searchedServices.length === 0) return null;

              return (
                <div key={sector.id} className="space-y-12">
                  
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 text-white rounded-none p-12 sm:p-16 premium-shadow flex flex-col md:flex-row md:items-center justify-between gap-12">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="space-y-6 max-w-3xl relative z-10">
                      <span className="text-xs font-bold tracking-[0.4em] text-slate-300 uppercase block">
                        Professional Services
                      </span>
                      <h3 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight text-white leading-tight"> {sector.title} </h3>
                      <p className="text-slate-300 leading-relaxed font-light text-xl">
                        {sector.description}
                      </p>
                    </div>

                    <button
                      onClick={() => triggerInquiry(sector.id)}
                      className="shrink-0 relative z-10 bg-white hover:bg-slate-50 text-[#0F172A] text-sm font-bold px-10 py-5 rounded-sm premium-shadow transition-all cursor-pointer hover:scale-105 uppercase tracking-widest"
                    >
                      Consult Experts
                    </button>
                  </div>

                  {/* Services cards grid - Refined style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {searchedServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="group bg-white border border-slate-100 p-10 rounded-none shadow-sm hover:premium-shadow hover:shadow-slate-900/10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="space-y-8 relative z-10">
                          <div className="flex justify-between items-start">
                            <div className="w-16 h-16 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-all duration-500 shadow-sm group-hover:premium-shadow group-hover:shadow-slate-500/30">
                              {service.iconName === 'Globe' && <Globe className="w-7 h-7" />}
                              {service.iconName === 'BookOpen' && <BookOpen className="w-7 h-7" />}
                              {service.iconName === 'Briefcase' && <Briefcase className="w-7 h-7" />}
                              {service.iconName === 'Laptop' && <Laptop className="w-7 h-7" />}
                              {service.iconName === 'Cpu' && <Cpu className="w-7 h-7" />}
                              {service.iconName === 'FileText' && <FileText className="w-7 h-7" />}
                              {service.iconName === 'Building' && <Building className="w-7 h-7" />}
                              {service.iconName === 'UserCheck' && <UserCheck className="w-7 h-7" />}
                              {service.iconName === 'Users' && <Users className="w-7 h-7" />}
                              {service.iconName === 'Award' && <Award className="w-7 h-7" />}
                              {service.iconName === 'Compass' && <Compass className="w-7 h-7" />}
                              {service.iconName === 'GraduationCap' && <GraduationCap className="w-7 h-7" />}
                              {service.iconName === 'TrendingUp' && <TrendingUp className="w-7 h-7" />}
                              {service.iconName === 'Smartphone' && <Smartphone className="w-7 h-7" />}
                              {service.iconName === 'Gamepad2' && <Gamepad2 className="w-7 h-7" />}
                              {service.iconName === 'Palette' && <Palette className="w-7 h-7" />}
                            </div>

                            <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">
                              <span className="text-[10px] font-bold uppercase text-green-700 tracking-widest">Available</span>
                            </div>
                          </div>

                          <div className="cursor-pointer space-y-3" onClick={() => handleNavigation(service.id)}>
                            <h4 className="font-display font-semibold text-slate-900 text-2xl  tracking-tight group-hover:text-[#0F172A] transition-colors flex items-center gap-3"> <span>{service.name}</span> <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[#0F172A]" /> </h4>
                            <span className="text-xs font-bold tracking-widest text-[#0F172A]/80 block uppercase">
                              {service.tagline}
                            </span>
                          </div>

                          <p className="text-slate-600 leading-relaxed font-light text-base">
                            {service.shortDescription}
                          </p>
                        </div>

                        <div className="pt-10 flex items-center gap-4 relative z-10">
                          <button
                            onClick={() => triggerBrochure(service)}
                            className="flex-1 py-4 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-100 rounded-sm hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest"
                          >
                            <FileText className="w-4 h-4" />
                            <span>Brochure</span>
                          </button>
                          <button
                            onClick={() => handleNavigation(service.id)}
                            className="flex-1 py-4 text-xs font-bold bg-slate-900 text-white rounded-sm hover:bg-[#0F172A] transition-all cursor-pointer uppercase tracking-widest shadow-sm hover:premium-shadow hover:shadow-slate-500/20"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

          {/* METRICS & BUSINESS REVIEW DASHBOARD */}
          <SectorStats />

          <section className="bg-gradient-to-br from-[#0F172A] to-[#1e4bb3] p-12 sm:p-20 rounded-none premium-shadow relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border border-blue-400/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
            <div className="space-y-6 max-w-2xl relative z-10 text-white">
              <span className="text-xs font-bold tracking-[0.4em] text-blue-200 uppercase block">Resource Center</span>
              <h3 className="font-display font-semibold text-4xl sm:text-5xl  tracking-tight leading-tight"> Download Our Professional Prospectus </h3>
              <p className="text-lg text-slate-100 leading-relaxed font-light">
                Get a comprehensive guide to our services, curriculum modules, and enterprise solutions. Customize the prospectus with your organization details for internal review.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedServiceForBrochure(undefined);
                setIsBrochureOpen(true);
              }}
              className="relative z-10 bg-white hover:bg-slate-50 text-[#0F172A] font-bold px-10 py-5 rounded-sm premium-shadow flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105 uppercase tracking-widest text-sm shrink-0"
            >
              <span>Launch Brochure Builder</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </section>

        </main>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-900 selection:bg-slate-500 selection:text-white">
      
      {/* HEADER NAVIGATION */}
      <Header 
        activeSector={activeSector}
        setActiveSector={setActiveSector}
        activePage={activePage}
        onNavigate={handleNavigation}
        onOpenInquiry={() => triggerInquiry()}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onOpenBrochureCreator={() => {
          setSelectedServiceForBrochure(undefined);
          setIsBrochureOpen(true);
        }}
      />

      {/* MAIN ROUTER CONTAINER */}
      <div className="flex-1 flex flex-col">
        {renderMainContent()}
      </div>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigation} />

      {/* DYNAMIC MODALS AND DRAWERS */}
      <AnimatePresence>
        
        {/* Brochure Customizer Modal */}
        {isBrochureOpen && (
          <BrochurePreview 
            initialService={selectedServiceForBrochure}
            onClose={() => setIsBrochureOpen(false)}
            onSubmitInquiry={handleAddInquiry}
          />
        )}

        {/* Lead Inquiry slide-over/dialog modal */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg">
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute right-4 top-4 z-10 p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
              <InquiryForm 
                preSelectedSectorId={preSelectedSector}
                preSelectedServiceId={preSelectedService}
                onInquirySubmitted={(data) => {
                  handleAddInquiry(data);
                }}
                onClose={() => setIsFormOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Leads Management Dashboard CRM */}
        {isDashboardOpen && (
          <EnquiriesDashboard 
            inquiries={inquiries}
            onUpdateStatus={handleUpdateStatus}
            onDeleteLead={handleDeleteLead}
            onClearAllLeads={handleClearAllLeads}
            onSeedLeads={seedTestLeads}
            onClose={() => setIsDashboardOpen(false)}
          />
        )}

      </AnimatePresence>

    </div>
  );
}
