import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import react from '@vitejs/plugin-react'

const root = process.cwd()
const SSR_DIR = resolve(root, '.prerender')
const DIST = resolve(root, 'dist')
const ROOT_DIV = '<div id="root"></div>'

/**
 * Renders every built page to static HTML.
 *
 * Runs as a separate SSR pass because the components import CSS and images,
 * which only Vite can resolve. Without this the shipped <body> is an empty
 * <div id="root">, which AI crawlers read as a blank page since they do not
 * execute JavaScript.
 */
await build({
  root,
  logLevel: 'error',
  plugins: [react()],
  build: {
    ssr: resolve(root, 'src/entry-prerender.tsx'),
    outDir: '.prerender',
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry.mjs' } },
  },
})

const { renderPage, seoPages } = await import(pathToFileURL(join(SSR_DIR, 'entry.mjs')).href)

let rendered = 0
for (const [key, page] of Object.entries(seoPages)) {
  const file = join(DIST, page.path.replace(/^\/|\/$/g, ''), 'index.html')
  if (!existsSync(file)) continue

  const html = await readFile(file, 'utf8')
  if (!html.includes(ROOT_DIV)) continue

  await writeFile(file, html.replace(ROOT_DIV, `<div id="root">${renderPage(key)}</div>`))
  rendered++
}

await rm(SSR_DIR, { recursive: true, force: true })
console.log(`prerender: ${rendered} pages rendered to static HTML`)
