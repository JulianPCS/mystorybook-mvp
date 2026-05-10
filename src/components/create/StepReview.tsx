"use client";

import { useState } from "react";
import Image from "next/image";
import { getPageById } from "@/lib/coloringPages";

type Props = {
  name: string;
  generatedCoverUrl: string | null;
  pages: string[];
  onSubmit: (parentName: string, email: string) => Promise<void>;
};

export default function StepReview({ name, generatedCoverUrl, pages, onSubmit }: Props) {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!parentName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onSubmit(parentName.trim(), email.trim());
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Cover + pages summary */}
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Cover */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          {generatedCoverUrl ? (
            <div className="w-36 rounded-xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src={generatedCoverUrl}
                alt={`${name}'s cover`}
                width={144}
                height={216}
                className="w-full"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-36 h-52 rounded-xl bg-purple-100 flex items-center justify-center text-purple-300 text-4xl shadow">
              🎨
            </div>
          )}
          <p className="text-center text-xs text-gray-400 mt-1">Front cover</p>
        </div>

        {/* Pages + back cover */}
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
              Your {pages.length} pages
            </p>
            <ul className="space-y-2">
              {pages.map((id, i) => {
                const page = getPageById(id);
                return page ? (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">{page.emoji}</span>
                    <span>{page.title}</span>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          {/* Back cover */}
          <div className="rounded-xl bg-purple-50 border border-purple-100 px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1">
              Back cover
            </p>
            <p className="text-sm font-extrabold text-purple-700">
              This book belongs to {name} 💛
            </p>
          </div>
        </div>
      </div>

      {/* Price callout */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center space-y-1">
        <p className="text-2xl font-extrabold text-amber-700">£30</p>
        <p className="text-sm text-amber-600">
          Personalised A4 colouring book · Printed &amp; delivered to your door · UK free delivery
        </p>
      </div>

      {/* Order form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="parent-name" className="block text-sm font-semibold text-gray-700">
              Your first name
            </label>
            <input
              id="parent-name"
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="e.g. Sarah"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="parent-email" className="block text-sm font-semibold text-gray-700">
              Your email address
            </label>
            <input
              id="parent-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 disabled:opacity-60 text-white font-bold py-4 rounded-2xl text-base transition-all shadow-md"
        >
          {loading ? "Reserving your book…" : `Reserve ${name}'s Book — £30`}
        </button>

        <p className="text-xs text-center text-gray-400">
          No card charged today. We&apos;ll email you to confirm and arrange payment before printing.
        </p>
      </form>
    </div>
  );
}
