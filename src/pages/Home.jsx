import React from 'react'
import Herosection from '../components/UI/Herosection'
import About from './About'

import Carousel from '../components/UI/Carousel'
import Conditional from '../components/Layout/Conditional'
import GitHubUserSearch from '../components/Layout/GitHubUserSearch'
 
const Home = () => {
  return (
   <>
   < Herosection />
   <Carousel />
   <Conditional />
   <GitHubUserSearch />
   <About />
   </>
  )
}

export default Home
