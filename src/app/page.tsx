"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BookCard from "@/components/BookCard";
import SamplePages from "@/components/SamplePages";
import HeroCarousel from "@/components/HeroCarousel";
import { NAMES, OCCASIONS } from "@/lib/data";

const FEATURED_NAMES = NAMES.filter(n => n.listed && n.coverImage).slice(0, 8);
const FEATURED_OCCASIONS = OCCASIONS.filter(o => o.listed && o.coverImage).slice(0, 4);

const TRUST_SIGNALS = [
  { icon: "🇬🇧", text: "Printed & shipped in the UK" },
  { icon: "🎨", text: "32 illustrated pages" },
  { icon: "👶", text: "Perfect for ages 3–8" },
  { icon: "💛", text: "Loved by families across the UK" },
];

export default function HomePage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    const slug = q.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    router.push(`/books/${slug}?name=${encodeURIComponent(q)}`);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cream to-amber-50 pt-12 pb-20 px-4 sm:px-6">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              ✨ Personalised just for your child
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 leading-tight mb-4">
              A Colouring Book<br />
              Made Just For{" "}
              <span className="text-teal-500 relative">
                [Name]
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6 Q100 2 198 6" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl font-semibold mb-8 max-w-lg mx-auto lg:mx-0">
              Beautifully illustrated colouring books personalised for your child — celebrating their name and the moments that matter most.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/books"
                className="bg-teal-500 hover:bg-teal-600 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-teal-200"
              >
                Find Your Child&apos;s Book 🎨
              </Link>
              <Link
                href="#browse-names"
                className="bg-white text-teal-600 font-bold text-lg px-8 py-4 rounded-2xl border-2 border-teal-100 hover:border-teal-300 transition-all duration-200"
              >
                Browse Names
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {TRUST_SIGNALS.map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-100">
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero carousel */}
          <HeroCarousel />
        </div>
      </section>

      {/* ── Search bar ── */}
      <section className="bg-white py-10 px-4 sm:px-6 border-b border-teal-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 font-semibold mb-4">Don&apos;t see your child&apos;s name? Search for it:</p>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter any name — e.g. Zainab, Oliver, Priya..."
              className="flex-1 border-2 border-teal-100 focus:border-teal-400 rounded-2xl px-5 py-3 font-semibold text-gray-800 outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Find Book
            </button>
          </form>
        </div>
      </section>

      {/* ── Browse by Name ── */}
      <section id="browse-names" className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-800">Browse by Name</h2>
              <p className="text-gray-500 font-semibold mt-1">Popular names across all communities</p>
            </div>
            <Link
              href="/books"
              className="text-teal-600 font-bold hover:text-teal-700 transition-colors text-sm whitespace-nowrap"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 sm:gap-6">
            {FEATURED_NAMES.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Occasion ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-800">Browse by Occasion</h2>
              <p className="text-gray-500 font-semibold mt-1">Celebrate every milestone & festival</p>
            </div>
            <Link
              href="/books#occasions"
              className="text-teal-600 font-bold hover:text-teal-700 transition-colors text-sm whitespace-nowrap"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {FEATURED_OCCASIONS.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample pages ── */}
      <SamplePages />

      {/* ── How it works ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-teal-50 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-800 mb-2">How It Works</h2>
          <p className="text-gray-500 font-semibold mb-10">Simple, personal, beautiful</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "🔍", title: "Find Their Name", desc: "Search for your child's name or browse our curated collection." },
              { step: "2", icon: "📧", title: "Reserve Your Copy", desc: "Leave your email and we'll notify you the moment it's ready." },
              { step: "3", icon: "📦", title: "Delivered to You", desc: "A beautiful, personalised book printed and shipped across the UK." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl p-6 shadow-sm border border-teal-50">
                <div className="w-10 h-10 bg-teal-500 text-white font-black rounded-xl flex items-center justify-center text-sm mb-4 mx-auto">
                  {s.step}
                </div>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-black text-gray-800 text-lg mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm font-semibold">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-teal-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to make their day? 🎨
          </h2>
          <p className="text-teal-100 font-semibold mb-8 text-lg">
            Find your child&apos;s name and reserve your personalised colouring book today.
          </p>
          <Link
            href="/books"
            className="inline-block bg-white text-teal-600 font-black text-lg px-10 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            Find Your Child&apos;s Book →
          </Link>
        </div>
      </section>
    </>
  );
}
