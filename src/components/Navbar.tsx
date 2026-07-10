import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { Menu, Close } from './Icons'
import { nav, aboutPath, contactPath, projectsPath, servicesPath, processPath } from '../lib/content'

type ActivePage = 'about' | 'contact' | 'projects' | 'services' | 'process'

type Props = {
  /** Prefix for home-section anchors on subpages, e.g. `../` from /contact/ */
  homePrefix?: string
  /** Keep header opaque (no transparent-at-top state) — for inner pages without a hero */
  solid?: boolean
  /** Highlight the matching nav item on standalone pages */
  activePage?: ActivePage
}

// One entry per standalone page — TypeScript enforces the map stays complete
// whenever a page is added to the ActivePage union.
const pagePaths: Record<ActivePage, string> = {
  about: aboutPath,
  contact: contactPath,
  projects: projectsPath,
  services: servicesPath,
  process: processPath,
}

function resolveNavHref(href: string, homePrefix: string, activePage?: ActivePage) {
  if (href.startsWith('#')) return `${homePrefix}${href}`
  if (activePage && pagePaths[activePage] === href) return './'
  return `${homePrefix}${href}`
}

function isNavItemActive(href: string, homePrefix: string, activePage?: ActivePage) {
  return Boolean(homePrefix && activePage && pagePaths[activePage] === href)
}

export default function Navbar({ homePrefix = '', solid = false, activePage }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const showSolid = solid || scrolled
  const logoHref = homePrefix ? `${homePrefix}` : '#home'
  const ctaHref = activePage === 'contact' ? './' : homePrefix ? `${homePrefix}${contactPath}` : contactPath

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
          showSolid
            ? 'border-b border-ink-line/70 bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-[88px] items-center justify-between gap-4">
          <Logo href={logoHref} height={46} />

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const href = resolveNavHref(item.href, homePrefix, activePage)
              const isActive = isNavItemActive(item.href, homePrefix, activePage)
              return (
              <a
                key={item.href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-stone hover:text-bone'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            )})}
          </nav>

          <div className="hidden lg:block">
            <a href={ctaHref} className="btn-gold">
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
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-x flex h-[88px] items-center justify-between gap-4">
              <Logo href={logoHref} height={46} />
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
              {nav.map((item, i) => {
                const href = resolveNavHref(item.href, homePrefix, activePage)
                const isActive = isNavItemActive(item.href, homePrefix, activePage)
                return (
                <motion.a
                  key={item.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className={`border-b border-ink-line/60 py-5 font-display text-3xl font-medium ${
                    isActive ? 'text-gold' : 'text-bone hover:text-gold'
                  }`}
                >
                  {item.label}
                </motion.a>
              )})}
              <a href={ctaHref} onClick={() => setOpen(false)} className="btn-gold mt-8 w-full">
                Ζητήστε προσφορά
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
