import React from "react";
import Links from "./links/Links";
import Mountain from "./Mountain";

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
                <h1 className="name">Ryan Fleet</h1>
                </div>
                <div>
                    <Mountain/>
                </div>
            </div>
        </>
    )
}

export default MainPage