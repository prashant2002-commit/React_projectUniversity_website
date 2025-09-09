import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for better world</h1>
            <p>Our cutting-edge is designed to impower students with the knowledge,
                skills, and experiences they need to thrive in a rapidly changing world.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero