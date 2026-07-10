import type { ReactNode } from 'react'
import { Reveal, RevealGroup } from './ui/Reveal'

type Props = {
  image: string
  eyebrow: string
  title: string
  lead: string
  badges: [value: string, label: string][]
  /** Anchor-chip RevealItems rendered below the badges */
  children?: ReactNode
}

// Shared full-bleed hero for standalone pages (services, process).
export default function PageHero({ image, eyebrow, title, lead, badges, children }: Props) {
  return (
    <section className="relative min-h-[min(72vh,720px)] overflow-hidden border-b border-ink-line">
      <img
        src={image}
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
            {eyebrow}
          </p>
          <h1 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-6xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone/90">{lead}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map(([value, label]) => (
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

        {children && <RevealGroup className="mt-12 flex flex-wrap gap-3">{children}</RevealGroup>}
      </div>
    </section>
  )
}
