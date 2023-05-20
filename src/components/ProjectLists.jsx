import React from 'react'
import time from "../assets/time.png"
import work from "../assets/work.png"

export default function ProjectLists({img, description , title , style}) {
  return (
    <div className='projects projects-3' style={style}>
        <img src={img} alt="" className='project-img'/>
        <div className='project-description'>
            <h1 className='pet'>{title}</h1>
            <p className='project-detail'>{description}</p>
            <div className='tools'>
                <div className='tools-text'>
                    <img src={time} alt="" className='time' />
                    <p className='center four'>1 day</p>
                </div>
                <div className='tools-text'>
                    <img src={work} alt="" />
                    <p className='center'>Figma, Geogle, Photoshop</p>
                </div>
            </div>
            <div>
                <button className='case-study'>View Project</button>
                <button className='prototype'>View Prototype</button>
            </div>
        </div>
    </div>
  )
}
