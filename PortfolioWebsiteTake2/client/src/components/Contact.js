import React from "react";
import Links from "./links/Links";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


const Contact = (props) => {
    return (
        <div>
            <div className="fadeInPage">
                <div className="contactPage">
                    <h1 className="display-1">Contact Info</h1>
                    <div className="d-flex">
                        <AiOutlineMail className="snowboarder m-2" />
                        <h4 className="m-2">ryanfleeter24@gmail.com</h4>
                    </div>
                    <div className="contactIconDiv">
                        <div className="contactIconLinkDiv">
                            <a className="contactIconLink" href="https://www.linkedin.com/in/ryan-fleet-b61716249/"><AiOutlineLinkedin className="contactIcon" /></a>
                        </div>
                        <div className="contactIconGitDiv">
                            <a className="contactIconGit" href="https://github.com/RyanFleet"><AiOutlineGithub className="contactIcon" /></a>
                        </div>
                        <div className="contactIconInstaDiv">
                            <a className="contactIconInsta" href="https://www.instagram.com/ryvnfleet/"><AiOutlineInstagram className="contactIcon" /></a>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div><Links /></div>
        </div>
    )
}

export default Contact