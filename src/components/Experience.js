import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2014-16</h3>
                        <p>During my time in university, I co-founded and ran an English online entertainment magazine called MadbuzzHK with two friends.
                        As an editor of the magazine, I developed, edited and moderated weekly articles for the website. 
                        Our magazine was selected as one of twelve finalists for the 2014 StartmeupHK Venture Programme (Out of 550 applicants and 47 countries).
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <p>After university, I worked as an marketing executive for London-based Blockchain-VR start-up, ImmVRse. I assisted in the development of their platform concept and company whitepaper, 
                            and subsequently helped execute their marketing and PR campaign leading up to their first ever Initial-Coin Offering(ICO). 
                            <br/><br />
                            My role was wide-ranging and consisted of producing and moderating weekly press releases and blog posts, managing and running advertising campaigns across all their social media accounts. 
                            I managed a community of 25K members on Telegram, liasing with potential partners, private investors and contributors, and also assisted in their exhibition at the Blockchain Summit 2018 and
                            a 3-week research project with Imperial College London on the impact of VR on neural activity.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <p>In 2019 I joined Elate Communications, a London-based PR/Communications agency. As an account executive, my primary role was to developed content including press releases,
                            news stories, articles, presentations, case studies and product pieces on behalf of clients, and subsequently pitching them to national, regional and trade journalists, across 
                            print, broadcast and online. 
                            <br /><br />
                            During my time with Elate, I also facilitated many interviews and editorial meetings with key journalists for clients spokespeople, in addition to handling clients' social
                            media accounts on Twitter, Facebook and LinkedIn, delivering analytics reports on traffic, engagement and follower figures.
                         </p>
                    </div>
                </div>
                 {/* - */}
                 <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-Present</h3>
                        <p>Halfway through 2020, I decided to move back to Hong Kong and made the decision to fulfil a long-time goal of mine and pursue a new career as a developer. 
                        <br /><br />
                        I completed Xccelerate's Full-Stack Software Development Bootcamp with no prior IT background and learnt technologies 
                        including JavaScript, HTML, CSS, jQuery, Bootstrap, Node.js, Express.js, PostgreSQL, Socket.io and React, in addition to completing 
                        several portfolio projects. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
