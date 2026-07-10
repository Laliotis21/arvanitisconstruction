# Arvanitis Constructions — Website

Premium one-page site for **Arvanitis Constructions** (Θήβα, Βοιωτίας).
Full redesign of `arvanitisconstruction.gr`.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion
**Aesthetic:** dark luxury — charcoal `#0B0B0C` + gold-bronze `#C79A5B`, Cormorant Garamond + Manrope (Greek-ready).

## Sections
Navbar · Hero (Design/Build/Deliver) · Trust marquee · About · Services (5) · Projects (bento) · Process (4 βήματα) · Stats (count-up) · Testimonials · Contact (form) · Footer.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # → dist/  (typecheck + production build)
npm run preview    # serve the built dist/ locally
```

---

## Deploy to Hostinger (static hosting)

The build output is fully static — no Node runtime needed on the server.

1. **Build**
   ```bash
   npm run build
   ```
   Produces `dist/` (HTML, hashed JS/CSS, `favicon.svg`, `robots.txt`, `sitemap.xml`, `.htaccess`).

2. **Upload** — hPanel → **Files → File Manager** (or FTP/SFTP).
   - Open `public_html/` (empty it first if replacing the old site).
   - Upload **everything inside `dist/`** into `public_html/` — the *contents*, not the folder.
   - Ensure the hidden **`.htaccess`** is included (toggle "show hidden files" in File Manager, or upload via FTP with hidden files shown).

3. **Domain / SSL**
   - Point `arvanitisconstruction.gr` to the hosting (hPanel → Domains).
   - Enable free SSL (hPanel → **SSL**). The `.htaccess` already forces HTTPS.

4. **Done** — visit `https://www.arvanitisconstruction.gr`.

> FTP alternative: connect with FileManager/FileZilla to the Hostinger FTP host, drop `dist/*` into `/public_html/`.

---

## Contact form

Currently uses a **mailto** fallback (opens the visitor's mail client, pre-filled to `info@arvanitisconstruction.gr`) — works on any static host with zero backend.

To get form submissions straight to your inbox without mailto, wire a form service:
- **Formspree** / **Web3Forms** (free tiers) — replace the `onSubmit` handler in
  `src/components/Contact.tsx` with a `fetch('https://formspree.io/f/XXXX', …)` POST, then rebuild.

---

## Editing content

All copy, services, projects, stats and testimonials live in **`src/lib/content.ts`** — edit there, no component hunting.
Brand colors/fonts live in `tailwind.config.js`. SEO/meta in `index.html`.

## Before go-live
- [ ] Add real project photos → drop in `public/`, reference in `Projects.tsx` (replace gradient tiles).
- [ ] Add `og-image.jpg` (1200×630) to `public/` for social sharing.
- [ ] Verify phone/email/address in `src/lib/content.ts`.
- [ ] (Optional) wire Formspree/Web3Forms for the contact form.
