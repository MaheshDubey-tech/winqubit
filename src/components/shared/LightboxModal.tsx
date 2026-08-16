'use client';

import React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface LightboxModalProps {
  item: GalleryItem | null;
  items?: GalleryItem[];
  onClose: () => void;
  onSelect?: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items = [],
  onClose,
  onSelect
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev && onSelect) {
      onSelect(items[currentIndex - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext && onSelect) {
      onSelect(items[currentIndex + 1]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E0E1C]/80 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        className="relative max-w-5xl w-full glass-panel border border-white/60 bg-white/30 backdrop-blur-3xl overflow-hidden p-4 sm:p-6 shadow-2xl rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/60 text-[#5D1451] hover:bg-[#5D1451] hover:text-white transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative w-full h-[60vh] max-h-[550px] rounded-2xl overflow-hidden bg-black/10 flex items-center justify-center">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />

          {/* Navigation Controls */}
          {hasPrev && (
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/60 backdrop-blur-md text-[#5D1451] hover:bg-[#5D1451] hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/60 backdrop-blur-md text-[#5D1451] hover:bg-[#5D1451] hover:text-white transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="accent">{item.category}</Badge>
              <span className="text-xs text-[#6E5B70] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1E0E1C]">{item.title}</h3>
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(t => (
                <span key={t} className="text-xs text-[#5D1451] bg-white/60 px-2.5 py-1 rounded-full border border-white/80 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#E83CB7]" />
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
