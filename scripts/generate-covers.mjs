import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/covers");
const API_KEY = "5a0895bb-4c45-4f79-a7c3-a799d0de625f";

mkdirSync(OUT_DIR, { recursive: true });

// ── Top 10 Muslim girls + boys from UK 2024 rankings ──────────────────────
const NAMES = [
  // GIRLS
  {
    slug: "maryam", name: "Maryam", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in sage green, cream, and antique gold. Main title in large ornate gold typography: "MARYAM'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A cute Muslim girl with large expressive kawaii eyes, wearing a cream hijab and green modest dress, sitting on a floral cushion coloring an open Islamic coloring book. Open pages show hibiscus flowers, crescent moons, geometric stars, arabesque patterns. Background: illuminated Islamic garden with rose arches, glowing domes, minarets at dusk. Grand Islamic arch framing composition. Hanging crescent moon and stars from top. Two glowing ornate Ramadan lanterns hanging symmetrically. Rich geometric Islamic floral patterns on borders. Colored pencils and small roses near child. Style: premium digital illustration, Pixar-inspired children's book art, soft painterly rendering, warm cinematic lighting, sage green + antique gold scheme, symmetrical magical atmosphere, highly detailed ornamental borders. Portrait orientation 8.5x11, ultra high resolution, print-ready. Negative prompt: photorealistic, blurry text, distorted anatomy, extra fingers, random Arabic text, watermark, horror elements, washed-out colors, poor typography.`
  },
  {
    slug: "fatima", name: "Fatima", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep rose, cream, and antique gold. Main title: "FATIMA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A sweet Muslim girl with large kawaii eyes, wearing a pink hijab and cream modest dress, sitting cross-legged coloring an Islamic book. Open pages show roses, tulips, crescent moons, Islamic geometric patterns. Background: enchanting Islamic rose garden with glowing palace domes, minarets, rose-covered arches at golden hour. Grand floral Islamic arch framing composition. Hanging crescent and stars from top. Two glowing ornate lanterns symmetrically placed. Lush rose and floral borders. Colored pencils scattered nearby. Style: premium children's storybook illustration, Pixar-meets-watercolor, soft magical lighting, deep rose + cream + gold palette, symmetrical, elegant ornamental borders, high-end publishing quality. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, horror, washed-out colors.`
  },
  {
    slug: "anaya", name: "Anaya", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep violet, cream, and gold. Main title: "ANAYA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: An adorable Muslim girl with large kawaii eyes, wearing a purple hijab and cream modest dress, sitting on a starry cushion holding a coloring book. Open pages show crescent moons, geometric star patterns, arabesque designs, Islamic mandalas. Background: magical Islamic night cityscape with glowing domes, minarets, celestial stars, nebula-like sky. Grand ornate arch framing. Hanging crescent and constellation stars from top center. Symmetrical glowing Ramadan lanterns. Celestial and geometric patterned borders. Colored pencils and tiny stars nearby. Style: premium digital illustration, Pixar-inspired, soft painterly glow, violet + deep purple + gold, symmetrical magical night atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, horror.`
  },
  {
    slug: "nur", name: "Nur", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in warm amber, cream, and shimmering gold — meaning "light" in Arabic. Main title: "NUR'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A glowing, joyful Muslim girl with large kawaii eyes, wearing a golden hijab and cream modest dress, surrounded by beautiful glowing Ramadan lanterns. She colors an open Islamic book showing lantern designs, sunbursts, geometric stars, crescent moons. Background: illuminated Islamic interior with golden arched windows casting warm rays, mosque silhouette visible. Grand ornate lantern-filled arch framing. Warm light rays emanating from top center. Many hanging lanterns of different sizes symmetrically placed. Golden geometric borders with light motifs. Colored pencils in warm tones nearby. Style: premium illustration, Pixar-inspired warmth, soft painterly rendering, amber + warm gold color scheme, radiant lighting, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or cold tones.`
  },
  {
    slug: "dua", name: "Dua", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in midnight blue, silver, and gold — "Dua" meaning prayer in Islam. Main title: "DUA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A serene, beautiful Muslim girl with large kawaii eyes, wearing a white hijab and light blue modest dress, gently coloring an Islamic prayer-themed coloring book. Open pages show raised hands in dua, crescent moons, stars, Islamic calligraphy outlines, geometric patterns. Background: peaceful Islamic night scene with glowing mosque domes, crescent moon, thousands of stars, soft cloud wisps. Grand ornate Islamic arch framing. Silver crescent moon hanging at top center. Symmetrical glowing blue lanterns. Silver and gold geometric arabesque borders. Colored pencils and a small crescent moon prop nearby. Style: premium children's book illustration, Pixar-inspired calm and spiritual, soft night lighting, midnight blue + silver + gold palette, serene magical atmosphere, highly detailed borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, scary elements.`
  },
  {
    slug: "aisha", name: "Aisha", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in teal, cream, and gold. Main title: "AISHA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A cheerful Muslim girl with large expressive kawaii eyes, wearing a teal hijab and cream modest dress, happily coloring an open Islamic-themed coloring book. Open pages show butterflies, garden flowers, crescent moons, Islamic geometric patterns, stars. Background: beautiful Islamic garden paradise with teal domes, fountains, flowering archways, glowing at golden hour. Grand teal and gold ornate arch framing. Hanging crescent and butterfly motifs from top. Two ornate symmetrical glowing teal lanterns. Garden and geometric patterned borders with butterflies and flowers. Colored pencils scattered around. Style: premium digital illustration, Pixar-meets-storybook, soft warm lighting, teal + cream + gold palette, magical garden paradise atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, horror elements.`
  },
  {
    slug: "hana", name: "Hana", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in blush pink, cream, and gold — "Hana" meaning happiness in Arabic. Main title: "HANA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A delightfully happy Muslim girl with large kawaii eyes and a radiant smile, wearing a pink hijab and cream modest dress, laughing while coloring an Islamic themed book. Open pages show cherry blossoms, roses, crescent moons, butterflies, geometric Islamic patterns. Background: joyful Islamic garden scene with pink flowering trees, pink-domed mosque, warm glowing sunset sky. Grand floral arch framing in pink and gold. Hanging cherry blossom and crescent moon garlands from top. Symmetrical glowing pink lanterns. Floral patterned borders with roses and cherry blossoms. Colored pencils in pink tones nearby. Style: premium children's book illustration, Pixar-inspired joy, soft warm painterly rendering, blush pink + cream + gold palette, cheerful magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or sad tones.`
  },
  {
    slug: "zahra", name: "Zahra", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in coral, deep rose, cream, and gold — "Zahra" meaning radiant and blooming flower. Main title: "ZAHRA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A radiant Muslim girl with large kawaii eyes, wearing a coral hijab and cream modest dress, sitting among flowers coloring a beautiful Islamic book. Open pages show blooming roses, sunbursts, crescent moons, Islamic geometric star patterns. Background: blooming Islamic garden palace with coral domes, rose arches, warm radiant light, minarets framed by flowers. Grand ornate floral arch framing in coral and gold. Hanging rose garlands and crescent from top. Symmetrical glowing coral-toned lanterns. Ornate floral geometric borders. Colored pencils and fresh roses nearby. Style: premium digital illustration, Pixar-inspired radiance, soft warm glowing rendering, coral + deep rose + gold palette, blooming magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, cold or harsh colors.`
  },
  {
    slug: "layla", name: "Layla", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep midnight navy, lilac, silver, and gold — "Layla" meaning night in Arabic. Main title: "LAYLA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A dreamy Muslim girl with large kawaii eyes and a serene expression, wearing a silver-lilac hijab and navy modest dress, sitting under a starry sky coloring an open Islamic book. Open pages show crescent moons, stars, galaxy patterns, Islamic geometric designs. Background: magical Islamic night city with illuminated blue-purple mosque domes, thousands of glowing stars, nebula sky, silver crescent moon. Grand starlit arch framing. Large glowing crescent moon hanging at top center. Lilac and silver glowing lanterns symmetrically placed. Star and crescent patterned borders in silver and gold. Colored pencils and tiny star props nearby. Style: premium children's book illustration, Pixar-inspired dreaminess, soft moonlit rendering, midnight navy + lilac + silver + gold, magical night atmosphere, highly detailed star-studded borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, scary or horror elements.`
  },
  {
    slug: "zara", name: "Zara", gender: "girl",
    prompt: `Create a luxurious Islamic children's coloring book cover in royal purple, cream, and shimmering gold — "Zara" being a beautiful Arabic name meaning princess. Main title: "ZARA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: An elegant little Muslim girl with large kawaii eyes and a graceful smile, wearing a purple hijab with golden trim and cream modest dress, sitting on an ornate cushion coloring an Islamic book. Open pages show stars, crescent moons, Islamic palace architecture, geometric star patterns. Background: magnificent Islamic palace interior with soaring purple and gold arched ceilings, mosaics, glowing chandeliers, ornate pillars. Grand majestic arch framing with purple and gold. Crown and crescent moon hanging at top center. Symmetrical ornate golden lanterns. Regal geometric arabesque borders in purple and gold. Colored pencils and golden stars nearby. Style: premium digital illustration, Pixar-inspired royalty, soft opulent rendering, royal purple + cream + gold palette, majestic magical atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },

  // BOYS
  {
    slug: "muhammad", name: "Muhammad", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in rich midnight blue and antique gold. Main title: "MUHAMMAD'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A cute Muslim boy with large kawaii eyes and warm smile, wearing a white kufi and cream traditional thobe, sitting on a prayer rug coloring an open Islamic book. Open pages show grand mosque sketches, crescent moons, stars, arabesque patterns. Background: magnificent Islamic cityscape at night with glowing golden domes, tall minarets, ornate arches, starry sky. Grand Islamic arch framing. Hanging crescent moon and stars from top center. Two glowing ornate Ramadan lanterns symmetrically placed. Rich geometric Islamic patterns on borders. Colored pencils near child. Style: premium digital illustration, Pixar-inspired children's book, soft painterly rendering, detailed Islamic architecture, midnight blue + antique gold, symmetrical magical atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, horror, washed-out colors.`
  },
  {
    slug: "adam", name: "Adam", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in rich emerald green, cream, and antique gold — Adam being the first prophet in Islam. Main title: "ADAM'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A cheerful Muslim boy with large kawaii eyes, wearing a green kufi and cream traditional outfit, sitting in a lush garden coloring an open Islamic nature-themed book. Open pages show trees of paradise, crescent moons, flowers, butterflies, Islamic geometric patterns. Background: magical Islamic garden paradise with emerald domes, flowering arches, glowing fountains, birds at golden hour. Grand floral arch framing in green and gold. Hanging crescent and leaf garlands from top. Symmetrical glowing green lanterns. Lush botanical and geometric patterned borders. Colored pencils and small nature props nearby. Style: premium children's illustration, Pixar-inspired lushness, soft warm painterly rendering, emerald green + cream + gold, paradisiacal garden atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },
  {
    slug: "ali", name: "Ali", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in royal cobalt blue, cream, and bold gold. Main title: "ALI'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A brave-looking but sweet Muslim boy with large kawaii eyes, wearing a blue kufi and cream traditional outfit, sitting confidently coloring an Islamic book. Open pages show a majestic geometric lion silhouette, Islamic shield patterns, stars, crescent moons, arabesque designs. Background: grand Islamic palace with tall cobalt-and-gold columns, ornate arched ceilings, glowing chandeliers, regal atmosphere. Grand royal arch framing with blue and gold. Crescent moon and stars at top. Symmetrical grand golden lanterns. Geometric arabesque regal borders in blue and gold. Colored pencils in royal colors nearby. Style: premium children's storybook illustration, Pixar-inspired strength and warmth, soft painterly rendering, cobalt blue + cream + gold, regal magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, scary or violent elements.`
  },
  {
    slug: "ibrahim", name: "Ibrahim", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep midnight blue, warm amber, cream, and gold — Ibrahim being a beloved prophet with a connection to stars and fire of faith. Main title: "IBRAHIM'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A wondering, bright-eyed Muslim boy with large kawaii eyes, wearing a navy kufi and cream traditional outfit, sitting on a rooftop under the stars coloring an Islamic book. Open pages show constellations, crescent moons, geometric star patterns, fire of faith motifs, arabesque designs. Background: vast Islamic city under a spectacular starry celestial sky, domes silhouetted, warm amber stars and meteors. Grand star-filled arch framing. Large golden crescent and constellation stars from top. Symmetrical amber-glowing lanterns. Star and crescent patterned borders in navy and gold. Colored pencils and star props nearby. Style: premium children's illustration, Pixar-inspired wonder, soft painterly celestial rendering, midnight blue + amber + gold, stargazing magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },
  {
    slug: "musa", name: "Musa", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep ocean blue, seafoam, cream, and gold — Musa (Moses) being a revered prophet in Islam. Main title: "MUSA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: An adventurous but sweet Muslim boy with large kawaii eyes, wearing a blue kufi and cream traditional outfit, sitting by a gentle river coloring an Islamic nature book. Open pages show flowing water, fish, reeds, crescent moons, Islamic patterns, nature motifs. Background: peaceful Islamic riverside landscape with blue domes reflected in water, weeping willows, golden sunset light. Grand ornate river-and-arch framing in blue and gold. Crescent moon and water droplet motifs from top. Symmetrical blue glowing lanterns. Wave and geometric patterned borders in ocean blue and gold. Colored pencils and leaf props nearby. Style: premium children's illustration, Pixar-inspired peaceful adventure, soft painterly warm rendering, ocean blue + seafoam + gold, tranquil magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, scary elements.`
  },
  {
    slug: "yahya", name: "Yahya", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in forest green, warm cream, and antique gold — Yahya (John) being a gentle prophet in Islam, associated with nature and gardens. Main title: "YAHYA'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A gentle, warm Muslim boy with large kawaii eyes, wearing a green kufi and cream traditional outfit, sitting under a beautiful tree coloring an Islamic nature book. Open pages show birds, trees, flowers, crescent moons, Islamic geometric patterns. Background: beautiful Islamic garden paradise with towering green trees, exotic birds, glowing green domes, warm afternoon light filtering through leaves. Grand floral tree arch framing. Hanging bird and crescent garlands from top. Symmetrical green-glowing lanterns. Botanical and geometric patterned borders. Colored pencils and leaf props nearby. Style: premium children's book illustration, Pixar-inspired gentle warmth, soft painterly rendering, forest green + cream + gold, nature paradise atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },
  {
    slug: "yusuf", name: "Yusuf", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in rich teal, cream, and brilliant gold — Yusuf (Joseph) being the most beautiful of prophets, associated with stars and a magnificent palace. Main title: "YUSUF'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A handsome little Muslim boy with large kawaii eyes and a radiant smile, wearing a teal kufi and cream traditional outfit, sitting in a palace courtyard coloring an Islamic book. Open pages show eleven stars bowing, crescent moons, palace architecture, geometric star patterns. Background: magnificent teal and gold Islamic palace with soaring arches, ornate tile mosaics, starlit sky visible through the ceiling. Grand teal and gold ornate arch framing. Eleven golden stars hanging from top. Symmetrical brilliant gold lanterns. Star and arabesque patterned borders in teal and gold. Colored pencils and small star props nearby. Style: premium digital illustration, Pixar-inspired magnificence, soft glowing rendering, rich teal + cream + gold palette, palace and stars magical atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },
  {
    slug: "omar", name: "Omar", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in deep warm brown, rich cream, and antique gold. Main title: "OMAR'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A studious but joyful Muslim boy with large kawaii eyes, wearing a brown kufi and cream traditional outfit, sitting at a beautiful wooden desk surrounded by Islamic books, coloring one of them. Open pages show Islamic calligraphy outlines, crescent moons, lanterns, geometric star patterns. Background: cozy Islamic library setting with warm glowing lamps, bookshelves filled with Islamic books, arched windows showing a mosque outside. Grand ornate bookshelf arch framing in brown and gold. Glowing lanterns hanging from top. Symmetrical warm-glowing lanterns flanking. Book and geometric patterned borders. Stack of Islamic books, colored pencils nearby. Style: premium children's illustration, Pixar-inspired scholarly warmth, soft cozy painterly rendering, warm brown + cream + gold palette, cozy library magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or scary elements.`
  },
  {
    slug: "ahmad", name: "Ahmad", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in midnight blue, silver, and bright gold — Ahmad being another beautiful name of the Prophet, meaning most praised. Main title: "AHMAD'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: A sweet praising Muslim boy with large kawaii eyes and a warm grateful smile, wearing a white kufi and navy traditional outfit, sitting on a prayer mat coloring an open Islamic book. Open pages show crescent moons, stars, lanterns, Islamic architectural sketches, arabesque patterns. Background: beautiful Islamic night scene with glowing domes reflecting in a still pool, thousands of stars, large crescent moon. Grand silvery arch framing. Large silver crescent moon at top center. Symmetrical silver-and-gold glowing lanterns. Crescent and star patterned borders in midnight blue, silver, and gold. Colored pencils and crescent props nearby. Style: premium children's storybook illustration, Pixar-inspired serenity and praise, soft night painterly rendering, midnight blue + silver + gold palette, serene blessed atmosphere, highly detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, horror elements.`
  },
  {
    slug: "ayaan", name: "Ayaan", gender: "boy",
    prompt: `Create a luxurious Islamic children's coloring book cover in warm amber, sunrise orange, cream, and gold — Ayaan meaning God's gift and dawn in Arabic. Main title: "AYAAN'S" — Subtitle: "FIRST COLOURING BOOK" — Badge: "Fun & Easy Colouring Pages for Little Muslims" — Age badge: "Ages 4–6 Years" — Tagline: "Learn • Colour • Grow". Scene: An energetic, bright-eyed Muslim boy with large kawaii eyes and a joyful smile, wearing an amber kufi and cream traditional outfit, sitting with an open Islamic coloring book, watching a golden sunrise. Open pages show sunrise, crescent moons, stars, Islamic city skylines, geometric patterns. Background: breathtaking Islamic city at dawn with golden light bathing mosque domes and minarets, warm orange sky, first rays of light. Grand sunrise arch framing in amber and gold. Sun rays and crescent moon radiating from top. Symmetrical warm amber glowing lanterns. Sun ray and geometric patterned borders in amber and gold. Colored pencils in warm tones nearby. Style: premium children's book illustration, Pixar-inspired joyful energy, soft golden painterly rendering, warm amber + sunrise orange + gold, hopeful dawn magical atmosphere, detailed ornamental borders. Portrait 8.5x11. Negative prompt: photorealistic, blurry text, distorted anatomy, random Arabic text, watermark, dark or cold elements.`
  },
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function generateImage(entry, index) {
  console.log(`\n[${index + 1}/20] Generating: ${entry.name} (${entry.gender})...`);

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
  console.log(`  ✓ API response received`);

  // The API may return array or object
  const imageUrl = Array.isArray(data) ? data[0]?.url : data?.url || data?.[0]?.url;

  if (!imageUrl) {
    console.error(`  ✗ No URL in response:`, JSON.stringify(data).slice(0, 200));
    return null;
  }

  console.log(`  → URL: ${imageUrl.slice(0, 80)}...`);
  return imageUrl;
}

async function downloadImage(url, slug) {
  console.log(`  Downloading ${slug}...`);

  // Wait up to 90 seconds with polling for the image to be ready
  for (let attempt = 0; attempt < 9; attempt++) {
    await sleep(10000); // wait 10s between attempts
    try {
      const res = await fetch(url);
      if (res.ok && res.headers.get("content-type")?.startsWith("image/")) {
        const buffer = await res.arrayBuffer();
        const outPath = join(OUT_DIR, `${slug}.png`);
        writeFileSync(outPath, Buffer.from(buffer));
        console.log(`  ✓ Saved: public/covers/${slug}.png (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
        return true;
      } else {
        console.log(`  ⏳ Not ready yet (attempt ${attempt + 1}/9, status: ${res.status})`);
      }
    } catch (e) {
      console.log(`  ⚠ Fetch error attempt ${attempt + 1}: ${e.message}`);
    }
  }
  console.error(`  ✗ Failed to download ${slug} after 9 attempts`);
  return false;
}

// Write results manifest
const results = {};

async function main() {
  console.log("🎨 Starting cover image generation for 20 Muslim names...\n");

  for (let i = 0; i < NAMES.length; i++) {
    const entry = NAMES[i];

    const imageUrl = await generateImage(entry, i);
    if (!imageUrl) {
      results[entry.slug] = { error: true };
      await sleep(3000);
      continue;
    }

    results[entry.slug] = { url: imageUrl, name: entry.name };

    // Download immediately after getting URL (image generates concurrently)
    const ok = await downloadImage(imageUrl, entry.slug);
    if (!ok) {
      results[entry.slug].downloadFailed = true;
    }

    // Small gap between API calls
    if (i < NAMES.length - 1) {
      console.log("  ⏸ Pausing 3s before next request...");
      await sleep(3000);
    }
  }

  // Save manifest
  const manifestPath = join(OUT_DIR, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Done! Manifest saved to public/covers/manifest.json`);

  const succeeded = Object.values(results).filter(r => !r.error && !r.downloadFailed).length;
  console.log(`📊 ${succeeded}/20 images generated successfully`);
}

main().catch(console.error);
