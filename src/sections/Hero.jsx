import { Phone, Package, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=85')`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-green-950/85" />

      {/* Main content — centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Trusted Crop Protection Since 1991
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
          Protecting Crops.<br />
          <span className="text-primary">Feeding</span> the Nation.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
          Premium &amp; Effective Crop Protection Solutions Trusted by Indian Farmers
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => scrollTo('#products')}
            className="flex items-center gap-2 bg-primary-dark hover:bg-green-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Package size={20} />
            Browse Products
          </button>
          <a
            href="tel:18001023959"
            className="flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            Talk to Expert
          </a>
        </div>

        {/* Scroll hint */}
        <button
          onClick={() => scrollTo('#products')}
          className="mt-12 text-white/60 hover:text-white flex flex-col items-center gap-1 transition-colors"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      {/* Trust bar — pinned to bottom */}
      <div className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-white">
            <Phone size={16} className="text-primary" />
            <span className="text-sm font-semibold">1800 102 3959</span>
            <span className="text-white/50 text-xs hidden sm:inline">Mon–Fri, 9AM–6PM</span>
          </div>
          <div className="w-px h-5 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white">
            <span className="text-primary text-lg">🏆</span>
            <span className="text-sm font-semibold">30+ Years of Trust</span>
          </div>
          <div className="w-px h-5 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white">
            <span className="text-primary text-lg">🚚</span>
            <span className="text-sm font-semibold">Pan India Delivery</span>
          </div>
          <div className="w-px h-5 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2 text-white">
            <span className="text-primary text-lg">👨‍🌾</span>
            <span className="text-sm font-semibold">1000+ Farmers Served</span>
          </div>
        </div>
      </div>
    </section>
  )
}
