import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, Target, Eye, Leaf, Shield, Zap, Heart, Users } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// ─────────────────────────────────────────────────────────────────────────────
//  Data
// ─────────────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    title: 'Uncompromising',
    icon: Shield,
    description:
      'Ethics form the foundation of everything we do. We never compromise on quality and strive to deliver the best products to every farmer we serve.',
    director: 'Rajesh Jindal',
    role: 'Managing Director',
    accent: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    title: 'Efficient',
    icon: Zap,
    description:
      'We focus on operational excellence, ensuring smooth workflows and timely delivery without compromising on quality at any stage of production.',
    director: 'Neeraj Jindal',
    role: 'Director',
    accent: 'bg-blue-50 border-blue-200 text-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    title: 'Passionate',
    icon: Heart,
    description:
      'Our passion has driven our growth significantly over the years. We remain committed to serving farmers and stakeholders with genuine care.',
    director: 'S.K. Chaudhary',
    role: 'Co-Founder',
    accent: 'bg-rose-50 border-rose-200 text-rose-700',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
  },
  {
    title: 'Transparent',
    icon: Users,
    description:
      'We believe transparency builds trust. Our conduct and operations reflect openness and reliability — with our partners, customers, and farmers.',
    director: 'Piyush Jindal',
    role: 'Director',
    accent: 'bg-amber-50 border-amber-200 text-amber-700',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
]

const TIMELINE = [
  {
    year: '1991',
    label: 'Founded',
    description: 'Incorporated as Safex Chemicals (India) Private Limited on January 8, 1991 under the Companies Act, 1956.',
    color: 'bg-corp-green',
    emoji: '🏢',
  },
  {
    year: '1995',
    label: 'Public Limited',
    description: 'Transitioned to a public limited entity. Fresh certificate of incorporation received on March 2, 1995.',
    color: 'bg-emerald-600',
    emoji: '📋',
  },
  {
    year: '2000',
    label: 'Portfolio Expansion',
    description: 'Significantly expanded the agrochemical formulations portfolio covering herbicides, fungicides, and insecticides.',
    color: 'bg-teal-600',
    emoji: '🌿',
  },
  {
    year: '2005',
    label: 'Pan-India Network',
    description: 'Established a robust pan-India distribution network reaching farmers across all major agricultural states.',
    color: 'bg-green-700',
    emoji: '🚚',
  },
  {
    year: '2010',
    label: 'CDMO Vertical',
    description: 'Launched the Contract Development & Manufacturing (CDMO) vertical to serve global agrochemical companies.',
    color: 'bg-corp-green',
    emoji: '🔬',
  },
  {
    year: '2015',
    label: 'Specialty Chemicals',
    description: 'Introduced the Specialty Chemicals division, strengthening our presence across the entire agrochemical value chain.',
    color: 'bg-emerald-600',
    emoji: '⚗️',
  },
  {
    year: '2018',
    label: 'Quality Milestones',
    description: 'Achieved key quality certifications. Reinforced our commitment to delivering best-in-class crop protection products.',
    color: 'bg-teal-600',
    emoji: '🏆',
  },
  {
    year: '2022',
    label: 'Three Decades',
    description: 'Celebrated over 30 years of feeding the nation, serving thousands of farmers and global partners across the world.',
    color: 'bg-green-700',
    emoji: '🌾',
  },
]

const STATS = [
  { value: '30+', label: 'Years of Excellence' },
  { value: '3',   label: 'Business Verticals' },
  { value: '1991', label: 'Year Founded' },
  { value: '1000+', label: 'Farmers Served' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="section-label block mb-3">{children}</span>
  )
}

function ValueCard({ value }) {
  const Icon = value.icon
  return (
    <div className={`corp-card p-6 flex flex-col gap-4 border ${value.accent.split(' ')[1]}`}>
      {/* Icon */}
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${value.iconBg}`}>
        <Icon size={20} className={value.iconColor} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base font-bold text-corp-text mb-2">{value.title}</h3>
        <p className="text-sm text-corp-text-2 leading-relaxed">{value.description}</p>
      </div>

      {/* Director attribution */}
      <div className="pt-4 border-t border-corp-border flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${value.iconBg} ${value.iconColor}`}>
          {value.director.charAt(0)}
        </div>
        <div>
          <p className="text-xs font-semibold text-corp-text">{value.director}</p>
          <p className="text-[11px] text-corp-text-2">{value.role}</p>
        </div>
      </div>
    </div>
  )
}

function TimelineSection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 bg-white border border-corp-border rounded-full shadow-card items-center justify-center hover:shadow-card-hover hover:border-corp-green transition-all"
        aria-label="Scroll left"
      >
        <ChevronLeft size={16} className="text-corp-text-2" />
      </button>
      <button
        onClick={() => scroll(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 bg-white border border-corp-border rounded-full shadow-card items-center justify-center hover:shadow-card-hover hover:border-corp-green transition-all"
        aria-label="Scroll right"
      >
        <ChevronRight size={16} className="text-corp-text-2" />
      </button>

      {/* Scrollable timeline track */}
      <div
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto pb-6 scroll-smooth"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#C8E6C9 #F5F5F5' }}
      >
        {TIMELINE.map((item, idx) => (
          <div key={item.year} className="flex flex-col items-center flex-shrink-0 w-60 md:w-72 px-3">
            {/* Card */}
            <div className="corp-card w-full p-4 mb-5 flex flex-col gap-2 hover:border-corp-green transition-colors">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xs font-bold text-corp-green uppercase tracking-wide">{item.label}</div>
              <p className="text-xs text-corp-text-2 leading-relaxed">{item.description}</p>
            </div>

            {/* Connector line + dot */}
            <div className="flex items-center w-full relative">
              {/* Left line */}
              <div className={`flex-1 h-0.5 ${idx === 0 ? 'bg-transparent' : 'bg-corp-border'}`} />
              {/* Dot */}
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-green z-10 ${item.color}`}>
                {item.year.slice(2)}
              </div>
              {/* Right line */}
              <div className={`flex-1 h-0.5 ${idx === TIMELINE.length - 1 ? 'bg-transparent' : 'bg-corp-border'}`} />
            </div>

            {/* Year label */}
            <p className="mt-2 text-sm font-bold text-corp-text">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Page Hero ──────────────────────────────────── */}
      <div className="bg-corp-green pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-corp-green-light block mb-3">About Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Over Three Decades of Protecting India's Crops
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
            Safex Chemicals — a specialty agrochemical company that has been a trusted partner to farmers and global agro-companies since 1991.
          </p>
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────────── */}
      <div className="bg-white border-b border-corp-border shadow-nav">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-corp-border">
          {STATS.map(stat => (
            <div key={stat.label} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center md:items-start gap-0.5">
              <span className="text-2xl font-bold text-corp-green">{stat.value}</span>
              <span className="text-xs text-corp-text-2 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 1: Company Overview ────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: text */}
            <div>
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-6 leading-tight">
                A Trusted Name in Indian Agrochemicals
              </h2>
              <div className="flex flex-col gap-5 text-sm text-corp-text-2 leading-relaxed">
                <p>
                  <strong className="text-corp-text">Safex Chemicals (India) Limited</strong> was originally incorporated as 'Safex Chemicals (India) Private Limited' on <strong className="text-corp-text">January 8, 1991</strong> under the Companies Act, 1956. In 1995, the company transitioned into a public limited entity and received a fresh certificate of incorporation on March 2, 1995.
                </p>
                <p>
                  Founded by the late <strong className="text-corp-text">Surinder Kumar Jindal</strong> and <strong className="text-corp-text">Surinder Kumar Chaudhary</strong>, Safex is a specialty chemicals company focused on agrochemicals, with a strong presence across the entire value chain.
                </p>
                <p>
                  For over three decades, Safex has been supporting farmers and global agrochemical companies through its three key verticals — delivering science-backed solutions that protect crops and feed the nation.
                </p>
              </div>
            </div>

            {/* Right: three verticals */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: 'Branded Formulations',
                  desc: 'End-to-end crop protection products — herbicides, insecticides, fungicides, PGRs and fertilisers — sold under the Safex brand across India.',
                  icon: '🌿',
                },
                {
                  title: 'Specialty Chemicals',
                  desc: 'High-quality active ingredients and specialty chemical intermediates supplied to global agrochemical companies and research institutions.',
                  icon: '⚗️',
                },
                {
                  title: 'Contract Development & Manufacturing (CDMO)',
                  desc: 'Custom synthesis and contract manufacturing services for global agrochemical and specialty chemical companies, with GMP-compliant facilities.',
                  icon: '🏭',
                },
              ].map(v => (
                <div key={v.title} className="corp-card p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-corp-green-bg flex items-center justify-center text-xl flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-corp-text mb-1">{v.title}</h4>
                    <p className="text-xs text-corp-text-2 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Values ─────────────────────── */}
      <section className="py-20 px-4 bg-corp-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>What Defines Us</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-3">
              Core Values — Straight from Our Directors
            </h2>
            <p className="text-sm text-corp-text-2 max-w-xl mx-auto leading-relaxed">
              Our leadership's guiding principles shape every decision we make — from product quality to how we serve our farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CORE_VALUES.map(value => (
              <ValueCard key={value.title} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Journey ─────────────────────── */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-3">
              Three Decades of Growth
            </h2>
            <p className="text-sm text-corp-text-2 max-w-xl mx-auto leading-relaxed">
              From a private limited company in 1991 to a multi-vertical specialty chemicals leader — here's how we've grown.
            </p>
          </div>

          <TimelineSection />
        </div>
      </section>

      {/* ── Section 4: Mission & Vision ────────────────── */}
      <section className="py-20 px-4 bg-corp-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-3">
              Mission & Vision
            </h2>
            <p className="text-sm text-corp-text-2 max-w-xl mx-auto">
              The north star that guides everything we do at Safex Chemicals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Mission */}
            <div className="bg-corp-green rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -right-4 w-52 h-52 rounded-full bg-white/[0.03]" />

              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Target size={22} className="text-white" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-corp-green-light block mb-3">
                  Our Mission
                </span>
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  To play an instrumental role in food security, quality of life, and health in India.
                </p>
              </div>
              <div className="pt-5 border-t border-white/20">
                <p className="text-sm text-white/70 leading-relaxed">
                  Every product we formulate, every partnership we build, and every farmer we serve moves us closer to a food-secure India.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white border border-corp-border rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden shadow-card">
              {/* Background decoration */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-corp-green-bg/60" />
              <div className="absolute -bottom-16 -right-4 w-52 h-52 rounded-full bg-corp-green-bg/30" />

              <div className="w-12 h-12 rounded-xl bg-corp-green-bg flex items-center justify-center flex-shrink-0">
                <Eye size={22} className="text-corp-green" />
              </div>
              <div>
                <span className="section-label block mb-3">Our Vision</span>
                <p className="text-xl md:text-2xl font-bold text-corp-text leading-snug">
                  Inclusive growth — Let's fly together!
                </p>
              </div>
              <div className="pt-5 border-t border-corp-border">
                <p className="text-sm text-corp-text-2 leading-relaxed">
                  We believe that true growth is shared growth. Farmers, distributors, employees, and partners — we rise together or not at all.
                </p>
              </div>
            </div>

          </div>

          {/* Founders note */}
          <div className="mt-8 corp-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-corp-green-bg flex items-center justify-center text-xl flex-shrink-0">
              <Leaf size={20} className="text-corp-green" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-corp-text-2 leading-relaxed italic">
                "We are in the business of feeding the nation."
              </p>
              <p className="text-xs font-semibold text-corp-text mt-1.5">
                Late Surinder Kumar Jindal &amp; Surinder Kumar Chaudhary — Founders, Safex Chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
