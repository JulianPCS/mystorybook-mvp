"use client";

import { useState } from "react";
import { getPageById } from "@/lib/coloringPages";
import PageCard from "./PageCard";
import PagePickerModal from "./PagePickerModal";

type Props = {
  pages: string[];
  onPageChange: (slotIndex: number, newPageId: string) => void;
};

export default function StepPages({ pages, onPageChange }: Props) {
  const [swappingSlot, setSwappingSlot] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gold-100 bg-white/70 px-5 py-4 shadow-sm">
        <p className="font-display text-xl font-bold text-emerald-950">Curate the first pages</p>
        <p className="mt-1 text-sm text-gray-500">
          We&apos;ve suggested a starter set. Each numbered slot becomes part of the final book layout.
        </p>
      </div>

      {/* Pages grid */}
      <div className="grid grid-cols-3 gap-4">
        {pages.map((pageId, i) => {
          const page = getPageById(pageId);
          if (!page) return null;
          return (
            <PageCard
              key={i}
              page={page}
              slotIndex={i}
              onSwap={(slot) => setSwappingSlot(slot)}
            />
          );
        })}
      </div>

      <p className="text-xs text-center text-gray-400 leading-relaxed">
        Page numbers show the order your child will see them in. Swap any page to refine the collection.
      </p>

      {/* Swap modal */}
      {swappingSlot !== null && (
        <PagePickerModal
          currentPageId={pages[swappingSlot]}
          onSelect={(newId) => onPageChange(swappingSlot, newId)}
          onClose={() => setSwappingSlot(null)}
        />
      )}
    </div>
  );
}
