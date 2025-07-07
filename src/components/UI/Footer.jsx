import React from 'react'
import footerContact from '../../api/footerApi.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'



const Footer = () => {


  const footericon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };


  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols'>
        {
          footerContact.map((data, index) => {
            const { icon, title, details } = data
            return (
              <div className='footer-contact' key={index}>
                <div className='icon'>{footericon[icon]}</div>
                <div className='footer-contact-text'>
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            )
          })
        }



      </div>


      
    </footer>
  )
}

export default Footer
