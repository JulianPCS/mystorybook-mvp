"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const CELEBRATIONS = [
  {
    group: "Festivals",
    items: [
      { slug: "my-first-christmas", name: "My First Christmas", emoji: "🎄" },
      { slug: "my-first-easter",    name: "My First Easter",    emoji: "🐣" },
      { slug: "my-first-halloween", name: "My First Halloween", emoji: "🎃" },
      { slug: "my-first-ramadan",   name: "My First Ramadan",   emoji: "🌙" },
      { slug: "my-first-eid",       name: "My First Eid",       emoji: "⭐" },
      { slug: "my-first-diwali",    name: "My First Diwali",    emoji: "🪔" },
      { slug: "my-first-holi",      name: "My First Holi",      emoji: "🌈" },
      { slug: "my-first-hanukkah",  name: "My First Hanukkah",  emoji: "✨" },
    ],
  },
  {
    group: "Milestones",
    items: [
      { slug: "my-first-birthday",  name: "My First Birthday",  emoji: "🎂" },
      { slug: "starting-school",    name: "Starting School",    emoji: "🎒" },
      { slug: "nursery-graduation", name: "Nursery Graduation", emoji: "🎓" },
    ],
  },
  {
    group: "Family",
    items: [
      { slug: "big-brother", name: "Big Brother", emoji: "🦁" },
      { slug: "big-sister",  name: "Big Sister",  emoji: "🦋" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [celebOpen, setCelebOpen] = useState(false);
  const [mobileCelebOpen, setMobileCelebOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openCeleb() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCelebOpen(true);
  }
  function closeCeleb() {
    closeTimer.current = setTimeout(() => setCelebOpen(false), 120);
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/logo.svg" alt="Learn with Coloring" width={200} height={44} className="h-9 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-semibold">

          {/* Female Names */}
          <Link
            href="/books?gender=female"
            className="flex items-center gap-1.5 text-gray-600 hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50 transition-colors whitespace-nowrap"
          >
            <span>👧</span> Female Names
          </Link>

          {/* Male Names */}
          <Link
            href="/books?gender=male"
            className="flex items-center gap-1.5 text-gray-600 hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50 transition-colors whitespace-nowrap"
          >
            <span>👦</span> Male Names
          </Link>

          {/* Celebrations dropdown */}
          <div className="relative" onMouseEnter={openCeleb} onMouseLeave={closeCeleb}>
            <button
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-colors whitespace-nowrap font-semibold ${celebOpen ? "text-teal-600 bg-teal-50" : "text-gray-600 hover:text-teal-600 hover:bg-teal-50"}`}
            >
              <span>🎉</span> Celebrations
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${celebOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {celebOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white border border-teal-100 rounded-2xl shadow-xl py-3 z-50"
                onMouseEnter={openCeleb}
                onMouseLeave={closeCeleb}
              >
                {CELEBRATIONS.map((section, si) => (
                  <div key={section.group}>
                    {si > 0 && <div className="my-1.5 mx-4 border-t border-gray-100" />}
                    <p className="px-4 pt-1 pb-0.5 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {section.group}
                    </p>
                    {section.items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/books/${item.slug}`}
                        onClick={() => setCelebOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-teal-50 text-gray-700 hover:text-teal-700 transition-colors text-sm font-semibold"
                      >
                        <span className="text-base w-5 text-center">{item.emoji}</span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mx-4 mt-2 pt-2 border-t border-gray-100">
                  <Link
                    href="/books#occasions"
                    onClick={() => setCelebOpen(false)}
                    className="flex items-center justify-center gap-1 text-xs font-black text-teal-500 hover:text-teal-700 py-1 transition-colors"
                  >
                    View all celebrations →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Why Colouring */}
          <Link
            href="/why"
            className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-xl hover:bg-teal-50 transition-colors whitespace-nowrap"
          >
            Why Colouring?
          </Link>

          {/* CTA */}
          <Link
            href="/books"
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Find Your Child&apos;s Book
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-600 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-teal-50 px-4 py-3 flex flex-col gap-1">

          <Link
            href="/books?gender=female"
            className="flex items-center gap-2 text-gray-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span>👧</span> Female Names
          </Link>

          <Link
            href="/books?gender=male"
            className="flex items-center gap-2 text-gray-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <span>👦</span> Male Names
          </Link>

          {/* Celebrations accordion */}
          <button
            className="flex items-center justify-between text-gray-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors w-full text-left"
            onClick={() => setMobileCelebOpen((o) => !o)}
          >
            <span className="flex items-center gap-2"><span>🎉</span> Celebrations</span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${mobileCelebOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileCelebOpen && (
            <div className="ml-4 flex flex-col gap-0.5 bg-teal-50/60 rounded-2xl p-2">
              {CELEBRATIONS.map((section) => (
                <div key={section.group}>
                  <p className="px-3 pt-2 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {section.group}
                  </p>
                  {section.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/books/${item.slug}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-white hover:text-teal-700 transition-colors"
                      onClick={() => { setMenuOpen(false); setMobileCelebOpen(false); }}
                    >
                      <span>{item.emoji}</span> {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          <Link
            href="/why"
            className="flex items-center gap-2 text-gray-700 font-semibold py-2.5 px-2 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            🔬 Why Colouring?
          </Link>

          <div className="mt-2 pt-2 border-t border-teal-50">
            <Link
              href="/books"
              className="block bg-teal-500 text-white text-center font-black py-3 rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              Find Your Child&apos;s Book 🎨
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
