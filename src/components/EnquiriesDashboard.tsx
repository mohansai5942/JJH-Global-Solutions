import React, { useState } from 'react';
import { 
  Database, Search, Trash2, Filter, CheckCircle2, Clock, 
  User, Mail, Phone, Calendar, RefreshCw, Star, ArrowUpRight, ChevronRight 
} from 'lucide-react';
import { LeadInquiry } from '../types';
import { sectorsData } from '../data/servicesData';
import { motion } from 'motion/react';

interface EnquiriesDashboardProps {
  inquiries: LeadInquiry[];
  onUpdateStatus: (id: string, newStatus: 'new' | 'contacted' | 'resolved') => void;
  onDeleteLead: (id: string) => void;
  onClearAllLeads: () => void;
  onSeedLeads: () => void;
  onClose: () => void;
}

export default function EnquiriesDashboard({
  inquiries,
  onUpdateStatus,
  onDeleteLead,
  onClearAllLeads,
  onSeedLeads,
  onClose,
}: EnquiriesDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter inquiry records
  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSector = sectorFilter === 'all' || inq.sectorId === sectorFilter;
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;

    return matchesSearch && matchesSector && matchesStatus;
  });

  const getSectorLabel = (sectorId: string) => {
    return sectorsData.find(sec => sec.id === sectorId)?.title || sectorId;
  };

  const getServiceLabel = (sectorId: string, serviceId: string) => {
    const sector = sectorsData.find(sec => sec.id === sectorId);
    return sector?.services.find(ser => ser.id === serviceId)?.name || serviceId;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-xs flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-5xl rounded-sm premium-shadow overflow-hidden border border-slate-150 flex flex-col h-[85vh]">
        
        {/* Dashboard Header */}
        <div className="bg-white text-slate-900 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0F172A]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg leading-none">JJH Lead Management Console</h3>
              <p className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-1">
                Live Customer Inquiries CRM Panel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSeedLeads}
              className="flex items-center gap-1.5 bg-[#0F172A] hover:bg-slate-900 text-white px-3.5 py-2 rounded-sm text-xs font-semibold transition-all cursor-pointer"
              title="Populate test leads for evaluation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Seed Test Leads</span>
            </button>

            {inquiries.length > 0 && (
              <button
                onClick={onClearAllLeads}
                className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 px-3 py-2 rounded-sm text-xs font-medium transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Database</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-slate-500 hover:text-slate-900 text-xs font-medium bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-100 cursor-pointer"
            >
              Exit Console
            </button>
          </div>
        </div>

        {/* Dashboard Filter Bar */}
        <div className="bg-slate-50 p-4 border-b border-slate-150 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-sm pl-9 pr-3 py-2 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-sm p-2 bg-white text-slate-700 font-medium"
            >
              <option value="all">All Sectors</option>
              {sectorsData.map(sec => (
                <option key={sec.id} value={sec.id}>{sec.title}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full text-xs border border-slate-200 rounded-sm p-2 bg-white text-slate-700 font-medium"
            >
              <option value="all">All Statuses</option>
              <option value="new">🆕 New / Unattended</option>
              <option value="contacted">📞 Contacted / Active</option>
              <option value="resolved">✓ Resolved / Closed</option>
            </select>
          </div>

          <div className="flex items-center justify-end text-xs text-slate-500 font-medium font-mono">
            Records Shown: {filteredInquiries.length} / {inquiries.length}
          </div>
        </div>

        {/* Lead Table / Grid List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredInquiries.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <Database className="w-12 h-12 text-slate-300 stroke-1 mb-3 animate-pulse" />
              <h4 className="font-display font-semibold text-slate-800 text-base">No Matching CRM Leads Found</h4>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                Submit an inquiry on the front portal or click &quot;Seed Test Leads&quot; to populate test records instantly!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredInquiries.map((lead) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-sm p-4 transition-all ${
                    lead.status === 'new' ? 'border-blue-150 bg-slate-50/20 shadow-xs' : 'border-slate-150 bg-white'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    {/* User profile section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-display font-bold text-xs text-slate-600">
                          {lead.fullName.charAt(0)}
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5"> <span>{lead.fullName}</span> {lead.organization !== 'N/A' && ( <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md"> {lead.organization} </span> )} </h4>
                          <div className="flex items-center gap-3 text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {lead.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {lead.phone}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                        <span className="text-[9px] font-mono uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-bold">
                          {getSectorLabel(lead.sectorId)}
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-300" />
                        <span className="text-[9px] font-mono uppercase bg-slate-50 text-blue-800 px-2 py-0.5 rounded-md font-bold border border-slate-200/55">
                          {getServiceLabel(lead.sectorId, lead.serviceId)}
                        </span>
                      </div>
                    </div>

                    {/* Actions and Status section */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3">
                      <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{lead.submittedAt}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Status toggler */}
                        <select
                          value={lead.status}
                          onChange={(e) => onUpdateStatus(lead.id, e.target.value as any)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-md border focus:outline-hidden ${
                            lead.status === 'new' 
                              ? 'bg-amber-50 text-amber-800 border-amber-200' 
                              : lead.status === 'contacted' 
                              ? 'bg-slate-50 text-[#0F172A] border-slate-300' 
                              : 'bg-slate-50 text-slate-800 border-slate-200'
                          }`}
                        >
                          <option value="new">🆕 New Lead</option>
                          <option value="contacted">📞 Contacted</option>
                          <option value="resolved">✓ Resolved</option>
                        </select>

                        <button
                          onClick={() => onDeleteLead(lead.id)}
                          className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-sm border border-slate-100 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 bg-slate-50 p-3 rounded-sm text-xs text-slate-600 leading-relaxed border border-slate-100">
                    <span className="font-bold text-slate-400 block text-[9px] uppercase font-mono tracking-wider mb-1">Inquiry Description:</span>
                    {lead.message}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-slate-50 p-4 border-t border-slate-150 text-center text-xs text-slate-500 font-mono">
          JJH Enterprise Lead Management Desk — Confidential Advisor Workspace. Database is securely synced with client registry.
        </div>
      </div>
    </div>
  );
}
