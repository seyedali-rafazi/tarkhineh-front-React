import React from 'react'
import Navbar from '../ui/Navbar'
import AboutLayout from '../components/about/AboutLayout'
import Footer from '../ui/Footer'

function About() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <Navbar />
      <AboutLayout />
      <Footer />
    </div>  )
}

export default About