import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Learn with Coloring",
  description:
    "Read the Learn with Coloring privacy policy. We explain what personal data we collect, why we collect it, and how we protect it — in plain English.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header band */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Privacy Policy</h1>
          <p className="text-gray-400 font-semibold text-sm">Last updated: May 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-gray-600 font-semibold leading-relaxed">
          Your privacy matters to us. This policy explains what personal data Learn with Coloring
          collects, why we collect it, how we use it, and the choices you have about your
          information. Please read it carefully.
        </p>

        {/* 1. Who We Are */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">1. Who We Are</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Learn with Coloring is a U.S.-based company that creates personalized coloring books for
          children. Our website is{" "}
          <a
            href="https://learnwithcoloring.com"
            className="underline hover:text-gray-800 transition-colors"
          >
            learnwithcoloring.com
          </a>
          . We are the data controller for the personal data you provide to us.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          You can contact us at any time by emailing{" "}
          <a
            href="mailto:hello@learnwithcoloring.com"
            className="underline hover:text-gray-800 transition-colors"
          >
            hello@learnwithcoloring.com
          </a>
          .
        </p>

        {/* 2. What Data We Collect */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">2. What Data We Collect</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We only collect the data that is genuinely necessary to provide our service. Depending on
          how you interact with us, we may collect:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            {
              term: "Name",
              detail:
                "Your name or your child's name, used to personalize your coloring book and address communications to you.",
            },
            {
              term: "Email address",
              detail:
                "Used to confirm your waitlist signup, notify you when your book is ready, and send order updates.",
            },
            {
              term: "Book preferences",
              detail:
                "Information about the personalization you request (such as a child's name and chosen theme), used solely to produce your book.",
            },
            {
              term: "Order information",
              detail:
                "If you place an order, we collect the details necessary to fulfill and deliver it, including a shipping address.",
            },
          ].map(({ term, detail }) => (
            <li key={term} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">
                <span className="font-black text-gray-800">{term}:</span> {detail}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          We do not collect sensitive personal data (such as health information) and we do not
          knowingly collect data from children. Our service is directed at parents and guardians.
        </p>

        {/* 3. How We Use Your Data */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">3. How We Use Your Data</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We use your personal data for the following purposes:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            "To manage your waitlist signup and notify you when our books become available.",
            "To fulfill your order — producing, printing, and shipping your personalized coloring book.",
            "To send you transactional emails related to your order (order confirmation, shipping notification, tracking updates).",
            "To improve our website and service, based on how visitors use the site.",
            "To send you marketing communications, if you have given your consent to receive them.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>

        {/* 4. Legal Basis for Processing */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">
          4. Legal Basis for Processing
        </h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We use personal data only where we have a legitimate reason to do so. The main reasons are:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            {
              term: "Order fulfillment",
              detail:
                "Where processing is necessary to fulfill an order you have placed or to take steps at your request before entering a contract.",
            },
            {
              term: "Business operations",
              detail:
                "For operational activities such as managing our waitlist, improving our website, and preventing fraud — provided these interests are not overridden by your rights.",
            },
            {
              term: "Consent",
              detail:
                "For optional marketing communications. You can withdraw your consent at any time by emailing us or clicking the unsubscribe link in any marketing email.",
            },
            {
              term: "Legal compliance",
              detail:
                "Where we are required to retain data to comply with applicable record-keeping, tax, accounting, or consumer protection requirements.",
            },
          ].map(({ term, detail }) => (
            <li key={term} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">
                <span className="font-black text-gray-800">{term}:</span> {detail}
              </p>
            </li>
          ))}
        </ul>

        {/* 5. How Long We Keep Your Data */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">
          5. How Long We Keep Your Data
        </h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We do not keep your data for longer than necessary. Our retention periods are:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            {
              term: "Waitlist data",
              detail:
                "Kept for up to 12 months from the date of signup, or until you ask us to remove it, whichever comes first.",
            },
            {
              term: "Order data",
              detail:
                "Retained for up to 7 years from the date of purchase where needed for tax, accounting, customer service, or legal record-keeping purposes.",
            },
            {
              term: "Marketing consent records",
              detail:
                "Kept for as long as you remain an active subscriber, plus a reasonable period thereafter as evidence of consent.",
            },
          ].map(({ term, detail }) => (
            <li key={term} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">
                <span className="font-black text-gray-800">{term}:</span> {detail}
              </p>
            </li>
          ))}
        </ul>

        {/* 6. Sharing Your Data */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">6. Sharing Your Data</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We do not sell, rent, or trade your personal data to any third party.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We may share your data with carefully selected third-party service providers who help us
          operate our service, including:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            "Print partners, who receive only the personalization details needed to produce your book.",
            "Shipping partners, who receive your name and shipping address to ship your order.",
            "Email service providers, used to send transactional and marketing communications.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          All third-party processors are contractually required to keep your data confidential and to
          use it only for the purposes we specify. Some service providers may process data in other
          locations, but they are required to protect it and use it only for the services they provide to us.
        </p>

        {/* 7. Your Rights */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">7. Your Rights</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Depending on where you live, you may have rights or choices in relation to your personal data:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            {
              term: "Access",
              detail: "You can request a copy of the personal data we hold about you.",
            },
            {
              term: "Correction",
              detail:
                "You can ask us to correct any inaccurate or incomplete data we hold about you.",
            },
            {
              term: "Deletion",
              detail:
                'You can ask us to delete your personal data where there is no compelling reason for us to continue processing it (the "right to be forgotten").',
            },
            {
              term: "Portability",
              detail:
                "You can request that we provide your data in a structured, commonly used, and machine-readable format.",
            },
            {
              term: "Opt out",
              detail:
                "You can unsubscribe from marketing emails at any time.",
            },
            {
              term: "Restriction",
              detail:
                "You can ask us to pause the processing of your data in certain circumstances, for example while a complaint is being investigated.",
            },
          ].map(({ term, detail }) => (
            <li key={term} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">
                <span className="font-black text-gray-800">{term}:</span> {detail}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          To exercise any of these rights, please email us at{" "}
          <a
            href="mailto:hello@learnwithcoloring.com"
            className="underline hover:text-gray-800 transition-colors"
          >
            hello@learnwithcoloring.com
          </a>
          . We will respond as soon as reasonably possible and in line with applicable law.
        </p>

        {/* 8. Cookies */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">8. Cookies</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Our website uses cookies. For full details of the cookies we use, what they do, and how to
          manage them, please read our{" "}
          <Link
            href="/cookies"
            className="underline hover:text-gray-800 transition-colors"
          >
            Cookie Policy
          </Link>
          .
        </p>

        {/* 9. Contact & Complaints */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">9. Contact and Complaints</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          If you have any questions about this privacy policy or how we handle your data, please
          contact us:
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Email:{" "}
          <a
            href="mailto:hello@learnwithcoloring.com"
            className="underline hover:text-gray-800 transition-colors"
          >
            hello@learnwithcoloring.com
          </a>
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          If you are not satisfied with how we handle your data or your complaint, please contact us
          first so we can try to resolve it. You can also review consumer privacy and security
          guidance from the Federal Trade Commission:
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          <span className="font-black text-gray-800">Federal Trade Commission</span>
          <br />
          Website:{" "}
          <a
            href="https://www.ftc.gov/business-guidance/privacy-security"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            ftc.gov/privacy-security
          </a>
        </p>

        {/* Footer note */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm font-semibold">
            This policy may be updated from time to time. We will notify waitlist members of any
            material changes by email. The date at the top of this page reflects the most recent
            revision.
          </p>
        </div>
      </div>
    </div>
  );
}
