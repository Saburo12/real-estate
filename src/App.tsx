import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedProperties from './components/FeaturedProperties'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App