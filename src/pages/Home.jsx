import React from 'react'
import Description from '../components/Description'
import clinton from "../assets/clinton.png"
import accurate from "../assets/accurate.png"
import accurate2 from "../assets/accurate2.png"
import accurate3 from "../assets/accurate3.png"
import "../styles/home.css"
// import ProjectLists from '../components/ProjectLists'
import petcare from "../assets/petcare.png"
import testimonalImg1 from "../assets/testimonalImg1.png"
import testimonalImg2 from "../assets/testimonal-img2.png"
import testimonalImg3 from "../assets/testimonal-img3.png"
import hub from "../assets/hub.png"
import Testimonal from '../components/Testimonal'
import time from "../assets/time.png"
import work from "../assets/work.png"
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
     <div className='project-heading'>
       <h1>Projects</h1>
       <p className='right'>View more</p>
     </div>
     <div className="project-lists">
     <div className='projects'>
        <img src={petcare} alt=""  className='big-img'/>
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
     <div className='projects2'>
        <img src={hub} alt=""  className='big-img'/>
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
       {/* <ProjectLists img={petcare}/> */}
     </div>
     <div className="testimonal">
      <div>
        <h1>Testimonials</h1>
      </div>
      <div className='testimonal-cards'>
        {/* <Testimonal 
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
        /> */}
        <div className='card-testimonal'>
          <img src={testimonalImg1} alt="" className='testimonal-img-1'/>
          <p className='quote'>“</p>
          <p className='testimonal-text'>I don't recommend you highlight the log out button like that because as much possible, 
        you want to keep the user logged in and using the web app!
        Highlighting it might decrease user usage rate in my opinion</p>
          <sub className='sub'>~{""} Yh_uxmedia</sub>
        </div>
        <div className='card-testimonal'>
          <img src={testimonalImg2} alt="" className='testimonal-img-2' />
          <p className='quote'>“</p>
          <p className='testimonal-text'>Awesome work man, you have everything right, i may have some concern about the green colours 
        because its a bit light to be in a white background but otherwise, Its awesome design</p>
          <sub className='sub sub2'>~{""} Noureldin_Designs</sub>
        </div>
        <div className='card-testimonal'>
          <img src={testimonalImg3} alt="" className='testimonal-img-3' />
          <p className='quote'>“</p>
          <p className='testimonal-text'>I love the colour scheme you use for these project,
        Amazing work, Keep up the good work.</p>
          <sub className='sub'>~{""} Attic_Project</sub>
        </div>
      </div>
     </div>
    </div>
  )
}