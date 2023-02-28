import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Logout = (props) => {
  const { users, setUsers, id, loggedIn, setLoggedIn } = props
  const nav = useNavigate()

  const logoutHandle = (e) => {
    // e.preventDefault()
    axios.get('http://127.0.0.1:8000/api/logout', { withCredentials: true, credentials: 'include' })
      .then((res) => {
        console.log('logged out')
        setLoggedIn(false)
        nav('/login')
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div>  
      <Link onClick={logoutHandle} id='logout' to={'/logout'}><div className='d-flex flex-row align-items-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unindent" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8Z" />
        <path fillRule="evenodd" d="M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z" /></svg> Logout</div></Link>
    </div>
  )
}

export default Logout