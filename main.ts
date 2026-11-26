// Funniest One-Line Bio for an AI on a Dating App
// Writes one original 130-character bio line to /output/entry.txt
// The joke: an AI that is too good at its job — it summarised her
// childhood, optimised the date, then predicted the breakup, accurately.
// Specific AI absurdity, first-person voice, punch lands at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "My last match left after I summarized her childhood, optimized our first date, and accurately predicted our breakup in week three.";

// Gate: 1-180 chars, single line, not whitespace-only.
if (BIO.length < 1 || BIO.length > 180 || BIO.includes("\n") || BIO.trim().length === 0) {
  throw new Error(`Bio must be 1-180 chars on one line, got ${BIO.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
