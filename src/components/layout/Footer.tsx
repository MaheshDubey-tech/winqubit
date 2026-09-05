'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CAMPUSES, NAV_ITEMS } from '@/lib/initialData';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white/70 backdrop-blur-2xl border-t border-[#E9E6F2] pt-16 pb-10 text-[#6E6785] text-xs mt-20 relative z-10 shadow-[0_-10px_35px_rgba(93,20,81,0.02)]">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-[#E9E6F2] bg-white flex items-center justify-center">
                <Image
                  src="/winqubit-logo-cutout.png"
                  alt="WINQubit"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display text-lg font-black tracking-tight text-[#1E1632]">
                  WIN<span className="text-[#E83CB7] font-bold ml-0.5">Qubit</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#5D1451] font-bold -mt-1">
                  Powered by InQubit
                </div>
              </div>
            </div>
            
            <p className="text-[#6E6785] text-xs leading-relaxed max-w-sm">
              Women-Led. Inclusive. Student-Driven. A multi-campus student innovation and pre-incubation ecosystem uniting engineering, commerce, aviation, and hospitality institutions in Mumbai.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-bold text-[#059669]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Incubation Pipeline Powered by InQubit</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#1E1632] font-black text-xs uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-2 text-[#6E6785]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-[#5D1451] font-semibold transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participating Campuses Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#1E1632] font-black text-xs uppercase tracking-wider">Active Campuses</h4>
            <ul className="space-y-2 text-[#6E6785]">
              {CAMPUSES.map((c) => (
                <li key={c.id}>
                  <Link href="/leadership" className="hover:text-[#5D1451] font-medium transition flex items-center justify-between group">
                    <span>{c.shortName} — {c.tagline.split('&')[0].trim()}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition text-[#E83CB7]" />
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-[#5D1451] font-bold">
                <Link href="/partners" className="hover:underline text-[#E83CB7]">
                  + Add Your Campus Chapter →
                </Link>
              </li>
            </ul>
          </div>

          {/* Innovation Focus & Desk Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#1E1632] font-black text-xs uppercase tracking-wider">Central Secretariat</h4>
            <div className="space-y-2.5 text-[#6E6785] text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5D1451] shrink-0 mt-0.5" />
                <span>Zagdu Singh Charitable Trust Campus, Thakur Village, Kandivali (E), Mumbai 400101</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E83CB7] shrink-0" />
                <a href="mailto:info@winqubit.org" className="hover:text-[#5D1451] font-medium transition">
                  info@winqubit.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>+91 (022) 6730 8000 / 8100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E9E6F2] flex flex-col sm:flex-row items-center justify-between text-[#8E87A5] text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} WINQubit Student Innovation Ecosystem. Powered by InQubit.
          </div>
          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/resources" className="hover:text-[#5D1451] transition">
              Student Playbook
            </Link>
            <Link href="/resources" className="hover:text-[#5D1451] transition">
              Institutional Charter
            </Link>
            <Link href="/contact" className="hover:text-[#5D1451] transition">
              Campus Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
