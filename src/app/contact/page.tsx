import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Learn with Coloring",
  description:
    "Get in touch with the Learn with Coloring team. We're based in the U.S. and respond to all inquiries within 24 hours.",
  keywords:
    "contact learn with coloring, personalized coloring book help, customer support US",
};

const SUBJECTS = [
  "Select a subject…",
  "Order inquiry",
  "Shipping question",
  "Returns & refunds",
  "My child's name isn't listed",
  "Gift orders",
  "Press & partnerships",
  "Something else",
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            We&apos;d love to hear from you
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-4">
            Get in <span className="text-emerald-700">Touch</span>
          </h1>
          <p className="text-gray-500 text-lg font-semibold max-w-xl mx-auto">
            Whether you have a question about an order, need help finding your
            child&apos;s name, or just want to say hello — we&apos;re here and
            we&apos;ll always write back.
          </p>
        </div>
      </section>

      {/* ── Two-column: form + contact info ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── Left: Contact form ── */}
          {/*
            NOTE: This form is a static visual placeholder only.
            No action, onSubmit, or API route is wired up yet.
            When a backend contact-form endpoint is ready, add:
              action="/api/contact"   (or a third-party service URL)
              method="POST"
            and connect the submit button.
          */}
          <div className="lg:col-span-3">
            <div className="bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-7 sm:p-9">
              <h2 className="text-2xl font-black text-gray-800 mb-1">
                Send us a message
              </h2>
              <p className="text-gray-500 font-semibold text-sm mb-7">
                We respond to every message within 24 hours on business days.
              </p>

              {/* Visual note that form is not yet wired up */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl px-4 py-3 mb-7">
                <p className="text-amber-700 font-semibold text-sm">
                  <span className="font-black">Note:</span> Our contact form is
                  coming very soon. In the meantime, please email us directly at{" "}
                  <a
                    href="mailto:hello@learnwithcoloring.com"
                    className="underline hover:text-amber-800 transition-colors"
                  >
                    hello@learnwithcoloring.com
                  </a>{" "}
                  and we&apos;ll get back to you promptly.
                </p>
              </div>

              <form className="flex flex-col gap-5" aria-label="Contact form">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-black text-gray-700 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Sarah Khan"
                    disabled
                    className="w-full border-2 border-gray-200 bg-white rounded-2xl px-5 py-3 font-semibold text-gray-400 placeholder:text-gray-300 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-black text-gray-700 mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="e.g. sarah@example.com"
                    disabled
                    className="w-full border-2 border-gray-200 bg-white rounded-2xl px-5 py-3 font-semibold text-gray-400 placeholder:text-gray-300 outline-none cursor-not-allowed"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-black text-gray-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    disabled
                    className="w-full border-2 border-gray-200 bg-white rounded-2xl px-5 py-3 font-semibold text-gray-400 outline-none cursor-not-allowed appearance-none"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s === "Select a subject…" ? "" : s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-black text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help…"
                    disabled
                    className="w-full border-2 border-gray-200 bg-white rounded-2xl px-5 py-3 font-semibold text-gray-400 placeholder:text-gray-300 outline-none cursor-not-allowed resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled
                  className="w-full bg-emerald-300 text-white font-black rounded-2xl px-8 py-4 cursor-not-allowed transition-colors"
                  aria-disabled="true"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ── Right: Contact info ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Email card */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6">
              <div className="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-xl mb-4">
                ✉
              </div>
              <h3 className="font-black text-gray-800 text-lg mb-1">
                Email us directly
              </h3>
              <p className="text-gray-500 font-semibold text-sm mb-3">
                The quickest way to reach us right now.
              </p>
              <a
                href="mailto:hello@learnwithcoloring.com"
                className="text-emerald-800 font-black hover:text-emerald-900 transition-colors break-all"
              >
                hello@learnwithcoloring.com
              </a>
            </div>

            {/* Response time card */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6">
              <div className="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-xl mb-4">
                ⏱
              </div>
              <h3 className="font-black text-gray-800 text-lg mb-1">
                Response time
              </h3>
              <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                We reply to every inquiry{" "}
                <span className="text-gray-700 font-black">
                  within 24 hours
                </span>{" "}
                on Monday–Friday. Messages received over the weekend are answered
                first thing Monday morning.
              </p>
            </div>

            {/* Location card */}
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6">
              <div className="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex items-center justify-center text-xl mb-4">
                🇺🇸
              </div>
              <h3 className="font-black text-gray-800 text-lg mb-1">
                Based in the U.S.
              </h3>
              <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                We&apos;re a small U.S.-based team passionate about creating
                meaningful books for American families. Every book is printed and
                shipped from within the U.S.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ nudge ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="text-4xl flex-shrink-0">💬</div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-black text-gray-800 mb-2">
                Common questions?
              </h2>
              <p className="text-gray-500 font-semibold leading-relaxed">
                You might find an instant answer in our FAQ page — we cover
                ordering, delivery, payment, returns, and our launch offer.
              </p>
            </div>
            <Link
              href="/faq"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-emerald-200 flex-shrink-0 whitespace-nowrap"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
