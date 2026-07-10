import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProcessPage from './ProcessPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProcessPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
