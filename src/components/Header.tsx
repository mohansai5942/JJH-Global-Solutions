import React, { useState } from 'react';
import { 
  GraduationCap, Menu, X, PhoneCall, FileText, Database, 
  ChevronDown, ChevronRight, Briefcase, Award, Cpu, Users, Info, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSector: string;
  setActiveSector: (sectorId: string) => void;
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenInquiry: () => void;
  onOpenDashboard: () => void;
  onOpenBrochureCreator: () => void;
}

export default function Header({
  activeSector,
  setActiveSector,
  activePage,
  onNavigate,
  onOpenInquiry,
  onOpenDashboard,
  onOpenBrochureCreator,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  // 1. HR SOLUTIONS MENU DATA
  const hrMenuItems = {
    id: 'hr-solutions',
    label: 'HR Solutions',
    icon: Briefcase,
    color: 'from-blue-600 to-indigo-800',
    directItems: [
      { id: 'hr-recruitment', label: 'Recruitment Services' },
      { id: 'hr-consulting', label: 'HR Consulting' },
      { id: 'hr-performance', label: 'Performance Management' }
    ],
    nestedGroups: [
      {
        title: 'Staffing & Manpower Solutions',
        items: [
          { id: 'hr-staffing-permanent', label: 'Permanent Staffing' },
          { id: 'hr-staffing-temporary', label: 'Temporary Staffing' },
          { id: 'hr-staffing-contract', label: 'Contract Staffing' },
          { id: 'hr-staffing-workforce', label: 'Workforce Management' }
        ]
      }
    ]
  };

  // 2. TRAINING & PLACEMENT MENU DATA
  const tpMenuItems = {
    id: 'training-placement',
    label: 'Training & Placement',
    icon: Award,
    color: 'from-blue-500 to-sky-600',
    directItems: [
      { id: 'tp-training-dev', label: 'Training & Development' },
      { id: 'tp-internships', label: 'Internships' },
      { id: 'workshops', label: 'Workshops (NEW)' }
    ],
    nestedGroups: [
      {
        title: 'Placements',
        items: [
          { id: 'tp-job-updates', label: 'Job Updates' },
          { id: 'tp-campus-placement', label: 'Campus Placement Drives' }
        ]
      }
    ]
  };

  // 3. EDUCATION MENU DATA
  const eduMenuItems = {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    color: 'from-blue-700 to-indigo-900',
    directItems: [
      { id: 'edu-overseas', label: 'Overseas Education' }
    ],
    nestedGroups: [
      {
        title: 'Distance Education',
        items: [
          { id: 'edu-open-10th', label: 'Open 10th' },
          { id: 'edu-open-inter', label: 'Open Inter' },
          { id: 'edu-online-degree', label: 'Online Degree' }
        ]
      },
      {
        title: 'Admissions Offered',
        items: [
          { id: 'edu-btech', label: 'B.Tech' },
          { id: 'edu-mba', label: 'MBA' },
          { id: 'edu-mtech', label: 'M.Tech' },
          { id: 'edu-mbbs', label: 'MBBS' },
          { id: 'edu-bcom', label: 'B.Com' },
          { id: 'edu-bsc', label: 'B.Sc' },
          { id: 'edu-bsc-nursing', label: 'B.Sc (Nursing)' },
          { id: 'edu-ba', label: 'BA' },
          { id: 'edu-bba', label: 'BBA' },
          { id: 'edu-bca', label: 'BCA' }
        ]
      }
    ]
  };

  // 4. SOFTWARE SERVICES MENU DATA
  const softMenuItems = {
    id: 'software-services',
    label: 'Software Services',
    icon: Cpu,
    color: 'from-blue-600 to-indigo-950',
    categories: [
      {
        id: 'soft-mobile',
        label: 'Mobile App Development',
        items: [
          { id: 'soft-mobile-android', label: 'Android Applications' },
          { id: 'soft-mobile-ios', label: 'iOS Applications' },
          { id: 'soft-mobile-cross', label: 'Cross-Platform Applications' },
          { id: 'soft-mobile-startup', label: 'App for Start-ups' }
        ]
      },
      {
        id: 'soft-web',
        label: 'Web Development',
        items: [
          { id: 'soft-web-startup', label: 'Web for Start-ups' },
          { id: 'soft-web-growing', label: 'Web for Growing Business' },
          { id: 'soft-web-enterprise', label: 'Web for Enterprise' },
          { id: 'soft-web-ecommerce', label: 'Ecommerce Development' },
          { id: 'soft-web-app', label: 'Web App Development' },
          { id: 'soft-web-revamp', label: 'Website Revamp' }
        ]
      },
      {
        id: 'soft-game',
        label: 'Game Development',
        items: [
          { id: 'soft-game-rummy', label: 'Rummy Game Development' },
          { id: 'soft-game-unity', label: 'Unity 3D Game Development' },
          { id: 'soft-game-ludo', label: 'Ludo Game Development' },
          { id: 'soft-game-tambola', label: 'Tambola Game Development' }
        ]
      },
      {
        id: 'soft-graphic',
        label: 'Graphic Designing',
        items: [
          { id: 'soft-graphic-uiux', label: 'UI/UX Designing' },
          { id: 'soft-graphic-prototype', label: 'Mobile App Prototyping' },
          { id: 'soft-graphic-logo', label: 'Logo Designing' },
          { id: 'soft-graphic-cartoon', label: 'Digital Cartoon Making' }
        ]
      },
      {
        id: 'soft-marketing',
        label: 'Digital Marketing',
        items: [
          { id: 'soft-marketing-startup', label: 'For Start-ups' },
          { id: 'soft-marketing-growing', label: 'For Growing Business' },
          { id: 'soft-marketing-enterprise', label: 'For Enterprise' },
          { id: 'soft-marketing-seo', label: 'Search Engine Optimization (SEO)' },
          { id: 'soft-marketing-sem', label: 'Search Engine Marketing (SEM)' },
          { id: 'soft-marketing-social', label: 'Social Media Marketing' }
        ]
      }
    ]
  };

  const handleLogoClick = () => {
    setActiveSector('all');
    onNavigate('home');
    setMobileMenuOpen(false);
  };

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileExpanded = (id: string) => {
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to check if active page lies in a certain menu structure
  const isHRActive = () => {
    return activePage.startsWith('hr-');
  };

  const isTPActive = () => {
    return activePage.startsWith('tp-') || activePage === 'workshops' || activePage.startsWith('workshop-');
  };

  const isEduActive = () => {
    return activePage.startsWith('edu-');
  };

  const isSoftActive = () => {
    return activePage.startsWith('soft-');
  };

  return (
    <header id="main-site-header" className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div id="brand-logo" className="flex-shrink-0 flex items-center cursor-pointer select-none" onClick={handleLogoClick}>
            <img 
              src="https://files.catbox.moe/xu4alo.webp" 
              alt="JJH Global Solutions Logo" 
              className="h-14 sm:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav Items */}
          <nav id="desktop-navbar" className="hidden xl:flex items-center gap-1.5 ml-auto">
            
            {/* 1. HR Solutions Dropdown */}
            <div 
              id="nav-hr-solutions"
              className="relative"
              onMouseEnter={() => setActiveDropdown('hr')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubMenu(null);
              }}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  isHRActive() || activeDropdown === 'hr'
                    ? 'bg-slate-50 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Briefcase className={`w-4.5 h-4.5 ${isHRActive() || activeDropdown === 'hr' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>HR Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'hr' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'hr' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                  >
                    {hrMenuItems.directItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between hover:bg-slate-50/50 hover:text-slate-900 ${
                          activePage === item.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                    
                    {hrMenuItems.nestedGroups.map((group, idx) => (
                      <div 
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(group.title)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <button
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between group ${
                            activeSubMenu === group.title || activePage.startsWith('hr-staffing-') ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                          }`}
                        >
                          <span>{group.title}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${activeSubMenu === group.title ? 'translate-x-1' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeSubMenu === group.title && (
                            <motion.div
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              className="absolute left-full top-0 ml-1 w-60 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                            >
                              {group.items.map(subItem => (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleItemClick(subItem.id)}
                                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all hover:bg-slate-50/50 hover:text-slate-900 ${
                                    activePage === subItem.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Training & Placement Dropdown */}
            <div 
              id="nav-training-placement"
              className="relative"
              onMouseEnter={() => setActiveDropdown('tp')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubMenu(null);
              }}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  isTPActive() || activeDropdown === 'tp'
                    ? 'bg-slate-50 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Award className={`w-4.5 h-4.5 ${isTPActive() || activeDropdown === 'tp' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>Training & Placements</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'tp' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'tp' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                  >
                    {tpMenuItems.directItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between hover:bg-slate-50/50 hover:text-slate-900 ${
                          activePage === item.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}

                    {tpMenuItems.nestedGroups.map((group, idx) => (
                      <div 
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(group.title)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <button
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between group ${
                            activeSubMenu === group.title || activePage.startsWith('tp-') && !isTPActive() ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                          }`}
                        >
                          <span>{group.title}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${activeSubMenu === group.title ? 'translate-x-1' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeSubMenu === group.title && (
                            <motion.div
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              className="absolute left-full top-0 ml-1 w-60 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                            >
                              {group.items.map(subItem => (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleItemClick(subItem.id)}
                                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all hover:bg-slate-50/50 hover:text-slate-900 ${
                                    activePage === subItem.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Education Dropdown */}
            <div 
              id="nav-education"
              className="relative"
              onMouseEnter={() => setActiveDropdown('edu')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubMenu(null);
              }}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  isEduActive() || activeDropdown === 'edu'
                    ? 'bg-slate-50 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <GraduationCap className={`w-4.5 h-4.5 ${isEduActive() || activeDropdown === 'edu' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>Education</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'edu' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'edu' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                  >
                    {eduMenuItems.directItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between hover:bg-slate-50/50 hover:text-slate-900 ${
                          activePage === item.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}

                    {eduMenuItems.nestedGroups.map((group, idx) => (
                      <div 
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(group.title)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <button
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between group ${
                            activeSubMenu === group.title || activePage.startsWith('edu-') && !isEduActive() ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                          }`}
                        >
                          <span>{group.title}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${activeSubMenu === group.title ? 'translate-x-1' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeSubMenu === group.title && (
                            <motion.div
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              className="absolute left-full top-0 ml-1 w-60 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                            >
                              {group.items.map(subItem => (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleItemClick(subItem.id)}
                                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all hover:bg-slate-50/50 hover:text-slate-900 ${
                                    activePage === subItem.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Software Services Dropdown */}
            <div 
              id="nav-software-services"
              className="relative"
              onMouseEnter={() => setActiveDropdown('soft')}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubMenu(null);
              }}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                  isSoftActive() || activeDropdown === 'soft'
                    ? 'bg-slate-50 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Cpu className={`w-4.5 h-4.5 ${isSoftActive() || activeDropdown === 'soft' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>Software Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'soft' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'soft' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-72 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                  >
                    {softMenuItems.categories.map((category) => (
                      <div 
                        key={category.id}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(category.id)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <button
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all flex items-center justify-between group ${
                            activeSubMenu === category.id || activePage.startsWith(category.id) ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                          }`}
                        >
                          <span>{category.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${activeSubMenu === category.id ? 'translate-x-1' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeSubMenu === category.id && (
                            <motion.div
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              className="absolute right-full top-0 mr-1 w-64 bg-white rounded-sm premium-shadow border border-slate-100 py-2 z-50 shadow-slate-500/5"
                            >
                              {category.items.map(subItem => (
                                <button
                                  key={subItem.id}
                                  onClick={() => handleItemClick(subItem.id)}
                                  className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all hover:bg-slate-50/50 hover:text-slate-900 ${
                                    activePage === subItem.id ? 'text-slate-900 bg-slate-50' : 'text-slate-600'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-slate-200 mx-1" />

            {/* 5. About Us Button */}
            <button
              id="nav-about"
              onClick={() => handleItemClick('about')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all cursor-pointer ${
                activePage === 'about'
                  ? 'bg-purple-50 text-purple-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Info className={`w-4.5 h-4.5 ${activePage === 'about' ? 'text-purple-600' : 'text-slate-500'}`} />
              <span>About</span>
            </button>

            {/* 6. Contact Us Button */}
            <button
              id="nav-contact"
              onClick={() => handleItemClick('contact')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-[13px] font-semibold transition-all cursor-pointer ${
                activePage === 'contact'
                  ? 'bg-slate-50 text-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Mail className={`w-4.5 h-4.5 ${activePage === 'contact' ? 'text-slate-800' : 'text-slate-500'}`} />
              <span>Contact Us</span>
            </button>

          </nav>

          {/* Call-to-Actions (Desktop) */}
          <div className="hidden xl:flex items-center gap-2">
          </div>

          {/* Responsive Hamburger for anything less than XL */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => handleItemClick('contact')}
              className="p-2.5 text-slate-800 bg-slate-50 rounded-sm hover:bg-slate-100 transition-colors"
              title="Quick Enquiry"
            >
              <PhoneCall className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden border-t border-slate-100 bg-white premium-shadow absolute top-20 left-0 w-full px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto flex flex-col gap-5 z-50"
          >
            {/* 1. HR Solutions Accordion */}
            <div className="border border-slate-100 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleMobileExpanded('hr')}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-all ${
                  isHRActive() || mobileExpanded['hr'] ? 'bg-slate-50 text-slate-900' : 'text-slate-700 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Briefcase className={`w-4.5 h-4.5 ${isHRActive() || mobileExpanded['hr'] ? 'text-slate-800' : 'text-slate-500'}`} />
                  <span>HR Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded['hr'] ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpanded['hr'] && (
                <div className="bg-white p-2 border-t border-slate-50 space-y-1">
                  {hrMenuItems.directItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-semibold ${
                        activePage === item.id ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="h-px bg-slate-100 my-1" />
                  <span className="text-[10px] font-bold text-slate-800 tracking-wide block px-4 py-1.5 uppercase">Staffing Solutions</span>
                  {hrMenuItems.nestedGroups[0].items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-medium ${
                        activePage === item.id ? 'bg-slate-100 text-blue-800 font-bold' : 'text-slate-500 hover:bg-slate-50/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Training & Placement Accordion */}
            <div className="border border-slate-100 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleMobileExpanded('tp')}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-all ${
                  isTPActive() || mobileExpanded['tp'] ? 'bg-slate-50 text-slate-900' : 'text-slate-700 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Award className={`w-4.5 h-4.5 ${isTPActive() || mobileExpanded['tp'] ? 'text-slate-800' : 'text-slate-500'}`} />
                  <span>Training & Placements</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded['tp'] ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpanded['tp'] && (
                <div className="bg-white p-2 border-t border-slate-50 space-y-1">
                  {tpMenuItems.directItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-semibold ${
                        activePage === item.id ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="h-px bg-slate-100 my-1" />
                  <span className="text-[10px] font-bold text-slate-800 tracking-wide block px-4 py-1.5 uppercase">Placements</span>
                  {tpMenuItems.nestedGroups[0].items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-medium ${
                        activePage === item.id ? 'bg-slate-100 text-blue-800 font-bold' : 'text-slate-500 hover:bg-slate-50/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Education Accordion */}
            <div className="border border-slate-100 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleMobileExpanded('edu')}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-all ${
                  isEduActive() || mobileExpanded['edu'] ? 'bg-slate-50 text-slate-900' : 'text-slate-700 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className={`w-4.5 h-4.5 ${isEduActive() || mobileExpanded['edu'] ? 'text-slate-800' : 'text-slate-500'}`} />
                  <span>Education</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded['edu'] ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpanded['edu'] && (
                <div className="bg-white p-2 border-t border-slate-50 space-y-1.5">
                  <button
                    onClick={() => handleItemClick('edu-overseas')}
                    className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-semibold ${
                      activePage === 'edu-overseas' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50/50'
                    }`}
                  >
                    Overseas Education
                  </button>
                  
                  <div className="h-px bg-slate-100 my-1" />
                  <span className="text-[10px] font-bold text-slate-800 tracking-wide block px-4 py-1.5 uppercase">Distance Education</span>
                  {eduMenuItems.nestedGroups[0].items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-sm text-xs font-medium ${
                        activePage === item.id ? 'bg-slate-100 text-blue-800 font-bold' : 'text-slate-500 hover:bg-slate-50/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="h-px bg-slate-100 my-1" />
                  <span className="text-[10px] font-bold text-blue-900 tracking-wide block px-4 py-1.5 uppercase">Admissions Offered</span>
                  <div className="grid grid-cols-2 gap-2 p-1">
                    {eduMenuItems.nestedGroups[1].items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-sm text-[11px] font-medium ${
                          activePage === item.id ? 'bg-slate-100 text-blue-800 font-bold' : 'text-slate-600 bg-slate-50/50 hover:bg-slate-50/30'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Software Services Accordion */}
            <div className="border border-slate-100 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleMobileExpanded('soft')}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-all ${
                  isSoftActive() || mobileExpanded['soft'] ? 'bg-slate-50 text-slate-900' : 'text-slate-700 bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className={`w-4.5 h-4.5 ${isSoftActive() || mobileExpanded['soft'] ? 'text-slate-800' : 'text-slate-500'}`} />
                  <span>Software Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded['soft'] ? 'rotate-180' : ''}`} />
              </button>

              {mobileExpanded['soft'] && (
                <div className="bg-white p-2 border-t border-slate-50 space-y-3">
                  {softMenuItems.categories.map((category) => (
                    <div key={category.id} className="space-y-1">
                      <button
                        onClick={() => handleItemClick(category.id)}
                        className={`w-full text-left px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider flex items-center justify-between ${
                          activePage.startsWith(category.id) ? 'bg-slate-100 text-slate-900' : 'bg-slate-50/50 text-slate-700'
                        }`}
                      >
                        <span>{category.label}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="pl-3 space-y-1 border-l-2 border-slate-200 ml-3 mt-1">
                        {category.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                            className={`w-full text-left px-4 py-2 rounded-sm text-xs font-semibold ${
                              activePage === item.id ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50/30'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Standard static sections */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <button
                onClick={() => handleItemClick('about')}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-sm text-sm font-semibold transition-all ${
                  activePage === 'about' ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50'
                }`}
              >
                <Info className={`w-4.5 h-4.5 ${activePage === 'about' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>About JJH Global</span>
              </button>

              <button
                onClick={() => handleItemClick('contact')}
                className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-sm text-sm font-semibold transition-all ${
                  activePage === 'contact' ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50/50'
                }`}
              >
                <Mail className={`w-4.5 h-4.5 ${activePage === 'contact' ? 'text-slate-800' : 'text-slate-500'}`} />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Core utility actions */}
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenBrochureCreator();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full border border-slate-200 text-slate-700 py-3 rounded-sm font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Launch Brochure Builder</span>
              </button>

              <button
                onClick={() => {
                  onOpenDashboard();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full text-slate-500 py-2.5 rounded-sm font-medium text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Database className="w-4 h-4" />
                <span>Admin Leads Console</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
