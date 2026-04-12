import { ShoppingCart, Eye, Check } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'
import { useState } from 'react'

const CATEGORY_STYLE = {
  Insecticide: { tag: 'bg-red-500/15 text-red-400',    dot: 'bg-red-400' },
  Fungicide:   { tag: 'bg-violet-500/15 text-violet-400', dot: 'bg-violet-400' },
  Herbicide:   { tag: 'bg-yellow-500/15 text-yellow-400', dot: 'bg-yellow-400' },
  Organic:     { tag: 'bg-green-500/15 text-green-400',  dot: 'bg-green-400' },
}

export default function ProductCard({ product }) {
  const { cart, addProduct } = useInquiry()
  const [expanded, setExpanded] = useState(false)
  const inCart = cart.some(p => p.id === product.id)
  const style  = CATEGORY_STYLE[product.category] || { tag: 'bg-white/10 text-gray-300', dot: 'bg-gray-400' }

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[#151A16] border border-white/[0.08] shadow-md hover:shadow-[0_6px_24px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-250 group">

      {/* Image */}
      <div className="h-44 overflow-hidden flex-shrink-0 bg-[#0f1712]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Badge */}
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md self-start mb-3 ${style.tag}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {product.category}
        </span>

        <h3 className="font-bold text-white text-[15px] leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{product.ingredient}</p>

        {expanded && (
          <p className="text-gray-400 text-xs mt-3 leading-relaxed border-t border-white/[0.07] pt-3">
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
                ? 'bg-green-500/10 text-green-400 cursor-default border border-green-500/20'
                : 'btn-glow text-white'
            }`}
          >
            {inCart ? <Check size={12} /> : <ShoppingCart size={12} />}
            {inCart ? 'Added' : 'Add to Inquiry'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded(v => !v) }}
            className="flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-md bg-white/[0.05] border border-white/[0.09] text-gray-300 hover:bg-white/[0.09] hover:text-white transition-all"
          >
            <Eye size={12} />
            {expanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </div>
  )
}
