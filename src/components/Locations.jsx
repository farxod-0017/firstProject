import React from 'react'
import '../style/locations.css'

import map from '../images/map.svg'
import mapMobile from '../images/mapMobile.svg'

function Locations() {
  return (
    <section className='locations'>
        <div className="container">
            <img className='map' src={map} alt="" />
            <img className='mapMobile' src={mapMobile} alt="" />

            <div className="city"><h3>New York</h3></div>
            <div className="city"><h3>London</h3></div>
            <div className="city"><h3>Jakarta</h3></div>
            <div className="city"><h3>Yokohama</h3></div>

            <div className="loc_wrap">
                <h4>Your City Not Listed?</h4>
                <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <button>Message Us</button>
            </div>
        </div>
    </section>
  )
}

export default Locations