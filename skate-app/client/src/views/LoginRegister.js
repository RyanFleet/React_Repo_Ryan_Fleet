import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import '../App.css'
import Logout from '../components/Logout'


const LoginRegister = (props) => {
    const { users, setUsers, loggedIn, setLoggedIn } = props

    var currentDate = new Date().toDateString()
    var [date, setDate] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    }) // no dependency array so time loops infinitely

    return (
        <div>
            <div className='container-fluid'>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                    <div className='main'>
                        <h1 id='videoVault' className='display-3 text-white'>The <span style={{color:'black', fontSize: '16px', textAlign: 'center' }}>*skate</span> Video Vault</h1>
                        <div className='second'>
                            <p style={{ fontSize: '16px' }} className='col-12 m-1'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg> {currentDate}</p>
                            <p style={{ fontSize: '16px' }} className='row-10 m-1'> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg> {date.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex container-fluid flex-column text-start'>
                    <Logout className='m-1' loggedIn={loggedIn} setLoggedIn={setLoggedIn} to={"/"} />
                    <div className='m-2'>
                        {
                            !loggedIn ? <><NavLink className={'login'} style={{ marginRight: '10px' }} to={'/login'}>Login</NavLink><NavLink className={'logout'} style={{ marginLeft: '10px' }} to={'/register'}>Register</NavLink></> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister