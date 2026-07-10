import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useMobileLite } from '../../hooks/useMobileLite'

export function Counter({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const lite = useMobileLite()
  const [value, setValue] = useState(lite ? to : 0)

  useEffect(() => {
    if (lite) {
      setValue(to)
      return
    }
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, lite])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
