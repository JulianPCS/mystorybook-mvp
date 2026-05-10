"use client";

import { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_GIRL_PAGES, DEFAULT_BOY_PAGES } from "@/lib/coloringPages";
import StepCover, { CoverOptions } from "./StepCover";
import StepPages from "./StepPages";
import StepReview from "./StepReview";

type BookConfig = {
  cover: CoverOptions;
  pages: string[];
  generatedCoverUrl: string | null;
};

type Action =
  | { type: "SET_COVER"; cover: CoverOptions }
  | { type: "SET_COVER_URL"; url: string }
  | { type: "SET_PAGE"; slotIndex: number; pageId: string };

function reducer(state: BookConfig, action: Action): BookConfig {
  switch (action.type) {
    case "SET_COVER": {
      const genderChanged = action.cover.gender !== state.cover.gender;
      return {
        ...state,
        cover: action.cover,
        pages: genderChanged
          ? action.cover.gender === "girl"
            ? [...DEFAULT_GIRL_PAGES]
            : [...DEFAULT_BOY_PAGES]
          : state.pages,
        // Clear generated cover if name or gender changes
        generatedCoverUrl:
          action.cover.name !== state.cover.name || genderChanged
            ? null
            : state.generatedCoverUrl,
      };
    }
    case "SET_COVER_URL":
      return { ...state, generatedCoverUrl: action.url };
    case "SET_PAGE": {
      const pages = [...state.pages];
      pages[action.slotIndex] = action.pageId;
      return { ...state, pages };
    }
    default:
      return state;
  }
}

const INITIAL_STATE: BookConfig = {
  cover: {
    name: "",
    gender: "girl",
    skin: "warm brown",
    colorScheme: "midnight blue and gold",
    bgTheme: "an illuminated Islamic cityscape at night with glowing golden domes, tall minarets, and a starry sky",
  },
  pages: [...DEFAULT_GIRL_PAGES],
  generatedCoverUrl: null,
};

const STEPS = [
  { id: "cover", label: "Cover" },
  { id: "pages", label: "Pages" },
  { id: "review", label: "Review" },
];

export default function CreateBookWizard() {
  const [config, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [step, setStep] = useState(0);
  const router = useRouter();

  function canAdvance() {
    if (step === 0) return !!config.generatedCoverUrl;
    return true;
  }

  async function handleSubmit(email: string) {
    const res = await fetch("/api/custom-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        child_name: config.cover.name.trim(),
        parent_email: email,
        gender: config.cover.gender,
        skin: config.cover.skin,
        color_scheme: config.cover.colorScheme,
        bg_theme: config.cover.bgTheme,
        cover_image_url: config.generatedCoverUrl,
        page_ids: config.pages,
      }),
    });
    if (!res.ok) throw new Error("Failed to submit");
    router.push(`/create/confirmed?name=${encodeURIComponent(config.cover.name)}`);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${i <= step ? "text-purple-600" : "text-gray-300"}`}>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                    i < step
                      ? "bg-purple-500 border-purple-500 text-white"
                      : i === step
                      ? "border-purple-500 text-purple-600 bg-white"
                      : "border-gray-200 text-gray-300 bg-white"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span className="text-xs font-semibold hidden sm:block">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all ${i < step ? "bg-purple-400" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-800">
          {step === 0 && "Design your cover"}
          {step === 1 && "Choose your pages"}
          {step === 2 && "Review your book"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {step === 0 && "Pick your child's features and generate a unique AI cover."}
          {step === 1 && "We've suggested a starter set. Swap any page you'd like to change."}
          {step === 2 && "Happy with everything? Reserve your personalised book below."}
        </p>
      </div>

      {/* Step content */}
      {step === 0 && (
        <StepCover
          options={config.cover}
          generatedCoverUrl={config.generatedCoverUrl}
          onChange={(cover) => dispatch({ type: "SET_COVER", cover })}
          onCoverGenerated={(url) => dispatch({ type: "SET_COVER_URL", url })}
          onNext={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <StepPages
          pages={config.pages}
          onPageChange={(slotIndex, pageId) => dispatch({ type: "SET_PAGE", slotIndex, pageId })}
        />
      )}
      {step === 2 && (
        <StepReview
          name={config.cover.name}
          generatedCoverUrl={config.generatedCoverUrl}
          pages={config.pages}
          onSubmit={handleSubmit}
        />
      )}

      {/* Navigation — only shown on step 1 (step 0 has its own button inside StepCover) */}
      {step === 1 && (
        <div className="mt-8 flex gap-3 justify-between">
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep((s) => s + 1)}
            className="flex-1 sm:flex-none sm:px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-sm"
          >
            Review Book →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8">
          <button
            onClick={() => setStep(1)}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Back to pages
          </button>
        </div>
      )}
    </div>
  );
}
