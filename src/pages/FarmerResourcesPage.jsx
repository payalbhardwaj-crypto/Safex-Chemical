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
    color: 'text-sky-blue',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    tag: 'Seasonal Guide',
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
    color: 'text-primary',
    bg: 'bg-green-50 dark:bg-green-900/20',
    tag: 'Safety',
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
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    tag: 'Field Guide',
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
    color: 'text-accent',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    tag: 'Planning',
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
    <div className="min-h-screen bg-beige dark:bg-dark-bg transition-colors duration-300">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header banner */}
      <div className="relative bg-primary-dark pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-green-200 hover:text-white text-sm font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-green-300 mb-3 block">Farmer Resources</span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Knowledge for<br className="hidden md:block" /> Better Farming
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-xl">
            Free guides, seasonal tips, and expert advice from Safex agronomists to help you grow healthier, more profitable crops.
          </p>
        </div>
      </div>

      {/* Resource cards */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCES.map(({ icon: Icon, title, description, color, bg, tag, tips }) => (
            <div
              key={title}
              className="bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Card header */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={color} />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-bold ${color} uppercase tracking-wide block mb-1`}>{tag}</span>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                  </div>
                </div>

                {/* Key tips (expandable) */}
                {expanded === title && (
                  <div className="mt-5 pt-5 border-t border-gray-100 dark:border-dark-border">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Tips</h4>
                    <ul className="flex flex-col gap-2.5">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-5 h-5 rounded-full bg-primary-dark/10 dark:bg-primary/10 text-primary-dark dark:text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  className="mt-4 flex items-center gap-1 text-sm font-bold text-primary-dark dark:text-primary transition-all duration-200 hover:gap-2"
                >
                  {expanded === title ? 'Show Less' : 'Read More'}
                  <ArrowRight size={14} className={expanded === title ? 'rotate-90 transition-transform' : 'transition-transform'} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expert helpline CTA */}
        <div className="mt-14 bg-primary-dark rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white">Need personalised advice?</h3>
            <p className="text-green-200 text-sm mt-1">
              Our agronomists are available Mon–Fri, 9AM–6PM — free of charge.
            </p>
          </div>
          <a
            href="tel:18001023959"
            className="flex items-center gap-2 bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            1800 102 3959 — Free
          </a>
        </div>
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
