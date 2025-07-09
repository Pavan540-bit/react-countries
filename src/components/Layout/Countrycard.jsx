import React from 'react'


function Countrycard({ country }) {

    const { flags, name, population, region, capital,languages } = country

    return (
       
<>
            <li className='country-card card' key="index">

                <div className='container-card bg-white-box'>
                    <img src={flags.svg} alt={flags.alt} />

                    <div className='countryInfo'>
                        <p className='card-title'>{country.name.common}</p>
                        <p className='card-title text-2xl!'>Languages: {languages ? Object.values(languages).join(', ') : 'N/A'}</p>
                    </div>

                </div>

            </li>
</>
        
    )
}

export default Countrycard
