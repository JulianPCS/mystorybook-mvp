"use client";

import { useState } from "react";
import Link from "next/link";

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="bg-amber-400 text-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 sm:gap-4 text-center pr-10">
        <span className="text-xs sm:text-sm font-black uppercase tracking-wide">
          Launch Offer — 50% Off
        </span>
        <span className="hidden sm:block text-amber-700 font-bold">|</span>
        <span className="text-xs sm:text-sm font-semibold">
          Was{" "}
          <span className="line-through text-amber-700 font-bold">$19.99</span>{" "}
          — Now only{" "}
          <span className="font-black text-base sm:text-lg">$9.99</span>{" "}
          per book
        </span>
        <Link
          href="/books"
          className="hidden sm:inline-block bg-gray-900 hover:bg-gray-700 text-white font-black text-xs px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
        >
          Shop Now
        </Link>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-700 hover:text-gray-900 transition-colors p-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
