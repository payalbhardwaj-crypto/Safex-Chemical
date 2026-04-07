import { Star, Quote } from 'lucide-react'

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
        <Star
          key={i}
          size={13}
          className={i < count ? 'text-yellow-400 fill-yellow-400' : 'text-corp-border'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 section-gray border-t border-corp-border">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="section-label block mb-2">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-text">
            What Farmers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="corp-card p-6 flex flex-col">
              {/* Quote icon */}
              <Quote size={24} className="text-corp-green opacity-30 mb-3" />

              <Stars count={t.rating} />

              <p className="mt-4 text-corp-text-2 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-corp-border">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-corp-green-bg"
                />
                <div>
                  <div className="font-bold text-sm text-corp-text">{t.name}</div>
                  <div className="text-xs text-corp-text-2">{t.state} · {t.crop}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
