import React from 'react'
import '../style/faq.css'
import FaqCard from './FaqCard'


function FaqTable() {

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
        <h2>How it works</h2>
        <div className="faq_grid" onClick={(e)=>Accordion(e)}>
            <FaqCard title="How do I download the app?" text="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."/>
            <FaqCard title="Can I find a nearby Scoots?" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus amet sapiente dolorem ratione ipsum suscipit omnis accusantium dolorum repellendus."/>
            <FaqCard title="Do I need a license to ride?" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae possimus amet sapiente dolorem ratione ipsum suscipit omnis accusantium dolorum repellendus."/>
        </div>
    </div>
  )
}

export default FaqTable