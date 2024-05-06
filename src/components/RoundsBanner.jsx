import React from 'react'
import '../style/roundsBanner.css'
import Round from './Round'

import roundA from '../images/roundA.svg'
import roundB from '../images/roundB.svg'
import roundC from '../images/roundC.svg'

function RoundsBanner({title}) {
  return (
    <section className='RoundsBanner'>
        <div className="container">
            <h1>{title}</h1>
            <div className="rounds_wrap">
                <Round img={roundA} number="01" title="Our tech" text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"/>
                <Round img={roundB} number="02" title="Our integrity" text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."/>
                <Round img={roundC} number="03" title="Our community" text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."/>
            </div>
        </div>
    </section>
  )
}

export default RoundsBanner