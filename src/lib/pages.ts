import type { ComponentType } from 'react'
import App from '../App'
import AboutPage from '../AboutPage'
import ServicesPage from '../ServicesPage'
import ProjectsPage from '../ProjectsPage'
import ProcessPage from '../ProcessPage'
import ContactPage from '../ContactPage'
import FinancialPage from '../FinancialPage'
import PrivacyPage from '../PrivacyPage'
import type { SeoPageKey } from './seo'

/** Single source of truth for which component renders which route. */
export const pageComponents: Record<SeoPageKey, ComponentType> = {
  main: App,
  about: AboutPage,
  services: ServicesPage,
  projects: ProjectsPage,
  process: ProcessPage,
  contact: ContactPage,
  financial: FinancialPage,
  privacy: PrivacyPage,
}
