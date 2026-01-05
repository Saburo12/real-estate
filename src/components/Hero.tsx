import { useState, useEffect } from 'react'
import { Search, MapPin, Home, DollarSign, ChevronDown, Play, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('buy')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30 animate-gradient-shift"
          style={{
            background: 'linear-gradient(45deg, rgba(212,165,74,0.1), rgba(31,41,55,0), rgba(212,165,74,0.1))',
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">
                #1 Luxury Real Estate Platform
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              Discover Your
              <span className="block text-gradient mt-2">Dream Home</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Experience unparalleled luxury living with our exclusive collection of premium 
              properties. From stunning penthouses to magnificent estates, find your perfect sanctuary.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold rounded-xl hover:shadow-2xl hover:shadow-gold-500/30 transform hover:-translate-y-1 transition-all duration-300">
                Explore Properties
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group flex items-center gap-3 px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Watch Tour
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}&backgroundColor=c0aede,d1d4f9,ffd5dc,ffdfbf`}
                    alt={`Client ${i}`}
                    className="w-12 h-12 rounded-full border-2 border-navy-950"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">2,500+ Happy Clients</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-gray-400 text-sm ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Search Card */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 shadow-2xl shadow-black/20">
              {/* Tabs */}
              <div className="flex gap-2 p-1 bg-navy-900/50 rounded-xl mb-8">
                {['buy', 'rent', 'sell'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search Fields */}
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400" />
                  <input
                    type="text"
                    placeholder="Enter location, city or ZIP"
                    className="w-full pl-12 pr-4 py-4 bg-navy-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400" />
                    <select className="w-full pl-12 pr-10 py-4 bg-navy-900/50 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="villa">Villa</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>

                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400" />
                    <select className="w-full pl-12 pr-10 py-4 bg-navy-900/50 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300">
                      <option value="">Price Range</option>
                      <option value="1">$500K - $1M</option>
                      <option value="2">$1M - $2M</option>
                      <option value="3">$2M - $5M</option>
                      <option value="4">$5M+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                  <Search className="w-5 h-5" />
                  Search Properties
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                {[
                  { value: '500+', label: 'Properties' },
                  { value: '50+', label: 'Cities' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero