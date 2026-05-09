"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookCard from "@/components/BookCard";
import { NAMES, OCCASIONS } from "@/lib/data";

export default function BooksPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? NAMES.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
    : NAMES;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    // Check if it matches a known book
    const match = NAMES.find((b) => b.name.toLowerCase() === q.toLowerCase());
    if (match) {
      router.push(`/books/${match.slug}`);
    } else {
      const slug = q.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
      router.push(`/books/${slug}?name=${encodeURIComponent(q)}`);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-800 mb-2">Find Your Child&apos;s Book</h1>
        <p className="text-gray-500 font-semibold text-lg">
          Every child deserves a book made just for them
        </p>
      </div>

      {/* ── By Name ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-gray-800 mb-2">Browse by Name</h2>
        <p className="text-gray-500 font-semibold mb-6">
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
              <BookCard key={book.slug} book={book} />
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

      {/* ── By Occasion ── */}
      <section id="occasions">
        <h2 className="text-2xl font-black text-gray-800 mb-2">Browse by Occasion</h2>
        <p className="text-gray-500 font-semibold mb-8">
          Celebrate every milestone, festival, and family moment
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {OCCASIONS.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
