import React, { useState, useEffect } from 'react';
import { Mail, Phone, Building2, User, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sectorsData } from '../data/servicesData';
import { motion } from 'motion/react';

interface InquiryFormProps {
  preSelectedSectorId?: string;
  preSelectedServiceId?: string;
  onInquirySubmitted: (data: {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    sectorId: string;
    serviceId: string;
    message: string;
  }) => void;
  onClose?: () => void;
}

// Use standard unified sectorsData
const allAvailableSectors = sectorsData;

export default function InquiryForm({
  preSelectedSectorId,
  preSelectedServiceId,
  onInquirySubmitted,
  onClose,
}: InquiryFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  
  // Set default selected sector and service safely
  const initialSector = allAvailableSectors.find(sec => sec.id === preSelectedSectorId) || allAvailableSectors[0];
  const initialService = initialSector.services.find(ser => ser.id === preSelectedServiceId) || initialSector.services[0];
  
  const [sectorId, setSectorId] = useState(initialSector.id);
  const [serviceId, setServiceId] = useState(initialService.id);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Filter services list based on sector selected
  const activeSector = allAvailableSectors.find(sec => sec.id === sectorId) || allAvailableSectors[0];
  const servicesList = activeSector.services;

  useEffect(() => {
    // If sector changes, reset service selection to first service in that sector
    const sector = allAvailableSectors.find(sec => sec.id === sectorId);
    if (sector && !sector.services.some(ser => ser.id === serviceId)) {
      setServiceId(sector.services[0].id);
    }
  }, [sectorId]);

  useEffect(() => {
    if (preSelectedSectorId) setSectorId(preSelectedSectorId);
    if (preSelectedServiceId) setServiceId(preSelectedServiceId);
  }, [preSelectedSectorId, preSelectedServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onInquirySubmitted({
      fullName,
      email,
      phone,
      organization: organization || 'N/A',
      sectorId,
      serviceId,
      message: message || 'I would like to explore this service and get custom quotes.',
    });

    setSubmitted(true);
    
    // Clear form after delay
    setTimeout(() => {
      setFullName('');
      setEmail('');
      setPhone('');
      setOrganization('');
      setMessage('');
      setSubmitted(false);
      if (onClose) onClose();
    }, 3000);
  };

  return (
    <div className="bg-white rounded-none border border-slate-100 p-8 md:p-12 premium-shadow shadow-slate-200/20 max-w-xl mx-auto w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 space-y-4"
        >
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto border border-slate-200">
            <CheckCircle2 className="w-8 h-8 text-[#0F172A]" />
          </div>
          <h3 className="font-display font-bold text-slate-900 text-2xl">Enquiry Registered!</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-slate-800">{fullName}</span>. One of our dedicated account executives from the <span className="font-bold text-slate-800">{activeSector.title}</span> division will contact you within the next 2 hours.
          </p>
          <div className="text-xs font-mono text-slate-400 mt-4">
            Confirmation Reference: JJH-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-display font-bold text-slate-900 text-xl">Consultation Request</h3>
              <p className="text-xs text-slate-400">Request service pricing plans & custom onboarding</p>
            </div>
            {onClose && (
              <button 
                type="button" 
                onClick={onClose} 
                className="text-sm font-medium text-slate-400 hover:text-[#0F172A] hover:bg-slate-50 px-2 py-1 rounded-md"
              >
                Close
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm pl-10 pr-4 py-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm pl-10 pr-4 py-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm pl-10 pr-4 py-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Institution</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="College or Business Name"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm pl-10 pr-4 py-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Sector of Interest</label>
              <select
                value={sectorId}
                onChange={(e) => setSectorId(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-sm p-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all text-slate-800 font-medium"
              >
                {allAvailableSectors.map(sec => (
                  <option key={sec.id} value={sec.id}>{sec.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Service</label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-sm p-2.5 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all text-slate-800 font-medium"
              >
                {servicesList.map(ser => (
                  <option key={ser.id} value={ser.id}>{ser.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Requirements</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 w-4.5 h-4.5 text-slate-400" />
              <textarea
                placeholder="Mention key parameters (e.g. branch, headcount, budget scope...)"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-sm pl-10 pr-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-[#0F172A] focus:bg-white focus:outline-hidden transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0F172A] hover:bg-slate-900 text-white text-sm font-semibold py-3 rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Consultation Request</span>
          </button>
        </form>
      )}
    </div>
  );
}
