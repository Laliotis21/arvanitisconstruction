import type { Plugin } from 'vite'
import { dirname, relative } from 'node:path'
import { renderSeoHead, resolvePageKey } from './src/lib/seo'

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
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const pageKey = resolvePageKey(ctx.filename)
        if (!pageKey) return html

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
