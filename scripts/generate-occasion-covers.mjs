import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/covers");
const API_KEY = "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(OUT_DIR, { recursive: true });

const OCCASIONS = [
  {
    slug: "my-first-ramadan",
    name: "My First Ramadan",
    prompt: `Create a luxurious Islamic children's coloring book cover in midnight blue, gold, and warm amber — for Ramadan. Main title in large ornate gold typography: "MY FIRST RAMADAN" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: Two adorable Muslim children sitting together at a wooden table coloring inside an open Ramadan-themed coloring book. Boy wearing a white kufi and cream outfit. Girl wearing a modest teal hijab and cream dress. Both smiling with large expressive kawaii eyes. Open pages show mosque outlines, crescent moons, stars, lanterns, and Islamic geometric patterns. Background: dreamy Islamic cityscape at night with glowing golden domes, tall minarets, crescent moon high in starry sky. Grand Islamic arch framing the entire composition. Large crescent moon and hanging stars from top center. Two ornate glowing Ramadan lanterns hanging symmetrically on both sides. Rich geometric Islamic patterns on borders. Stacked Islamic books and colored pencils near children. Style: premium digital illustration, Pixar-inspired children's book art, soft painterly rendering, midnight blue + warm gold + amber, symmetrical Ramadan night atmosphere, highly detailed ornamental borders, elegant embossed-looking typography, high-end publishing quality. Portrait 8.5x11, ultra high resolution, print-ready. Negative prompt: photorealistic, blurry text, distorted anatomy, extra fingers, random Arabic text, watermark, horror, washed-out colors, poor typography.`
  },
  {
    slug: "my-first-eid",
    name: "My First Eid",
    prompt: `Create a luxurious Islamic children's coloring book cover in rich emerald green, white, and brilliant gold — celebrating Eid. Main title: "MY FIRST EID" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: Two joyful Muslim children in their Eid best clothes, sitting together coloring an open Islamic book with huge smiles and large kawaii eyes. Boy in a white thobe and green kufi. Girl in a beautiful green and gold dress with matching hijab. Open pages show crescents, stars, gift boxes, balloons, mosque outlines, Eid greetings patterns. Background: bright festive Islamic city scene in daytime with green and gold mosque domes, colorful bunting, confetti, flowering archways. Grand celebratory arch framing with green and gold. Sun and crescent at top center. Symmetrical glowing green-and-gold ornate lanterns. Festive geometric patterned borders with stars and crescents. Colored pencils, gifts, and flower props scattered around. Style: premium children's illustration, Pixar-inspired joy and festivity, bright warm painterly rendering, emerald green + white + brilliant gold, jubilant Eid celebration atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or sad tones.`
  },
  {
    slug: "my-first-diwali",
    name: "My First Diwali",
    prompt: `Create a luxurious children's coloring book cover in deep orange, warm amber, purple, and gold — celebrating Diwali, the festival of lights. Main title: "MY FIRST DIWALI" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for All Kids" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: Two adorable South Asian children sitting cross-legged around beautiful lit diyas, coloring an open Diwali-themed book. Girl in a colorful lehenga with intricate patterns. Boy in a festive kurta. Both with large kawaii eyes, joyful expressions. Open pages show diya lamp outlines, lotus flowers, geometric rangoli patterns, fireworks, peacocks. Background: magical Diwali night with glowing Indian palace architecture, thousands of tiny oil lamps illuminating the scene, warm orange sky. Grand ornate arch of marigold flowers framing composition. Large glowing diyas and fireworks at top. Symmetrical ornate hanging diyas. Intricate rangoli and floral borders. Marigold garlands and colored pencils nearby. Style: premium children's illustration, Pixar-inspired warmth and magic, soft painterly glowing rendering, deep orange + amber + purple + gold, magical Diwali festival atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, dark or scary elements.`
  },
  {
    slug: "my-first-christmas",
    name: "My First Christmas",
    prompt: `Create a charming premium children's coloring book cover in deep forest green, rich red, cream, and gold — celebrating Christmas. Main title: "MY FIRST CHRISTMAS" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for All Kids" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: Two adorable children in cozy Christmas sweaters sitting by a beautifully decorated Christmas tree, coloring an open Christmas-themed book. Girl with pigtails in a red cardigan. Boy in a green sweater. Both with large kawaii eyes and warm smiles. Open pages show Christmas tree outlines, snowflakes, presents, ornaments, stars, holly patterns. Background: cozy Christmas living room with glowing fireplace, decorated tree, snow falling outside frosted windows, warm golden light. Grand wreath arch framing. Golden star at top center. Symmetrical ornate red-ribboned lanterns. Holly, snowflake, and star patterned borders in green and gold. Colored pencils, wrapped gifts, and candy canes nearby. Style: premium children's storybook illustration, Pixar-inspired Christmas coziness, soft warm painterly rendering, forest green + red + cream + gold, magical Christmas atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, scary or dark elements.`
  },
  {
    slug: "my-first-hanukkah",
    name: "My First Hanukkah",
    prompt: `Create a beautiful premium children's coloring book cover in royal blue, silver, white, and gold — celebrating Hanukkah, the Festival of Lights. Main title: "MY FIRST HANUKKAH" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for All Kids" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: Two adorable children sitting together by a glowing menorah, coloring an open Hanukkah-themed book with joyful large kawaii eyes. Girl in a blue dress with silver trim. Boy in a blue sweater and kippah. Open pages show menorah outlines, Star of David patterns, dreidels, gelt coins, geometric snowflake patterns. Background: cozy festive interior with large glowing menorah, Star of David decorations, blue and silver streamers, soft winter night visible through window. Grand arch of silver and blue framing. Nine-branched menorah glowing at top center. Symmetrical silver ornate candelabras. Star of David and geometric blue-and-silver borders. Dreidels, gelt, and colored pencils scattered near children. Style: premium children's illustration, Pixar-inspired warmth and celebration, soft painterly rendering, royal blue + silver + white + gold, magical Hanukkah atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, scary or dark elements.`
  },
  {
    slug: "my-first-birthday",
    name: "My First Birthday",
    prompt: `Create a joyful premium children's coloring book cover in rainbow pastels — soft pink, lavender, mint, and gold — celebrating a first birthday. Main title: "MY FIRST BIRTHDAY" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Ones" — Age badge: "Ages 2–5 Years" — Tagline: "Colour • Play • Celebrate". Scene: An absolutely adorable baby or toddler with a giant birthday cake in front of them, wearing a birthday crown, laughing with huge kawaii eyes, coloring a birthday-themed book. Open pages show balloon outlines, cake patterns, stars, bunting, gift box designs, confetti. Background: magical birthday party setting with floating balloons, colorful bunting, confetti, sparkles, streamers everywhere in pastel rainbow colors. Grand arch of colorful balloons and bunting framing. Large birthday star and confetti burst at top center. Symmetrical balloon clusters. Rainbow confetti, star, and bunting patterned borders. Cupcakes, birthday cake, and colored pencils nearby. Style: premium children's illustration, Pixar-inspired pure joy, soft bright painterly rendering, rainbow pastels + gold, magical celebration atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, sad or dark elements.`
  },
  {
    slug: "big-brother",
    name: "Big Brother",
    prompt: `Create a warm premium children's coloring book cover in royal blue, cream, and gold — celebrating becoming a big brother. Main title: "BIG BROTHER" — Subtitle: "COLOURING BOOK" — Badge: "A Special Book Just for Me" — Age badge: "Ages 3–7 Years" — Tagline: "My New Adventure Begins". Scene: An adorable proud big brother boy with large kawaii eyes and a huge smile, wearing a "Big Brother" badge/star on his shirt, sitting with a coloring book while a tiny baby bootie or small teddy sits beside him. Open pages show hearts, stars, baby animals, baby footprints, and cute patterns. Background: warm cozy room with soft blue walls, a crib visible, sunlight streaming through curtains, toys on shelves, a gentle magical glow. Grand blue and gold arch framing. Gold star and heart at top center. Symmetrical soft blue lanterns or balloon clusters. Star, heart, and animal patterned borders in blue and gold. Teddy bears, stars, and colored pencils near the boy. Style: premium children's storybook illustration, Pixar-inspired warmth and pride, soft warm painterly rendering, royal blue + cream + gold, cozy celebratory new-sibling atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, sad or scary elements.`
  },
  {
    slug: "big-sister",
    name: "Big Sister",
    prompt: `Create a warm premium children's coloring book cover in rose pink, lavender, cream, and gold — celebrating becoming a big sister. Main title: "BIG SISTER" — Subtitle: "COLOURING BOOK" — Badge: "A Special Book Just for Me" — Age badge: "Ages 3–7 Years" — Tagline: "My New Adventure Begins". Scene: An adorable proud big sister girl with large kawaii eyes and a radiant smile, wearing a pink dress with a "Big Sister" star badge pinned on, sitting with a coloring book while a tiny baby bootie or plush bunny sits beside her. Open pages show hearts, butterflies, flowers, baby footprints, stars, and cute patterns. Background: beautiful cozy pink-toned room with a crib visible, fairy lights twinkling, fresh flowers in a vase, soft afternoon light. Grand rose-and-gold arch framing. Gold heart and stars at top center. Symmetrical soft pink flower clusters or ribbon bows. Butterfly, flower, heart, and star patterned borders in pink and gold. Plush bunnies, flowers, and colored pencils near the girl. Style: premium children's storybook illustration, Pixar-inspired warmth and love, soft pastel painterly rendering, rose pink + lavender + cream + gold, heartwarming new-sibling celebration atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, sad or scary elements.`
  },
  {
    slug: "starting-school",
    name: "Starting School",
    prompt: `Create an exciting premium children's coloring book cover in bright teal, sunshine yellow, cream, and gold — celebrating starting school for the first time. Main title: "STARTING SCHOOL" — Subtitle: "COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Learners" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Play • Grow". Scene: Two adorable children in school uniforms with big backpacks and huge excited kawaii eyes, one holding a coloring book, both at the school gates looking thrilled on their first day. Girl in a teal pinafore with pigtails. Boy in a grey uniform with a yellow backpack. Open pages show school bus outlines, pencils, apples, books, rulers, stars, alphabet letters. Background: bright cheerful school scene with colorful school building, apple trees, sunshine, flowers, friendly school bus visible in distance. Grand arch of pencils, rulers, and school supplies framing. Bright golden sunshine and stars at top. Symmetrical teal-and-yellow school lanterns or apple trees. School supply and star patterned borders in teal and yellow. Backpacks, apples, pencils, and colored pencils scattered nearby. Style: premium children's illustration, Pixar-inspired excitement and adventure, bright warm painterly rendering, teal + sunshine yellow + cream + gold, joyful first-day-of-school atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random text, watermark, anxious or dark elements.`
  },
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function generateImage(entry, index) {
  console.log(`\n[${index + 1}/9] Generating: ${entry.name}...`);
  const res = await fetch("https://koala.sh/api/image-generation/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: entry.prompt,
      model: "gpt-image-2",
      quality: "high",
      size: "1024x1536",
      numImages: 1,
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
  if (!imageUrl) { console.error(`  ✗ No URL in response`); return null; }
  console.log(`  ✓ URL received`);
  return imageUrl;
}

async function downloadImage(url, slug) {
  console.log(`  Downloading ${slug}...`);
  for (let attempt = 0; attempt < 9; attempt++) {
    await sleep(10000);
    try {
      const res = await fetch(url);
      if (res.ok && res.headers.get("content-type")?.startsWith("image/")) {
        const buffer = await res.arrayBuffer();
        writeFileSync(join(OUT_DIR, `${slug}.png`), Buffer.from(buffer));
        console.log(`  ✓ Saved: public/covers/${slug}.png (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        return true;
      }
      console.log(`  ⏳ Not ready (attempt ${attempt + 1}/9)`);
    } catch (e) {
      console.log(`  ⚠ Error attempt ${attempt + 1}: ${e.message}`);
    }
  }
  console.error(`  ✗ Failed to download ${slug}`);
  return false;
}

async function main() {
  console.log("🎉 Generating occasion covers (9 books)...\n");
  for (let i = 0; i < OCCASIONS.length; i++) {
    const entry = OCCASIONS[i];
    const url = await generateImage(entry, i);
    if (url) await downloadImage(url, entry.slug);
    if (i < OCCASIONS.length - 1) { console.log("  ⏸ Pausing 3s..."); await sleep(3000); }
  }
  console.log("\n✅ All occasion covers done!");
}

main().catch(console.error);
