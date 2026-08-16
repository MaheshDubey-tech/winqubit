'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  compact?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  compact = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          compact ? 'glass-card-compact p-5' : 'glass-panel p-8',
          hoverEffect && 'glass-panel-hover',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
