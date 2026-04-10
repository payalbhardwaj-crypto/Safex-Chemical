import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, RefreshCw, FlaskConical, Microscope, Leaf, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

// ─────────────────────────────────────────────────────────────────────────────
//  Data
// ─────────────────────────────────────────────────────────────────────────────

const FACILITIES = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    label: 'Manufacturing Facility',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    label: 'Production Unit',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=600&q=80',
  },
  {
    id: 'jk',
    name: 'Jammu & Kashmir',
    label: 'Manufacturing Site',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    label: 'R&D & Production Hub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
]

const CLOSING_POINTS = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    text: 'Everything Safex provides is best in class — from raw material selection to final packaging.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    text: 'We continuously upgrade our product line, never settling for yesterday\'s standards.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
  },
  {
    icon: Leaf,
    title: 'Human & Environmental Safety',
    text: 'Our formulations are designed for safety — protecting farmers, consumers, and the ecosystem.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-700',
  },
  {
    icon: TrendingUp,
    title: 'Better Molecules, Better Yield',
    text: 'We aim to deliver better molecules with improved action, ensuring higher and more consistent yield for farmers.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
//  Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }) {
  return (
    <span className={`text-xs font-bold uppercase tracking-widest block mb-3 ${light ? 'text-corp-green-light' : 'text-corp-green'}`}>
      {children}
    </span>
  )
}

function FacilityCard({ facility }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-corp-border shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wider mb-0.5">
          {facility.label}
        </p>
        <p className="text-sm font-bold text-white">{facility.name}</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main Page
// ─────────────────────────────────────────────────────────────────────────────

export default function InnovationPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── 1. Full-width Hero ──────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(380px, 55vw, 620px)' }}>
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85"
          alt="Innovation at Safex"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

        {/* Back nav */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors group z-10"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-corp-green-light block mb-4">
            Innovation
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Innovation<br />at Safex
          </h1>
          <p className="mt-4 text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
            Adding value to every product, every day — through science, testing, and relentless improvement.
          </p>
        </div>
      </div>

      {/* ── 2. Innovation Philosophy ────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: text */}
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-6 leading-tight">
                Adding Value to Every Product, Every Day
              </h2>

              {/* Pull quote */}
              <div className="border-l-4 border-corp-green pl-5 mb-6 py-1">
                <p className="text-base md:text-lg font-semibold text-corp-green leading-snug italic">
                  "At Safex, innovation stands for adding value to every product every day."
                </p>
              </div>

              <p className="text-sm text-corp-text-2 leading-relaxed">
                Our manufacturing facilities are equipped with best-in-class equipment to ensure a constant check on both purchased and manufactured goods, helping us deliver only the best quality — every time, without exception.
              </p>
            </div>

            {/* Right: icon stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope, label: 'R&D Labs',        value: 'Best-in-class',  bg: 'bg-emerald-50', color: 'text-emerald-700' },
                { icon: FlaskConical, label: 'Testing',       value: 'Rigorous',       bg: 'bg-blue-50',    color: 'text-blue-700' },
                { icon: ShieldCheck, label: 'Quality Checks', value: 'Continuous',     bg: 'bg-teal-50',    color: 'text-teal-700' },
                { icon: Leaf,        label: 'Sustainability',  value: 'By Design',     bg: 'bg-amber-50',   color: 'text-amber-700' },
              ].map(({ icon: Icon, label, value, bg, color }) => (
                <div key={label} className={`corp-card p-5 flex flex-col gap-3 ${bg} border-0`}>
                  <Icon size={22} className={color} />
                  <div>
                    <p className="text-lg font-bold text-corp-text">{value}</p>
                    <p className="text-xs text-corp-text-2 font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Manufacturing Facilities ─────────────── */}
      <section className="py-20 px-4 bg-corp-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Our Facilities</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-3">
              Manufacturing Across India
            </h2>
            <p className="text-sm text-corp-text-2 max-w-md mx-auto">
              State-of-the-art production units spread across four locations, each equipped for precision manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FACILITIES.map(facility => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Quality & Partnerships ───────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Quality First</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-8 leading-tight">
              We Work with Only the Best
            </h2>
            <div className="corp-card p-8 md:p-10 text-left border-l-4 border-corp-green rounded-xl">
              <p className="text-base md:text-lg text-corp-text leading-relaxed mb-4">
                Our uncompromising attitude has ensured we work with only the best people in the industry.
              </p>
              <p className="text-sm text-corp-text-2 leading-relaxed">
                We source only premium raw materials from trusted partners — because we know that <strong className="text-corp-text">better raw materials create better chemicals</strong>. This commitment to upstream quality is what makes our formulations consistently reliable for farmers season after season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Process Approach ─────────────────────── */}
      <section className="py-20 px-4 bg-corp-green relative overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: big phrase */}
            <div>
              <SectionLabel light>Process Approach</SectionLabel>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-6">
                Innovate.<br />
                Test.<br />
                Repeat.
              </h2>
              <div className="flex items-center gap-2 text-corp-green-light text-sm font-semibold">
                <RefreshCw size={14} className="flex-shrink-0" />
                <span>The Safex manufacturing philosophy</span>
              </div>
            </div>

            {/* Right: supporting text */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col gap-4">
              <p className="text-white text-sm leading-relaxed">
                We believe a product is not complete until it provides a holistic and quality experience to the end customer. That's why at Safex's manufacturing facilities, the cycle never stops.
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                We test products ourselves and go the extra mile to make them more user-friendly — identifying friction points in real-world use and solving them through precise R&D iterations.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {['Formulate with the best raw materials', 'Conduct multi-stage quality checks', 'Run real-world field trials', 'Refine and improve continuously'].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/85 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Case Study ───────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Field Trial Case Study</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text">
              Innovation in Action
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="corp-card rounded-xl overflow-hidden border border-corp-border">

              {/* Card header */}
              <div className="bg-corp-green-bg border-b border-corp-border px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-corp-green flex items-center justify-center flex-shrink-0">
                  <FlaskConical size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-corp-green">Case Study</p>
                  <p className="text-sm font-semibold text-corp-text">Powder Spreadability — Field Trial Finding</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-7 flex flex-col gap-6">

                {/* Problem */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-red-600 mb-1">The Problem</p>
                    <p className="text-sm text-corp-text-2 leading-relaxed">
                      Our field trials revealed that broadcasting low-dose powder products caused <strong className="text-corp-text">uneven distribution</strong> across crop areas — leading to inconsistent protection and wasted product for farmers.
                    </p>
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center gap-3 pl-4">
                  <div className="w-0.5 h-8 bg-corp-border ml-3.5" />
                  <ChevronRight size={16} className="text-corp-green -ml-2.5" />
                </div>

                {/* Solution */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-corp-green-bg border border-corp-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-corp-green font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-corp-green mb-1">The Solution</p>
                    <p className="text-sm text-corp-text-2 leading-relaxed">
                      We partnered with our R&D lab to develop a more manageable material formulation, ensuring <strong className="text-corp-text">better and uniform spreadability</strong> — making the product more effective and easier to apply for every farmer.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer tag */}
              <div className="bg-corp-surface border-t border-corp-border px-6 py-3 flex items-center gap-2">
                <Microscope size={13} className="text-corp-text-2" />
                <span className="text-xs text-corp-text-2 font-medium">R&D Lab Collaboration · Field-Tested Solution</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Closing Statement ────────────────────── */}
      <section className="py-20 px-4 bg-corp-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-corp-text mb-3">
              Built to Be Best in Class
            </h2>
            <p className="text-sm text-corp-text-2 max-w-xl mx-auto leading-relaxed">
              At Safex, the pursuit of excellence is not a milestone — it's a continuous journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLOSING_POINTS.map(({ icon: Icon, title, text, iconBg, iconColor }) => (
              <div key={title} className="corp-card p-6 flex flex-col gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg} flex-shrink-0`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-corp-text mb-2">{title}</h3>
                  <p className="text-xs text-corp-text-2 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final closing quote */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-corp-text-2 leading-relaxed italic">
              "We work uncompromisingly to ensure everything Safex provides is best in class — continuously upgrading our product line for human and environmental safety, aiming to deliver better molecules with improved action and yield."
            </p>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="h-px w-10 bg-corp-border" />
              <span className="text-xs font-bold text-corp-green uppercase tracking-widest">Safex Chemicals</span>
              <div className="h-px w-10 bg-corp-border" />
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
