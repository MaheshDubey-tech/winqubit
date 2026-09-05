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
  ArrowRight 
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E6F2] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
          <span className="text-[11px] font-extrabold text-[#5D1451] uppercase tracking-widest">
            Multidisciplinary Domains
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1632] mb-4">
          Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D1451] via-[#B82B8A] to-[#E83CB7]">Focus Clusters</span>
        </h1>

        <p className="text-[#6E6785] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
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
                className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between h-28 shadow-sm ${
                  isSelected
                    ? 'btn-primary text-white scale-105 shadow-md'
                    : 'bg-white/80 border-[#E9E6F2] text-[#6E6785] hover:text-[#5D1451] hover:bg-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#5D1451]'}`} />
                <span className="text-xs font-bold leading-tight">{c.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Detailed Cluster Specification Card */}
        <div className="glass-panel p-6 md:p-10 max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E9E6F2]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#5D1451]/10 text-[#5D1451] flex items-center justify-center shadow-sm">
                <SelectedIcon className="w-7 h-7 text-[#5D1451]" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#E83CB7] font-bold uppercase tracking-wider">
                  CLUSTER SPECIFICATION • WINQubit × InQubit Scope
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#1E1632]">
                  {selectedCluster.title}
                </h3>
              </div>
            </div>

            <div className="text-xs text-[#6E6785] bg-white/90 px-4 py-2 rounded-full border border-[#E9E6F2] self-start md:self-auto shadow-2xs font-medium">
              <span className="text-[#8E87A5]">Campuses: </span>
              <span className="text-[#5D1451] font-bold">{selectedCluster.alignedCampuses.join(' • ')}</span>
            </div>
          </div>

          {/* Subfields & Technology Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#5D1451]">
              Subfields & Technology Tracks
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedCluster.subfields.map((sub, i) => (
                <span
                  key={i}
                  className="bg-white/90 border border-[#E9E6F2] text-[#5D1451] px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-2xs"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Open Problem Statements */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E83CB7]">
              Sample Open Problem Statements for 2026-27
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {selectedCluster.openProblems.map((prob, i) => (
                <div
                  key={i}
                  className="glass-card-light p-4 text-xs text-[#6E6785] space-y-2 flex flex-col justify-between border border-white/95"
                >
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-[#5D1451] font-black bg-[#5D1451]/10 px-2 py-0.5 rounded">CHALLENGE 0{i + 1}</span>
                    <p className="leading-relaxed text-[#1E1632] font-medium pt-1">{prob}</p>
                  </div>
                  <button
                    onClick={() => setInnovateOpen(true)}
                    className="text-xs text-[#E83CB7] hover:text-[#5D1451] hover:underline pt-2 font-bold inline-flex items-center gap-0.5"
                  >
                    Propose Solution →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Project Showcase */}
          <div className="p-5 rounded-2xl bg-[#F7F5FF] border border-[#E9E6F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#5D1451] font-bold uppercase tracking-wider block mb-0.5">
                Proof-of-Concept Benchmark
              </span>
              <div className="text-sm font-bold text-[#1E1632]">{selectedCluster.sampleProject}</div>
            </div>
            <button
              onClick={() => setInnovateOpen(true)}
              className="btn-primary text-white font-bold text-xs px-6 py-2.5 rounded-full transition shadow-md shrink-0"
            >
              Submit in this Cluster →
            </button>
          </div>
        </div>
      </section>

      {/* 4. Corporate Challenge Callout */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="glass-panel p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-black text-[#1E1632]">
            Have an Industry Problem Statement for Our Innovators?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6785] max-w-xl mx-auto">
            Corporations, startups, and public bodies can sponsor hackathon problem tracks or submit live engineering bottlenecks for our student teams to solve.
          </p>
          <button
            onClick={() => setCollaborateOpen(true)}
            className="btn-primary text-white font-bold text-xs px-8 py-3 rounded-full transition shadow-lg"
          >
            Submit Corporate Problem Statement →
          </button>
        </div>
      </section>

      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </div>
  );
}
