import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { LazyMotion, domAnimation } from 'framer-motion'
import { pageComponents } from './lib/pages'
import { seoPages, type SeoPageKey } from './lib/seo'

export { seoPages }

/** Build-time only: used by scripts/prerender.mjs to inline static markup. */
export function renderPage(key: SeoPageKey): string {
  return renderToString(
    createElement(
      LazyMotion,
      { features: domAnimation, strict: true },
      createElement(pageComponents[key]),
    ),
  )
}
