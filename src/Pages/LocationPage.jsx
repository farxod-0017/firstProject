import React from 'react'
import HeroGlobal from '../components/HeroGlobal'

import heroCareers from '../images/heroCareers.svg'
import Locations from '../components/Locations'

function LocationPage() {
  return (
    <div>
      <HeroGlobal title="Locations" bgimg={heroCareers}/>
      <Locations/>
    </div>
  )
}

export default LocationPage