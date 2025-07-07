import React from 'react'
import { NavLink as Navlink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='container header-container'>

                <div className='grid navbar-grid'>
                    <div className='logo'>
                        <Navlink to="/" className='text-white no-underline'>
                            <img src="/public/images/globe.svg" alt="globe" className='img-fluid logo-img' />
                        </Navlink>

                    </div>


                           <nav>
                    <ul>
                        <li >
                            <Navlink to="/" className='text-white'>Home</Navlink>
                        </li>
                        <li>   <Navlink to="/about" className='text-white'>About</Navlink></li>
                        <li>   <Navlink to="/country" className='text-white'>Country</Navlink></li>
                        <li>   <Navlink to="/contact" className='text-white'>Contact</Navlink></li>
                    </ul>
                </nav>
                </div>

         
            </div>
        </header>

    )
}

export default Header
