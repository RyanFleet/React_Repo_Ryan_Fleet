import React, { useState, useRef } from "react";
import Links from "./links/Links";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';


const Contact = (props) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div>
            <div className="fadeInPage">
                <div className="contactPage">
                    <h1 className="display-1">Contact Info</h1>
                    <div className="d-flex">
                        <Button className="" variant="dark" ref={target} onClick={() => setShow(!show)}>
                                <AiOutlineMail /> Email
                            </Button>
                            <Overlay target={target.current} show={show} placement="right">
                                {({
                                    placement: _placement,
                                    arrowProps: _arrowProps,
                                    show: _show,
                                    popper: _popper,
                                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                                    ...props
                                }) => (
                                    <div
                                        {...props}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: '#8e8d8d',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: 3,
                                            ...props.style,
                                        }}
                                    >
                                        ryanfleeter24@gmail.com
                                    </div>
                                )}
                            </Overlay>
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