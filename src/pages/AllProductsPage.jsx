import { useState } from 'react'
import { ShoppingCart, Check, Search, X } from 'lucide-react'
import { CATALOG_CATEGORIES, CATALOG_CROPS, CATALOG_INSECTS, CATALOG_DISEASES } from '../data/catalogData'
import { useInquiry } from '../context/InquiryContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

const TABS = ['Products', 'Crops', 'Diseases']

// ── Product mini-card (name + composition only, no image) ─────────────────────
function ProductMiniCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const inCart = cart.some(p => p.id === product.id)

  return (
    <div className="bg-white border border-corp-border rounded-lg overflow-hidden group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div className="flex-1">
          <h4 className="text-xs font-bold text-corp-text leading-snug">{product.name}</h4>
          <p className="text-[10px] text-corp-text-2 mt-0.5 leading-snug">{product.composition}</p>
        </div>

        <button
          onClick={() => addProduct(product)}
          disabled={inCart}
          className={`flex items-center justify-center gap-1 text-[10px] font-semibold py-1.5 rounded transition-colors w-full ${
            inCart
              ? 'bg-corp-green-bg text-corp-green border border-corp-green/30'
              : 'bg-corp-green text-white hover:bg-corp-green-dark'
          }`}
        >
          {inCart
            ? <><Check size={9} /> Added</>
            : <><ShoppingCart size={9} /> Add to Inquiry</>
          }
        </button>
      </div>
    </div>
  )
}

// ── Crop circle item ──────────────────────────────────────
function CropItem({ crop }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-20 h-20 rounded-full border-2 border-corp-border group-hover:border-corp-green bg-corp-green-bg flex items-center justify-center transition-all duration-200 group-hover:shadow-card">
        <span className="text-3xl">{crop.icon}</span>
      </div>
      <span className="text-xs font-medium text-corp-text text-center leading-tight max-w-[72px]">{crop.name}</span>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────
export default function AllProductsPage() {
  const [cartOpen,  setCartOpen]  = useState(false)
  const [activeTab, setActiveTab] = useState('Products')
  const [search,    setSearch]    = useState('')

  // Flatten all products for search
  const allProducts = CATALOG_CATEGORIES.flatMap(cat => cat.products)
  const searchResults = search.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.composition.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    : null

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Secondary tab bar ───────────────────────── */}
      <div className="sticky top-16 z-40 bg-white border-b border-corp-border shadow-nav">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSearch('') }}
                className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-corp-green text-corp-green'
                    : 'border-transparent text-corp-text-2 hover:text-corp-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search — only on Products tab */}
          {activeTab === 'Products' && (
            <div className="flex items-center gap-2 bg-corp-surface border border-corp-border rounded-md px-3 py-1.5 w-56">
              <Search size={13} className="text-corp-text-2 flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                className="flex-1 text-xs text-corp-text placeholder-corp-text-2 bg-transparent outline-none"
              />
              {search && (
                <button onClick={() => setSearch('')}>
                  <X size={12} className="text-corp-text-2 hover:text-corp-text" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* ══ PRODUCTS TAB ═════════════════════════════ */}
        {activeTab === 'Products' && (
          <>
            {/* Search results view */}
            {searchResults ? (
              <div>
                <p className="text-sm text-corp-text-2 mb-6">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for{' '}
                  <strong className="text-corp-text">"{search}"</strong>
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {searchResults.map(product => (
                      <ProductMiniCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 border border-corp-border rounded-lg">
                    <div className="text-4xl mb-3">🌿</div>
                    <p className="text-sm font-semibold text-corp-text mb-1">No products found</p>
                    <p className="text-xs text-corp-text-2">Try a different keyword</p>
                  </div>
                )}
              </div>
            ) : (
              /* Category-by-category catalog */
              <div className="divide-y divide-corp-border">
                {CATALOG_CATEGORIES.map(category => (
                  <div key={category.id} className="py-10 flex flex-col md:flex-row gap-8">

                    {/* Left: category info */}
                    <div className="md:w-52 flex-shrink-0 flex flex-col gap-3">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                        {category.label}
                      </div>
                      <h2 className="text-lg font-bold text-corp-text">{category.label}</h2>
                      <p className="text-xs text-corp-text-2 leading-relaxed">{category.description}</p>
                      <p className={`text-xs font-medium ${category.color}`}>{category.products.length} products</p>
                    </div>

                    {/* Right: product grid */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {category.products.map(product => (
                        <ProductMiniCard key={product.id} product={product} />
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ══ CROPS TAB ════════════════════════════════ */}
        {activeTab === 'Crops' && (
          <div className="py-4">
            <h2 className="text-xl font-bold text-corp-text mb-2">Crops</h2>
            <p className="text-sm text-corp-text-2 mb-8">
              Select a crop to view Safex products recommended by our agronomists.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {CATALOG_CROPS.map(crop => (
                <CropItem key={crop.id} crop={crop} />
              ))}
            </div>
          </div>
        )}

        {/* ══ DISEASES TAB ═════════════════════════════ */}
        {activeTab === 'Diseases' && (
          <div className="py-4 flex flex-col gap-12">

            {/* A. Insects */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-corp-text mb-1">A. Insects</h2>
                <p className="text-sm text-corp-text-2">Common insect pests affecting crops across India.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {CATALOG_INSECTS.map(insect => (
                  <div key={insect.id} className="bg-white border border-corp-border rounded-lg p-3 hover:shadow-card transition-shadow">
                    <p className="text-sm font-semibold text-corp-text">{insect.name}</p>
                    <p className="text-xs text-corp-text-2 italic mt-0.5">{insect.scientificName}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-corp-border" />

            {/* B. Diseases */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-corp-text mb-1">B. Diseases</h2>
                <p className="text-sm text-corp-text-2">Common crop diseases and the Safex solutions recommended to manage them.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {CATALOG_DISEASES.map(disease => (
                  <div key={disease.id} className="bg-white border border-corp-border rounded-lg p-3 hover:shadow-card transition-shadow">
                    <p className="text-sm font-semibold text-corp-text">{disease.name}</p>
                    <p className="text-xs text-corp-text-2 mt-0.5">{disease.type}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
