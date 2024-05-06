import React from 'react'
import '../style/deliverySteps.css'
import DelStep from './DelStep'

import appStep from '../images/appStep.svg'
import pickStep from '../images/pickStep.svg'
import enjoyStep from '../images/enjoyStep.svg'

function DeliverySteps() {
  return (
    <section className='delivery'>
        <div className="container">
            <div className="delivery_wrapper">
                <div className="countre"></div>
                <DelStep img={appStep} title="Locate with app" text="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "/>
                <DelStep img={pickStep} title="Pick your scooter" text="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."/>
                <DelStep img={enjoyStep} title="Enjoy the ride" text="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."/>
            </div>
        </div>
    </section>
  )
}

export default DeliverySteps