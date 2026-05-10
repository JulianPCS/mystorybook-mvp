import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns and Refund Policy | Learn with Coloring",
  description:
    "Our returns policy for personalized children's coloring books. Honest, fair, and written in plain English. Damaged or wrong items replaced or refunded, no hassle.",
  keywords:
    "personalized book returns policy, refund coloring book US, damaged book replacement",
};

const POLICIES = [
  {
    icon: "🎨",
    title: "Personalized Items — Change of Mind",
    bg: "bg-gray-50",
    border: "border-gray-200",
    headingColor: "text-gray-800",
    body: [
      "Because every book is printed specifically for your child — with their name woven through the pages — we are unable to accept returns for change of mind. This is standard practice for personalized, customized, made-to-order products.",
      "We encourage you to double-check the name spelling and book selection before you complete your order. If you have any questions beforehand, please get in touch — we are happy to help before you commit.",
    ],
    checklist: null,
    cta: {
      label: "Ask us anything first",
      href: "mailto:hello@learnwithcoloring.com",
    },
  },
  {
    icon: "📦",
    title: "Damaged or Defective Book",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    headingColor: "text-emerald-900",
    body: [
      "If your book arrives damaged — whether that is a production defect, a printing error, or damage that happened in transit — we will make it right. No argument, no hassle.",
      "Email us at hello@learnwithcoloring.com within 7 days of receiving your order and include:",
    ],
    checklist: [
      "Your order reference or the name used on the book",
      "A clear photo showing the damage or defect",
      "Your preferred resolution — a free replacement or a full refund",
    ],
    cta: null,
  },
  {
    icon: "🔄",
    title: "Wrong Item Received",
    bg: "bg-amber-50",
    border: "border-amber-200",
    headingColor: "text-amber-700",
    body: [
      "If you received a book with the wrong name or the wrong title, that is entirely on us and we will fix it immediately.",
      "Email hello@learnwithcoloring.com with your order details and a photo of what arrived. We will ship the correct book at no extra cost, or issue a full refund if you prefer.",
    ],
    checklist: null,
    cta: null,
  },
  {
    icon: "🌱",
    title: "Waitlist and Pre-Launch Orders",
    bg: "bg-green-50",
    border: "border-green-200",
    headingColor: "text-green-700",
    body: [
      "We are currently in our launch phase and collecting waitlist sign-ups. No payment is taken at the point of registration, so refunds do not apply at this stage.",
      "Once we open for orders, our full returns policy applies from the very first purchase. You will be in safe hands.",
    ],
    checklist: null,
    cta: null,
  },
];

export default function ReturnsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Returns Policy
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            A Fair Policy,{" "}
            <span className="text-emerald-700">No Small Print</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
            We want you to be happy with every book. Here is our honest,
            straightforward returns policy — written in plain English, not legal
            jargon.
          </p>
        </div>
      </section>

      {/* ── Policy sections ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {POLICIES.map((policy) => (
            <div
              key={policy.title}
              className={`${policy.bg} ${policy.border} border-2 rounded-3xl p-7 sm:p-9`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{policy.icon}</span>
                <h2
                  className={`text-xl sm:text-2xl font-black ${policy.headingColor}`}
                >
                  {policy.title}
                </h2>
              </div>

              {policy.body.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 font-semibold leading-relaxed mb-3"
                >
                  {para}
                </p>
              ))}

              {policy.checklist && (
                <ul className="flex flex-col gap-2 mt-1 mb-4">
                  {policy.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm font-semibold text-gray-700"
                    >
                      <span className="text-emerald-700 flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {policy.cta && (
                <a
                  href={policy.cta.href}
                  className="inline-block mt-2 text-emerald-800 font-black text-sm hover:text-emerald-900 hover:underline transition-colors"
                >
                  {policy.cta.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Something went wrong contact box ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 text-center">
            <span className="text-5xl mb-5 block">🤝</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4">
              Something Went Wrong?
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              We are a small team that genuinely cares about every order. If
              anything about your purchase is not right — even if you are not
              sure whether it falls within our policy — please reach out. We
              will always do our best to find a fair solution.
            </p>
            <p className="text-gray-500 font-semibold text-sm mb-6">
              We aim to respond to every email within one business day.
            </p>
            <a
              href="mailto:hello@learnwithcoloring.com"
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
            >
              hello@learnwithcoloring.com
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Ready to Find the Perfect Book?
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Explore our range of personalized coloring books — made with care,
            delivered with confidence.
          </p>
          <Link
            href="/books"
            className="inline-block bg-white text-emerald-800 font-black text-lg px-10 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            Browse Our Books
          </Link>
        </div>
      </section>
    </>
  );
}
