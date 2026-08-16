'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'upcoming' | 'ongoing' | 'completed' | 'past' | 'featured' | 'important' | 'new' | 'primary' | 'secondary' | 'accent' | 'pink' | 'lavender' | 'blue' | 'urgent' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'upcoming',
  size = 'sm',
  className
}) => {
  const variantStyles: Record<string, string> = {
    // Exact Badges from WINQubit Design System Sheet
    upcoming: 'bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE] shadow-sm font-bold',
    ongoing: 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] shadow-sm font-bold',
    completed: 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] shadow-sm font-bold',
    past: 'bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB] shadow-sm font-semibold',
    featured: 'bg-[#FCE7F3] text-[#DB2777] border border-[#FBCFE8] shadow-sm font-bold',
    important: 'bg-[#FFEDD5] text-[#EA580C] border border-[#FED7AA] shadow-sm font-bold',
    new: 'bg-[#F3E8FF] text-[#9333EA] border border-[#E9D5FF] shadow-sm font-bold',
    
    // Core brand tokens & aliases
    primary: 'bg-[#5D1451]/10 text-[#5D1451] border border-[#5D1451]/20 font-bold',
    secondary: 'bg-[#ADD8E6]/40 text-[#0369a1] border border-[#ADD8E6]/60 font-bold',
    accent: 'bg-[#E83CB7]/15 text-[#E83CB7] border border-[#E83CB7]/30 font-bold',
    pink: 'bg-[#FCE7F3] text-[#DB2777] border border-[#FBCFE8] font-bold',
    lavender: 'bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE] font-bold',
    blue: 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] font-bold',
    urgent: 'bg-[#FFEDD5] text-[#EA580C] border border-[#FED7AA] font-bold',
    success: 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] font-bold',
    outline: 'border border-[#E9E6F2] text-[#6E6785] bg-white/60 backdrop-blur-md'
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs tracking-wide rounded-full',
    md: 'px-4 py-1.5 text-xs font-extrabold tracking-wide rounded-full'
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 tracking-wide backdrop-blur-md transition-all',
          variantStyles[variant] || variantStyles.upcoming,
          sizeStyles[size],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
