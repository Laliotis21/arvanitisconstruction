import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { Menu, Close } from './Icons'
import { nav } from '../lib/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-line/70 bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-[88px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-stone transition-colors duration-300 hover:text-bone"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="btn-gold">
              Ζητήστε προσφορά
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Άνοιγμα μενού"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink-line text-bone transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-x flex h-[88px] items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Κλείσιμο μενού"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink-line text-bone hover:border-gold hover:text-gold"
              >
                <Close />
              </button>
            </div>
            <nav className="container-x mt-10 flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="border-b border-ink-line/60 py-5 font-display text-3xl font-medium text-bone hover:text-gold"
                >
                  {item.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-8 w-full">
                Ζητήστε προσφορά
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
