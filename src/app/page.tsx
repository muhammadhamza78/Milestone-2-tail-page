import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default page
