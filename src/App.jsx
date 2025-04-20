import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
const Hero = lazy(() => import('./sections/Hero'))
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'))
const LogoSection = lazy(() => import('./components/LogoSection'))
const FeaturesCards = lazy(() => import('./components/FeaturesCards'))
const Experience = lazy(() => import('./sections/Experience'))
const TechStack = lazy(() => import('./sections/TechStack'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/showcase" element={<ShowcaseSection />} />
          <Route path="/logos" element={<LogoSection />} />
          <Route path="/features" element={<FeaturesCards />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
