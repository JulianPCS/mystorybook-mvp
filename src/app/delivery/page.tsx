import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "U.S. Shipping Information | Learn with Coloring",
  description:
    "Free U.S. shipping on all personalized coloring books. Made to order in 1–2 days, shipped with a tracking email, delivered in 3–5 business days in a protective rigid mailer.",
  keywords:
    "personalized coloring book shipping US, free shipping children's books, made to order books",
};

const DELIVERY_OPTIONS = [
  {
    name: "Standard U.S. Shipping",
    time: "3–5 business days",
    cost: "Free",
    costDetail: "included in the book price",
    available: true,
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-900",
    badgeLabel: "Available now",
    note: "Covers the contiguous United States at no extra cost.",
  },
  {
    name: "Express / Next-Day Delivery",
    time: "Coming soon",
    cost: "—",
    costDetail: "not yet available",
    available: false,
    bg: "bg-gray-50",
    border: "border-gray-200",
    badge: "bg-gray-100 text-gray-500",
    badgeLabel: "Coming soon",
    note: "We are working on faster delivery options. Join the waitlist to be notified.",
  },
];

const FAQS = [
  {
    q: "When does the delivery clock start?",
    a: "Delivery time begins once your book has been shipped — not from when you place your order. Please allow 1–2 business days for production first. Your total wait from order to doorstep is typically 4–7 business days.",
  },
  {
    q: "Will I receive confirmation when my book is sent?",
    a: "Yes. We email you a tracking link the moment your book is shipped. If you don't see it within 3 business days of ordering, please check your spam folder and then get in touch.",
  },
  {
    q: "Can I change my shipping address after ordering?",
    a: "Contact us at hello@learnwithcoloring.com as soon as possible. We can update your address if production has not yet started — so the sooner you reach us, the better.",
  },
  {
    q: "Where in the U.S. do you ship?",
    a: "Standard shipping currently covers the contiguous United States at no extra cost. We are working on additional options for Alaska, Hawaii, U.S. territories, and international addresses.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not yet. We are U.S.-only at this stage. International shipping is on our roadmap — sign up to the waitlist to be notified when it launches.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            U.S. Shipping
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            Delivered Safely{" "}
            <span className="text-emerald-700">to Your Door</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto mb-10">
            Every book is made to order and shipped free across the U.S. Here is
            everything you need to know about how and when your book will arrive.
          </p>
          <Link
            href="/books"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
          >
            Browse Our Books
          </Link>
        </div>
      </section>

      {/* ── Delivery options ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-3">
            Shipping Options
          </h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Simple and straightforward — free shipping is included as standard
            on every order.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {DELIVERY_OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className={`${opt.bg} ${opt.border} border-2 rounded-3xl p-7`}
              >
                <span
                  className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-4 ${opt.badge}`}
                >
                  {opt.badgeLabel}
                </span>
                <h3 className="text-xl font-black text-gray-800 mb-2">
                  {opt.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-emerald-700">
                    {opt.cost}
                  </span>
                  <span className="text-gray-500 font-semibold text-sm">
                    {opt.costDetail}
                  </span>
                </div>
                <p className="text-gray-600 font-semibold mb-4">{opt.time}</p>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                  {opt.note}
                </p>
              </div>
            ))}
          </div>

          {/* Production time banner */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">⏱️</span>
            <div>
              <p className="font-black text-gray-800 mb-1">
                Made to order — allow 1–2 days production time before shipping
              </p>
              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                Because every book is personalized with your child&apos;s name,
                each one is printed individually before it can be sent. Production
                takes 1–2 business days. Your total wait from order to doorstep
                is typically{" "}
                <strong className="text-gray-800">4–7 business days</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packaging & Tracking ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-10">
            Packaging and Tracking
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-emerald-200 rounded-3xl p-7">
              <span className="text-3xl mb-4 block">📬</span>
              <h3 className="text-xl font-black text-gray-800 mb-3">
                Protective Rigid Mailer
              </h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                Every book is shipped in a rigid cardboard mailer specifically
                designed to prevent bending and damage in transit. No flimsy
                envelopes — your child&apos;s book arrives flat and in perfect
                condition, ready to color straight away.
              </p>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-3xl p-7">
              <span className="text-3xl mb-4 block">📧</span>
              <h3 className="text-xl font-black text-gray-800 mb-3">
                Tracking Link by Email
              </h3>
              <p className="text-gray-600 font-semibold leading-relaxed">
                The moment your book is shipped, we email you a tracking link
                so you can follow its journey. You can also visit{" "}
                <Link
                  href="/track"
                  className="text-emerald-800 font-black hover:underline"
                >
                  our tracking page
                </Link>{" "}
                at any time to see what to expect at each stage.
              </p>
            </div>
          </div>

          {/* International note */}
          <div className="mt-6 bg-gray-50 border-2 border-gray-200 rounded-3xl p-6 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">🌍</span>
            <div>
              <p className="font-black text-gray-800 mb-1">
                U.S. only — international shipping not yet available
              </p>
              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                We currently ship exclusively within the United States.
                International delivery is on our roadmap and we hope to launch it
                soon. If you are based outside the U.S.,{" "}
                <Link
                  href="/contact"
                  className="text-emerald-800 font-black hover:underline"
                >
                  get in touch
                </Link>{" "}
                and we will add you to the international notification list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-3">
            Shipping Questions
          </h2>
          <p className="text-gray-500 font-semibold text-center mb-10">
            Quick answers to the questions we hear most often.
          </p>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6"
              >
                <p className="font-black text-gray-800 mb-2">{faq.q}</p>
                <p className="text-gray-600 font-semibold leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to Order?
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Find the perfect personalized coloring book for your child — free
            U.S. shipping included on every order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-white text-emerald-800 font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Browse Our Books
            </Link>
            <Link
              href="/track"
              className="inline-block border-2 border-white text-white font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Track an Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
