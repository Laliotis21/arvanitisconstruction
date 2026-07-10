import { company, googleReviews, legal, process, projects, services, social } from './content'

export const SITE_URL = 'https://www.arvanitisconstruction.gr'
export const SITE_NAME = 'Arvanitis Constructions'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const OG_IMAGE_WIDTH = 1600
export const OG_IMAGE_HEIGHT = 1066
export const LOCALE = 'el_GR'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

export type SeoPageKey =
  | 'main'
  | 'about'
  | 'services'
  | 'projects'
  | 'contact'
  | 'process'
  | 'financial'
  | 'privacy'

type SeoPage = {
  title: string
  description: string
  path: string
  keywords: string
  ogType?: 'website' | 'article'
  robots?: string
  breadcrumb?: string
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  priority?: number
  /** Extra image entry for the sitemap (Google image sitemap extension). */
  sitemapImage?: { loc: string; title: string }
}

export const seoPages: Record<SeoPageKey, SeoPage> = {
  main: {
    path: '/',
    changefreq: 'weekly',
    priority: 1.0,
    sitemapImage: {
      loc: OG_IMAGE,
      title: 'Arvanitis Constructions — Κατασκευές & Ανακαινίσεις Θήβα',
    },
    title: 'Arvanitis Constructions | Κατασκευές & Ανακαινίσεις Θήβα, Βοιωτία',
    description:
      'Κατασκευαστική εταιρεία στη Θήβα — νέες κατασκευές, ανακαινίσεις, επαγγελματικοί χώροι & λύσεις κλειδί στο χέρι. 10+ χρόνια, 500+ έργα. Ζητήστε προσφορά.',
    keywords:
      'κατασκευές Θήβα, ανακαινίσεις Βοιωτία, κατασκευαστική εταιρεία, επαγγελματικοί χώροι, μελέτη σχεδιασμός, κλειδί στο χέρι, Arvanitis Constructions',
  },
  about: {
    path: '/about/',
    breadcrumb: 'Η Εταιρεία',
    title: 'Η Εταιρεία | Arvanitis Constructions — 10+ Χρόνια Κατασκευών Θήβα',
    description:
      'Γνωρίστε την ARVANITIS CONSTRUCTION Ι.Κ.Ε. — 10+ χρόνια εμπειρίας, 500+ ολοκληρωμένα έργα, έδρα Θήβα Βοιωτίας. Φιλοσοφία, αξίες & διαδικασία εργασίας.',
    keywords:
      'Arvanitis Constructions εταιρεία, κατασκευαστική Θήβα, ιστορία κατασκευών Βοιωτία, κατασκευαστική εταιρεία Κεντρική Ελλάδα',
  },
  services: {
    path: '/services/',
    priority: 0.9,
    breadcrumb: 'Υπηρεσίες',
    title: 'Υπηρεσίες Κατασκευής & Ανακαίνισης | Arvanitis Constructions Θήβα',
    description:
      'Κατασκευές κατοικιών, ανακαινίσεις, επαγγελματικοί χώροι, αρχιτεκτονική μελέτη & 3D σχεδιασμός, ολοκληρωμένες λύσεις turnkey στη Θήβα & Βοιωτία.',
    keywords:
      'υπηρεσίες κατασκευής, ανακαίνιση σπιτιού Θήβα, επαγγελματικοί χώροι Βοιωτία, αρχιτεκτονική μελέτη, 3D σχεδιασμός, turnkey κατασκευή',
  },
  projects: {
    path: '/projects/',
    priority: 0.9,
    breadcrumb: 'Έργα',
    title: 'Έργα & Portfolio | Arvanitis Constructions — Θήβα & Βοιωτία',
    description:
      'Portfolio κατασκευών & ανακαινίσεων: κατοικίες, επαγγελματικοί χώροι, αθλητικές εγκαταστάσεις & 3D μελέτες. Δείτε πρόσφατα έργα μας στη Βοιωτία.',
    keywords:
      'έργα κατασκευής Θήβα, portfolio ανακαινίσεων, κατασκευές Βοιωτία, αθλητικές εγκαταστάσεις, επαγγελματικοί χώροι έργα',
  },
  contact: {
    path: '/contact/',
    priority: 0.9,
    breadcrumb: 'Επικοινωνία',
    title: 'Επικοινωνία & Προσφορά | Arvanitis Constructions Θήβα',
    description:
      'Ζητήστε δωρεάν προσφορά για κατασκευή ή ανακαίνιση. Arvanitis Constructions, Κύπρου 4 Θήβα — τηλ. 6944 764 936. Απάντηση εντός 24 ωρών.',
    keywords:
      'επικοινωνία κατασκευαστική Θήβα, προσφορά ανακαίνισης, Arvanitis Constructions τηλέφωνο, κατασκευές Βοιωτία επικοινωνία',
  },
  process: {
    path: '/process/',
    breadcrumb: 'Διαδικασία',
    title: 'Διαδικασία Εργασίας | Arvanitis Constructions — Από τη Μελέτη στην Παράδοση',
    description:
      'Πώς δουλεύουμε: 4 στάδια από τη μελέτη & 3D σχεδιασμό έως την κατασκευή και παράδοση κλειδί στο χέρι. Διαφάνεια & συνέπεια σε κάθε βήμα.',
    keywords:
      'διαδικασία κατασκευής, βήματα ανακαίνισης, 3D σχεδιασμός, κλειδί στο χέρι, διαδικασία έργου Θήβα',
  },
  financial: {
    path: '/financial-statements/',
    changefreq: 'yearly',
    priority: 0.3,
    breadcrumb: 'Οικονομικά Στοιχεία',
    title: 'Οικονομικά Στοιχεία & Ισολογισμοί | Arvanitis Constructions',
    description:
      'Δημοσιευμένες οικονομικές καταστάσεις & ισολογισμοί της ARVANITIS CONSTRUCTION Ι.Κ.Ε. (Γ.Ε.ΜΗ. 190616217000) σύμφωνα με τις υποχρεώσεις δημοσιότητας.',
    keywords: 'οικονομικά στοιχεία Arvanitis Constructions, ισολογισμός ΓΕΜΗ, ARVANITIS CONSTRUCTION ΙΚΕ',
  },
  privacy: {
    path: '/privacy-policy/',
    changefreq: 'yearly',
    priority: 0.2,
    breadcrumb: 'Πολιτική Απορρήτου',
    title: 'Πολιτική Απορρήτου & GDPR | Arvanitis Constructions',
    description:
      'Πώς η ARVANITIS CONSTRUCTION Ι.Κ.Ε. συλλέγει, επεξεργάζεται και προστατεύει τα προσωπικά σας δεδομένα σύμφωνα με τον GDPR και την ελληνική νομοθεσία.',
    keywords: 'πολιτική απορρήτου, GDPR, προστασία δεδομένων, cookies Arvanitis Constructions',
  },
}

const organizationSchema = {
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: legal.entity,
  url: SITE_URL,
  logo: `${SITE_URL}/arvanitis-logo.png`,
  image: OG_IMAGE,
  email: company.email,
  telephone: company.phoneHref,
  taxID: legal.afm,
  vatID: `EL${legal.afm}`,
  identifier: {
    '@type': 'PropertyValue',
    name: 'Αριθμός Γ.Ε.ΜΗ.',
    value: legal.gemi,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Κύπρου 4',
    postalCode: '32200',
    addressLocality: 'Θήβα',
    addressRegion: 'Βοιωτία',
    addressCountry: 'GR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.3163852,
    longitude: 23.3193762,
  },
  hasMap: company.mapsPlaceUrl,
  slogan: company.taglineEn,
  description: seoPages.main.description,
  areaServed: [
    { '@type': 'City', name: 'Θήβα' },
    { '@type': 'AdministrativeArea', name: 'Βοιωτία' },
    { '@type': 'AdministrativeArea', name: 'Στερεά Ελλάδα' },
    { '@type': 'Country', name: 'Ελλάδα' },
  ],
  sameAs: [company.mapsPlaceUrl, ...social.map((s) => s.href)],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(googleReviews.rating),
    reviewCount: String(googleReviews.count),
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Υπηρεσίες κατασκευής & ανακαίνισης',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.desc,
        url: `${SITE_URL}/services/#${s.id}`,
        provider: { '@id': ORG_ID },
        areaServed: 'GR',
      },
    })),
  },
}

const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: seoPages.main.description,
  inLanguage: LOCALE,
  publisher: { '@id': ORG_ID },
}

function pageUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function webPageSchema(page: SeoPage) {
  const url = pageUrl(page.path)
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  }
}

function breadcrumbSchema(page: SeoPage) {
  if (!page.breadcrumb) return null
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Αρχική',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.breadcrumb,
        item: `${SITE_URL}${page.path}`,
      },
    ],
  }
}

function pageJsonLd(key: SeoPageKey) {
  const page = seoPages[key]
  const graph: object[] = [organizationSchema, websiteSchema, webPageSchema(page)]

  const crumbs = breadcrumbSchema(page)
  if (crumbs) graph.push(crumbs)

  if (key === 'services') {
    graph.push({
      '@type': 'ItemList',
      name: 'Υπηρεσίες Arvanitis Constructions',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: `${SITE_URL}/services/#${s.id}`,
      })),
    })
  }

  if (key === 'projects') {
    graph.push({
      '@type': 'ItemList',
      name: 'Έργα Arvanitis Constructions',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          description: p.desc,
          locationCreated: p.location,
          dateCreated: p.year,
        },
      })),
    })
  }

  if (key === 'contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact/#contactpage`,
      url: `${SITE_URL}/contact/`,
      name: page.title,
      description: page.description,
      mainEntity: { '@id': ORG_ID },
    })
  }

  if (key === 'process') {
    graph.push({
      '@type': 'HowTo',
      name: 'Διαδικασία κατασκευής Arvanitis Constructions',
      description: page.description,
      step: process.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.title,
        text: step.desc,
        url: `${SITE_URL}/process/#${step.id}`,
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** Sitemap generated from seoPages so pages can never be missing from it. */
export function renderSitemap(lastmod: string): string {
  const urls = Object.values(seoPages).map((page) => {
    const image = page.sitemapImage
      ? `
    <image:image>
      <image:loc>${escapeHtml(page.sitemapImage.loc)}</image:loc>
      <image:title>${escapeHtml(page.sitemapImage.title)}</image:title>
    </image:image>`
      : ''
    return `  <url>
    <loc>${pageUrl(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq ?? 'monthly'}</changefreq>
    <priority>${(page.priority ?? 0.8).toFixed(1)}</priority>${image}
  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`
}

/** `filename` is the html path relative to the project root, e.g. `about/index.html`. */
export function resolvePageKey(filename: string): SeoPageKey | null {
  const p = `/${filename.replace(/\\/g, '/')}`
  if (p === '/index.html') return 'main'
  const entry = (Object.entries(seoPages) as [SeoPageKey, SeoPage][]).find(
    ([, page]) => page.path !== '/' && p.startsWith(page.path),
  )
  // No 'main' fallback for subpages: a page missing from seoPages must
  // fail the build instead of silently inheriting the homepage meta.
  return entry ? entry[0] : null
}

export function renderSeoHead(pageKey: SeoPageKey, assetPrefix: string): string {
  const page = seoPages[pageKey]
  const canonical = pageUrl(page.path)
  const robots = page.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const ogType = page.ogType ?? 'website'
  const jsonLd = JSON.stringify(pageJsonLd(pageKey), null, 2).replace(/</g, '\\u003c')

  // Home LCP is the hero video poster — preload it so it wins the network race.
  const preload =
    pageKey === 'main'
      ? `\n    <link rel="preload" as="image" href="${assetPrefix}hero-poster.webp" fetchpriority="high" />`
      : ''


  return `    <meta name="theme-color" content="#0B0B0C" />${preload}
    <meta name="robots" content="${robots}" />
    <meta name="author" content="${escapeHtml(SITE_NAME)}" />
    <meta name="keywords" content="${escapeHtml(page.keywords)}" />
    <meta name="geo.region" content="GR-03" />
    <meta name="geo.placename" content="Θήβα, Βοιωτία" />
    <meta name="geo.position" content="38.3163852;23.3193762" />
    <meta name="ICBM" content="38.3163852, 23.3193762" />
    <meta name="format-detection" content="telephone=yes" />

    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="el" href="${canonical}" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />

    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="${LOCALE}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />
    <meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />
    <meta property="og:image:alt" content="${escapeHtml(SITE_NAME)} — κατασκευές & ανακαινίσεις στη Θήβα" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />

    <link rel="icon" type="image/png" href="${assetPrefix}arvanitis-logo.png" />
    <link rel="icon" type="image/svg+xml" href="${assetPrefix}favicon.svg" />
    <link rel="apple-touch-icon" href="${assetPrefix}arvanitis-logo.png" />

    <script type="application/ld+json">${jsonLd}</script>`
}
