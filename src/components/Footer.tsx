import Link from "next/link";
import Image from "next/image";

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://www.twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const PAYMENT_METHODS = [
  { name: "Visa",       bg: "bg-[#1A1F71]", text: "text-white",   style: "italic font-black tracking-tight" },
  { name: "Mastercard", bg: "bg-[#252525]", text: "text-white",   style: "font-bold" },
  { name: "PayPal",     bg: "bg-white",     text: "text-[#003087]", style: "font-black", border: true },
  { name: "Amex",       bg: "bg-[#2557D6]", text: "text-white",   style: "font-black text-[10px] tracking-widest" },
  { name: "Klarna",     bg: "bg-[#FFB3C7]", text: "text-[#1A0010]", style: "font-black" },
  { name: "Apple Pay",  bg: "bg-black",     text: "text-white",   style: "font-semibold" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">

      {/* ── Main columns ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Learn with Coloring"
              width={180}
              height={40}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Personalised colouring books that make every child the star of their own story.
              Printed and shipped in the UK.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Help & Information */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-5">
              Help &amp; Information
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "How It Works",        href: "/why" },
                { label: "Delivery &amp; Shipping",  href: "/delivery" },
                { label: "Returns Policy",       href: "/returns" },
                { label: "Frequently Asked Questions", href: "/faq" },
                { label: "Contact Us",           href: "/contact" },
                { label: "Track Your Order",     href: "/track" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-teal-400 transition-colors"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-5">
              About Us
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Our Story",          href: "/about" },
                { label: "The Process",        href: "/process" },
                { label: "Why Colouring?",     href: "/why" },
                { label: "Each Book Explained", href: "/books" },
                { label: "Press &amp; Media",      href: "/press" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-teal-400 transition-colors"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-5">
              Browse Books
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "All Books",              href: "/books" },
                { label: "Girls' Names",           href: "/books?gender=female" },
                { label: "Boys' Names",            href: "/books?gender=male" },
                { label: "Festivals &amp; Celebrations", href: "/books#occasions" },
                { label: "Milestones",             href: "/books#occasions" },
                { label: "Family Occasions",       href: "/books#occasions" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-teal-400 transition-colors"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Trustpilot */}
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 fill-[#00b67a]">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-black text-sm">Excellent</span>
                <span className="text-gray-500 text-xs">4.9 / 5</span>
                <span className="text-gray-600 text-xs">·</span>
                <span className="text-gray-500 text-xs">200+ reviews</span>
              </div>
              <div className="text-[#00b67a] font-black text-xs tracking-wide mt-0.5">
                Trustpilot
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2">
            <span className="text-gray-600 text-xs font-semibold mr-1">Secure payments:</span>
            {PAYMENT_METHODS.map((p) => (
              <span
                key={p.name}
                className={`inline-flex items-center justify-center px-2.5 py-1 rounded-md text-xs ${p.bg} ${p.text} ${p.style} ${p.border ? "border border-gray-200" : ""} min-w-[52px] h-7`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Learn with Coloring. All rights reserved. Made with care in the UK.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-gray-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
