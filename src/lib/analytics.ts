// Consent-gated Google Analytics 4.
// No script is loaded and no cookie is set before the user accepts the banner.
// Set VITE_GA_ID in .env (e.g. G-XXXXXXXXXX) to enable — leave empty to disable
// both analytics and the cookie banner.

export type ConsentValue = 'granted' | 'denied'

const GA_ID = ((import.meta.env.VITE_GA_ID as string | undefined) ?? '').trim()
const CONSENT_KEY = 'arvanitis-cookie-consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const analyticsEnabled = GA_ID !== ''

export function getConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Storage unavailable (private mode) — the choice lasts for this page view only.
  }
  if (value === 'granted') loadGa()
}

// Clears the stored choice so the banner shows again on next page load.
export function resetConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch {
    // ignore
  }
}

let loaded = false

function loadGa() {
  if (!analyticsEnabled || loaded) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // GA expects the Arguments object itself, not a spread array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

// Call once per page load; loads GA only if the user already consented.
export function initAnalytics() {
  if (getConsent() === 'granted') loadGa()
}

// Conversion / engagement events. Silently no-ops without consent.
export function track(event: string, params?: Record<string, unknown>) {
  window.gtag?.('event', event, params)
}
