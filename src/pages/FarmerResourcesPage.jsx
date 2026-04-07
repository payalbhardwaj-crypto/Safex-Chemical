import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CloudRain, Shield, Bug, Calendar, ArrowRight, ArrowLeft, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

const RESOURCES = [
  {
    icon: CloudRain,
    title: 'Monsoon Pest Tips',
    description: 'Prepare your crops for the kharif season. Learn which pests peak during monsoon and how to control them effectively with timely intervention.',
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'border-blue-500/15',
    tag: 'Seasonal Guide',
    tagColor: 'text-blue-400',
    tips: [
      'Monitor fields regularly during high humidity periods',
      'Apply preventive fungicides before monsoon onset',
      'Ensure proper drainage to reduce waterlogging and root rot',
      'Use yellow sticky traps to monitor whitefly and aphid populations',
    ],
  },
  {
    icon: Shield,
    title: 'Safe Pesticide Usage',
    description: 'Best practices for handling, mixing, and applying pesticides safely — protecting you, your family, and the environment.',
    color: 'text-g-400',
    iconBg: 'bg-g-500/10',
    border: 'border-g-500/15',
    tag: 'Safety',
    tagColor: 'text-g-400',
    tips: [
      'Always wear PPE — gloves, mask, goggles, and full-sleeve clothing',
      'Read the label thoroughly before mixing or applying',
      'Never spray in windy conditions or near water bodies',
      'Store pesticides in original containers, away from children and food',
    ],
  },
  {
    icon: Bug,
    title: 'Common Pest Identification',
    description: 'Visual guide to identifying the 20 most common crop pests in India — with recommended Safex treatment for each.',
    color: 'text-red-400',
    iconBg: 'bg-red-500/10',
    border: 'border-red-500/15',
    tag: 'Field Guide',
    tagColor: 'text-red-400',
    tips: [
      'Stem borers: yellowing central shoot, "dead heart" symptom in rice',
      'Aphids: cluster on tender shoots, cause leaf curl and sooty mold',
      'Whiteflies: tiny white insects on leaf undersides, transmit viruses',
      'Mites: silvery speckling on leaves, prevalent in dry weather',
    ],
  },
  {
    icon: Calendar,
    title: 'Seasonal Spray Schedule',
    description: 'Month-by-month spray calendar for major crops — right product, right time, right dose for maximum protection.',
    color: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/15',
    tag: 'Planning',
    tagColor: 'text-orange-400',
    tips: [
      'Pre-sowing: soil treatment with Fipro Ultra for grub control',
      'Vegetative stage: apply systemic insecticide at first pest sign',
      'Flowering: avoid spraying to protect pollinators',
      'Post-harvest: clear crop residue to break pest cycles',
    ],
  },
]

export default function FarmerResourcesPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="min-h-screen section-dark">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header banner */}
      <div className="relative pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a1f0e 0%, #020d06 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="orb orb-emerald w-96 h-96 top-0 right-0 opacity-[0.08]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-g-400 text-sm font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <span className="section-label block mb-3">Farmer Resources</span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Knowledge for<br className="hidden md:block" /> Better Farming
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Free guides, seasonal tips, and expert advice from Safex agronomists to help you grow healthier, more profitable crops.
          </p>
        </div>
      </div>

      {/* Resource cards */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESOURCES.map(({ icon: Icon, title, description, color, iconBg, border, tag, tagColor, tips }) => (
            <div
              key={title}
              className={`glass rounded-2xl border ${border} hover:border-white/10 transition-all duration-300 overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={20} className={color} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-bold ${tagColor} uppercase tracking-wide block mb-1`}>{tag}</span>
                    <h3 className="text-base font-black text-white mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>

                {/* Key tips (expandable) */}
                {expanded === title && (
                  <div className="mt-5 pt-5 border-t border-white/[0.07]">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">Key Tips</h4>
                    <ul className="flex flex-col gap-2.5">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <span className={`w-5 h-5 rounded-full ${iconBg} border ${border} ${color} text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            {i + 1}
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => setExpanded(expanded === title ? null : title)}
                  className={`mt-4 flex items-center gap-1 text-xs font-bold ${tagColor} transition-all duration-200 hover:gap-2`}
                >
                  {expanded === title ? 'Show Less' : 'Read More'}
                  <ArrowRight size={13} className={expanded === title ? 'rotate-90 transition-transform' : 'transition-transform'} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expert helpline CTA */}
        <div className="mt-14 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-primary-gradient opacity-90 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-g-700/50 to-transparent pointer-events-none" />
          <div className="orb orb-green w-64 h-64 -right-10 -top-10 opacity-20" />
          <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">Need personalised advice?</h3>
              <p className="text-green-200/80 text-sm mt-1">
                Our agronomists are available Mon–Fri, 9AM–6PM — free of charge.
              </p>
            </div>
            <a
              href="tel:18001023959"
              className="glass border border-white/20 hover:border-white/40 flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105"
            >
              <Phone size={16} />
              1800 102 3959 — Free
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
