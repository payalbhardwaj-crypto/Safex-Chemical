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

// Existing pages
import AllProductsPage from './pages/AllProductsPage'
import CropSolutionsPage from './pages/CropSolutionsPage'
import FarmerResourcesPage from './pages/FarmerResourcesPage'

// New pages
import AboutPage from './pages/AboutPage'
import BusinessesPage from './pages/BusinessesPage'
import InnovationPage from './pages/InnovationPage'
import ProfessionalSolutionsPage from './pages/ProfessionalSolutionsPage'
import InvestorRelationsPage from './pages/InvestorRelationsPage'
import CareersPage from './pages/CareersPage'

function HomePage({ onCartOpen }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={onCartOpen} />
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
            {/* Home */}
            <Route path="/" element={<HomePage onCartOpen={() => setCartOpen(true)} />} />

            {/* Navbar pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/professional-solutions" element={<ProfessionalSolutionsPage />} />
            <Route path="/investor-relations" element={<InvestorRelationsPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Legacy routes kept intact */}
            <Route path="/crops" element={<CropSolutionsPage />} />
            <Route path="/resources" element={<FarmerResourcesPage />} />
          </Routes>
          <InquiryModal open={cartOpen} onClose={() => setCartOpen(false)} />
          <WhatsAppButton />
        </InquiryProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
