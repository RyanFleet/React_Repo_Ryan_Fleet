import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Main = (props) => {
    const { users, setUsers, loggedIn, setLoggedIn } = props

    return (
        <div>
            <div style={{}} className='container-fluid d-flex w-50 bg-dark'>
                <h3 className='pt-3' style={{ color: 'white' }}>The best place to find <span style={{ fontSize: '10px', color: 'lightblue' }}>*Almost</span> every skateboarding video!</h3>
                <p className='p-3' style={{ color: 'white' }}>Use the links above to navigate videos!</p>
            </div>
        </div>
    )
}

export default Main