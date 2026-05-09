import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Learn with Coloring",
  description:
    "The terms and conditions that govern your use of the Learn with Coloring website and the purchase of our personalised children's colouring books.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header band */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Terms of Use</h1>
          <p className="text-gray-400 font-semibold text-sm">Last updated: May 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-gray-600 font-semibold leading-relaxed">
          Please read these terms carefully before using the Learn with Coloring website or placing
          an order. By accessing our site or signing up to our waitlist, you agree to be bound by
          these terms.
        </p>

        {/* 1. About These Terms */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">1. About These Terms</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          These terms of use govern the relationship between Learn with Coloring
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) and you, the visitor or customer
          (&ldquo;you&rdquo;, &ldquo;your&rdquo;), in connection with your use of our website at
          learnwithcoloring.co.uk and any products or services we provide.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          These terms are governed by the laws of England and Wales. If any provision of these terms
          is found to be unenforceable, the remaining provisions will continue in full force and
          effect.
        </p>

        {/* 2. Using the Website */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">2. Using the Website</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          You may use our website for lawful purposes only. You must not:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            "Use the site in any way that breaches any applicable local, national, or international law or regulation.",
            "Transmit any unsolicited or unauthorised advertising or promotional material.",
            "Attempt to gain unauthorised access to any part of our website, the server on which it is hosted, or any database connected to it.",
            "Knowingly transmit any data, send or upload any material that contains viruses or any other harmful programs.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          We reserve the right to suspend or restrict access to our website to any person who
          breaches these terms.
        </p>

        {/* 3. Our Products */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">3. Our Products</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Learn with Coloring produces personalised colouring books for children. Each book is made
          to order and personalised with information you provide at the time of purchase (such as
          your child&apos;s name).
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Because each book is created specifically for you, please review your personalisation
          details carefully before submitting your order. We are unable to accept returns on
          personalised items unless the product is faulty or incorrectly produced on our part.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We aim to represent all products accurately on our website, but colours and print quality
          may vary slightly from on-screen images depending on your display settings.
        </p>

        {/* 4. Orders & Payment */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">4. Orders and Payment</h2>
        <p className="text-gray-600 font-semibold leading-relaxed font-black text-gray-800">
          Pre-launch (current)
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-2">
          We are currently operating a waitlist. By signing up, you are expressing interest in our
          products — no payment is taken at the point of signup. Joining the waitlist does not
          constitute a contract of sale and does not guarantee availability of a product.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4 font-black text-gray-800">
          At launch
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-2">
          When we open for orders, our personalised colouring books will be priced at{" "}
          <span className="font-black text-gray-800">&pound;9.99 per book</span>, including standard
          UK delivery. Prices are shown in pounds sterling and include VAT where applicable.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          A contract of sale is formed when we send you an order confirmation email. We reserve the
          right to refuse or cancel an order at our discretion, in which case any payment taken will
          be refunded in full.
        </p>

        {/* 5. Personalisation */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">5. Personalisation</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          You are solely responsible for ensuring that all personalisation details you provide are
          accurate, correctly spelled, and appropriate. We will produce your book exactly as
          specified.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We are unable to offer refunds or reprints for errors in personalisation that were
          submitted by you. If you believe an error has been made on our part in reproducing your
          personalisation, please contact us within 14 days of receiving your order and we will
          investigate and, where appropriate, arrange a reprint at no charge.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          By submitting personalisation details, you confirm that the content you have provided does
          not infringe any third-party rights and is not offensive, unlawful, or inappropriate.
        </p>

        {/* 6. Intellectual Property */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">6. Intellectual Property</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          All content on this website — including text, graphics, illustrations, logos, and design
          layouts — is the property of Learn with Coloring and is protected by UK and international
          copyright law.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          All illustrations and artwork contained within our coloring books are original works owned
          by Learn with Coloring. You may not reproduce, distribute, modify, or create derivative
          works from any of our content without our express written permission.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Purchasing a book grants you a personal, non-commercial licence to use the physical product
          for its intended purpose. It does not transfer any intellectual property rights to you.
        </p>

        {/* 7. Limitation of Liability */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">7. Limitation of Liability</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          To the fullest extent permitted by law, Learn with Coloring shall not be liable for any
          indirect, incidental, or consequential loss or damage arising from your use of our website
          or products.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Our total liability to you in connection with any order shall not exceed the amount paid
          by you for the product in question.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Nothing in these terms limits our liability for death or personal injury caused by our
          negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be
          excluded under English law, including your statutory rights as a consumer under the
          Consumer Rights Act 2015.
        </p>

        {/* 8. Governing Law */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">8. Governing Law</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          These terms and any dispute or claim arising out of or in connection with them shall be
          governed by and construed in accordance with the law of England and Wales. You agree that
          the courts of England and Wales shall have exclusive jurisdiction to settle any such
          dispute.
        </p>

        {/* 9. Changes to Terms */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">9. Changes to These Terms</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We may update these terms from time to time to reflect changes in our service, legal
          requirements, or business practices. The date at the top of this page shows when the terms
          were last revised.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We will notify waitlist members of any significant changes by email. Your continued use of
          the website after any changes are posted constitutes your acceptance of the revised terms.
        </p>

        {/* 10. Contact */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">10. Contact</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          If you have any questions about these terms, please get in touch:
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Email:{" "}
          <a
            href="mailto:hello@learnwithcoloring.co.uk"
            className="underline hover:text-gray-800 transition-colors"
          >
            hello@learnwithcoloring.co.uk
          </a>
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          You may also find our{" "}
          <Link href="/privacy" className="underline hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookies" className="underline hover:text-gray-800 transition-colors">
            Cookie Policy
          </Link>{" "}
          useful.
        </p>

        {/* Footer note */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm font-semibold">
            These terms do not affect your statutory rights as a consumer. For more information on
            your rights, visit{" "}
            <a
              href="https://www.citizensadvice.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 transition-colors"
            >
              citizensadvice.org.uk
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
