import { useState } from 'react'
import { X, Trash2, CheckCircle } from 'lucide-react'
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal panel */}
      <div className="relative z-10 w-full sm:max-w-lg bg-white dark:bg-dark-bg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-dark-border sticky top-0 bg-white dark:bg-dark-bg rounded-t-3xl">
          <div>
            <h2 className="text-lg font-black text-gray-900 dark:text-white">Your Inquiry Cart</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cart.length} product{cart.length !== 1 ? 's' : ''} selected</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full transition-colors">
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle size={56} className="text-primary mb-4" />
              <h3 className="text-xl font-black text-gray-900 dark:text-white">Request Sent!</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Our team will contact you within 24 hours.<br />Thank you for choosing Safex!
              </p>
            </div>
          ) : (
            <>
              {/* Cart items */}
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 dark:text-gray-500 text-sm py-6">
                  No products added yet. Browse our products and click "Add to Inquiry".
                </p>
              ) : (
                <div className="flex flex-col gap-2 mb-6">
                  {cart.map(product => (
                    <div key={product.id}
                      className="flex items-center justify-between bg-beige dark:bg-dark-card rounded-xl px-4 py-3">
                      <div>
                        <div className="font-bold text-sm text-gray-900 dark:text-white">{product.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{product.category}</div>
                      </div>
                      <button onClick={() => removeProduct(product.id)}
                        className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-gray-400 hover:text-red-500">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Quote form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">Request a Quote</h3>

                <div>
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-dark-card text-gray-900 dark:text-white outline-none transition-colors focus:border-primary-dark dark:focus:border-primary ${
                      errors.name ? 'border-red-400' : 'border-gray-200 dark:border-dark-border'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`w-full border rounded-xl px-4 py-3 text-sm bg-white dark:bg-dark-card text-gray-900 dark:text-white outline-none transition-colors focus:border-primary-dark dark:focus:border-primary ${
                      errors.phone ? 'border-red-400' : 'border-gray-200 dark:border-dark-border'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">Message (Optional)</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your crop, farm size, or any specific needs..."
                    rows={3}
                    className="w-full border border-gray-200 dark:border-dark-border rounded-xl px-4 py-3 text-sm bg-white dark:bg-dark-card text-gray-900 dark:text-white outline-none resize-none focus:border-primary-dark dark:focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="bg-accent hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg"
                >
                  Request Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
