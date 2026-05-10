import Link from "next/link";

export const metadata = {
  title: "Book Reserved! — Your Personalized Coloring Book",
};

type Props = {
  searchParams: { name?: string };
};

export default function CreateConfirmedPage({ searchParams }: Props) {
  const name = searchParams.name || "your child";

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Success icon */}
        <div className="text-7xl">🎨</div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Book reserved for {name}!
          </h1>
          <p className="text-gray-500 text-base">
            We&apos;ve noted all your personalization choices. We&apos;ll be in touch by email to confirm the details and arrange payment before we print and mail your book.
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 text-left space-y-2">
          <p className="text-sm font-semibold text-purple-700">What happens next?</p>
          <ul className="space-y-1.5 text-sm text-purple-600">
            <li className="flex items-start gap-2"><span>1.</span><span>We&apos;ll email you within 24 hours to confirm your order.</span></li>
            <li className="flex items-start gap-2"><span>2.</span><span>Once you pay ($30), we&apos;ll create and print your unique book.</span></li>
            <li className="flex items-start gap-2"><span>3.</span><span>Your personalized book arrives by mail within 5–7 days.</span></li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `I just made a personalized coloring book for ${name}! 🎨📚 Check it out at ${typeof window !== "undefined" ? window.location.origin : ""}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Share on WhatsApp 💬
          </a>
          <Link
            href="/"
            className="w-full border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
