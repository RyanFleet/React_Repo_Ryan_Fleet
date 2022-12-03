import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserList = (props) => {
    const {users,setUsers, id} = props
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/allUsers',{withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log(res.data)
                // cant figure out the list by type
                // pets.sort((a, b) => a.res.data.type.localeCompare(b.res.data.type))
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        const logoutHandle = (e)=>{
            e.preventDefault()
            axios.get('http://localhost:8000/api/logout',{withCredentials:true, credentials:'include'})
            .then((res) => {
                console.log('logged out')
                nav('/login')
            })
            .catch((err) => {
                console.log(err);
            })
        }
        
        return (
            <div className='bg-secondary container-fluid'>
            <h1>Welcome to User Authentification!</h1>
            <div>
                <Link style={{color: 'lightblue'}} to={'/user/new'}>Add Users</Link>
                <br/>
                <Link style={{color: 'lightblue'}} to={'/register'}>Register</Link>
                <br/>
                <Link style={{color: 'lightblue'}} to={'/login'}>Login</Link>
                <br/>
                <Link onClick={logoutHandle} style={{color: 'lightblue'}} to={'/logout'}>Logout</Link>
            </div>
            <h3>People users have created:</h3>
            <br></br>
            {
                users.map((user, index) => {
                    return <div key={index}>
                        <table className='table table-dark table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link style={{color: 'lightblue'}} to={`/user/${user._id}`}>{user.name}</Link>
                                    </td>
                                    <td className='p-1'>
                                        <Link className='btn btn-outline-info btn-sm' to={`/user/${user._id}/edit`}>Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                })
            }
        </div>
    )
}

export default UserList