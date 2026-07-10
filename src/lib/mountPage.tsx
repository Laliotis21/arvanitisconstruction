import { StrictMode, lazy, Suspense, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'framer-motion'
import '../index.css'

const CookieBanner = lazy(() => import('../components/CookieBanner'))

/** Shared entry-point shell — every page mounts through here. */
export function mountPage(Page: ComponentType, privacyHref = '../privacy-policy/') {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LazyMotion features={domAnimation} strict>
        <Page />
        <Suspense fallback={null}>
          <CookieBanner privacyHref={privacyHref} />
        </Suspense>
      </LazyMotion>
    </StrictMode>,
  )
}
