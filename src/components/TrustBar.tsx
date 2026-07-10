import { company } from '../lib/content'

export default function TrustBar() {
  const items = [...company.pillars, ...company.pillars]
  return (
    <div className="relative border-y border-ink-line bg-ink-soft py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-xl italic text-bone">{item}</span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10"
        >
          {items.map((item, i) => (
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
