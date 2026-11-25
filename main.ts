// boring-object — one-line review of the dullest everyday object.
// Winner picked pairwise from 12 candidates against the judge brief:
// the dustpan's thin leftover line of dust is a real, recognisable detail
// no other object shares, and the dullness itself is the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The review: the dustpan does 99% of the job, then protects the last
// sliver of dust like treasure. Absurd, true, and only a dustpan does this.
const reviewLine =
  "Dustpan review: it sweeps up all the dirt, then leaves one thin line behind and guards it like a family heirloom.";

if (reviewLine.length > 200) {
  throw new Error(`review too long: ${reviewLine.length} chars (max 200)`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, reviewLine + "\n", "utf8");
console.log(`wrote ${reviewLine.length} chars to ${OUT_FILE}`);
