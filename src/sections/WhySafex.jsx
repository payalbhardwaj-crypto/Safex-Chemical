import { Award, Headphones, Truck, Leaf, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Quality Certifications',
    description: 'All products are CIB&RC registered and meet the highest quality standards.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Headphones,
    title: 'Expert Agronomist Support',
    description: 'Our team of agronomists is available Mon–Fri to guide you on correct usage.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'We deliver to all major agricultural districts across India — quickly and reliably.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Leaf,
    title: 'Safe & Sustainable',
    description: 'Formulated to protect crops without harming beneficial insects and soil health.',
    iconBg: 'bg-corp-green-bg',
    iconColor: 'text-corp-green',
  },
  {
    icon: Users,
    title: 'Trusted by 1000+ Farmers',
    description: 'Decades of proven results on rice, wheat, cotton, sugarcane, and vegetables.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
]

export default function WhySafex() {
  return (
    <section id="about" className="py-20 px-4 section-green border-t border-corp-border">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-2">Why Safex</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-text">
            The Safex Advantage
          </h2>
          <p className="mt-3 text-corp-text-2 max-w-xl mx-auto text-sm md:text-base">
            More than just pesticides — we are partners in your farming success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {FEATURES.map(({ icon: Icon, title, description, iconBg, iconColor }) => (
            <div
              key={title}
              className="corp-card p-6 flex flex-col items-center text-center"
            >
              <div className={`${iconBg} w-12 h-12 rounded-md flex items-center justify-center mb-4`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h3 className="text-sm font-bold text-corp-text mb-2">{title}</h3>
              <p className="text-xs text-corp-text-2 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-corp-green rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to protect your crops?</h3>
            <p className="text-white/75 text-sm mt-1">
              Call us free: <strong>1800 102 3959</strong> · Mon–Fri, 9AM–6PM
            </p>
          </div>
          <a
            href="tel:18001023959"
            className="bg-white text-corp-green font-bold px-7 py-3 rounded-md text-sm hover:bg-corp-green-bg transition-colors whitespace-nowrap flex-shrink-0"
          >
            Call Now — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
