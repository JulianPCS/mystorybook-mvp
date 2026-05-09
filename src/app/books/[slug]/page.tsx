"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookCover from "@/components/BookCover";
import CheckoutModal from "@/components/CheckoutModal";
import { getBookBySlug, generateNameBook } from "@/lib/data";
import type { BookEntry } from "@/lib/data";

const SAMPLE_SPREADS = [
  { emoji: "🦋", bg: "bg-teal-50", border: "border-teal-200", label: "Page 4–5" },
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
      : `${book.name}'s Colouring Book`;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 font-semibold mb-8">
          <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
          <span className="mx-2">›</span>
          <a href="/books" className="hover:text-teal-600 transition-colors">Books</a>
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
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                ✨ Personalised Edition
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-800 leading-tight mb-2">
                {title}
              </h1>
              <p className="text-gray-500 font-semibold">
                {book.type === "occasion"
                  ? `A beautiful personalised colouring book to celebrate ${book.name}.`
                  : `A beautiful personalised colouring book made just for ${book.name}.`}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-teal-600">£9.99</span>
              <span className="text-sm text-gray-400 font-semibold">incl. UK delivery</span>
            </div>

            {/* Book details */}
            <div className="bg-teal-50 rounded-2xl p-5 grid grid-cols-2 gap-3">
              {[
                { icon: "📄", label: "32 pages" },
                { icon: "📐", label: "A4 format" },
                { icon: "🖨️", label: "High-quality print" },
                { icon: "🇬🇧", label: "UK delivery" },
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
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-black text-xl py-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-teal-200"
            >
              Get {book.name}&apos;s Book — £9.99 🎨
            </button>

            <p className="text-center text-xs text-gray-400 font-semibold">
              No payment now — reserve your place and we&apos;ll email you when it&apos;s ready.
            </p>

            {/* Social proof */}
            <div className="border-t border-teal-50 pt-4 flex flex-col gap-2">
              {[
                "\"My daughter absolutely loves her personalised book!\"",
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-teal-500 font-bold text-xl">Loading...</div>}>
      <BookDetailContent slug={params.slug} />
    </Suspense>
  );
}
