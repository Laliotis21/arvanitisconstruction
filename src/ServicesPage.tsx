import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageHero from './components/PageHero'
import ClosingCTA from './components/ClosingCTA'
import { ServiceIcon, ArrowUpRight, Check } from './components/Icons'
import { Reveal, RevealItem } from './components/ui/Reveal'
import { services, servicesPage } from './lib/content'
import { photos, projectImages } from './lib/photos'

// Standalone page served at /services/
export default function ServicesPage() {
  return (
    <>
      <Navbar homePrefix="../" solid activePage="services" />

      <main className="pt-[88px]">
        {/* Hero */}
        <PageHero
          image={projectImages.p2}
          eyebrow={servicesPage.eyebrow}
          title={servicesPage.title}
          lead={servicesPage.heroLead}
          badges={[
            ['5', 'εξειδικεύσεις'],
            ['Μελέτη →', 'παράδοση'],
            ['Turnkey', 'λύσεις'],
          ]}
        >
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
        </PageHero>

        {/* Service sections */}
        {services.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <section
              key={s.id}
              id={s.id}
              className={`scroll-mt-24 border-b border-ink-line py-20 md:py-28 ${flip ? 'bg-ink-soft' : ''}`}
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

        {/* Closing CTA */}
        <ClosingCTA
          title={
            <>
              Έχετε ένα έργο <span className="gold-text">στο μυαλό σας;</span>
            </>
          }
        />
      </main>

      <Footer homePrefix="../" />
    </>
  )
}
