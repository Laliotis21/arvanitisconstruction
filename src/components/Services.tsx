import { services } from '../lib/content'
import { ServiceIcon, ArrowUpRight } from './Icons'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="relative border-t border-ink-line bg-ink-soft py-28 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" />
            Τι κάνουμε
          </p>
          <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-[3.4rem]">
            Ολοκληρωμένες υπηρεσίες,<br />
            <span className="gold-text">ένας συνεργάτης.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Από τη μελέτη έως το κλειδί στο χέρι — καλύπτουμε κάθε στάδιο του έργου με τεχνική αρτιότητα.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <RevealItem key={s.id} className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <a
                href={`./services/#${s.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2px] border border-ink-line bg-ink-card p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-card"
              >
                <div className="absolute inset-x-0 top-0 h-px w-0 bg-gold-line transition-all duration-500 group-hover:w-full" />
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-line text-gold transition-colors duration-500 group-hover:border-gold/60 group-hover:bg-gold/5">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-7 font-display text-2xl font-medium text-bone">{s.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-stone">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide2 text-gold opacity-60 transition-all duration-500 group-hover:opacity-100">
                  Μάθετε περισσότερα <ArrowUpRight />
                </span>
                <span className="pointer-events-none absolute -bottom-8 -right-6 font-display text-[7rem] leading-none text-bone/[0.03] transition-colors duration-500 group-hover:text-gold/[0.06]">
                  0{i + 1}
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <a
            href="./services/"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide2 text-bone transition-colors hover:text-gold"
          >
            Δείτε όλες τις υπηρεσίες αναλυτικά
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
