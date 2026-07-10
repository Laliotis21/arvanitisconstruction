import { useEffect, useState } from 'react'
import { analyticsEnabled, getConsent, initAnalytics, setConsent, type ConsentValue } from '../lib/analytics'

// Shown only when analytics is configured (VITE_GA_ID) and no choice is stored.
// `privacyHref` is relative because pages live in subfolders ('privacy-policy/'
// from the root page, '../privacy-policy/' from /services/ etc.).
export default function CookieBanner({ privacyHref = 'privacy-policy/' }: { privacyHref?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    initAnalytics()
    if (analyticsEnabled && getConsent() === null) setVisible(true)
  }, [])

  if (!visible) return null

  function choose(value: ConsentValue) {
    setConsent(value)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Συγκατάθεση cookies"
      className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-xl rounded-[2px] border border-ink-line bg-ink-card p-6 shadow-card md:inset-x-auto md:bottom-6 md:right-6"
    >
      <p className="font-display text-xl text-bone">Cookies &amp; Απόρρητο</p>
      <p className="mt-2 text-sm leading-relaxed text-stone">
        Χρησιμοποιούμε cookies ανάλυσης επισκεψιμότητας (Google Analytics) μόνο με τη συγκατάθεσή σας,
        για να βελτιώνουμε την ιστοσελίδα μας. Δείτε την{' '}
        <a href={privacyHref} className="text-gold underline-offset-4 hover:underline">
          Πολιτική Απορρήτου
        </a>
        .
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => choose('granted')} className="btn-gold flex-1">
          Αποδοχή
        </button>
        <button type="button" onClick={() => choose('denied')} className="btn-ghost flex-1">
          Απόρριψη
        </button>
      </div>
    </div>
  )
}
