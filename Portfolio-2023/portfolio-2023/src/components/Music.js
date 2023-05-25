import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import dontKnowYou from './music/DontKnowYou 132.mp3'
import extra from './music/ExtraExtra 90.mp3'
import justWaiting from './music/JustWaiting 125.mp3'
import knowBetter from './music/KnowBetter 160.mp3'
import myName from './music/MyName 136.mp3'
import odb from './music/ODB 155.mp3'
import studios from './music/Studios 128.mp3'
import talkAbout from './music/TalkAbout 128.mp3'



const Music = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="">
                <Button variant="dark" onClick={handleShow} className="me-2">
                    View Music
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Just a few songs</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="">
                            <div className="col">
                                <AudioPlayer
                                    header="Don't Know You"
                                    src={dontKnowYou}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="ExtraExtra"
                                    src={extra}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="Just Waiting"
                                    src={justWaiting}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="Know Better"
                                    src={knowBetter}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="My Name"
                                    src={myName}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="ODB"
                                    src={odb}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="Studios"
                                    src={studios}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                            <div className="col">
                                <AudioPlayer
                                    header="Talk About"
                                    src={talkAbout}
                                    customAdditionalControls={[]}
                                    customVolumeControls={[]}
                                    layout="horizontal-reverse"
                                    showJumpControls={false}
                                />
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </div>
    )
}

export default Music