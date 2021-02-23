import React from 'react'
import logo from '../Images/logo.png'
import { Link } from "react-scroll";
//React Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">

      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#"><img src={logo} alt="" width="120" height="60"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/> 
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth={true} to="home" offset={0} className="nav-link" href="/#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-60} className="nav-link" href="/#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" offset={-100} className="nav-link" href="/#">Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="projects" offset={0} className="nav-link" href="/#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contacts" offset={0} className="nav-link" href="/#">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
