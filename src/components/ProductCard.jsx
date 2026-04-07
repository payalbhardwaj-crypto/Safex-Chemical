import { ShoppingCart, Eye } from 'lucide-react'
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
  const inCart    = cart.some(p => p.id === product.id)
  const tagClass  = CATEGORY_STYLE[product.category] || 'bg-gray-100 text-gray-600'

  return (
    <div className="corp-card flex flex-col overflow-hidden">
      {/* Image */}
      <div
        className="h-44 bg-cover bg-center bg-corp-surface flex-shrink-0"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`corp-tag ${tagClass} mb-3 self-start`}>
          {product.category}
        </span>

        <h3 className="font-bold text-corp-text text-base leading-snug">{product.name}</h3>
        <p className="text-corp-text-2 text-xs mt-0.5">{product.ingredient}</p>

        {expanded && (
          <p className="text-corp-text-2 text-xs mt-2.5 leading-relaxed border-t border-corp-border pt-2.5">
            {product.benefit}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4">
          <button
            onClick={(e) => { e.stopPropagation(); addProduct(product) }}
            disabled={inCart}
            className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-md transition-colors ${
              inCart
                ? 'bg-corp-green-bg text-corp-green cursor-default border border-corp-green/30'
                : 'btn-primary text-white'
            }`}
          >
            <ShoppingCart size={12} />
            {inCart ? 'Added ✓' : 'Add to Inquiry'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(v => !v) }}
            className="btn-outline flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-md"
          >
            <Eye size={12} />
            {expanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </div>
  )
}
