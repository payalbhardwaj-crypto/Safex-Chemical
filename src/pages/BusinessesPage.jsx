import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Globe, MapPin, TrendingUp } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

const BUSINESSES = [
  {
    id: 'briar',
    name: 'Briar Chemicals Limited',
    tagline: 'Contract & Custom Manufacturing, UK',
    description: 'Briar Chemicals delivers contract and custom manufacturing solutions to customers across the globe. From its campus in Norwich, UK, it services world-leading companies in the crop protection, fine and speciality sectors, utilising a broad asset and technology base, underpinned by quality-driven project management.',
    tags: ['Contract Manufacturing', 'Crop Protection', 'Speciality Chemicals'],
    location: 'Norwich, UK',
    cta: 'View Website',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80',
    accentBar: 'bg-emerald-500',
    tagClass: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    id: 'shogun-organics',
    name: 'Shogun Organics Limited',
    tagline: 'Active Ingredients & Household Insecticides',
    description: 'Shogun Organics is an innovator and pioneer in the household insecticides market for control of mosquitoes in India, manufacturing a range of Active Ingredients at its technical manufacturing site at MIDC Kurkumbh, near Pune, Maharashtra.',
    tags: ['Active Ingredients', 'Household Insecticides', 'Technical Grade'],
    location: 'MIDC Kurkumbh, Pune, Maharashtra',
    cta: 'View Website',
    image: 'https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=900&q=80',
    accentBar: 'bg-blue-500',
    tagClass: 'bg-blue-500/15 text-blue-400',
  },
  {
    id: 'shogun-life',
    name: 'Shogun Lifescience Pvt. Ltd.',
    tagline: 'Grain Storage & Ethical Manufacturing',
    description: 'Shogun Lifesciences specializes in providing reliable grain storage solutions. The facility near Ahmedabad follows high standards of health and safety. Its zero-waste plant and ethical manufacturing practices set it apart as a sustainability leader in its segment.',
    tags: ['Grain Storage', 'Zero-Waste Plant', 'Ethical Manufacturing'],
    location: 'Near Ahmedabad, Gujarat',
    cta: null,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80',
    accentBar: 'bg-teal-500',
    tagClass: 'bg-teal-500/15 text-teal-400',
  },
  {
    id: 'indoswiss',
    name: 'IndoSwiss Chemicals Limited',
    tagline: 'Pan-India Agrochemical Marketing',
    description: 'Indo-Swiss Chemicals Ltd. is a leading marketing company in the Indian agrochemicals industry with a turnover of ₹100+ crores (FY 2019–20). With a strong distribution network spanning 17 states, it delivers effective, economical, and environmentally sustainable agrochemical solutions.',
    tags: ['₹100 Cr+ Turnover', '17 States Network', 'Sustainable Solutions'],
    location: 'Pan India — 17 States',
    cta: 'View Website',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80',
    accentBar: 'bg-amber-500',
    tagClass: 'bg-amber-500/15 text-amber-400',
  },
  {
    id: 'smithnsmith',
    name: 'Smith N Smith Chemicals Limited',
    tagline: 'Multi-State Agrochemical Distribution',
    description: 'Smith N Smith Chemicals Limited, incorporated in 2013, has rapidly grown with a turnover of ₹95+ crores (FY 2019–20). Its distribution network spans 13 states and includes a comprehensive portfolio — insecticides, herbicides, fungicides, and plant growth regulators.',
    tags: ['₹95 Cr+ Turnover', '13 States Network', 'Full Portfolio'],
    location: 'Pan India — 13 States',
    cta: 'View Website',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80',
    accentBar: 'bg-violet-500',
    tagClass: 'bg-violet-500/15 text-violet-400',
  },
  {
    id: 'himbio',
    name: 'Him Bio Agro',
    tagline: 'Bio Agro Manufacturing, Himachal Pradesh',
    description: 'Him Bio Agro, established in 2010, is an agrochemical manufacturing firm based in Una, Himachal Pradesh. It produces plant growth regulators, micronutrient mixtures, and sulphur-based products for the northern Indian market.',
    tags: ['Plant Growth Regulators', 'Micronutrients', 'Sulphur Products'],
    location: 'Una, Himachal Pradesh',
    cta: null,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80',
    accentBar: 'bg-lime-500',
    tagClass: 'bg-lime-500/15 text-lime-400',
  },
  {
    id: 'jaycee',
    name: 'JayCee Lifesciences',
    tagline: 'Full-Spectrum Agrochemical Manufacturing, J&K',
    description: "JayCee Lifesciences is an agrochemical manufacturing firm based in Kathua, Jammu & Kashmir, producing insecticides, herbicides, fungicides, and plant growth regulators — serving regional farmers with locally manufactured, quality-assured crop protection products.",
    tags: ['Insecticides', 'Herbicides & Fungicides', 'PGRs'],
    location: 'Kathua, Jammu & Kashmir',
    cta: null,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80',
    accentBar: 'bg-rose-500',
    tagClass: 'bg-rose-500/15 text-rose-400',
  },
]

function BusinessSection({ business, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="py-14 first:pt-0 last:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.14] transition-all duration-300 bg-[#151A16]">

        {/* Image */}
        <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
            style={{ minHeight: '280px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
            <MapPin size={11} className="text-green-400 flex-shrink-0" />
            {business.location}
          </div>
        </div>

        {/* Content */}
        <div className={`p-8 lg:p-10 flex flex-col justify-center gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`w-10 h-1 rounded-full ${business.accentBar}`} />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{business.tagline}</p>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">{business.name}</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{business.description}</p>
          <div className="flex flex-wrap gap-2">
            {business.tags.map(tag => (
              <span key={tag} className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${business.tagClass}`}>
                {tag}
              </span>
            ))}
          </div>
          {business.cta && (
            <div className="pt-1">
              <button className="btn-glow flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white">
                <Globe size={14} />
                {business.cta}
                <ExternalLink size={12} className="opacity-70" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BusinessesPage() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Hero */}
      <div className="relative pt-24 pb-16 px-4 bg-[#0E1310] border-b border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-6xl mx-auto relative">
          <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium mb-6 transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">Our Businesses</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            A Portfolio of Trusted Agrochemical Enterprises
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Safex Chemicals operates across a network of subsidiary and associate companies spanning crop protection, specialty chemicals, contract manufacturing, and grain storage.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-[#0B0F0C] border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap items-center gap-8 md:gap-14">
          {[
            { icon: TrendingUp, label: '7 Group Companies' },
            { icon: Globe,      label: 'India & UK Presence' },
            { icon: MapPin,     label: '30+ States & Countries' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-gray-400 font-medium">
              <Icon size={16} className="text-green-400 flex-shrink-0" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Business Sections */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="divide-y divide-white/[0.05]">
          {BUSINESSES.map((business, index) => (
            <BusinessSection key={business.id} business={business} index={index} />
          ))}
        </div>
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
