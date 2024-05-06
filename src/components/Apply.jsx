import React from 'react'
import '../style/apply.css'
import ApplyCard from './ApplyCard'

function Apply() {
  return (
    <section className='apply'>
        <div className="container">
            <ApplyCard title="General Manager" text="Jakarta, Indonesia"/>
            <ApplyCard title="UI/UX Designer" text="Yokohama, Japan"/>
            <ApplyCard title="Blog Content Copywriter" text="New York, United States"/>
            <ApplyCard title="Graphic Designer" text="New York, United States"/>
            <ApplyCard title="Fleet Supervisor" text="Jakarta, Indonesia"/>
            <ApplyCard title="UX Analyst" text="UX Analyst"/>
        </div> 
    </section>
  )
}

export default Apply