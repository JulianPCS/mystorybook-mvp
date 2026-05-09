import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");
const APP_DIR = join(__dirname, "../src/app");
const API_KEY = "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(PUBLIC_DIR, { recursive: true });

const ASSETS = [
  {
    name: "logo",
    outPath: join(PUBLIC_DIR, "logo.png"),
    size: "1792x1024",
    prompt: `Create a horizontal logo for a children's personalised colouring book brand called "Learn with Coloring". Design: clean wordmark with a friendly colourful pencil icon on the left. The pencil is chunky and cartoon-style with rainbow tip colours. Text "Learn with Coloring" in rounded bold friendly typography (Nunito style). Colour palette: teal (#14b8a6) and warm gold (#f59e0b) on a pure white background. The icon should be simple and clear. Style: modern flat design, children's brand, clean white background, high contrast. Wide horizontal lockup. No shadows, no gradients on text, crisp vector-style rendering. Pure white background only.`,
  },
  {
    name: "favicon",
    outPath: join(APP_DIR, "icon.png"),
    size: "1024x1024",
    prompt: `Create a square favicon icon for a children's colouring book brand "Learn with Coloring". Design: a single chunky cartoon pencil in teal (#14b8a6) with a gold (#f59e0b) star burst at the pencil tip, centered on a pure white background. Minimal, iconic, reads perfectly at small sizes. Clean flat illustration style. Square format. No text, pure icon only. White background.`,
  },
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function generateAndSave(asset) {
  console.log(`\nGenerating: ${asset.name}...`);
  const res = await fetch("https://koala.sh/api/image-generation/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: asset.prompt,
      model: "gpt-image-2",
      quality: "high",
      size: asset.size,
      numImages: 1,
      enhancePrompt: "off",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`  ✗ API error ${res.status}: ${text}`);
    return false;
  }

  const data = await res.json();
  const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url || data?.[0]?.url;
  if (!imageUrl) { console.error(`  ✗ No URL in response`); return false; }
  console.log(`  ✓ URL received: ${imageUrl.substring(0, 60)}...`);

  for (let attempt = 0; attempt < 9; attempt++) {
    await sleep(10000);
    try {
      const imgRes = await fetch(imageUrl);
      if (imgRes.ok && imgRes.headers.get("content-type")?.startsWith("image/")) {
        const buffer = await imgRes.arrayBuffer();
        writeFileSync(asset.outPath, Buffer.from(buffer));
        console.log(`  ✓ Saved: ${asset.outPath} (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        return true;
      }
      console.log(`  ⏳ Not ready (attempt ${attempt + 1}/9)`);
    } catch (e) {
      console.log(`  ⚠ Error attempt ${attempt + 1}: ${e.message}`);
    }
  }
  console.error(`  ✗ Failed to download ${asset.name}`);
  return false;
}

async function main() {
  console.log("🎨 Generating brand assets (logo + favicon)...");
  for (const asset of ASSETS) {
    await generateAndSave(asset);
    await sleep(3000);
  }
  console.log("\n✅ Brand assets done!");
}

main().catch(console.error);
