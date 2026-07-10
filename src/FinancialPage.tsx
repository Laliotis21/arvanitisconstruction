import Logo from './components/Logo'
import Footer from './components/Footer'
import Financial from './components/Financial'
import { ArrowRight } from './components/Icons'

// Standalone page served at /financial-statements/ — mirrors the old site.
export default function FinancialPage() {
  return (
    <>
      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/85 backdrop-blur-xl">
        <div className="container-x flex h-[88px] items-center justify-between">
          <Logo href="../" />
          <a
            href="../"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone transition-colors hover:text-gold"
          >
            <span aria-hidden className="rotate-180">
              <ArrowRight />
            </span>
            Επιστροφή στην αρχική
          </a>
        </div>
      </header>

      <main>
        <Financial />
      </main>

      <Footer homePrefix="../" />
    </>
  )
}
