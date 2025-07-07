import React, { use, useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink as Navlink } from 'react-router-dom'

const Herosection = () => {

  

  return (
    <main className='hero-main-section'>
      <div className='container grid grid-two-cols'>
        <div className='hero-content'>
          <h1 className='heading-xl wow animate__animated animate__fadeInUp' data-wow-delay="3.5s"
            data-wow-duration="3.5s"     >
            Explore the world, One Country at a Time.
          </h1>
          <p className='paragraph'>
            Discover the history, culture, and beauty of every nation.search,sort filter through countries to find the details you need.
          </p>
          <button onClick={() => {

          }} className='btn btn-darken btn-inline bg-white-box'>

            <Navlink to="/country" className='flex text-white no-underline'>
              Start Exploring <FaLongArrowAltRight />
            </Navlink>
          </button>
        </div>
        <div className='hero-image'>
          <img src="/images/world.png" alt="world" className='banner-image img-fluid' />
        </div>
      </div>


    </main>

  )
}

export default Herosection
