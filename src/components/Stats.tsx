import { stats } from '../lib/content'
import { Counter } from './ui/Counter'
import { RevealGroup, RevealItem } from './ui/Reveal'

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-ink-line lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label} className="h-full">
              <div className="h-full bg-ink-card px-3 py-12 text-center sm:px-6">
                <p className="font-display text-5xl font-semibold gold-text md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.12em] text-stone sm:text-xs sm:tracking-wide2 md:text-sm">
                  {s.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
