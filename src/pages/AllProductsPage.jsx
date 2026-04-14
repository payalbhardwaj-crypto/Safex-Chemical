import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart, Check, Search, X } from 'lucide-react'
import { CATALOG_CATEGORIES, CATALOG_CROPS, CATALOG_INSECTS, CATALOG_DISEASES } from '../data/catalogData'
import { useInquiry } from '../context/InquiryContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

const TABS = ['Products', 'Crops', 'Insects', 'Diseases']

// ── Dark category accent map ──────────────────────────────
const DARK_ACCENTS = {
  herbicides:  { pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', count: 'text-emerald-400' },
  weedicides:  { pill: 'bg-lime-500/15 text-lime-400 border-lime-500/25',          count: 'text-lime-400' },
  fungicides:  { pill: 'bg-violet-500/15 text-violet-400 border-violet-500/25',    count: 'text-violet-400' },
  insecticides:{ pill: 'bg-red-500/15 text-red-400 border-red-500/25',             count: 'text-red-400' },
  'pgrs-bio':  { pill: 'bg-teal-500/15 text-teal-400 border-teal-500/25',          count: 'text-teal-400' },
  fertilisers: { pill: 'bg-amber-500/15 text-amber-400 border-amber-500/25',       count: 'text-amber-400' },
}

// ── Product mini-card ─────────────────────────────────────
function ProductMiniCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const navigate = useNavigate()
  const inCart = cart.some(p => p.id === product.id)

  return (
    <div
      className="bg-[#151A16] border border-white/[0.07] rounded-lg overflow-hidden group hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200 flex flex-col cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {product.img && (
        <div className="w-full h-28 overflow-hidden bg-white flex items-center justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-3 flex flex-col gap-2 flex-1">
        <div className="flex-1">
          <h4 className="text-xs font-bold text-white leading-snug">{product.name}</h4>
          <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{product.composition}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); !inCart && addProduct(product) }}
          disabled={inCart}
          className={`flex items-center justify-center gap-1 text-[10px] font-semibold py-1.5 rounded transition-all w-full ${
            inCart
              ? 'bg-green-500/10 text-green-400 border border-green-500/20 cursor-default'
              : 'bg-green-600 hover:bg-green-500 text-white'
          }`}
        >
          {inCart ? <><Check size={9} /> Added</> : <><ShoppingCart size={9} /> Add to Inquiry</>}
        </button>
      </div>
    </div>
  )
}

// ── Crop circle item ──────────────────────────────────────
function CropItem({ crop }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-20 h-20 rounded-full border-2 border-white/[0.09] group-hover:border-green-500/50 overflow-hidden bg-[#0E1310] transition-all duration-200">
        <img
          src={crop.img}
          alt={crop.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center leading-tight max-w-[72px] transition-colors">{crop.name}</span>
    </div>
  )
}

// ── Insect card ───────────────────────────────────────────
function InsectCard({ insect }) {
  return (
    <div className="bg-[#151A16] border border-white/[0.07] rounded-xl overflow-hidden group hover:border-green-500/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="w-full aspect-square overflow-hidden bg-[#0E1310] flex items-center justify-center">
        {insect.img ? (
          <img
            src={insect.img}
            alt={insect.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-red-500/5">
            <span className="text-4xl opacity-40">🐛</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-xs font-bold text-white leading-snug">{insect.name}</p>
        <p className="text-[10px] text-gray-500 italic mt-0.5 leading-snug">{insect.scientificName}</p>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────
export default function AllProductsPage() {
  const [cartOpen,  setCartOpen]  = useState(false)
  const [activeTab, setActiveTab] = useState('Products')
  const [search,    setSearch]    = useState('')

  const allProducts = CATALOG_CATEGORIES.flatMap(cat => cat.products)
  const searchResults = search.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.composition.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    : null

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Page header ─────────────────────────────── */}
      <div className="relative pt-24 pb-12 px-4 bg-[#0E1310] border-b border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="max-w-6xl mx-auto relative">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Product Catalog</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">Our Products</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Browse our complete range of crop protection solutions — herbicides, insecticides, fungicides, and more.
          </p>
        </div>
      </div>

      {/* ── Secondary tab bar ───────────────────────── */}
      <div className="sticky top-16 z-40 bg-[#0B0F0C]/95 backdrop-blur-md border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSearch('') }}
                className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-green-500 text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Products' && (
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.09] rounded-md px-3 py-1.5 w-56">
              <Search size={13} className="text-gray-500 flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products..."
                className="flex-1 text-xs text-white placeholder-gray-600 bg-transparent outline-none"
              />
              {search && (
                <button onClick={() => setSearch('')}>
                  <X size={12} className="text-gray-500 hover:text-white" />
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
            {searchResults ? (
              <div>
                <p className="text-sm text-gray-500 mb-6">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for{' '}
                  <strong className="text-white">"{search}"</strong>
                </p>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {searchResults.map(product => (
                      <ProductMiniCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 border border-white/[0.07] rounded-xl bg-[#151A16]">
                    <div className="text-4xl mb-3">🌿</div>
                    <p className="text-sm font-semibold text-white mb-1">No products found</p>
                    <p className="text-xs text-gray-500">Try a different keyword</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="divide-y divide-white/[0.06]">
                {CATALOG_CATEGORIES.map(category => {
                  const acc = DARK_ACCENTS[category.id] || { pill: 'bg-white/10 text-gray-300 border-white/10', count: 'text-gray-400' }
                  return (
                    <div key={category.id} className="py-10 flex flex-col md:flex-row gap-8">
                      {/* Left: category info */}
                      <div className="md:w-52 flex-shrink-0 flex flex-col gap-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold w-fit border ${acc.pill}`}>
                          {category.label}
                        </span>
                        <h2 className="text-base font-bold text-white">{category.label}</h2>
                        <p className="text-xs text-gray-500 leading-relaxed">{category.description}</p>
                        <p className={`text-xs font-semibold ${acc.count}`}>{category.products.length} products</p>
                      </div>
                      {/* Right: product grid */}
                      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {category.products.map(product => (
                          <ProductMiniCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}

        {/* ══ CROPS TAB ════════════════════════════════ */}
        {activeTab === 'Crops' && (
          <div className="py-4">
            <h2 className="text-xl font-bold text-white mb-2">Crops</h2>
            <p className="text-sm text-gray-400 mb-8">
              Select a crop to view Safex products recommended by our agronomists.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {CATALOG_CROPS.map(crop => (
                <CropItem key={crop.id} crop={crop} />
              ))}
            </div>
          </div>
        )}

        {/* ══ INSECTS TAB ══════════════════════════════ */}
        {activeTab === 'Insects' && (
          <div className="py-4">
            <h2 className="text-xl font-bold text-white mb-2">Insects</h2>
            <p className="text-sm text-gray-400 mb-8">
              Common insect pests affecting crops across India — and the Safex solutions that control them.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {CATALOG_INSECTS.map(insect => (
                <InsectCard key={insect.id} insect={insect} />
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
                <h2 className="text-xl font-bold text-white mb-1">A. Insects</h2>
                <p className="text-sm text-gray-400">Common insect pests affecting crops across India.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {CATALOG_INSECTS.map(insect => (
                  <div key={insect.id} className="bg-[#151A16] border border-white/[0.07] rounded-lg p-3 hover:border-white/[0.14] transition-colors">
                    <p className="text-sm font-semibold text-white">{insect.name}</p>
                    <p className="text-xs text-gray-500 italic mt-0.5">{insect.scientificName}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.06]" />

            {/* B. Diseases */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">B. Diseases</h2>
                <p className="text-sm text-gray-400">Common crop diseases and the Safex solutions recommended to manage them.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {CATALOG_DISEASES.map(disease => (
                  <div key={disease.id} className="bg-[#151A16] border border-white/[0.07] rounded-lg p-3 hover:border-white/[0.14] transition-colors">
                    <p className="text-sm font-semibold text-white">{disease.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{disease.type}</p>
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
