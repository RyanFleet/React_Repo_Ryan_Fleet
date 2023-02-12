import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Main = (props) => {
    return (
        <div>
            <div style={{}} className='container-fluid d-flex flex-column'>
                <h3 className='' style={{ color: 'white' }}>The best place to find <span style={{ fontSize: '10px', color: 'black' }}>*Almost</span> every skateboarding video!</h3>
                <p className='' style={{ color: 'white' }}>Use the links above to navigate videos!</p>
            </div>
        </div>
    )
}

export default Main