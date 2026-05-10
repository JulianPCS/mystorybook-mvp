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

function buildIslamicPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = characterDesc(gender, skin, colorScheme);
  return `Create a luxurious Islamic children's coloring book cover in a rich ${colorScheme} palette, inspired by premium Ramadan storybooks and elegant mosque architecture. Magical, warm, educational, highly professional.

Main title in large ornate gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLOURING BOOK"
Badge: "Fun & Easy Colouring Pages for Little Muslims"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Colour • Grow"

Scene: ${char}, sitting on the floor colouring inside an open Islamic coloring book. Pages show mosque sketches, crescent moons, arabesque patterns. Background: ${bgTheme}. Grand Islamic arch framing the composition. Hanging crescent moon and stars. Two glowing ornate Ramadan lanterns on both sides. Rich geometric Islamic border patterns. Coloured pencils and a small lantern near the child.

Style: Premium Pixar-inspired children's book art, soft painterly rendering, warm cinematic lighting, ${colorScheme} scheme, symmetrical, magical, high-end KDP publishing quality, ornamental borders, embossed gold typography.

Mood: Spiritual, cosy, educational, wonder-filled.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: photorealistic, blurry text, distorted anatomy, extra fingers, watermark, asymmetrical layout, random Arabic text, poor typography.`;
}

function buildEverydayPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = characterDesc(gender, skin, colorScheme);
  return `Create a charming, warm children's coloring book cover in a ${colorScheme} palette. Professional, joyful, educational — suitable for Amazon KDP publishing.

Main title in bold friendly gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLOURING BOOK"
Badge: "Fun & Easy Colouring Pages"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Colour • Grow"

Scene: ${char}, happily colouring inside an open book filled with simple illustrations. Background setting: ${bgTheme}. The environment feels cosy, cheerful and inviting. Bright natural lighting fills the scene. Coloured pencils, crayons, and open books as props near the child. Decorative illustrated border framing the cover.

Style: Premium Pixar-inspired children's book illustration, soft painterly rendering, bright warm lighting, ${colorScheme} colour scheme, symmetrical composition, high-end publishing quality, clean readable typography with gold emboss effect.

Mood: Joyful, cosy, educational, warm, approachable.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: Islamic architecture, minarets, mosques, Arabic calligraphy, photorealistic, blurry text, distorted anatomy, watermark, random text, poor typography, dark or scary elements.`;
}

function buildFantasyPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const char = characterDesc(gender, skin, colorScheme);
  return `Create a magical, enchanting children's coloring book cover in a ${colorScheme} palette. Whimsical, adventurous, and highly professional for Amazon KDP publishing.

Main title in large ornate gold typography: "${name.toUpperCase()}'S"
Subtitle: "FIRST COLOURING BOOK"
Badge: "Fun & Easy Colouring Pages"
Age badge: "Ages 4–6 Years"
Tagline: "Learn • Colour • Grow"

Scene: ${char}, wide-eyed with wonder, holding an open colouring book filled with fantastical illustrations. Background setting: ${bgTheme}. The scene feels truly magical, epic and awe-inspiring. Glowing light, sparkles, and magical particles fill the air. Illustrated decorative border framing the cover, themed to match the setting.

Style: Premium Pixar-inspired children's book art, soft painterly rendering, dramatic cinematic lighting with glowing magical effects, ${colorScheme} colour scheme, symmetrical composition, high-end KDP quality, ornate embossed gold typography.

Mood: Wonder-filled, adventurous, magical, exciting, imaginative.

Technical: Portrait 8.5×11 inch, ultra high resolution, print-ready.

Negative: Islamic architecture, minarets, photorealistic, blurry text, distorted anatomy, extra fingers, watermark, poor typography, horror elements, dark themes.`;
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

    const prompt = buildPrompt({ name, gender, skin, colorScheme, bgTheme, bgGroup: bgGroup ?? "Islamic" });

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
