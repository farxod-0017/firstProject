import React from 'react'
import Hero from '../components/Hero'
import DeliverySteps from '../components/DeliverySteps'
import Banner from '../components/Banner'
import '../style/banner.css'

import bnr1 from '../images/bnr1.svg'
import arrowBnr from '../images/arrowBnr.svg'
import city from '../images/city.svg'
import arrLeft from '../images/arrLeft.svg'
import zero from '../images/zero.svg'

function HomePage() {
  return (
    <div>
      <Hero/>
      <DeliverySteps/>
      <Banner title="Easy to use riding telemetry" text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app." img={bnr1} arr={arrowBnr}/>
      <div className='bannerHomeB'>
        <Banner title="Coming to a city near you" text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." img={city} arr={arrLeft} />
      </div>
      <div className="bannerHomeA">
        <Banner title="Zero hassle payments" text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month." img={zero} arr={arrowBnr}/>
      </div>
    </div>
  )
}

export default HomePage