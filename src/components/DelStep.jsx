import React from 'react'
import '../style/deliverySteps.css'

function DelStep({img, title, text}) {
  return (
    <div className='delStep'>
        <img src={img} alt="" />
        <div className="step_text">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default DelStep