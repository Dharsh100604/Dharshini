import './Contact.css';
import React from 'react';
import phone from '../../images/phone-call.png';
import email from '../../images/mail.png';
import address from '../../images/placeholder.png';
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact=()=>{
    const formRef = useRef()

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted");
      emailjs.sendForm(
        'service_4xlo02l', 
        'template_z2b9cfd', 
        formRef.current, 'lPBNjpRVK5VYd1x5C'
      )
        .then((result) => {
          console.log("Email sent:",result.text);
          toast.success("Message Sent! Thank you..");
          formRef.current.reset();
        }, (error) => {
          toast.error("Error! Resend message..");
          console.log(error.text);
        });
    }
    
    
return(
   <section className='contact container section' id='contact'>
    <h1 className='pro-title' style={{textAlign:'center'}}>Contact Me</h1>
    <div className='contact_container grid'>
        <div className='contact_info'>
            <h1 className='contact_title'>Get in touch </h1>
            <p>I am excited about the endless possibilities that web development offers and always looking 
              for opportunities to collaborate on exciting projects. If you're interested in working together 
              or want to discuss any ideas, feel free to reach out to me through the contact form below. </p>
            <div className='contact_item'>
                <img src={phone} alt="" className='c_icon'/>+91 7010601187
            </div>
            <div className='contact_item'>
                <img src={email}alt="" className='c_icon'/>dharshinigbe@gmail.com
            </div>
            <div className='contact_item'>
                <img src={address} alt="" className='c_icon'/>Attur,Salem
            </div>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className='contact_form'>
        <h1 className='contact_title'>Message Me </h1>
            <input type='text' name='name' className='contact_form-input' placeholder='Name' required/>
            <input type='email' name='email' className='contact_form-input' placeholder='Email'/>
            <input type='text' className='contact_form-input' placeholder='Subject' required/>
            <textarea name="message" cols="30" rows="10" placeholder="Write your message" className='contact_form-input'></textarea>
            <button className='btn'>Send Message</button>
        </form>
    </div>
   </section>
)
}

export default Contact;