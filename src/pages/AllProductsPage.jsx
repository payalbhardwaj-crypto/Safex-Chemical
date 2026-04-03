import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Search, ArrowLeft, X } from 'lucide-react'
import { products, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'
export default function AllProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Read initial category from URL query param e.g. /products?category=Insecticide
  const urlCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(urlCategory) ? urlCategory : 'All'
  )

  // Sync category chip → URL
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  // When URL changes externally (e.g. back button), sync state
  useEffect(() => {
    const cat = searchParams.get('category') || 'All'
    setActiveCategory(CATEGORIES.includes(cat) ? cat : 'All')
  }, [searchParams])

  const filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.ingredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.benefit.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-beige dark:bg-dark-bg transition-colors duration-300">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header banner */}
      <div className="relative bg-primary-dark pt-28 pb-16 px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back link */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-green-200 hover:text-white text-sm font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <span className="text-xs font-bold uppercase tracking-widest text-green-300 mb-3 block">
            All Products
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Crop Protection Solutions
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-xl">
            Browse all {products.length} Safex products — insecticides, fungicides, herbicides, and organic solutions for every crop and every season.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 max-w-lg">
            <Search size={18} className="text-green-200 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by product name, ingredient..."
              className="flex-1 bg-transparent text-white placeholder-green-300 text-sm outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-green-300 hover:text-white">
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-dark text-white shadow-md scale-105'
                  : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary-dark dark:hover:text-primary border border-gray-200 dark:border-dark-border'
              }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({products.filter(p => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Showing <strong className="text-gray-800 dark:text-white">{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && <> in <span className="text-primary-dark dark:text-primary font-semibold">{activeCategory}</span></>}
          {searchQuery && <> matching "<span className="text-primary-dark dark:text-primary font-semibold">{searchQuery}</span>"</>}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">No products found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Try a different search term or category.
            </p>
            <button
              onClick={() => { setSearchQuery(''); handleCategoryChange('All') }}
              className="bg-primary-dark text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-green-700 transition-colors"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
