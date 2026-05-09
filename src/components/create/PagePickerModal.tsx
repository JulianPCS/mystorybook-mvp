"use client";

import Image from "next/image";
import { useState } from "react";
import { ColoringPage, COLORING_PAGES, CATEGORY_LABELS, CATEGORY_EMOJIS } from "@/lib/coloringPages";

type Category = ColoringPage["category"] | "all";

type Props = {
  currentPageId: string;
  onSelect: (pageId: string) => void;
  onClose: () => void;
};

const CATEGORIES: { key: Category; label: string; emoji: string }[] = [
  { key: "all",       label: "All",       emoji: "📚" },
  { key: "animals",   label: CATEGORY_LABELS.animals,   emoji: CATEGORY_EMOJIS.animals   },
  { key: "adventure", label: CATEGORY_LABELS.adventure, emoji: CATEGORY_EMOJIS.adventure },
  { key: "fantasy",   label: CATEGORY_LABELS.fantasy,   emoji: CATEGORY_EMOJIS.fantasy   },
  { key: "nature",    label: CATEGORY_LABELS.nature,    emoji: CATEGORY_EMOJIS.nature     },
];

function PageThumb({ page, selected }: { page: ColoringPage; selected: boolean }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !!page.thumbnail && !imgError;

  return (
    <>
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
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl">{page.emoji}</span>
          </div>
        )}
      </div>
      <div className="p-1.5">
        <p className="text-[11px] font-semibold text-gray-700 leading-tight">{page.title}</p>
      </div>
      {selected && (
        <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center shadow">
          <span className="text-white text-[10px] font-bold">✓</span>
        </div>
      )}
    </>
  );
}

export default function PagePickerModal({ currentPageId, onSelect, onClose }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? COLORING_PAGES
      : COLORING_PAGES.filter((p) => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-800">Choose a page</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-sm"
          >
            ✕
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 px-5 py-3 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === c.key
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Page grid */}
        <div className="flex-1 overflow-y-auto px-5 pb-5">
          <div className="grid grid-cols-3 gap-3">
            {filtered.map((page) => {
              const isCurrent = page.id === currentPageId;
              return (
                <button
                  key={page.id}
                  onClick={() => { onSelect(page.id); onClose(); }}
                  className={`relative rounded-xl overflow-hidden border-2 text-left transition-all ${
                    isCurrent
                      ? "border-purple-500 ring-2 ring-purple-200"
                      : "border-transparent hover:border-purple-300"
                  }`}
                >
                  <PageThumb page={page} selected={isCurrent} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
