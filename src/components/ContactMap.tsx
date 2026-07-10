import { useState } from 'react'
import { company } from '../lib/content'
import { track } from '../lib/analytics'
import { Pin, ArrowUpRight } from './Icons'

export default function ContactMap() {
  // GDPR two-click embed: the Google Maps iframe (which sends the visitor's IP
  // and sets Google cookies) loads only after an explicit click.
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div className="overflow-hidden rounded-[2px] border border-ink-line bg-ink-card shadow-card">
      <div className="map-frame relative aspect-[16/10] min-h-[280px] sm:min-h-[340px] md:min-h-[400px]">
        {mapLoaded ? (
          <iframe
            title={`Χάρτης — ${company.name}, ${company.location}`}
            src={company.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-line text-gold">
              <Pin />
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-stone">
              Ο διαδραστικός χάρτης φορτώνεται από την Google Maps. Με τη φόρτωση, η Google
              λαμβάνει τη διεύθυνση IP σας και ενδέχεται να τοποθετήσει cookies.
            </p>
            <button
              type="button"
              onClick={() => {
                setMapLoaded(true)
                track('map_load')
              }}
              className="btn-gold"
            >
              Εμφάνιση χάρτη
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-6 border-t border-ink-line p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-8">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-line text-gold">
            <Pin />
          </span>
          <div>
            <p className="text-xs uppercase tracking-wide2 text-stone">Έδρα</p>
            <p className="mt-1 font-display text-xl text-bone">{company.address}</p>
            <p className="mt-1 text-sm text-stone">
              {company.location} · {company.coordinates}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={company.mapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('maps_click')}
            className="btn-gold"
          >
            Άνοιγμα στο Google Maps
            <ArrowUpRight />
          </a>
          <a
            href={company.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('maps_directions_click')}
            className="btn-ghost"
          >
            Οδηγίες
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}
