import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {users,setUsers} = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email,
            password,
        },{withCredentials:true, credentials:'include'})
            .then(res => {
                console.log(res.data)
                nav('/')
            })
            .catch(err => {
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div className='container-fluid bg-secondary'>
        <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
            <h1 style={{color:'lightblue', }}>User Authentification</h1>
            <h3 style={{color:'white'}}>Login</h3>
            <p style={{color:'red'}}>* required</p>
            {/* <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link> */}
            <h4>
                <label style={{color:'white'}}>* Email</label><br />
                <div style={{color:'red'}}>
                {
                    errors.email && <p>{errors.email.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Password</label><br />
                <div style={{color:'red'}}>
                {
                    errors.password && <p>{errors.password.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </h4>
            <input className='btn btn-success' type="submit" value={"Login"} />

        </form>
    </div>
    )
}

export default Login