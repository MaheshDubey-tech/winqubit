'use client';

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'gradient' | 'ghost' | 'glass' | 'danger' | 'pastel-lavender' | 'pastel-pink' | 'pastel-blue';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-bold',
    md: 'px-6 py-3 text-sm font-bold',
    lg: 'px-8 py-4 text-base font-bold'
  };

  const variantStyles: Record<string, string> = {
    primary: 'btn-primary',
    gradient: 'btn-primary',
    ghost: 'btn-ghost',
    glass: 'btn-glass',
    'pastel-lavender': 'btn-ghost',
    'pastel-pink': 'btn-ghost border-[#FBCFE8] bg-[#FCE7F3]/70 text-[#DB2777]',
    'pastel-blue': 'btn-ghost border-[#BAE6FD] bg-[#E0F2FE]/70 text-[#0284C7]',
    danger: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02] transition-all font-bold'
  };

  const classes = twMerge(
    clsx(
      'inline-flex items-center justify-center gap-2 tracking-wide cursor-pointer transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
      sizeStyles[size],
      variantStyles[variant] || variantStyles.primary,
      className
    )
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
