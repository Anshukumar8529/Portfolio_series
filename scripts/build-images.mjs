import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Use high quality cutout from public/assets/test-cutout.png
for (const w of [1100, 720, 420]) {
  await sharp('public/assets/test-cutout.png')
    .resize({ width: w })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

await sharp('public/assets/test-cutout.png').toFile('pic.png');
await sharp('public/assets/photo.jpg').jpeg({ quality: 95 }).toFile('pic1.jpeg');

// Social share image (1200x630) on a cinematic backdrop
const portrait = await sharp('public/assets/test-cutout.png').resize({ height: 560 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
      top: 0,
      left: 0,
    },
    { input: portrait, top: 70, left: 740 },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="260" font-family="Impact, Arial Narrow, sans-serif" font-size="120" fill="#f4f1ec" letter-spacing="4">ANSHU</text>
        <text x="76" y="312" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="76" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="3">MACHINE LEARNING • JAVA &amp; PYTHON • FULL-STACK</text>
        <text x="76" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="15" fill="#71717a" letter-spacing="2">LOVELY PROFESSIONAL UNIVERSITY (CGPA: 7.43)</text>
      </svg>`),
      top: 0,
      left: 0,
    },
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Anshu Kumar portraits and assets built successfully!');
