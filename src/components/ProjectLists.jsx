import React from 'react'
import time from "../assets/time.png"
import work from "../assets/work.png"

export default function ProjectLists({img , style}) {
  return (
    <div className='projects'  style={style}>
        <img src={img} alt=""  className='big-img'/>
        <div className='project-description'>
            <h1 className='pet'>Pet Care vertinary mobile app</h1>
            <p className='project-detail'>Pet care app is a veterinary care app, that allows pet owners and veterinarian to connect all over the world, 
                to make it easier for pet owner to easily locate 
                the closest vet around they resident and also take care of their pet from the comfort of they come.</p>
            <div className='tools'>
                <div className='tools-text'>
                    <img src={time} alt="" />
                    <p className='center four'>4 weeks</p>
                </div>
                <div className='tools-text'>
                    <img src={work} alt="" />
                    <p className='center'>Figma, Geogle, Ms word, Photoshop</p>
                </div>
            </div>
            <div>
                <button className='case-study'>View Case study</button>
                <button className='prototype'>View Prototype</button>
            </div>
        </div>
    </div>
  )
}
