import type { MouseEvent } from 'react'
import logoUrl from '../assets/arvanitis-logo.png'

type Props = {
  className?: string
  height?: number
  href?: string
}

const LOGO_ASPECT = 600 / 191

// Official Arvanitis Constructions wordmark (from arvanitisconstruction.gr).
// Source PNG is black on transparent → inverted to bone-white for the dark theme.
export default function Logo({ className = '', height = 44, href = '#home' }: Props) {
  const width = Math.round(height * LOGO_ASPECT)

  // On the home page the logo is a same-page anchor ('#home'); scroll to the
  // top ourselves so the browser never writes '#home' into the address bar.
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (href !== '#home') return
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label="Arvanitis Constructions — αρχική"
      className={`group inline-flex shrink-0 items-center ${className}`}
    >
      <img
        src={logoUrl}
        alt=""
        width={width}
        height={height}
        className="block max-w-[min(220px,calc(100vw-5.5rem))] shrink-0 object-contain object-left opacity-95 transition-opacity duration-300 group-hover:opacity-100 [filter:brightness(0)_invert(1)]"
        style={{ height, width: 'auto' }}
        draggable={false}
        decoding="async"
        fetchPriority="high"
      />
    </a>
  )
}
