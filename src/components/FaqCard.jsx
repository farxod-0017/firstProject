import React from 'react'
import '../style/faq.css'

function FaqCard({title, text}) {
  return (
    <div className="faq_card">
        <div className="faq_title">
            <h4 id='title'>{title}</h4>
            <div className="symbol" id='symbol'></div>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default FaqCard