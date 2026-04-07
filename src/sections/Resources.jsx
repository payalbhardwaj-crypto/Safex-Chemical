import { CloudRain, Shield, Bug, Calendar, ArrowRight } from 'lucide-react'

const RESOURCES = [
  {
    icon: CloudRain,
    title: 'Monsoon Pest Tips',
    description: 'Prepare your crops for the kharif season. Learn which pests peak during monsoon and how to control them effectively.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tag: 'Seasonal Guide',
    tagClass: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Shield,
    title: 'Safe Pesticide Usage',
    description: 'Best practices for handling, mixing, and applying pesticides safely — protecting you, your family, and the environment.',
    iconBg: 'bg-corp-green-bg',
    iconColor: 'text-corp-green',
    tag: 'Safety',
    tagClass: 'bg-corp-green-bg text-corp-green',
  },
  {
    icon: Bug,
    title: 'Common Pest Identification',
    description: 'Visual guide to identifying the 20 most common crop pests in India — with recommended Safex treatment for each.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    tag: 'Field Guide',
    tagClass: 'bg-red-50 text-red-700',
  },
  {
    icon: Calendar,
    title: 'Seasonal Spray Schedule',
    description: 'Month-by-month spray calendar for major crops — right product, right time, right dose for maximum protection.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    tag: 'Planning',
    tagClass: 'bg-orange-50 text-orange-700',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-20 px-4 section-light border-t border-corp-border">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-2">Farmer Resources</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-text">
            Knowledge for Better Farming
          </h2>
          <p className="mt-3 text-corp-text-2 max-w-xl mx-auto text-sm md:text-base">
            Free guides and tips from our agronomists to help you grow healthier crops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESOURCES.map(({ icon: Icon, title, description, iconBg, iconColor, tag, tagClass }) => (
            <div key={title} className="corp-card p-5 flex flex-col">
              <div className={`${iconBg} w-10 h-10 rounded-md flex items-center justify-center mb-4`}>
                <Icon size={18} className={iconColor} />
              </div>
              <span className={`corp-tag ${tagClass} mb-3 self-start`}>{tag}</span>
              <h3 className="text-sm font-bold text-corp-text mb-2">{title}</h3>
              <p className="text-xs text-corp-text-2 leading-relaxed flex-1">{description}</p>
              <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-corp-green hover:text-corp-green-dark transition-colors">
                Read More <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
