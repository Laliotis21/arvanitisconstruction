import { financial, financials, legal } from '../lib/content'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { Download, Doc, Shield } from './Icons'

const identity = [
  { k: 'Επωνυμία', v: legal.entity },
  { k: 'Αρ. Γ.Ε.ΜΗ.', v: legal.gemi },
  { k: 'Α.Φ.Μ.', v: legal.afm },
  { k: 'Δ.Ο.Υ.', v: legal.doy },
  { k: 'Έδρα', v: legal.seat },
  { k: 'Εταιρικό Κεφάλαιο', v: legal.capital },
]

export default function Financial() {
  return (
    <section id="financial" className="relative py-28 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Left: intro + legal identity */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              {financial.eyebrow}
            </p>
            <h2 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-5xl">
              {financial.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{financial.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-[2px] border border-ink-line bg-ink-card p-7">
              <div className="flex items-center gap-3 text-gold">
                <Shield />
                <span className="text-xs font-semibold uppercase tracking-wide2">Στοιχεία εταιρείας</span>
              </div>
              <dl className="mt-6 space-y-3.5">
                {identity.map((row) => (
                  <div key={row.k} className="flex flex-col gap-0.5 border-b border-ink-line/60 pb-3.5 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="text-xs uppercase tracking-wide2 text-stone">{row.k}</dt>
                    <dd className="text-[0.95rem] text-bone sm:text-right">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-stone/80">{legal.manager}</p>
            </div>
          </Reveal>
        </div>

        {/* Right: downloadable balance sheets */}
        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-wide2 text-stone">Δημοσιευμένοι ισολογισμοί</p>
          </Reveal>

          <RevealGroup className="mt-6 space-y-4">
            {financials.map((doc) => {
              const live = doc.href !== '#'
              return (
                <RevealItem key={doc.year}>
                  <a
                    href={doc.href}
                    {...(live ? { target: '_blank', rel: 'noopener noreferrer', download: true } : { 'aria-disabled': true })}
                    onClick={(e) => {
                      if (!live) e.preventDefault()
                    }}
                    className={`group flex items-center gap-5 rounded-[2px] border border-ink-line bg-ink-card p-6 transition-all duration-500 ${
                      live ? 'cursor-pointer hover:border-gold/50 hover:shadow-card' : 'cursor-not-allowed opacity-70'
                    }`}
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink-line text-gold transition-colors duration-500 group-hover:border-gold/60 group-hover:bg-gold/5">
                      <Doc />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-baseline gap-3">
                        <span className="font-display text-3xl gold-text">{doc.year}</span>
                        <span className="text-[0.7rem] uppercase tracking-wide2 text-stone">Χρήση</span>
                      </span>
                      <span className="mt-1 block text-[0.95rem] text-bone">{doc.title}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide2 text-gold">
                      {live ? 'Λήψη PDF' : 'Σύντομα'}
                      {live && <Download />}
                    </span>
                  </a>
                </RevealItem>
              )
            })}
          </RevealGroup>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xs leading-relaxed text-stone/70">
              Οι οικονομικές καταστάσεις δημοσιεύονται σύμφωνα με τις διατάξεις περί δημοσιότητας του Γ.Ε.ΜΗ.
              Για επίσημα αντίγραφα επισκεφθείτε το{' '}
              <a href="https://www.businessregistry.gr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                Γ.Ε.ΜΗ.
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
