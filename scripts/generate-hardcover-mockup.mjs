import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/mockups");
const API_KEY = "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(OUT_DIR, { recursive: true });

const PROMPT = `Create an ultra-photorealistic 3D hardcover book product mockup for a premium children's colouring book.

The book is shown floating at a gentle 3/4 angle — front cover fully visible, left spine partially visible, slight perspective tilt. The book is A4 portrait format hardcover.

FRONT COVER (faithfully reproduce this design):
- Rich deep pink and blush rose background with warm golden accents
- Central scene: an adorable Muslim girl with a soft pink hijab, large expressive kawaii eyes, rosy cheeks, gentle smile — sitting at a table colouring in an open book with pencils scattered around
- Top title text: "FATIMA" in large ornate embossed gold serif typography
- Below title: "COLOURING BOOK" in smaller elegant gold lettering
- Oval badge reading: "Fun & Easy Colouring Pages for Little Muslims"
- Age badge: "Ages 4–6 Years"
- Tagline: "Learn · Colour · Grow"
- Decorative Islamic border: cherry blossoms, crescent moons, gold stars, pink roses, delicate floral filigree
- Soft ornate gold frame around entire cover
- Two symmetrical pink lanterns hanging on either side

BOOK CONSTRUCTION (3D realism):
- Glossy soft-touch laminate front cover with subtle light reflection
- Visible spine (left side): thin, pink with "Fatima's Colouring Book" in vertical gold text
- Right edge: realistic paper thickness — clean white page stack, approximately 40 pages, slight fan/spread
- Subtle embossed gold foil effect on the title
- The book floats at a very gentle 10–15 degree tilt

BACKGROUND: Fully transparent — no background at all. The book floats on a completely transparent/empty background with only a very subtle soft drop shadow beneath the book.

Style: Ultra-high-end children's book product photography, luxury publisher quality, 3D render with photorealistic materials. No hands, no people — book only as a product shot. Transparent background PNG.`;

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function generate() {
  console.log("📚 Generating Fatima hardcover mockup with transparent background...\n");

  const res = await fetch("https://koala.sh/api/image-generation/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: PROMPT,
      model: "gpt-image-2",
      quality: "high",
      size: "1024x1536",
      numImages: 1,
      enhancePrompt: "off",
      background: "transparent",
      output_format: "png",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`  ✗ API error ${res.status}: ${text}`);
    process.exit(1);
  }

  const data = await res.json();
  const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url || data?.[0]?.url;
  if (!imageUrl) { console.error("  ✗ No URL in response:", JSON.stringify(data)); process.exit(1); }
  console.log(`  ✓ URL received: ${imageUrl.substring(0, 70)}...`);

  console.log("  Downloading...");
  for (let attempt = 0; attempt < 9; attempt++) {
    await sleep(10000);
    try {
      const imgRes = await fetch(imageUrl);
      const contentType = imgRes.headers.get("content-type") ?? "";
      if (imgRes.ok && contentType.startsWith("image/")) {
        const buffer = await imgRes.arrayBuffer();
        // Save as .png regardless of what the server returns
        const outPath = join(OUT_DIR, "fatima-hardcover-transparent.png");
        writeFileSync(outPath, Buffer.from(buffer));
        console.log(`\n  ✅ Saved: public/mockups/fatima-hardcover-transparent.png (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        console.log(`  Content-type from server: ${contentType}`);
        return;
      }
      console.log(`  ⏳ Not ready yet (attempt ${attempt + 1}/9)...`);
    } catch (e) {
      console.log(`  ⚠ Attempt ${attempt + 1} error: ${e.message}`);
    }
  }
  console.error("  ✗ Failed to download");
}

generate().catch(console.error);
