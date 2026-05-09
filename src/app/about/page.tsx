import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Why Learn with Coloring Exists | Learn with Coloring",
  description:
    "Learn with Coloring was born from a family moment. Our founder searched everywhere for a personalised colouring book that reflected real names from diverse UK families — and couldn't find one. So they made it.",
};

const VALUES = [
  {
    emoji: "⭐",
    title: "Every Child Deserves to Be the Star",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    accent: "text-emerald-900",
    body:
      "Every child who opens one of our books should feel seen. Not a placeholder. Not an afterthought. Their name, on the cover, in the pages — because they are the main character.",
  },
  {
    emoji: "🏡",
    title: "Rooted in Real Families",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-700",
    body:
      "Our books are built around the real, rich diversity of British family life — Muslim families, South Asian families, African families, mixed families. Names like Maryam, Zainab, Idris, and Priya belong on bookshelves just as much as any other.",
  },
  {
    emoji: "✏️",
    title: "Quality That Lasts",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-700",
    body:
      "We use premium matte paper, child-safe inks, and work with a trusted UK printer. Every illustration is reviewed before anything goes to print. These are books worth keeping.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            A family idea, made real
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            Our Story
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
            Learn with Coloring started not in a boardroom, but in a living room — watching a child colour and wondering why their name wasn&apos;t on the page.
          </p>
        </div>
      </section>

      {/* ── Personal Narrative ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
            I have four nieces and nephews, and I am completely devoted to each of them. Watching them grow up has been one of the great joys of my life. The two youngest — a pair who turned two this year — are at that wonderful, chaotic stage where they&apos;re discovering everything for the first time. They can just about hold a crayon, and they do so with a concentration that puts the rest of us to shame.
          </p>

          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
            Then there&apos;s the five-year-old. If you&apos;ve ever watched a five-year-old colour, you&apos;ll know it&apos;s something close to meditation for them — total focus, total absorption, and total pride when they show you the finished page. This one loves drawing more than almost anything else. And it was this child, and a particular afternoon with a colouring book, that started all of this.
          </p>

          {/* Pull quote */}
          <blockquote className="my-10 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-2xl px-7 py-6">
            <p className="text-emerald-900 font-black text-xl sm:text-2xl leading-snug italic">
              &ldquo;They light up when they see their name on anything. A keychain, a mug, a badge. What if there was a whole book made just for them?&rdquo;
            </p>
          </blockquote>

          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
            I wanted to give each of them something truly personal — not a generic gift, but something that said: <em>this was made for you, specifically</em>. A personalised colouring book felt perfect. So I went looking for one. I searched for books with Arabic names, with Muslim names, with the kinds of names that appear in our family and in families like ours across Britain. Names like Maryam, Zainab, Idris, Dawud. I found plenty of books with Olivers and Emilys. I found very little else — and what I did find was either low quality, poorly illustrated, or so generic that the &ldquo;personalisation&rdquo; was little more than a font swap on the cover.
          </p>

          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-8">
            My eldest niece or nephew — now ten — was five when I first had this idea. I remember watching them colour back then, and I thought: by the time anything is ready, they&apos;ll have outgrown it. But they became my first tester. They sat with the early designs and gave the kind of honest, unfiltered feedback that only a child can. The two-year-olds are the reason we made sure the books work for younger children too — simple, bold shapes that small hands can explore. Every age, every name, every family deserves a book that feels like it was made for them. So that&apos;s what we set out to build.
          </p>
        </div>
      </section>

      {/* ── Where We Are Today ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
              Where We Are Today
            </h2>
            <p className="text-gray-500 font-semibold text-lg max-w-2xl mx-auto">
              Learn with Coloring is a small, independent UK company with a straightforward mission: every child should be able to find their name in a beautiful book.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className={`${v.bg} ${v.border} border-2 rounded-3xl p-7 shadow-sm`}
              >
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className={`font-black text-lg mb-3 ${v.accent}`}>{v.title}</h3>
                <p className="text-gray-600 font-semibold text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Note ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-5">
              A Note from the Founder
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Learn with Coloring is a very small operation — at the moment, it is largely just me. I am not a publisher or a professional illustrator. I am an aunt and uncle figure who got frustrated by a gap in the market and decided to do something about it.
            </p>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Every book in this collection has been thought through carefully — the illustrations, the name placement, the paper, the packaging. I work with talented illustrators and a UK printer I trust. Nothing goes out until I&apos;m happy with it.
            </p>
            <p className="text-gray-600 font-semibold leading-relaxed mb-6">
              If you have a name you&apos;d love to see in the collection, or a suggestion, I genuinely want to hear from you. This company exists because families like yours deserve better than what was already out there.
            </p>
            <div className="border-t border-emerald-200 pt-6">
              <p className="text-gray-800 font-black text-lg">The Founder</p>
              <p className="text-emerald-900 font-bold text-sm">Learn with Coloring, UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Find Their Book
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            Browse our full collection of personalised colouring books — names, festivals, and milestones.
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
