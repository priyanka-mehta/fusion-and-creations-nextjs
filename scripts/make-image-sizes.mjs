// Creates a medium "-md.webp" (1200px wide) next to every full-size photo in public/images,
// so grids on high-resolution screens don't download the 2000px originals.
// Run after adding photos:  npm run images
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const WIDTH = 1200;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let made = 0;
for await (const file of walk(ROOT)) {
  if (!file.endsWith(".webp") || /-(thumb|md)\.webp$/.test(file)) continue;
  const out = file.replace(/\.webp$/, "-md.webp");
  const exists = await stat(out).then(() => true, () => false);
  if (exists) continue;
  await sharp(file).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  made += 1;
}
console.log(`Created ${made} medium image${made === 1 ? "" : "s"}.`);
