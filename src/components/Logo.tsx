import logoUrl from '../assets/arvanitis-logo.png'

type Props = {
  className?: string
  height?: number
  href?: string
}

// Official Arvanitis Constructions wordmark (from arvanitisconstruction.gr).
// Source PNG is black on transparent → inverted to bone-white for the dark theme.
export default function Logo({ className = '', height = 44, href = '#home' }: Props) {
  return (
    <a
      href={href}
      aria-label="Arvanitis Constructions — αρχική"
      className={`group inline-flex items-center ${className}`}
    >
      <img
        src={logoUrl}
        alt="Arvanitis Constructions"
        height={height}
        style={{ height }}
        className="w-auto select-none opacity-90 transition-all duration-500 group-hover:opacity-100 [filter:invert(1)_brightness(1.9)]"
        draggable={false}
      />
    </a>
  )
}
