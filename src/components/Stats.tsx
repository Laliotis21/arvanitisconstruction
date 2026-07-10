import { stats } from '../lib/content'
import { Counter } from './ui/Counter'
import { RevealGroup, RevealItem } from './ui/Reveal'

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-ink-line lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="bg-ink-card px-6 py-12 text-center">
                <p className="font-display text-5xl font-semibold gold-text md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-wide2 text-stone md:text-sm">{s.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
