import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { faqPage, faqs } from '../lib/content'

// Native <details> keeps every answer in the DOM, which is what
// search and AI crawlers read — no JS gating.
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-ink-line py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            {faqPage.eyebrow}
          </p>
          <h2 className="heading-display mt-6 max-w-3xl whitespace-pre-line text-3xl md:text-4xl lg:text-5xl">
            {faqPage.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-3 lg:grid-cols-2 lg:gap-x-10">
          {faqs.map((f) => (
            <RevealItem key={f.q}>
              <details className="group border-b border-ink-line py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.02rem] font-medium text-bone transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium">{f.q}</h3>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8 1v14M1 8h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 pr-10 text-[0.97rem] leading-relaxed text-stone">{f.a}</p>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
