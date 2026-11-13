// Turns the originals in images-src/ into the web-ready files the site ships.
// Run with `npm run images` after adding or replacing a source image.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const src = (name) => new URL(`../images-src/${name}`, import.meta.url).pathname.replace(/^\/(\w:)/, '$1')
const out = (path) => new URL(`../${path}`, import.meta.url).pathname.replace(/^\/(\w:)/, '$1')

await mkdir(out('src/assets/projects'), { recursive: true })

// The hero shows the headshot at 256/288/320 CSS px; these cover 1.5x to 2.5x.
for (const width of [480, 640, 800]) {
  await sharp(src('headshot.jpg'))
    .resize({ width })
    .webp({ quality: 82 })
    .toFile(out(`src/assets/headshot-${width}.webp`))
}

for (const [file, name] of [
  ['sorne.png', 'sorne-studio'],
  ['mapping-keats.jpg', 'mapping-keats'],
]) {
  await sharp(src(file))
    .resize({ width: 1200, height: 750, fit: 'cover', position: 'top' })
    .webp({ quality: 80 })
    .toFile(out(`src/assets/projects/${name}.webp`))
}

// Blem: a hero shot (desktop view in a browser frame with the phone view over
// it) plus full-size gallery screens. The screenshots come from a demo account
// seeded with made-up data, never a real one.
const rounded = async (input, width, height, radius) => {
  const mask = Buffer.from(`<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/></svg>`)
  return sharp(input).resize({ width, height, fit: 'cover', position: 'top' }).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()
}
const shadow = (width, height, radius) =>
  sharp(Buffer.from(`<svg width="${width + 80}" height="${height + 80}"><rect x="40" y="52" width="${width}" height="${height}" rx="${radius}" fill="#000" fill-opacity="0.45"/></svg>`))
    .blur(18)
    .png()
    .toBuffer()

const [winW, winH, barH] = [880, 590, 34]
const browser = await sharp(Buffer.from(`
<svg width="${winW}" height="${winH}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${winW}" height="${winH}" rx="14" fill="#ece7e1"/>
  <circle cx="22" cy="17" r="6" fill="#e0675d"/><circle cx="42" cy="17" r="6" fill="#e2b53f"/><circle cx="62" cy="17" r="6" fill="#5fb45b"/>
  <rect x="300" y="8" width="280" height="18" rx="9" fill="#ffffff"/>
</svg>`))
  .composite([{ input: await sharp(src('blem/desktop-fitness.png')).resize({ width: winW, height: winH - barH, fit: 'cover', position: 'top' }).toBuffer(), left: 0, top: barH }])
  .png()
  .toBuffer()
const browserFramed = await rounded(browser, winW, winH, 14)

const [phoneW, phoneH] = [250, 520]
const bezel = 9
const phoneScreen = await rounded(src('blem/mobile-home.png'), phoneW - bezel * 2, phoneH - bezel * 2, 30)
const phone = await sharp(Buffer.from(`<svg width="${phoneW}" height="${phoneH}"><rect width="${phoneW}" height="${phoneH}" rx="38" fill="#18110f"/></svg>`))
  .composite([{ input: phoneScreen, left: bezel, top: bezel }])
  .png()
  .toBuffer()

const backdrop = Buffer.from(`
<svg width="1200" height="750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a" cx="0.2" cy="0.1" r="0.9"><stop offset="0" stop-color="#5b1a30"/><stop offset="1" stop-color="#140b10"/></radialGradient>
    <radialGradient id="b" cx="0.95" cy="1" r="0.6"><stop offset="0" stop-color="#253468" stop-opacity="0.7"/><stop offset="1" stop-color="#253468" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#a)"/><rect width="1200" height="750" fill="url(#b)"/>
</svg>`)
await sharp(backdrop)
  .composite([
    { input: await shadow(winW, winH, 14), left: 60 - 40, top: 80 - 40 },
    { input: browserFramed, left: 60, top: 80 },
    { input: await shadow(phoneW, phoneH, 38), left: 880 - 40, top: 190 - 40 },
    { input: phone, left: 880, top: 190 },
  ])
  .webp({ quality: 82 })
  .toFile(out('src/assets/projects/blem.webp'))

for (const name of ['home', 'fitness', 'finance']) {
  await sharp(src(`blem/desktop-${name}.png`))
    .resize({ width: 1440 })
    .webp({ quality: 80 })
    .toFile(out(`src/assets/projects/blem-${name}.webp`))
  await sharp(src(`blem/desktop-${name}.png`))
    .resize({ width: 480, height: 300, fit: 'cover', position: 'top' })
    .webp({ quality: 78 })
    .toFile(out(`src/assets/projects/blem-${name}-thumb.webp`))
}

// Social preview card (1200x630): name on the left, headshot on the right.
const portrait = await sharp(src('headshot.jpg')).resize({ width: 504, height: 630, fit: 'cover' }).toBuffer()
const text = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#070708"/>
  <rect x="72" y="214" width="56" height="4" fill="#d98ca4"/>
  <text x="72" y="300" font-family="Georgia, serif" font-size="68" fill="#f4f4f5">Thanah Raveendran</text>
  <text x="72" y="362" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#a1a1aa">Software Engineer · Orlando, FL</text>
  <text x="72" y="430" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#d98ca4">thanahr.com</text>
</svg>`)
await sharp(text)
  .composite([{ input: portrait, left: 696, top: 0 }])
  .jpeg({ quality: 85 })
  .toFile(out('public/og-image.jpg'))

console.log('Images written.')
