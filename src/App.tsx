import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedCarousel from './components/FeaturedCarousel'
import TrustSignals from './components/TrustSignals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCarousel />
      <TrustSignals />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
