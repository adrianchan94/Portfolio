import React from 'react'
import Typed from 'react-typed'
import { Link } from "react-scroll"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Full-Stack Developer & Marketing/PR Pro</h1>
                <Typed
                className="typed-text"
                strings={["Public Relations", "Web Development", "Digital Marketing", "Content Development"]} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link smooth={true} to="contacts" offset={0} href="/#" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
