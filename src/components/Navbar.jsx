import React from 'react'
import logo from "../assets/log.png"
import toggle1 from "../assets/toggle1.png";
import toggle2 from "../assets/toggle2.png"
import { useState } from 'react';
import "../styles/navbar.css";
import Button from './Button';
import {NavLink } from "react-router-dom";

import home from "../assets/homeicon.png"
import project from "../assets/projecticon.png"
import about from "../assets/abouticon.png"
import contact from "../assets/contacticon.png"

export const Navbar = () => {

  const [showNavbar ,setShowNavbar] = useState(false);
  const handleShowNavbar=()=>{
    setShowNavbar(!showNavbar)
  }
  const handleNavClick = () => {
    setShowNavbar(false);
  };
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={showNavbar?"nav-mobile-links":"nav-links"}>
          <li id="active" >
            <NavLink to ="/"
            onClick={handleNavClick}
            className='align'
            >
            {showNavbar ? <img src ={home} /> : null }Home
            </NavLink>
          </li>
          <li id="active">
            <NavLink to="/project"
            onClick={handleNavClick}
            className='align'
            >{showNavbar ? <img src={project} /> : null}Project</NavLink>
          </li>
          <li id="active">
            <NavLink to="/about"
             onClick={handleNavClick}
             className='align'
            >{showNavbar ? <img src={about} /> : null}About</NavLink>
          </li>
          <li id="active">
            <NavLink to="/contact"
            onClick={handleNavClick}
            className='align'

            >{showNavbar ? <img src={contact}/> : null}Contact</NavLink>
          </li>
          <li id="active">
            <NavLink to="/contact" 
            className='nav-btn'
            onClick={handleNavClick}
            ><Button /></NavLink>
          </li>
        </ul>
        <div className="toggle" onClick={handleShowNavbar}>
          {showNavbar?<img src={toggle2} alt =""/>:<img src={toggle1}  alt=""/>}
        </div>
      </div>
    </nav>
  )
}
