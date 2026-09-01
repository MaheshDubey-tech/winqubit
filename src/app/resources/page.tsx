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
  FileSpreadsheet
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
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-cyan-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Knowledge & Compliance Hub
          </span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          WINQubit <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400">Resources</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Explore student guides, grant application templates, patent filing prior-art checklists, institutional charter bylaws, and annual reports.
        </p>
      </section>

      {/* Download Alert Toast */}
      {downloadedDoc && (
        <section className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between gap-4 animate-in fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white">Document Downloaded! </span>
                <span className="text-gray-300">Started download for <span className="text-cyan-300 font-semibold">{downloadedDoc}</span>.</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Verified by Committee</span>
          </div>
        </section>
      )}

      {/* 2. Filter Tabs & Resources Grid */}
      <section className="container mx-auto px-4 md:px-8">
        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition border ${
                activeCategory === c.id
                  ? 'bg-violet-600 border-violet-500 text-white font-bold shadow-lg shadow-violet-600/20'
                  : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-violet-500/30 transition group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-violet-400 font-bold bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                    {res.tag}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">
                    {res.fileSize}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                      {res.title}
                    </h3>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                      Format: {res.fileType}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500">
                  {res.downloadCount} Downloads
                </span>
                <button
                  onClick={() => handleDownload(res)}
                  className="bg-white/5 hover:bg-white/10 text-white font-bold text-xs px-4 py-2 rounded-full border border-white/10 transition hover:border-cyan-400 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IP & Patent Advisory Banner */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">
            Need Help Drafting a Provisional Patent or Filing Prior-Art?
          </h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Our Central Intellectual Property Advisory Desk assists student inventors with preliminary prior-art searches and provisional patent applications at zero cost before public showcase.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-cyan-500/20"
          >
            Schedule IP Advisory Call →
          </button>
        </div>
      </section>

      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} defaultCategory="mentor" />
    </div>
  );
}
