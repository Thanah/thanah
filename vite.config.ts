/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { HEADSHOT_SIZES } from './src/data/headshot.ts'

// The headshot is the Largest Contentful Paint, but React renders it, so the
// browser only finds it after the JS runs. Preloading the hashed build files
// from index.html lets the download start with the first HTML bytes.
function preloadHeadshot(): Plugin {
  return {
    name: 'preload-headshot',
    apply: 'build',
    transformIndexHtml(html, ctx) {
      const files = Object.keys(ctx.bundle ?? {})
        .map((file) => ({ file, width: /headshot-(\d+)-[\w-]+\.webp$/.exec(file)?.[1] }))
        .filter((f): f is { file: string; width: string } => !!f.width)
        .sort((a, b) => Number(a.width) - Number(b.width))
      if (files.length === 0) return html
      return [
        {
          tag: 'link',
          injectTo: 'head',
          attrs: {
            rel: 'preload',
            as: 'image',
            type: 'image/webp',
            fetchpriority: 'high',
            imagesrcset: files.map((f) => `/${f.file} ${f.width}w`).join(', '),
            imagesizes: HEADSHOT_SIZES,
          },
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadHeadshot()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
