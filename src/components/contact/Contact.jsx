import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7x5v9io', 'template_8g5mfms', form.current, '6YPdNkcn6h08EuwvS');

    e.target.reset();
  }

  return (
    <section id='contact'>
           <h5 className='smallTitle experience__titles-center'>Get In Touch</h5>
      <h2 className='bigTitle experience__titles-center'>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
        </div>
        <div className='form__background'>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name='name' placeholder='Your Full Name' required/>
            <input type="text"  name='email' placeholder='Your Email' required/>
            <input type="text"  name='phone' placeholder='Your Phone Number' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <div className='submit__center'>
          <button type='submit' className='btn btn-primary submit'>Send Message</button>
          </div>
          </form>
      </div>
      </div>
    </section>
  )
}

export default Contact