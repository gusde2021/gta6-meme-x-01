import { cpSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(outputDir, { recursive: true });
  cpSync(resolve(botDir, 'POST.json'), resolve(outputDir, 'POST.json'));
} catch (error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy POST.json from ${botDir} to ${outputDir}: ${message}`);
  process.exit(1);
}
