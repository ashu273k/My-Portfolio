import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturesCards from './components/FeaturesCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturesCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
