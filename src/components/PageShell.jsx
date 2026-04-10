import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

export default function PageShell({ label, title, description, children }) {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header */}
      <div className="bg-corp-green pt-24 pb-14 px-4 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
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

          <span className="text-xs font-bold uppercase tracking-widest text-corp-green-light block mb-3">
            {label}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{title}</h1>
          {description && (
            <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        {children}
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
