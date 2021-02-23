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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
        <div className="portfolio-wrapper">
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
