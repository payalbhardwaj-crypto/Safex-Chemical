import { useState } from 'react'
import { products, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 px-4 section-gray">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-2">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-text">
            Trusted Crop Protection Solutions
          </h2>
          <p className="mt-3 text-corp-text-2 max-w-xl mx-auto text-sm md:text-base">
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
                  ? 'bg-corp-green text-white border-corp-green'
                  : 'bg-white text-corp-text-2 border-corp-border hover:border-corp-green hover:text-corp-green'
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
