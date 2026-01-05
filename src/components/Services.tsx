import { useEffect, useState, useRef } from 'react'
import { Home, Key, TrendingUp, Shield, Headphones, FileText, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Property Search',
    description: 'Access our exclusive database of luxury properties tailored to your preferences and lifestyle requirements.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Comprehensive management services ensuring your investment is maintained to the highest standards.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Expert guidance on real estate investments with market analysis and portfolio optimization strategies.',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: Shield,
    title: 'Legal Assistance',
    description: 'Full legal support throughout your property transaction, ensuring a smooth and secure process.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge',
    description: 'Dedicated concierge service available around the clock to assist with all your real estate needs.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FileText,
    title: 'Market Analysis',
    description: 'In-depth market reports and property valuations to help you make informed decisions.',
    color: 'from-indigo-500 to-violet-500',
  },
]

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-400 text-sm font-semibold rounded-full mb-6">
              Our Services
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Premium Services for <span className="text-gradient">Exceptional Living</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We offer a comprehensive suite of services designed to make your 
              real estate journey seamless and rewarding.
            </p>
          </div>

          <div
            className={`flex justify-start lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-navy-950/50 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-0.5`}>
                  <div className="w-full h-full rounded-2xl bg-navy-950 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold-400 font-medium group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services