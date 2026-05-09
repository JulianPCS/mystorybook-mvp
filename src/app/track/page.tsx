import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Order | Learn with Coloring",
  description:
    "Track your personalised colouring book order. Understand the production and delivery timeline, find your tracking email, and contact us if something looks wrong.",
  keywords:
    "track order personalised book, colouring book delivery timeline UK, order status",
};

const TIMELINE_STEPS = [
  {
    step: 1,
    icon: "✅",
    label: "Order Confirmed",
    description:
      "You placed your order and received a confirmation email. Your book has been added to the production queue.",
    timing: "Immediately",
    teal: true,
  },
  {
    step: 2,
    icon: "🖨️",
    label: "In Production",
    description:
      "Your personalised book is being printed with your child's name. Each book is made individually — just for them.",
    timing: "Day 1–2",
    teal: true,
  },
  {
    step: 3,
    icon: "📦",
    label: "Dispatched",
    description:
      "Your book has been packed in a protective rigid mailer and handed to the courier. We email you a tracking link at this exact point — check your inbox.",
    timing: "Day 2–3",
    teal: true,
  },
  {
    step: 4,
    icon: "🚚",
    label: "Out for Delivery",
    description:
      "Your book is on its way. Use the tracking link from your dispatch email to follow its journey in real time.",
    timing: "Day 3–6",
    teal: false,
  },
  {
    step: 5,
    icon: "🎉",
    label: "Delivered",
    description:
      "Your book has arrived. Time to get the crayons out.",
    timing: "Day 4–7",
    teal: false,
  },
];

export default function TrackPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Order Tracking
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            Where Is{" "}
            <span className="text-emerald-700">My Order?</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
            Your tracking link is sent by email the moment your book is
            dispatched. Here is what to expect at every step of the journey —
            from order to doorstep.
          </p>
        </div>
      </section>

      {/* ── Check your email callout ── */}
      <section className="py-10 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <span className="text-4xl flex-shrink-0">📧</span>
            <div>
              <p className="font-black text-gray-800 text-lg mb-1">
                Check your dispatch email first
              </p>
              <p className="text-gray-600 font-semibold leading-relaxed">
                When your book is dispatched, we send a tracking link to the
                email address you used at checkout. Check your inbox and spam
                folder for an email from{" "}
                <span className="text-emerald-800 font-black">
                  hello@learnwithcoloring.co.uk
                </span>
                . If you cannot find it and it has been more than 3 business
                days since ordering, please{" "}
                <Link
                  href="/contact"
                  className="text-emerald-800 font-black hover:underline"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual timeline ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 text-center mb-3">
            Your Order Timeline
          </h2>
          <p className="text-gray-500 font-semibold text-center mb-12">
            From the moment you order to the moment it arrives at your door.
          </p>

          <div className="relative">
            {/* Vertical connector */}
            <div
              className="absolute left-8 sm:left-10 top-8 bottom-8 w-0.5 bg-emerald-200 hidden sm:block"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6">
              {TIMELINE_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  {/* Step icon */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 flex flex-col items-center justify-center text-center ${
                      step.teal
                        ? "bg-emerald-50 border-emerald-300"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <span className="text-2xl leading-none">{step.icon}</span>
                    <span
                      className={`text-xs font-black mt-0.5 ${
                        step.teal ? "text-emerald-800" : "text-gray-400"
                      }`}
                    >
                      Step {step.step}
                    </span>
                  </div>

                  {/* Step content */}
                  <div
                    className={`flex-1 border-2 rounded-3xl p-5 sm:p-6 ${
                      step.teal
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3
                        className={`text-lg font-black ${
                          step.teal ? "text-gray-800" : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </h3>
                      <span
                        className={`text-xs font-black px-3 py-1 rounded-full self-start sm:self-auto ${
                          step.teal
                            ? "bg-emerald-100 text-emerald-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {step.timing}
                      </span>
                    </div>
                    <p
                      className={`font-semibold text-sm leading-relaxed ${
                        step.teal ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 font-semibold text-sm mt-8">
            All timings are estimates in business days (Monday–Friday, excluding
            UK public holidays).
          </p>
        </div>
      </section>

      {/* ── Still waiting contact ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 text-center">
            <span className="text-5xl mb-5 block">🤔</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4">
              Still Waiting After 7 Business Days?
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              If it has been more than 7 business days since you placed your
              order and you have not received a dispatch email or your book,
              please get in touch. We will investigate and resolve it quickly.
            </p>
            <p className="text-gray-500 font-semibold text-sm mb-6">
              When you email us, just include the name used on the book and your
              approximate order date — that is all we need to look it up.
            </p>
            <a
              href="mailto:hello@learnwithcoloring.co.uk"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
            >
              hello@learnwithcoloring.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Haven&apos;t Ordered Yet?
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Browse our collection of personalised colouring books — free UK
            delivery included on every single order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-white text-emerald-800 font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
            >
              Browse Our Books
            </Link>
            <Link
              href="/delivery"
              className="inline-block border-2 border-white text-white font-black text-lg px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Delivery Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
