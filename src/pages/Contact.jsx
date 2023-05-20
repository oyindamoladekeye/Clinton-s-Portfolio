import React, { useState } from 'react'
import address from "../assets/address.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"
import social from "../assets/social.png"
import hello from "../assets/hello.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import behance from "../assets/behance.png"
import "../styles/contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
 
export default function Contact() {
  const form = useRef();
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form fields
    let formValid = true;

    if (!inputs.firstname) {
      setErrors((prevErrors) => ({ ...prevErrors, firstname: 'Please enter a first name' }));
      formValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstname: '' }));
    }

    if (!inputs.lastname) {
      setErrors((prevErrors) => ({ ...prevErrors, lastname: 'Please enter a last name' }));
      formValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastname: '' }));
    }

    if (!inputs.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter an email address' }));
      formValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (!inputs.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Please enter a message' }));
      formValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
    }

    if (formValid) {
      setValid(true);
      emailjs
        .sendForm('clinton', 'template_nuewm06', form.current, 'tKobfkflBBI3G4ecD')
        .then((result) => {
          console.log(result.text);
          setInputs({
            firstname: '',
            lastname: '',
            email: '',
            message: ''
          });
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      console.log('Please fill out all required fields before sending the email.');
    }
  };
  const handleBlur = (event) => {
    const name = event.target.name;
    if (!inputs[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: `Please enter a ${name}` }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: value ? prevErrors[name] : '' }));
  };


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
              <a href="http://linkedin.com/in/clinton-rapheal-65b561212"><img src={linkedin}alt="" className='linkedin-icon'/></a>
              <a href="https://twitter.com/honchocode"><img src={twitter} alt="" /></a>
              <a href="https://instagram.com/honcho_design01?igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram} alt="" /></a>
              <a href="https://www.behance.net/clintonrapheal"><img src={behance} alt="" /></a>
            </div>
          </div>
          <form onSubmit={sendEmail} ref={form}>
            <div className='form-name'>
              <label htmlFor="">First Name
              <input type="text"
              name="firstname"
              value={inputs.firstname || ""} 
              onChange={handleChange}
              onBlur={handleBlur}
               />
               {errors.firstname ? <span className='name-error'>{errors.firstname}</span>  : null}
               {/* The one above was replace with the one below because the one below is a outdated
               {submitted && !inputs.firstname && <p>Please enter a first name</p>} 
                                    OR
               {submitted && !inputs.firstname ? <p>Please enter a first name</p> }
               */}
              </label>
              <label htmlFor="">Last Name
              <input type="text"
              name="lastname"
              value={inputs.lastname || ""} 
              onChange={handleChange}
              onBlur={handleBlur}
               />
              {errors.lastname ? <span className='name-error'>{errors.lastname}</span> : null}
              </label>
            </div>
            <label htmlFor="" className='label-email'>Email
            <input type="email"
              name="email"
              value={inputs.email || ""} 
              onChange={handleChange}
              onBlur={handleBlur}

               />
              {errors.email ? <span className='name-error'>{errors.email}</span> : null}
            </label>
            <label htmlFor="" className='label-message'>Message
              <textarea name="message"               
              value={inputs.message || ""} 
              onChange={handleChange}
              onBlur={handleBlur}
              ></textarea>
            </label>
            {errors.message ? <span className='name-error'>{errors.message}</span> :null}
            <button className='form-submit'type='submit'>Send</button>
            {/* <input type="submit"  value="Send"/> */}
            {submitted ? (valid ? <p className='success'>Thanks for submitting!</p> : null) : null}
            {/* {submitted && valid && <p>Thanks for submitting</p>} */}
          </form>
        </div>
      </div>
    </div>
  )
}

// export default function Contact() {
//   const form = useRef();

//   const sendEmail=(e)=>{
//     e.preventDefault();

//     if (!inputs.firstname) {
//       setErrors((prevErrors) => ({ ...prevErrors, firstname: 'Please enter a first name' }));
//     }
//     else {
//       setErrors((prevErrors) => ({ ...prevErrors, firstname: '' }));
//     }

//     if (!inputs.lastname) {
//       setErrors((prevErrors) => ({ ...prevErrors, lastname: 'Please enter a last name' }));
//     }
//     else {
//       setErrors((prevErrors) => ({ ...prevErrors, lastname: '' }));
//     }

//     if (!inputs.email) {
//       setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter an email address' }));
//     }
//     else {
//       setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
//     }
//     if (!inputs.message) {
//       setErrors((prevErrors) => ({ ...prevErrors, message: 'Please enter a message' }));
//     }
//     else {
//       setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
//     }

//     setInputs("");
//     setSubmitted(true);
//     if(inputs.firstName && inputs.lastName && inputs.email) {
//       setValid(true);
//       sendEmail();
//       emailjs.sendForm('clinton', 'template_nuewm06', form.current, 'tKobfkflBBI3G4ecD')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }
//   else{
//     console.log("Please fill out all required fields before sending the email.")
//   }

//   }
//   const [inputs, setInputs] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);
//   const [errors, setErrors] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     message:''
//   });



//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: value ? prevErrors[name] : prevErrors[name] }));

//   }
