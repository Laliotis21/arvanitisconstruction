import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ArrowUpRight, Check } from './components/Icons'
import { Reveal, RevealGroup, RevealItem } from './components/ui/Reveal'
import { Counter } from './components/ui/Counter'
import { about, company, founderManifesto, founderStatement, projectsPath, stats } from './lib/content'
import { photos } from './lib/photos'
import founderManifestoImg from './assets/founder-manifesto.png'

const highlights = ['Premium υλικά', 'Άψογη εκτέλεση', 'Συνέπεια στον χρόνο', 'Προσοχή στη λεπτομέρεια']

// Standalone page served at /about/
export default function AboutPage() {
  return (
    <>
      <Navbar homePrefix="../" solid activePage="about" />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="relative min-h-[min(72vh,720px)] overflow-hidden border-b border-ink-line">
          <img
            src={photos.p9519}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/65" />
          <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[140px]" />

          <div className="container-x relative z-10 flex min-h-[min(72vh,720px)] items-center py-20 md:py-28">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                Η εταιρεία
              </p>
              <h1 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-6xl lg:text-[4rem]">
                {about.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone/90">{about.heroLead}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  ['10+', 'χρόνια εμπειρίας'],
                  ['500+', 'ολοκληρωμένα έργα'],
                  [company.location, 'έδρα'],
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
          </div>
        </section>

        {/* Founder — authentic print at HQ */}
        <section id="founder" className="scroll-mt-24 border-b border-ink-line py-20 md:py-28">
          <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative lg:sticky lg:top-28">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2px] border border-gold/25 lg:block"
              />
              <figure className="relative overflow-hidden rounded-[2px] border border-ink-line bg-bone/95 p-3 shadow-card md:p-4">
                <img
                  src={founderManifestoImg}
                  alt={about.founder.imageAlt}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </figure>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow">
                  <span className="h-px w-8 bg-gold" />
                  {about.founder.eyebrow}
                </p>
                <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                  {founderManifesto.title}
                </h2>
              </Reveal>

              {founderManifesto.body.map((p, i) => (
                <Reveal key={i} delay={0.06 * (i + 1)}>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-stone">{p}</p>
                </Reveal>
              ))}

              <Reveal delay={0.35}>
                <p className="mt-10 font-display text-xl italic leading-relaxed text-bone md:text-2xl">
                  «{founderStatement.quote}»
                </p>
                <div className="mt-8 border-t border-ink-line pt-6">
                  <p className="font-display text-lg text-bone">{founderStatement.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide2 text-stone">
                    {founderStatement.role}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wide2 text-stone/60">
                    {founderManifesto.dated} · {founderManifesto.location}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-b border-ink-line bg-ink-soft py-20 md:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                {about.eyebrow}
              </p>
              <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                Κάθε έργο, μια <span className="gold-text">υπόσχεση</span> που τηρούμε.
              </h2>
            </Reveal>

            <div>
              {about.body.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-stone first:mt-0">{p}</p>
                </Reveal>
              ))}

              <Reveal delay={0.2}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-bone">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                        <Check />
                      </span>
                      <span className="text-[0.95rem]">{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 font-display text-lg italic text-gold">— {about.signature}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-ink-line py-20 md:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                {about.values.eyebrow}
              </p>
              <h2 className="heading-display mt-6 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl">
                {about.values.title}
              </h2>
            </Reveal>

            <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
              {about.values.items.map((item) => (
                <RevealItem key={item.title}>
                  <div className="h-full rounded-[2px] border border-ink-line bg-ink-card p-8">
                    <p className="font-display text-2xl text-bone">{item.title}</p>
                    <p className="mt-4 text-sm leading-relaxed text-stone">{item.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Why us */}
        <section className="border-b border-ink-line bg-ink-soft py-20 md:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                {about.strengths.eyebrow}
              </p>
              <h2 className="heading-display mt-6 whitespace-pre-line text-3xl md:text-4xl lg:text-5xl">
                {about.strengths.title}
              </h2>
            </Reveal>

            <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[2px] border border-ink-line md:grid-cols-3">
              {about.strengths.items.map((item, i) => (
                <RevealItem key={item.title}>
                  <div className="h-full bg-ink-card p-8">
                    <p className="font-display text-4xl text-gold/50">0{i + 1}</p>
                    <h3 className="mt-4 font-display text-2xl text-bone">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{item.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-ink-line py-20 md:py-24">
          <div className="container-x">
            <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-ink-line lg:grid-cols-4">
              {stats.map((s) => (
                <RevealItem key={s.label}>
                  <div className="bg-ink-card px-6 py-12 text-center">
                    <p className="font-display text-5xl font-semibold gold-text md:text-6xl">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-wide2 text-stone md:text-sm">
                      {s.label}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Office gallery */}
        <section className="border-b border-ink-line py-20 md:py-28">
          <div className="container-x">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow">
                  <span className="h-px w-8 bg-gold" />
                  Τα γραφεία μας
                </p>
                <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                  Ο χώρος μας, <span className="gold-text">η βιτρίνα της δουλειάς μας.</span>
                </h2>
                <p className="mt-5 text-stone">{company.address}</p>
              </div>
              <a href={company.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Άνοιγμα στο Google Maps <ArrowUpRight />
              </a>
            </Reveal>

            <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {([
                [photos.p9829, 'Γυάλινη είσοδος και χώρος υποδοχής'],
                [photos.p9450, 'Εσωτερική σκάλα με ξύλινα σκαλοπάτια'],
                [photos.p9822, 'Εσωτερικό γραφείων Arvanitis Constructions'],
              ] as const).map(([src, alt]) => (
                <RevealItem key={alt}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ink-line">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
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
