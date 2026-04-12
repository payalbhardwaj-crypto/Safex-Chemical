import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Phone, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import logo from '../logo.png'
import { useInquiry } from '../context/InquiryContext'

const NAV_LINKS = [
  { label: 'Home',                   href: '/' },
  { label: 'About Us',               href: '/about' },
  { label: 'Our Businesses',         href: '/businesses' },
  { label: 'Products',               href: '/products', dropdown: [
    { label: 'Insecticides',       category: 'Insecticide' },
    { label: 'Fungicides',         category: 'Fungicide' },
    { label: 'Herbicides',         category: 'Herbicide' },
    { label: 'Organic Products',   category: 'Organic' },
    { label: 'All Products',       category: null },
  ]},
  { label: 'Innovation',             href: '/innovation' },
  { label: 'Professional Solutions', href: '/professional-solutions' },
  { label: 'Investor Relations',     href: '/investor-relations' },
  { label: 'Careers',               href: '/careers' },
]

export default function Navbar({ onCartOpen }) {
  const { cart }    = useInquiry()
  const navigate    = useNavigate()
  const location    = useLocation()
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled,     setScrolled]     = useState(false)

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => href === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(href)

  const handleLink = (href) => {
    setMobileOpen(false)
    setDropdownOpen(false)
    navigate(href)
    if (href === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── Style variants ────────────────────────────────────────
  // Always dark; homepage starts transparent until scrolled
  const solidNav = scrolled || !isHomePage

  const navBase = solidNav
    ? 'bg-white border-b border-gray-200 shadow-sm'
    : 'bg-transparent border-b border-transparent'

  const textNormal   = solidNav ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
  const textActive   = solidNav ? 'text-green-600 bg-green-50' : 'text-green-400 bg-white/[0.06]'
  const textHoverBg  = solidNav ? 'hover:bg-gray-100 hover:text-gray-900' : 'hover:bg-white/[0.05] hover:text-white'
  const phoneCls     = solidNav ? 'text-green-600 hover:text-green-700' : 'text-green-400 hover:text-green-300'
  const iconCls      = solidNav ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
  const dropdownBg   = 'bg-white border border-gray-200 shadow-lg'
  const dropdownItem = 'text-gray-600 hover:text-green-600 hover:bg-green-50'
  const mobileBg     = 'bg-white border-t border-gray-200'
  const mobileItem   = 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  const mobileActive = 'text-green-600 bg-green-50'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBase}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleLink('/')}
            className="flex items-center flex-shrink-0 gap-2 group"
          >
            <img src={logo} alt="Safex" className="h-10 w-auto" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map(link =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() => navigate('/products')}
                    className={`flex items-center gap-1 text-[13px] font-medium px-3 py-2 rounded-md transition-colors ${
                      isActive('/products')
                        ? textActive
                        : `${textNormal} ${textHoverBg}`
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className={`absolute top-full left-0 mt-1 w-52 rounded-lg overflow-hidden ${dropdownBg}`}>
                      {link.dropdown.map(item => (
                        <button
                          key={item.label}
                          onClick={() => {
                            setDropdownOpen(false)
                            navigate(item.category ? `/products?category=${item.category}` : '/products')
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${dropdownItem}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full opacity-60 bg-green-400" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.href)}
                  className={`text-[13px] font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(link.href)
                      ? textActive
                      : `${textNormal} ${textHoverBg}`
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-md transition-colors ${iconCls}`}
            >
              <ShoppingCart size={18} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-glow-green text-white text-[10px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={onCartOpen}
              className={`text-white text-xs font-semibold px-4 py-2 rounded-md transition-all ${
                'btn-glow'
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button onClick={onCartOpen} className={`relative p-2 rounded-md ${iconCls}`}>
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-glow-green text-white text-[10px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className={`p-2 rounded-md transition-colors ${iconCls}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`xl:hidden px-4 py-3 ${mobileBg}`}>
          <div className="flex flex-col gap-0.5">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => handleLink(link.dropdown ? '/products' : link.href)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.dropdown ? '/products' : link.href)
                    ? mobileActive
                    : mobileItem
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.07]">
            <a href="tel:18001023959" className={`flex items-center gap-1.5 text-sm font-semibold ${phoneCls}`}>
              <Phone size={14} /> 1800 102 3959
            </a>
            <button
              onClick={() => { setMobileOpen(false); onCartOpen() }}
              className="text-white text-sm font-semibold px-4 py-2 rounded-md btn-glow"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
