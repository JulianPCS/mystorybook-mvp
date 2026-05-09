import Image from "next/image";

const COLOUR_MAP: Record<string, string> = {
  "bg-teal-100": "#ccfbf1", "bg-teal-200": "#99f6e4", "bg-teal-300": "#5eead4",
  "bg-teal-400": "#2dd4bf", "bg-blue-200": "#bfdbfe", "bg-blue-300": "#93c5fd",
  "bg-purple-200": "#e9d5ff", "bg-purple-300": "#d8b4fe",
  "bg-pink-200": "#fbcfe8", "bg-pink-300": "#f9a8d4",
  "bg-amber-200": "#fde68a", "bg-amber-300": "#fcd34d",
  "bg-gold-200": "#fde68a", "bg-gold-300": "#fcd34d",
  "bg-orange-200": "#fed7aa", "bg-orange-300": "#fdba74",
  "bg-red-200": "#fecaca", "bg-red-300": "#fca5a5",
  "bg-yellow-200": "#fef08a", "bg-rose-200": "#fecdd3",
  "bg-green-200": "#bbf7d0", "bg-green-300": "#86efac",
  "bg-emerald-200": "#a7f3d0", "bg-indigo-200": "#c7d2fe",
};

interface BookCoverProps {
  name: string;
  emoji: string;
  accent: string;
  coverImage?: string;
  size?: "sm" | "md" | "lg";
  isOccasion?: boolean;
}

const SIZE_MAP = {
  sm: { w: 128, h: 176, text: "1rem", emoji: "2.2rem", stars: "0.6rem", label: "0.55rem" },
  md: { w: 192, h: 256, text: "1.25rem", emoji: "3.5rem", stars: "0.75rem", label: "0.6rem" },
  lg: { w: 280, h: 360, text: "1.6rem", emoji: "4.5rem", stars: "0.9rem", label: "0.65rem" },
};

export default function BookCover({ name, emoji, accent, coverImage, size = "md", isOccasion = false }: BookCoverProps) {
  const s = SIZE_MAP[size];
  const bgColor = COLOUR_MAP[accent] ?? "#99f6e4";

  // Real AI-generated cover image
  if (coverImage) {
    return (
      <div
        style={{ width: s.w, height: s.h }}
        className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative select-none"
      >
        <Image
          src={coverImage}
          alt={`${name}'s colouring book cover`}
          fill
          className="object-cover"
          sizes={`${s.w}px`}
        />
      </div>
    );
  }

  // Illustrated placeholder for names without a generated cover
  return (
    <div
      style={{
        width: s.w, height: s.h, background: bgColor,
        fontFamily: "'Nunito', sans-serif",
      }}
      className="rounded-2xl relative flex flex-col items-center justify-between p-3 shadow-lg border-2 border-white/60 select-none flex-shrink-0"
    >
      <div style={{ fontSize: s.stars }} className="text-white/70 font-bold tracking-widest w-full text-center">
        ✦ ✦ ✦
      </div>
      <div style={{ fontSize: s.label }} className="text-white/80 font-bold uppercase tracking-widest">
        {isOccasion ? "A Special Book" : "My Colouring Book"}
      </div>
      <div style={{ fontSize: s.emoji }} className="drop-shadow-sm leading-none">{emoji}</div>
      <div style={{ fontSize: s.text }} className="font-black text-white text-center drop-shadow leading-tight px-1">
        {name}
      </div>
      <div className="absolute top-2 left-2 w-4 h-4 border-2 border-white/40 rounded-sm rotate-12" />
      <div className="absolute top-2 right-2 w-3 h-3 border-2 border-white/40 rounded-full" />
      <div className="absolute bottom-8 left-2 w-2 h-2 bg-white/30 rounded-full" />
      <div className="absolute bottom-8 right-2 w-3 h-3 bg-white/20 rotate-45" />
      <div className="text-white/70 text-[9px] font-bold tracking-wider uppercase">
        ✨ Personalised for you ✨
      </div>
    </div>
  );
}
