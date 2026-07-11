import React, { useState, useRef } from 'react';
import { 
  X, Printer, Download, Sparkles, Building2, MapPin, Mail, Phone, 
  CheckCircle2, Award, ArrowRight, Star, Quote, ChevronRight 
} from 'lucide-react';
import { ServiceItem } from '../types';
import { sectorsData } from '../data/servicesData';
import { motion } from 'motion/react';

interface BrochurePreviewProps {
  initialService?: ServiceItem;
  onClose: () => void;
  onSubmitInquiry: (data: {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    sectorId: string;
    serviceId: string;
    message: string;
  }) => void;
}

export default function BrochurePreview({
  initialService,
  onClose,
  onSubmitInquiry,
}: BrochurePreviewProps) {
  // Find initial sector if service is provided
  const findSectorOfService = (serviceId?: string) => {
    if (!serviceId) return sectorsData[0];
    return sectorsData.find(sec => sec.services.some(ser => ser.id === serviceId)) || sectorsData[0];
  };

  const initialSector = findSectorOfService(initialService?.id);
  const defaultService = initialService || initialSector.services[0];

  const [selectedSector, setSelectedSector] = useState(initialSector);
  const [selectedService, setSelectedService] = useState(defaultService);

  // Customizer state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const printAreaRef = useRef<HTMLDivElement>(null);

  const handleSectorChange = (sectorId: string) => {
    const sector = sectorsData.find(sec => sec.id === sectorId);
    if (sector) {
      setSelectedSector(sector);
      setSelectedService(sector.services[0]);
    }
  };

  const handleServiceChange = (serviceId: string) => {
    const service = selectedSector.services.find(ser => ser.id === serviceId);
    if (service) {
      setSelectedService(service);
    }
  };

  const handleGenerateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    // Submit inquiry
    onSubmitInquiry({
      fullName,
      email,
      phone,
      organization: organization || 'Personal Inquiry',
      sectorId: selectedSector.id,
      serviceId: selectedService.id,
      message: notes || `Requested premium brochure for ${selectedService.name}.`,
    });

    setIsGenerated(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex justify-center items-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 w-full max-w-6xl rounded-sm premium-shadow overflow-hidden border border-slate-200/50 flex flex-col lg:flex-row h-auto lg:h-[85vh] my-auto">
        
        {/* LEFT COLUMN: CUSTOMIZER SIDEBAR (Hidden in Print Mode) */}
        <div className="w-full lg:w-[380px] bg-white border-b lg:border-b-0 lg:border-r border-slate-150 p-6 flex flex-col justify-between overflow-y-auto h-full shrink-0 no-print">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Brochure Customizer</h3>
                <p className="text-xs text-slate-500">Co-brand and generate a prospectus layout</p>
              </div>
              <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 lg:hidden">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleGenerateAndSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1">Select Sector</label>
                <select
                  value={selectedSector.id}
                  onChange={(e) => handleSectorChange(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden font-medium text-slate-800"
                >
                  {sectorsData.map(sec => (
                    <option key={sec.id} value={sec.id}>{sec.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-500 mb-1">Select Service</label>
                <select
                  value={selectedService.id}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden font-medium text-slate-800"
                >
                  {selectedSector.services.map(ser => (
                    <option key={ser.id} value={ser.id}>{ser.name}</option>
                  ))}
                </select>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">Recipients Profile (Co-Branding)</span>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-0.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-0.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-0.5">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-0.5">College / Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. IIT Delhi or Apex Software Ltd"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-0.5">Specific Timeline / Requirement</label>
                    <textarea
                      placeholder="e.g. Admissions for Fall 2026, or Contract staff of 10 engineers..."
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-sm p-2 bg-slate-50 focus:ring-2 focus:ring-[#0F172A] focus:outline-hidden resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F172A] hover:bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>Generate Brochure</span>
              </button>
            </form>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed">
            * Complete fields to activate print-resolution downloads & custom recipient branding on the cover page.
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE PROSPECTUS PREVIEW */}
        <div className="flex-1 flex flex-col justify-between h-full bg-slate-800 p-4 sm:p-6 overflow-y-auto">
          {/* Top Bar for Desktop Preview Controls */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700/50 no-print">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0F172A]" />
              <span className="text-xs font-mono text-slate-300">
                {isGenerated ? '✓ Co-Branded Prospectus Ready' : 'Interactive Brochure Preview'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isGenerated ? (
                <>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 text-white px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-all cursor-pointer"
                    title="Print / Save as PDF"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print PDF</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-slate-900 text-white px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
                  </button>
                </>
              ) : (
                <div className="text-xs text-slate-400 italic">
                  Fill customized details on left to unlock download/print
                </div>
              )}

              <button
                onClick={onClose}
                className="p-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-sm transition-all hidden lg:block ml-2 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Simulated Printed Brochure Pages Container */}
          <div ref={printAreaRef} className="flex-1 max-w-3xl mx-auto w-full space-y-8 print:space-y-0">
            
            {/* PAGE 1: THE COVER PAGE */}
            <div className="bg-white text-slate-900 premium-shadow rounded-sm overflow-hidden border border-slate-150 print:border-0 print:rounded-none flex flex-col justify-between p-12 min-h-[580px] print:min-h-screen relative print-page-break">
              {/* Subtle top accents */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#0F172A]" />
              
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <img 
                    src="https://files.catbox.moe/xu4alo.webp" 
                    alt="JJH Global Solutions Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs text-slate-500 font-medium">Corporate Portfolio / Prospectus 2026</span>
                </div>
                
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src="https://files.catbox.moe/xu4alo.webp" 
                    alt="JJH Logo" 
                    className="h-full w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="my-auto py-8">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-50 text-[#0F172A] mb-4 border border-slate-200">
                  {selectedSector.title}
                </span>

                <h1 className="font-display font-semibold text-slate-900 text-3xl sm:text-4xl tracking-tight leading-tight "> {selectedService.name} </h1>
                
                <p className="text-slate-500 text-sm mt-3 max-w-xl font-medium">
                  {selectedService.tagline}
                </p>

                {/* Customized Co-Branding Stamp */}
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-sm p-3 w-full max-w-md flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase text-slate-400 block font-bold">EXCLUSIVELY PREPARED FOR</span>
                      <p className="text-xs font-bold text-slate-800">
                        {fullName ? `${fullName}` : 'Valued Client / Corporate Partner'}
                      </p>
                      {organization && (
                        <span className="text-[10px] text-slate-500 font-medium block">
                          {organization}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-slate-100 pt-6 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                <div className="space-y-1">
                  <p>CONFIDENTIAL & PROPRIETARY</p>
                  <p>DOCUMENT ID: JJH-PRO-{selectedService.id.toUpperCase()}-2026</p>
                </div>
                <div>
                  <p>ESTABLISHED COLLABORATION</p>
                </div>
              </div>
            </div>

            {/* PAGE 2: STRATEGIC INSIGHT & CORE BENEFITS */}
            <div className="bg-white text-slate-900 premium-shadow rounded-sm overflow-hidden border border-slate-150 print:border-0 print:rounded-none p-12 min-h-[580px] print:min-h-screen flex flex-col justify-between print-page-break">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
                    SECTION 01: STRATEGIC OVERVIEW
                  </span>
                  <span className="text-xs text-slate-400">Page 02</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="font-display font-bold text-xl text-slate-900 tracking-tight"> Service Architecture & Delivery </h2>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-light">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display font-bold text-sm text-slate-900  tracking-wider mb-3"> Key Highlights & Framework Deliverables: </h3>
                    
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-sm border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-[#0F172A] shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Metrics Panel inside Brochure */}
              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-[10px] font-mono font-bold  tracking-widest text-slate-400 mb-3"> Key Structural Metrics </h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedService.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded-sm p-3 text-center">
                      <span className="block font-mono text-lg font-bold text-slate-900">{metric.value}</span>
                      <span className="text-[9px] font-medium text-slate-500 uppercase tracking-tight block mt-0.5">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PAGE 3: PERFORMANCE GRAPH & FAQS */}
            <div className="bg-white text-slate-900 premium-shadow rounded-sm overflow-hidden border border-slate-150 print:border-0 print:rounded-none p-12 min-h-[580px] print:min-h-screen flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
                    SECTION 02: ANALYSIS & FAQS
                  </span>
                  <span className="text-xs text-slate-400">Page 03</span>
                </div>

                <div className="space-y-6">
                  {/* Standard Performance graph inside brochure */}
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900  tracking-wider mb-2"> Growth & Reliability Index </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      Documented vertical growth indices highlighting customer satisfaction, placement parameters, and operational safety metrics.
                    </p>

                    <div className="bg-slate-50 border border-slate-100 rounded-sm p-4 space-y-3.5">
                      {/* Bar 1 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                          <span>SLA Verification & Delivery Compliance</span>
                          <span className="font-bold">99.2%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-slate-950 h-full rounded-full" style={{ width: '99%' }} />
                        </div>
                      </div>

                      {/* Bar 2 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                          <span>Client Feedback & Net Promoter Score</span>
                          <span className="font-bold">96.5%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#0F172A] h-full rounded-full" style={{ width: '96%' }} />
                        </div>
                      </div>

                      {/* Bar 3 */}
                      <div>
                        <div className="flex justify-between text-[11px] font-medium text-slate-600 mb-1">
                          <span>Efficiency & Execution Turnaround Rating</span>
                          <span className="font-bold">92.8%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-slate-400 h-full rounded-full" style={{ width: '93%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Frequently Asked Questions */}
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900  tracking-wider mb-3"> Expert Advisory / Frequently Asked Queries: </h3>
                    <div className="space-y-3">
                      {selectedService.faq.map((item, idx) => (
                        <div key={idx} className="space-y-1 text-xs">
                          <h4 className="font-bold text-slate-800 flex gap-1"> <span>Q:</span> <span>{item.question}</span> </h4>
                          <p className="text-slate-500 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stamp */}
              <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    JJH Global Solutions Group Corporate Office
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  CONFIDENTIAL 2026
                </span>
              </div>
            </div>

          </div>

          {/* Download Completion Banner */}
          {downloadSuccess && (
            <div className="no-print mt-4 bg-[#0F172A] text-white text-xs text-center py-2 rounded-sm font-semibold shadow-sm">
              ✓ Document compiled and downloaded successfully to local storage!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
