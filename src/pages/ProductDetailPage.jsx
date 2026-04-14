import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Check, Package, FlaskConical, Leaf, BookOpen, Zap, Target } from 'lucide-react'
import { CATALOG_CATEGORIES } from '../data/catalogData'
import { PRODUCT_DETAILS } from '../data/productDetails'
import { useInquiry } from '../context/InquiryContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// Flatten all products for lookup
const ALL_PRODUCTS = CATALOG_CATEGORIES.flatMap(cat =>
  cat.products.map(p => ({ ...p, categoryLabel: cat.label, categoryId: cat.id }))
)

const CATEGORY_ACCENT = {
  herbicides:   { pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', dot: 'bg-emerald-400' },
  weedicides:   { pill: 'bg-lime-500/15 text-lime-400 border-lime-500/25',          dot: 'bg-lime-400' },
  fungicides:   { pill: 'bg-violet-500/15 text-violet-400 border-violet-500/25',    dot: 'bg-violet-400' },
  insecticides: { pill: 'bg-red-500/15 text-red-400 border-red-500/25',             dot: 'bg-red-400' },
  'pgrs-bio':   { pill: 'bg-teal-500/15 text-teal-400 border-teal-500/25',          dot: 'bg-teal-400' },
  fertilisers:  { pill: 'bg-amber-500/15 text-amber-400 border-amber-500/25',       dot: 'bg-amber-400' },
}

function InfoSection({ icon: Icon, title, children, accent = 'green' }) {
  const colors = {
    green:  { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/20' },
    blue:   { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/20' },
    amber:  { bg: 'bg-amber-500/10',  text: 'text-amber-400',  border: 'border-amber-500/20' },
    violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  }
  const c = colors[accent] || colors.green
  return (
    <div className="bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden">
      <div className={`flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] ${c.bg}`}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${c.bg} border ${c.border}`}>
          <Icon size={15} className={c.text} />
        </div>
        <h3 className={`text-sm font-bold uppercase tracking-wider ${c.text}`}>{title}</h3>
      </div>
      <div className="px-5 py-4 text-sm text-gray-400 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { cart, addProduct } = useInquiry()
  const [cartOpen, setCartOpen] = useState(false)

  const product = ALL_PRODUCTS.find(p => p.id === id)
  const details = PRODUCT_DETAILS[id]
  const inCart  = cart.some(p => p.id === id)
  const accent  = CATEGORY_ACCENT[product?.categoryId] || CATEGORY_ACCENT.herbicides

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0B0F0C] flex flex-col items-center justify-center gap-4">
        <p className="text-white text-lg font-semibold">Product not found.</p>
        <button onClick={() => navigate('/products')} className="text-green-400 text-sm hover:underline">
          ← Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Breadcrumb header ───────────────────────── */}
      <div className="relative pt-20 pb-6 px-4 bg-[#0E1310] border-b border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium transition-colors group mb-4"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/products')}>Products</span>
            <span>/</span>
            <span className="hover:text-gray-400 cursor-pointer" onClick={() => navigate('/products')}>{product.categoryLabel}</span>
            <span>/</span>
            <span className="text-gray-400">{product.name}</span>
          </div>
        </div>
      </div>

      {/* ── Main content ────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Top section: image + core info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">

          {/* Left: Product image */}
          <div className="bg-white rounded-2xl overflow-hidden flex items-center justify-center min-h-[280px] md:min-h-[360px] p-6">
            {product.img ? (
              <img
                src={product.img}
                alt={product.name}
                className="max-h-80 w-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-300">
                <Package size={48} strokeWidth={1} />
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col gap-5">

            {/* Category badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border w-fit ${accent.pill}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
              {product.categoryLabel}
            </span>

            {/* Name */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{product.name}</h1>
              {details?.tagline && (
                <p className="text-green-400 text-sm font-medium mt-1">{details.tagline}</p>
              )}
            </div>

            {/* Composition */}
            <div className="flex items-start gap-2">
              <FlaskConical size={14} className="text-gray-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-mono text-gray-300 leading-snug">{product.composition}</p>
            </div>

            {/* Pack sizes */}
            {details?.packSizes && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Pack Sizes</p>
                <div className="flex flex-wrap gap-2">
                  {details.packSizes.map(size => (
                    <span key={size} className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.09] text-xs font-semibold text-gray-300">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description preview */}
            {details?.description && (
              <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-green-500/40 pl-4">
                {details.description}
              </p>
            )}

            {/* Add to inquiry */}
            <div className="mt-auto pt-2">
              <button
                onClick={() => !inCart && addProduct(product)}
                disabled={inCart}
                className={`flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  inCart
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20 cursor-default'
                    : 'btn-glow text-white'
                }`}
              >
                {inCart ? <><Check size={15} /> Added to Inquiry</> : <><ShoppingCart size={15} /> Add to Inquiry</>}
              </button>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        {details ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* About product */}
            {details.detailDescription && (
              <InfoSection icon={Leaf} title="About This Product" accent="green">
                <p>{details.detailDescription}</p>
              </InfoSection>
            )}

            {/* Mode of action */}
            {details.modeOfAction && (
              <InfoSection icon={Zap} title="Mode of Action" accent="violet">
                <p>{details.modeOfAction}</p>
              </InfoSection>
            )}

            {/* Method of application */}
            {details.methodOfApplication && (
              <InfoSection icon={BookOpen} title="Method of Application" accent="blue">
                <p>{details.methodOfApplication}</p>
              </InfoSection>
            )}

            {/* Recommendation */}
            {details.recommendation && (
              <InfoSection icon={Target} title="Recommendation" accent="amber">
                <p>{details.recommendation}</p>
              </InfoSection>
            )}

          </div>
        ) : (
          /* No detail data yet */
          <div className="bg-[#151A16] border border-white/[0.08] rounded-xl p-8 text-center">
            <FlaskConical size={32} className="text-gray-600 mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-white mb-1">Detailed information coming soon</p>
            <p className="text-xs text-gray-500">Contact our team for full product documentation, label, and safety data sheet.</p>
            <a
              href="tel:18001023959"
              className="inline-block mt-4 px-5 py-2 rounded-lg btn-glow text-white text-xs font-bold"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
