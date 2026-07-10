import Logo from './components/Logo'
import { company, legal } from './lib/content'
import { ArrowRight } from './components/Icons'
import { analyticsEnabled, resetConsent } from './lib/analytics'

const LAST_UPDATED = '10 Ιουλίου 2026'

// Standalone page served at /privacy-policy/ — mirrors FinancialPage layout.
export default function PrivacyPage() {
  const year = new Date().getFullYear()
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
        <section className="relative border-b border-ink-line bg-ink-soft py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
          <div className="container-x max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold" />
              Νομική ενημέρωση
            </p>
            <h1 className="heading-display mt-6 text-4xl md:text-5xl">Πολιτική Απορρήτου</h1>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα, σύμφωνα με
              τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 (GDPR) και την ελληνική
              νομοθεσία (Ν. 4624/2019).
            </p>
            <p className="mt-4 text-sm text-stone/70">Τελευταία ενημέρωση: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="bg-ink py-20 md:py-28">
          <div className="container-x max-w-3xl space-y-14">
            <Block title="1. Υπεύθυνος Επεξεργασίας">
              <p>
                Υπεύθυνος επεξεργασίας των προσωπικών σας δεδομένων είναι η εταιρεία{' '}
                <strong className="text-bone">{legal.entity}</strong> (Αρ. Γ.Ε.ΜΗ. {legal.gemi}, ΑΦΜ{' '}
                {legal.afm}, Δ.Ο.Υ. {legal.doy}), με έδρα {legal.seat}.
              </p>
              <p>
                Επικοινωνία:{' '}
                <a href={`mailto:${company.email}`} className="text-gold hover:underline">
                  {company.email}
                </a>{' '}
                · τηλ.{' '}
                <a href={`tel:${company.phoneHref}`} className="text-gold hover:underline">
                  {company.phone}
                </a>
                .
              </p>
            </Block>

            <Block title="2. Ποια δεδομένα συλλέγουμε">
              <p>
                Μέσω της φόρμας επικοινωνίας της ιστοσελίδας συλλέγουμε τα στοιχεία που μας
                υποβάλλετε οικειοθελώς: ονοματεπώνυμο, τηλέφωνο, διεύθυνση email, υπηρεσία που σας
                ενδιαφέρει και το μήνυμά σας.
              </p>
              <p>
                Τα στοιχεία της φόρμας προωθούνται μέσω του διακομιστή φιλοξενίας της ιστοσελίδας
                απευθείας στο εταιρικό μας email ({company.email}) και δεν αποθηκεύονται σε βάση
                δεδομένων της ιστοσελίδας. Για λόγους ασφάλειας και αποτροπής κατάχρησης, στο
                μήνυμα καταγράφεται και η διεύθυνση IP από την οποία υποβλήθηκε η φόρμα.
              </p>
              <p>
                Οι γραμματοσειρές της ιστοσελίδας φιλοξενούνται τοπικά στον διακομιστή μας — κατά
                την απλή περιήγηση δεν διαβιβάζεται κανένα δεδομένο σε τρίτους, πέραν όσων
                περιγράφονται στις ενότητες για τα cookies και τον χάρτη.
              </p>
            </Block>

            <Block title="3. Σκοπός & νομική βάση επεξεργασίας">
              <p>
                Επεξεργαζόμαστε τα στοιχεία σας αποκλειστικά για να απαντήσουμε στο αίτημά σας και να
                επικοινωνήσουμε μαζί σας σχετικά με προσφορά ή συνεργασία. Νομική βάση είναι η λήψη
                μέτρων πριν από τη σύναψη σύμβασης κατόπιν αιτήματός σας (άρθρο 6 παρ. 1 στοιχ. β΄
                GDPR) και η συγκατάθεσή σας (άρθρο 6 παρ. 1 στοιχ. α΄ GDPR), την οποία δηλώνετε στη
                φόρμα επικοινωνίας.
              </p>
            </Block>

            <Block title="4. Χρόνος διατήρησης">
              <p>
                Διατηρούμε τα στοιχεία επικοινωνίας σας για όσο διάστημα απαιτείται για τη
                διεκπεραίωση του αιτήματός σας και έως 24 μήνες από την τελευταία επικοινωνία, εκτός
                αν προκύψει συνεργασία, οπότε ισχύουν οι νόμιμες προθεσμίες διατήρησης (φορολογική &
                εμπορική νομοθεσία).
              </p>
            </Block>

            <Block title="5. Αποδέκτες δεδομένων">
              <p>
                Δεν πωλούμε ούτε διαβιβάζουμε τα δεδομένα σας σε τρίτους για διαφημιστικούς σκοπούς.
                Πρόσβαση έχουν μόνο εξουσιοδοτημένα στελέχη της εταιρείας και οι πάροχοι υπηρεσιών
                email/φιλοξενίας που ενεργούν για λογαριασμό μας.
              </p>
            </Block>

            <Block title="6. Cookies & στατιστικά επισκεψιμότητας">
              <p>
                Η ιστοσελίδα χρησιμοποιεί cookies ανάλυσης επισκεψιμότητας (Google Analytics 4){' '}
                <strong className="text-bone">μόνο εφόσον τα αποδεχθείτε</strong> από το σχετικό
                μήνυμα συγκατάθεσης. Αν τα απορρίψετε, δεν φορτώνεται κανένα εργαλείο ανάλυσης και
                δεν αποθηκεύεται κανένα cookie παρακολούθησης. Τα δεδομένα συλλέγονται με
                ανωνυμοποίηση διεύθυνσης IP.
              </p>
              <p>
                Ο διαδραστικός χάρτης Google Maps στη σελίδα επικοινωνίας φορτώνεται επίσης{' '}
                <strong className="text-bone">μόνο μετά από δική σας ενέργεια</strong> («Εμφάνιση
                χάρτη»). Με τη φόρτωσή του, η Google LLC λαμβάνει τη διεύθυνση IP σας και ενδέχεται
                να τοποθετήσει cookies, σύμφωνα με την{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  πολιτική απορρήτου της Google
                </a>
                . Τυχόν διαβίβαση εκτός ΕΕ καλύπτεται από το πλαίσιο EU-US Data Privacy Framework.
              </p>
              <p>
                Μπορείτε να αλλάξετε την επιλογή σας για τα cookies ανά πάσα στιγμή:
              </p>
              <button
                type="button"
                onClick={() => {
                  resetConsent()
                  window.location.reload()
                }}
                className="btn-ghost"
              >
                Αλλαγή προτιμήσεων cookies
              </button>
              {!analyticsEnabled && (
                <p className="text-sm text-stone/70">
                  Σημείωση: αυτή τη στιγμή δεν είναι ενεργοποιημένο κανένα εργαλείο ανάλυσης στην
                  ιστοσελίδα.
                </p>
              )}
            </Block>

            <Block title="7. Τα δικαιώματά σας">
              <p>Σύμφωνα με τον GDPR έχετε δικαίωμα:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>πρόσβασης στα δεδομένα που τηρούμε για εσάς,</li>
                <li>διόρθωσης ανακριβών στοιχείων,</li>
                <li>διαγραφής («δικαίωμα στη λήθη»),</li>
                <li>περιορισμού της επεξεργασίας,</li>
                <li>φορητότητας των δεδομένων σας,</li>
                <li>εναντίωσης στην επεξεργασία, και</li>
                <li>ανάκλησης της συγκατάθεσής σας ανά πάσα στιγμή.</li>
              </ul>
              <p>
                Για την άσκηση των δικαιωμάτων σας, στείλτε email στο{' '}
                <a href={`mailto:${company.email}`} className="text-gold hover:underline">
                  {company.email}
                </a>
                . Απαντάμε εντός ενός μηνός. Έχετε επίσης δικαίωμα καταγγελίας στην Αρχή Προστασίας
                Δεδομένων Προσωπικού Χαρακτήρα (
                <a
                  href="https://www.dpa.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.dpa.gr
                </a>
                ).
              </p>
            </Block>

            <Block title="8. Μεταβολές της πολιτικής">
              <p>
                Ενδέχεται να επικαιροποιούμε την παρούσα πολιτική. Η εκάστοτε ισχύουσα έκδοση
                δημοσιεύεται σε αυτή τη σελίδα με την ημερομηνία τελευταίας ενημέρωσης.
              </p>
            </Block>
          </div>
        </section>
      </main>

      {/* Slim footer */}
      <footer className="border-t border-ink-line bg-ink py-12">
        <div className="container-x flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone">
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
              {company.email}
            </a>
            <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-gold">
              {company.phone}
            </a>
            <span>{company.location}</span>
          </div>
          <p className="text-xs text-stone/70">
            © {year} {legal.entity} · Αρ. Γ.Ε.ΜΗ. {legal.gemi} · ΑΦΜ {legal.afm}
          </p>
        </div>
      </footer>
    </>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-bone md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-stone">{children}</div>
    </div>
  )
}
