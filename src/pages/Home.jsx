import React from 'react'
import Herosection from '../components/UI/Herosection'
import About from './About'

import Carousel from '../components/UI/Carousel'
import Conditional from '../components/Layout/Conditional'

 
const Home = () => {
  return (
   <>
   < Herosection />
   <Carousel />
   <Conditional />

   <About />
   </>
  )
}

export default Home
