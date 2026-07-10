import { useEffect, useRef, useState } from 'react'
import { useAnimationControls, useReducedMotion } from 'framer-motion'

export function useInfiniteScroll(durationSeconds: number) {
  const reduce = useReducedMotion()
  const loopRef = useRef<HTMLDivElement>(null)
  const [loopWidth, setLoopWidth] = useState(0)
  const controls = useAnimationControls()

  useEffect(() => {
    const el = loopRef.current
    if (!el) return

    const measure = () => setLoopWidth(el.offsetWidth)
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => {
    if (reduce || loopWidth <= 0) return

    void controls.start({
      x: [0, -loopWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: durationSeconds,
          ease: 'linear',
        },
      },
    })
  }, [controls, durationSeconds, loopWidth, reduce])

  return { reduce, loopRef, controls }
}

export function parseDurationSeconds(duration: string | number) {
  if (typeof duration === 'number') return duration
  return Number.parseFloat(duration) || 28
}
