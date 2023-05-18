import React from 'react'
import logo from "../assets/log.png"
import toggle1 from "../assets/toggle1.png";
import toggle2 from "../assets/toggle2.png"
import { useState } from 'react';
import "../styles/navbar.css";
import Button from './Button';
import {NavLink } from "react-router-dom";



export const Navbar = () => {

  const [showNavbar ,setShowNavbar] = useState(false);
  const handleShowNavbar=()=>{
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={showNavbar?"nav-mobile-links":"nav-links"}>
          <li id="active">
            <NavLink to ="/">Home</NavLink>
          </li>
          <li id="active">
            <NavLink to="/project">Project</NavLink>
          </li>
          <li id="active">
            <NavLink to="/about">About</NavLink>
          </li>
          <li id="active">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li id="active">
            <NavLink to="/contact" className='nav-btn'><Button /></NavLink>
          </li>
        </ul>
        <div className="toggle" onClick={handleShowNavbar}>
          {showNavbar?<img src={toggle2} alt =""/>:<img src={toggle1}  alt=""/>}
        </div>
      </div>
    </nav>
  )
}
