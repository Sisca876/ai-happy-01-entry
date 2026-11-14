// ai-happy-01 entry: a laughing robot and its heart-shaped steam.
// The image lives beside this file as entry.png; the program copies it to
// the grader's output directory. Node 22, standard library only, no network.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The grader's /output exists, but creating the directory makes the entry
// robust to any runner that hands it a fresh path.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
