"use client";

import { useState } from "react";
import Image from "next/image";
import { ColoringPage, getPageById } from "@/lib/coloringPages";

type Props = {
  name: string;
  generatedCoverUrl: string | null;
  pages: string[];
  onSubmit: (parentName: string, email: string) => Promise<void>;
};

function ReviewPageThumb({ page, pageNumber }: { page: ColoringPage; pageNumber: number }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !!page.thumbnail && !imgError;

  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gold-100 shadow-sm">
      <div className="relative aspect-[3/4] bg-cream">
        <div className="absolute left-2 top-2 z-10 h-6 w-6 rounded-full bg-emerald-900 text-gold-100 border border-gold-200 flex items-center justify-center text-[11px] font-extrabold shadow">
          {pageNumber}
        </div>
        {hasImage ? (
          <Image
            src={page.thumbnail}
            alt={page.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center">
            <span className="text-4xl">{page.emoji}</span>
            <span className="text-[10px] text-gray-400">Preview soon</span>
          </div>
        )}
      </div>
      <div className="px-2.5 py-2">
        <p className="text-[11px] font-bold text-gray-800 leading-tight">{page.title}</p>
      </div>
    </div>
  );
}

function StandardBackCover({ name }: { name: string }) {
  return (
    <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-emerald-950 border border-gold-200 shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(252,211,77,0.22),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute inset-3 rounded-lg border border-gold-300/45" />
      <div className="relative h-full p-4 flex flex-col items-center text-center text-cream">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gold-200">Learn with Coloring</p>
        <div className="my-auto space-y-3">
          <div className="mx-auto h-12 w-12 rounded-full border border-gold-300 flex items-center justify-center font-display text-xl text-gold-100">
            L
          </div>
          <p className="font-display text-lg font-bold leading-tight">
            This book belongs to {name}
          </p>
          <p className="text-[10px] leading-relaxed text-cream/75">
            A personalised colouring keepsake, made with care in the UK.
          </p>
        </div>
        <div className="h-6 w-20 rounded bg-white/90 border border-gold-100" />
      </div>
    </div>
  );
}

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
      {/* Full book layout */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-gold-100 bg-white/70 px-5 py-4 shadow-sm">
          <p className="font-display text-xl font-bold text-emerald-950">Full book layout</p>
          <p className="mt-1 text-sm text-gray-500">
            Review the front cover, numbered inside pages, and standard back cover before reserving.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {generatedCoverUrl ? (
            <div className="rounded-xl overflow-hidden shadow-lg border border-gold-200 bg-white">
              <Image
                src={generatedCoverUrl}
                alt={`${name}'s cover`}
                width={220}
                height={330}
                className="w-full"
                unoptimized
              />
              <p className="px-2.5 py-2 text-[11px] font-bold text-emerald-900">Front cover</p>
            </div>
          ) : (
            <div className="aspect-[2/3] rounded-xl bg-cream border border-gold-100 flex items-center justify-center text-emerald-200 text-4xl shadow">
              L
            </div>
          )}

          {pages.map((id, i) => {
            const page = getPageById(id);
            return page ? <ReviewPageThumb key={`${id}-${i}`} page={page} pageNumber={i + 1} /> : null;
          })}

          <div>
            <StandardBackCover name={name} />
            <p className="px-2.5 py-2 text-[11px] font-bold text-emerald-900">Back cover</p>
          </div>
        </div>
      </div>

      {/* Price callout */}
      <div className="bg-gold-50 border border-gold-200 rounded-2xl p-4 text-center space-y-1">
        <p className="text-2xl font-extrabold text-emerald-900">£30</p>
        <p className="text-sm text-emerald-700">
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 disabled:opacity-60 text-white font-bold py-4 rounded-2xl text-base transition-all shadow-md"
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
