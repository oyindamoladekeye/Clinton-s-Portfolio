import React from 'react'
import man from "../assets/man.png"
import Description from '../components/Description'
import petcare from "../assets/petcare.png"
import time from "../assets/time.png"
import work from "../assets/work.png"
import hub from "../assets/hub.png"
import "../styles/project.css"
import ProjectLists from '../components/ProjectLists'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
export default function Project() {
  return (
    <>
    <Description
    hello="Project/Case study"
    jobDescription1="The best year of your life are the ones in which you decides your problems are your own. you do not blame them on your mother, the ecology, or the president. 
    You realize that you control your own destiny"
     author="¬Albert Ellis"
     img={man}
     includeButton={true}
      />
      <div className="project-page">
        <h1 className='project-page-h1'>Case Study</h1>
        <div className="project-list">
          <div className="projects">
            <img src={petcare} alt=""  className='big-img'/>
            <div className="project-description">
              <h1 className='pet'>Pet Care vertinary mobile app</h1>
              <p className="project-detail">Pet care app is a veterinary care app, that allows pet owners and veterinarian to connect all over the world,
                  to make it easier for pet owner to easily locate
                  the closest vet around they resident and also take care of their pet from the comfort of they come.</p>
              <div className="tools">
                  <div className='tools-text'>
                      <img src={time} alt="" className='time'/>
                      <p className='center four'>4 weeks</p>
                  </div>
                  <div className='tools-text'>
                      <img src={work} alt="" />
                      <p className='center'>Figma, Geogle, Ms word, Photoshop</p>
                  </div>
              </div>
              <div>
                  <a href="hhttps://raphealclinton.notion.site/Pet-Care-Mobile-App-UI-UX-9eb26b54a52b4d988876dda21dcbb717"><button className='case-study'>View Case study</button></a>
                  <a href="https://www.figma.com/proto/H8wpyv9qOWofVrmRTfp4r9/First-study-case-(Pat-care)?page-id=193%3A8998&type=design&node-id=195-9630&viewport=68%2C243%2C0.13&scaling=scale-down&starting-point-node-id=193%3A9039"><button className='prototype'>View Prototype</button></a>
              </div>
            </div>
          </div>
          <div className="projects2">
            <img src={hub} alt=""  className='big-img'/>
            <div className="project-description">
              <h1 className='pet'>Freelance hub mobile app</h1>
              <p className="project-detail">Freelance hub is a mobile application where business and transcation takes place.
        it consist of Client with a service/task and needs a freelancer to solve/accomplish the service and get paid by the client.</p>
              <div className="tools">
                  <div className='tools-text'>
                      <img src={time} alt="" className='time'/>
                      <p className='center four'>4 weeks</p>
                  </div>
                  <div className='tools-text'>
                      <img src={work} alt="" />
                      <p className='center'>Figma, Geogle, Ms word, Photoshop</p>
                  </div>
              </div>
              <div>
                  <a href="https://raphealclinton.notion.site/Freelance-Hub-Mobile-App-UI-UX-67fc3ae337024a30b9c1967b615ea67b"><button className='case-study'>View Case study</button></a>
                  <a href="https://www.figma.com/proto/24UuUCMu3a6yKHq0PwNHFB/second-case-study?page-id=370%3A2694&type=design&node-id=370-2695&viewport=376%2C149%2C0.83&scaling=scale-down&starting-point-node-id=370%3A2695"><button className='prototype'>View Prototype</button></a>
              </div>
            </div>
          </div>
        </div>
        <h1 className='project-page-h1'>Projects</h1>
        <ProjectLists 
        img={project1}
        title="Gym and Fitness Website"
        description="The gym and fitness website UI/UX is designed to provide users with a seamless and engaging experience while accessing fitness-related information and services. With a clean and modern interface, the website offers a user-friendly navigation system that allows visitors to effortlessly explore its various sections."
        href="https://www.figma.com/file/lJMmTl50tV7OSnP5wcMPYc/Untitled?type=design&node-id=0%3A1&t=wgXyAVvSi0z7fT4a-1"
        />
        <ProjectLists 
        img={project2}
        title="Crypto Asset Dashboard"
        description="The crypto asset dashboard UI/UX is designed to provide users with a comprehensive and user-friendly platform for managing and monitoring their cryptocurrency investments. With a sleek and intuitive interface, the dashboard offers a seamless experience that enables users to stay informed and make informed decisions in the fast-paced world of cryptocurrencies."
        href="https://www.figma.com/file/79cJZWpuuXqCmMfO8KeHAM/Untitled?type=design&node-id=15%3A546&t=tEQSIkCZKcloYmJu-1"
        />
        <ProjectLists
        img={project3}
        title="Stream Yard Dashboard"
        description="The movie streaming website's UI/UX is designed to provide users with a seamless and immersive movie-watching experience. The interface features a clean and intuitive layout, allowing users to easily navigate through the site and discover their favourite movies."
         href="https://www.figma.com/file/3iWjaUNaK7DSwq0UAHPRs7/Stream-yard-dashboard?type=design&node-id=0%3A1&t=vmTmYKHnMEGFpTDU-1"
         />
         <ProjectLists
         img={project4}
         title="Portfolio Website"
         description="Our portfolio website UI/UX is a sleek and user-friendly platform designed to showcase your creative work and captivate visitors with an immersive digital experience. With a clean and minimalist interface, it ensures that your portfolio takes centre stage, allowing your artistry to shine through."
         href="https://www.figma.com/file/j8b7MY42wkfs2A9zzYM7xK/Real-estate-web?type=design&node-id=0%3A1&t=cPUQwMQGujKaRgnT-1"
         />
      </div>
    </>
  )
}
