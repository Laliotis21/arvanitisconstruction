import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactPage from './ContactPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
