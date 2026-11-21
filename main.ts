import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const srcPath = resolve(BOT_DIR, 'POST.json');
const destPath = resolve(OUTPUT_DIR, 'POST.json');

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  cpSync(srcPath, destPath);
  console.log(`Copied POST.json to ${destPath}`);
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy POST.json from ${srcPath} to ${destPath}: ${message}`);
  process.exit(1);
}
