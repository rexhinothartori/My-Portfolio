import React from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rexhino.thartori@gmail.com</h5>
            <a href="mailto:rexhino.thartori@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rexhino Thartori</h5>
            <a href="https://www.facebook.com/rexhino.thartori.1/">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Rexhino Thartori</h5>
            <a href="https://www.instagram.com/rexhinothartori/">Follow</a>
          </article>
        </div>
          <form action="">
            <input type="text"  name='name' placeholder='Your Full Name' required/>
            <input type="text"  name='email' placeholder='Your Email' required/>
            <input type="text"  name='phone' placeholder='Your Phone Number' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
          </form>
      </div>
    </section>
  )
}

export default Contact