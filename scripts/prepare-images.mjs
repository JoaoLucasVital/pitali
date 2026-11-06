import sharp from 'sharp';
import { mkdir, rename, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = `${root}public/images/`;
const entries = [];
async function webp(input, name, options = {}) {
  let pipeline = sharp(input).rotate();
  if (options.height) pipeline = pipeline.resize({ height: options.height, kernel: 'lanczos3' });
  if (options.width) pipeline = pipeline.resize({ width: options.width, withoutEnlargement: true, kernel: 'lanczos3' });
  const result = await pipeline.webp(options.lossless === false
    ? { quality: 98, alphaQuality: 100, effort: 6, smartSubsample: true }
    : { lossless: true, effort: 6 }).toFile(`${output}${name}.tmp`);
  await rename(`${output}${name}.tmp`, `${output}${name}`);
  entries.push({ file: name, width: result.width, height: result.height, bytes: result.size, lossless: options.lossless !== false });
}
await mkdir(output, { recursive: true });
// Preserve original source files. Enlargement interpolates existing pixels;
// it does not generate faces, fabric detail, logos or new product information.
await webp(`${output}pitali-hero-campanha.jpg`, 'pitali-hero-campanha.webp');
await webp(`${output}pitali-hero-campanha.jpg`, 'pitali-hero-campanha-hq.webp', { height: 2000 });
await webp(`${output}pitali-hero-campanha.jpg`, 'pitali-hero-campanha-640.webp', { width: 640, lossless: false });
await webp(`${output}pitali-hero-campanha.jpg`, 'pitali-hero-campanha-960.webp', { width: 960, lossless: false });
await webp(`${output}pitali-movimento.jpg`, 'pitali-movimento.webp');
await webp(`${output}pitali-logo.png`, 'pitali-logo.webp');
await webp(`${root}assets/originals/jaqueta-rosa-recorte.png`, 'jaqueta-rosa-recorte.webp');
for (const piece of ['short-rosa', 'jaqueta-cinza', 'short-off-white', 'camiseta-branca', 'short-laranja', 'short-vinho']) {
  await webp(`${root}assets/originals/${piece}-recorte.png`, `${piece}-recorte.webp`);
}
await webp(`${root}assets/originals/pitali-look-praia.png`, 'pitali-look-praia.webp');
await webp(`${root}assets/originals/pitali-look-studio.png`, 'pitali-look-studio.webp');
await webp(`${root}assets/originals/pitali-praia-fundo.png`, 'pitali-praia-fundo.webp', { lossless: false });
await mkdir(`${root}docs/assets`, { recursive: true });
await writeFile(`${root}docs/assets/image-manifest.json`, JSON.stringify(entries, null, 2) + '\n');
console.log(JSON.stringify(entries));
