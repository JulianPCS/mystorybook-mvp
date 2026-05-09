import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Learn with Coloring",
  description:
    "Find out which cookies Learn with Coloring uses, why we use them, and how you can manage or disable them in your browser.",
};

export default function CookiesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header band */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Cookie Policy</h1>
          <p className="text-gray-400 font-semibold text-sm">Last updated: May 2025</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-gray-600 font-semibold leading-relaxed">
          This policy explains what cookies are, which cookies the Learn with Coloring website uses,
          and how you can control them. It should be read alongside our{" "}
          <Link href="/privacy" className="underline hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>
          .
        </p>

        {/* 1. What Are Cookies */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">1. What Are Cookies</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Cookies are small text files that are placed on your device (computer, tablet, or phone)
          when you visit a website. They allow the site to remember your actions and preferences over
          a period of time, so you do not have to re-enter them each time you return.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Cookies can be set by the website you are visiting (first-party cookies) or by third-party
          services that the site uses (third-party cookies). They may be stored for the duration of
          your browser session only (session cookies) or for a fixed period after your visit
          (persistent cookies).
        </p>

        {/* 2. Cookies We Use */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">2. Cookies We Use</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We use the following categories of cookies on our website:
        </p>

        <h3 className="text-base font-black text-gray-800 mt-6 mb-2">Essential cookies</h3>
        <p className="text-gray-600 font-semibold leading-relaxed">
          These cookies are strictly necessary for the website to function and cannot be switched off
          in our systems. They are typically set in response to actions you take, such as filling in
          a form or setting your preferences. Without these cookies, parts of the site may not work
          as intended.
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            {
              term: "Session cookies",
              detail:
                "Maintain your session as you move between pages on the site. These expire when you close your browser.",
            },
            {
              term: "Preference cookies",
              detail:
                "Remember choices you have made, such as any consent preferences, so you are not asked again on your next visit.",
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

        <h3 className="text-base font-black text-gray-800 mt-6 mb-2">Analytics cookies</h3>
        <p className="text-gray-600 font-semibold leading-relaxed">
          These cookies are optional. We use analytics tools to understand how visitors find and use
          our site — for example, which pages are visited most, how long people stay, and where
          visitors come from. This information is used in aggregate to improve the website and our
          service.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          Analytics cookies are only set with your consent. You can opt out at any time by adjusting
          your browser settings or using the controls described in section 3 below.
        </p>

        <h3 className="text-base font-black text-gray-800 mt-6 mb-2">Marketing cookies</h3>
        <p className="text-gray-600 font-semibold leading-relaxed">
          These cookies are optional. If we run advertising campaigns, marketing cookies may be used
          to measure the effectiveness of those campaigns and to show you relevant content on other
          platforms. They are only set with your consent and only when such campaigns are active.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We do not use marketing cookies to build personal profiles for sale to third parties.
        </p>

        {/* 3. Managing Cookies */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">3. Managing Cookies</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          You can control and manage cookies in your browser settings. Most browsers allow you to:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            "View the cookies currently stored on your device.",
            "Block all cookies, or block cookies from specific websites.",
            "Delete all cookies, or delete cookies from specific websites.",
            "Set preferences to be notified each time a cookie is placed.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-gray-400 font-black flex-shrink-0 mt-0.5">—</span>
              <p className="text-gray-600 font-semibold leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          For guidance on how to manage cookies in your specific browser, visit the help pages for{" "}
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            Google Chrome
          </a>
          ,{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            Mozilla Firefox
          </a>
          ,{" "}
          <a
            href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            Apple Safari
          </a>
          , or{" "}
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            Microsoft Edge
          </a>
          .
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          Please note that disabling essential cookies may affect the way our website works. Some
          features — such as form submissions — may not function correctly if these cookies are
          blocked.
        </p>

        {/* 4. Third-Party Cookies */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">4. Third-Party Cookies</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Where we use third-party analytics or advertising services, those providers may set their
          own cookies on your device. We only work with providers who comply with applicable data
          protection law and whose cookie practices are described in their own privacy and cookie
          policies.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We do not have direct control over third-party cookies, but you can manage them through
          your browser settings or through opt-out tools provided by those services, such as the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>

        {/* 5. Changes to This Policy */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">5. Changes to This Policy</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          We may update this cookie policy from time to time as our use of cookies changes or in
          response to new legal requirements. The date at the top of this page shows when the policy
          was last revised.
        </p>
        <p className="text-gray-600 font-semibold leading-relaxed mt-3">
          We encourage you to check back periodically to stay informed about how we use cookies.
          Where changes are material, we will notify waitlist members by email where possible.
        </p>

        {/* 6. Contact */}
        <h2 className="text-xl font-black text-gray-800 mt-10 mb-3">6. Contact</h2>
        <p className="text-gray-600 font-semibold leading-relaxed">
          If you have any questions about this cookie policy or about how we handle your data, please
          contact us:
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
        <p className="text-gray-600 font-semibold leading-relaxed mt-4">
          You may also find our{" "}
          <Link href="/privacy" className="underline hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline hover:text-gray-800 transition-colors">
            Terms of Use
          </Link>{" "}
          useful.
        </p>

        {/* Footer note */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm font-semibold">
            For more information about cookies and your rights, visit the{" "}
            <a
              href="https://ico.org.uk/for-the-public/online/cookies/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 transition-colors"
            >
              ICO&apos;s guidance on cookies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
