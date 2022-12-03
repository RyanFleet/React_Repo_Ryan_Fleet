import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [job, setJob] = useState('')

    const {users,setUsers} = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            name,
            email,
            password,
            confirmPassword,
            job,
        },{withCredentials:true, credentials:'include'})
            .then(res => {
                console.log(res.data)
                setUsers([...users, res.data])
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
            <h3 style={{color:'white'}}>Register an Account</h3>
            <p style={{color:'red'}}>* required</p>
            {/* <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link> */}
            <h4>
                <label style={{color:'white'}}>* Name</label><br />
                <div style={{color:'red'}}>
                    {
                        errors.name && <p>{errors.name.message}</p>
                    }
                </div>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </h4>
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
                <label style={{color:'white'}}>* Job Title</label><br />
                <div style={{color:'red'}}>
                {
                    errors.job && <p>{errors.job.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setJob(e.target.value)} />
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
            <h4>
                <label style={{color:'white'}}>* Confirm Password</label><br />
                <div style={{color:'red'}}>
                {
                    errors.confirmPassword && <p>{errors.confirmPassword.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </h4>
            <input className='btn btn-success' type="submit" value={"Create Account"} />

        </form>
    </div>
    )
}

export default Register