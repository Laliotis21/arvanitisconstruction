import Logo from './components/Logo'
import { ServiceIcon, ArrowRight, ArrowUpRight, Check } from './components/Icons'
import { Reveal, RevealGroup, RevealItem } from './components/ui/Reveal'
import { company, legal, services } from './lib/content'
import { photos } from './lib/photos'

// Standalone page served at /services/ — detailed breakdown of every service.
export default function ServicesPage() {
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
        {/* Hero / overview */}
        <section className="relative overflow-hidden border-b border-ink-line bg-ink-soft py-24 md:py-32">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                Οι υπηρεσίες μας
              </p>
              <h1 className="heading-display mt-6 text-4xl md:text-6xl lg:text-[4rem]">
                Ένας συνεργάτης,<br />
                <span className="gold-text">κάθε στάδιο του έργου.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone">
                Από την πρώτη μελέτη έως το κλειδί στο χέρι, καλύπτουμε κάθε ανάγκη της
                κατασκευής με τεχνική αρτιότητα, premium υλικά και απόλυτη συνέπεια στον χρόνο.
              </p>
            </Reveal>

            {/* Quick nav to each service */}
            <RevealGroup className="mt-12 flex flex-wrap gap-3">
              {services.map((s) => (
                <RevealItem key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-ink-card px-5 py-2.5 text-sm font-medium text-stone transition-all duration-300 hover:border-gold/60 hover:text-bone"
                  >
                    <span className="text-gold">
                      <ServiceIcon name={s.icon} width={18} height={18} />
                    </span>
                    {s.title}
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Detailed service sections */}
        {services.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-b border-ink-line py-20 md:py-28"
            >
              <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Text */}
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <p className="eyebrow">
                    <span className="h-px w-8 bg-gold" />
                    0{i + 1} — {s.tagline}
                  </p>
                  <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-ink-line text-gold">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                    {s.title}
                  </h2>
                  {s.long.map((p, j) => (
                    <p key={j} className="mt-5 text-[1.02rem] leading-relaxed text-stone">
                      {p}
                    </p>
                  ))}

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.95rem] text-bone/90">
                        <span className="mt-0.5 shrink-0 text-gold">
                          <Check />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="../contact/"
                    className="btn-gold mt-9"
                  >
                    Ζητήστε προσφορά <ArrowUpRight />
                  </a>
                </Reveal>

                {/* Image */}
                <Reveal
                  delay={0.1}
                  className={`relative ${flip ? 'lg:order-1' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-[3px] border border-ink-line">
                    <img
                      src={photos[s.image]}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-[4/3]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </div>
                  <span className="pointer-events-none absolute -top-6 right-4 font-display text-[6rem] leading-none text-bone/[0.04]">
                    0{i + 1}
                  </span>
                </Reveal>
              </div>
            </section>
          )
        })}

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                <span className="h-px w-8 bg-gold" />
                Ας μιλήσουμε
                <span className="h-px w-8 bg-gold" />
              </p>
              <h2 className="heading-display mt-6 text-3xl md:text-5xl">
                Έχετε ένα έργο <span className="gold-text">στο μυαλό σας;</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
                Πείτε μας για το όραμά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών με τα επόμενα βήματα.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a href="../contact/" className="btn-gold">
                  Ζητήστε προσφορά <ArrowUpRight />
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn-ghost">
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
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
