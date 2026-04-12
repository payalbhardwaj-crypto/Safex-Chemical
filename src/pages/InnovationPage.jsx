import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, RefreshCw, FlaskConical, Microscope, Leaf, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

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
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    text: "We continuously upgrade our product line, never settling for yesterday's standards.",
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: Leaf,
    title: 'Human & Environmental Safety',
    text: 'Our formulations are designed for safety — protecting farmers, consumers, and the ecosystem.',
    iconBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
  },
  {
    icon: TrendingUp,
    title: 'Better Molecules, Better Yield',
    text: 'We aim to deliver better molecules with improved action, ensuring higher and more consistent yield for farmers.',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
]

function FacilityCard({ facility }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-0.5">
          {facility.label}
        </p>
        <p className="text-sm font-bold text-white">{facility.name}</p>
      </div>
    </div>
  )
}

export default function InnovationPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* ── 1. Hero ─────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(380px, 55vw, 580px)' }}>
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=85"
          alt="Innovation at Safex"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

        <button
          onClick={() => navigate('/')}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group z-10"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-4">
            Innovation
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Innovation<br />at Safex
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
            Adding value to every product, every day — through science, testing, and relentless improvement.
          </p>
        </div>
      </div>

      {/* ── 2. Innovation Philosophy ────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Our Philosophy</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Adding Value to Every Product, Every Day
              </h2>

              <div className="border-l-4 border-green-500 pl-5 mb-6 py-1">
                <p className="text-base md:text-lg font-semibold text-green-400 leading-snug italic">
                  "At Safex, innovation stands for adding value to every product every day."
                </p>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Our manufacturing facilities are equipped with best-in-class equipment to ensure a constant check on both purchased and manufactured goods, helping us deliver only the best quality — every time, without exception.
              </p>
            </div>

            {/* Right: icon stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope,   label: 'R&D Labs',        value: 'Best-in-class', bg: 'bg-emerald-500/10', color: 'text-emerald-400' },
                { icon: FlaskConical, label: 'Testing',          value: 'Rigorous',      bg: 'bg-blue-500/10',    color: 'text-blue-400' },
                { icon: ShieldCheck,  label: 'Quality Checks',   value: 'Continuous',    bg: 'bg-teal-500/10',    color: 'text-teal-400' },
                { icon: Leaf,         label: 'Sustainability',    value: 'By Design',     bg: 'bg-amber-500/10',   color: 'text-amber-400' },
              ].map(({ icon: Icon, label, value, bg, color }) => (
                <div key={label} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-5 flex flex-col gap-3 hover:border-white/[0.14] transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg}`}>
                    <Icon size={20} className={color} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{value}</p>
                    <p className="text-xs text-gray-500 font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Manufacturing Facilities ─────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Our Facilities</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Manufacturing Across India
            </h2>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
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
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Quality First</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
              We Work with Only the Best
            </h2>
            <div className="bg-[#151A16] border border-white/[0.08] border-l-4 border-l-green-500 rounded-xl p-8 md:p-10 text-left">
              <p className="text-base md:text-lg text-white leading-relaxed mb-4">
                Our uncompromising attitude has ensured we work with only the best people in the industry.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We source only premium raw materials from trusted partners — because we know that <strong className="text-white">better raw materials create better chemicals</strong>. This commitment to upstream quality is what makes our formulations consistently reliable for farmers season after season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Process Approach ─────────────────────── */}
      <section className="py-20 px-4 bg-green-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-200 block mb-3">Process Approach</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-6">
                Innovate.<br />
                Test.<br />
                Repeat.
              </h2>
              <div className="flex items-center gap-2 text-green-200 text-sm font-semibold">
                <RefreshCw size={14} className="flex-shrink-0" />
                <span>The Safex manufacturing philosophy</span>
              </div>
            </div>

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
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Field Trial Case Study</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Innovation in Action
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden">

              {/* Card header */}
              <div className="bg-green-500/10 border-b border-white/[0.07] px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                  <FlaskConical size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400">Case Study</p>
                  <p className="text-sm font-semibold text-white">Powder Spreadability — Field Trial Finding</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-7 flex flex-col gap-6">

                {/* Problem */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-red-400 mb-1">The Problem</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Our field trials revealed that broadcasting low-dose powder products caused <strong className="text-white">uneven distribution</strong> across crop areas — leading to inconsistent protection and wasted product for farmers.
                    </p>
                  </div>
                </div>

                {/* Divider with arrow */}
                <div className="flex items-center gap-3 pl-4">
                  <div className="w-0.5 h-8 bg-white/[0.08] ml-3.5" />
                  <ChevronRight size={16} className="text-green-500 -ml-2.5" />
                </div>

                {/* Solution */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-green-400 mb-1">The Solution</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      We partnered with our R&D lab to develop a more manageable material formulation, ensuring <strong className="text-white">better and uniform spreadability</strong> — making the product more effective and easier to apply for every farmer.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer tag */}
              <div className="bg-white/[0.03] border-t border-white/[0.07] px-6 py-3 flex items-center gap-2">
                <Microscope size={13} className="text-gray-500" />
                <span className="text-xs text-gray-500 font-medium">R&D Lab Collaboration · Field-Tested Solution</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Closing Statement ────────────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Our Commitment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Built to Be Best in Class
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              At Safex, the pursuit of excellence is not a milestone — it's a continuous journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLOSING_POINTS.map(({ icon: Icon, title, text, iconBg, iconColor }) => (
              <div key={title} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4 hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg} flex-shrink-0`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Final closing quote */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed italic">
              "We work uncompromisingly to ensure everything Safex provides is best in class — continuously upgrading our product line for human and environmental safety, aiming to deliver better molecules with improved action and yield."
            </p>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="h-px w-10 bg-white/[0.08]" />
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Safex Chemicals</span>
              <div className="h-px w-10 bg-white/[0.08]" />
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
