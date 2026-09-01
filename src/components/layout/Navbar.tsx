'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  CreditCard 
} from 'lucide-react';
import { NAV_ITEMS } from '@/lib/initialData';
import { InnovateModal } from '@/components/shared/InnovateModal';
import { JoinModal } from '@/components/shared/JoinModal';
import { CollaborateModal } from '@/components/shared/CollaborateModal';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [innovateOpen, setInnovateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [collaborateOpen, setCollaborateOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification / Announcement Bar */}
      <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border-b border-violet-800/30 text-[11px] py-1.5 px-4 text-center text-slate-300 relative z-50">
        <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold text-violet-300">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            HackSpark 2026 Innovation Challenge Open
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400">
            ₹2.5L Grants for Student POCs Across TSEC, TSDC, TIAT & TIHM
          </span>
          <Link
            href="/events"
            className="text-cyan-400 hover:text-cyan-300 font-bold underline inline-flex items-center gap-0.5 ml-1"
          >
            Explore <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50 py-2.5'
            : 'bg-[#020617]/85 backdrop-blur-md border-b border-white/5 py-3'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 text-left group transition">
            <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition">
              W
            </div>
            <div>
              <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-white flex items-center">
                WIN<span className="text-violet-400 font-light ml-0.5">Qubit</span>
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold -mt-1">
                Powered by InQubit
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-5 text-[11px] font-semibold uppercase tracking-[0.14em]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-all duration-200 py-1 ${
                    isActive
                      ? 'text-cyan-400 border-b-2 border-cyan-400 font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <button
              onClick={() => setCollaborateOpen(true)}
              className="text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition flex items-center gap-1.5"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
              Collaborate
            </button>
            <button
              onClick={() => setJoinOpen(true)}
              className="border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black px-3.5 py-1.5 rounded-full text-[10px] font-bold transition uppercase tracking-wider flex items-center gap-1"
            >
              <CreditCard className="w-3 h-3" />
              Join (₹500)
            </button>
            <button
              onClick={() => setInnovateOpen(true)}
              className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-lg shadow-violet-600/20 hover:scale-105 transition uppercase tracking-wider flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Innovate
            </button>
          </div>

          {/* Mobile Menu & Quick Action Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setInnovateOpen(true)}
              className="sm:inline-flex hidden px-3 py-1.5 rounded-full text-[10px] font-bold text-cyan-400 border border-cyan-500/40"
            >
              Innovate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-5 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-left text-xs font-semibold ${
                      isActive ? 'bg-violet-600 text-white font-bold' : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setJoinOpen(true);
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black transition"
              >
                Join WINQubit Student Pass (₹500)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInnovateOpen(true);
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 transition shadow-lg shadow-violet-600/20"
              >
                Submit Project / Find Team
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCollaborateOpen(true);
                }}
                className="w-full py-2 rounded-xl text-xs font-semibold text-emerald-400 hover:bg-slate-900 flex items-center justify-center gap-1.5 transition"
              >
                <HeartHandshake className="w-4 h-4" /> Partner / Collaborate
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Modals */}
      <InnovateModal isOpen={innovateOpen} onClose={() => setInnovateOpen(false)} />
      <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
      <CollaborateModal isOpen={collaborateOpen} onClose={() => setCollaborateOpen(false)} />
    </>
  );
};
