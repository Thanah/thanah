// Turns the originals in images-src/ into the web-ready files the site ships.
// Run with `npm run images` after adding or replacing a source image.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const src = (name) => new URL(`../images-src/${name}`, import.meta.url).pathname.replace(/^\/(\w:)/, '$1')
const out = (path) => new URL(`../${path}`, import.meta.url).pathname.replace(/^\/(\w:)/, '$1')

await mkdir(out('src/assets/projects'), { recursive: true })

for (const width of [400, 800]) {
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

// Social preview card (1200x630): name on the left, headshot on the right.
const portrait = await sharp(src('headshot.jpg')).resize({ width: 504, height: 630, fit: 'cover' }).toBuffer()
const text = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#070708"/>
  <rect x="72" y="214" width="56" height="4" fill="#5eead4"/>
  <text x="72" y="300" font-family="Georgia, serif" font-size="68" fill="#f4f4f5">Thanah Raveendran</text>
  <text x="72" y="362" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#a1a1aa">Software Engineer · Orlando, FL</text>
  <text x="72" y="430" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#5eead4">thanahr.com</text>
</svg>`)
await sharp(text)
  .composite([{ input: portrait, left: 696, top: 0 }])
  .jpeg({ quality: 85 })
  .toFile(out('public/og-image.jpg'))

console.log('Images written.')
