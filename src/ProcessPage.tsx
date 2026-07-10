import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ArrowUpRight, Check } from './components/Icons'
import { Reveal, RevealGroup, RevealItem } from './components/ui/Reveal'
import { process, processPage, projectsPath } from './lib/content'
import { photos, projectImages } from './lib/photos'

const stepImages: Record<string, string> = {
  meleti: photos.p9519,
  schediasmos: projectImages.p4,
  kataskevi: projectImages.p6,
  paradosi: projectImages.p8,
}

// Standalone page served at /process/
export default function ProcessPage() {
  return (
    <>
      <Navbar homePrefix="../" solid activePage="process" />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="relative min-h-[min(72vh,720px)] overflow-hidden border-b border-ink-line">
          <img
            src={projectImages.p4}
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
                {processPage.eyebrow}
              </p>
              <h1 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-6xl lg:text-[4rem]">
                {processPage.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone/90">
                {processPage.heroLead}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  ['4', 'βήματα'],
                  ['3D', 'σχεδιασμός'],
                  ['Κλειδί', 'στο χέρι'],
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
              {process.map((step) => (
                <RevealItem key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-bone/10 bg-ink/45 px-5 py-2.5 text-sm font-medium text-stone backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-bone"
                  >
                    <span className="font-display text-gold">{step.n}</span>
                    {step.title}
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Overview */}
        <section className="border-b border-ink-line bg-ink-soft py-20 md:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                Μια γραμμική πορεία
              </p>
              <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">
                Από την ιδέα, <span className="gold-text">στο κλειδί στο χέρι.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                Κάθε έργο ακολουθεί την ίδια δομή — με σαφή στάδια, διαφάνεια και έναν υπεύθυνο
                συνομιλητή σε όλη τη διάρκεια. Έτσι ξέρετε πάντα τι γίνεται και τι ακολουθεί.
              </p>
            </Reveal>

            <RevealGroup className="relative mt-14 grid gap-px overflow-hidden rounded-[2px] border border-ink-line md:grid-cols-4">
              {process.map((step) => (
                <RevealItem key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className="group relative flex h-full flex-col bg-ink-card p-8 transition-colors duration-500 hover:bg-ink-card/60"
                  >
                    <span className="font-display text-5xl gold-text">{step.n}</span>
                    <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                    <h3 className="mt-6 font-display text-2xl font-medium text-bone">{step.title}</h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-stone">{step.desc}</p>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Step details */}
        {process.map((step, i) => {
          const flip = i % 2 === 1
          const soft = i % 2 === 1
          return (
            <section
              key={step.id}
              id={step.id}
              className={`scroll-mt-24 border-b border-ink-line py-20 md:py-28 ${soft ? 'bg-ink-soft' : ''}`}
            >
              <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? 'lg:order-2' : ''}>
                  <p className="eyebrow">
                    <span className="h-px w-8 bg-gold" />
                    Βήμα {step.n} — {step.tagline}
                  </p>
                  <h2 className="heading-display mt-6 text-3xl md:text-4xl lg:text-5xl">{step.title}</h2>
                  {step.long.map((p, j) => (
                    <p key={j} className="mt-5 text-[1.02rem] leading-relaxed text-stone">
                      {p}
                    </p>
                  ))}

                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {step.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.95rem] text-bone/90">
                        <span className="mt-0.5 shrink-0 text-gold">
                          <Check />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="../contact/" className="btn-gold mt-9">
                    Ξεκινήστε το έργο σας <ArrowUpRight />
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
                      src={stepImages[step.id]}
                      alt={step.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-[4/3]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  </div>
                  <span className="pointer-events-none absolute -top-6 right-4 font-display text-[6rem] leading-none text-bone/[0.04]">
                    {step.n}
                  </span>
                </Reveal>
              </div>
            </section>
          )
        })}

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
                Έτοιμοι για το <span className="gold-text">πρώτο βήμα;</span>
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
