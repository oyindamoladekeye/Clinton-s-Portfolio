import React from 'react'
import Button from '../components/Button'
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import behance from "../assets/behance.png"
import "../styles/description.css"
export default function Description(props) {
  return (
    <div className='description-body'>
      <div className='description-container'>
          <h2 className='introduction'>{props.introduction} <span className='jobtitle'>{props.jobtitle}</span></h2>
          <h1 className='title'>{props.title}</h1>
          <p className='job-description1' >{props.jobDescription1}</p>
          <p className='job-description2'>{props.jobDescription2}</p>
          <span>{props.author}</span>
          <div className='description-icons'>
            <Button />
            <img src={facebook}alt="" className='facebook-icon'/>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={behance} alt="" />
          </div>
      </div>
      <div className='description-img'>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}
