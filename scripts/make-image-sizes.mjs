// Run after adding or replacing photos:  npm run images
//
// 1. Creates a medium "-md.webp" (1200px wide) next to every full-size photo in public/images,
//    so grids on high-resolution screens don't download the full-size originals, and a tiny
//    "-xs.webp" (168x120, cropped like the box it fills) for the full-screen viewer's
//    thumbnail strip, so opening a 40-photo gallery costs ~0.2 MB instead of ~4 MB.
// 2. Writes content/image-widths.json with the real pixel width of every photo's three files
//    (plus the full-size height, used to tell landscape photos from portrait ones).
//    srcSetFor (content/site.js) uses it so the browser knows each file's true size; many older
//    photos are smaller than 2000px, and a wrong width makes the browser show them too small.
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const MANIFEST = path.join(process.cwd(), "content", "image-widths.json");
const WIDTH = 1200;
const XS = { width: 168, height: 120 }; // 2x the strip's 78x56 boxes (rounded up)

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const exists = (file) => stat(file).then(() => true, () => false);
const widthOf = async (file) => ((await exists(file)) ? (await sharp(file).metadata()).width : null);
const heightOf = async (file) => (await sharp(file).metadata()).height;

let made = 0;
const widths = {};
for await (const file of walk(ROOT)) {
  if (!file.endsWith(".webp") || /-(thumb|md|xs)\.webp$/.test(file)) continue;
  const md = file.replace(/\.webp$/, "-md.webp");
  if (!(await exists(md))) {
    // Quality 86 from the full-size file: as faithful as 90 to the eye at this size, ~25% smaller.
    await sharp(file)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: 86, smartSubsample: true, effort: 6 })
      .keepIccProfile()
      .toFile(md);
    made += 1;
  }
  const xs = file.replace(/\.webp$/, "-xs.webp");
  if (!(await exists(xs))) {
    await sharp(file).resize({ ...XS, fit: "cover" }).webp({ quality: 80, effort: 6 }).toFile(xs);
    made += 1;
  }
  const key = "/" + path.relative(path.join(process.cwd(), "public"), file).split(path.sep).join("/");
  // [thumb width, md width, full width, full height] in pixels (null when a file is missing).
  widths[key] = [
    await widthOf(file.replace(/\.webp$/, "-thumb.webp")),
    await widthOf(md),
    await widthOf(file),
    await heightOf(file),
  ];
}

const sorted = Object.fromEntries(Object.entries(widths).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"') + "\n");
console.log(`Created ${made} smaller image${made === 1 ? "" : "s"}. Recorded widths for ${Object.keys(sorted).length} photos.`);
