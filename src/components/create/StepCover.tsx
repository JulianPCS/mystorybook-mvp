"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  onNext: () => void;
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

function withPreviewRetryParam(url: string, attempt: number) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}previewReady=${attempt}-${Date.now()}`;
}

// Derive the group label from the actual selected theme (not the active tab)
function getBgGroupForTheme(bgTheme: string): "Islamic" | "Everyday" | "Fantasy" {
  for (const group of BG_THEME_GROUPS) {
    if (group.themes.some((t) => t.value === bgTheme)) {
      return group.label as "Islamic" | "Everyday" | "Fantasy";
    }
  }
  return "Islamic";
}

export default function StepCover({ options, generatedCoverUrl, onChange, onCoverGenerated, onNext }: Props) {
  const [generating, setGenerating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [readyCoverSrc, setReadyCoverSrc] = useState<string | null>(null);
  const [imageLoadError, setImageLoadError] = useState("");
  const [previewRetryNonce, setPreviewRetryNonce] = useState(0);
  const [error, setError] = useState("");
  const [generationsUsed, setGenerationsUsed] = useState(0);
  const [activeBgGroup, setActiveBgGroup] = useState(0);

  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);

  const nameLen = options.name.length;
  const nameTooLong = nameLen > NAME_MAX;
  const canGenerate = options.name.trim().length >= 2 && !nameTooLong && generationsUsed < 2;
  const childName = options.name.trim();
  const currentBgLabel = ALL_BG_THEMES.find((t) => t.value === options.bgTheme)?.label ?? "your scene";
  const selectedColor = COLOR_SCHEMES.find((c) => c.value === options.colorScheme)?.label ?? "cover";
  const loadingStages = [
    {
      title: `Illustrating ${childName || "your child's"} character`,
      detail: "Refining the expression, outfit, and storybook pose.",
    },
    {
      title: `Composing the ${currentBgLabel.toLowerCase()} scene`,
      detail: "Layering the setting so it matches your chosen world.",
    },
    {
      title: `Balancing ${selectedColor.toLowerCase()} and gold`,
      detail: "Tuning the palette, title space, and premium cover finish.",
    },
    {
      title: "Adding keepsake details",
      detail: "Placing pencils, page details, highlights, and tiny finishing touches.",
    },
    {
      title: "Preparing your private preview",
      detail: "The artwork is nearly ready; we are checking the image file.",
    },
  ];
  const activeLoadingStage = loadingStages[loadingMsgIdx % loadingStages.length];
  const isCoverPreparing = generating || Boolean(generatedCoverUrl && !imageLoaded && !imageLoadError);

  useEffect(() => {
    if (!isCoverPreparing) return;

    const msgInterval = window.setInterval(() => {
      setLoadingMsgIdx((i) => i + 1);
    }, 3800);

    return () => window.clearInterval(msgInterval);
  }, [isCoverPreparing]);

  useEffect(() => {
    if (!generatedCoverUrl) {
      setImageLoaded(false);
      setReadyCoverSrc(null);
      setImageLoadError("");
      return;
    }

    let cancelled = false;
    let retryTimer: number | undefined;
    let attempt = 0;
    const maxAttempts = 18;

    setImageLoaded(false);
    setReadyCoverSrc(null);
    setImageLoadError("");

    const loadPreview = () => {
      attempt += 1;
      const probe = new window.Image();
      const previewSrc = attempt === 1 ? generatedCoverUrl : withPreviewRetryParam(generatedCoverUrl, attempt);

      probe.onload = () => {
        if (cancelled) return;
        setReadyCoverSrc(previewSrc);
        setImageLoaded(true);
        setImageLoadError("");
      };

      probe.onerror = () => {
        if (cancelled) return;

        if (attempt >= maxAttempts) {
          setImageLoadError("The cover was created, but the preview image is taking longer than expected to appear.");
          return;
        }

        retryTimer = window.setTimeout(loadPreview, Math.min(2500 + attempt * 350, 6000));
      };

      probe.src = previewSrc;
    };

    loadPreview();

    return () => {
      cancelled = true;
      if (retryTimer) window.clearTimeout(retryTimer);
    };
  }, [generatedCoverUrl, previewRetryNonce]);

  function handleNameChange(raw: string) {
    // Strip leading/trailing spaces on paste but allow mid-typing spaces
    const val = raw.replace(/[^a-zA-Z\s'-]/g, "").slice(0, NAME_MAX);
    onChange({ ...options, name: val });
  }

  async function handleGenerate() {
    if (!canGenerate || generating) return;
    setGenerating(true);
    setImageLoadError("");
    setError("");
    setLoadingMsgIdx(0);

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
          bgGroup: getBgGroupForTheme(options.bgTheme),
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
                : "border-gray-200 focus:ring-emerald-700"
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
                options.gender === "girl" ? "bg-emerald-800 text-white" : "bg-white text-gray-600 hover:bg-cream"
              }`}
            >
              👧 Girl
            </button>
            <button
              onClick={() => onChange({ ...options, gender: "boy" })}
              className={`px-6 text-sm font-semibold transition-all ${
                options.gender === "boy" ? "bg-emerald-800 text-white" : "bg-white text-gray-600 hover:bg-cream"
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
                    ? "border-emerald-800 scale-110 shadow-md"
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
                    ? "border-emerald-800 scale-110 shadow-md"
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
            <span className="text-xs text-emerald-800 font-medium">{currentBgLabel}</span>
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
                  ? "bg-emerald-800 text-white"
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
                  ? "border-emerald-800 bg-cream text-emerald-900"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gold-300 hover:bg-cream/70"
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
          className="w-full bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-base transition-all shadow-md flex items-center justify-center gap-2"
        >
          {generating ? (
            <>
              <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Creating {childName}&apos;s cover&hellip;
            </>
          ) : generatedCoverUrl ? (
            "Refresh Cover Preview"
          ) : (
            "Generate My Cover Preview"
          )}
        </button>

        {generating && (
          <p className="text-xs text-center text-gray-400">
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

      {/* Loading skeleton — visible while generating OR while the generated image URL becomes ready */}
      {isCoverPreparing && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Your cover preview</p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">Private preview</span>
          </div>
          <div className="relative max-w-xs mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-200/70 via-white to-emerald-100/80 blur-sm" />
            <div className="relative rounded-[1.6rem] overflow-hidden shadow-2xl border border-gold-200/80 aspect-[2/3] bg-[#fbf6ea]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(253,230,138,0.45),transparent_34%),linear-gradient(145deg,rgba(6,78,59,0.09),transparent_42%)]" />
              <div className="relative h-full p-5 flex flex-col">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-emerald-900/70">
                  <span>Learn with Coloring</span>
                  <span className="h-7 w-7 rounded-full border border-gold-300 bg-white/75 shadow-inner" />
                </div>
                <div className="mt-8 mx-auto h-32 w-24 rounded-t-full rounded-b-[1.4rem] bg-white/80 shadow-inner relative overflow-hidden border border-white">
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gold-100 to-transparent" />
                  <div className="absolute left-1/2 top-8 h-12 w-12 -translate-x-1/2 rounded-full bg-gold-100/90 shadow-sm animate-pulse" />
                  <div className="absolute left-1/2 bottom-6 h-12 w-16 -translate-x-1/2 rounded-t-full bg-emerald-100 animate-pulse" />
                  <div className="absolute left-5 bottom-5 h-7 w-2 rounded-full bg-gold-200 animate-pulse" />
                  <div className="absolute right-5 bottom-5 h-7 w-2 rounded-full bg-gold-200 animate-pulse" />
                </div>
                <div className="mt-auto space-y-3">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="h-2 rounded-full bg-white/70 overflow-hidden border border-white/70">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-700 via-gold-300 to-emerald-300 animate-pulse"
                        style={{ width: `${64 + row * 11}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-5 shadow-xl text-center w-full border border-gold-100">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald-900 p-1 shadow-lg">
                  <div className="h-full w-full rounded-full border border-gold-300 flex items-center justify-center text-gold-200 font-display text-xl">
                    L
                  </div>
                </div>
                <p className="font-display text-lg font-bold text-emerald-950 mb-1" aria-live="polite">
                  {activeLoadingStage.title}
                </p>
                <p className="text-xs text-gray-500 min-h-[32px] leading-relaxed">{activeLoadingStage.detail}</p>
                <div className="mt-4 h-2 rounded-full bg-cream overflow-hidden border border-gold-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-900 via-gold-400 to-emerald-600 transition-all duration-700"
                    style={{ width: `${28 + (loadingMsgIdx % loadingStages.length) * 15}%` }}
                  />
                </div>
                <div className="grid grid-cols-5 gap-1.5 mt-3">
                  {loadingStages.map((stage, i) => (
                    <div
                      key={stage.title}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === loadingMsgIdx % loadingStages.length ? "bg-emerald-800" : "bg-gold-100"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-3">
                  This usually takes 20–30 seconds. We will keep checking the preview.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {imageLoadError && generatedCoverUrl && (
        <div className="max-w-xs mx-auto rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-center shadow-sm">
          <p className="text-sm font-semibold text-amber-800">{imageLoadError}</p>
          <button
            onClick={() => setPreviewRetryNonce((n) => n + 1)}
            className="mt-3 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white hover:bg-amber-600 transition-colors"
          >
            Try loading preview again
          </button>
        </div>
      )}

      {/* Cover preview — shown only after the image file has loaded successfully */}
      {generatedCoverUrl && !generating && imageLoaded && readyCoverSrc && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Your cover preview</p>
            <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-700">Curated proof</span>
          </div>
          <div className="relative max-w-xs mx-auto">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-200/70 via-white to-emerald-100/80 blur-sm" />
            <div className="relative rounded-[1.6rem] overflow-hidden shadow-2xl border border-gold-200 bg-white">
              <Image
                src={readyCoverSrc}
                alt={`${options.name}'s coloring book cover`}
                width={400}
                height={600}
                className="w-full"
                unoptimized
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageLoaded(false);
                  setReadyCoverSrc(null);
                  setImageLoadError("The cover was created, but the preview image is taking longer than expected to appear.");
                }}
              />
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-center pointer-events-none">
                <span className="text-white/90 text-[10px] font-bold tracking-[0.14em] uppercase bg-emerald-950/55 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                  Preview proof
                </span>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-400">
            Happy with this? Choose your pages below.
          </p>
          <button
            onClick={onNext}
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-4 rounded-2xl text-base transition-all shadow-md"
          >
            Choose Pages →
          </button>
        </div>
      )}
    </div>
  );
}
