"use client";

type Props = {
  gender: "girl" | "boy";
  skin: string;
  hair: string;
  hairStyle: number; // 0 = long/curly, 1 = straight, 2 = short
  clothing: string;
  background: string;
};

export default function AvatarSVG({ gender, skin, hair, hairStyle, clothing, background }: Props) {
  const isGirl = gender === "girl";

  // Hair paths per style — girl and boy variants
  const hairPaths = {
    girl: [
      // Style 0: long wavy
      <>
        {/* Back hair */}
        <ellipse cx="100" cy="72" rx="46" ry="52" fill={hair} />
        <rect x="54" y="90" width="16" height="60" rx="8" fill={hair} />
        <rect x="130" y="90" width="16" height="60" rx="8" fill={hair} />
        {/* Top hair */}
        <ellipse cx="100" cy="60" rx="42" ry="28" fill={hair} />
        <ellipse cx="100" cy="48" rx="30" ry="14" fill={hair} />
      </>,
      // Style 1: straight medium
      <>
        <ellipse cx="100" cy="68" rx="46" ry="44" fill={hair} />
        <rect x="54" y="80" width="16" height="44" rx="8" fill={hair} />
        <rect x="130" y="80" width="16" height="44" rx="8" fill={hair} />
        <ellipse cx="100" cy="54" rx="42" ry="24" fill={hair} />
      </>,
      // Style 2: bun / updo
      <>
        <ellipse cx="100" cy="58" rx="42" ry="24" fill={hair} />
        <circle cx="100" cy="36" r="16" fill={hair} />
        <circle cx="86" cy="30" r="8" fill={hair} />
        <circle cx="114" cy="30" r="8" fill={hair} />
      </>,
    ],
    boy: [
      // Style 0: messy / floppy
      <>
        <ellipse cx="100" cy="58" rx="46" ry="26" fill={hair} />
        <ellipse cx="76" cy="50" rx="18" ry="14" fill={hair} />
        <ellipse cx="124" cy="50" rx="18" ry="14" fill={hair} />
        <ellipse cx="100" cy="46" rx="30" ry="12" fill={hair} />
      </>,
      // Style 1: neat parted
      <>
        <ellipse cx="100" cy="58" rx="44" ry="22" fill={hair} />
        <ellipse cx="100" cy="46" rx="36" ry="14" fill={hair} />
      </>,
      // Style 2: curly
      <>
        <ellipse cx="100" cy="56" rx="46" ry="26" fill={hair} />
        <circle cx="74" cy="50" r="14" fill={hair} />
        <circle cx="100" cy="44" r="14" fill={hair} />
        <circle cx="126" cy="50" r="14" fill={hair} />
      </>,
    ],
  };

  const selectedHair = isGirl ? hairPaths.girl[hairStyle] : hairPaths.boy[hairStyle];

  return (
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ display: "block" }}
    >
      {/* Background circle */}
      <circle cx="100" cy="110" r="96" fill={background} />

      {/* Body / clothing */}
      <ellipse cx="100" cy="190" rx="52" ry="38" fill={clothing} />
      <rect x="52" y="160" width="96" height="50" rx="16" fill={clothing} />

      {/* Neck */}
      <rect x="88" y="138" width="24" height="26" rx="8" fill={skin} />

      {/* Hair back layer */}
      {selectedHair}

      {/* Face */}
      <ellipse cx="100" cy="102" rx="40" ry="44" fill={skin} />

      {/* Ears */}
      <ellipse cx="60" cy="104" rx="9" ry="11" fill={skin} />
      <ellipse cx="140" cy="104" rx="9" ry="11" fill={skin} />

      {/* Eyes */}
      <ellipse cx="86" cy="98" rx="9" ry="10" fill="white" />
      <ellipse cx="114" cy="98" rx="9" ry="10" fill="white" />
      <circle cx="88" cy="100" r="5.5" fill="#2d2d2d" />
      <circle cx="116" cy="100" r="5.5" fill="#2d2d2d" />
      {/* Eye shine */}
      <circle cx="90" cy="97" r="2" fill="white" />
      <circle cx="118" cy="97" r="2" fill="white" />

      {/* Eyebrows */}
      <path d="M78 86 Q86 82 94 86" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M106 86 Q114 82 122 86" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx="100" cy="112" rx="5" ry="3.5" fill={skin} />
      <circle cx="97" cy="113" r="2.5" fill="rgba(0,0,0,0.10)" />
      <circle cx="103" cy="113" r="2.5" fill="rgba(0,0,0,0.10)" />

      {/* Smile */}
      <path d="M88 122 Q100 132 112 122" stroke="#c0726a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <ellipse cx="76" cy="118" rx="10" ry="6" fill="rgba(255,160,130,0.35)" />
      <ellipse cx="124" cy="118" rx="10" ry="6" fill="rgba(255,160,130,0.35)" />

      {/* Girl extras: small bow or eyelashes */}
      {isGirl && (
        <>
          <path d="M80 88 Q86 84 92 88" stroke="#2d2d2d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M108 88 Q114 84 120 88" stroke="#2d2d2d" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* Bow on top */}
          <path d="M88 34 Q100 26 112 34 Q100 42 88 34Z" fill={hair} opacity="0.9" />
        </>
      )}

      {/* Collar detail on shirt */}
      <path
        d="M80 160 Q100 172 120 160"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
