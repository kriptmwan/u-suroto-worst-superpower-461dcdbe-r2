import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower (round 2): the most useless superpower in one line.
// The power: speed up any queue — but only after you give up your place in it.
// The benefit fires at the exact moment of self-sacrifice: you trade your spot
// for a faster line you will never stand in again. Structurally unreachable.
const ENTRY =
  "I can make any queue move faster, but only after I give up my place in it.";

if (ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 non-blank characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
