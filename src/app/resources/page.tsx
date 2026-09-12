'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  HelpCircle,
  FileCode,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { RESOURCES } from '@/lib/initialData';
import { ResourceItem } from '@/types';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'students', label: 'Student Resources' },
    { id: 'documents', label: 'WINQubit Documents' },
    { id: 'institutional', label: 'Institutional Resources' },
    { id: 'reports', label: 'Reports & Whitepapers' },
  ];

  const filteredResources = activeCategory === 'all'
    ? RESOURCES
    : RESOURCES.filter(r => r.category.toLowerCase() === activeCategory.toLowerCase());

  const handleDownload = (doc: ResourceItem) => {
    setDownloadedDoc(doc.title);
    setTimeout(() => {
      setDownloadedDoc(null);
    }, 4000);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Knowledge & Compliance Hub
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          WINQubit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Resources</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Explore student guides, grant application templates, patent filing prior-art checklists, institutional charter bylaws, and annual reports.
        </p>
      </section>

      {/* Download Alert Toast */}
      {downloadedDoc && (
        <section className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-2xl p-4 flex items-center justify-between gap-4 animate-in fade-in shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-[#1E1632]">Document Downloaded! </span>
                <span className="text-[#6E6785]">Started download for <span className="text-[#5D1451] font-bold">{downloadedDoc}</span>.</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#059669] font-bold">Verified by Committee</span>
          </div>
        </section>
      )}

      {/* 2. Filter Tabs & Resources Grid */}
      <section className="container mx-auto px-4 md:px-8">
        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border shadow-sm ${
                activeCategory === c.id
                  ? 'btn-primary text-white scale-105 shadow-md shadow-[#E83CB7]/30'
                  : 'bg-white/80 border-[#E9E6F2] text-[#6E6785] hover:text-[#5D1451] hover:bg-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="glass-card-light p-6 rounded-3xl flex flex-col justify-between hover:border-[#E83CB7]/40 transition-all duration-300 group space-y-5 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#5D1451] font-bold bg-[#5D1451]/10 px-3 py-1 rounded-full border border-[#5D1451]/15">
                    {res.tag}
                  </span>
                  <span className="text-[11px] text-[#8E87A5] font-mono font-medium">
                    {res.fileSize}
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#E83CB7]/15 group-hover:text-[#E83CB7] transition-all">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E1632] group-hover:text-[#5D1451] transition leading-snug">
                      {res.title}
                    </h3>
                    <div className="text-[11px] text-[#8E87A5] font-mono mt-0.5 font-medium">
                      Format: {res.fileType}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6E6785] leading-relaxed font-normal">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E6F2] flex items-center justify-between">
                <span className="text-[11px] text-[#8E87A5] font-medium">
                  {res.downloadCount} Downloads
                </span>
                <button
                  onClick={() => handleDownload(res)}
                  className="px-4 py-2 rounded-full bg-white/90 border border-[#E9E6F2] hover:border-[#E83CB7] text-[#5D1451] hover:text-white hover:bg-[#5D1451] font-bold text-xs transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#E83CB7] group-hover:text-white transition-colors" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IP & Patent Advisory Banner */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass-panel p-8 md:p-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#5D1451]/10 border border-[#5D1451]/15 text-[#5D1451] text-[11px] font-extrabold uppercase tracking-widest mb-1">
            Intellectual Property Support
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-black text-[#1E1632]">
            Need Help Drafting a Provisional Patent or Filing Prior-Art?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6785] max-w-xl mx-auto leading-relaxed">
            Our Central Intellectual Property Advisory Desk assists student inventors with preliminary prior-art searches and provisional patent applications at zero cost before public showcase.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCollaborateOpen(true)}
              className="btn-primary text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition shadow-lg inline-flex items-center gap-2"
            >
              <span>Schedule IP Advisory Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} defaultCategory="mentor" />
    </div>
  );
}
