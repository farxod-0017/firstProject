import React from 'react'
import FaqCard from './FaqCard'

function FaqTableB() {
  function Accordion(e) {
    if(e.target.id === "title") {
      let nextElem = e.target.nextElementSibling 
      let taken_elem = e.target.parentElement.nextElementSibling 
      nextElem.classList.toggle("replace_symbol")
      taken_elem.classList.toggle("remove_text")
    }else if(e.target.id === "symbol") {
      let taken_elem = e.target.parentElement.nextElementSibling 
      taken_elem.classList.toggle("remove_text")
      e.target.classList.toggle("replace_symbol")
    }
  }
  return (
    <div className='faq_wrap'>
        <h2>Safe driving</h2>
        <div className="faq_grid" onClick={(e)=>Accordion(e)}>
            <FaqCard title="Should I wear a helmet?" text="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."/>
            <FaqCard title="How about the rules & regulations?" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus amet sapiente dolorem ratione ipsum suscipit omnis accusantium dolorum repellendus."/>
            <FaqCard title="What if I damage my Scoot?" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus amet sapiente dolorem ratione ipsum suscipit omnis accusantium dolorum repellendus."/>
        </div>
    </div>
  )
}

export default FaqTableB