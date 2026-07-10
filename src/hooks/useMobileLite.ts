import { useSyncExternalStore } from 'react'

// Phones / touch devices: skip heavy motion & GPU effects that glitch on iOS Safari.
const QUERY = '(max-width: 767px), (hover: none) and (pointer: coarse)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return false
}

export function useMobileLite() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
