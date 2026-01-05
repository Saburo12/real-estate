import { useState, useEffect } from 'react'
import { Menu, X, Home, Phone, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark py-4 shadow-2xl shadow-black/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Home className="w-6 h-6 text-navy-950" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Prestige
              </span>
              <span className="text-gold-400 font-display text-2xl font-bold">.</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 (234) 567-890</span>
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
              Schedule Tour
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-dark transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg text-gray-300 hover:text-gold-400 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl">
            Schedule Tour
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar