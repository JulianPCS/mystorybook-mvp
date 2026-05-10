"use client";

import ColorSwatch from "./ColorSwatch";
import AvatarSVG from "./AvatarSVG";

export type AvatarConfig = {
  skin: string;
  hair: string;
  hairStyle: number;
  clothing: string;
};

type Props = {
  gender: "girl" | "boy";
  avatar: AvatarConfig;
  background: string;
  onChange: (avatar: AvatarConfig) => void;
  onBackgroundChange: (bg: string) => void;
};

const SKIN_TONES = [
  { value: "#FDDBB4", label: "Light" },
  { value: "#F5C89A", label: "Fair" },
  { value: "#E8A87C", label: "Medium" },
  { value: "#C87941", label: "Tan" },
  { value: "#A0522D", label: "Brown" },
  { value: "#6B3A2A", label: "Deep" },
];

const HAIR_COLORS = [
  { value: "#F5D78E", label: "Blonde" },
  { value: "#C97C3A", label: "Auburn" },
  { value: "#8B4513", label: "Brown" },
  { value: "#3D2B1F", label: "Dark Brown" },
  { value: "#111111", label: "Black" },
  { value: "#C0C0C0", label: "Silver" },
  { value: "#9B59B6", label: "Purple" },
  { value: "#E91E8C", label: "Pink" },
];

const CLOTHING_COLORS = [
  { value: "#5B9BD5", label: "Blue" },
  { value: "#E74C3C", label: "Red" },
  { value: "#2ECC71", label: "Green" },
  { value: "#F39C12", label: "Orange" },
  { value: "#9B59B6", label: "Purple" },
  { value: "#E91E8C", label: "Pink" },
];

const BACKGROUNDS = [
  { value: "#FFF3E0", label: "Peach" },
  { value: "#E8F5E9", label: "Mint" },
  { value: "#E3F2FD", label: "Sky" },
  { value: "#FCE4EC", label: "Rose" },
  { value: "#F3E5F5", label: "Lavender" },
];

const HAIR_STYLE_LABELS_GIRL = ["Wavy", "Straight", "Updo"];
const HAIR_STYLE_LABELS_BOY = ["Floppy", "Neat", "Curly"];

export default function AvatarBuilder({ gender, avatar, background, onChange, onBackgroundChange }: Props) {
  const hairStyleLabels = gender === "girl" ? HAIR_STYLE_LABELS_GIRL : HAIR_STYLE_LABELS_BOY;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Live preview */}
      <div className="flex-shrink-0 w-52 mx-auto lg:mx-0">
        <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <AvatarSVG
            gender={gender}
            skin={avatar.skin}
            hair={avatar.hair}
            hairStyle={avatar.hairStyle}
            clothing={avatar.clothing}
            background={background}
          />
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">Live preview</p>
      </div>

      {/* Pickers */}
      <div className="flex-1 space-y-5">
        <ColorSwatch
          label="Skin Tone"
          swatches={SKIN_TONES}
          selected={avatar.skin}
          onChange={(v) => onChange({ ...avatar, skin: v })}
        />
        <ColorSwatch
          label="Hair Color"
          swatches={HAIR_COLORS}
          selected={avatar.hair}
          onChange={(v) => onChange({ ...avatar, hair: v })}
        />

        {/* Hair style */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700">Hair Style</p>
          <div className="flex gap-2">
            {hairStyleLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => onChange({ ...avatar, hairStyle: i })}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  avatar.hairStyle === i
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <ColorSwatch
          label="Clothing Color"
          swatches={CLOTHING_COLORS}
          selected={avatar.clothing}
          onChange={(v) => onChange({ ...avatar, clothing: v })}
        />
        <ColorSwatch
          label="Background"
          swatches={BACKGROUNDS}
          selected={background}
          onChange={onBackgroundChange}
        />
      </div>
    </div>
  );
}
