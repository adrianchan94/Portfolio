import React from 'react'
import { faBullhorn, faCode, faMailBulk, faPencilAlt} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faBullhorn} size="2x"/>
                                </div>
                                <h3>Public Relations</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faMailBulk} size="2x"/>
                                </div>
                                <h3>Digital Marketing</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faPencilAlt} size="2x"/>
                                </div>
                                <h3>Content Development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
