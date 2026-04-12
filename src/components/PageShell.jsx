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
    <div className="min-h-screen bg-[#0B0F0C]">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header */}
      <div className="relative pt-24 pb-14 px-4 overflow-hidden bg-[#0E1310] border-b border-white/[0.06]">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Green ambient glow top-left */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-medium mb-6 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <span className="text-xs font-bold uppercase tracking-widest text-green-400 block mb-3">
            {label}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{title}</h1>
          {description && (
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">{description}</p>
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
