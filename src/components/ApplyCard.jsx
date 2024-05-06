import React from 'react'
import '../style/apply.css'

function ApplyCard({title, text}) {
  return (
    <div className='applyCard'>
        <div className="applyText">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <button>Apply</button>
    </div>
  )
}

export default ApplyCard