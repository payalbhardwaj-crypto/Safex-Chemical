import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Leaf, Phone, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

const NAV_LINKS = [
  { label: 'Home',                  href: '/' },
  { label: 'About Us',              href: '/about' },
  { label: 'Our Businesses',        href: '/businesses' },
  { label: 'Products',              href: '/products', dropdown: [
    { label: 'Insecticides',      category: 'Insecticide' },
    { label: 'Fungicides',        category: 'Fungicide' },
    { label: 'Herbicides',        category: 'Herbicide' },
    { label: 'Organic Products',  category: 'Organic' },
    { label: 'All Products',      category: null },
  ]},
  { label: 'Innovation',            href: '/innovation' },
  { label: 'Professional Solutions',href: '/professional-solutions' },
  { label: 'Investor Relations',    href: '/investor-relations' },
  { label: 'Careers',              href: '/careers' },
]

export default function Navbar({ onCartOpen }) {
  const { cart } = useInquiry()
  const navigate  = useNavigate()
  const location  = useLocation()
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled,     setScrolled]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location])

  const isActive = (href) => href === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(href)

  const handleLink = (href) => {
    setMobileOpen(false)
    setDropdownOpen(false)
    if (href === '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-nav border-b border-corp-border'
          : 'bg-white/95 backdrop-blur-sm border-b border-corp-border/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleLink('/')}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <div className="bg-corp-green p-1.5 rounded-md group-hover:bg-corp-green-dark transition-colors">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-corp-text tracking-wide">
              SA<span className="text-corp-green">FEX</span>
            </span>
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
                        ? 'text-corp-green bg-corp-green-bg'
                        : 'text-corp-text-2 hover:text-corp-green hover:bg-corp-surface'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg border border-corp-border shadow-card-hover overflow-hidden">
                      {link.dropdown.map(item => (
                        <button
                          key={item.label}
                          onClick={() => {
                            setDropdownOpen(false)
                            navigate(item.category ? `/products?category=${item.category}` : '/products')
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm text-corp-text-2 hover:text-corp-green hover:bg-corp-green-bg transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-corp-green opacity-60" />
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
                      ? 'text-corp-green bg-corp-green-bg'
                      : 'text-corp-text-2 hover:text-corp-green hover:bg-corp-surface'
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:18001023959"
              className="flex items-center gap-1.5 text-xs font-semibold text-corp-green hover:text-corp-green-dark transition-colors"
            >
              <Phone size={13} />
              1800 102 3959
            </a>

            <button
              onClick={onCartOpen}
              className="relative p-2 text-corp-text-2 hover:text-corp-green hover:bg-corp-surface rounded-md transition-colors"
            >
              <ShoppingCart size={18} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-corp-green text-white text-[10px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={onCartOpen}
              className="btn-primary text-white text-xs font-semibold px-4 py-2 rounded-md"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile controls */}
          <div className="xl:hidden flex items-center gap-2">
            <button onClick={onCartOpen} className="relative p-2 text-corp-text-2">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-corp-green text-white text-[10px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 text-corp-text-2 hover:text-corp-green transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-corp-border px-4 py-3">
          <div className="flex flex-col gap-0.5">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => handleLink(link.dropdown ? '/products' : link.href)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.dropdown ? '/products' : link.href)
                    ? 'text-corp-green bg-corp-green-bg'
                    : 'text-corp-text-2 hover:text-corp-green hover:bg-corp-surface'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-corp-border flex items-center justify-between">
            <a href="tel:18001023959" className="flex items-center gap-1.5 text-sm font-semibold text-corp-green">
              <Phone size={14} /> 1800 102 3959
            </a>
            <button
              onClick={() => { setMobileOpen(false); onCartOpen() }}
              className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-md"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
