import React from 'react';
import author from "../Images/adrian.jpg"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5">
                  <img className="profile-img" src={author} alt="author..." />
                  </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                        <h1 className="about-heading">About Me</h1>
                        <p>Hey everyone, I'm Adrian! I am a full-stack software engineer graduate having recently
                        completed an intensive four-month bootcamp at Xccelerate. 
                        <br/><br/>
                        Prior to my training with Xccelerate, I specialised in content developement, digital marketing, public relations
                        and social media management. I've recently moved back to Hong Kong after spending the past 4 years working in
                        London to fulfill a long-time goal of mine of becoming a developer. I got passionate about coding fairly quickly, and 
                        what continues to excites me most about coding is the ability to craft something novel each day.
                        <br/><br/>
                        Having achieved a Bachelors degree in Journalism and Masters in Marketing, Communications
                        and Advertising, I have accumulated over six years of experience in developing content, both online and offline,
                        and managing social media throughout my tenure as editor and writer of MadbuzzHK, a Hong Kong-based online
                        entertainment magazine that I co-founded with two friends, a marketing executive for
                        Blockchain-VR start-up ImmVRse and most recently as an account executive for London-based PR agency Elate
                        Communications.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
