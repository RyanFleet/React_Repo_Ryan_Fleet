import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { users, setUsers, loggedIn, setLoggedIn } = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const SubmitRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            userName,
            email,
            password,
            confirmPassword,
            loggedIn:true,
        }, { withCredentials: true, credentials: 'include' })
            .then(res => {
                setUsers([...users, res.data])
                console.log(users)
                setLoggedIn(true)
                nav('/')
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div id='body2' className='container-fluid bg-dark p-3'>
            <form style={{backgroundColor: '#5e615f'}} onSubmit={SubmitRegister} className='form-control form-floating form-control-lg'>
                <h3 className='display-6' style={{ color: 'white' }}>Sign Up!</h3>
                <p className='text-start p-2' style={{ color: 'red' }}>* Required</p>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.userName ? <div className='form-floating'>
                            <input style={{ color: 'grey'}} className="form-control is-invalid" id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUserName(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.userName.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="User Name" type="text" onChange={(e) => setUserName(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{color:'red'}}>*</span> User Name</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.email ? <div className='form-floating'>
                            <input style={{ color: 'grey'}} className="form-control is-invalid" id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.email.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{color:'red'}}>*</span> Email</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.password ? <div className='form-floating'>
                            <input style={{ color: 'grey'}} className="form-control is-invalid" id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.password.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{color:'red'}}>*</span> Password</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.confirmPassword ? <div className='form-floating'>
                            <input style={{ color: 'grey'}} className="form-control is-invalid" id="floatingInputValue" placeholder="Confirm Password" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.confirmPassword.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Confirm Password" type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{color:'red'}}>*</span> Confirm Password</label><br />
                        </div>
                    }
                </div>
                <input className='btn btn-dark' type="submit" value={"Register"} />
            </form>
        </div>
    )
}

export default Register