import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Leaf, Phone, ShoppingCart, Menu, X, Sun, Moon, Search, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useInquiry } from '../context/InquiryContext'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '/products', dropdown: [
    { label: 'Insecticides', category: 'Insecticide' },
    { label: 'Fungicides', category: 'Fungicide' },
    { label: 'Herbicides', category: 'Herbicide' },
    { label: 'Organic Products', category: 'Organic' },
    { label: 'All Products', category: null },
  ]},
  { label: 'Crop Solutions', href: '/crops' },
  { label: 'Farmer Resources', href: '/resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onCartOpen }) {
  const { theme, toggleTheme } = useTheme()
  const { cart } = useInquiry()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-dark-bg/95 shadow-lg backdrop-blur-md py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
          <div className="bg-primary-dark text-white p-1.5 rounded-lg group-hover:bg-primary transition-colors">
            <Leaf size={20} />
          </div>
          <span className={`text-xl font-black tracking-wide ${scrolled ? 'text-primary-dark dark:text-primary' : 'text-white'}`}>
            SAFEX
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            link.dropdown ? (
              <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button
                  onClick={() => navigate('/products')}
                  className={`flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
                >
                  {link.label} <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white dark:bg-dark-card rounded-xl shadow-2xl border border-gray-100 dark:border-dark-border overflow-hidden">
                    {link.dropdown.map(item => (
                      <button
                        key={item.label}
                        onClick={() => { setDropdownOpen(false); navigate(item.category ? `/products?category=${item.category}` : '/products') }}
                        className="w-full text-left block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-beige dark:hover:bg-dark-border hover:text-primary-dark font-medium transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => link.href.startsWith('/') ? navigate(link.href) : handleNavClick(link.href)}
                className={`text-sm font-semibold hover:text-primary transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
              >
                {link.label}
              </button>
            )
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-full px-3 py-1.5 gap-2">
                <Search size={14} className="text-gray-400" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="text-sm bg-transparent outline-none w-40 text-gray-700 dark:text-gray-200"
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery('') }}><X size={14} className="text-gray-400" /></button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-full hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}>
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Toll-free */}
          <a href="tel:18001023959" className={`flex items-center gap-1.5 text-sm font-semibold ${scrolled ? 'text-primary-dark dark:text-primary' : 'text-white'}`}>
            <Phone size={15} /> 1800 102 3959
          </a>

          {/* Cart */}
          <button onClick={onCartOpen} className="relative p-2 rounded-full hover:bg-white/20 transition-colors">
            <ShoppingCart size={20} className={scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* Dark/Light toggle */}
          <button onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-white/20 transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Get Quote CTA */}
          <button onClick={onCartOpen}
            className="bg-accent hover:bg-orange-600 text-white font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
            Get Quote
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={onCartOpen} className="relative p-2">
            <ShoppingCart size={22} className={scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(v => !v)} className={scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.label}
              onClick={() => {
                setMobileOpen(false)
                if (link.href.startsWith('/')) {
                  navigate(link.href)
                } else {
                  handleNavClick(link.href)
                }
              }}
              className="w-full text-left block py-3 px-4 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-beige dark:hover:bg-dark-card rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100 dark:border-dark-border">
            <a href="tel:18001023959" className="flex items-center gap-1.5 text-sm font-semibold text-primary-dark dark:text-primary">
              <Phone size={15} /> 1800 102 3959
            </a>
            <button onClick={toggleTheme} className="ml-auto p-2 rounded-full bg-beige dark:bg-dark-card text-gray-700 dark:text-gray-200">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <button onClick={() => { setMobileOpen(false); onCartOpen() }}
            className="mt-2 bg-accent text-white font-bold py-3 rounded-xl text-base w-full">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  )
}
