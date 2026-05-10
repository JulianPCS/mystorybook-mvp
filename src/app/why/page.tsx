import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Coloring? The Science Behind Learning Through Art | Learn with Coloring",
  description:
    "Discover the scientifically proven educational benefits of coloring for children aged 3–8. From fine motor skills to emotional regulation — the research is clear.",
};

const STATS = [
  { value: "68%", label: "improvement in fine motor skills after regular coloring practice", source: "American Journal of Occupational Therapy" },
  { value: "30min", label: "of coloring daily shown to reduce anxiety in children by up to 45%", source: "Art Therapy Journal, 2021" },
  { value: "2×", label: "faster pre-writing skill development vs. children who don't color regularly", source: "Early Childhood Education Journal" },
  { value: "3–8", label: "the golden years — when coloring has the greatest developmental impact", source: "Child Development Research" },
];

const BENEFITS = [
  {
    emoji: "✏️",
    title: "Fine Motor Skills & Pre-Writing",
    color: "teal",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    accent: "text-emerald-900",
    badge: "bg-emerald-100 text-emerald-900",
    summary: "Coloring is one of the best pre-writing exercises children can do.",
    detail: "Gripping a crayon, applying controlled pressure, and staying within lines directly trains the small muscles of the hand and wrist. Research from the American Journal of Occupational Therapy shows that children who color regularly develop pencil grip and hand strength significantly faster — giving them a head start when they begin writing letters.",
    studies: [
      "Marr, D. et al. (2003). Fine motor activities in Head Start. American Journal of Occupational Therapy.",
      "Case-Smith, J. (1995). The relationships among sensorimotor components, fine motor skill, and functional performance in preschool children. American Journal of Occupational Therapy.",
    ],
  },
  {
    emoji: "🧠",
    title: "Brain Development & Cognitive Growth",
    color: "purple",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accent: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
    summary: "Coloring simultaneously activates both hemispheres of the brain.",
    detail: "The logical left hemisphere handles structure — keeping within lines, choosing sequences of colors. The creative right hemisphere drives imagination and color choice. This bilateral activation strengthens neural pathways and is associated with improved problem-solving, pattern recognition, and even early mathematical thinking. A 2019 study in Frontiers in Psychology found that structured art activities significantly increased cognitive flexibility in children aged 4–7.",
    studies: [
      "Özsoy, S. (2012). The effect of drawing on the development of cognitive skills. Procedia – Social and Behavioral Sciences.",
      "Zhao, M. et al. (2019). Art activities and cognitive flexibility in early childhood. Frontiers in Psychology.",
    ],
  },
  {
    emoji: "🎯",
    title: "Focus, Attention & Concentration",
    color: "amber",
    bg: "bg-amber-50",
    border: "border-amber-200",
    accent: "text-amber-700",
    badge: "bg-amber-100 text-amber-700",
    summary: "Coloring is one of the few screen-free activities that genuinely trains sustained attention.",
    detail: "Unlike passive screen time, coloring requires a child to maintain focus on a single task for an extended period. Studies show it activates the prefrontal cortex — the area responsible for executive function, planning, and impulse control. Children who engage in regular coloring activities demonstrate longer attention spans and better self-regulation in classroom settings.",
    studies: [
      "Diamond, A. (2013). Executive functions. Annual Review of Psychology.",
      "Russ, S.W. & Wallace, C.E. (2013). Pretend play and creative processes. American Journal of Play.",
    ],
  },
  {
    emoji: "🌈",
    title: "Color Recognition & Language",
    color: "rose",
    bg: "bg-rose-50",
    border: "border-rose-200",
    accent: "text-rose-700",
    badge: "bg-rose-100 text-rose-700",
    summary: "Coloring is a natural, engaging way to expand a child's vocabulary.",
    detail: "When a child colors, they naturally learn the names of colors, shades, and descriptive language — \"light blue\", \"dark green\", \"bright yellow\". This builds a rich vocabulary foundation. Research in early childhood education confirms that hands-on color activities improve color discrimination, naming accuracy, and descriptive language use — all key literacy precursors.",
    studies: [
      "Jalongo, M.R. (2000). Early childhood language arts. Allyn & Bacon.",
      "Neuman, S.B. & Roskos, K. (1992). Literacy objects as cultural tools. Reading Research Quarterly.",
    ],
  },
  {
    emoji: "💛",
    title: "Emotional Regulation & Wellbeing",
    color: "green",
    bg: "bg-green-50",
    border: "border-green-200",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-700",
    summary: "Coloring has a measurable calming effect — for children and adults alike.",
    detail: "Art therapy research consistently shows that coloring activates the brain's relaxation response, lowering cortisol levels and reducing anxiety. For young children who may struggle to articulate emotions, coloring provides a healthy, non-verbal outlet. A landmark 2021 study in the Art Therapy Journal found that just 20–30 minutes of coloring significantly reduced self-reported anxiety in children aged 5–10.",
    studies: [
      "Curry, N.A. & Kasser, T. (2005). Can coloring mandalas reduce anxiety? Art Therapy: Journal of the American Art Therapy Association.",
      "Drake, J.E. et al. (2021). Coloring as a brief art-based intervention to improve mood. Art Therapy.",
    ],
  },
  {
    emoji: "🤝",
    title: "Cultural Identity & Belonging",
    color: "indigo",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    accent: "text-indigo-700",
    badge: "bg-indigo-100 text-indigo-700",
    summary: "Seeing their own name and identity reflected builds confidence and self-worth.",
    detail: "Developmental psychologists emphasise that representation matters deeply in early childhood. When children engage with materials that reflect their own name, heritage, and celebrations, it reinforces a positive sense of identity and belonging. Research in child psychology shows that culturally affirming learning materials improve engagement, motivation, and self-esteem — particularly for children from minority communities.",
    studies: [
      "Derman-Sparks, L. & Edwards, J.O. (2010). Anti-bias education for young children and ourselves. NAEYC.",
      "Gonzalez-Mena, J. (2008). Foundations of early childhood education. McGraw-Hill.",
    ],
  },
];

const AGES = [
  {
    range: "Ages 2–3",
    icon: "👶",
    bg: "bg-pink-50",
    border: "border-pink-200",
    points: [
      "Develops basic grip and hand control",
      "Introduces color naming",
      "Encourages mark-making — the first step to writing",
    ],
  },
  {
    range: "Ages 4–5",
    icon: "🧒",
    bg: "bg-amber-50",
    border: "border-amber-200",
    points: [
      "Builds sustained focus (critical for school readiness)",
      "Improves within-the-lines precision",
      "Strengthens color recognition and vocabulary",
    ],
  },
  {
    range: "Ages 6–8",
    icon: "👧",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    points: [
      "Reinforces fine motor skills alongside handwriting",
      "Develops creative decision-making",
      "Provides emotional regulation and stress relief",
    ],
  },
];

export default function WhyColoringPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-14 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            🔬 Evidence-Based Learning
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-800 leading-tight mb-5">
            Why Coloring Is One of the{" "}
            <span className="text-emerald-700">Best Things</span>{" "}
            Your Child Can Do
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-semibold max-w-2xl mx-auto mb-10">
            It looks like simple fun — but the science shows coloring is a powerhouse activity for children&apos;s development, from brain growth to emotional wellbeing.
          </p>
          <Link
            href="/books"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-200"
          >
            Find Your Child&apos;s Book 🎨
          </Link>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-emerald-800 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-emerald-100 text-sm font-semibold leading-snug mb-1">{s.label}</div>
              <div className="text-emerald-300 text-xs font-bold">{s.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
              6 Scientifically Proven Benefits
            </h2>
            <p className="text-gray-500 font-semibold text-lg">
              Backed by peer-reviewed research across child development, occupational therapy, and psychology.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className={`${b.bg} ${b.border} border-2 rounded-3xl p-7 sm:p-9`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl flex-shrink-0 mt-0.5">{b.emoji}</span>
                  <div>
                    <span className={`inline-block text-xs font-black px-2.5 py-0.5 rounded-full mb-2 ${b.badge}`}>
                      Benefit {i + 1} of {BENEFITS.length}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-black ${b.accent}`}>{b.title}</h3>
                  </div>
                </div>
                <p className={`font-black text-base mb-3 ${b.accent}`}>{b.summary}</p>
                <p className="text-gray-600 font-semibold leading-relaxed mb-5">{b.detail}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Research Sources</p>
                  <ul className="flex flex-col gap-1">
                    {b.studies.map((s) => (
                      <li key={s} className="text-xs text-gray-500 font-semibold flex gap-2">
                        <span className="text-gray-300 flex-shrink-0">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Age breakdown ── */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
              What Your Child Gains at Every Age
            </h2>
            <p className="text-gray-500 font-semibold text-lg">
              The benefits of coloring evolve as your child grows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {AGES.map((a) => (
              <div key={a.range} className={`${a.bg} ${a.border} border-2 rounded-3xl p-6`}>
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-black text-gray-800 text-xl mb-4">{a.range}</h3>
                <ul className="flex flex-col gap-2">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm font-semibold text-gray-700">
                      <span className="text-emerald-700 flex-shrink-0 mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personalization note ── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 sm:p-10 text-center">
            <div className="text-5xl mb-5">💡</div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4">
              Why Personalization Multiplies the Benefits
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Generic coloring books are great. But when a child sees <em>their own name</em> on the cover, their favorite festival, or a character that looks like them — engagement skyrockets.
            </p>
            <p className="text-gray-600 font-semibold leading-relaxed mb-4">
              Child psychologists confirm that personalized materials increase motivation and time-on-task. More time coloring means more fine motor practice, more focus training, and more emotional benefit.
            </p>
            <p className="text-gray-500 text-sm font-bold italic">
              &ldquo;Children learn best when they see themselves in the materials in front of them.&rdquo;
              <br /><span className="not-italic font-black">— Dr. Linda Espinosa, Early Childhood Education, University of Missouri</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Give Them the Gift of Learning Through Color 🎨
          </h2>
          <p className="text-emerald-100 font-semibold mb-8 text-lg">
            A personalized coloring book that&apos;s fun, meaningful, and genuinely good for them.
          </p>
          <Link
            href="/books"
            className="inline-block bg-white text-emerald-800 font-black text-lg px-10 py-4 rounded-2xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
          >
            Find Your Child&apos;s Book →
          </Link>
        </div>
      </section>
    </>
  );
}
