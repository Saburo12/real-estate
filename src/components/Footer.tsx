import { Home, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press & Media', href: '#press' },
      { name: 'Contact Us', href: '#contact' },
    ],
    properties: [
      { name: 'Featured Listings', href: '#properties' },
      { name: 'New Developments', href: '#new' },
      { name: 'Luxury Rentals', href: '#rentals' },
      { name: 'Commercial', href: '#commercial' },
      { name: 'International', href: '#international' },
    ],
    services: [
      { name: 'Property Search', href: '#search' },
      { name: 'Property Management', href: '#management' },
      { name: 'Investment Advisory', href: '#advisory' },
      { name: 'Legal Assistance', href: '#legal' },
      { name: 'Market Analysis', href: '#analysis' },
    ],
    resources: [
      { name: 'Blog & Insights', href: '#blog' },
      { name: 'Market Reports', href: '#reports' },
      { name: 'Buyer\'s Guide', href: '#guide' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Privacy Policy', href: '#privacy' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-navy-950" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Prestige
                </span>
                <span className="text-gold-400 font-display text-2xl font-bold">.</span>
              </div>
            </a>
            
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Your trusted partner in luxury real estate. We specialize in connecting 
              discerning clients with exceptional properties worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Luxury Avenue, Suite 500<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@prestigeestates.com" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                  info@prestigeestates.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Properties</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Prestige Estates. All rights reserved. 
              <span className="hidden sm:inline"> | Designed with excellence in mind.</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </footer>
  )
}

export default Footer