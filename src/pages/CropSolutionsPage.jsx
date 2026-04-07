import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { crops } from '../data/crops'
import { products } from '../data/products'
import CropCard from '../components/CropCard'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import InquiryModal from '../sections/InquiryModal'

export default function CropSolutionsPage() {
  const navigate = useNavigate()
  const [activeCropId, setActiveCropId] = useState('rice')
  const [cartOpen, setCartOpen] = useState(false)

  const activeCrop = crops.find(c => c.id === activeCropId)
  const recommendedProducts = activeCrop
    ? activeCrop.productIds.map(id => products.find(p => p.id === id)).filter(Boolean)
    : []

  return (
    <div className="min-h-screen section-dark">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page header banner */}
      <div className="relative pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a1f0e 0%, #020d06 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="orb orb-green w-96 h-96 top-0 left-0 opacity-[0.08]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-g-400 text-sm font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <span className="section-label block mb-3">Crop Solutions</span>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Find the Right Product<br className="hidden md:block" /> for Your Crop
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Select your crop below to see Safex products recommended by our agronomists — tried and tested on Indian farms.
          </p>
        </div>
      </div>

      {/* Crop selector + products */}
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Crop chips grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-14">
          {crops.map(crop => (
            <CropCard
              key={crop.id}
              crop={crop}
              active={activeCropId === crop.id}
              onClick={() => setActiveCropId(crop.id)}
            />
          ))}
        </div>

        {/* Active crop details */}
        {activeCrop && (
          <div>
            {/* Crop heading */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/[0.07]">
              <div className="w-16 h-16 glass-green rounded-2xl flex items-center justify-center text-3xl border border-g-500/20">
                {activeCrop.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  {activeCrop.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {recommendedProducts.length} recommended product{recommendedProducts.length !== 1 ? 's' : ''} by Safex agronomists
                </p>
              </div>
            </div>

            {/* Recommended products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {recommendedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* CTA to browse all */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Looking for more options?
              </p>
              <button
                onClick={() => navigate('/products')}
                className="btn-accent text-white font-bold px-8 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-md"
              >
                Browse All Products
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
    </div>
  )
}
