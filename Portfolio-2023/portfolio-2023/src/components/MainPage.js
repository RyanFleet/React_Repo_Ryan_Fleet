import React from "react";
import Links from "./links/Links";
import Mountain from "./Mountain";


const MainPage = (props) => {
    return (
        <>
            <div className="">
                <div><Links /></div>
            </div>
            <div className="contact">
                <div>
                <h1>Ryan Fleet</h1>
                </div>
                
                <div>
                    <Mountain/>
                </div>
            </div>
        </>
    )
}

export default MainPage