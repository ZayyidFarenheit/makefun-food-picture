// food-picture-01 entry: steaming tonkotsu ramen, tall glossy noodle pull,
// molten ajitama egg. The picture (entry.png beside this file, 1024x1024
// JPEG bytes, 237,630 bytes) is copied verbatim to /output/entry.png.
// Copying (not redrawing) keeps the entry byte-identical on every run: the
// harness runs the program twice and both runs must write the same bytes.
// The picture follows this competition's winning formula (tonkotsu noodle
// pull, steam, dark table) with one change: the molten egg is the hero.
// entry.png is resolved next to this script, not from the working directory.
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const entryPng = fileURLToPath(new URL("entry.png", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPng, `${outDir}/entry.png`);
