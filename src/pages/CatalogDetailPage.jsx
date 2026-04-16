import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ShoppingCart, Check, AlertTriangle,
  ShieldCheck, BookOpen, Zap, Leaf, Bug, Microscope,
  ChevronRight, Package
} from 'lucide-react'
import { CROP_DETAILS, INSECT_DETAILS, DISEASE_DETAILS } from '../data/catalogDetailData'
import { CATALOG_CATEGORIES } from '../data/catalogData'
import { useInquiry } from '../context/InquiryContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// ── Flatten all products for lookup ──────────────────────────────────────────
const ALL_PRODUCTS = CATALOG_CATEGORIES.flatMap(cat =>
  cat.products.map(p => ({ ...p, categoryLabel: cat.label, categoryId: cat.id }))
)

const CATEGORY_ACCENT = {
  herbicides:   { pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  weedicides:   { pill: 'bg-lime-500/15 text-lime-400 border-lime-500/25' },
  fungicides:   { pill: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
  insecticides: { pill: 'bg-red-500/15 text-red-400 border-red-500/25' },
  'pgrs-bio':   { pill: 'bg-teal-500/15 text-teal-400 border-teal-500/25' },
  fertilisers:  { pill: 'bg-amber-500/15 text-amber-400 border-amber-500/25' },
}

// ── Animation variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

// ── Reusable section wrapper ──────────────────────────────────────────────────
function Section({ children, alt = false }) {
  return (
    <section className={`py-16 px-4 ${alt ? 'bg-[#0E1310] border-t border-white/[0.05]' : 'bg-[#0B0F0C]'}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ icon: Icon, label, title, accent = 'green' }) {
  const colors = {
    green:  'text-green-400',
    red:    'text-red-400',
    amber:  'text-amber-400',
    violet: 'text-violet-400',
    blue:   'text-blue-400',
  }
  return (
    <div className="mb-8">
      <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 ${colors[accent]}`}>
        <Icon size={13} />{label}
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
    </div>
  )
}

// ── Bullet list card ──────────────────────────────────────────────────────────
function BulletCard({ items, accent = 'green' }) {
  const dot = {
    green:  'bg-green-400',
    red:    'bg-red-400',
    amber:  'bg-amber-400',
    violet: 'bg-violet-400',
    blue:   'bg-blue-400',
  }
  return (
    <motion.ul
      variants={stagger} initial="hidden"
      whileInView="show" viewport={{ once: true }}
      className="flex flex-col gap-3"
    >
      {items.map((item, i) => (
        <motion.li
          key={i} variants={fadeUp}
          className="flex items-start gap-3 bg-[#151A16] border border-white/[0.07] rounded-xl px-4 py-3"
        >
          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${dot[accent]}`} />
          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

// ── Related product card ──────────────────────────────────────────────────────
function RelatedProductCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const navigate = useNavigate()
  const inCart   = cart.some(p => p.id === product.id)
  const acc      = CATEGORY_ACCENT[product.categoryId] || { pill: 'bg-white/10 text-gray-300 border-white/10' }

  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden group hover:border-white/[0.18] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {product.img && (
        <div className="w-full h-36 overflow-hidden bg-white flex items-center justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border w-fit ${acc.pill}`}>
          {product.categoryLabel}
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-white leading-snug">{product.name}</p>
          <p className="text-[11px] text-gray-500 mt-0.5 font-mono leading-snug">{product.composition}</p>
        </div>
        <button
          onClick={e => { e.stopPropagation(); !inCart && addProduct(product) }}
          disabled={inCart}
          className={`flex items-center justify-center gap-1.5 text-xs font-bold py-2 rounded-lg transition-all w-full ${
            inCart
              ? 'bg-green-500/10 text-green-400 border border-green-500/20 cursor-default'
              : 'bg-green-600 hover:bg-green-500 text-white'
          }`}
        >
          {inCart
            ? <><Check size={11} /> Added</>
            : <><ShoppingCart size={11} /> Add to Inquiry</>}
        </button>
      </div>
    </motion.div>
  )
}

// ── Type config ───────────────────────────────────────────────────────────────
const TYPE_CONFIG = {
  crop: {
    icon:         Leaf,
    badge:        'Crop Guide',
    badgeClass:   'bg-green-500/20 border-green-500/30 text-green-400',
    heroGradient: 'from-black/80 via-black/50 to-black/20',
    listLabel1:   'Growing Information',
    listIcon1:    BookOpen,
    listAccent1:  'green',
    listLabel2:   'Common Threats',
    listIcon2:    AlertTriangle,
    listAccent2:  'amber',
    listLabel3:   'Management Practices',
    listIcon3:    ShieldCheck,
    listAccent3:  'green',
    getList1:     d => d.growingInfo,
    getList2:     d => d.threats,
    getList3:     d => d.management,
    section1Title: 'Key Growing Information',
    section2Title: 'Common Threats & Challenges',
    section3Title: 'Management & Best Practices',
  },
  insect: {
    icon:         Bug,
    badge:        'Insect Pest',
    badgeClass:   'bg-red-500/20 border-red-500/30 text-red-400',
    heroGradient: 'from-black/80 via-black/55 to-black/20',
    listLabel1:   'Symptoms & Damage',
    listIcon1:    AlertTriangle,
    listAccent1:  'red',
    listLabel2:   'Prevention Methods',
    listIcon2:    ShieldCheck,
    listAccent2:  'amber',
    listLabel3:   'Control Measures',
    listIcon3:    Zap,
    listAccent3:  'green',
    getList1:     d => d.symptoms,
    getList2:     d => d.prevention,
    getList3:     d => d.control,
    section1Title: 'Symptoms & Crop Damage',
    section2Title: 'Prevention Strategies',
    section3Title: 'Control Measures',
  },
  disease: {
    icon:         Microscope,
    badge:        'Crop Disease',
    badgeClass:   'bg-violet-500/20 border-violet-500/30 text-violet-400',
    heroGradient: 'from-black/80 via-black/55 to-black/20',
    listLabel1:   'Symptoms',
    listIcon1:    AlertTriangle,
    listAccent1:  'violet',
    listLabel2:   'Prevention',
    listIcon2:    ShieldCheck,
    listAccent2:  'amber',
    listLabel3:   'Control',
    listIcon3:    Zap,
    listAccent3:  'green',
    getList1:     d => d.symptoms,
    getList2:     d => d.prevention,
    getList3:     d => d.control,
    section1Title: 'Symptoms & Signs',
    section2Title: 'Prevention Strategies',
    section3Title: 'Control & Treatment',
  },
}

// ── Main component ────────────────────────────────────────────────────────────
export default function CatalogDetailPage({ detailType }) {
  const { id }  = useParams()
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  // Lookup the right data store based on detailType
  const dataStore = detailType === 'crop'
    ? CROP_DETAILS
    : detailType === 'insect'
    ? INSECT_DETAILS
    : DISEASE_DETAILS

  const data   = dataStore[id]
  const config = TYPE_CONFIG[detailType]

  const relatedProducts = data?.relatedProducts
    ? data.relatedProducts.map(pid => ALL_PRODUCTS.find(p => p.id === pid)).filter(Boolean)
    : []

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0B0F0C] flex flex-col items-center justify-center gap-4">
        <Package size={40} className="text-gray-600" strokeWidth={1.5} />
        <p className="text-white text-lg font-semibold">Information not found.</p>
        <button onClick={() => navigate('/products')} className="text-green-400 text-sm hover:underline flex items-center gap-1">
          <ArrowLeft size={14} /> Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="relative min-h-[460px] md:min-h-[520px] flex items-end overflow-hidden">
        <img
          src={data.img}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${config.heroGradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate('/products')}
          className="absolute top-20 left-6 md:left-10 flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group z-10"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        {/* Hero content */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pb-12 pt-32 z-10 w-full">
          <motion.div
            variants={stagger} initial="hidden" animate="show"
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-widest mb-4 ${config.badgeClass}`}
            >
              <config.icon size={11} />
              {config.badge}
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              {data.name}
            </motion.h1>

            {data.scientificName && (
              <motion.p variants={fadeUp} className="text-gray-400 text-sm italic mb-2">
                {data.scientificName}
              </motion.p>
            )}
            {data.tagline && (
              <motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
                {data.tagline}
              </motion.p>
            )}
            {detailType === 'disease' && data.type && (
              <motion.span variants={fadeUp} className="inline-block mt-3 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-400 text-xs font-semibold">
                {data.type}
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────── */}
      <Section>
        <motion.div
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              icon={config.icon}
              label="Overview"
              title={`About ${data.name}`}
              accent={detailType === 'crop' ? 'green' : detailType === 'insect' ? 'red' : 'violet'}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-6 md:p-8">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{data.overview}</p>
          </motion.div>

          {/* Causes / spreading info — shown for insects and diseases */}
          {data.causes && (
            <motion.div variants={fadeUp} className="mt-5 bg-[#151A16] border border-amber-500/20 rounded-xl p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Zap size={12} />
                {detailType === 'insect' ? 'Why & How It Spreads' : 'Causes & Spread'}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">{data.causes}</p>
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* ── List 1 (symptoms / growing info) ─────────── */}
      <Section alt>
        <motion.div
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              icon={config.listIcon1}
              label={config.listLabel1}
              title={config.section1Title}
              accent={config.listAccent1}
            />
          </motion.div>
          <BulletCard items={config.getList1(data)} accent={config.listAccent1} />
        </motion.div>
      </Section>

      {/* ── List 2 (prevention) ──────────────────────── */}
      <Section>
        <motion.div
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              icon={config.listIcon2}
              label={config.listLabel2}
              title={config.section2Title}
              accent={config.listAccent2}
            />
          </motion.div>
          <BulletCard items={config.getList2(data)} accent={config.listAccent2} />
        </motion.div>
      </Section>

      {/* ── List 3 (control / management) ───────────── */}
      <Section alt>
        <motion.div
          variants={stagger} initial="hidden"
          whileInView="show" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              icon={config.listIcon3}
              label={config.listLabel3}
              title={config.section3Title}
              accent={config.listAccent3}
            />
          </motion.div>
          <BulletCard items={config.getList3(data)} accent={config.listAccent3} />
        </motion.div>
      </Section>

      {/* ── Recommended Products ─────────────────────── */}
      {relatedProducts.length > 0 && (
        <Section>
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-400 flex items-center gap-2 mb-2">
                  <ShoppingCart size={12} /> Recommended Products
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Safex Solutions for {data.name}</h2>
              </div>
              <button
                onClick={() => navigate('/products')}
                className="flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors flex-shrink-0"
              >
                View all products <ChevronRight size={14} />
              </button>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {relatedProducts.map(product => (
                <RelatedProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </motion.div>
        </Section>
      )}

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}