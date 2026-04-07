import { Phone, Package, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=85')` }}
      />
      {/* Professional overlay — lighter than before, readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30 pointer-events-none" />
      {/* Bottom fade into trust bar */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-24 pb-20 max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-corp-green/90 text-white text-xs font-semibold px-4 py-1.5 rounded-md mb-6">
          <span className="w-1.5 h-1.5 bg-corp-green-light rounded-full" />
          Trusted Crop Protection Since 1991
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
          Protecting Crops.<br />
          <span className="text-corp-green-light">Feeding</span> the Nation.
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
          Premium &amp; Effective Crop Protection Solutions Trusted by Indian Farmers
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollTo('#products')}
            className="btn-primary flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-md"
          >
            <Package size={16} />
            Browse Products
          </button>
          <a
            href="tel:18001023959"
            className="btn-secondary flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-md border-white/60 text-white hover:bg-white/10"
          >
            <Phone size={16} />
            Talk to Expert
          </a>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('#products')}
          className="mt-14 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce-slow" />
        </button>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 bg-white border-t border-corp-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-corp-green-bg rounded-md flex items-center justify-center flex-shrink-0">
              <Phone size={15} className="text-corp-green" />
            </div>
            <div>
              <div className="text-sm font-bold text-corp-text">1800 102 3959</div>
              <div className="text-xs text-corp-text-2">Mon–Fri, 9AM–6PM</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-corp-border" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-corp-green-bg rounded-md flex items-center justify-center text-lg flex-shrink-0">🏆</div>
            <div>
              <div className="text-sm font-bold text-corp-text">30+ Years of Trust</div>
              <div className="text-xs text-corp-text-2">Established 1991</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-corp-border" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-corp-green-bg rounded-md flex items-center justify-center text-lg flex-shrink-0">🚚</div>
            <div>
              <div className="text-sm font-bold text-corp-text">Pan India Delivery</div>
              <div className="text-xs text-corp-text-2">All major districts</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-corp-border" />

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-corp-green-bg rounded-md flex items-center justify-center text-lg flex-shrink-0">👨‍🌾</div>
            <div>
              <div className="text-sm font-bold text-corp-text">1000+ Farmers Served</div>
              <div className="text-xs text-corp-text-2">Across India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
