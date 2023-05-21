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
// import Testimonal from '../components/Testimonal'
import time from "../assets/time.png"
import work from "../assets/work.png"
import Expertise from '../components/Expertise'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import { Link } from 'react-router-dom'

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
     includeButton={true}
     />
     <h1 className='why'>Why Work With Me!</h1>
     <div className='reasoncard'>
       <div className='reason'>
        <img src={accurate} alt="" />
        <p>I excel at understanding user needs and translating them into intuitive and visually appealing designs.</p>
       </div>
       <div className='reason active'>
        <img src={accurate2} alt="" />
        <p>I have extensive knowledge and expertise in UI/UX design, acquired through specialized training and practical experience.</p>
       </div>
       <div className='reason'>
        <img src={accurate3} alt="" />
        <p>I have a keen eye for detail and ensure pixel-perfect designs. From typography and color selection to layout and interactions.</p>
       </div>
     </div>
     <div className='project-heading'>
       <h1>Projects</h1>
       <p className='right'><Link to="/project">View more</Link></p>
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
                    <img src={time} alt="" className='time'/>
                    <p className='center four'>4 weeks</p>
                </div>
                <div className='tools-text'>
                    <img src={work} alt="" />
                    <p className='center'>Figma, Geogle, Notepad, Photoshop</p>
                </div>
            </div>
            <div>
                <a href="https://raphealclinton.notion.site/Pet-Care-Mobile-App-UI-UX-9eb26b54a52b4d988876dda21dcbb717"><button className='case-study'>View Case study</button></a>
                <a href="https://www.figma.com/proto/H8wpyv9qOWofVrmRTfp4r9/First-study-case-(Pat-care)?page-id=193%3A8998&type=design&node-id=195-9630&viewport=68%2C243%2C0.13&scaling=scale-down&starting-point-node-id=193%3A9039"><button className='prototype'>View Prototype</button></a>
            </div>
        </div>
     </div>
     <div className='projects2'>
        <img src={hub} alt=""  className='big-img'/>
        <div className='project-description'>
            <h1 className='pet'>Freelance Hub mobile app</h1>
            <p className='project-detail'>Freelance hub is a mobile application where business and transcation takes place.
            it consist of Client with a service/task and needs a freelancer to solve/accomplish the service and get paid by the client.</p>
            <div className='tools'>
                <div className='tools-text'>
                    <img src={time} alt="" className='time'/>
                    <p className='center four'>4 weeks</p>
                </div>
                <div className='tools-text'>
                    <img src={work} alt="" />
                    <p className='center'>Figma, Geogle, Notepad, Photoshop</p>
                </div>
            </div>
            <div>
                <a href="https://raphealclinton.notion.site/Freelance-Hub-Mobile-App-UI-UX-67fc3ae337024a30b9c1967b615ea67b"><button className='case-study'>View Case study</button></a>
                <a href="https://www.figma.com/proto/24UuUCMu3a6yKHq0PwNHFB/second-case-study?page-id=370%3A2694&type=design&node-id=370-2695&viewport=376%2C149%2C0.83&scaling=scale-down&starting-point-node-id=370%3A2695"><button className='prototype'>View Prototype</button></a>
            </div>
        </div>
     </div>
     <ProjectLists 
     img={project1}
     title="Gym and fitness Website"
     description="The gym and fitness website UI/UX is designed to provide users with a seamless and engaging experience while accessing fitness-related information and services. With a clean and modern interface, the website offers a user-friendly navigation system that allows visitors to effortlessly explore its various sections."
     href="https://www.figma.com/file/lJMmTl50tV7OSnP5wcMPYc/Untitled?type=design&node-id=0%3A1&t=wgXyAVvSi0z7fT4a-1"
     />
      <ProjectLists 
     img={project2}
     title="Crypto Asset Dashboard"
     description="The crypto asset dashboard UI/UX is designed to provide users with a comprehensive and user-friendly platform for managing and monitoring their cryptocurrency investments. With a sleek and intuitive interface, the dashboard offers a seamless experience that enables users to stay informed and make informed decisions in the fast-paced world of cryptocurrencies."
     style={{borderBottom:"none"}}
     href="https://www.figma.com/file/79cJZWpuuXqCmMfO8KeHAM/Untitled?type=design&node-id=15%3A546&t=tEQSIkCZKcloYmJu-1"
     />
       {/* <ProjectLists img={petcare}/> */}
     </div>
     <div className="testimonal">
      <Expertise />
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