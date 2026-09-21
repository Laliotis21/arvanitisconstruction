import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Faq from './components/Faq'

// Standalone page served at /contact/
export default function ContactPage() {
  return (
    <>
      <Navbar homePrefix="../" solid activePage="contact" />

      <main className="pt-[88px]">
        <Contact standalone privacyHref="../privacy-policy/" />
        <Faq />
      </main>

      <Footer homePrefix="../" />
    </>
  )
}
