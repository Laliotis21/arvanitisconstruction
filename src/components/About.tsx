import { about, aboutPath } from '../lib/content'
import { photos } from '../lib/photos'
import { Reveal } from './ui/Reveal'
import { Check, ArrowUpRight } from './Icons'

const highlights = ['Premium υλικά', 'Άψογη εκτέλεση', 'Συνέπεια στον χρόνο', 'Προσοχή στη λεπτομέρεια']

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
        {/* Left visual column */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            {/* offset gold frame */}
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2px] border border-gold/25 lg:block"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-ink-line bg-ink-card">
              <img
                src={photos.aboutVisual}
                alt="Νέα γραφεία Arvanitis Constructions — πρόσοψη, Θήβα"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-8 bottom-8 flex items-end gap-6">
                <div>
                  <p className="font-display text-5xl gold-text">10+</p>
                  <p className="mt-1 text-xs uppercase tracking-wide2 text-bone/80">
                    χρόνια στην κατασκευή
                  </p>
                </div>
                <div aria-hidden className="mb-1 h-12 w-px bg-bone/25" />
                <div>
                  <p className="font-display text-5xl gold-text">500+</p>
                  <p className="mt-1 text-xs uppercase tracking-wide2 text-bone/80">έργα</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right text column */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              {about.eyebrow}
            </p>
            <h2 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-5xl lg:text-[3.4rem]">
              {about.title}
            </h2>
          </Reveal>

          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <ul className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-bone">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Check />
                  </span>
                  <span className="text-[0.95rem]">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-10 font-display text-lg italic text-gold">— {about.signature}</p>
            <a href={aboutPath} className="btn-ghost mt-8">
              Γνωρίστε την εταιρεία <ArrowUpRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
