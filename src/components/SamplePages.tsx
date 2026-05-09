const SAMPLES = [
  {
    label: "Animals & Nature",
    emoji: "🦋",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    pattern: "M10 50 Q30 10 50 50 Q70 90 90 50",
    desc: "Butterflies, flowers & leaves",
  },
  {
    label: "Stars & Patterns",
    emoji: "⭐",
    bg: "bg-amber-50",
    border: "border-amber-200",
    pattern: "M50 10 L61 35 L90 35 L65 57 L74 82 L50 65 L26 82 L35 57 L10 35 L39 35 Z",
    desc: "Geometric shapes & stars",
  },
  {
    label: "Ocean Friends",
    emoji: "🐬",
    bg: "bg-blue-50",
    border: "border-blue-200",
    pattern: "M20 60 Q35 40 50 60 Q65 80 80 60",
    desc: "Waves, fish & sea creatures",
  },
  {
    label: "Garden Life",
    emoji: "🌸",
    bg: "bg-pink-50",
    border: "border-pink-200",
    pattern: "M50 50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0",
    desc: "Flowers, bees & butterflies",
  },
];

export default function SamplePages() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-800 mb-2">
            What&apos;s Inside? ✨
          </h2>
          <p className="text-gray-500 font-semibold">
            32 beautifully illustrated pages, ready to colour
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {SAMPLES.map((s) => (
            <div
              key={s.label}
              className={`${s.bg} ${s.border} border-2 rounded-3xl p-4 flex flex-col items-center gap-3 aspect-square justify-center`}
            >
              {/* SVG placeholder illustration */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full opacity-30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={s.pattern} />
                  <circle cx="50" cy="50" r="45" strokeDasharray="8 4" opacity="0.3" />
                </svg>
                <span className="absolute text-3xl sm:text-4xl">{s.emoji}</span>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-700 text-xs sm:text-sm">{s.label}</p>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6 font-semibold">
          No faces or cartoon people — works beautifully across all families 🌍
        </p>
      </div>
    </section>
  );
}
