import type { ReactNode } from 'react'
import { ArrowUpRight } from './Icons'
import { Reveal } from './ui/Reveal'
import { projectsPath } from '../lib/content'

// Shared closing CTA for standalone pages (services, process).
export default function ClosingCTA({ title }: { title: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-t border-ink-line bg-ink-soft py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" />
            Ας μιλήσουμε
            <span className="h-px w-8 bg-gold" />
          </p>
          <h2 className="heading-display mt-6 text-3xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
            Πείτε μας για το όραμά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών με τα επόμενα
            βήματα.
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
  )
}
