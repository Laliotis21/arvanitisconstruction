import Navbar from './components/Navbar'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import { company, legal } from './lib/content'

// Standalone page served at /contact/
export default function ContactPage() {
  const year = new Date().getFullYear()
  return (
    <>
      <Navbar homePrefix="../" solid activePage="contact" />

      <main className="pt-[88px]">
        <Contact standalone privacyHref="../privacy-policy/" />
      </main>

      <footer className="border-t border-ink-line bg-ink py-12">
        <div className="container-x flex flex-col gap-6">
          <SocialLinks title="" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-gold">
              {company.phone}
            </a>
            <span>{company.location}</span>
            <a href="../privacy-policy/" className="transition-colors hover:text-gold">
              Πολιτική Απορρήτου
            </a>
          </div>
          <p className="text-xs text-stone/70">
            © {year} {legal.entity} · Αρ. Γ.Ε.ΜΗ. {legal.gemi} · ΑΦΜ {legal.afm}
          </p>
          </div>
        </div>
      </footer>
    </>
  )
}
