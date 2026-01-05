import { useEffect, useState, useRef } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Sterling',
    role: 'CEO, Sterling Enterprises',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    content: 'Prestige Estates exceeded all my expectations. Their attention to detail and understanding of luxury real estate is unmatched. They found us our dream penthouse in Manhattan within weeks.',
    rating: 5,
    property: 'Manhattan Penthouse',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    content: 'The team at Prestige made the entire process seamless. From property search to closing, they handled everything with professionalism and expertise. Highly recommend their services.',
    rating: 5,
    property: 'Beverly Hills Estate',
  },
  {
    id: 3,
    name: 'Sophia Williams',
    role: 'Investment Banker',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    content: 'Outstanding service from start to finish. Their market knowledge and negotiation skills saved us significantly on our Miami property. A truly premium experience.',
    rating: 5,
    property: 'Miami Waterfront Villa',
  },
]

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-400 text-sm font-semibold rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover why discerning clients trust Prestige Estates for their 
            luxury real estate needs.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Card */}
          <div className="relative glass rounded-3xl p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 lg:left-12">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center">
                <Quote className="w-6 h-6 text-navy-950" />
              </div>
            </div>

            <div className="pt-4">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500/30"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                    <p className="text-gold-400 text-sm mt-1">
                      Purchased: {testimonials[activeIndex].property}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-950 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {['Forbes', 'Bloomberg', 'WSJ', 'CNBC', 'Reuters'].map((brand) => (
              <span key={brand} className="text-2xl font-bold text-gray-400 tracking-wider">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials