"use client";

type Swatch = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  swatches: Swatch[];
  selected: string;
  onChange: (value: string) => void;
};

export default function ColorSwatch({ label, swatches, selected, onChange }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-gray-700">{label}</p>
      <div className="flex flex-wrap gap-2">
        {swatches.map((s) => (
          <button
            key={s.value}
            title={s.label}
            onClick={() => onChange(s.value)}
            className={`w-9 h-9 rounded-full border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-400 ${
              selected === s.value
                ? "border-purple-500 scale-110 shadow-md"
                : "border-transparent hover:scale-105 hover:border-gray-300"
            }`}
            style={{ backgroundColor: s.value }}
          />
        ))}
      </div>
    </div>
  );
}
