import { Leaf, Phone, MapPin, Mail, Share2, Globe, Rss, X as XIcon } from 'lucide-react'

const PRODUCT_LINKS = ['Insecticides', 'Fungicides', 'Herbicides', 'Organic Products']
const QUICK_LINKS = ['About Us', 'Farmer Resources', 'Crop Solutions', 'Contact Us', 'Dealer Locator']

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-dark p-1.5 rounded-lg"><Leaf size={18} className="text-white" /></div>
              <span className="text-xl font-black tracking-wide">SAFEX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are in the business of feeding the nation. Safex provides science-backed crop protection solutions trusted by Indian farmers since 1991.
            </p>
            <div className="flex gap-3 mt-5">
              {[Share2, Globe, Rss, XIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-dark rounded-full flex items-center justify-center transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map(item => (
                <li key={item}>
                  <a href="#products" onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                    className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">1800 102 3959</div>
                  <div className="text-xs text-gray-500">Toll-Free · Mon–Fri, 9AM–6PM</div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400 leading-relaxed">
                  4th &amp; 5th Floor, Block A, NDM-1,<br />
                  Netaji Subhash Place,<br />
                  New Delhi – 110034
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">info@safexchemicals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Safex Chemicals Pvt. Ltd. All rights reserved. &nbsp;|&nbsp; CIN: U72411DL1991PLC042652
          </p>
          <p className="text-xs text-gray-600">
            "We are in the business of feeding the nation."
          </p>
        </div>
      </div>
    </footer>
  )
}
