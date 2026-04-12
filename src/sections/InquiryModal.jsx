import { useState } from 'react'
import { X, Trash2, CheckCircle, ShoppingCart } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export default function InquiryModal({ open, onClose }) {
  const { cart, removeProduct, clearCart } = useInquiry()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
    clearCart()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', message: '' })
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full sm:max-w-lg bg-[#111815] border border-white/[0.09] rounded-t-2xl sm:rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] sticky top-0 bg-[#111815] rounded-t-2xl sm:rounded-t-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-md flex items-center justify-center">
              <ShoppingCart size={15} className="text-green-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Your Inquiry Cart</h2>
              <p className="text-xs text-gray-500">{cart.length} product{cart.length !== 1 ? 's' : ''} selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/[0.06] rounded-md transition-colors text-gray-500 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white">Request Sent!</h3>
              <p className="text-gray-400 text-sm mt-2">
                Our team will contact you within 24 hours.<br />Thank you for choosing Safex!
              </p>
            </div>
          ) : (
            <>
              {/* Cart items */}
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-sm py-8 bg-white/[0.03] rounded-lg border border-white/[0.06]">
                  No products added yet. Browse our products and click "Add to Inquiry".
                </p>
              ) : (
                <div className="flex flex-col gap-2 mb-6">
                  {cart.map(product => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between bg-white/[0.04] border border-white/[0.07] rounded-lg px-4 py-3"
                    >
                      <div>
                        <div className="font-semibold text-sm text-white">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </div>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="p-1.5 hover:bg-red-500/10 rounded-md transition-colors text-gray-500 hover:text-red-400"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-white border-t border-white/[0.08] pt-4">
                  Request a Quote
                </h3>

                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1.5 block">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Ramesh Kumar"
                    className={`corp-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1.5 block">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`corp-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 mb-1.5 block">
                    Message (Optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your crop, farm size, or any specific needs..."
                    rows={3}
                    className="corp-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="btn-glow disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md text-sm w-full"
                >
                  Submit Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
