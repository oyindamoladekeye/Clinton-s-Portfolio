import React, { useState } from 'react'
import address from "../assets/address.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import social from "../assets/social.png"
import hello from "../assets/hello.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import behance from "../assets/behance.png"
import "../styles/contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
 
export default function Contact() {
  const form = useRef();

  const sendEmail=(e)=>{
    e.preventDefault();
    setInputs("");

    emailjs.sendForm('clinton', 'template_nuewm06', form.current, 'tKobfkflBBI3G4ecD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  }
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <div className='contact'>
      <div className='contact-intro'>
        <h1 className='contact-connect'>Let's connect</h1>
        <p className='contact-hello'>Say Hello <img src={hello} alt ="" /></p>
        <p className='contact-want' c>Want to have chat with me about design, ui, ux, Project, Career, Surviving in this<br/>
          country(Lol) talk about movies, basketball, football <br />or just buy me a cup of coffee</p>
      </div>
      <div>
        <div className='form'>
          <div className='form-left'>
            <div className='form-one'>
              <div className='form-address'>
                <img src={address} alt="" />
                <div>
                  <h5>Address</h5>
                  <p>Lagos/Nigeria</p>
                </div>
              </div>
              <div className='form-phone'>
                <img src={phone} alt="" />
                <div>
                  <h5>Phone</h5>
                  <p><a href="tel:+2347049425399">+2347049425399</a></p>
                </div>
              </div>
              <div className='form-email'>
                <img src={email} alt="" />
                <div>
                  <h5>Email</h5>
                  <p><a href="mailto:clintonrapheal5@gmail.com">clintonrapheal5@gmail.com</a></p>
                </div>
              </div>
              <div className='form-social'>
                <img src={social} alt="" />
                <div>
                  <h5>Social</h5>
                  <p>Let's connect</p>
                </div>
              </div>
            </div>
            <div className='form-icons'>
              <img src={facebook}alt="" className='facebook-icon'/>
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={behance} alt="" />
            </div>
          </div>
          <form onSubmit={sendEmail} ref={form}>
            <div className='form-name'>
              <label htmlFor="">First Name
              <input type="text"
              name="firstname"
              value={inputs.firstname || ""} 
              onChange={handleChange}
               />
              </label>
              <label htmlFor="">Last Name
              <input type="text"
              name="lastname"
              value={inputs.lastname || ""} 
              onChange={handleChange}
               />
              </label>
            </div>
            <label htmlFor="" className='label-email'>Email
            <input type="email"
              name="email"
              value={inputs.email || ""} 
              onChange={handleChange}
               />
            </label>
            <label htmlFor="" className='label-message'>Message
              <textarea name="message"               
              value={inputs.message || ""} 
              onChange={handleChange}></textarea>
            </label>
            <button className='form-submit'>Send</button>
            {/* <input type="submit"  value="Send"/> */}
          </form>
        </div>
      </div>
    </div>
  )
}
