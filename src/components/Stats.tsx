import { useEffect, useState, useRef } from 'react'
import { Building2, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Building2, value: 2500, suffix: '+', label: 'Properties Sold', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, value: 15000, suffix: '+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: 25, suffix: '+', label: 'Years Experience', color: 'from-gold-400 to-gold-600' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'from-emerald-500 to-teal-500' },
]

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    stats.forEach((stat, index) => {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, duration / steps)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative py-24 bg-navy-900/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5`}>
                  <div className="w-full h-full rounded-2xl bg-navy-950 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {counts[index].toLocaleString()}
                <span className="text-gradient">{stat.suffix}</span>
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats