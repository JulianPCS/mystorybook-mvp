"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BookCard from "@/components/BookCard";
import { NAMES, OCCASIONS } from "@/lib/data";

const OCCASION_GROUPS = [
  { key: "festival",  label: "Festivals & Celebrations", emoji: "🎉" },
  { key: "milestone", label: "Milestones",                emoji: "🎓" },
  { key: "family",    label: "Family",                    emoji: "👨‍👩‍👧" },
];

function BooksContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender") as "female" | "male" | null;

  const [search, setSearch] = useState("");

  const allNames = gender ? NAMES.filter((n) => n.gender === gender) : NAMES;
  const filtered = search.trim()
    ? allNames.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
    : allNames;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    const match = NAMES.find((b) => b.name.toLowerCase() === q.toLowerCase());
    if (match) {
      router.push(`/books/${match.slug}`);
    } else {
      const slug = q.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
      router.push(`/books/${slug}?name=${encodeURIComponent(q)}`);
    }
  }

  const pageTitle = gender === "female"
    ? "Female Names"
    : gender === "male"
    ? "Male Names"
    : "Find Your Child's Book";

  const pageSubtitle = gender === "female"
    ? "Beautiful personalised colouring books for girls"
    : gender === "male"
    ? "Beautiful personalised colouring books for boys"
    : "Every child deserves a book made just for them";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        {gender && (
          <div className="flex justify-center gap-2 mb-4">
            <a
              href="/books"
              className="text-xs font-bold text-gray-400 hover:text-teal-600 transition-colors"
            >
              All Books
            </a>
            <span className="text-gray-300">›</span>
            <span className="text-xs font-bold text-teal-600">
              {gender === "female" ? "Female Names" : "Male Names"}
            </span>
          </div>
        )}
        <h1 className="text-4xl font-black text-gray-800 mb-2">
          {gender === "female" ? "👧 " : gender === "male" ? "👦 " : ""}
          {pageTitle}
        </h1>
        <p className="text-gray-500 font-semibold text-lg">{pageSubtitle}</p>

        {/* Gender toggle pills */}
        <div className="flex justify-center gap-2 mt-5">
          {[
            { label: "All", href: "/books", active: !gender },
            { label: "👧 Girls", href: "/books?gender=female", active: gender === "female" },
            { label: "👦 Boys", href: "/books?gender=male", active: gender === "male" },
          ].map((t) => (
            <a
              key={t.label}
              href={t.href}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                t.active
                  ? "bg-teal-500 text-white shadow"
                  : "bg-white border-2 border-teal-100 text-gray-600 hover:border-teal-300"
              }`}
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Names ── */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-2xl font-black text-gray-800">
            {gender === "female" ? "Girls' Names" : gender === "male" ? "Boys' Names" : "Browse by Name"}
          </h2>
          <span className="text-sm text-gray-400 font-semibold">{filtered.length} names</span>
        </div>

        <p className="text-gray-500 font-semibold mb-5">
          Don&apos;t see your child&apos;s name? Search below — we&apos;ll create a book for any name.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-8 max-w-xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search any name — e.g. Zainab, Oliver, Priya..."
            className="flex-1 border-2 border-teal-100 focus:border-teal-400 rounded-2xl px-5 py-3 font-semibold text-gray-800 outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Find Book
          </button>
        </form>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {filtered.map((book) => (
              <BookCard key={book.slug + book.community} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-600 font-bold text-lg mb-2">
              No results for &ldquo;{search}&rdquo;
            </p>
            <p className="text-gray-400 font-semibold mb-6">
              No problem — we can make a book for any name!
            </p>
            <button
              onClick={handleSearch}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-2xl transition-all"
            >
              Create a Book for &ldquo;{search}&rdquo;
            </button>
          </div>
        )}
      </section>

      {/* ── Occasions — only show when not filtering by gender ── */}
      {!gender && (
        <section id="occasions">
          <h2 className="text-2xl font-black text-gray-800 mb-1">Browse by Celebration</h2>
          <p className="text-gray-500 font-semibold mb-10">
            Celebrate every milestone, festival, and family moment
          </p>

          <div className="flex flex-col gap-10">
            {OCCASION_GROUPS.map(({ key, label, emoji }) => {
              const books = OCCASIONS.filter((o) => o.occasionGroup === key);
              return (
                <div key={key}>
                  <h3 className="text-lg font-black text-gray-700 mb-4 flex items-center gap-2">
                    <span>{emoji}</span> {label}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                    {books.map((book) => (
                      <BookCard key={book.slug} book={book} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default function BooksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-teal-500 font-bold text-xl">Loading...</div>}>
      <BooksContent />
    </Suspense>
  );
}
