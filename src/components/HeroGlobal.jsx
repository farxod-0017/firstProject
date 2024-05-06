import React from 'react'
import '../style/heroGlobal.css'

import rounds from '../images/rounds.svg'

function HeroGlobal({title, bgimg}) {
  return (
    <section className='heroGlobal' style={{backgroundImage:`url(${bgimg})`}}>
        <div className="overlay"></div>
        <div className="container">
            <h1>{title}</h1>
            <img src={rounds} alt="" />
        </div>
    </section>
  )
}

export default HeroGlobal