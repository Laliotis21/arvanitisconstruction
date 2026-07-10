import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Logo from './components/Logo'
import { ArrowRight, ArrowUpRight, Close } from './components/Icons'
import { Reveal } from './components/ui/Reveal'
import { company, legal, projects, type Project } from './lib/content'
import { projectGalleries, projectImages } from './lib/photos'

const ALL = 'Όλα'

function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = projectGalleries[project.id] ?? [projectImages[project.id]]
  const [index, setIndex] = useState(0)
  const many = gallery.length > 1

  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length)
  const next = () => setIndex((i) => (i + 1) % gallery.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Κλείσιμο"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink-line bg-ink-card text-stone transition-colors hover:border-gold/60 hover:text-gold"
      >
        <Close />
      </button>

      {many && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Προηγούμενη φωτογραφία"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-ink-line bg-ink-card text-gold transition-colors hover:border-gold/60 md:left-8"
          >
            <span className="rotate-180"><ArrowRight /></span>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Επόμενη φωτογραφία"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-ink-line bg-ink-card text-gold transition-colors hover:border-gold/60 md:right-8"
          >
            <ArrowRight />
          </button>
        </>
      )}

      <motion.figure
        className="flex max-h-full max-w-5xl flex-col items-center"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={gallery[index]}
            alt={`${project.title} — φωτογραφία ${index + 1} από ${gallery.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[70vh] w-auto rounded-[3px] border border-ink-line object-contain"
          />
        </AnimatePresence>
        <figcaption className="mt-4 flex w-full flex-wrap items-baseline justify-between gap-2">
          <span className="font-display text-xl text-bone md:text-2xl">{project.title}</span>
          <span className="text-sm text-stone">
            {many && <span className="mr-4 text-gold">{index + 1} / {gallery.length}</span>}
            {project.category} · {project.location} · {project.year}
          </span>
        </figcaption>

        {many && (
          <div className="mt-4 flex gap-2.5">
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Φωτογραφία ${i + 1}`}
                className={`h-14 w-20 cursor-pointer overflow-hidden rounded-[2px] border transition-all duration-300 ${
                  i === index ? 'border-gold opacity-100' : 'border-ink-line opacity-50 hover:opacity-80'
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.figure>
    </motion.div>
  )
}

// Standalone page served at /projects/ — full portfolio with category filter + lightbox.
export default function ProjectsPage() {
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()
  const [category, setCategory] = useState(ALL)
  const [open, setOpen] = useState<Project | null>(null)

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )
  const visible = category === ALL ? projects : projects.filter((p) => p.category === category)

  return (
    <>
      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/85 backdrop-blur-xl">
        <div className="container-x flex h-[88px] items-center justify-between">
          <Logo href="../" />
          <a
            href="../"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone transition-colors hover:text-gold"
          >
            <span aria-hidden className="rotate-180">
              <ArrowRight />
            </span>
            Επιστροφή στην αρχική
          </a>
        </div>
      </header>

      <main>
        {/* Hero / overview */}
        <section className="relative overflow-hidden border-b border-ink-line bg-ink-soft py-24 md:py-32">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold" />
                Το χαρτοφυλάκιό μας
              </p>
              <h1 className="heading-display mt-6 text-4xl md:text-6xl lg:text-[4rem]">
                Έργα που <span className="gold-text">υπογράφουμε.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone">
                Μια επιλογή από πρόσφατα έργα μας — κατασκευές, ανακαινίσεις, επαγγελματικοί χώροι
                και αθλητικές εγκαταστάσεις σε Βοιωτία και όχι μόνο. Κάθε έργο, μια υπόσχεση που
                τηρήθηκε.
              </p>
            </Reveal>

            {/* Category filter */}
            <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
              {categories.map((c) => {
                const active = c === category
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-ink-line bg-ink-card text-stone hover:border-gold/60 hover:text-bone'
                    }`}
                  >
                    {c}
                    <span className={`ml-2 text-xs ${active ? 'text-gold/70' : 'text-stone/60'}`}>
                      {c === ALL ? projects.length : projects.filter((p) => p.category === c).length}
                    </span>
                  </button>
                )
              })}
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <motion.div layout={!reduce} className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.article
                    key={p.id}
                    id={p.id}
                    layout={!reduce}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="group scroll-mt-32"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      aria-label={`Προβολή: ${p.title}`}
                      className="relative block w-full cursor-pointer overflow-hidden rounded-[2px] border border-ink-line text-left"
                    >
                      <img
                        src={projectImages[p.id]}
                        alt={`${p.title} — ${p.category}, ${p.location}`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-gold opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight />
                      </span>
                      <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-ink/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide2 text-gold backdrop-blur">
                        {p.category}
                      </span>
                      {(projectGalleries[p.id]?.length ?? 1) > 1 && (
                        <span className="absolute bottom-4 left-4 rounded-full bg-ink/60 px-3 py-1 text-xs font-medium text-bone/90 backdrop-blur">
                          {projectGalleries[p.id].length} φωτογραφίες
                        </span>
                      )}
                    </button>

                    <div className="mt-5">
                      <h2 className="font-display text-2xl font-medium text-bone">{p.title}</h2>
                      <p className="mt-1 text-sm text-stone">
                        {p.location} · {p.year}
                      </p>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-stone">{p.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden border-t border-ink-line bg-ink-soft py-24 md:py-32">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                <span className="h-px w-8 bg-gold" />
                Το επόμενο έργο
                <span className="h-px w-8 bg-gold" />
              </p>
              <h2 className="heading-display mt-6 text-3xl md:text-5xl">
                Το δικό σας έργο, <span className="gold-text">η επόμενη υπογραφή μας.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
                Πείτε μας για το όραμά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών με τα
                επόμενα βήματα.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a href="../#contact" className="btn-gold">
                  Ζητήστε προσφορά <ArrowUpRight />
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn-ghost">
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Slim footer */}
      <footer className="border-t border-ink-line bg-ink py-12">
        <div className="container-x flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-gold">
              {company.phone}
            </a>
            <span>{company.location}</span>
          </div>
          <p className="text-xs text-stone/70">
            © {year} {legal.entity} · Αρ. Γ.Ε.ΜΗ. {legal.gemi} · ΑΦΜ {legal.afm}
          </p>
        </div>
      </footer>

      <AnimatePresence>{open && <Lightbox project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </>
  )
}
