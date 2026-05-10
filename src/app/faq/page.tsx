import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Learn with Coloring",
  description:
    "Got a question about our personalized children's coloring books? Find answers about ordering, delivery, payment, returns, and our launch offer.",
  keywords:
    "personalized coloring book FAQ, children's book US questions, delivery, returns, launch offer",
};

const FAQ_CATEGORIES = [
  {
    id: "about",
    title: "About the Books",
    icon: "📖",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    divider: "border-emerald-100",
    questions: [
      {
        q: "What is a personalized coloring book?",
        a: "A personalized coloring book from Learn with Coloring is a beautifully illustrated, 32-page book that features your child's name throughout. Each page is designed to be colored in with crayons, pencils, or markers, giving your child a creative activity that truly feels made just for them.",
      },
      {
        q: "How is my child's name included in the book?",
        a: "Your child's name is woven into the illustrations and story across the pages — it appears on the cover and is integrated into the artwork throughout, so your child sees their own name as part of the adventure. This is not a simple name-on-the-cover sticker; the personalization is built into every spread.",
      },
      {
        q: "What ages are the books suitable for?",
        a: "Our books are designed for children aged 3 to 8. Younger children (3–5) will love the bold, simple illustrations and the delight of seeing their name. Older children (6–8) will appreciate the more detailed pages and the creative challenge of coloring within finer lines.",
      },
      {
        q: "Are the books available for any name?",
        a: "We support a very wide range of names, including traditional American names, names from South Asian, Arabic, African, and European communities, and many more. If you can't find your child's name listed, use the search on our books page — we may well have it. If not, get in touch and we'll do our best to add it.",
      },
    ],
  },
  {
    id: "ordering",
    title: "Ordering & Payment",
    icon: "💳",
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-200",
    divider: "border-amber-100",
    questions: [
      {
        q: "How do I place an order?",
        a: "Simply find your child's name on our books page, click through to the book page, and click the order button. You'll be guided through selecting any options and completing your payment. The whole process takes just a couple of minutes.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment methods including Visa, Mastercard, American Express, PayPal, Apple Pay, and Klarna (buy now, pay later). All payments are processed securely through our payment provider.",
      },
      {
        q: "Is my payment secure?",
        a: "Yes, absolutely. We use industry-standard SSL encryption across our entire site, and all card payments are processed by a fully PCI-DSS compliant payment provider. We never store your full card details on our servers.",
      },
      {
        q: "Can I order as a gift?",
        a: "Absolutely — our books make wonderful gifts. During checkout you can add a personalized gift message which will be printed on a card and included with the book. You can also ship directly to the recipient's address.",
      },
    ],
  },
  {
    id: "delivery",
    title: "Shipping & Delivery",
    icon: "📦",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-200",
    divider: "border-blue-100",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping within the U.S. takes 3–5 business days from the date your order is placed. Because each book is personalized and printed to order, we cannot offer same-day or next-day delivery at this time. We'll send you an email confirmation as soon as your book has been shipped.",
      },
      {
        q: "Do you deliver outside the U.S.?",
        a: "Currently we ship exclusively within the United States. International shipping is something we plan to offer in the future. If you are based outside the U.S. and would like to be notified when international shipping becomes available, please contact us and we'll add you to our list.",
      },
      {
        q: "How will my order be packaged?",
        a: "Your book is packaged in a rigid, rigid mailer to ensure it arrives flat and undamaged. We also use protective wrap inside the envelope. The packaging is designed to keep your book in pristine condition for gifting.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    icon: "↩",
    iconBg: "bg-rose-50",
    iconBorder: "border-rose-200",
    divider: "border-rose-100",
    questions: [
      {
        q: "Can I return a personalized book?",
        a: "Because every book is printed specifically for your child, we are unable to accept returns for change of mind — this is standard practice for personalized, customized, made-to-order products. However, if there is any issue with your order, please do contact us and we will always work to put things right.",
      },
      {
        q: "What if my book arrives damaged?",
        a: "We're sorry if your book arrives in anything less than perfect condition. Please take a photo of the damage and email us at hello@learnwithcoloring.com within 14 days of receiving your order. We will send you a replacement free of charge, no hassle.",
      },
      {
        q: "How do I contact you about an issue?",
        a: "The easiest way is to email us at hello@learnwithcoloring.com. Please include your order number and a brief description of the issue, and we will respond within 24 hours on business days. You can also use the contact form on our contact page.",
      },
    ],
  },
  {
    id: "launch",
    title: "The Launch Offer",
    icon: "🎉",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200",
    divider: "border-emerald-100",
    questions: [
      {
        q: "What is the launch offer?",
        a: "To celebrate the launch of Learn with Coloring, we are offering all books at 50% off — just $9.99 instead of the full price of $19.99. This is our way of saying thank you to our earliest customers who are helping us bring personalized coloring books to families across the U.S.",
      },
      {
        q: "How long does the launch offer last?",
        a: "The launch price of $9.99 is available for a limited time only. We haven't set a fixed end date, but once the launch period closes the price will return to $19.99. We recommend ordering sooner rather than later to take advantage of the saving.",
      },
      {
        q: "Is this a pre-order?",
        a: "Yes — we are currently in our pre-launch phase, which means we are taking orders ahead of our official opening. Your book will be printed and shipped within 3–5 business days of our launch date. You'll receive a confirmation email with the expected shipping date when you place your order.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            Everything you need to know
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-4">
            Frequently Asked{" "}
            <span className="text-emerald-700">Questions</span>
          </h1>
          <p className="text-gray-500 text-lg font-semibold max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Drop us a line at{" "}
            <a
              href="mailto:hello@learnwithcoloring.com"
              className="text-emerald-800 hover:text-emerald-900 transition-colors"
            >
              hello@learnwithcoloring.com
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Jump links ── */}
      <section className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2 justify-center">
          {FAQ_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="text-sm font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* ── FAQ Categories ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-10 h-10 ${cat.iconBg} ${cat.iconBorder} border-2 rounded-2xl flex items-center justify-center text-xl flex-shrink-0`}
                >
                  {cat.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-800">
                  {cat.title}
                </h2>
              </div>

              {/* Questions */}
              <div className="flex flex-col gap-0">
                {cat.questions.map((item, i) => (
                  <div
                    key={item.q}
                    className={`py-7 ${
                      i < cat.questions.length - 1
                        ? `border-b-2 ${cat.divider}`
                        : ""
                    }`}
                  >
                    <h3 className="text-lg font-black text-gray-800 mb-3 leading-snug">
                      {item.q}
                    </h3>
                    <p className="text-gray-600 font-semibold leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-black text-gray-800 mb-2">
                Still have a question?
              </h2>
              <p className="text-gray-500 font-semibold leading-relaxed">
                We&apos;re a small U.S. team and we genuinely love hearing from
                parents. Send us a message and we&apos;ll reply within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-emerald-200 text-center"
              >
                Contact Us
              </Link>
              <a
                href="mailto:hello@learnwithcoloring.com"
                className="text-center text-emerald-800 font-bold text-sm hover:text-emerald-900 transition-colors"
              >
                hello@learnwithcoloring.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
