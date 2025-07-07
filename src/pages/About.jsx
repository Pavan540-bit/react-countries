import React, { useEffect } from 'react'
import CountryFact2s from '../api/CountryData.json'



const About = () => {

  return (
    <section className='about-section'>
      <div className='container'>
      <h2 className='container-title wow animate__animated animate__fadeInUp' data-wow-delay="3.5s"
            data-wow-duration="3.5s"  >Here are the Interesting Facts <br /> we're proud of</h2>

      <div className='gradient-cards'>

{
  CountryFact2s.map((country)=>{
    const {id,countryName, capital, population, interestingFact} = country
    // const {id} = country
return(
    <div className='card' key={country.id}>

          <div className='container-card bg-blue-box'>

            <p className='card-title'>{countryName}</p>
            <p className='card-description'>Capital:<span>{capital}</span></p>
            <p className='card-description'>Population:<span>{population}</span></p>
            <p className='card-description'>Interesting Facts:<span>{interestingFact}</span></p>
          </div>

        </div>
)
  })
}

    
      </div>
</div>
    </section>
  )
}

export default About
