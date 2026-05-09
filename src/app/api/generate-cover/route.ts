import { NextRequest, NextResponse } from "next/server";

export type CoverConfig = {
  name: string;
  gender: "boy" | "girl";
  skin: string;
  colorScheme: string;    // e.g. "midnight blue and gold"
  bgTheme: string;        // e.g. "illuminated mosque cityscape at night"
};

function buildPrompt(config: CoverConfig): string {
  const { name, gender, skin, colorScheme, bgTheme } = config;
  const title = `${name.toUpperCase()}'S`;

  const characterDesc =
    gender === "boy"
      ? `A cute Muslim boy with large expressive kawaii-style eyes and a warm smile, wearing a white kufi cap and a ${colorScheme.split(" ")[0]} traditional thobe, with ${skin} skin tone`
      : `A cute Muslim girl with large expressive kawaii-style eyes and a warm smile, wearing a ${colorScheme.split(" ")[0]} hijab and a cream modest dress, with ${skin} skin tone`;

  return `Create a luxurious Islamic children's coloring book cover in a rich ${colorScheme} palette, inspired by premium Ramadan storybooks and elegant mosque architecture. The cover should feel magical, warm, educational, and highly professional for Amazon KDP publishing.

Main title in large ornate gold typography: "${title}"
Subtitle beneath: "FIRST COLOURING BOOK"
Additional small text badge: "Fun & Easy Colouring Pages for Little Muslims"
Age badge: "Ages 4–6 Years"
Bottom tagline: "Learn • Colour • Grow"

Scene composition: ${characterDesc}, sitting on the floor coloring inside an open Islamic coloring book. Open coloring pages contain mosque sketches, crescent moons, stars, arabesque patterns, and Islamic motifs. Background features ${bgTheme} with glowing domes, minarets, arches, and palace-like architecture. Grand Islamic arch framing the entire composition. Hanging crescent moon and stars from the top center. Two glowing ornate Ramadan lanterns hanging symmetrically on both sides. Rich geometric Islamic patterns decorating borders and floor. Colored pencils and small lantern props near the child.

Visual style: Premium digital illustration, Pixar-inspired children's book art, soft painterly rendering, detailed Islamic architecture, warm cinematic lighting, ${colorScheme} color scheme, symmetrical composition, magical atmosphere, high-end publishing quality, highly detailed ornamental borders, elegant embossed-looking typography.

Typography style: Bold vintage serif title, metallic gold embossed effect, strong hierarchy and centered composition, professional bookstore-quality layout.

Mood: Spiritual, cozy, educational, wonder-filled, inspirational for Muslim children.

Technical: Portrait orientation 8.5 x 11 inch coloring book cover, ultra high resolution, print-ready, crisp readable typography.

Negative prompt: photorealistic humans, blurry text, distorted anatomy, extra fingers, messy composition, low detail, flat lighting, modern cartoon simplicity, horror elements, washed-out colors, random Arabic text, watermark, cropped elements, poor typography, asymmetrical layout.`;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.KOALA_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Image generation not configured" }, { status: 500 });
  }

  try {
    const body: CoverConfig = await req.json();
    const { name, gender, skin, colorScheme, bgTheme } = body;

    if (!name || !gender) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const prompt = buildPrompt({ name, gender, skin, colorScheme, bgTheme });

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
