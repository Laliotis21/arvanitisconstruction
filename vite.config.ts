import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { existsSync, readdirSync } from 'node:fs'
import { seoPlugin } from './vite-plugin-seo'

// Every top-level directory with an index.html is a page entry — new pages
// are picked up automatically, no config edit needed.
const NON_PAGE_DIRS = new Set(['dist', 'node_modules', 'public'])
const pageDirs = readdirSync(process.cwd(), { withFileTypes: true })
  .filter(
    (d) =>
      d.isDirectory() &&
      !NON_PAGE_DIRS.has(d.name) &&
      existsSync(resolve(process.cwd(), d.name, 'index.html')),
  )
  .map((d) => d.name)

// Relative base so the static build runs from any Hostinger subfolder or root.
export default defineConfig({
  base: './',
  plugins: [react(), seoPlugin()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        ...Object.fromEntries(
          pageDirs.map((name) => [name, resolve(process.cwd(), name, 'index.html')]),
        ),
      },
    },
  },
})
