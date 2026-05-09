import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Every Book Is Made — The Process | Learn with Coloring",
  description:
    "From choosing a name to delivery at your door — see exactly how each personalised colouring book is created, reviewed, printed, and shipped. Premium quality, every time.",
};

const STEPS = [
  {
    number: "01",
    title: "You Choose the Name or Occasion",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    numberBg: "bg-emerald-700",
    accent: "text-emerald-900",
    emoji: "🔍",
    body:
      "Browse our collection and choose the name or occasion that fits your child. Whether it&apos;s a name — Maryam, Zainab, Idris, Priya, or dozens of others — or a special moment like a first birthday, Eid, or starting school, each book is built around that specific choice.",
  },
  {
    number: "02",
    title: "Our Illustrators Design the Pages",
    bg: "bg-amber-50",
    border: "border-amber-200",
    numberBg: "bg-amber-500",
    accent: "text-amber-700",
    emoji: "✏️",
    body:
      "Each book in our collection features bespoke illustrations — not stock images, not recycled clip art. Our illustrators design artwork that is specific to the name or occasion, creating pages that feel genuinely made for that child. No two books look the same.",
  },
  {
    number: "03",
    title: "Your Child&apos;s Name Is Woven Throughout",
    bg: "bg-purple-50",
    border: "border-purple-200",
    numberBg: "bg-purple-500",
    accent: "text-purple-700",
    emoji: "📖",
    body:
      "Personalisation doesn&apos;t stop at the cover. The child&apos;s name appears inside the book — in chapter headings, woven into illustrations, and across the pages throughout. When they open it, they know immediately: this one is mine.",
  },
  {
    number: "04",
    title: "Quality Review",
    bg: "bg-rose-50",
    border: "border-rose-200",
    numberBg: "bg-rose-500",
    accent: "text-rose-700",
    emoji: "✅",
    body:
      "Before anything goes to print, every book is reviewed carefully — illustration quality, name placement, page layout, and colouring lines. If something isn&apos;t right, it goes back. We would rather take longer than send out something we&apos;re not proud of.",
  },
  {
    number: "05",
    title: "Printed on Premium Paper",
    bg: "bg-green-50",
    border: "border-green-200",
    numberBg: "bg-green-600",
    accent: "text-green-700",
    emoji: "🖨️",
    body:
      "We print on A4 premium matte paper — thick enough for crayons and felt tips without bleed-through, with a finish that feels quality in small hands. All inks are child-safe. Printing is done entirely in the UK by a printer we trust and have worked with personally.",
  },
  {
    number: "06",
    title: "Packaged and Shipped to You",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    numberBg: "bg-indigo-500",
    accent: "text-indigo-700",
    emoji: "📦",
    body:
      "Each book is carefully packaged to arrive in perfect condition — no bent corners, no damage in transit. We ship across the UK and take care to ensure the book looks exactly as it should when it lands on your doorstep, ready to gift.",
  },
];

const SPECS = [
  { label: "Page Count", value: "32 pages", icon: "📄" },
  { label: "Format", value: "A4", icon: "📐" },
  { label: "Paper", value: "Premium matte", icon: "✨" },
  { label: "Inks", value: "Child-safe throughout", icon: "🎨" },
  { label: "Printing", value: "UK printer", icon: "🇬🇧" },
  { label: "Ages", value: "3–8 years", icon: "👶" },
];

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Transparent from start to finish
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            How Every Book Is Made
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
            We think you should know exactly what goes into a Learn with Coloring book — from the moment you choose a name to the moment it arrives at your door.
          </p>
        </div>
      </section>

      {/* ── Step-by-step timeline ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-0">
            {STEPS.map((step, index) => (
              <div key={step.number} className="flex gap-6 sm:gap-8">

                {/* Timeline spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-2xl ${step.numberBg} text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    {step.number}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-100 my-2 min-h-[2.5rem]" />
                  )}
                </div>

                {/* Content card */}
                <div className={`${step.bg} ${step.border} border-2 rounded-3xl p-6 sm:p-8 mb-6 flex-1`}>
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-3xl flex-shrink-0 mt-0.5">{step.emoji}</span>
                    <h3
                      className={`font-black text-xl sm:text-2xl ${step.accent} leading-snug`}
                      dangerouslySetInnerHTML={{ __html: step.title }}
                    />
                  </div>
                  <p
                    className="text-gray-600 font-semibold leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Inside Every Book ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
              What&apos;s Inside Every Book
            </h2>
            <p className="text-gray-500 font-semibold text-lg max-w-xl mx-auto">
              Every Learn with Coloring book is built to the same standard — no exceptions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="bg-white border-2 border-emerald-200 rounded-3xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl mb-3">{spec.icon}</div>
                <div className="text-gray-800 font-black text-lg mb-1">{spec.value}</div>
                <div className="text-gray-500 font-semibold text-sm">{spec.label}</div>
              </div>
            ))}
          </div>

          {/* Reassurance note */}
          <div className="mt-10 bg-white border-2 border-emerald-200 rounded-3xl p-7 sm:p-9 text-center">
            <p className="text-gray-600 font-semibold leading-relaxed text-lg mb-2">
              We never compromise on materials. Child-safe inks, premium paper, and UK production aren&apos;t selling points — they&apos;re the baseline.
            </p>
            <p className="text-emerald-900 font-black text-sm">
              Every book is reviewed before it goes to print. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to Find Their Book?
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Browse our full collection — names, festivals, and milestones, all made with the same care.
          </p>
          <Link
            href="/books"
            className="inline-block bg-white text-emerald-800 font-black text-lg px-10 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            Browse All Books →
          </Link>
        </div>
      </section>
    </>
  );
}
