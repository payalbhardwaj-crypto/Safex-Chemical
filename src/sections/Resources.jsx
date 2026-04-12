import { CloudRain, Shield, Bug, Calendar, ArrowRight } from 'lucide-react'

const RESOURCES = [
  {
    icon: CloudRain,
    title: 'Monsoon Pest Tips',
    description: 'Prepare your crops for the kharif season. Learn which pests peak during monsoon and how to control them effectively.',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    tag: 'Seasonal Guide',
    tagClass: 'bg-blue-500/10 text-blue-400',
    accent: 'border-blue-500/20',
  },
  {
    icon: Shield,
    title: 'Safe Pesticide Usage',
    description: 'Best practices for handling, mixing, and applying pesticides safely — protecting you, your family, and the environment.',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    tag: 'Safety',
    tagClass: 'bg-green-500/10 text-green-400',
    accent: 'border-green-500/20',
  },
  {
    icon: Bug,
    title: 'Common Pest Identification',
    description: 'Visual guide to identifying the 20 most common crop pests in India — with recommended Safex treatment for each.',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
    tag: 'Field Guide',
    tagClass: 'bg-red-500/10 text-red-400',
    accent: 'border-red-500/20',
  },
  {
    icon: Calendar,
    title: 'Seasonal Spray Schedule',
    description: 'Month-by-month spray calendar for major crops — right product, right time, right dose for maximum protection.',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    tag: 'Planning',
    tagClass: 'bg-orange-500/10 text-orange-400',
    accent: 'border-orange-500/20',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-20 px-4 bg-[#0E1310] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-3">Farmer Resources</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Knowledge for Better Farming
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Free guides and tips from our agronomists to help you grow healthier crops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESOURCES.map(({ icon: Icon, title, description, iconBg, iconColor, tag, tagClass, accent }) => (
            <div
              key={title}
              className={`bg-[#151A16] border ${accent} rounded-xl p-5 flex flex-col hover:-translate-y-1 hover:border-white/[0.15] transition-all duration-250`}
            >
              <div className={`${iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={18} className={iconColor} />
              </div>
              <span className={`inline-flex text-[11px] font-semibold px-2.5 py-1 rounded-md self-start mb-3 ${tagClass}`}>
                {tag}
              </span>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{description}</p>
              <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors">
                Read More <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
