import React from 'react'
import Button from '../components/Button'
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import behance from "../assets/behance.png"
import { Link } from 'react-router-dom'
import "../styles/description.css"
export default function Description({includeButton , introduction , jobtitle , hello , title , jobDescription1 , jobDescription2 , author , img}) {
  return (
    <div className='description-body'>
      <div className='description-container'>
          <h2 className='introduction'>{introduction} <span className='jobtitle'>{jobtitle}</span></h2>
          <h2 className='hello'>{hello}</h2>
          <h1 className='title'>{title}</h1>
          <p className='job-description1' >{jobDescription1}</p>
          <p className='job-description2'>{jobDescription2}</p>
          <span className='description-author'>{author}</span>
          <div className='description-icons'>
          {includeButton ? <Link to="/contact"><Button /> </Link>: !includeButton}
            <a href="http://linkedin.com/in/clinton-rapheal-65b561212"><img src={linkedin}alt="" className='linkedin-icon'/></a>
            <a href="https://twitter.com/honchocode"><img src={twitter} alt="" /></a>
            <a href="https://instagram.com/honcho_design01?igshid=OGQ5ZDc2ODk2ZA=="><img src={instagram} alt="" /></a>
            <a href="https://www.behance.net/clintonrapheal"><img src={behance} alt="" /></a>
          </div>
      </div>
      <div className='description-img'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
