import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { company, legal, nav, services, projectsPath, servicesPath } from '../lib/content'
import { analyticsEnabled, resetConsent } from '../lib/analytics'

type Props = {
  /** Prefix for internal links on subpages, e.g. `../` from /contact/ */
  homePrefix?: string
}

function resolveHref(href: string, homePrefix: string) {
  return `${homePrefix}${href}`
}

export default function Footer({ homePrefix = '' }: Props) {
  const year = new Date().getFullYear()
  const logoHref = homePrefix ? `${homePrefix}` : '#home'

  return (
    <footer className="border-t border-ink-line bg-ink py-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo href={logoHref} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
              Σχεδιάζουμε χώρους, δημιουργούμε εμπιστοσύνη, παραδίδουμε ποιότητα. Θήβα, Βοιωτίας.
            </p>
            <p className="mt-6 font-display text-2xl italic text-gold">{company.taglineEn}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-stone">
              <a href={`mailto:${company.email}`} className="w-fit transition-colors hover:text-gold">
                {company.email}
              </a>
              <a href={`tel:${company.phoneHref}`} className="w-fit transition-colors hover:text-gold">
                {company.phone}
              </a>
            </div>
            <SocialLinks className="mt-8" />
          </div>

          <nav className="md:col-span-2" aria-label="Πλοήγηση">
            <p className="text-xs uppercase tracking-wide2 text-stone">Πλοήγηση</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={resolveHref(n.href, homePrefix)}
                    className="text-bone/90 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resolveHref(projectsPath, homePrefix)}
                  className="text-bone/90 transition-colors hover:text-gold"
                >
                  Όλα τα Έργα
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wide2 text-stone">Υπηρεσίες</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`${resolveHref(servicesPath, homePrefix)}#${s.id}`}
                    className="text-bone/90 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-wide2 text-stone">Εταιρικά Στοιχεία</p>
            <ul className="mt-5 space-y-3 text-sm text-stone">
              <li className="font-medium text-bone/90">{legal.entity}</li>
              <li>Αρ. Γ.Ε.ΜΗ. {legal.gemi}</li>
              <li>
                ΑΦΜ {legal.afm} · Δ.Ο.Υ. {legal.doy}
              </li>
              <li>Έδρα: {legal.seat}</li>
              <li>
                <a
                  href={resolveHref('financial-statements/', homePrefix)}
                  className="inline-flex items-center gap-2 text-bone/90 transition-colors hover:text-gold"
                >
                  Οικονομικά Στοιχεία &amp; Ισολογισμοί
                  <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone/70">
            © {year} {legal.entity} — Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone">
            <a
              href={resolveHref('privacy-policy/', homePrefix)}
              className="transition-colors hover:text-gold"
            >
              Πολιτική Απορρήτου
            </a>
            {analyticsEnabled && (
              <button
                type="button"
                onClick={() => {
                  resetConsent()
                  window.location.reload()
                }}
                className="cursor-pointer transition-colors hover:text-gold"
              >
                Ρυθμίσεις cookies
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
