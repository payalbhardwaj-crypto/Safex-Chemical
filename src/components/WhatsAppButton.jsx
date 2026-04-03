import { useState } from 'react'
import { X, Send } from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat bubble */}
      {open && (
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-100 dark:border-dark-border">
          {/* Chat header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">🌿</div>
              <div>
                <div className="text-white font-bold text-sm">Safex Support</div>
                <div className="text-green-100 text-xs">Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* Chat message */}
          <div className="bg-[#ECE5DD] dark:bg-gray-800 px-4 py-4">
            <div className="bg-white dark:bg-dark-card rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                👋 Hi! Welcome to <strong>Safex Chemicals</strong>.<br /><br />
                I'm interested in Safex products. How can you help me with crop protection solutions?
              </p>
              <span className="text-xs text-gray-400 mt-1 block text-right">Just now</span>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 py-3 bg-white dark:bg-dark-card">
            <a
              href="https://wa.me/911800102395"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20c05a] text-white font-bold py-2.5 rounded-xl text-sm transition-colors w-full"
            >
              <Send size={14} />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp FAB */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20c05a] text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 flex items-center justify-center text-2xl"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={22} /> : <span>💬</span>}
      </button>
    </div>
  )
}
