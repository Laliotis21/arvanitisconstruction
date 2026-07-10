import { useEffect, useState } from 'react'
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

/** iOS-safe scroll lock — overflow:hidden alone causes layout jumps. */
function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scrollY = window.scrollY
    const { style } = document.body
    const prev = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      overflow: style.overflow,
      width: style.width,
    }

    style.position = 'fixed'
    style.top = `-${scrollY}px`
    style.left = '0'
    style.right = '0'
    style.overflow = 'hidden'
    style.width = '100%'

    return () => {
      style.position = prev.position
      style.top = prev.top
      style.left = prev.left
      style.right = prev.right
      style.overflow = prev.overflow
      style.width = prev.width
      window.scrollTo(0, scrollY)
    }
  }, [locked])
}

export default function Navbar({ homePrefix = '', solid = false, activePage }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const showSolid = solid || scrolled || open
  const logoHref = homePrefix ? `${homePrefix}` : '#home'
  const ctaHref = activePage === 'contact' ? './' : homePrefix ? `${homePrefix}${contactPath}` : contactPath

  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const navLinks = nav.map((item) => {
    const href = resolveNavHref(item.href, homePrefix, activePage)
    const isActive = isNavItemActive(item.href, homePrefix, activePage)
    return { href, isActive, label: item.label, key: item.href }
  })

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          open ? 'max-lg:invisible' : ''
        } ${
          showSolid
            ? 'border-b border-ink-line/70 bg-ink/95 max-md:backdrop-blur-none md:bg-ink/85 md:backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-[88px] items-center justify-between gap-4">
          <Logo href={logoHref} height={46} />

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map(({ href, isActive, label, key }) => (
              <a
                key={key}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-stone hover:text-bone'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
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
            aria-expanded={open}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink-line text-bone transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-ink lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Κύριο μενού"
        >
          <div className="container-x flex h-[88px] shrink-0 items-center justify-between gap-4">
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

          <nav className="container-x flex-1 overflow-y-auto overscroll-contain pb-10 pt-6">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ href, isActive, label, key }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`border-b border-ink-line/60 py-5 font-display text-3xl font-medium ${
                    isActive ? 'text-gold' : 'text-bone active:text-gold'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a href={ctaHref} onClick={() => setOpen(false)} className="btn-gold mt-8 w-full">
                Ζητήστε προσφορά
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
