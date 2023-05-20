import React from 'react'
import Description from '../components/Description'
import clinton from "../assets/clinton.png"
import "../styles/about.css"
import Expertise from '../components/Expertise'

export default function About() {
  return (
    <div className='about'>
    <Description
     hello="Hello"
     jobDescription1="My name is Clinton Raphael, and I am a Product Designer, UX Researcher, Service Designer, and Front-end Developer."
     jobDescription2="I love creating conversion-oriented user experiences and digital user interfaces. I am passionate about solving complex problems through data-driven processes that translate business objectives into solutions, with empathy for the user."
     img={clinton}
     includeButton={false}
     />
     <div className="story">
         <h2>My Story</h2>
         <p>👀 Interested in emerging technologies, e.g, blockchain, TV and game interface design/experience,
             motion graphics, voice interfaces, virtual and mixed reality, wearables, financial technology, assistive technology, and cognitive psychology for UX.
             Involved in each phase of the design process from discovery, requirements analysis, visual design strategy & ideation, feature specification, process flow, user flows, wire-flows, prototyping to user testing and scaling.</p>
          <p>🏠I am currently based in Lagos, Nigeria 🇳🇬, working with people and businesses all over the world🌏</p>
     </div>
     <Expertise />
    </div>
  )
}
