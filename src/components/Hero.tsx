import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { hero, contactPath, projectsPath } from '../lib/content'
import { useMobileLite } from '../hooks/useMobileLite'
import { ArrowRight, ArrowUpRight } from './Icons'

// Drop a muted, ~8s construction/drone loop at public/hero.mp4 (h264, ~1080p, <6MB).
// Poster is always the LCP background; video is desktop-only and only if the file exists.
const VIDEO_SRC = `${import.meta.env.BASE_URL}hero.mp4`
const POSTER_SRC = `${import.meta.env.BASE_URL}hero-poster.webp`

export default function Hero() {
  const reduce = useReducedMotion()
  const lite = useMobileLite()
  const staticMotion = reduce || lite
  const [enableVideo, setEnableVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    if (reduce || lite) return
    const desktop = window.matchMedia('(min-width: 1024px)')
    const sync = () => setEnableVideo(desktop.matches)
    sync()
    desktop.addEventListener('change', sync)
    return () => desktop.removeEventListener('change', sync)
  }, [reduce, lite])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <img
        src={POSTER_SRC}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {enableVideo && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden
          onCanPlay={() => setVideoReady(true)}
          onError={() => {
            setEnableVideo(false)
            setVideoReady(false)
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* Legibility overlays — dark left + bottom, warm gold cast */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 hidden h-[520px] w-[520px] rounded-full bg-gold/10 blur-[160px] md:block" />

      {/* Film grain — mix-blend glitches on iOS */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.05] mix-blend-overlay md:block"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            initial={staticMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: staticMotion ? 0 : 0.6 }}
          >
            <span className="h-px w-8 bg-gold" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="heading-display mt-7 text-[clamp(3.6rem,11vw,8.5rem)]">
            {hero.words.map((w, i) => (
              <motion.span
                key={w}
                className={`block ${i === 1 ? 'gold-text' : ''}`}
                initial={staticMotion ? false : { opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  staticMotion
                    ? { duration: 0 }
                    : { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }
                }
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70"
            initial={staticMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: staticMotion ? 0 : 0.7, delay: staticMotion ? 0 : 0.55 }}
          >
            {hero.lead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={staticMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: staticMotion ? 0 : 0.7, delay: staticMotion ? 0 : 0.7 }}
          >
            <a href={contactPath} className="btn-gold">
              {hero.ctaPrimary}
              <ArrowRight />
            </a>
            <a href={projectsPath} className="btn-ghost">
              {hero.ctaSecondary}
              <ArrowUpRight />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[0.6rem] uppercase tracking-wide2 text-stone">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
