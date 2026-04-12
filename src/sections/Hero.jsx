import { Phone, Package, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=85')` }}
      />
      {/* Dark overlay — strong enough to ensure text pops */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Bottom gradient into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0F0C] to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-24 max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          Trusted Crop Protection Since 1991
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
          Protecting Crops.<br />
          <span className="text-green-400">Feeding</span> the Nation.
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
          Premium &amp; Effective Crop Protection Solutions Trusted by Indian Farmers
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollTo('#products')}
            className="btn-glow flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-md"
          >
            <Package size={16} />
            Browse Products
          </button>
          <a
            href="tel:18001023959"
            className="btn-ghost-dark flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-md"
          >
            <Phone size={16} />
            Talk to Expert
          </a>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('#products')}
          className="mt-16 flex flex-col items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce-slow" />
        </button>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 bg-[#0f1712]/80 backdrop-blur-md border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '📞', label: '1800 102 3959', sub: 'Mon–Fri, 9AM–6PM' },
            { icon: '🏆', label: '30+ Years of Trust', sub: 'Established 1991' },
            { icon: '🚚', label: 'Pan India Delivery', sub: 'All major districts' },
            { icon: '👨‍🌾', label: '1000+ Farmers', sub: 'Across India' },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{label}</div>
                <div className="text-xs text-gray-500">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
