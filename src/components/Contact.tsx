import { useState, type FormEvent } from 'react'
import { contact, company, services } from '../lib/content'
import { track } from '../lib/analytics'
import { Reveal } from './ui/Reveal'
import { Mail, Phone, Pin, ArrowRight, Check } from './Icons'

const details = [
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}`, event: 'email_click' },
  { icon: Phone, label: 'Τηλέφωνο', value: company.phone, href: `tel:${company.phoneHref}`, event: 'phone_click' },
  { icon: Pin, label: 'Έδρα', value: company.location, href: undefined, event: undefined },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: data.get('service'),
      message: data.get('message'),
      consent: data.get('consent') === 'on', // GDPR consent record
      website: data.get('website'), // honeypot
    }

    setStatus('sending')
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error('send failed')
      track('generate_lead', { method: 'contact_form', service: String(payload.service ?? '') })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const mailtoFallback = `mailto:${company.email}?subject=${encodeURIComponent('Αίτημα προσφοράς')}`

  return (
    <section id="contact" className="relative border-t border-ink-line bg-ink-soft py-28 md:py-36">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />

      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              {contact.eyebrow}
            </p>
            <h2 className="heading-display mt-6 whitespace-pre-line text-4xl md:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{contact.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-5">
              {details.map(({ icon: Icon, label, value, href, event }) => (
                <li key={label}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-line text-gold">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide2 text-stone">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          onClick={event ? () => track(event) : undefined}
                          className="font-display text-lg text-bone transition-colors hover:text-gold"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-display text-lg text-bone">{value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[2px] border border-ink-line bg-ink-card p-8 shadow-card md:p-10">
            {status === 'sent' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check />
                </span>
                <h3 className="mt-6 font-display text-3xl text-bone">Ευχαριστούμε!</h3>
                <p className="mt-3 max-w-sm text-stone">
                  Το αίτημά σας στάλθηκε. Θα επικοινωνήσουμε εντός 24 ωρών. Εναλλακτικά καλέστε στο{' '}
                  <a href={`tel:${company.phoneHref}`} className="text-gold">{company.phone}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot: hidden from humans, bots fill it and get silently dropped server-side */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Ονοματεπώνυμο" required autoComplete="name" />
                  <Field id="phone" label="Τηλέφωνο" type="tel" required autoComplete="tel" />
                </div>
                <Field id="email" label="Email" type="email" required autoComplete="email" />
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-wide2 text-stone">
                    Υπηρεσία
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={services[0].title}
                    className="w-full cursor-pointer rounded-[2px] border border-ink-line bg-ink px-4 py-3.5 text-bone outline-none transition-colors focus:border-gold"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wide2 text-stone">
                    Το έργο σας
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Πείτε μας λίγα λόγια για το έργο σας…"
                    className="w-full resize-none rounded-[2px] border border-ink-line bg-ink px-4 py-3.5 text-bone placeholder:text-stone/50 outline-none transition-colors focus:border-gold"
                  />
                </div>
                <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-stone">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-gold"
                  />
                  <span>
                    Συναινώ στην επεξεργασία των στοιχείων μου για την επικοινωνία σχετικά με το
                    αίτημά μου, σύμφωνα με την{' '}
                    <a href="privacy-policy/" target="_blank" rel="noopener" className="text-gold underline-offset-4 hover:underline">
                      Πολιτική Απορρήτου
                    </a>
                    . <span className="text-gold">*</span>
                  </span>
                </label>
                <button type="submit" disabled={status === 'sending'} className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60">
                  {status === 'sending' ? 'Αποστολή…' : <>Στείλτε το αίτημα <ArrowRight /></>}
                </button>
                {status === 'error' && (
                  <p className="text-center text-sm text-red-400">
                    Κάτι πήγε στραβά. Δοκιμάστε ξανά, καλέστε στο{' '}
                    <a href={`tel:${company.phoneHref}`} className="text-gold">{company.phone}</a> ή στείλτε{' '}
                    <a href={mailtoFallback} className="text-gold">email</a>.
                  </p>
                )}
                <p className="text-center text-xs text-stone/70">
                  Απαντάμε εντός 24 ωρών · Χωρίς δέσμευση
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-wide2 text-stone">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-[2px] border border-ink-line bg-ink px-4 py-3.5 text-bone placeholder:text-stone/50 outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}
