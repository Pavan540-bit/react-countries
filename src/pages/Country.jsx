import React, { useEffect, useTransition } from 'react'
import { getAllCountries } from '../api/postApi';
import Loader from '../components/UI/Loader';
import Countrycard from '../components/Layout/Countrycard';


const Country = () => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = React.useState([])

  useEffect(
    () => {
      startTransition(async () => {
        const res = await getAllCountries();
        setCountries(res.data)
      })
    }, []);

  if (isPending) {
    return (
      <Loader />
    )
  }

  return (
    <section className='country-section'>
      <div className='container'>
        <ul className='grid grid-four-cols'>
          {
            countries.map((data,index) => {
              return <Countrycard country={data} key={index}/>
            })
          }
        </ul>
      </div>
    </section>
  )

}
export default Country
