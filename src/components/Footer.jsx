import React from 'react'
import chat from '../assets/chat.png'
import log0 from "../assets/log.png"
import behance from "../assets/behance.png"
import twitter from "../assets/twitterfooter.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagramfooter.png"
import { Link , useLocation} from 'react-router-dom'
import "../styles/home.css"
import "../components/ScrollToTop"

export default function Footer() {
  const hideChatBox = location.pathname === "/contact";
  return (
    <footer>
     <div className='footer-main'>
      <div className='footer-left'>
        <img src={log0} alt="" />
        <p className='footer-intro'>I'm a UI/UX designer with over 3 years of experience on the use of Figma, Adobe Hhotoshop, 
          Adobe Illustrator and lot more Adobe software
         <br />Worked with over 4 companies.</p>
         <div className='footer-icon'>
          <a href="https://www.behance.net/clintonrapheal"><img src={behance} alt=""  className='behance'/></a>
          <a href="https://twitter.com/honchocode"><img src={twitter} alt="" /></a>
          <a href="http://linkedin.com/in/clinton-rapheal-65b561212"><img src={linkedin} alt="" /></a>
          <a href="https://instagram.com/honcho_design01?igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram} alt="" /></a>
         </div>
      </div>
      <div className='footer-right'>
        <p className='let'>Lets Connect And Build Amazing Design</p>
        <p className='got'>Got amazing idea for your next project and need someone to work with, send a massage lets work together</p>
        {/* <Link to ="/contact">
          <div className='chat'>
            <img src={chat} alt="" />
          </div>
        </Link> */}
        {hideChatBox ? null :
              <Link to ="/contact">
                <div className='chat'>
                  <img src={chat} alt="" />
                </div>
              </Link>
         }
      </div>
     </div>
     <p className='footer-copy'>COPYRIGHT@CLINTONRAPHEAL3-ALL RIGHT COPYWRITE</p>
    </footer>
  )
}

