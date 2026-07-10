import { testimonials } from '../lib/content'
import { Quote } from './Icons'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Εμπιστοσύνη πελατών
          </p>
          <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-[3.4rem]">
            Αυτό που <span className="gold-text">χτίζουμε</span> μιλάει.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-[2px] border border-ink-line bg-ink-card p-8 transition-colors duration-500 hover:border-gold/40">
                <Quote className="text-gold/30" />
                <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-bone/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-ink-line pt-5">
                  <p className="font-display text-lg text-bone">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide2 text-gold">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
