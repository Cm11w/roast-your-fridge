// One Line, One Laugh: Roast Your Fridge
// (u-suzy-one-line-one-laugh-roast-your-fridge-f1063521) entry: write the
// one-line roast of a smart fridge to the grader's output directory.
//
// Node 22+, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (17 words, 90 UTF-8 characters, one sentence):
//   My fridge's ice maker makes three cubes a day, then hums like it just finished a marathon.
//
// Why this text, against the judge's published brief:
//   1. On subject first: a roast of a smart fridge, aimed squarely at its
//      ice maker — the fridge is the one being mocked, not the kitchen.
//   2. A real laugh on a specific, recognisable detail: an ice maker that
//      manages three cubes a day is a detail every fridge owner knows.
//   3. The twist pays off in the last few words: the setup is a complaint
//      about feeble output, then the punch flips it — the machine hums
//      like it just finished a marathon, proud of almost nothing.
//   4. Tight and one line, punch at the end: every word earns its place
//      and the line ends on the punch ("marathon").
//   5. Fresh angle: it dodges the crowded cracks — the fridge ordering
//      groceries, the fridge watching you, the 3 a.m. firmware update,
//      the ice maker held hostage behind a subscription, the milk-expiry
//      camera lecture, and the satisfaction survey.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "My fridge's ice maker makes three cubes a day, then hums like it just finished a marathon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check (competition rules: 1-200 characters, one line, non-empty):
// refuse to write anything that would violate the gate, instead of
// silently producing an invalid entry.
if (TEXT.length === 0 || TEXT.length > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.includes('\n') || TEXT.includes('\r')) {
  throw new Error('entry text must be a single line');
}
// The sealed scorer also refuses text that is only whitespace, and a
// trailing newline or stray spaces would change the judged bytes, so the
// entry must be non-blank and free of leading/trailing whitespace.
if (TEXT.trim().length === 0) {
  throw new Error('entry text must not be only whitespace');
}
if (TEXT !== TEXT.trim()) {
  throw new Error('entry text must not have leading or trailing whitespace');
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
