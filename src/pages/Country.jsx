import React, { useEffect, useTransition, useState } from 'react';
import { getAllCountries } from '../api/postApi';
import Loader from '../components/UI/Loader';
import Countrycard from '../components/Layout/Countrycard';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    startTransition(async () => {
      const res = await getAllCountries();
      setCountries(res.data);
    });
  }, []);

  // Filtered list based on search input
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isPending) return <Loader />;

  return (
    <section className='country-section'>
      <div className='container'>
        <input
          type='text'
          placeholder='Search for a country...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />

        <ul className='grid grid-four-cols'>
          {filteredCountries.map((data, index) => (
            <Countrycard country={data} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Country;
