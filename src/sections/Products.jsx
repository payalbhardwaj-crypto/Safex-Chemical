import { useState } from 'react'
import { products, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 px-4 bg-[#0B0F0C]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted Crop Protection Solutions
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Scientifically formulated products for every crop and every season — from seed to harvest.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-green-600 text-white border-green-600 shadow-[0_0_12px_rgba(34,197,94,0.25)]'
                  : 'bg-white/[0.04] text-gray-400 border-white/[0.09] hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/[0.07]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
