import { CloudRain, Shield, Bug, Calendar, ArrowRight } from 'lucide-react'

const RESOURCES = [
  {
    icon: CloudRain,
    title: 'Monsoon Pest Tips',
    description: 'Prepare your crops for the kharif season. Learn which pests peak during monsoon and how to control them effectively.',
    color: 'text-sky-blue',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    tag: 'Seasonal Guide',
  },
  {
    icon: Shield,
    title: 'Safe Pesticide Usage',
    description: 'Best practices for handling, mixing, and applying pesticides safely — protecting you, your family, and the environment.',
    color: 'text-primary',
    bg: 'bg-green-50 dark:bg-green-900/20',
    tag: 'Safety',
  },
  {
    icon: Bug,
    title: 'Common Pest Identification',
    description: 'Visual guide to identifying the 20 most common crop pests in India — with recommended Safex treatment for each.',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
    tag: 'Field Guide',
  },
  {
    icon: Calendar,
    title: 'Seasonal Spray Schedule',
    description: 'Month-by-month spray calendar for major crops — right product, right time, right dose for maximum protection.',
    color: 'text-accent',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    tag: 'Planning',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-20 px-4 bg-beige dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Farmer Resources</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            Knowledge for Better Farming
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Free guides and tips from our agronomists to help you grow healthier crops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map(({ icon: Icon, title, description, color, bg, tag }) => (
            <div key={title}
              className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col">
              <div className={`${bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <Icon size={22} className={color} />
              </div>
              <span className={`text-xs font-bold ${color} uppercase tracking-wide mb-2`}>{tag}</span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{description}</p>
              <button className="mt-4 flex items-center gap-1 text-sm font-bold text-primary-dark dark:text-primary hover:gap-2 transition-all duration-200">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
