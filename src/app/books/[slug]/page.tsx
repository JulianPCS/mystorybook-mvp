"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookCover from "@/components/BookCover";
import CheckoutModal from "@/components/CheckoutModal";
import { getBookBySlug, generateNameBook } from "@/lib/data";
import type { BookEntry } from "@/lib/data";

const SAMPLE_SPREADS = [
  { emoji: "🦋", bg: "bg-emerald-50", border: "border-emerald-200", label: "Page 4–5" },
  { emoji: "⭐", bg: "bg-amber-50", border: "border-amber-200", label: "Page 8–9" },
  { emoji: "🌸", bg: "bg-pink-50", border: "border-pink-200", label: "Page 14–15" },
  { emoji: "🌿", bg: "bg-green-50", border: "border-green-200", label: "Page 22–23" },
];

function BookDetailContent({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name");
  const utmSource = searchParams.get("utm_source") || "";
  const utmCampaign = searchParams.get("utm_campaign") || "";
  const utmMedium = searchParams.get("utm_medium") || "";

  const [book, setBook] = useState<BookEntry | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const found = getBookBySlug(slug);
    if (found) {
      setBook(found);
    } else if (nameParam) {
      setBook(generateNameBook(nameParam));
    } else {
      // Capitalise slug as a fallback name
      const name = slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setBook(generateNameBook(name));
    }
  }, [slug, nameParam]);

  async function trackClick() {
    if (!book) return;
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book_slug: book.slug, page: "book-detail" }),
      });
    } catch {
      // non-blocking
    }
  }

  function handleCTAClick() {
    trackClick();
    setModalOpen(true);
  }

  if (!book) return null;

  const title =
    book.type === "occasion"
      ? book.name
      : `${book.name}'s Coloring Book`;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 font-semibold mb-8">
          <a href="/" className="hover:text-emerald-800 transition-colors">Home</a>
          <span className="mx-2">›</span>
          <a href="/books" className="hover:text-emerald-800 transition-colors">Books</a>
          <span className="mx-2">›</span>
          <span className="text-gray-600">{book.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: cover + samples */}
          <div className="flex flex-col items-center gap-6">
            <BookCover
              name={book.name}
              emoji={book.emoji}
              accent={book.coverAccent}
              coverImage={book.coverImage}
              size="lg"
              isOccasion={book.type === "occasion"}
            />

            {/* Sample interior spreads */}
            <div className="w-full">
              <p className="text-sm font-bold text-gray-500 text-center mb-3">
                Sample interior pages:
              </p>
              <div className="grid grid-cols-4 gap-2">
                {SAMPLE_SPREADS.map((s) => (
                  <div
                    key={s.label}
                    className={`${s.bg} ${s.border} border-2 rounded-2xl aspect-square flex flex-col items-center justify-center gap-1 p-2`}
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="text-[9px] font-bold text-gray-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: details + CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                ✨ Personalized Edition
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-800 leading-tight mb-2">
                {title}
              </h1>
              <p className="text-gray-500 font-semibold">
                {book.type === "occasion"
                  ? `A beautiful personalized coloring book to celebrate ${book.name}.`
                  : `A beautiful personalized coloring book made just for ${book.name}.`}
              </p>
            </div>

            {/* Price */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-400 text-gray-900 text-xs font-black px-2 py-0.5 rounded uppercase tracking-wide">
                  Launch Offer — 50% Off
                </span>
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-black text-gray-900">$9.99</span>
                <span className="text-xl text-gray-400 line-through font-semibold">$19.99</span>
                <span className="text-sm text-gray-500 font-semibold">incl. U.S. shipping</span>
              </div>
            </div>

            {/* Launch counter */}
            <div className="border border-gray-200 rounded-2xl p-4 bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">Launch spots claimed</span>
                <span className="text-sm font-black text-gray-900">78 / 100</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div className="bg-emerald-700 h-2 rounded-full" style={{ width: "78%" }} />
              </div>
              <p className="text-xs text-gray-500 font-semibold">Only 22 spots remaining at the launch price of $9.99</p>
            </div>

            {/* Book details */}
            <div className="bg-emerald-50 rounded-2xl p-5 grid grid-cols-2 gap-3">
              {[
                { icon: "📄", label: "32 pages" },
                { icon: "📐", label: "8.5 x 11 inch format" },
                { icon: "🖨️", label: "High-quality print" },
                { icon: "🇺🇸", label: "U.S. shipping" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span>{d.icon}</span>
                  <span>{d.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleCTAClick}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xl py-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
            >
              Get {book.name}&apos;s Book —{" "}
              <span className="line-through opacity-60 text-lg">$19.99</span>{" "}
              $9.99
            </button>

            <p className="text-center text-xs text-gray-400 font-semibold">
              No payment now — reserve your place and we&apos;ll email you when it&apos;s ready.
            </p>

            {/* Social proof */}
            <div className="border-t border-emerald-50 pt-4 flex flex-col gap-2">
              {[
                "\"My daughter absolutely loves her personalized book!\"",
                "\"Such a thoughtful and unique gift — will be ordering again.\"",
              ].map((q) => (
                <div key={q} className="bg-white rounded-xl p-3 text-sm text-gray-600 font-semibold border border-gray-100">
                  {q} ⭐⭐⭐⭐⭐
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        bookSlug={book.slug}
        bookName={title}
        childName={book.type === "name" ? book.name : ""}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        utmSource={utmSource}
        utmCampaign={utmCampaign}
        utmMedium={utmMedium}
      />
    </>
  );
}

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-emerald-700 font-bold text-xl">Loading...</div>}>
      <BookDetailContent slug={params.slug} />
    </Suspense>
  );
}
