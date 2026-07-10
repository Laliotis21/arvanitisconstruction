import { motion } from 'framer-motion'
import { googleReviews, testimonials, type Testimonial } from '../lib/content'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useMobileLite } from '../hooks/useMobileLite'
import { Quote, ArrowUpRight } from './Icons'
import { Reveal } from './ui/Reveal'

const LOOP_SECONDS = 42

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${rating} από 5 αστέρια`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden className={i < rating ? 'opacity-100' : 'opacity-25'}>
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-[min(340px,82vw)] shrink-0 flex-col rounded-[2px] border border-ink-line bg-ink-card p-7 shadow-card md:w-[380px] md:p-8">
      <div className="flex items-center justify-between gap-4">
        <Quote className="text-gold/30" />
        <Stars rating={testimonial.rating} />
      </div>
      <blockquote className="mt-4 line-clamp-5 flex-1 text-[0.95rem] leading-relaxed text-bone/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-ink-line pt-4">
        <p className="font-display text-lg text-bone">{testimonial.name}</p>
      </figcaption>
    </figure>
  )
}

function AutoScrollTrack() {
  const lite = useMobileLite()
  const { reduce, loopRef, controls } = useInfiniteScroll(LOOP_SECONDS)

  if (reduce || lite) {
    return (
      <div className="container-x mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    )
  }

  return (
    <div
      className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]"
      aria-live="off"
    >
      <motion.div className="flex w-max pl-6" animate={controls}>
        <div ref={loopRef} className="flex gap-6 pr-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <div className="flex gap-6 pr-6" aria-hidden>
          {testimonials.map((t) => (
            <TestimonialCard key={`dup-${t.name}`} testimonial={t} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-label="Κριτικές πελατών">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Εμπιστοσύνη πελατών
          </p>
          <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-[3.4rem]">
            Αυτό που <span className="gold-text">χτίζουμε</span> μιλάει.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl text-bone">
                {googleReviews.rating.toFixed(1).replace('.', ',')}
              </span>
              <Stars rating={googleReviews.rating} />
            </div>
            <p className="text-sm text-stone">
              {googleReviews.count} αξιολογήσεις στο Google Maps
            </p>
            <a
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-bone"
            >
              Δείτε όλες τις κριτικές
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>

      <AutoScrollTrack />
    </section>
  )
}
