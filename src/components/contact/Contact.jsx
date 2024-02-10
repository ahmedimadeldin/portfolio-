import React,{useRef} from 'react'
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import {BiLogoTelegram} from "react-icons/bi"
import { BiLogoWhatsapp } from 'react-icons/bi';
import emailjs from "emailjs-com";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_xfcel9w','template_85mtkz5',form.current, 'R1utJgcRcbO2xJsjR')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contanct me</h2>

      <div className='container contact-container'>
      <div className="contact-options">
        {/* first contact option */}
        <h3>Send a Message</h3>
        <article className='contact-option'>
          <h4>Email</h4>
          <h4>ahmefimadeldin@gmail.com</h4>
          <a href="mailto:ahmefimadeldin@gmail.com"><IoMdMail  size={30}/></a>
        </article>
        {/* second contact option */}
        <article className='contact-option'>
          <h4>Telegram</h4>
            
          <a href="https://t.me/"><BiLogoTelegram size={30}/></a>
        </article>
        {/* third contact option */}
        <article className='contact-option'>
          <h4>WhatsApp</h4>
            
          <a href="https://api.whatsapp.com/send?phone=+249902439333"><BiLogoWhatsapp size={30}/></a>
        </article>

      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name="email" id="" placeholder='Your Email' />
        <textarea name="message" id="" placeholder='Your Message' requireds rows="7"></textarea>
        <button type='submit' className='btn btn-primary'>Send a Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact;