import React from 'react'
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <ul>
          <Link to="/"> <li>Home</li></Link>
          <Link to="/contact"> <li>Contact</li></Link>
          <Link to="/projects"> <li>Projects</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar