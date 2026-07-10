import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import CookieBanner from '../components/CookieBanner'
import '../index.css'

/** Shared entry-point shell — every page mounts through here. */
export function mountPage(Page: ComponentType, privacyHref = '../privacy-policy/') {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Page />
      <CookieBanner privacyHref={privacyHref} />
    </StrictMode>,
  )
}
