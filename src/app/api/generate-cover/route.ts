import { NextRequest, NextResponse } from "next/server";

export type CoverConfig = {
  name: string;
  gender: "boy" | "girl";
  skin: string;
  colorScheme: string;
  bgTheme: string;
  bgGroup: "Islamic" | "Everyday" | "Fantasy";
};

function characterDesc(gender: "boy" | "girl", skin: string, colorScheme: string) {
  const color = colorScheme.split(" ")[0];
  return gender === "boy"
    ? `a cute Muslim boy with large expressive kawaii-style eyes and a warm smile, wearing a white kufi cap and a ${color} traditional thobe, with ${skin} skin tone`
    : `a cute Muslim girl with large expressive kawaii-style eyes and a warm smile, wearing a ${color} hijab and a cream modest dress, with ${skin} skin tone`;
}

function universalCharacterDesc(gender: "boy" | "girl", skin: string, colorScheme: string, mood: "everyday" | "fantasy") {
  const color = colorScheme.split(" ")[0];
  const outfit =
    mood === "fantasy"
      ? gender === "boy"
        ? `a refined ${color} storybook coat with subtle gold trim, soft boots, and no religious clothing`
        : `a refined ${color} storybook dress or cloak with subtle gold trim, soft shoes, and no religious clothing`
      : gender === "boy"
        ? `a smart ${color} jumper, neat trousers, and comfortable shoes`
        : `a smart ${color} dress or cardigan, comfortable shoes, and simple hair accessories`;

  return gender === "boy"
    ? `a sweet young boy with large expressive storybook eyes, a warm smile, natural hair, ${skin} skin tone, wearing ${outfit}`
    : `a sweet young girl with large expressive storybook eyes, a warm smile, natural hair, ${skin} skin tone, wearing ${outfit}`;
}

function normalizeBgGroup(bgGroup: CoverConfig["bgGroup"], bgTheme: string): CoverConfig["bgGroup"] {
  const theme = bgTheme.toLowerCase();

  if (
    theme.includes("ice kingdom") ||
    theme.includes("enchanted castle") ||
    theme.includes("starship") ||
    theme.includes("underwater kingdom") ||
    theme.includes("magical glowing forest") ||
    theme.includes("jungle adventure") ||
    theme.includes("candy land") ||
    theme.includes("cloud kingdom")
  ) {
    return "Fantasy";
  }

  if (
    theme.includes("blooming garden") ||
    theme.includes("living room") ||
    theme.includes("sunny park") ||
    theme.includes("sandy beach") ||
    theme.includes("school classroom") ||
    theme.includes("magical library")
  ) {
    return "Everyday";
  }

  if (
    theme.includes("islamic") ||
    theme.includes("ramadan") ||
    theme.includes("mosque") ||
    theme.includes("minaret")
  ) {
    return "Islamic";
  }

  return bgGroup ?? "Everyday";
}

function buildIslamicPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = characterDesc(gender, skin, colorScheme);
  return `Create a luxurious Islamic children's coloring book cover in a rich ${colorScheme} palette, inspired by premium Ramadan storybooks and elegant mosque architecture. Magical, warm, educational, highly professional.

Main title in large ornate gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLORING BOOK"
Badge: "Fun & Easy Coloring Pages for Little Muslims"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Color • Grow"

Scene: ${char}, sitting on the floor coloring inside an open Islamic coloring book. Pages show mosque sketches, crescent moons, arabesque patterns. Background: ${bgTheme}. Grand Islamic arch framing the composition. Hanging crescent moon and stars. Two glowing ornate Ramadan lanterns on both sides. Rich geometric Islamic border patterns. Colored pencils and a small lantern near the child.

Style: Premium Pixar-inspired children's book art, soft painterly rendering, warm cinematic lighting, ${colorScheme} scheme, symmetrical, magical, high-end KDP publishing quality, ornamental borders, embossed gold typography.

Mood: Spiritual, cozy, educational, wonder-filled.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: photorealistic, blurry text, distorted anatomy, extra fingers, watermark, asymmetrical layout, random Arabic text, poor typography.`;
}

function buildEverydayPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = universalCharacterDesc(gender, skin, colorScheme, "everyday");
  return `Create a premium personalized children's coloring book cover in a ${colorScheme} palette. Elegant, joyful, polished, giftable, and suitable for a high-quality US family brand.

Main title in bold friendly gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLORING BOOK"
Badge: "Fun & Easy Coloring Pages"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Color • Grow"

Scene: ${char}, happily coloring inside an open book filled with simple illustrations. Background setting: ${bgTheme}. The environment feels cozy, bright, polished and inviting. Natural light fills the scene. Colored pencils, crayons, and open books sit neatly near the child. Use a clean illustrated border themed only to the selected everyday setting.

Style: Premium storybook illustration, soft painterly rendering, bright warm lighting, ${colorScheme} color scheme, balanced symmetrical composition, high-end publishing quality, clean readable typography with a tasteful gold emboss effect.

Mood: Joyful, cozy, educational, warm, approachable.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: Islamic architecture, mosque, minaret, dome skyline, mihrab arch, arabesque patterns, Arabic calligraphy, Arabic text, hijab, kufi, thobe, abaya, Ramadan lanterns, crescent moon motifs, religious symbols, photorealistic, blurry text, distorted anatomy, watermark, random text, poor typography, dark or scary elements.`;
}

function buildFantasyPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = universalCharacterDesc(gender, skin, colorScheme, "fantasy");
  return `Create a luxurious fantasy children's coloring book cover in a ${colorScheme} palette. Magical, cinematic, polished, giftable, and suitable for a high-quality US family brand.

Main title in large premium fairytale gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLORING BOOK"
Badge: "Fun & Easy Coloring Pages"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Color • Grow"

Scene: ${char}, wide-eyed with wonder, holding an open coloring book filled with fantastical illustrations. Background setting: ${bgTheme}. The cover must visually commit to this selected fantasy setting. The scene feels magical, grand, premium and awe-inspiring. Glowing light, soft sparkles, and magical particles fill the air. Use a refined decorative border themed only to the selected fantasy setting.

Style: Premium storybook art, soft painterly rendering, dramatic cinematic lighting with glowing magical effects, ${colorScheme} color scheme, symmetrical composition, high-end publishing quality, tasteful embossed gold typography.

Mood: Wonder-filled, adventurous, magical, exciting, imaginative.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: Islamic architecture, mosque, minaret, dome skyline, mihrab arch, arabesque patterns, Arabic calligraphy, Arabic text, hijab, kufi, thobe, abaya, Ramadan lanterns, crescent moon motifs, religious symbols, photorealistic, blurry text, distorted anatomy, extra fingers, watermark, poor typography, horror elements, dark themes.`;
}

function buildPrompt(config: CoverConfig): string {
  if (config.bgGroup === "Everyday") return buildEverydayPrompt(config);
  if (config.bgGroup === "Fantasy") return buildFantasyPrompt(config);
  return buildIslamicPrompt(config);
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.KOALA_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Image generation not configured" }, { status: 500 });
  }

  try {
    const body: CoverConfig = await req.json();
    const { name, gender, skin, colorScheme, bgTheme, bgGroup } = body;

    if (!name || !gender) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resolvedBgGroup = normalizeBgGroup(bgGroup, bgTheme);
    const prompt = buildPrompt({ name, gender, skin, colorScheme, bgTheme, bgGroup: resolvedBgGroup });

    const koalaRes = await fetch("https://koala.sh/api/image-generation/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        model: "gpt-image-2",
        quality: "medium",   // 8 credits for preview; use "high" (20 credits) for final print version
        size: "1024x1536",
        numImages: 1,
        style: "none",       // disable style preset — our prompt is already fully detailed
        enhancePrompt: "off",
      }),
    });

    if (!koalaRes.ok) {
      const text = await koalaRes.text();
      console.error("Koala API error:", koalaRes.status, text);
      return NextResponse.json({ error: "Image generation failed" }, { status: 502 });
    }

    const data = await koalaRes.json();
    const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url || data?.[0]?.url;

    if (!imageUrl) {
      console.error("No URL in Koala response:", JSON.stringify(data).slice(0, 300));
      return NextResponse.json({ error: "No image returned" }, { status: 502 });
    }

    return NextResponse.json({ url: imageUrl });
  } catch (err) {
    console.error("Generate cover error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
