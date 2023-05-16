import React from 'react'
import Description from '../components/Description'
import clinton from "../assets/clinton.png"
import accurate from "../assets/accurate.png"
import accurate2 from "../assets/accurate2.png"
import accurate3 from "../assets/accurate3.png"
import "../styles/home.css"
import ProjectLists from '../components/ProjectLists'
import petcare from "../assets/petcare.png"
import testimonalImg1 from "../assets/testimonalImg1.png"
import testimonalImg2 from "../assets/testimonal-img2.png"
import testimonalImg3 from "../assets/testimonal-img3.png"
import hub from "../assets/hub.png"
import Testimonal from '../components/Testimonal'
export default function Home() {
  
  return (
    <div className='home'>
     <Description
     introduction="HELLO I'M A"
     jobtitle="UI/UX DESIGNER"
     title="Clinton Rapheal"
     jobDescription1="I'm a ui/ux designer with over 3 years of experience on the use of figma, Adobe photoshop, Adobe Illustrator and lot more adobe software.
     work with over 4 companies while growing as a UI/UX Designer.
     Do while to drop a feedback or opinion about my projects/case study"
     jobDescription2="Thanks!!!"
     img={clinton}
     />
     <h1 className='why'>Why Work With Me!</h1>
     <div className='reasoncard'>
       <div className='reason'>
        <img src={accurate} alt="" />
        <p>Over the years and experience as a ui/ux designer, i learnt on the importance of being fast and accurate</p>
       </div>
       <div className='reason active'>
        <img src={accurate2} alt="" />
        <p>Over the years and experience as a ui/ux designer, i learnt on the importance of being fast and accurate</p>
       </div>
       <div className='reason'>
        <img src={accurate3} alt="" />
        <p>Over the years and experience as a ui/ux designer, i learnt on the importance of being fast and accurate</p>
       </div>
     </div>
     {/* <div className='project-heading'>
       <h1>Projects</h1>
       <p className='right'>View more</p>
     </div>
     <div className="project-lists">
       <ProjectLists img={petcare}/>
       <ProjectLists img={hub} style={{
        flexDirection: 'row-reverse' ,
        borderBlock:"#C3C3C3 1px solid",
        paddingTop:"40px"
        }} />
       <ProjectLists img={petcare}/>
     </div> */}
     {/* <div className="testimonal">
      <div>
        <h1>Testimonials</h1>
      </div>
      <div className='testimonal-cards'>
        <Testimonal 
        img={testimonalImg1} 
        text="I don't recommend you highlight the log out button like that because as much possible, 
        you want to keep the user logged in and using the web app!
        Highlighting it might decrease user usage rate in my opinion"
        writer="Yh_uxmedia"
        style={{top:"340px"}}
        />
        <Testimonal 
        img={testimonalImg2} 
        text="Awesome work man, you have everything right, i may have some concern about the green colours 
        because its a bit light to be in a white background but otherwise, Its awesome design"
        writer="Noureldin_Designs"
        style={{left: "194px",top: "340px"}}
        />
       <Testimonal 
        img={testimonalImg3} 
        text="I love the colour scheme you use for these project,
        Amazing work, Keep up the good work."
        writer="Attic_Project"
        style={{paddingTop:"96px" , top:"245px"}}
        />
      </div>
     </div> */}
    </div>
  )
}