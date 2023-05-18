import React from 'react'
import Button from '../components/Button'
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import behance from "../assets/behance.png"
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
          <span>{author}</span>
          <div className='description-icons'>
          {includeButton ? <Button /> : !includeButton}
            <img src={facebook}alt="" className='facebook-icon'/>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={behance} alt="" />
          </div>
      </div>
      <div className='description-img'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
