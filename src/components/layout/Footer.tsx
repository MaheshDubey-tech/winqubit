'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import { useData } from '@/context/DataContext';

export const Footer: React.FC = () => {
  const { siteContent } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNav = [
    { name: 'Home', href: '/' },
    { name: 'Four Colleges', href: '/#colleges' },
    { name: 'About Us', href: '/about' },
    { name: 'Collaborations', href: '/collaborations' },
    { name: 'Committee', href: '/committee' },
    { name: 'Events', href: '/events' },
    { name: 'Announcements', href: '/announcements' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-24 border-t border-[#E9E6F2] bg-white/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/winqubit-logo-cutout.png"
                  alt="WINQubit"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-[#5D1451] flex items-center gap-1 font-outfit">
                  WINQubit
                  <Sparkles className="w-4 h-4 text-[#E83CB7]" />
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-[#6E6785] uppercase block -mt-1">
                  Women Led Innovation
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#6E6785] leading-relaxed max-w-sm font-normal">
              Empowering female researchers, student innovators, and industry leaders to dream, build, and innovate across our four-college consortium.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FCE7F3] text-[#DB2777] text-xs font-bold border border-[#FBCFE8]">
                Dream. Build. Innovate.
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold border border-[#C7D2FE]">
                Four-College Alliance
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-[#1E1632] uppercase tracking-wider font-outfit">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold text-[#6E6785] hover:text-[#5D1451] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-[#1E1632] uppercase tracking-wider font-outfit">
              Consortium Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-[#6E6785] font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E83CB7] flex-shrink-0 mt-0.5" />
                <span>{siteContent.contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5D1451] flex-shrink-0" />
                <a href={`mailto:${siteContent.contactInfo.email}`} className="hover:underline font-bold text-[#1E1632]">
                  {siteContent.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span className="font-bold text-[#1E1632]">{siteContent.contactInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-[#E9E6F2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#6E6785]">
          <p>© {new Date().getFullYear()} WINQubit (Women Led Innovation Four-College Consortium). All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-[#5D1451] transition-colors">
              Admin Portal
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-panel hover:bg-white text-[#5D1451] transition-transform hover:-translate-y-0.5 border border-white"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
