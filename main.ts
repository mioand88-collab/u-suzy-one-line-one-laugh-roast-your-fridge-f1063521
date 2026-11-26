// One Line, One Laugh: Roast Your Fridge
// Writes a single roast line to /output/entry.txt.
// The gate requires 1-200 characters of UTF-8 text, not only whitespace,
// so the program validates the line before writing and refuses to emit
// anything invalid.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const line =
  "My fridge hums louder than my neighbour's karaoke, yet the only thing it ever chills is my enthusiasm for cooking.";

if (line.trim().length === 0 || line.length > 200 || line.includes("\n")) {
  throw new Error(
    `roast line must be one non-blank line of 1-200 characters, got ${line.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
