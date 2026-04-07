import { Leaf, Phone, MapPin, Mail, Share2, Globe, Rss, X as XIcon } from 'lucide-react'

const PRODUCT_LINKS = ['Insecticides', 'Fungicides', 'Herbicides', 'Organic Products']
const QUICK_LINKS   = ['About Us', 'Farmer Resources', 'Crop Solutions', 'Contact Us', 'Dealer Locator']

export default function Footer() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#1A1A1A] text-white pt-14 pb-8 px-4 border-t border-corp-border">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-corp-green p-1.5 rounded-md">
                <Leaf size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide">
                SA<span className="text-corp-green-light">FEX</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              We are in the business of feeding the nation. Safex provides science-backed crop protection solutions trusted by Indian farmers since 1991.
            </p>
            <div className="flex gap-2.5 mt-5">
              {[Share2, Globe, Rss, XIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-white/15 hover:border-corp-green-light rounded-md flex items-center justify-center text-white/40 hover:text-corp-green-light transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-4">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map(item => (
                <li key={item}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); scrollTo('#products') }}
                    className="text-sm text-white/55 hover:text-corp-green-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/55 hover:text-corp-green-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <Phone size={15} className="text-corp-green-light flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">1800 102 3959</div>
                  <div className="text-xs text-white/40">Toll-Free · Mon–Fri, 9AM–6PM</div>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin size={15} className="text-corp-green-light flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/55 leading-relaxed">
                  4th &amp; 5th Floor, Block A, NDM-1,<br />
                  Netaji Subhash Place,<br />
                  New Delhi – 110034
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-corp-green-light flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/55">info@safexchemicals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Safex Chemicals Pvt. Ltd. All rights reserved. &nbsp;|&nbsp; CIN: U72411DL1991PLC042652
          </p>
          <p className="text-xs text-white/25 italic">
            "We are in the business of feeding the nation."
          </p>
        </div>
      </div>
    </footer>
  )
}
