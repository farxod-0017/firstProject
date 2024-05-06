import React from 'react'
import '../style/faq.css'
import FaqTable from './FaqTable'
import FaqTableB from './FaqTableB'

function Faq() {
  return (
    <section className='faq'>
        <div className="container">
            <h1>FAQs</h1>
            <FaqTable/>
            <FaqTableB/>
        </div>
    </section>
  )
}

export default Faq