'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Plane, 
  Utensils, 
  TrendingUp, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { INNOVATION_CLUSTERS } from '@/lib/initialData';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export default function InnovationPage() {
  const [selectedClusterId, setSelectedClusterId] = useState(INNOVATION_CLUSTERS[0].id);
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);

  const clusterIconMap: Record<string, any> = {
    Cpu,
    Bot,
    Plane,
    Utensils,
    TrendingUp,
    Leaf,
  };

  const selectedCluster = INNOVATION_CLUSTERS.find(c => c.id === selectedClusterId) || INNOVATION_CLUSTERS[0];
  const SelectedIcon = clusterIconMap[selectedCluster.iconName] || Cpu;

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* 1. Header Banner */}
      <section className="container mx-auto px-4 md:px-8 pt-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="h-[1px] w-12 bg-cyan-500/30" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Multidisciplinary Domains
          </span>
          <div className="h-[1px] w-12 bg-cyan-500/30" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-indigo-400">Focus Clusters</span>
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Six interdisciplinary technological clusters mapped directly to Mumbai campus laboratories, faculty research, and corporate problem statements.
        </p>
      </section>

      {/* 2. Cluster Selector Buttons */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 max-w-5xl mx-auto mb-10">
          {INNOVATION_CLUSTERS.map((c) => {
            const Icon = clusterIconMap[c.iconName] || Cpu;
            const isSelected = selectedClusterId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedClusterId(c.id)}
                className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-300' : 'text-gray-400'}`} />
                <span className="text-[11px] font-bold leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Detailed Cluster Specification Card */}
        <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-6 md:p-10 max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">
                <SelectedIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  CLUSTER SPECIFICATION • WINQubit × InQubit Scope
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {selectedCluster.title}
                </h3>
              </div>
            </div>

            <div className="text-xs text-gray-400 bg-slate-950 px-4 py-2 rounded-full border border-white/5 self-start md:self-auto">
              <span className="text-gray-500">Campuses: </span>
              <span className="text-cyan-300 font-semibold">{selectedCluster.alignedCampuses.join(' • ')}</span>
            </div>
          </div>

          {/* Subfields & Technology Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-violet-400">
              Subfields & Technology Tracks
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedCluster.subfields.map((sub, i) => (
                <span
                  key={i}
                  className="bg-white/[0.04] border border-white/10 text-white px-3 py-1.5 rounded-xl text-xs font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Open Problem Statements */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Sample Open Problem Statements for 2026-27
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {selectedCluster.openProblems.map((prob, i) => (
                <div
                  key={i}
                  className="bg-slate-950/80 border border-white/5 rounded-2xl p-4 text-xs text-gray-300 space-y-2 hover:border-cyan-500/20 transition flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold">CHALLENGE 0{i + 1}</span>
                    <p className="leading-relaxed">{prob}</p>
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-[10px] text-violet-400 hover:underline pt-2 font-bold inline-flex items-center gap-0.5"
                  >
                    Propose Solution →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Project Showcase */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-950/60 via-slate-950 to-indigo-950/60 border border-violet-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-0.5">
                Proof-of-Concept Benchmark
              </span>
              <div className="text-sm font-bold text-white">{selectedCluster.sampleProject}</div>
            </div>
            <button
              onClick={() => setInnovateOpen(true)}
              className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-violet-600/20 shrink-0"
            >
              Submit in this Cluster →
            </button>
          </div>
        </div>
      </section>

      {/* 4. Corporate Challenge Callout */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-lg font-bold text-white">
            Have an Industry Problem Statement for Our Innovators?
          </h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Corporations, startups, and public bodies can sponsor hackathon problem tracks or submit live engineering bottlenecks for our student teams to solve.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-full transition shadow-lg shadow-cyan-500/20"
          >
            Submit Corporate Problem Statement →
          </button>
        </div>
      </section>

      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} defaultCategory="industry" />
    </div>
  );
}
