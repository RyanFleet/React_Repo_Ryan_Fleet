import React from "react";
import Links from "./links/Links";
import Music from "./Music";
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
//fonts
import "./fonts/StanderdfreeRegular-X3KK2.otf"
import { FaSnowboarding } from "react-icons/fa";
import { CgMusic } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { TbSkateboard } from "react-icons/tb";

import { DiPython } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";


const MainPage = (props) => {
    const handScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <>
            <div className="mainPage">
                <div>
                    <div className="">
                        <div className="fadeInPage">
                            <div className="ryanFleet">
                                <h1 className="">Ryan Fleet</h1>
                                <h3>Full Stack Web Developer</h3>
                                <div className="icons d-flex justify-content-around">
                                    <FaSnowboarding className="snowboarder" />
                                    <TbSkateboard className="snowboarder" />
                                    <CgMusic className="snowboarder" />
                                    <IoGameController className="snowboarder" />
                                </div>
                            </div>
                            <div className="myDescription">
                                <h3 className="">A little about me...</h3>
                            </div>
                            <div className="firstPic row row-cols-1 row-cols-md-2 g-5">
                                <div className="col">
                                    <img className="homeImgs card card-img" src={require('./photos/IMG_2441 (1).jpg')} alt="Me" />
                                </div>
                                <div className="col">
                                    <h4>My name is Ryan Fleet and I am from Edmond, OK
                                        looking to get into the web development field. I
                                        have a passion for software development however in my free time, I
                                        enjoy skateboarding, snowboarding, playing video
                                        games, and even making my own music.
                                    </h4>
                                    <Music />
                                </div>
                            </div>
                            <div className="secondPic row row-cols-1 row-cols-md-2 g-5">
                                <div className="col">
                                    <h4>Studying at Coding Dojo's accelerated program
                                        was exactly what I needed to get my foot in the
                                        door with development. Having now graduated,
                                        I hope to continue my learning and keep creating unique applications.
                                    </h4>
                                    <h4 className="pt-5">
                                        Below are a few languages learned:
                                    </h4>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="languages col">
                                            <DiPython className="snowboarder" />
                                            <h5>Python</h5>
                                        </div>
                                        <div className="languages col">
                                            <SiFlask className="snowboarder" />
                                            <h5>Flask</h5>
                                        </div>
                                        <div className="languages col">
                                            <DiJava className="snowboarder" />
                                            <h5>Java</h5>
                                        </div>
                                        <div className="languages col">
                                            <SiSpring className="snowboarder" />
                                            <h5>Spring</h5>
                                        </div>
                                        <div className="languages col">
                                            <DiReact className="snowboarder" />
                                            <h5>React</h5>
                                        </div>
                                        <div className="languages col">
                                            <FaNode className="snowboarder" />
                                            <h5>NodeJs</h5>
                                        </div>
                                        <div className="languages col">
                                            <SiMysql className="snowboarder" />
                                            <h5>MySql</h5>
                                        </div>
                                        <div className="languages col">
                                            <SiMongodb className="snowboarder" />
                                            <h5>Mongodb</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <img className="homeImgs card card-img" src={require('./photos/IMG_2518.jpg')} alt="MeAndGf" />
                                </div>
                            </div>
                            <div className="thirdPic row row-cols-1 row-cols-md-2 g-5">
                                <div className="col">
                                    <img className="homeImgs card card-img" src={require('./photos/FullSizeRender (1).jpg')} alt="Me" />
                                </div>
                                <div className="col">
                                    <h4>
                                        I have a few of my projects showcased here as well.
                                        Just use the navigation bar at the top to check them
                                        out!
                                    </h4>
                                    <div className="scrollToTop">
                                        <button className="arrowA text-dark"
                                            onClick={handScrollToTop}>
                                            <BiUpArrowAlt className="topScrollArrow" />
                                            <p>Back To Top</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Links /></div>
        </>
    )
}

export default MainPage