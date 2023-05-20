import React from 'react'
import checkbox from "../assets/checkbox.png"
import checkbox2 from "../assets/checkbox2.png"
import "../styles/expertise.css"
export default function Expertise() {
  return (
    <div className='expertise'>
        <h1>My Expertise</h1>
        <div className="expertise-list">
            <ul>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Website Design</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Wireframe</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Adobe Illustrator</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>UX Research</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Mobile Design</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Prototype</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>UI Design</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>Adobe Photoshop</p>
                </li>
                <li>
                    <img src={checkbox} alt="" />
                    <img src={checkbox2} alt="" />
                    <p>HTML & CSS</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
