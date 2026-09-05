'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <div className="bg-gradient-to-r from-[#5D1451] via-[#7B1C6D] to-[#E83CB7] border-b border-white/20 text-[11px] py-1.5 px-4 text-center text-white relative z-50 shadow-sm">
        <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD6F3]" />
            HackSpark 2026 Innovation Challenge Open
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/90">
            ₹2.5L Grants for Student POCs Across TSEC, TSDC, TIAT & TIHM
          </span>
          <Link
            href="/events"
            className="text-white hover:text-white/90 font-black underline inline-flex items-center gap-0.5 ml-1"
          >
            Explore <ArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-white/80 shadow-[0_10px_30px_rgba(93,20,81,0.06)] py-2.5'
            : 'bg-white/75 backdrop-blur-lg border-b border-white/60 py-3 shadow-[0_4px_16px_rgba(93,20,81,0.03)]'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 text-left group transition">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-white/90 bg-white flex items-center justify-center group-hover:scale-105 transition">
              <Image
                src="/winqubit-logo-cutout.png"
                alt="WINQubit"
                width={34}
                height={34}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-display text-lg sm:text-xl font-black tracking-tight text-[#1E1632] flex items-center">
                WIN<span className="text-[#E83CB7] font-bold ml-0.5">Qubit</span>
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#5D1451] font-bold -mt-1">
                Powered by InQubit
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-[0.14em]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-all duration-200 py-1 ${
                    isActive
                      ? 'text-[#5D1451] border-b-2 border-[#E83CB7] font-extrabold'
                      : 'text-[#6E6785] hover:text-[#5D1451]'
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
              className="text-[11px] font-bold uppercase tracking-wider text-[#5D1451] hover:text-[#E83CB7] px-3.5 py-1.5 rounded-full border border-[#E9E6F2] bg-white/80 hover:bg-white transition flex items-center gap-1.5 shadow-sm"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-[#059669]" />
              Collaborate
            </button>
            <button
              onClick={() => setJoinOpen(true)}
              className="border border-[#FBCFE8] bg-[#FCE7F3]/70 text-[#DB2777] hover:bg-[#FCE7F3] px-4 py-1.5 rounded-full text-[11px] font-bold transition uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
            >
              <CreditCard className="w-3.5 h-3.5" />
              Join (₹500)
            </button>
            <button
              onClick={() => setInnovateOpen(true)}
              className="btn-primary text-white px-4 py-1.5 rounded-full text-[11px] font-bold shadow-md hover:scale-105 transition uppercase tracking-wider flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Innovate
            </button>
          </div>

          {/* Mobile Menu & Quick Action Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setInnovateOpen(true)}
              className="sm:inline-flex hidden px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#5D1451] bg-[#5D1451]/10 border border-[#5D1451]/20"
            >
              Innovate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5D1451] hover:text-[#1E1632] bg-white/80 hover:bg-white rounded-xl border border-[#E9E6F2] shadow-sm"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 border-b border-[#E9E6F2] px-6 py-5 space-y-4 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-left text-xs font-bold transition ${
                      isActive ? 'bg-[#5D1451] text-white' : 'text-[#6E6785] hover:bg-[#F7F5FF] hover:text-[#1E1632]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E9E6F2] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setJoinOpen(true);
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#DB2777] bg-[#FCE7F3]/70 border border-[#FBCFE8] hover:bg-[#FCE7F3] transition"
              >
                Join WINQubit Student Pass (₹500)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInnovateOpen(true);
                }}
                className="btn-primary w-full py-2.5 rounded-xl text-xs font-bold text-white transition shadow-md"
              >
                Submit Project / Find Team
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCollaborateOpen(true);
                }}
                className="w-full py-2 rounded-xl text-xs font-bold text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] hover:bg-[#D1FAE5] flex items-center justify-center gap-1.5 transition"
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
