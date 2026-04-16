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
    image: 'http://be.platform.simplifii.com/api/v1/static/files/rj_plant.jpg',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    label: 'Production Unit',
    image: 'https://safexchemicals.com/assets/innovations/Manufacturing_HP.jpg',
  },
  {
    id: 'jk',
    name: 'Jammu & Kashmir',
    label: 'Manufacturing Site',
    image: 'https://safexchemicals.com/assets/innovations/JK.jpg',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    label: 'R&D & Production Hub',
    image: 'https://safexchemicals.com/assets/innovations/MH.jpg',
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
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
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
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

        <button
          onClick={() => navigate('/')}
          className="absolute top-20 left-6 md:left-12 flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors group z-10"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="absolute inset-0 flex flex-col justify-center max-w-5xl px-6 md:px-16">
          <span className="block mb-4 text-xs font-bold tracking-widest text-green-400 uppercase">
            Innovation
          </span>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Innovation<br />at Safex
          </h1>
          <p className="max-w-lg mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
            Adding value to every product, every day — through science, testing, and relentless improvement.
          </p>
        </div>
      </div>

      {/* ── 2. Innovation Philosophy ────────────────── */}
      <section className="py-20 px-4 bg-[#0B0F0C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Left: text */}
            <div>
              <span className="block mb-3 text-xs font-bold tracking-widest text-green-400 uppercase">Our Philosophy</span>
              <h2 className="mb-6 text-2xl font-bold leading-tight text-white md:text-3xl">
                Adding Value to Every Product, Every Day
              </h2>

              <div className="py-1 pl-5 mb-6 border-l-4 border-green-500">
                <p className="text-base italic font-semibold leading-snug text-green-400 md:text-lg">
                  "At Safex, innovation stands for adding value to every product every day."
                </p>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
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
              ].map(({ icon, label, value, bg, color }) => {
                const StatIcon = icon
                return (
                <div key={label} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-5 flex flex-col gap-3 hover:border-white/[0.14] transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg}`}>
                    <StatIcon size={20} className={color} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{value}</p>
                    <p className="text-xs font-medium text-gray-500">{label}</p>
                  </div>
                </div>
              )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Manufacturing Facilities ─────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <span className="block mb-3 text-xs font-bold tracking-widest text-green-400 uppercase">Our Facilities</span>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Manufacturing Across India
            </h2>
            <p className="max-w-md mx-auto text-sm text-gray-400">
              State-of-the-art production units spread across four locations, each equipped for precision manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
            <span className="block mb-3 text-xs font-bold tracking-widest text-green-400 uppercase">Quality First</span>
            <h2 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl">
              We Work with Only the Best
            </h2>
            <div className="bg-[#151A16] border border-white/[0.08] border-l-4 border-l-green-500 rounded-xl p-8 md:p-10 text-left">
              <p className="mb-4 text-base leading-relaxed text-white md:text-lg">
                Our uncompromising attitude has ensured we work with only the best people in the industry.
              </p>
              <p className="text-sm leading-relaxed text-gray-400">
                We source only premium raw materials from trusted partners — because we know that <strong className="text-white">better raw materials create better chemicals</strong>. This commitment to upstream quality is what makes our formulations consistently reliable for farmers season after season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Process Approach ─────────────────────── */}
      <section className="relative px-4 py-20 overflow-hidden bg-green-600">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

            <div>
              <span className="block mb-3 text-xs font-bold tracking-widest text-green-200 uppercase">Process Approach</span>
              <h2 className="mb-6 text-4xl font-bold leading-none text-white md:text-5xl lg:text-6xl">
                Innovate.<br />
                Test.<br />
                Repeat.
              </h2>
              <div className="flex items-center gap-2 text-sm font-semibold text-green-200">
                <RefreshCw size={14} className="flex-shrink-0" />
                <span>The Safex manufacturing philosophy</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-8 border bg-white/10 backdrop-blur-sm border-white/20 rounded-xl">
              <p className="text-sm leading-relaxed text-white">
                We believe a product is not complete until it provides a holistic and quality experience to the end customer. That's why at Safex's manufacturing facilities, the cycle never stops.
              </p>
              <p className="text-sm leading-relaxed text-white/75">
                We test products ourselves and go the extra mile to make them more user-friendly — identifying friction points in real-world use and solving them through precise R&D iterations.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {['Formulate with the best raw materials', 'Conduct multi-stage quality checks', 'Run real-world field trials', 'Refine and improve continuously'].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/85">{step}</span>
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
          <div className="mb-10 text-center">
            <span className="block mb-3 text-xs font-bold tracking-widest text-green-400 uppercase">Field Trial Case Study</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Innovation in Action
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#151A16] border border-white/[0.08] rounded-xl overflow-hidden">

              {/* Card header */}
              <div className="bg-green-500/10 border-b border-white/[0.07] px-6 py-4 flex items-center gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-600 rounded-lg">
                  <FlaskConical size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-green-400 uppercase">Case Study</p>
                  <p className="text-sm font-semibold text-white">Powder Spreadability — Field Trial Finding</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 px-6 py-7">

                {/* Problem */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-red-400">!</span>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wide text-red-400 uppercase">The Problem</p>
                    <p className="text-sm leading-relaxed text-gray-400">
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
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-400">✓</span>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wide text-green-400 uppercase">The Solution</p>
                    <p className="text-sm leading-relaxed text-gray-400">
                      We partnered with our R&D lab to develop a more manageable material formulation, ensuring <strong className="text-white">better and uniform spreadability</strong> — making the product more effective and easier to apply for every farmer.
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer tag */}
              <div className="bg-white/[0.03] border-t border-white/[0.07] px-6 py-3 flex items-center gap-2">
                <Microscope size={13} className="text-gray-500" />
                <span className="text-xs font-medium text-gray-500">R&D Lab Collaboration · Field-Tested Solution</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Closing Statement ────────────────────── */}
      <section className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="block mb-3 text-xs font-bold tracking-widest text-green-400 uppercase">Our Commitment</span>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Built to Be Best in Class
            </h2>
            <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-400">
              At Safex, the pursuit of excellence is not a milestone — it's a continuous journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CLOSING_POINTS.map(({ icon, title, text, iconBg, iconColor }) => {
              const ClosingIcon = icon
              return (
              <div key={title} className="bg-[#151A16] border border-white/[0.08] rounded-xl p-6 flex flex-col gap-4 hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg} flex-shrink-0`}>
                  <ClosingIcon size={20} className={iconColor} />
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold text-white">{title}</h3>
                  <p className="text-xs leading-relaxed text-gray-400">{text}</p>
                </div>
              </div>
              )
            })}
          </div>

          {/* Final closing quote */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-base italic leading-relaxed text-gray-400 md:text-lg">
              "We work uncompromisingly to ensure everything Safex provides is best in class — continuously upgrading our product line for human and environmental safety, aiming to deliver better molecules with improved action and yield."
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="h-px w-10 bg-white/[0.08]" />
              <span className="text-xs font-bold tracking-widest text-green-400 uppercase">Safex Chemicals</span>
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
