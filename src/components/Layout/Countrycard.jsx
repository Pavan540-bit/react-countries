import React from 'react'


function Countrycard({ country }) {

    const { flags, name, population, region, capital } = country

    return (
       
<>
            <li className='country-card card' key="index">

                <div className='container-card bg-white-box'>
                    <img src={flags.svg} alt={flags.alt} />

                    <div className='countryInfo'>
                        <p className='card-title'>{country.name.common}</p>
                    </div>

                </div>

            </li>
</>
        
    )
}

export default Countrycard
