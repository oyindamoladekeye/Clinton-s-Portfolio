import React from 'react'
import chat from '../assets/chat.png'
import log0 from "../assets/log.png"
import facebook from "../assets/facebookfooter.png"
import twitter from "../assets/twitterfooter.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagramfooter.png"
import { Link } from 'react-router-dom'
import "../styles/home.css"
import "../components/ScrollToTop"
export default function Footer() {
  return (
    <footer>
     <div className='footer-main'>
      <div className='footer-left'>
        <img src={log0} alt="" />
        <p className='footer-intro'>I'm a ui/ux designer with over 3 years of experience on the use of figma, Adobe photoshop, 
          Adobe Illustrator and lot more adobe software.
         work with over 4 companies.</p>
         <div className='footer-icon'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
         </div>
      </div>
      <div className='footer-right'>
        <p className='let'>Lets Connect And Build Amazing Design</p>
        <p className='got'>Got amazing idea for your next project and need someone to work with, send a massage lets work together</p>
        <Link to ="/contact">
          <div className='chat'>
            <img src={chat} alt="" />
          </div>
        </Link>
      </div>
     </div>
     <p className='footer-copy'>COPYRIGHT@CLINTONRAPHEAL3-ALL RIGHT COPYWRITE</p>
    </footer>
  )
}

