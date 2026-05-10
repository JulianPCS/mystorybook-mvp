import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press and Media | Learn with Coloring",
  description:
    "Press information for Learn with Coloring — a U.S. startup creating personalized coloring books for children that celebrate diverse names and cultural moments. Contact press@learnwithcoloring.com.",
  keywords:
    "Learn with Coloring press, personalized children's book startup US, media kit, press contact",
};

const STATS = [
  {
    value: "30+",
    label: "Name books available",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    accent: "text-emerald-800",
  },
  {
    value: "8+",
    label: "Festivals and milestones celebrated",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-600",
  },
  {
    value: "Ages 3–8",
    label: "Target age range",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-600",
  },
  {
    value: "US",
    label: "Designed and printed in the U.S.",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-600",
  },
];

const BRAND_POINTS = [
  {
    icon: "📖",
    heading: "What We Do",
    body: "Learn with Coloring creates personalized coloring books for children aged 3–8. Each book is printed to order with a child's name woven throughout the illustrations — on the cover and across every spread. We are not a vanity-press name stamp. The personalization is integral to the design.",
  },
  {
    icon: "🌍",
    heading: "Why We Exist",
    body: "American families are beautifully diverse, but the personalized book market has not kept up. Names like Maryam, Zainab, Idris, Dawud, Priya, and Amara deserve to be on bookshelves just as much as any other. We built this company because those children — and their families — deserve better.",
  },
  {
    icon: "🖨️",
    heading: "How It Works",
    body: "Every book is made to order. A customer selects their child's name, places an order, and we print and ship the book within 3–5 business days. We work with a trusted U.S. printing partner and use premium matte paper. Delivery is free across the U.S.",
  },
];

export default function PressPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Press and Media
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            Learn with Coloring —{" "}
            <span className="text-emerald-700">Press Information</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto mb-8">
            We are a small U.S. startup with a clear mission: every child — regardless
            of background or name — should be able to find a book made just for them.
            If you are covering us, we would love to help.
          </p>
          <a
            href="mailto:press@learnwithcoloring.com"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
          >
            Contact the Press Team
          </a>
        </div>
      </section>

      {/* ── Key stats ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-3">
            Learn with Coloring at a Glance
          </h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Founded in 2024, U.S.-based, and growing fast.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} ${stat.border} border-2 rounded-3xl p-6 text-center`}
              >
                <p className={`text-3xl sm:text-4xl font-black mb-2 ${stat.accent}`}>
                  {stat.value}
                </p>
                <p className="text-gray-600 font-semibold text-sm leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the brand ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-10">
            About the Brand
          </h2>
          <div className="flex flex-col gap-6">
            {BRAND_POINTS.map((point) => (
              <div
                key={point.heading}
                className="bg-white border-2 border-emerald-200 rounded-3xl p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{point.icon}</span>
                  <h3 className="text-xl font-black text-gray-800">
                    {point.heading}
                  </h3>
                </div>
                <p className="text-gray-600 font-semibold leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission statement pull quote ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-2xl px-7 py-7">
            <p className="text-emerald-900 font-black text-xl sm:text-2xl leading-snug italic mb-4">
              &ldquo;Every child — regardless of background or name — can find a book
              made just for them. That is the mission. Everything else follows
              from that.&rdquo;
            </p>
            <footer className="text-emerald-900 font-bold text-sm">
              The Founder, Learn with Coloring — U.S., 2024
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── Brand assets ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-3">
            Brand Assets and Press Pack
          </h2>
          <p className="text-gray-500 font-semibold text-center mb-10 max-w-2xl mx-auto">
            We are an early-stage startup. We do not yet have an automated
            download portal — but we are happy to send everything you need
            directly and promptly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🖼️",
                title: "Logo Files",
                body: "High-resolution logo in PNG and SVG formats, in full color and white variants. Available on request.",
              },
              {
                icon: "📸",
                title: "Product Photography",
                body: "Images of our books — cover shots, flat lays, and lifestyle imagery. Available on request.",
              },
              {
                icon: "📄",
                title: "Press Pack",
                body: "Brand overview, founder bio, mission statement, and key stats in a single document. Available on request.",
              },
            ].map((asset) => (
              <div
                key={asset.title}
                className="bg-white border-2 border-emerald-200 rounded-3xl p-6 text-center"
              >
                <span className="text-4xl mb-4 block">{asset.icon}</span>
                <h3 className="text-lg font-black text-gray-800 mb-2">
                  {asset.title}
                </h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                  {asset.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 font-semibold mb-4">
              To request any of the above, email us and we will turn it around
              within one business day.
            </p>
            <a
              href="mailto:press@learnwithcoloring.com"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
            >
              press@learnwithcoloring.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Press contact ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-5">
              Get in Touch
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              For interview requests, product reviews, editorial coverage, or
              any other media inquiry, please email our press address. We are a
              small team and we respond quickly — typically within one business
              day.
            </p>
            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              If you are working to a deadline, please say so in your email and
              we will do our best to accommodate you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white border-2 border-emerald-200 rounded-2xl p-5">
                <p className="text-xs font-black text-emerald-800 uppercase tracking-wide mb-1">
                  Press Enquiries
                </p>
                <a
                  href="mailto:press@learnwithcoloring.com"
                  className="text-gray-800 font-black hover:text-emerald-800 transition-colors"
                >
                  press@learnwithcoloring.com
                </a>
              </div>
              <div className="flex-1 bg-white border-2 border-emerald-200 rounded-2xl p-5">
                <p className="text-xs font-black text-emerald-800 uppercase tracking-wide mb-1">
                  General Contact
                </p>
                <a
                  href="mailto:hello@learnwithcoloring.com"
                  className="text-gray-800 font-black hover:text-emerald-800 transition-colors"
                >
                  hello@learnwithcoloring.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            See the Books for Yourself
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Browse the full collection — 30+ names, 8+ celebrations, all
            printed and delivered free across the U.S.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-white text-emerald-800 font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Browse All Books
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
