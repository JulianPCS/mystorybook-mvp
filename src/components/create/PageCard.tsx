"use client";

import Image from "next/image";
import { useState } from "react";
import { ColoringPage, CATEGORY_LABELS } from "@/lib/coloringPages";

type Props = {
  page: ColoringPage;
  slotIndex: number;
  onSwap: (slotIndex: number) => void;
};

export default function PageCard({ page, slotIndex, onSwap }: Props) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !!page.thumbnail && !imgError;

  return (
    <div className="relative bg-white rounded-2xl border border-gold-100 shadow-sm overflow-hidden group">
      <div className="absolute left-2 top-2 z-10 h-7 w-7 rounded-full bg-emerald-900 text-gold-100 border border-gold-200 flex items-center justify-center text-xs font-extrabold shadow-md">
        {slotIndex + 1}
      </div>

      {/* Thumbnail */}
      <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden">
        {hasImage ? (
          <Image
            src={page.thumbnail}
            alt={page.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
            <span className="text-5xl">{page.emoji}</span>
            <p className="text-[10px] text-gray-400 text-center leading-tight">Coming soon</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 space-y-1">
        <span className="inline-block text-[10px] font-semibold bg-cream text-emerald-800 border border-gold-100 rounded-full px-2 py-0.5">
          {CATEGORY_LABELS[page.category]}
        </span>
        <p className="text-xs font-semibold text-gray-800 leading-tight">{page.title}</p>
      </div>

      {/* Swap — hover on desktop, always visible on mobile */}
      <button
        onClick={() => onSwap(slotIndex)}
        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-emerald-800 border border-gold-200 rounded-full px-2.5 py-1 shadow-sm hover:bg-cream transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 hidden sm:block"
      >
        Swap
      </button>
      <button
        onClick={() => onSwap(slotIndex)}
        className="w-full text-[11px] font-semibold text-emerald-800 py-1.5 border-t border-gold-100 hover:bg-cream transition-colors sm:hidden"
      >
        Swap this page
      </button>
    </div>
  );
}
