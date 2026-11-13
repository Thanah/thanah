/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { HEADSHOT_SIZES } from './src/data/headshot.ts'

// The hero photo (the Largest Contentful Paint) and the headshot are rendered
// by React, so the browser only finds them after the JS runs. Preloading the
// hashed build files from index.html starts the downloads with the first HTML
// bytes. Each entry is a file-name prefix and the `sizes` its <img> uses.
const preloads = [
  { prefix: 'alpine-lake-driftwood', sizes: '100vw' },
  { prefix: 'headshot', sizes: HEADSHOT_SIZES },
]

function preloadHeroImages(): Plugin {
  return {
    name: 'preload-hero-images',
    apply: 'build',
    transformIndexHtml(_html, ctx) {
      const names = Object.keys(ctx.bundle ?? {})
      return preloads.flatMap(({ prefix, sizes }) => {
        const files = names
          .map((file) => ({ file, width: new RegExp(`/${prefix}-(\\d+)-[\\w-]+\\.webp$`).exec(`/${file}`)?.[1] }))
          .filter((f): f is { file: string; width: string } => !!f.width)
          .sort((a, b) => Number(a.width) - Number(b.width))
        if (files.length === 0) return []
        return [
          {
            tag: 'link',
            injectTo: 'head' as const,
            attrs: {
              rel: 'preload',
              as: 'image',
              type: 'image/webp',
              fetchpriority: 'high',
              imagesrcset: files.map((f) => `/${f.file} ${f.width}w`).join(', '),
              imagesizes: sizes,
            },
          },
        ]
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadHeroImages()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
