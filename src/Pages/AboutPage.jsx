import React from 'react'
import HeroGlobal from '../components/HeroGlobal'

import aboutHero from '../images/aboutHero.svg'
import Banner from '../components/Banner'
import digital from '../images/digital.svg'
import arrAbout from '../images/arrAbout.svg'
import urban from '../images/urban.svg'
import arrLeft from '../images/arrLeft.svg'
import RoundsBanner from '../components/RoundsBanner'
import Faq from '../components/Faq'

function AboutPage() {
  return (
    <div>
      <HeroGlobal title="About" bgimg={aboutHero}/>
      <div className="bannerAboutA">
        <Banner title="Mobility for the digital era" text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." img={digital} arr={arrAbout} />
      </div>
      <div id='bannerAboutB' className="bannerHomeB">
        <Banner title="Better urban living" text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." img={urban} arr={arrLeft}/>
      </div>
      <RoundsBanner title="Our values"/>
      <Faq/>
    </div>
  )
}

export default AboutPage