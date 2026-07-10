import { social } from '../lib/content'
import { track } from '../lib/analytics'
import { Instagram, TikTok } from './Icons'

const icons = {
  instagram: Instagram,
  tiktok: TikTok,
} as const

type Props = {
  title?: string
  className?: string
}

export default function SocialLinks({ title = 'Ακολουθήστε μας', className = '' }: Props) {
  return (
    <div className={className}>
      {title ? <p className="text-xs uppercase tracking-wide2 text-stone">{title}</p> : null}
      <ul className={`flex flex-wrap gap-3 ${title ? 'mt-4' : ''}`}>
        {social.map(({ label, href, network }) => {
          const Icon = icons[network]
          return (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={() => track('social_click', { network })}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-stone transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
