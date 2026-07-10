import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ServicesPage from './ServicesPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServicesPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
