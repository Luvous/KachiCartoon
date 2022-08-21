import React from 'react'
import NavBar from '../components/NavBar'

function Contact() {
  return (
    <section>
      <NavBar currentPath="contact" />
      <div className='contact-container'>
        <div className='contact-form'>
          <p>Name</p>
          Input
          <p>Email</p>
          Input
          <textarea/>
        </div>
        <div className='<contact-info'>

        </div>
      </div>
    </section>
  )
}

export default Contact