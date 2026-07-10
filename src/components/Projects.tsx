import { projects, type Project } from '../lib/content'
import { projectImages } from '../lib/photos'
import { ArrowRight, ArrowUpRight } from './Icons'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

const spanClass: Record<Project['span'], string> = {
  wide: 'md:col-span-2 aspect-[16/10] md:aspect-[2/1]',
  tall: 'md:row-span-2 aspect-[4/5] md:aspect-auto',
  normal: 'aspect-[4/3]',
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              Επιλεγμένα έργα
            </p>
            <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-[3.4rem]">
              Χώροι που <span className="gold-text">μιλούν</span> από μόνοι τους.
            </h2>
          </div>
          <a href="projects/" className="btn-ghost">
            Όλα τα έργα <ArrowUpRight />
          </a>
        </Reveal>

        <RevealGroup className="mt-16 grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.id} className={p.span === 'wide' ? 'md:col-span-2' : p.span === 'tall' ? 'md:row-span-2' : ''}>
              <a
                href={`projects/#${p.id}`}
                aria-label={`${p.title} — δείτε το έργο`}
                className={`group relative block w-full overflow-hidden rounded-[2px] border border-ink-line ${spanClass[p.span]}`}
              >
                <img
                  src={projectImages[p.id]}
                  alt={`${p.title} — ${p.category}, ${p.location}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

                <div className="relative flex h-full flex-col justify-end p-7">
                  <span className="w-fit rounded-full border border-gold/40 bg-ink/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide2 text-gold backdrop-blur">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium text-bone md:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-stone">
                    {p.location} · {p.year}
                  </p>
                  <span className="mt-4 flex w-fit translate-y-2 items-center gap-2 text-sm font-medium text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Δείτε το έργο <ArrowUpRight />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex justify-center">
          <a href="projects/" className="btn-gold">
            Δείτε όλα τα έργα <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
