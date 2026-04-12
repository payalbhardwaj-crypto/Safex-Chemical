import { Award, Headphones, Truck, Leaf, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Quality Certifications',
    description: 'All products are CIB&RC registered and meet the highest quality standards.',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
    border: 'border-yellow-500/15',
  },
  {
    icon: Headphones,
    title: 'Expert Agronomist Support',
    description: 'Our team of agronomists is available Mon–Fri to guide you on correct usage.',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/15',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'We deliver to all major agricultural districts across India — quickly and reliably.',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    border: 'border-orange-500/15',
  },
  {
    icon: Leaf,
    title: 'Safe & Sustainable',
    description: 'Formulated to protect crops without harming beneficial insects and soil health.',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    border: 'border-green-500/15',
  },
  {
    icon: Users,
    title: 'Trusted by 1000+ Farmers',
    description: 'Decades of proven results on rice, wheat, cotton, sugarcane, and vegetables.',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/15',
  },
]

export default function WhySafex() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0B0F0C] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-3">Why Safex</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Safex Advantage
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            More than just pesticides — we are partners in your farming success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {FEATURES.map(({ icon: Icon, title, description, iconBg, iconColor, border }) => (
            <div
              key={title}
              className={`bg-[#151A16] border ${border} rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-250`}
            >
              <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-green-600 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to protect your crops?</h3>
            <p className="text-green-100 text-sm mt-1">
              Call us free: <strong>1800 102 3959</strong> · Mon–Fri, 9AM–6PM
            </p>
          </div>
          <a
            href="tel:18001023959"
            className="bg-white text-green-700 font-bold px-7 py-3 rounded-lg text-sm hover:bg-green-50 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Call Now — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
