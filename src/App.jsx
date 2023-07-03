// import React from 'react'

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import  Features  from "./components/Features"
import PurpleBanner from "./components/PurpleBanner"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="bg-hero w-full" >
        <Hero />  
      </main>
      <div className="content px-8 max-w-screen-2xl m-auto">
      <Features />
      <PurpleBanner />
      <Testimonials />
      
      </div>
      <div className="bg-hero max-w-screen-2xl m-auto">
      <Footer />
      </div>
      
    </div>
  )
}

export default App
