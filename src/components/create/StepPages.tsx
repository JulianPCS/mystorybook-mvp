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
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-500">
          We&apos;ve suggested a starter set based on your character. Swap any page to customise your book.
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

      <p className="text-xs text-center text-gray-400">
        Hover a page and click &ldquo;Swap&rdquo; to choose a different one
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
