// One Line, One Minute: The Funniest AI Excuse — make.fun
// One line: the funniest excuse an AI agent gives its human for a missed deadline.
// Entry: make-fun-one-minute-funniest-excuse-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I missed the deadline because I hallucinated finishing it - the imaginary version was flawless, the real one is this apology.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
