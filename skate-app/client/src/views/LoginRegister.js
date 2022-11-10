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
    })

    return (
        <div>
            <div id='body'>
                <div className='container-fluid'>
                    <h1 className='display-1 text-light'>The <span className='text-dark' style={{ fontSize: '16px', textAlign: 'center' }}>*skate</span> Video Vault</h1>
                    <p className='text-white text-end col-12 m-1'>{currentDate}</p>
                    <p className='text-white text-end col-12 m-1'>{date.toLocaleTimeString()}</p>
                </div>
            </div>
            {
                !loggedIn ? <><NavLink style={{ color: 'white', marginRight: '10px' }} to={'/login'}>Login</NavLink><NavLink style={{ color: 'white', marginLeft: '10px' }} to={'/register'}>Register</NavLink></> : null
            }
            <Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default LoginRegister