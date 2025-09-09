import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/programs/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VedioPlayer from './components/videoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our program' title='What we offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Students says'/>
        <Testimonials/>
        <Title subtitle='Contact us' title='Get in touch'/>
        <Contact apiKey={apiKey}/>
        <Footer/>
      </div>
      <VedioPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App