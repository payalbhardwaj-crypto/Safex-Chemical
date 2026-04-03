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
import AllProductsPage from './pages/AllProductsPage'
import CropSolutionsPage from './pages/CropSolutionsPage'
import FarmerResourcesPage from './pages/FarmerResourcesPage'

function HomePage({ onCartOpen }) {
  return (
    <div className="min-h-screen bg-beige dark:bg-dark-bg transition-colors duration-300">
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
            <Route path="/" element={<HomePage onCartOpen={() => setCartOpen(true)} />} />
            <Route path="/products" element={<AllProductsPage />} />
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
