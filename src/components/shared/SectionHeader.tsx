'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  action
}) => {
  return (
    <div className={`mb-12 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${action ? 'md:flex-row md:items-end md:justify-between' : ''}`}>
      <div className="max-w-3xl">
        {badge && (
          <Badge variant="accent" size="md" className="mb-4">
            {badge}
          </Badge>
        )}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1E0E1C] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-[#6E5B70] leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="mt-6 md:mt-0 flex-shrink-0">{action}</div>}
    </div>
  );
};
