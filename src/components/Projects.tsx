import { projects, projectsPath } from '../lib/content'
import { projectImages } from '../lib/photos'
import { ArrowRight, ArrowUpRight } from './Icons'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

// Curated home selection — 5 cards fill the 3-col grid exactly (hero spans 2).
// Full list lives on /projects/. First card renders as the wide hero.
const FEATURED_IDS = ['p1', 'p6', 'p2', 'p3', 'p7']
const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
  (p): p is NonNullable<typeof p> => p !== undefined,
)

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
          <a href={projectsPath} className="btn-ghost">
            Όλα τα έργα <ArrowUpRight />
          </a>
        </Reveal>

        {/* Fixed row height keeps every row flush — hero spans 2 cols on row 1 */}
        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 md:auto-rows-[360px] md:grid-cols-3">
          {featured.map((p, i) => (
            <RevealItem key={p.id} className={i === 0 ? 'md:col-span-2' : ''}>
              <a
                href={`${projectsPath}#${p.id}`}
                aria-label={`${p.title} — δείτε το έργο`}
                className={`group relative block w-full overflow-hidden rounded-[2px] border border-ink-line md:aspect-auto md:h-full ${
                  i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}
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
          <a href={projectsPath} className="btn-gold">
            Δείτε όλα τα έργα <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
