import React from "react";
import Links from "./links/Links";
import Music from "./Music";
import Placeholder from 'react-bootstrap/Placeholder';
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
//fonts
import "./fonts/StanderdfreeRegular-X3KK2.otf"


const MainPage = (props) => {
    return (
        <>
            <div className="">
                <div><Links /></div>
            </div>
            <div className="contact">
                <div>
                    <div className="">
                        <h1 className="display-1">Ryan Fleet</h1>
                        <Placeholder xs={8} className="bg-success" />
                        <div>
                            <Placeholder xs={4} className="bg-success" />
                        </div>
                    </div>
                    <h3>Full-Stack Web Developer</h3>
                </div>
                <div style={{ paddingTop: '50px' }}>
                    <Music />
                </div>
            </div>
        </>
    )
}

export default MainPage