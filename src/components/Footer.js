import React from 'react';
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
 } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Tai Po, Hong Kong</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+852-9319-6012">+(852)9319-6012</a>
                        </div>
                        <div className="d-flex">
                            <p>adrianchanuk@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About Me</a>
                                <br /> 
                                <a className="footer-nav">Experience</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Projects</a>
                                <br />
                                <a className="footer-nav">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.linkedin.com/in/adrian-chan-1a290060/"}
                                quote={"Adrian's LinkedIn"}
                                hashtag="#developer"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.linkedin.com/in/adrian-chan-1a290060/"}
                                quote={"Adrian's LinkedIn"}
                                hashtag="#developer"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.linkedin.com/in/adrian-chan-1a290060/"}
                                quote={"Adrian's LinkedIn"}
                                hashtag="#developer"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/adrian-chan-1a290060/"}
                                quote={"Adrian's LinkedIn"}
                                hashtag="#developer"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp; Adrian Chan | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
