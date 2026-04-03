import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Ramesh Kumar',
    state: 'Punjab',
    crop: 'Wheat & Rice',
    quote: 'Hallabol ne meri fasal ko fungal bimari se bachaya. Pehle bahut nuksan hota tha — ab bilkul nahi. Safex pe bharosa hai.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
  },
  {
    name: 'Suresh Patil',
    state: 'Maharashtra',
    crop: 'Sugarcane & Cotton',
    quote: 'Girdle insecticide is a game-changer for my sugarcane. Stem borer infestation is down by 90%. My yield has increased significantly.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    rating: 5,
  },
  {
    name: 'Anand Sharma',
    state: 'Uttar Pradesh',
    crop: 'Vegetables',
    quote: 'Safex ke toll-free number pe expert ne seedha bata diya kaunsa product use karna hai. Bahut achhi service aur product bhi kamaal ka.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            What Farmers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name}
              className="bg-beige dark:bg-dark-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
              <Stars count={t.rating} />
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.state} · {t.crop}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
