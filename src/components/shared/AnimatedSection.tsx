'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -30% 0px',
    amount: 0.15
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 25, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative scroll-mt-28 transition-all duration-500 gpu-layer ${className} ${
        isInView ? 'active-scroll-section ring-1 ring-[#E83CB7]/20 rounded-[36px] p-2' : ''
      }`}
    >
      {/* Subtle ambient highlight indicator when section is scrolled into view */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute -inset-1.5 rounded-[40px] bg-gradient-to-r from-[#5D1451]/10 via-[#E83CB7]/15 to-[#ADD8E6]/10 blur-xl pointer-events-none -z-10"
        />
      )}

      {children}
    </motion.section>
  );
};
