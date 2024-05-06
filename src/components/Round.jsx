import React from 'react'
import '../style/roundsBanner.css'


function Round({img, number, title, text}) {
  return (
    <div className='roundCard'>
        <div className="roundImg">
            <img src={img} alt="" />
            <div className="round_number"><h5>{number}</h5></div>
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Round