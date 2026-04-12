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
    description: 'Ethics form the foundation of everything we do. We never compromise on quality and strive to deliver the best products to every farmer we serve.',
    director: 'Rajesh Jindal',
    role: 'Managing Director',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20',
    avatar: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    title: 'Efficient',
    icon: Zap,
    description: 'We focus on operational excellence, ensuring smooth workflows and timely delivery without compromising on quality at any stage of production.',
    director: 'Neeraj Jindal',
    role: 'Director',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
    avatar: 'bg-blue-500/10 text-blue-400',
  },
  {
    title: 'Passionate',
    icon: Heart,
    description: 'Our passion has driven our growth significantly over the years. We remain committed to serving farmers and stakeholders with genuine care.',
    director: 'S.K. Chaudhary',
    role: 'Co-Founder',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    border: 'border-rose-500/20',
    avatar: 'bg-rose-500/10 text-rose-400',
  },
  {
    title: 'Transparent',
    icon: Users,
    description: 'We believe transparency builds trust. Our conduct and operations reflect openness and reliability — with our partners, customers, and farmers.',
    director: 'Piyush Jindal',
    role: 'Director',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20',
    avatar: 'bg-amber-500/10 text-amber-400',
  },
]

const TIMELINE = [
  { year: '1991', label: 'Founded',           description: 'Incorporated as Safex Chemicals (India) Private Limited on January 8, 1991.',                                 emoji: '🏢', color: 'bg-green-600' },
  { year: '1995', label: 'Public Limited',     description: 'Transitioned to a public limited entity. Certificate of incorporation received on March 2, 1995.',           emoji: '📋', color: 'bg-emerald-600' },
  { year: '2000', label: 'Portfolio Expansion',description: 'Significantly expanded the agrochemical formulations portfolio covering herbicides, fungicides, and insecticides.', emoji: '🌿', color: 'bg-teal-600' },
  { year: '2005', label: 'Pan-India Network',  description: 'Established a robust pan-India distribution network reaching farmers across all major agricultural states.',   emoji: '🚚', color: 'bg-green-700' },
  { year: '2010', label: 'CDMO Vertical',      description: 'Launched the Contract Development & Manufacturing (CDMO) vertical to serve global agrochemical companies.',    emoji: '🔬', color: 'bg-green-600' },
  { year: '2015', label: 'Specialty Chemicals',description: 'Introduced the Specialty Chemicals division, strengthening our presence across the entire value chain.',       emoji: '⚗️', color: 'bg-emerald-600' },
  { year: '2018', label: 'Quality Milestones', description: 'Achieved key quality certifications. Reinforced our commitment to delivering best-in-class products.',         emoji: '🏆', color: 'bg-teal-600' },
  { year: '2022', label: 'Three Decades',      description: 'Celebrated over 30 years of feeding the nation, serving thousands of farmers and global partners.',            emoji: '🌾', color: 'bg-green-700' },
]

const STATS = [
  { value: '30+',   label: 'Years of Excellence' },
  { value: '3',     label: 'Business Verticals' },
  { value: '1991',  label: 'Year Founded' },
  { value: '1000+', label: 'Farmers Served' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">{children}</span>
}

function ValueCard({ value }) {
  const Icon = value.icon
  return (
    <div className={`bg-[#151A16] border ${value.border} rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-250`}>
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${value.iconBg}`}>
        <Icon size={20} className={value.iconColor} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
      </div>
      <div className="pt-4 border-t border-white/[0.07] flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${value.avatar}`}>
          {value.director.charAt(0)}
        </div>
        <div>
          <p className="text-xs font-semibold text-white">{value.director}</p>
          <p className="text-[11px] text-gray-500">{value.role}</p>
        </div>
      </div>
    </div>
  )
}

function TimelineSection() {
  const scrollRef = useRef(null)
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 bg-[#151A16] border border-white/[0.09] rounded-full items-center justify-center hover:border-green-500/40 hover:text-green-400 text-gray-400 transition-all"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => scroll(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 bg-[#151A16] border border-white/[0.09] rounded-full items-center justify-center hover:border-green-500/40 hover:text-green-400 text-gray-400 transition-all"
      >
        <ChevronRight size={16} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto pb-6 scroll-smooth"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e4a22 #0B0F0C' }}
      >
        {TIMELINE.map((item, idx) => (
          <div key={item.year} className="flex flex-col items-center flex-shrink-0 w-60 md:w-72 px-3">
            <div className="bg-[#151A16] border border-white/[0.08] hover:border-green-500/25 w-full p-4 mb-5 flex flex-col gap-2 rounded-xl transition-colors">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xs font-bold text-green-400 uppercase tracking-wide">{item.label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
            </div>
            <div className="flex items-center w-full relative">
              <div className={`flex-1 h-px ${idx === 0 ? 'bg-transparent' : 'bg-white/[0.07]'}`} />
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold z-10 ${item.color}`}>
                {item.year.slice(2)}
              </div>
              <div className={`flex-1 h-px ${idx === TIMELINE.length - 1 ? 'bg-transparent' : 'bg-white/[0.07]'}`} />
            </div>
            <p className="mt-2 text-sm font-bold text-gray-300">{item.year}</p>
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
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── Hero ───────────────────────────────────── */}
      <div className="relative pt-24 pb-16 px-4 bg-[#0E1310] border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-6xl mx-auto relative">
          <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium mb-6 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">About Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Over Three Decades of Protecting India's Crops
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Safex Chemicals — a specialty agrochemical company trusted by farmers and global agro-companies since 1991.
          </p>
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────── */}
      <div className="bg-[#0B0F0C] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {STATS.map(stat => (
            <div key={stat.label} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center md:items-start gap-0.5">
              <span className="text-2xl font-bold text-green-400">{stat.value}</span>
              <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Section 1: Company Overview ────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                A Trusted Name in Indian Agrochemicals
              </h2>
              <div className="flex flex-col gap-5 text-sm text-gray-400 leading-relaxed">
                <p>
                  <strong className="text-white">Safex Chemicals (India) Limited</strong> was originally incorporated as 'Safex Chemicals (India) Private Limited' on <strong className="text-white">January 8, 1991</strong> under the Companies Act, 1956. In 1995, the company transitioned into a public limited entity.
                </p>
                <p>
                  Founded by the late <strong className="text-white">Surinder Kumar Jindal</strong> and <strong className="text-white">Surinder Kumar Chaudhary</strong>, Safex is a specialty chemicals company focused on agrochemicals, with a strong presence across the entire value chain.
                </p>
                <p>
                  For over three decades, Safex has been supporting farmers and global agrochemical companies through its three key verticals — delivering science-backed solutions that protect crops and feed the nation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { title: 'Branded Formulations',                  desc: 'Herbicides, insecticides, fungicides, PGRs and fertilisers sold under the Safex brand across India.',                                                          icon: '🌿' },
                { title: 'Specialty Chemicals',                   desc: 'High-quality active ingredients and specialty chemical intermediates supplied to global agrochemical companies.',                                                icon: '⚗️' },
                { title: 'Contract Development & Manufacturing',  desc: 'Custom synthesis and contract manufacturing for global agrochemical companies with GMP-compliant facilities.',                                                    icon: '🏭' },
              ].map(v => (
                <div key={v.title} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-5 flex gap-4 items-start hover:border-white/[0.14] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Values ─────────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>What Defines Us</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Core Values — Straight from Our Directors</h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              Our leadership's guiding principles shape every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CORE_VALUES.map(value => <ValueCard key={value.title} value={value} />)}
          </div>
        </div>
      </section>

      {/* ── Section 3: Timeline ────────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C] border-t border-white/[0.05] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Three Decades of Growth</h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              From a private limited company in 1991 to a multi-vertical specialty chemicals leader.
            </p>
          </div>
          <TimelineSection />
        </div>
      </section>

      {/* ── Section 4: Mission & Vision ────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Mission & Vision</h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">The north star that guides everything we do at Safex Chemicals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-green-600 rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Target size={22} className="text-white" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-200 block mb-3">Our Mission</span>
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  To play an instrumental role in food security, quality of life, and health in India.
                </p>
              </div>
              <div className="pt-5 border-t border-white/20">
                <p className="text-sm text-green-100 leading-relaxed">
                  Every product we formulate, every partnership we build, and every farmer we serve moves us closer to a food-secure India.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#151A16] border border-white/[0.09] rounded-xl p-8 flex flex-col gap-5 relative overflow-hidden hover:border-white/[0.15] transition-colors">
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-green-500/[0.04] pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <Eye size={22} className="text-green-400" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Our Vision</span>
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Inclusive growth — Let's fly together!
                </p>
              </div>
              <div className="pt-5 border-t border-white/[0.07]">
                <p className="text-sm text-gray-400 leading-relaxed">
                  We believe that true growth is shared growth. Farmers, distributors, employees, and partners — we rise together or not at all.
                </p>
              </div>
            </div>
          </div>

          {/* Founders note */}
          <div className="mt-8 bg-[#151A16] border border-white/[0.08] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
              <Leaf size={20} className="text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "We are in the business of feeding the nation."
              </p>
              <p className="text-xs font-semibold text-gray-300 mt-1.5">
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
