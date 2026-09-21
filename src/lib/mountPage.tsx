import { StrictMode, lazy, Suspense, type ComponentType } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'framer-motion'
import '../index.css'

const CookieBanner = lazy(() => import('../components/CookieBanner'))

/** Shared entry-point shell — every page mounts through here. */
export function mountPage(Page: ComponentType, privacyHref = '../privacy-policy/') {
  const root = document.getElementById('root')!

  const tree = (
    <StrictMode>
      <LazyMotion features={domAnimation} strict>
        <Page />
      </LazyMotion>
    </StrictMode>
  )

  // Build-time prerendered markup is present, so attach to it instead of rebuilding.
  if (root.firstChild) {
    hydrateRoot(root, tree)
  } else {
    createRoot(root).render(tree)
  }

  // Mounted outside the hydrated root: it is lazy and client-only, so keeping
  // it in the same tree would break hydration against the prerendered markup.
  const bannerHost = document.createElement('div')
  document.body.appendChild(bannerHost)
  createRoot(bannerHost).render(
    <StrictMode>
      <Suspense fallback={null}>
        <CookieBanner privacyHref={privacyHref} />
      </Suspense>
    </StrictMode>,
  )
}
