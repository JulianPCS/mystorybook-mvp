/**
 * Generates black & white coloring page illustrations for all pages in the catalog.
 * Run once: node scripts/generate-pages.mjs
 * Output: public/pages/[id].png
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/pages");
const API_KEY = process.env.KOALA_API_KEY || "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(OUT_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Coloring page catalog ──────────────────────────────────────────────────
// Each prompt describes ONLY the scene subject.
// The style wrapper (line art, no colour, etc.) is added automatically below.

const PAGES = [
  // Animals
  {
    id: "animals-bunny",
    subject: "a cute fluffy bunny rabbit sitting in a sunny meadow surrounded by daisies and butterflies",
  },
  {
    id: "animals-cat",
    subject: "an adorable kitten playing with a ball of yarn, sitting among flowers and leaves",
  },
  {
    id: "animals-dinosaur",
    subject: "a friendly baby T-Rex dinosaur standing in a prehistoric jungle with large ferns and palm trees",
  },
  {
    id: "animals-elephant",
    subject: "a happy baby elephant splashing in a river, with tropical flowers and birds nearby",
  },

  // Adventure
  {
    id: "adventure-pirate",
    subject: "a pirate ship sailing on ocean waves, with a treasure chest on deck, seagulls flying, and an island in the distance",
  },
  {
    id: "adventure-knight",
    subject: "a brave knight in shining armour standing proudly in front of a grand medieval castle",
  },
  {
    id: "adventure-explorer",
    subject: "a young explorer in a pith helmet discovering ancient jungle ruins covered in vines, with exotic birds perched on the stones",
  },
  {
    id: "adventure-rocket",
    subject: "a cute cartoon rocket ship blasting through outer space, with planets, stars, and a smiling moon around it",
  },

  // Fantasy
  {
    id: "fantasy-unicorn",
    subject: "a magical unicorn with a flowing mane standing on clouds, with a rainbow, stars, and sparkling flowers around it",
  },
  {
    id: "fantasy-dragon",
    subject: "a cute baby dragon sitting on a pile of treasure, surrounded by gems, coins, and a glowing cave",
  },
  {
    id: "fantasy-mermaid",
    subject: "a mermaid sitting on a rock in the ocean, surrounded by friendly fish, coral, sea stars, and gentle waves",
  },
  {
    id: "fantasy-castle",
    subject: "an enchanted fairy tale castle on a hilltop with tall towers, flags, a drawbridge, and a magical garden with flowers",
  },

  // Nature
  {
    id: "nature-flowers",
    subject: "a beautiful garden full of roses, sunflowers, daisies, and tulips with butterflies and bees flying around",
  },
  {
    id: "nature-rainbow",
    subject: "a big rainbow arching over rolling green hills, with fluffy clouds, a smiling sun, and animals playing below",
  },
  {
    id: "nature-ocean",
    subject: "a vibrant underwater scene with colourful tropical fish, coral reef, a seahorse, a friendly octopus, and treasure chest",
  },
  {
    id: "nature-forest",
    subject: "a magical woodland forest with tall trees, friendly woodland animals — foxes, owls, rabbits — mushrooms, and twinkling fairy lights",
  },
];

// Wrap the subject in a consistent coloring book style prompt
function buildPrompt(subject) {
  return `Children's colouring book page illustration: ${subject}. \
Clean black and white line art only. Thick bold outlines. No shading, no grey tones, no colour fills anywhere. \
Pure white background. Simple child-friendly design with large clear shapes that are easy to colour in. \
Cute and cheerful style. Suitable for ages 4 to 8. Professional colouring book quality. Full page composition. \
Negative prompt: colour, shading, grey tones, gradients, shadows, photorealistic, watermark, text, signatures, complex cross-hatching, adult themes.`;
}

async function generateImage(page, index) {
  console.log(`\n[${index + 1}/${PAGES.length}] Generating: ${page.id}...`);

  const res = await fetch("https://koala.sh/api/image-generation/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: buildPrompt(page.subject),
      model: "gpt-image-2",
      quality: "medium",   // 8 credits — good quality line art
      size: "832x1216",    // portrait, close to A4 book page ratio
      numImages: 1,
      style: "none",
      enhancePrompt: "off",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`  ✗ API error ${res.status}: ${text}`);
    return null;
  }

  const data = await res.json();
  const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url || data?.[0]?.url;

  if (!imageUrl) {
    console.error(`  ✗ No URL in response:`, JSON.stringify(data).slice(0, 200));
    return null;
  }

  console.log(`  → URL received`);
  return imageUrl;
}

async function downloadImage(url, id) {
  console.log(`  Downloading ${id}...`);

  for (let attempt = 0; attempt < 9; attempt++) {
    await sleep(10000);
    try {
      const res = await fetch(url);
      if (res.ok && res.headers.get("content-type")?.startsWith("image/")) {
        const buffer = await res.arrayBuffer();
        const outPath = join(OUT_DIR, `${id}.png`);
        writeFileSync(outPath, Buffer.from(buffer));
        console.log(`  ✓ Saved: public/pages/${id}.png (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        return true;
      } else {
        console.log(`  ⏳ Not ready yet (attempt ${attempt + 1}/9, status: ${res.status})`);
      }
    } catch (e) {
      console.log(`  ⚠ Fetch error attempt ${attempt + 1}: ${e.message}`);
    }
  }

  console.error(`  ✗ Failed to download ${id} after 9 attempts`);
  return false;
}

async function main() {
  // Allow running a subset: node generate-pages.mjs animals  (filters by id prefix)
  const filter = process.argv[2];
  const pages = filter ? PAGES.filter((p) => p.id.startsWith(filter)) : PAGES;

  console.log(`🎨 Generating ${pages.length} coloring page illustration${pages.length !== 1 ? "s" : ""}...\n`);
  if (filter) console.log(`   Filter: "${filter}"\n`);

  const results = {};
  let succeeded = 0;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const url = await generateImage(page, i);

    if (!url) {
      results[page.id] = { error: true };
      await sleep(3000);
      continue;
    }

    results[page.id] = { url };
    const ok = await downloadImage(url, page.id);
    if (ok) succeeded++;
    else results[page.id].downloadFailed = true;

    if (i < pages.length - 1) {
      console.log("  ⏸ Pausing 3s...");
      await sleep(3000);
    }
  }

  writeFileSync(join(OUT_DIR, "manifest.json"), JSON.stringify(results, null, 2));

  console.log(`\n✅ Done! ${succeeded}/${pages.length} pages generated.`);
  console.log(`📁 Saved to public/pages/`);
  console.log(`\nTip: run with a category filter to regenerate just one group:`);
  console.log(`  node scripts/generate-pages.mjs animals`);
  console.log(`  node scripts/generate-pages.mjs fantasy`);
}

main().catch(console.error);
