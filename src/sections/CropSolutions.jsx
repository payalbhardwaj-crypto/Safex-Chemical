import { useState } from 'react'
import { crops } from '../data/crops'
import { products } from '../data/products'
import CropCard from '../components/CropCard'
import ProductCard from '../components/ProductCard'

export default function CropSolutions() {
  const [activeCropId, setActiveCropId] = useState('rice')

  const activeCrop = crops.find(c => c.id === activeCropId)
  const recommendedProducts = activeCrop
    ? activeCrop.productIds.map(id => products.find(p => p.id === id)).filter(Boolean)
    : []

  return (
    <section id="crops" className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Crop Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Find the Right Product for Your Crop
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Select your crop below to see Safex products recommended by our agronomists.
          </p>
        </div>

        {/* Crop chips */}
        <div className="flex gap-3 overflow-x-auto pb-3 justify-center flex-wrap">
          {crops.map(crop => (
            <CropCard
              key={crop.id}
              crop={crop}
              active={activeCropId === crop.id}
              onClick={() => setActiveCropId(crop.id)}
            />
          ))}
        </div>

        {/* Recommended products */}
        {activeCrop && (
          <div className="mt-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-white/[0.07]" />
              <h3 className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                Recommended for{' '}
                <span className="text-green-400">{activeCrop.icon} {activeCrop.name}</span>
              </h3>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {recommendedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
