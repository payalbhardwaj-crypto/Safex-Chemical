import { createContext, useContext, useReducer } from 'react'

const InquiryContext = createContext(null)

function inquiryReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (state.find(p => p.id === action.product.id)) return state
      return [...state, action.product]
    case 'REMOVE_PRODUCT':
      return state.filter(p => p.id !== action.id)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function InquiryProvider({ children }) {
  const [cart, dispatch] = useReducer(inquiryReducer, [])

  const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', product })
  const removeProduct = (id) => dispatch({ type: 'REMOVE_PRODUCT', id })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <InquiryContext.Provider value={{ cart, addProduct, removeProduct, clearCart }}>
      {children}
    </InquiryContext.Provider>
  )
}

export function useInquiry() {
  const ctx = useContext(InquiryContext)
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider')
  return ctx
}
