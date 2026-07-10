import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { company, legal, nav, services, projectsPath } from '../lib/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-line bg-ink py-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
              Σχεδιάζουμε χώρους, δημιουργούμε εμπιστοσύνη, παραδίδουμε ποιότητα. Θήβα, Βοιωτίας.
            </p>
            <p className="mt-6 font-display text-2xl italic text-gold">{company.taglineEn}</p>
            <SocialLinks className="mt-8" />
          </div>

          <nav className="md:col-span-3" aria-label="Πλοήγηση">
            <p className="text-xs uppercase tracking-wide2 text-stone">Πλοήγηση</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-bone/90 transition-colors hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-wide2 text-stone">Υπηρεσίες</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-bone/90 transition-colors hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-gold">
              {company.phone}
            </a>
            <span>{company.location}</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href={projectsPath}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-bone/90 transition-colors hover:text-gold"
            >
              Όλα τα Έργα
              <span aria-hidden>→</span>
            </a>
            <a
              href="financial-statements/"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-bone/90 transition-colors hover:text-gold"
            >
              Οικονομικά Στοιχεία &amp; Ισολογισμοί
              <span aria-hidden>→</span>
            </a>
            <a
              href="privacy-policy/"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-bone/90 transition-colors hover:text-gold"
            >
              Πολιτική Απορρήτου
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-stone/70">
          © {year} {legal.entity} · Αρ. Γ.Ε.ΜΗ. {legal.gemi} · ΑΦΜ {legal.afm}
        </p>
      </div>
    </footer>
  )
}
