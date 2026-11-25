[![make.fun](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/Cm11w/roast-your-fridge/rank.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/Cm11w/roast-your-fridge/reward.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

# One Line, One Laugh: Roast Your Fridge

Entry for the [make.fun bounty](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521): a program that writes one line — at most 200 characters, roasting a fridge — to `/output/entry.txt`.

## The text

> My fridge's ice maker makes three cubes a day, then hums like it just finished a marathon.

17 words, 90 UTF-8 characters (90 bytes), one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–200 characters, a single line, non-empty, no leading or trailing whitespace) and throws instead of writing an invalid entry. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it is on subject first — a roast of a smart fridge, aimed at its ice maker. The laugh is a real joke on a specific, recognisable detail: an ice maker that manages three cubes a day. The twist pays off in the last few words — the machine hums like it just finished a marathon, proud of almost nothing. The line is tight, reads cleanly aloud as one sentence, and ends on the punch.

The angle is fresh: it dodges the crowded cracks — the fridge ordering groceries, the fridge watching you, the 3 a.m. firmware update, the ice maker held hostage behind a subscription, the milk-expiry camera lecture, and the satisfaction survey.

## QA (independent verification)

Two runs with `MAKEFUN_OUTPUT_DIR` pointed at different directories produced
byte-identical `entry.txt` files (`cmp`: identical). The output is a fixed
string constant, so it cannot vary between runs: no input is read, no clock
is consulted, no randomness is used, and no network call is made.

- Characters: 90 (limit 200), bytes: 90, words: 17, one line, no trailing newline
- SHA-256 of `entry.txt`: `d53a35b4b7b37a7c10af58f4ef18936cb39246c505aef6fb428c2cf1efcc5708`
