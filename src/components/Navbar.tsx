"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Learn with Coloring" width={200} height={44} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-semibold">
          <Link href="/why" className="text-gray-600 hover:text-teal-600 transition-colors">
            Why Colouring?
          </Link>
          <Link href="/books" className="text-gray-600 hover:text-teal-600 transition-colors">
            Browse Books
          </Link>
          <Link
            href="/books"
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Find Your Child&apos;s Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-gray-600 p-2"
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

      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-teal-50 px-4 py-4 flex flex-col gap-3">
          <Link
            href="/why"
            className="text-gray-700 font-semibold py-2"
            onClick={() => setMenuOpen(false)}
          >
            Why Colouring?
          </Link>
          <Link
            href="/books"
            className="text-gray-700 font-semibold py-2"
            onClick={() => setMenuOpen(false)}
          >
            Browse Books
          </Link>
          <Link
            href="/books"
            className="bg-teal-500 text-white text-center font-bold py-3 rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Find Your Child&apos;s Book
          </Link>
        </div>
      )}
    </nav>
  );
}
