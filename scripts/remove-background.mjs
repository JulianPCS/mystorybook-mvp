/**
 * Flood-fill background remover.
 * Seeds from all four corners, marks near-white pixels transparent,
 * then saves as a proper PNG with alpha channel.
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const INPUT  = join(__dirname, "../public/mockups/fatima-hardcover.png");
const OUTPUT = join(__dirname, "../public/mockups/fatima-hardcover-transparent.png");

// How close to white a pixel must be to count as background
const THRESHOLD = 240; // 0–255; 240 = within ~6% of pure white

async function removeBackground(inputPath, outputPath) {
  console.log("🖼  Loading image...");
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();

  // Get raw RGBA pixel data
  const { data } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8ClampedArray(data);
  const total  = width * height;

  // --- Flood fill (BFS) from corners ---
  const visited = new Uint8Array(total); // 0 = unvisited, 1 = background
  const queue   = [];

  function idx(x, y) { return y * width + x; }
  function isBackground(x, y) {
    const i = idx(x, y) * 4;
    return pixels[i] >= THRESHOLD && pixels[i + 1] >= THRESHOLD && pixels[i + 2] >= THRESHOLD;
  }
  function enqueue(x, y) {
    const i = idx(x, y);
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    if (visited[i]) return;
    visited[i] = 1;
    if (isBackground(x, y)) queue.push([x, y]);
  }

  // Seed from all four corners
  enqueue(0, 0);
  enqueue(width - 1, 0);
  enqueue(0, height - 1);
  enqueue(width - 1, height - 1);

  // BFS spread
  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  console.log(`  ✓ Flood fill complete — ${queue.length.toLocaleString()} background pixels found`);

  // Make all background pixels fully transparent
  let changed = 0;
  for (let i = 0; i < total; i++) {
    if (visited[i]) {
      pixels[i * 4 + 3] = 0; // alpha = 0
      changed++;
    }
  }

  console.log(`  ✓ Made ${changed.toLocaleString()} pixels transparent`);

  // Write out as PNG (preserving alpha)
  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  console.log(`\n  ✅ Saved: ${outputPath.split("/public/")[1]}`);
}

removeBackground(INPUT, OUTPUT).catch(console.error);
