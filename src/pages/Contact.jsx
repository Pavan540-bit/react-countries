import React from 'react'

const Contact = () => {


const handleFormSubmit = (formData) => {
   
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <section className='section-contact'>
      <div className='container'>

        <h2 className='container-title'>Contact Us</h2>

        <div className='contact-wrapper'>
          <form action={
            handleFormSubmit
          } >

            <input type="text" className='form-control' required autoComplete='false' placeholder='Enter Your Name' name="username" />
            <input type="email" className='form-control' required autoComplete='false' placeholder='Enter Your Email' name="email" />
            <textarea rows="10" required autoComplete='false' placeholder='Enter Your Message' name="mesage"></textarea>

            <button type='submit' className='text-center' value="send">Send</button>

          </form>
        </div>

      </div>

    </section> 
  )
}

export default Contact
