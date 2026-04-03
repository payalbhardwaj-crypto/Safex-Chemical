import { Award, Headphones, Truck, Leaf, Users } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Quality Certifications',
    description: 'All products are CIB&RC registered and meet the highest quality standards.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    icon: Headphones,
    title: 'Expert Agronomist Support',
    description: 'Our team of agronomists is available Mon–Fri to guide you on correct usage.',
    color: 'text-sky-blue',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'We deliver to all major agricultural districts across India — quickly and reliably.',
    color: 'text-accent',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Leaf,
    title: 'Safe & Sustainable',
    description: 'Formulated to protect crops without harming beneficial insects and soil health.',
    color: 'text-primary',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Users,
    title: 'Trusted by 1000+ Farmers',
    description: 'Decades of proven results on rice, wheat, cotton, sugarcane, and vegetables.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
]

export default function WhySafex() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Why Safex</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            The Safex Advantage
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            More than just pesticides — we are partners in your farming success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="flex flex-col items-center text-center group">
              <div className={`${bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={28} className={color} />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 bg-primary-dark rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white">Ready to protect your crops?</h3>
            <p className="text-green-200 text-sm mt-1">Call us free: <strong>1800 102 3959</strong> · Mon–Fri, 9AM–6PM</p>
          </div>
          <a href="tel:18001023959"
            className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105 shadow-lg">
            Call Now — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
