import React from "react";
import Links from "./links/Links";
import Mountain from "./Mountain";


const Contact = (props) => {
    return (
        <div>
            <div><Links /></div>
            <div className="contact">
                <h1>Contact Page</h1>
            </div>
            <div>
                    <Mountain/>
                </div>
        </div>
    )
}

export default Contact