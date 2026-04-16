import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, FlaskConical, Leaf, Cpu, Globe, TrendingUp,
  Users, MapPin, Award, ShoppingCart, ChevronRight, Sprout, BarChart3, Shield
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  {
    icon: FlaskConical,
    title: 'R&D Excellence',
    description: 'State-of-the-art research facilities driving next-generation agrochemical formulations with proven field efficacy.',
    accent: 'emerald',
  },
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Developing bio-safe crop protection solutions that protect farmer livelihoods while preserving ecosystem health.',
    accent: 'green',
  },
  {
    icon: Cpu,
    title: 'Technology-Led',
    description: 'Precision formulation technology and encapsulation science enabling superior product performance and shelf life.',
    accent: 'blue',
  },
  {
    icon: Globe,
    title: 'Digital Solutions',
    description: 'Digital agronomy tools empowering farmers with real-time crop advisory, pest alerts, and usage guidance.',
    accent: 'violet',
  },
]

const ACCENT_MAP = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'group-hover:border-emerald-500/40' },
  green:   { bg: 'bg-green-500/10',   text: 'text-green-400',   border: 'border-green-500/20',   glow: 'group-hover:border-green-500/40' },
  blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20',    glow: 'group-hover:border-blue-500/40' },
  violet:  { bg: 'bg-violet-500/10',  text: 'text-violet-400',  border: 'border-violet-500/20',  glow: 'group-hover:border-violet-500/40' },
  amber:   { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20',   glow: 'group-hover:border-amber-500/40' },
  red:     { bg: 'bg-red-500/10',     text: 'text-red-400',     border: 'border-red-500/20',     glow: 'group-hover:border-red-500/40' },
}

const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    title: 'Precision Herbicide Program',
    description: 'Low-dose, high-efficacy herbicides reducing chemical load on soil while delivering consistent weed control across paddy and wheat belts.',
    tag: 'Herbicides',
    tagAccent: 'emerald',
  },
  {
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
    title: 'Bio-Integrated Pest Management',
    description: 'Combining biological agents with targeted insecticides for sustainable pest control with minimal resistance development.',
    tag: 'Insecticides',
    tagAccent: 'red',
  },
  {
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    title: 'Fungal Disease Shield',
    description: 'Systemic fungicide solutions protecting rice, wheat and vegetable crops through critical growth stages with broad-spectrum activity.',
    tag: 'Fungicides',
    tagAccent: 'violet',
  },
  {
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    title: 'Soil Health Initiative',
    description: 'Bio-fertiliser and micronutrient programs restoring soil biology, improving root architecture, and boosting long-term yield potential.',
    tag: 'Bio Fertilisers',
    tagAccent: 'amber',
  },
]

const STATS = [
  { icon: Users,    value: '1M+',  label: 'Farmers Impacted',   accent: 'green' },
  { icon: MapPin,   value: '18',   label: 'States Covered',     accent: 'blue' },
  { icon: TrendingUp, value: '32+', label: 'Years of Excellence', accent: 'amber' },
  { icon: Award,    value: '200+', label: 'Product SKUs',        accent: 'violet' },
  { icon: Sprout,   value: '6',    label: 'Product Categories',  accent: 'emerald' },
  { icon: BarChart3, value: '40%', label: 'YoY Growth',          accent: 'red' },
]

const TEAM = [
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    name: 'Rajesh Sharma',
    role: 'Managing Director',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    name: 'Priya Mehta',
    role: 'Chief Scientific Officer',
  },
  {
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    name: 'Anil Verma',
    role: 'Head of Operations',
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    name: 'Sunita Rao',
    role: 'VP — Investor Relations',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">
      {children}
    </span>
  )
}

function HighlightCard({ item }) {
  const a = ACCENT_MAP[item.accent]
  return (
    <motion.div
      variants={cardVariant}
      className={`group bg-[#151A16] border ${a.border} ${a.glow} rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${a.bg} flex-shrink-0`}>
        <item.icon size={20} className={a.text} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

function ProjectCard({ item }) {
  const a = ACCENT_MAP[item.tagAccent]
  return (
    <motion.div
      variants={cardVariant}
      className="group bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="overflow-hidden h-44">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border w-fit ${a.bg} ${a.text} ${a.border}`}>
          {item.tag}
        </span>
        <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
        <div className={`flex items-center gap-1 text-[11px] font-semibold ${a.text} mt-1`}>
          Learn more <ChevronRight size={11} />
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ item }) {
  const a = ACCENT_MAP[item.accent]
  return (
    <motion.div
      variants={cardVariant}
      className={`bg-[#151A16] border ${a.border} rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-all duration-300`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${a.bg}`}>
        <item.icon size={22} className={a.text} />
      </div>
      <p className={`text-3xl font-bold ${a.text}`}>{item.value}</p>
      <p className="text-xs text-gray-500 font-medium">{item.label}</p>
    </motion.div>
  )
}

function TeamCard({ member }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 border-t border-white/[0.06]">
        <p className="text-sm font-bold text-white">{member.name}</p>
        <p className="text-xs text-green-400 mt-0.5">{member.role}</p>
      </div>
    </motion.div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function InvestorRelationsPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── 1. Hero ──────────────────────────────────── */}
      <div className="relative min-h-[580px] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&q=85"
          alt="Agriculture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group z-10"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Hero content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16 z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Shield size={11} /> Investor Relations
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Driving Innovation<br />
              <span className="text-green-400">in Agriculture</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Safex Chemicals is building the future of crop protection — combining science, sustainability, and scale to deliver measurable impact for farmers across India.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button className="btn-glow text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2">
                <BarChart3 size={15} /> View Annual Report
              </button>
              <button className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                Contact IR Team
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── 2. Innovation Highlights ─────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Safex</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Built on Four Pillars of Innovation
              </h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                Our competitive advantage is rooted in science-first thinking, sustainable practices, and deep farmer relationships.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {HIGHLIGHTS.map(item => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Innovation Projects ───────────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Solutions</SectionLabel>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white max-w-md leading-tight">
                  Innovation Projects & Programs
                </h2>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  Targeted R&D initiatives translating into commercial products that reach farmers at scale.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {PROJECTS.map(item => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Impact / Stats ────────────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Impact</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Numbers That Tell the Story
              </h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
                Over three decades of consistent growth — measured not just in revenue, but in farmers empowered and harvests protected.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {STATS.map(item => (
              <StatCard key={item.label} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Team ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Leadership</SectionLabel>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  The Experts Behind Safex
                </h2>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  Decades of combined expertise in agrochemistry, operations, and business strategy.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5"
          >
            {TEAM.map(member => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA Banner ────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="relative bg-green-600 rounded-2xl overflow-hidden p-10 md:p-14 text-center"
          >
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <div className="relative">
              <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Interested in Investing with Safex?
              </h2>
              <p className="text-green-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
                Connect with our investor relations team for financial disclosures, annual reports, and partnership opportunities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button className="bg-white text-green-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2">
                  <ShoppingCart size={15} /> Request a Meeting
                </button>
                <button className="bg-white/10 border border-white/25 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                  Download Reports
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}