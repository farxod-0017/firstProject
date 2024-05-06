import React from 'react'
import '../style/hero.css'

import hero from '../images/hero.svg'
import line from '../images/line.svg'
import arrow from '../images/arrow.svg'
import rounds from '../images/rounds.svg'

function Hero() {
  return (
    <section className='hero' style={{backgroundImage:`url(${hero})`}}>
        <img className='lineYellow' src={line} alt="" />
        <img className='arrowYellow' src={arrow} alt="" />
        <img className='rounds' src={rounds} alt="" />
        <div className="overlay"></div>
        <div className="container">
            <h1>Scooter sharing made simple</h1>
            <div className="hero_card">
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <button>Get Scootin</button>
            </div>
        </div>
    </section>
  )
}

export default Hero