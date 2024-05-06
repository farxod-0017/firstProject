import React from 'react'
import HeroGlobal from '../components/HeroGlobal'

import heroCareers from '../images/heroCareers.svg'
import Banner from '../components/Banner'
import bannerCareersA from '../images/bannerCareersA.svg'
import arrowBnr from '../images/arrowBnr.svg'
import RoundsBanner from '../components/RoundsBanner'
import Apply from '../components/Apply'

function CareersPage() {
  return (
    <div>
      <HeroGlobal title="Careers" bgimg={heroCareers}/>
      <Banner title="Care to join our mission?" text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!" img={bannerCareersA} arr={arrowBnr}/>
      <RoundsBanner title="Why join us?"/>
      <Apply/>
    </div>
  )
}

export default CareersPage