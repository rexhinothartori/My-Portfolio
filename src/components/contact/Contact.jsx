import './contact.css';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Popup from './popup/Popup';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nh7e9rn',
        'template_v2mczpf',
        form.current,
        'JJkOMSoMRSbeKvcrH'
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Try again.');
        }
      );
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="contact" className="mt-5">
      <h2 className="bigTitle experience__titles-center">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options"></div>

        <div className="form__background">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="phone" placeholder="Your Phone Number" required />
            <textarea name="message" rows="7" placeholder="Your Message" required />

            <div className="submit__center">
              <button type="submit" className="btn btn-primary submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <Popup
          message="I will get back to you shortly."
          onClose={closePopup}
        />
      )}
    </section>
  );
};

export default Contact;
