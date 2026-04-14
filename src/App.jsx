import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InquiryProvider } from './context/InquiryContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Products from './sections/Products'
import CropSolutions from './sections/CropSolutions'
import WhySafex from './sections/WhySafex'
import Resources from './sections/Resources'
import Testimonials from './sections/Testimonials'
import InquiryModal from './sections/InquiryModal'

// Pages
import AllProductsPage from './pages/AllProductsPage'
import CropSolutionsPage from './pages/CropSolutionsPage'
import FarmerResourcesPage from './pages/FarmerResourcesPage'
import AboutPage from './pages/AboutPage'
import BusinessesPage from './pages/BusinessesPage'
import InnovationPage from './pages/InnovationPage'
import ProfessionalSolutionsPage from './pages/ProfessionalSolutionsPage'
import InvestorRelationsPage from './pages/InvestorRelationsPage'
import CareersPage from './pages/CareersPage'
import ProductDetailPage from './pages/ProductDetailPage'

function HomePage({ onCartOpen }) {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: 'linear-gradient(160deg, #060e07 0%, #07120a 50%, #060e07 100%)' }}
    >
      {/* Global ambient glow — top */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[520px] z-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,197,94,0.11) 0%, transparent 70%)' }}
      />
      {/* Global ambient glow — bottom */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 h-[400px] z-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 110%, rgba(34,197,94,0.08) 0%, transparent 65%)' }}
      />

      <Navbar onCartOpen={onCartOpen} dark />
      <Hero />
      <Products />
      <CropSolutions />
      <WhySafex />
      <Resources />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <ThemeProvider>
        <InquiryProvider>
          <Routes>
            <Route path="/"                      element={<HomePage onCartOpen={() => setCartOpen(true)} />} />
            <Route path="/about"                 element={<AboutPage />} />
            <Route path="/businesses"            element={<BusinessesPage />} />
            <Route path="/products"              element={<AllProductsPage />} />
            <Route path="/innovation"            element={<InnovationPage />} />
            <Route path="/professional-solutions"element={<ProfessionalSolutionsPage />} />
            <Route path="/investor-relations"    element={<InvestorRelationsPage />} />
            <Route path="/careers"               element={<CareersPage />} />
            <Route path="/products/:id"           element={<ProductDetailPage />} />
            <Route path="/crops"                 element={<CropSolutionsPage />} />
            <Route path="/resources"             element={<FarmerResourcesPage />} />
          </Routes>
          <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
          <WhatsAppButton />
        </InquiryProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
