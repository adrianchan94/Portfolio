import React from 'react';
import OnlyBrands from '../Images/OnlyBrands.png';
import MunchM8 from '../Images/MunchM8.png';
import CanvasBoys from '../Images/CanvasBoys.png';
//Font Awesome Imports
import { faSearchPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//React Popup Box 
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css";
 

const Portfolio = () => {

    //OnlyBrands
    const openPopupboxOnlyBrands = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={OnlyBrands} alt="OnlyBrands" /> 
        <p>OnlyBrands is an advertising platform which allows brands to promote discounts and offers for services and products, and subsequently build a loyalty network through incentivised referrals and recommndations.
        <br /><br /> 
         Tech Stack: React.js, Redux, Express.js, Node.js, PostgreSQL, Knex.js, Passport.js, JWT, nodemailer API, material UI
        </p>
        <b>Github (Front-end):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/hilman72/only_brands_frontend")}>
        https://github.com/hilman72/only_brands_frontend
        </a>
        <br />
        <b>Github (Back-end):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/hilman72/only_brands_backend")}>
        https://github.com/hilman72/only_brands_backend
        </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigOnlyBrands = {
        titleBar: {
            enable: true,
            text: "OnlyBrands"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

        //MunchM8
        const openPopupboxMunchM8 = () => {
            const content = (
            <>
            <img className="portfolio-image-popupbox" src={MunchM8} alt="MunchM8" /> 
            <p>MunchM8 is a social-dining platform that faciliates new relationships and connections through a shared dining experience.
            <br /><br />
            Tech Stack: Handlebars, Express.js, Node.js, PostgreSQL, Knex.js, Passport.js, Google Map API, nodemailer API, Socket.IO</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/adrianchan94/MunchM8")}>
            https://github.com/adrianchan94/MunchM8
            </a>
            </>
            )
            PopupboxManager.open({content});
                PopupboxManager.update({
                    content,
                    config: {
                        titleBar: {
                            enable: true,
                            text: "MunchM8"
                        },
                        fadeIn: true,
                        fadeInSpeed: 500
                    }
                })
        }
    

           //Canvas Boys
           const openPopupboxCanvasBoys = () => {
            const content = (
            <>
            <img className="portfolio-image-popupbox" src={CanvasBoys} alt="Canvas Boys" /> 
            <p>Canvas Boys is a Microsoft Paint clone with a few additional quirky features.
            <br /><br /> 
            Tech Stack: Bootstrap, Canvas API
            </p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/adrianchan94/Canvas_Boys")}>
            https://github.com/adrianchan94/Canvas_Boys
            </a>
            </>
            )
            PopupboxManager.open({content});
            PopupboxManager.update({
                content,
                config: {
                    titleBar: {
                        enable: true,
                        text: "Canvas Boys"
                    },
                    fadeIn: true,
                    fadeInSpeed: 500
                }
            })
            
        }
    

    return (
        <div id="projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Xccelerate Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxOnlyBrands}>
                        <img className="portfolio-image" src={OnlyBrands} alt="OnlyBrands" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> 
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxMunchM8}>
                        <img className="portfolio-image" src={MunchM8} alt="MunchM8" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> 
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCanvasBoys}>
                        <img className="portfolio-image" src={CanvasBoys} alt="CanvasBoys" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} /> 
                    </div>
                </div>
            </div >
            <PopupboxContainer {...popupboxConfigOnlyBrands} />
        </div >
    )
}

export default Portfolio
