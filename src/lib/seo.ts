import { company, faqs, googleReviews, legal, process, projects, services, social, testimonials } from './content'

export const SITE_URL = 'https://www.arvanitisconstruction.gr'
export const SITE_NAME = 'Arvanitis Constructions'
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
export const OG_IMAGE_WIDTH = 1600
export const OG_IMAGE_HEIGHT = 1066
export const LOCALE = 'el_GR'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const BUILD_DATE = new Date().toISOString().slice(0, 10)

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
      'Γνωρίστε την Arvanitis Constructions — 10+ χρόνια εμπειρίας, 500+ ολοκληρωμένα έργα, έδρα Θήβα Βοιωτίας. Φιλοσοφία, αξίες & διαδικασία εργασίας.',
    keywords:
      'Arvanitis Constructions εταιρεία, κατασκευαστική Θήβα, ιστορία κατασκευών Βοιωτία, κατασκευαστική εταιρεία Κεντρική Ελλάδα',
  },
  services: {
    path: '/services/',
    priority: 0.9,
    breadcrumb: 'Υπηρεσίες',
    title: 'Υπηρεσίες Κατασκευής & Ανακαίνισης | Arvanitis Constructions Θήβα',
    description:
      'Κατασκευές κατοικιών, ανακαινίσεις, επαγγελματικοί χώροι, αρχιτεκτονική μελέτη & 3D σχεδιασμός, ολοκληρωμένα έργα με το κλειδί στο χέρι στη Θήβα & Βοιωτία.',
    keywords:
      'υπηρεσίες κατασκευής, ανακαίνιση σπιτιού Θήβα, επαγγελματικοί χώροι Βοιωτία, αρχιτεκτονική μελέτη, 3D σχεδιασμός, κατασκευή με το κλειδί στο χέρι',
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
      'Δημοσιευμένες οικονομικές καταστάσεις & ισολογισμοί της Arvanitis Constructions σύμφωνα με τις υποχρεώσεις δημοσιότητας του Γ.Ε.ΜΗ.',
    keywords: 'οικονομικά στοιχεία Arvanitis Constructions, ισολογισμός ΓΕΜΗ, κατασκευαστική εταιρεία Θήβα',
  },
  privacy: {
    path: '/privacy-policy/',
    changefreq: 'yearly',
    priority: 0.2,
    breadcrumb: 'Πολιτική Απορρήτου',
    title: 'Πολιτική Απορρήτου & GDPR | Arvanitis Constructions',
    description:
      'Πώς η Arvanitis Constructions συλλέγει, επεξεργάζεται και προστατεύει τα προσωπικά σας δεδομένα σύμφωνα με τον GDPR και την ελληνική νομοθεσία.',
    keywords: 'πολιτική απορρήτου, GDPR, προστασία δεδομένων, cookies Arvanitis Constructions',
  },
}

const organizationSchema = {
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: legal.entity,
  url: SITE_URL,
  // Square variant: Google rejects the wide wordmark for the search favicon.
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon-512.png`,
    width: 512,
    height: 512,
  },
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
  // Disambiguates this company from the unrelated "Arvanitis Constructions" shipping firms in Piraeus.
  foundingDate: '2015',
  foundingLocation: { '@type': 'Place', name: 'Θήβα, Βοιωτία, Ελλάδα' },
  founder: { '@type': 'Person', name: 'Νικόλαος Αρβανίτης' },
  knowsLanguage: ['el', 'en'],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Μετρητά, Τραπεζική κατάθεση, Πιστωτική κάρτα',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Θήβα' },
    { '@type': 'City', name: 'Λιβαδειά' },
    { '@type': 'City', name: 'Σχηματάρι' },
    { '@type': 'City', name: 'Οινόφυτα' },
    { '@type': 'City', name: 'Χαλκίδα' },
    { '@type': 'AdministrativeArea', name: 'Βοιωτία' },
    { '@type': 'AdministrativeArea', name: 'Εύβοια' },
    { '@type': 'AdministrativeArea', name: 'Αττική' },
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
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: t.quote,
    publisher: { '@type': 'Organization', name: 'Google' },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Υπηρεσίες κατασκευής & ανακαίνισης',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.long.join(' '),
        url: `${SITE_URL}/services/#${s.id}`,
        serviceType: s.title,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'AdministrativeArea', name: 'Βοιωτία, Εύβοια, Αττική' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${s.title} — τι περιλαμβάνει`,
          itemListElement: s.includes.map((item, j) => ({
            '@type': 'Offer',
            position: j + 1,
            itemOffered: { '@type': 'Service', name: item },
          })),
        },
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
    dateModified: BUILD_DATE,
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE },
  }
}

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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

  // Only the pages that actually render the FAQ may declare it, per Google's policy.
  if (key === 'services' || key === 'contact') {
    graph.push(faqSchema)
  }

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

/**
 * llms.txt — the emerging convention for giving LLM crawlers a clean,
 * markdown summary of the site instead of making them parse the SPA.
 */
export function renderLlmsTxt(): string {
  const serviceLines = services
    .map((s) => `- [${s.title}](${SITE_URL}/services/#${s.id}): ${s.desc}`)
    .join('\n')

  const faqLines = faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')

  const projectLines = projects
    .map((p) => `- ${p.title} — ${p.category}, ${p.location}, ${p.year}. ${p.desc}`)
    .join('\n')

  const processLines = process
    .map((step) => `${step.n}. **${step.title}** — ${step.desc}`)
    .join('\n')

  return `# ${SITE_NAME}

> Κατασκευαστική εταιρεία με έδρα τη Θήβα Βοιωτίας. Αναλαμβάνουμε νέες κατασκευές,
> ανακαινίσεις κατοικιών και επαγγελματικών χώρων, αρχιτεκτονική μελέτη με 3D σχεδιασμό
> και ολοκληρωμένα έργα «με το κλειδί στο χέρι» (turnkey) σε Βοιωτία, Εύβοια και Αττική.

## Στοιχεία επιχείρησης

- **Ονομασία:** ${SITE_NAME}
- **Έδρα:** ${legal.seat}
- **Τηλέφωνο:** ${company.phoneHref}
- **Email:** ${company.email}
- **Ιστότοπος:** ${SITE_URL}
- **Google Maps:** ${company.mapsPlaceUrl}
- **Αξιολόγηση Google:** ${googleReviews.rating}/5 από ${googleReviews.count} κριτικές
- **Εμπειρία:** 10+ χρόνια, 500+ ολοκληρωμένα έργα
- **Ωράριο:** Δευτέρα–Παρασκευή 08:30–21:00, Σάββατο 09:00–14:00
- **Γλώσσες:** Ελληνικά, Αγγλικά

Σημείωση ταυτοποίησης: η εταιρεία αυτή δραστηριοποιείται σε οικοδομικά έργα στη Βοιωτία
και δεν σχετίζεται με ομώνυμες ναυπηγικές/ναυτιλιακές εταιρείες στον Πειραιά.

## Περιοχές εξυπηρέτησης

Θήβα, Λιβαδειά, Σχηματάρι, Οινόφυτα, Αλίαρτος, Χαλκίδα, Βοιωτία, Εύβοια, Αττική.

## Υπηρεσίες

${serviceLines}

## Διαδικασία εργασίας

${processLines}

## Ενδεικτικά έργα

${projectLines}

## Συχνές ερωτήσεις

${faqLines}

## Σελίδες

${Object.values(seoPages)
  .map((p) => `- [${p.breadcrumb ?? 'Αρχική'}](${pageUrl(p.path)}): ${p.description}`)
  .join('\n')}

## Επικοινωνία

Για προσφορά: ${SITE_URL}/contact/ — απάντηση εντός 24 ωρών, δωρεάν αυτοψία, χωρίς δέσμευση.
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

    <link rel="icon" type="image/svg+xml" href="${assetPrefix}favicon.svg" />
    <link rel="icon" type="image/png" sizes="192x192" href="${assetPrefix}icon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="${assetPrefix}favicon-512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="${assetPrefix}apple-touch-icon.png" />

    <script type="application/ld+json">${jsonLd}</script>`
}
