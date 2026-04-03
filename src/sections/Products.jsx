import { useState } from 'react'
import { products, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            Trusted Crop Protection Solutions
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Scientifically formulated products for every crop and every season — from seed to harvest.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-dark text-white shadow-md scale-105'
                  : 'bg-beige dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary-dark dark:hover:text-primary'
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
