import React from 'react'
import '../style/banner.css'

import roundSilver from '../images/roundSilver.svg'

function Banner({title, text, img, arr}) {
  return (
    <section className='banner'>
        <img className='roundSilver' src={roundSilver} alt="" />
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <button>Learn More</button>
                </div>
                <div className="bnrR">
                    <img src={img} alt="" />
                    <img id='arrB' src={arr} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner