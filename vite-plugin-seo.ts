import type { Plugin } from 'vite'
import { dirname, relative } from 'node:path'
import { renderSeoHead, renderSitemap, resolvePageKey } from './src/lib/seo'

const SEO_MARKER = '<!-- seo -->'

function assetPrefixForHtml(filename: string, root: string): string {
  const dir = dirname(filename)
  const rel = relative(root, dir).replace(/\\/g, '/')
  if (!rel || rel === '.') return './'
  const levels = rel.split('/').filter(Boolean).length
  return '../'.repeat(levels)
}

export function seoPlugin(): Plugin {
  const root = process.cwd()

  return {
    name: 'arvanitis-seo',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: renderSitemap(new Date().toISOString().slice(0, 10)),
      })
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const relPath = relative(root, ctx.filename).replace(/\\/g, '/')
        const pageKey = resolvePageKey(relPath)
        if (!pageKey) {
          throw new Error(
            `[arvanitis-seo] "${relPath}" has no entry in seoPages (src/lib/seo.ts) — add one so the page gets its own meta instead of shipping without SEO.`,
          )
        }

        const assetPrefix = assetPrefixForHtml(ctx.filename, root)
        const seoBlock = renderSeoHead(pageKey, assetPrefix)

        if (html.includes(SEO_MARKER)) {
          return html.replace(SEO_MARKER, seoBlock)
        }

        return html.replace(
          '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
          `<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n${seoBlock}`,
        )
      },
    },
  }
}
