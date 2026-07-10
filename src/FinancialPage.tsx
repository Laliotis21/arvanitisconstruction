import Logo from './components/Logo'
import Financial from './components/Financial'
import { company, legal } from './lib/content'
import { ArrowRight } from './components/Icons'

// Standalone page served at /financial-statements/ — mirrors the old site.
export default function FinancialPage() {
  const year = new Date().getFullYear()
  return (
    <>
      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/85 backdrop-blur-xl">
        <div className="container-x flex h-[88px] items-center justify-between">
          <Logo href="../" />
          <a
            href="../"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone transition-colors hover:text-gold"
          >
            <span aria-hidden className="rotate-180">
              <ArrowRight />
            </span>
            Επιστροφή στην αρχική
          </a>
        </div>
      </header>

      <main>
        <Financial />
      </main>

      {/* Slim footer */}
      <footer className="border-t border-ink-line bg-ink py-12">
        <div className="container-x flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      </footer>
    </>
  )
}
