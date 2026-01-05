import { useState, useEffect, useRef } from 'react'
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Waterfront Villa',
    location: 'Miami Beach, FL',
    price: 4500000,
    beds: 5,
    baths: 6,
    sqft: 6200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    tag: 'Featured',
  },
  {
    id: 2,
    title: 'Luxury Penthouse Suite',
    location: 'Manhattan, NY',
    price: 8900000,
    beds: 4,
    baths: 5,
    sqft: 4800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80',
    tag: 'New',
  },
  {
    id: 3,
    title: 'Contemporary Estate',
    location: 'Beverly Hills, CA',
    price: 12500000,
    beds: 7,
    baths: 9,
    sqft: 12000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1475&q=80',
    tag: 'Exclusive',
  },
  {
    id: 4,
    title: 'Oceanview Mansion',
    location: 'Malibu, CA',
    price: 15800000,
    beds: 8,
    baths: 10,
    sqft: 15000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tag: 'Premium',
  },
  {
    id: 5,
    title: 'Urban Loft Residence',
    location: 'San Francisco, CA',
    price: 3200000,
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tag: 'Hot',
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    price: 9500000,
    beds: 6,
    baths: 7,
    sqft: 8500,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1465&q=80',
    tag: 'Luxury',
  },
]

const FeaturedProperties = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
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

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section ref={sectionRef} id="properties" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-400 text-sm font-semibold rounded-full mb-6">
            Featured Properties
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Discover Our <span className="text-gradient">Exclusive Listings</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Explore our handpicked selection of luxury properties, each offering 
            unparalleled elegance and sophisticated living experiences.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`group relative bg-navy-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 text-xs font-bold rounded-full">
                    {property.tag}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(property.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-white'
                    }`}
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-3xl font-bold text-white">
                    {formatPrice(property.price)}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Bed className="w-4 h-4 text-gold-400" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Bath className="w-4 h-4 text-gold-400" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Square className="w-4 h-4 text-gold-400" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gold-500 text-gold-400 font-semibold rounded-xl hover:bg-gold-500 hover:text-navy-950 transition-all duration-300">
            View All Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties