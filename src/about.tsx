import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutPage from './AboutPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
