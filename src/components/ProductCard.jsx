import { ShoppingCart, Eye, Check } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'
import { useState } from 'react'

const CATEGORY_STYLE = {
  Insecticide: 'tag-insecticide',
  Fungicide:   'tag-fungicide',
  Herbicide:   'tag-herbicide',
  Organic:     'tag-organic',
}

export default function ProductCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const [expanded, setExpanded] = useState(false)
  const inCart   = cart.some(p => p.id === product.id)
  const tagClass = CATEGORY_STYLE[product.category] || 'bg-gray-100 text-gray-600'

  return (
    <div className="corp-card flex flex-col overflow-hidden group">
      {/* Image — proper <img> for correct aspect ratio + hover scale */}
      <div className="h-44 overflow-hidden bg-corp-surface flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-0">
        {/* Category badge */}
        <span className={`corp-tag ${tagClass} mb-3 self-start`}>
          {product.category}
        </span>

        <h3 className="font-bold text-corp-text text-[15px] leading-snug">{product.name}</h3>
        <p className="text-corp-text-2 text-xs mt-1 leading-relaxed">{product.ingredient}</p>

        {expanded && (
          <p className="text-corp-text-2 text-xs mt-3 leading-relaxed border-t border-corp-border pt-3">
            {product.benefit}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4">
          <button
            onClick={(e) => { e.stopPropagation(); addProduct(product) }}
            disabled={inCart}
            className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md transition-all duration-200 ${
              inCart
                ? 'bg-corp-green-bg text-corp-green cursor-default border border-corp-green/25'
                : 'btn-primary text-white'
            }`}
          >
            {inCart ? <Check size={12} /> : <ShoppingCart size={12} />}
            {inCart ? 'Added' : 'Add to Inquiry'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(v => !v) }}
            className="btn-outline flex items-center justify-center gap-1 text-xs py-2 px-3 rounded-md"
          >
            <Eye size={12} />
            {expanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </div>
  )
}
