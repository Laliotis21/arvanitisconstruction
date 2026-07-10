import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrivacyPage from './PrivacyPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
    <CookieBanner privacyHref="./" />
  </StrictMode>,
)
