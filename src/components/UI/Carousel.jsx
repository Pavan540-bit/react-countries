import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountryFact2s from '../../api/CountryData.json';

function Carousel() {
  return (
    <section className='carousle-section'>
      <div className='container'>
        <h2
          className='container-title wow animate__animated animate__fadeInUp mb-5'
          data-wow-delay='3.5s'
          data-wow-duration='3.5s'
        >
          Explore the world, One Country at a Time.
        </h2>

        <OwlCarousel
          className='owl-theme'
          loop
          margin={10}
          dots={false}
          nav={false}
          autoplay
          autoplayTimeout={2000}
          smartSpeed={250}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            768: { items: 3 },
            1000: { items: 4 },
            1200: { items: 5 },
          }}
        >
          {CountryFact2s.map((country, index) => {
            const { flags, countryName,population,capital } = country;

            return (
              <div className='item' key={country.id}>
                <div className='container-card bg-blue-box text-center p-3'>
                    <p className='card-description'>Capital:<span>{capital}</span></p>
            <p className='card-description'>Population:<span>{population}</span></p>
                  <h5 className='text-white'>{countryName}</h5>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Carousel;
