import type { SVGProps } from 'react'
import type { Service } from '../lib/content'

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ServiceIcon({ name, ...props }: { name: Service['icon'] } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case 'build':
      return (
        <svg {...base} {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 10h.01M15 10h.01" />
        </svg>
      )
    case 'reno':
      return (
        <svg {...base} {...props}>
          <path d="m11 4 6 6" />
          <path d="M4 20l4.5-1.5L20 7l-3-3L5.5 15.5 4 20Z" />
          <path d="M14 7l3 3" />
        </svg>
      )
    case 'commercial':
      return (
        <svg {...base} {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
          <path d="M13 9h5a1 1 0 0 1 1 1v11" />
          <path d="M8 8h.01M8 12h.01M8 16h.01M16 13h.01M16 17h.01" />
        </svg>
      )
    case 'design':
      return (
        <svg {...base} {...props}>
          <path d="M12 3v18" />
          <path d="M5 8l7-5 7 5" />
          <path d="M4 21h16" />
          <path d="M8 21v-6l4-3 4 3v6" />
        </svg>
      )
    case 'turnkey':
      return (
        <svg {...base} {...props}>
          <circle cx="8" cy="15" r="4" />
          <path d="m10.85 12.15 6.15-6.15 2 2-1.5 1.5 1.5 1.5-2 2-1.5-1.5-2 2" />
        </svg>
      )
  }
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Quote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.2 0 .4 0 .6-.05C7.5 16.5 6 17.7 4 18l.6 1.8c3.5-.6 6.4-3.3 6.4-7.3V10.5C11 8 9.8 6 7.5 6Zm9 0C14 6 12 8 12 10.5s2 4.5 4.5 4.5c.2 0 .4 0 .6-.05-.6 1.6-2.1 2.8-4.1 3.1l.6 1.8c3.5-.6 6.4-3.3 6.4-7.3V10.5C20 8 18.8 6 16.5 6Z" />
    </svg>
  )
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2" />
    </svg>
  )
}

export function Pin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={24} height={24} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function Download(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="M12 3v12M7 11l5 4 5-4" />
      <path d="M5 21h14" />
    </svg>
  )
}

export function Doc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={22} height={22} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  )
}

export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={20} height={20} {...props}>
      <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
