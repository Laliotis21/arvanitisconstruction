import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ServiceIcon, ArrowUpRight, Check } from './components/Icons'
import { Reveal, RevealGroup, RevealItem } from './components/ui/Reveal'
import { process, projectsPath, services, servicesPage } from './lib/content'
import { photos, projectImages } from './lib/photos'

// Standalone page served at /services/
export default function ServicesPage() {
  return (
    <>
      <Navbar homePrefix="../" solid activePage="services" />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="relative min-h-[min(72vh,720px)] overflow-hidden border-b border-ink-line">
          <img
            src={projectImages.p2}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/60" />
          <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[140px]" />

          <div className="container-x relative z-10 flex min-h-[min(72vh,720px)] flex-col justify-center py-20 md:py-28">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                {servicesPage.eyebrow}
              </p>
              <h1 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-6xl lg:text-[4rem]">
                {servicesPage.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone/90">
                {servicesPage.heroLead}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  ['5', 'εξειδικεύσεις'],
                  ['Μελέτη →', 'παράδοση'],
                  ['Turnkey', 'λύσεις'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[2px] border border-bone/10 bg-ink/45 px-5 py-3 backdrop-blur-sm"
                  >
                    <p className="font-display text-2xl text-bone">{value}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-wide2 text-stone">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <RevealGroup className="mt-12 flex flex-wrap gap-3">
              {services.map((s) => (
                <RevealItem key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-bone/10 bg-ink/45 px-5 py-2.5 text-sm font-medium text-stone backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-bone"
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

        {/* Service sections */}
        {services.map((s, i) => {
          const flip = i % 2 === 1
          const soft = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-b border-ink-line py-20 md:py-28 ${soft ? 'bg-ink-soft' : ''}`}
            >
              <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <p className="eyebrow">
                    <span className="h-px w-8 bg-gold" />
                    0{i + 1} — {s.tagline}
                  </p>
                  <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-ink-line text-gold">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">{s.title}</h2>
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

                  <a href="../contact/" className="btn-gold mt-9">
                    Ζητήστε προσφορά <ArrowUpRight />
                  </a>
                </Reveal>

                <Reveal delay={0.1} className={`relative ${flip ? 'lg:order-1' : ''}`}>
                  <div
                    aria-hidden
                    className={`absolute hidden h-full w-full rounded-[2px] border border-gold/25 lg:block ${
                      flip ? '-right-4 -top-4' : '-left-4 -top-4'
                    }`}
                  />
                  <div className="relative overflow-hidden rounded-[2px] border border-ink-line bg-ink-card">
                    <img
                      src={photos[s.image]}
                      alt={s.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-[4/3]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  </div>
                  <span className="pointer-events-none absolute -top-6 right-4 font-display text-[6rem] leading-none text-bone/[0.04]">
                    0{i + 1}
                  </span>
                </Reveal>
              </div>
            </section>
          )
        })}

        {/* How we work */}
        <section className="border-b border-ink-line py-20 md:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                Πώς δουλεύουμε
              </p>
              <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                Από την ιδέα, <span className="gold-text">στο κλειδί στο χέρι.</span>
              </h2>
            </Reveal>

            <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-ink-line sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <RevealItem key={step.n}>
                  <div className="h-full bg-ink-card p-8">
                    <p className="font-display text-4xl text-gold/60">{step.n}</p>
                    <h3 className="mt-4 font-display text-2xl text-bone">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden border-t border-ink-line bg-ink-soft py-24 md:py-32">
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
                Πείτε μας για το όραμά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών με τα
                επόμενα βήματα.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a href="../contact/" className="btn-gold">
                  Ζητήστε προσφορά <ArrowUpRight />
                </a>
                <a href={`../${projectsPath}`} className="btn-ghost">
                  Δείτε τα έργα μας <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer homePrefix="../" />
    </>
  )
}
