'use client';

import React from 'react';

export const BackgroundAurora: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F7F5FF]">
      {/* Aurora Gradient Blobs matching exact spec: #8A2BE2 -> #E83CB7 -> #ADD8E6 */}
      <div
        className="absolute -top-32 -left-28 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40 animate-blob-1"
        style={{ background: 'radial-gradient(circle, #8A2BE2 0%, #E83CB7 60%, transparent 100%)' }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[750px] h-[750px] rounded-full blur-[160px] opacity-35 animate-blob-2"
        style={{ background: 'radial-gradient(circle, #E83CB7 0%, #ADD8E6 70%, transparent 100%)' }}
      />
      <div
        className="absolute -bottom-40 left-1/4 w-[800px] h-[800px] rounded-full blur-[180px] opacity-30 animate-blob-3"
        style={{ background: 'radial-gradient(circle, #ADD8E6 0%, #8A2BE2 55%, transparent 100%)' }}
      />
      <div
        className="absolute top-2/3 -left-36 w-[600px] h-[600px] rounded-full blur-[150px] opacity-25 animate-blob-1"
        style={{ background: 'radial-gradient(circle, #5D1451 0%, #E83CB7 60%, transparent 100%)' }}
      />

      {/* Subtle Noise Texture Grid */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Soft Ambient Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#E83CB7]/30 blur-[1px] animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[45%] left-[82%] w-3.5 h-3.5 rounded-full bg-[#8A2BE2]/20 blur-[1px] animate-ping" style={{ animationDuration: '7s' }} />
        <div className="absolute top-[78%] left-[28%] w-3 h-3 rounded-full bg-[#ADD8E6]/50 blur-[1px] animate-ping" style={{ animationDuration: '6s' }} />
      </div>
    </div>
  );
};
