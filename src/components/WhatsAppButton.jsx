import { useState } from 'react'
import { X, Send } from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat bubble */}
      {open && (
        <div className="bg-white rounded-xl shadow-modal w-72 overflow-hidden border border-corp-border">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-base">🌿</div>
              <div>
                <div className="text-white font-semibold text-sm">Safex Support</div>
                <div className="text-white/70 text-xs">Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={15} />
            </button>
          </div>

          {/* Message */}
          <div className="bg-corp-surface px-4 py-4">
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-card max-w-[90%] border border-corp-border">
              <p className="text-sm text-corp-text leading-relaxed">
                👋 Hi! Welcome to <strong>Safex Chemicals</strong>.<br /><br />
                I'm interested in your products. How can you help me with crop protection?
              </p>
              <span className="text-xs text-corp-text-2 mt-1 block text-right">Just now</span>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 py-3 border-t border-corp-border">
            <a
              href="https://wa.me/911800102395"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-2.5 rounded-md text-sm transition-colors w-full"
            >
              <Send size={13} />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(v => !v)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white transition-all duration-200 hover:scale-105 flex items-center justify-center shadow-card-hover"
        style={{ boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={22} /> : <span className="text-2xl">💬</span>}
      </button>
    </div>
  )
}
