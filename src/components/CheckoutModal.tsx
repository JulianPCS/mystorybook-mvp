"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CheckoutModalProps {
  bookSlug: string;
  bookName: string;
  childName: string;
  isOpen: boolean;
  onClose: () => void;
  utmSource?: string;
  utmCampaign?: string;
  utmMedium?: string;
}

export default function CheckoutModal({
  bookSlug,
  bookName,
  childName,
  isOpen,
  onClose,
  utmSource = "",
  utmCampaign = "",
  utmMedium = "",
}: CheckoutModalProps) {
  const router = useRouter();
  const [name, setName] = useState(childName);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setName(childName);
  }, [childName]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          child_name: name.trim(),
          parent_email: email.trim().toLowerCase(),
          book_slug: bookSlug,
          utm_source: utmSource,
          utm_campaign: utmCampaign,
          utm_medium: utmMedium,
        }),
      });

      if (!res.ok) throw new Error("Something went wrong");

      router.push(`/waitlist-confirmed?name=${encodeURIComponent(name.trim())}&book=${encodeURIComponent(bookName)}`);
    } catch {
      setError("Oops! Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full sm:max-w-md rounded-t-4xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-3xl mb-2">📖</div>
          <h2 className="text-2xl font-black text-gray-800">Reserve Your Copy</h2>
          <p className="text-gray-500 text-sm mt-1">
            We&apos;ll email you the moment <strong>{bookName}</strong> is ready — you&apos;ll be first in line!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Child&apos;s First Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Maryam"
              required
              className="w-full border-2 border-teal-100 rounded-2xl px-4 py-3 text-gray-800 font-semibold focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Your Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full border-2 border-teal-100 rounded-2xl px-4 py-3 text-gray-800 font-semibold focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-black py-4 rounded-2xl text-lg transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            {loading ? "Reserving..." : "Reserve My Copy 🎉"}
          </button>

          <p className="text-center text-xs text-gray-400">
            No payment now. We&apos;ll only email you when your book is ready.
          </p>
        </form>
      </div>
    </div>
  );
}
