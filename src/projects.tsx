import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectsPage from './ProjectsPage'
import CookieBanner from './components/CookieBanner'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectsPage />
    <CookieBanner privacyHref="../privacy-policy/" />
  </StrictMode>,
)
