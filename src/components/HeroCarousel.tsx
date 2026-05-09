"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import BookCover from "./BookCover";
import { NAMES } from "@/lib/data";

const BOOKS = NAMES.filter((n) => n.coverImage);

export default function HeroCarousel() {
  const [active, setActive] = useState(1);
  const [fading, setFading] = useState(false);
  const [hinted, setHinted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevIdx = (active - 1 + BOOKS.length) % BOOKS.length;
  const nextIdx = (active + 1) % BOOKS.length;

  function navigate(dir: "prev" | "next") {
    setFading(true);
    setTimeout(() => {
      setActive((i) => dir === "prev" ? (i - 1 + BOOKS.length) % BOOKS.length : (i + 1) % BOOKS.length);
      setFading(false);
    }, 110);
    setHinted(true);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      navigate(dx < 0 ? "next" : "prev");
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }

  // Auto-hint animation on mobile after 1.2s if user hasn't interacted
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hinted) setHinted(false); // keeps the hint visible until first swipe
    }, 1200);
    return () => clearTimeout(t);
  }, [hinted]);

  return (
    <div
      className="flex-shrink-0 flex flex-col items-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Swipe hint — mobile only, disappears after first interaction */}
      <div
        className={`flex items-center gap-2 mb-3 transition-all duration-500 lg:hidden ${hinted ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <ChevronLeft className="w-4 h-4 text-emerald-500 animate-pulse-left" />
        <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <SwipeIcon className="w-4 h-4" />
          Swipe to explore books
        </span>
        <ChevronRight className="w-4 h-4 text-emerald-500 animate-pulse-right" />
      </div>

      {/* Book display */}
      <div className="relative flex items-end gap-3 sm:gap-4">
        {/* Prev arrow */}
        <button
          onClick={() => navigate("prev")}
          aria-label="Previous book"
          className="absolute -left-5 sm:-left-7 bottom-1/2 translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-emerald-800 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-150 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Left book */}
        <div
          className={`rotate-[-6deg] translate-y-4 opacity-75 transition-opacity duration-100 ${fading ? "opacity-0" : ""}`}
        >
          <Link href={`/books/${BOOKS[prevIdx].slug}`} tabIndex={-1}>
            <BookCover
              name={BOOKS[prevIdx].name}
              emoji={BOOKS[prevIdx].emoji}
              accent={BOOKS[prevIdx].coverAccent}
              coverImage={BOOKS[prevIdx].coverImage}
              size="md"
            />
          </Link>
        </div>

        {/* Center book */}
        <div
          className={`relative z-10 drop-shadow-2xl transition-opacity duration-100 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <Link href={`/books/${BOOKS[active].slug}`}>
            <div className="relative">
              <BookCover
                name={BOOKS[active].name}
                emoji={BOOKS[active].emoji}
                accent={BOOKS[active].coverAccent}
                coverImage={BOOKS[active].coverImage}
                size="lg"
              />
              {/* "Tap to view" label on the center book */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] font-black px-3 py-0.5 rounded-full whitespace-nowrap shadow">
                Tap to view →
              </div>
            </div>
          </Link>
        </div>

        {/* Right book */}
        <div
          className={`rotate-[6deg] translate-y-4 opacity-75 transition-opacity duration-100 ${fading ? "opacity-0" : ""}`}
        >
          <Link href={`/books/${BOOKS[nextIdx].slug}`} tabIndex={-1}>
            <BookCover
              name={BOOKS[nextIdx].name}
              emoji={BOOKS[nextIdx].emoji}
              accent={BOOKS[nextIdx].coverAccent}
              coverImage={BOOKS[nextIdx].coverImage}
              size="md"
            />
          </Link>
        </div>

        {/* Next arrow */}
        <button
          onClick={() => navigate("next")}
          aria-label="Next book"
          className="absolute -right-5 sm:-right-7 bottom-1/2 translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-emerald-800 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-150 active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-8">
        {BOOKS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setHinted(true); setActive(i); }}
            aria-label={`Go to ${BOOKS[i].name}`}
            className={`rounded-full transition-all duration-200 ${
              i === active ? "w-5 h-2 bg-emerald-700" : "w-2 h-2 bg-emerald-200 hover:bg-emerald-300"
            }`}
          />
        ))}
      </div>

      {/* Book name label */}
      <p className={`mt-2 text-sm font-black text-emerald-900 transition-opacity duration-100 ${fading ? "opacity-0" : "opacity-100"}`}>
        {BOOKS[active].name}&apos;s Book
      </p>
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SwipeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12h6m-3-3v6M7 7c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17v.01" />
    </svg>
  );
}
