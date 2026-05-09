"use client";

import Image from "next/image";
import { useState } from "react";

export type CoverOptions = {
  name: string;
  gender: "boy" | "girl";
  skin: string;
  colorScheme: string;
  bgTheme: string;
};

type Props = {
  options: CoverOptions;
  generatedCoverUrl: string | null;
  onChange: (options: CoverOptions) => void;
  onCoverGenerated: (url: string) => void;
};

const NAME_MAX = 14;

const SKIN_TONES = [
  { value: "fair light", label: "Fair" },
  { value: "medium olive", label: "Medium" },
  { value: "warm tan", label: "Tan" },
  { value: "warm brown", label: "Brown" },
  { value: "deep brown", label: "Deep" },
  { value: "rich dark", label: "Dark" },
];

const SKIN_SWATCHES: Record<string, string> = {
  "fair light": "#FDDBB4",
  "medium olive": "#E8A87C",
  "warm tan": "#C87941",
  "warm brown": "#A0522D",
  "deep brown": "#7B3F1F",
  "rich dark": "#4A2010",
};

const COLOR_SCHEMES = [
  { value: "midnight blue and gold", label: "Midnight Blue", swatch: "#1a237e" },
  { value: "sage green and gold", label: "Sage Green", swatch: "#4a7c59" },
  { value: "deep rose and gold", label: "Deep Rose", swatch: "#c2185b" },
  { value: "royal purple and gold", label: "Royal Purple", swatch: "#6a1b9a" },
  { value: "teal and gold", label: "Teal", swatch: "#00695c" },
  { value: "coral and gold", label: "Coral", swatch: "#e64a19" },
  { value: "warm amber and gold", label: "Amber", swatch: "#e65100" },
  { value: "sky blue and silver", label: "Sky Blue", swatch: "#0277bd" },
];

type BgTheme = { value: string; label: string; emoji: string };
type BgGroup = { label: string; emoji: string; themes: BgTheme[] };

const BG_THEME_GROUPS: BgGroup[] = [
  {
    label: "Islamic",
    emoji: "🕌",
    themes: [
      { value: "an illuminated Islamic cityscape at night with glowing golden domes, tall minarets, and a starry sky", label: "Mosque at Night", emoji: "🌙" },
      { value: "a peaceful Ramadan evening scene with warm lantern light, crescent moon, and a glowing mosque reflected in still water", label: "Ramadan Eve", emoji: "🪔" },
      { value: "a lush Islamic paradise garden with rose arches, glowing fountains, and flowering trees at golden hour", label: "Islamic Garden", emoji: "🌹" },
      { value: "a magnificent Islamic palace interior with soaring gold-arched ceilings, ornate mosaics, and glowing chandeliers", label: "Grand Palace", emoji: "🏛️" },
      { value: "a magical celestial night sky filled with thousands of glowing stars, galaxies, and a large silver crescent moon above a mosque silhouette", label: "Starry Night", emoji: "⭐" },
    ],
  },
  {
    label: "Everyday",
    emoji: "🌍",
    themes: [
      { value: "a beautiful blooming garden with colourful flowers, butterflies, and a sunny blue sky with fluffy clouds", label: "Flower Garden", emoji: "🌸" },
      { value: "a cosy warm living room with bookshelves, a fireplace, soft rugs, and afternoon sunlight streaming through the window", label: "At Home", emoji: "🏠" },
      { value: "a sunny park with green rolling hills, a pond with ducks, picnic blankets, and children playing in the distance", label: "At the Park", emoji: "🌳" },
      { value: "a golden sandy beach with gentle waves, a bright sun, colourful beach umbrellas, and a clear turquoise sea", label: "At the Beach", emoji: "🏖️" },
      { value: "a vibrant school classroom with colourful posters on the walls, bookshelves full of books, and warm sunlight", label: "At School", emoji: "🎒" },
      { value: "a magical library with towering shelves of glowing books, spiral staircases, and soft reading lamps", label: "The Library", emoji: "📚" },
    ],
  },
  {
    label: "Fantasy",
    emoji: "✨",
    themes: [
      { value: "a grand enchanted castle with tall turrets, a glowing drawbridge, colourful banners, and a magical sunset sky", label: "Enchanted Castle", emoji: "🏰" },
      { value: "a dazzling ice kingdom with towering crystal ice spires, frozen waterfalls, and a shimmering aurora borealis sky", label: "Ice Kingdom", emoji: "❄️" },
      { value: "the interior of a futuristic starship with glowing control panels, large windows showing stars and galaxies, and blinking lights", label: "Starship", emoji: "🚀" },
      { value: "a vibrant underwater kingdom with colourful coral reefs, glowing sea creatures, friendly dolphins, and shafts of sunlight from above", label: "Underwater", emoji: "🌊" },
      { value: "a magical glowing forest with giant luminous mushrooms, fireflies, sparkling fairy lights between ancient trees, and a moonlit sky", label: "Magic Forest", emoji: "🌲" },
      { value: "a lush jungle adventure scene with towering ancient ruins, exotic tropical flowers, colourful parrots, and golden treasure chests", label: "Jungle Ruins", emoji: "🗺️" },
      { value: "a whimsical candy land with rainbow lollipop trees, chocolate rivers, gumdrop mountains, and a bright sugary sky", label: "Candy Land", emoji: "🍭" },
      { value: "a high-altitude cloud kingdom with fluffy cloud platforms, rainbow bridges, sun rays breaking through, and friendly sky creatures", label: "Cloud Kingdom", emoji: "☁️" },
    ],
  },
];

const ALL_BG_THEMES = BG_THEME_GROUPS.flatMap((g) => g.themes);

export default function StepCover({ options, generatedCoverUrl, onChange, onCoverGenerated }: Props) {
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [generationsUsed, setGenerationsUsed] = useState(0);
  const [activeBgGroup, setActiveBgGroup] = useState(0);

  const nameLen = options.name.length;
  const nameTooLong = nameLen > NAME_MAX;
  const canGenerate = options.name.trim().length >= 2 && !nameTooLong && generationsUsed < 2;

  function handleNameChange(raw: string) {
    // Strip leading/trailing spaces on paste but allow mid-typing spaces
    const val = raw.replace(/[^a-zA-Z\s'-]/g, "").slice(0, NAME_MAX);
    onChange({ ...options, name: val });
  }

  async function handleGenerate() {
    if (!canGenerate || generating) return;
    setGenerating(true);
    setError("");

    try {
      const res = await fetch("/api/generate-cover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: options.name.trim(),
          gender: options.gender,
          skin: options.skin,
          colorScheme: options.colorScheme,
          bgTheme: options.bgTheme,
        }),
      });

      if (!res.ok) throw new Error("Generation failed");
      const data = await res.json();
      if (!data.url) throw new Error("No image returned");

      onCoverGenerated(data.url);
      setGenerationsUsed((n) => n + 1);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setGenerating(false);
    }
  }

  const currentBgLabel = ALL_BG_THEMES.find((t) => t.value === options.bgTheme)?.label ?? "None";

  return (
    <div className="space-y-8">
      {/* Name + gender */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="child-name" className="block text-sm font-semibold text-gray-700">
              Child&apos;s Name
            </label>
            <span className={`text-xs font-medium ${nameLen > NAME_MAX - 2 ? (nameTooLong ? "text-red-500" : "text-amber-500") : "text-gray-400"}`}>
              {nameLen}/{NAME_MAX}
            </span>
          </div>
          <input
            id="child-name"
            type="text"
            value={options.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="e.g. Amara"
            maxLength={NAME_MAX}
            className={`w-full px-4 py-3 rounded-xl border text-gray-800 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
              nameTooLong
                ? "border-red-300 focus:ring-red-400"
                : "border-gray-200 focus:ring-purple-400"
            }`}
          />
          {nameTooLong && (
            <p className="text-xs text-red-500">Name must be {NAME_MAX} characters or fewer to fit on the cover.</p>
          )}
        </div>

        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-gray-700">Character</p>
          <div className="inline-flex rounded-xl border border-gray-200 overflow-hidden h-[50px]">
            <button
              onClick={() => onChange({ ...options, gender: "girl" })}
              className={`px-6 text-sm font-semibold transition-all ${
                options.gender === "girl" ? "bg-pink-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              👧 Girl
            </button>
            <button
              onClick={() => onChange({ ...options, gender: "boy" })}
              className={`px-6 text-sm font-semibold transition-all ${
                options.gender === "boy" ? "bg-blue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              👦 Boy
            </button>
          </div>
        </div>
      </div>

      {/* Skin tone */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-700">Skin Tone</p>
        <div className="flex flex-wrap gap-3">
          {SKIN_TONES.map((s) => (
            <button
              key={s.value}
              onClick={() => onChange({ ...options, skin: s.value })}
              title={s.label}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  options.skin === s.value
                    ? "border-purple-500 scale-110 shadow-md"
                    : "border-transparent hover:scale-105 hover:border-gray-300"
                }`}
                style={{ backgroundColor: SKIN_SWATCHES[s.value] }}
              />
              <span className="text-[10px] text-gray-500">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cover colour scheme */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-700">Cover Colour</p>
        <div className="flex flex-wrap gap-3">
          {COLOR_SCHEMES.map((c) => (
            <button
              key={c.value}
              onClick={() => onChange({ ...options, colorScheme: c.value })}
              title={c.label}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  options.colorScheme === c.value
                    ? "border-purple-500 scale-110 shadow-md"
                    : "border-transparent hover:scale-105 hover:border-gray-300"
                }`}
                style={{ backgroundColor: c.swatch }}
              />
              <span className="text-[10px] text-gray-500">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Background scene — grouped */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">Background Scene</p>
          {options.bgTheme && (
            <span className="text-xs text-purple-600 font-medium">{currentBgLabel}</span>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2">
          {BG_THEME_GROUPS.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActiveBgGroup(i)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeBgGroup === i
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{group.emoji}</span>
              {group.label}
            </button>
          ))}
        </div>

        {/* Scenes grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {BG_THEME_GROUPS[activeBgGroup].themes.map((bg) => (
            <button
              key={bg.value}
              onClick={() => onChange({ ...options, bgTheme: bg.value })}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                options.bgTheme === bg.value
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:bg-purple-50/50"
              }`}
            >
              <span className="text-lg flex-shrink-0">{bg.emoji}</span>
              <span className="leading-tight">{bg.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <div className="space-y-3">
        <button
          onClick={handleGenerate}
          disabled={!canGenerate || generating}
          className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-base transition-all shadow-md flex items-center justify-center gap-2"
        >
          {generating ? (
            <>
              <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Creating {options.name.trim() || "your"}&apos;s cover&hellip;
            </>
          ) : generatedCoverUrl ? (
            "✨ Regenerate Cover"
          ) : (
            "✨ Generate My Cover Preview"
          )}
        </button>

        {generating && (
          <p className="text-xs text-center text-gray-400 animate-pulse">
            This usually takes 20–30 seconds — hang tight!
          </p>
        )}

        {generationsUsed >= 2 && (
          <p className="text-xs text-center text-amber-600">
            You&apos;ve used your 2 free previews. Continue to order your book!
          </p>
        )}

        {error && <p className="text-sm text-center text-red-500">{error}</p>}

        {!generatedCoverUrl && !generating && options.name.trim().length < 2 && (
          <p className="text-xs text-center text-gray-400">Enter a name above to generate your cover</p>
        )}
      </div>

      {/* Cover preview */}
      {generatedCoverUrl && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-700">Your cover preview</p>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-xs mx-auto">
            <Image
              src={generatedCoverUrl}
              alt={`${options.name}'s coloring book cover`}
              width={400}
              height={600}
              className="w-full"
              unoptimized
            />
            <div className="absolute inset-0 flex items-end justify-center pb-3 pointer-events-none">
              <span className="text-white/50 text-[11px] font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Preview — Order to unlock full quality
              </span>
            </div>
          </div>
          <p className="text-xs text-center text-gray-400">
            Happy with this? Click &ldquo;Choose Pages&rdquo; below to continue.
          </p>
        </div>
      )}
    </div>
  );
}
