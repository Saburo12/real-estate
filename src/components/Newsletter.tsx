import { useEffect, useState, useRef } from 'react'
import { Mail, ArrowRight, Sparkles } from 'lucide-react'

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={`glass rounded-3xl p-8 lg:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 mb-8">
            <Sparkles className="w-10 h-10 text-navy-950" />
          </div>

          {/* Content */}
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
            Get Exclusive <span className="text-gradient">Property Alerts</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Be the first to know about new luxury listings, market insights, and 
            exclusive investment opportunities delivered directly to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Trust Text */}
          <p className="text-gray-500 text-sm mt-6">
            Join 10,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter