import { process } from '../lib/content'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

export default function Process() {
  return (
    <section id="process" className="relative border-y border-ink-line bg-ink-soft py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Η διαδικασία μας
          </p>
          <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-[3.4rem]">
            Τέσσερα βήματα από<br />
            το <span className="gold-text">όραμα</span> στην παράδοση.
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-16 grid gap-px overflow-hidden rounded-[2px] border border-ink-line md:grid-cols-4">
          {process.map((step) => (
            <RevealItem key={step.n}>
              <div className="group relative h-full bg-ink-card p-8 transition-colors duration-500 hover:bg-ink-card/60">
                <span className="font-display text-5xl gold-text">{step.n}</span>
                <div className="mt-6 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                <h3 className="mt-6 font-display text-2xl font-medium text-bone">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-stone">{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
