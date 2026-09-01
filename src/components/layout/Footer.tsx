'use client';

import React from 'react';
import Link from 'next/link';
import { CAMPUSES, INNOVATION_CLUSTERS, NAV_ITEMS } from '@/lib/initialData';
import { Sparkles, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 text-slate-400 text-xs">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20">
                W
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-tight text-white">
                  WIN<span className="text-violet-400 font-light ml-0.5">Qubit</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold -mt-1">
                  Powered by InQubit
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Women-Led. Inclusive. Student-Driven. A multi-campus student innovation and pre-incubation ecosystem uniting engineering, commerce, aviation, and hospitality institutions in Mumbai.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-semibold text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Incubation Pipeline Powered by InQubit</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-2 text-gray-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participating Campuses Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Active Campuses</h4>
            <ul className="space-y-2 text-gray-400">
              {CAMPUSES.map((c) => (
                <li key={c.id}>
                  <Link href="/leadership" className="hover:text-white transition flex items-center justify-between group">
                    <span>{c.shortName} — {c.tagline.split('&')[0].trim()}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-violet-400">
                <Link href="/partners" className="hover:underline">
                  + Add Your Campus Chapter →
                </Link>
              </li>
            </ul>
          </div>

          {/* Innovation Focus & Desk Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Central Secretariat</h4>
            <div className="space-y-2 text-gray-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                <span>Zagdu Singh Charitable Trust Campus, Thakur Village, Kandivali (E), Mumbai 400101</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:info@winqubit.org" className="hover:text-white transition">
                  info@winqubit.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 (022) 6730 8000 / 8100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} WINQubit Student Innovation Ecosystem. Powered by InQubit.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/resources" className="hover:text-gray-300 transition">
              Student Playbook
            </Link>
            <Link href="/resources" className="hover:text-gray-300 transition">
              Institutional Charter
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Campus Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
