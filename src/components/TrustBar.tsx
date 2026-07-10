import { company } from '../lib/content'
import { useMobileLite } from '../hooks/useMobileLite'

export default function TrustBar() {
  const lite = useMobileLite()
  const items = company.pillars

  if (lite) {
    return (
      <div className="relative border-y border-ink-line bg-ink-soft py-5">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {items.map((item) => (
            <span key={item} className="font-display text-lg italic text-bone">
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const loop = [...items, ...items]
  return (
    <div className="relative border-y border-ink-line bg-ink-soft py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10 will-change-transform">
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-xl italic text-bone">{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10 will-change-transform"
        >
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-xl italic text-bone">{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-100%)}}`}</style>
    </div>
  )
}
