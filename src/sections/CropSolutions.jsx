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
    <section id="crops" className="py-20 px-4 bg-beige dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Crop Solutions</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            Find the Right Product for Your Crop
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
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
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Recommended for <span className="text-primary-dark dark:text-primary">{activeCrop.icon} {activeCrop.name}</span>
            </h3>
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
