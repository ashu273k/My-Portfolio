import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeaturesCards from './components/FeaturesCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'

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
    </>
  )
}

export default App
