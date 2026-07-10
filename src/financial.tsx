import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FinancialPage from './FinancialPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FinancialPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
