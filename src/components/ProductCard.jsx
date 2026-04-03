import { ShoppingCart, Eye } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'
import { useState } from 'react'

const CATEGORY_COLORS = {
  Insecticide: 'bg-red-500',
  Fungicide:   'bg-purple-500',
  Herbicide:   'bg-yellow-500',
  Organic:     'bg-green-600',
}

export default function ProductCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const [expanded, setExpanded] = useState(false)
  const inCart = cart.some(p => p.id === product.id)

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer h-64 flex flex-col justify-end transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-900/60 to-transparent" />

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className={`${CATEGORY_COLORS[product.category] || 'bg-gray-500'} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <h3 className="text-white font-black text-lg leading-tight">{product.name}</h3>
        <p className="text-green-200 text-xs mt-0.5 mb-1 font-medium">{product.ingredient}</p>

        {/* Expandable benefit */}
        {expanded && (
          <p className="text-white/80 text-xs mb-2 leading-relaxed">{product.benefit}</p>
        )}

        <div className="flex gap-2 mt-2">
          <button
            onClick={(e) => { e.stopPropagation(); addProduct(product) }}
            className={`flex-1 flex items-center justify-center gap-1 text-xs font-bold py-2 rounded-lg transition-all duration-200 ${
              inCart
                ? 'bg-green-600 text-white cursor-default'
                : 'bg-accent hover:bg-orange-600 text-white'
            }`}
          >
            <ShoppingCart size={12} />
            {inCart ? 'Added' : 'Add to Inquiry'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(v => !v) }}
            className="flex items-center justify-center gap-1 text-xs font-bold py-2 px-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            <Eye size={12} />
            {expanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </div>
  )
}
