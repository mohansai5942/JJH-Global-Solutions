export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  metrics: ServiceMetric[];
  faq: ServiceFAQ[];
  iconName: string; // Lucide icon reference
  brochureAccent: string; // Tailwind color class e.g. 'emerald', 'sky', 'indigo'
}

export interface SectorCategory {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
  };
}

export interface LeadInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string; // College or Company
  sectorId: string;
  serviceId: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'resolved';
}
