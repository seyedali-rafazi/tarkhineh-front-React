import React from 'react'
import AboutLayout from '../components/about/AboutLayout'
import Footer from '../ui/Footer'

function About() {
  return (
    <div className="container xl:max-w-[1640px] min-h-screen max-w-full">
      <AboutLayout />
      <Footer />
    </div>
  );
}

export default About