'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { useData } from '@/context/DataContext';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isAdmin } = useData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  // Exact section navigation matching main page section order
  const navLinks = [
    { name: 'Home', href: '/', id: 'hero' },
    { name: 'Announcements', href: '/announcements', id: 'announcements' },
    { name: 'Four Colleges', href: '/#colleges', id: 'colleges' },
    { name: 'About Us', href: '/about', id: 'about' },
    { name: 'Portals', href: '/#innovate-collaborate', id: 'innovate-collaborate' },
    { name: 'Events', href: '/events', id: 'events' },
    { name: 'Committee', href: '/committee', id: 'committee' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

  // Scroll listener for sticky styling & Section Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy on Home Page matching exact order
      if (pathname === '/') {
        const sections = ['hero', 'announcements', 'colleges', 'about', 'innovate-collaborate', 'events', 'committee', 'contact'];
        const scrollPosition = window.scrollY + 180;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionEl = document.getElementById(sections[i]);
          if (sectionEl) {
            const top = sectionEl.offsetTop;
            if (scrollPosition >= top) {
              const matchedLink = navLinks.find(l => l.id === sections[i]);
              if (matchedLink) {
                setActiveSection(matchedLink.name);
                break;
              }
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Update active section on route change
  useEffect(() => {
    setMobileOpen(false);
    if (pathname === '/') {
      setActiveSection('Home');
    } else {
      const currentLink = navLinks.find(l => l.href === pathname || (l.href === '/events' && pathname.startsWith('/events')));
      if (currentLink) {
        setActiveSection(currentLink.name);
      }
    }
  }, [pathname]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (pathname === '/' && link.id) {
      const targetElement = document.getElementById(link.id);
      if (targetElement) {
        e.preventDefault();
        setActiveSection(link.name);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 bg-white/85 backdrop-blur-2xl border-b border-white/80 shadow-md shadow-[#5D1451]/5'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* WINQubit Brand Logo Cutout */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image
              src="/winqubit-logo-cutout.png"
              alt="WINQubit Logo"
              width={40}
              height={40}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#5D1451] flex items-center gap-1 font-outfit">
              WINQubit
              <Sparkles className="w-3.5 h-3.5 text-[#E83CB7]" />
            </span>
            <span className="text-[9px] font-extrabold tracking-widest text-[#6E6785] uppercase -mt-0.5">
              Women Led Innovation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-2xl p-1.5 rounded-full border border-white/90 shadow-sm shadow-[#5D1451]/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-3 py-1.5 text-xs font-bold rounded-full transition-colors duration-300 z-10 ${
                  isActive ? 'text-white' : 'text-[#1E1632] hover:text-[#5D1451]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-full btn-primary -z-10 shadow-md shadow-[#E83CB7]/35"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Admin Link */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={isAdmin ? "/admin/dashboard" : "/admin"}
            className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] hover:bg-[#FCE7F3] hover:text-[#DB2777] hover:border-[#FBCFE8] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            <ShieldCheck className="w-4 h-4 text-[#4F46E5]" />
            <span>{isAdmin ? 'Admin Portal' : 'Admin Login'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-2xl glass-panel text-[#5D1451] focus:outline-none bg-white/80"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 p-6 glass-panel border border-white/90 bg-white/90 backdrop-blur-3xl shadow-2xl rounded-3xl"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setMobileOpen(false);
                    }}
                    className={`px-4 py-3 text-sm font-bold rounded-2xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'btn-primary text-white shadow-md'
                        : 'text-[#1E1632] hover:bg-[#EEF2FF]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-[#FFCFE5]" />}
                  </Link>
                );
              })}
              <hr className="my-2 border-[#E9E6F2]" />
              <Link
                href={isAdmin ? "/admin/dashboard" : "/admin"}
                className="flex items-center justify-between px-4 py-3 text-sm font-bold rounded-2xl btn-primary text-white shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span>{isAdmin ? 'Admin Dashboard' : 'Admin Portal Login'}</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
