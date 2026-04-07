import { useState } from 'react'
import { ShoppingCart, Check, Search, X } from 'lucide-react'
import { products } from '../data/products'
import { crops } from '../data/crops'
import { useInquiry } from '../context/InquiryContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// ── Category metadata ─────────────────────────────────────
const CATEGORY_SECTIONS = [
  {
    key: 'Herbicide',
    label: 'Herbicides',
    description:
      'Selective and non-selective herbicides for complete weed management. Safe on crops, tough on weeds — trusted across rabi and kharif seasons.',
    decoration: '🌿',
  },
  {
    key: 'Insecticide',
    label: 'Insecticides',
    description:
      'Advanced formulations for broad-spectrum and targeted insect control. Effective against sucking, chewing, and soil-borne pests at every growth stage.',
    decoration: '🐛',
  },
  {
    key: 'Fungicide',
    label: 'Fungicides',
    description:
      'Systemic and contact fungicides that protect crops from fungal diseases. Proven performance on rice, wheat, cotton, vegetables, and more.',
    decoration: '🍄',
  },
  {
    key: 'Organic',
    label: 'PGRs & Bio Fertilizers',
    description:
      'Sustainable organic solutions to enrich soil, boost microbial activity, and enhance crop yield naturally — without harming the environment.',
    decoration: '🌱',
  },
]

// ── Disease data ──────────────────────────────────────────
const DISEASES = [
  { name: 'Rice Blast',        icon: '🌾', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&q=80' },
  { name: 'Late Blight',       icon: '🍂', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=200&q=80' },
  { name: 'Powdery Mildew',    icon: '🌫️', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80' },
  { name: 'Downy Mildew',      icon: '💧', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80' },
  { name: 'Leaf Rust',         icon: '🍁', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&q=80' },
  { name: 'Fusarium Wilt',     icon: '🌵', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=200&q=80' },
  { name: 'Anthracnose',       icon: '🔴', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&q=80' },
  { name: 'Bacterial Blight',  icon: '🟡', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80' },
  { name: 'Stem Rot',          icon: '🌿', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80' },
  { name: 'Sheath Blight',     icon: '🌾', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=200&q=80' },
]

const TABS = ['Products', 'Crops', 'Diseases']

// ── Product mini-card ─────────────────────────────────────
function ProductMiniCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const inCart = cart.some(p => p.id === product.id)

  return (
    <div className="bg-white border border-corp-border rounded-lg overflow-hidden group hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="aspect-square bg-corp-surface overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col gap-2 flex-1">
        <div className="flex-1">
          <h4 className="text-xs font-bold text-corp-text leading-snug">{product.name}</h4>
          <p className="text-[10px] text-corp-text-2 mt-0.5 leading-snug line-clamp-2">{product.ingredient}</p>
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

// ── Circular item (crops / diseases) ─────────────────────
function CircleItem({ label, image, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-20 h-20 rounded-full border-2 border-corp-border group-hover:border-corp-green overflow-hidden bg-corp-green-bg flex items-center justify-center transition-all duration-200 group-hover:shadow-card">
        {image
          ? <img src={image} alt={label} className="w-full h-full object-cover" />
          : <span className="text-3xl">{icon}</span>
        }
      </div>
      <span className="text-xs font-medium text-corp-text text-center leading-tight max-w-[72px]">{label}</span>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────
export default function AllProductsPage() {
  const [cartOpen,   setCartOpen]   = useState(false)
  const [activeTab,  setActiveTab]  = useState('Products')
  const [search,     setSearch]     = useState('')

  // For search — filter across all products
  const searchResults = search.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.ingredient.toLowerCase().includes(search.toLowerCase()) ||
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
                {CATEGORY_SECTIONS.map(section => {
                  const catProducts = products.filter(p => p.category === section.key)
                  return (
                    <div key={section.key} className="py-10 flex flex-col md:flex-row gap-8">

                      {/* Left: category info */}
                      <div className="md:w-52 flex-shrink-0 flex flex-col gap-3">
                        <div className="text-4xl">{section.decoration}</div>
                        <h2 className="text-lg font-bold text-corp-text">{section.label}</h2>
                        <p className="text-xs text-corp-text-2 leading-relaxed">{section.description}</p>
                        <p className="text-xs font-medium text-corp-green">{catProducts.length} products</p>
                      </div>

                      {/* Right: product grid */}
                      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {catProducts.map(product => (
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
            <h2 className="text-xl font-bold text-corp-text mb-2">Crops</h2>
            <p className="text-sm text-corp-text-2 mb-8">
              Select a crop to view Safex products recommended by our agronomists.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {crops.map(crop => (
                <CircleItem key={crop.id} label={crop.name} icon={crop.icon} />
              ))}
            </div>
          </div>
        )}

        {/* ══ DISEASES TAB ═════════════════════════════ */}
        {activeTab === 'Diseases' && (
          <div className="py-4">
            <h2 className="text-xl font-bold text-corp-text mb-2">Diseases</h2>
            <p className="text-sm text-corp-text-2 mb-8">
              Common crop diseases and the Safex solutions recommended to manage them.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {DISEASES.map(disease => (
                <CircleItem
                  key={disease.name}
                  label={disease.name}
                  image={disease.image}
                />
              ))}
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
