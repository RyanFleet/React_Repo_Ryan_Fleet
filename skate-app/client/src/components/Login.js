import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, NavLink, useParams } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {id} = useParams()

    const { users, setUsers, loggedIn, setLoggedIn } = props;
    const nav = useNavigate()

    const [errors, setErrors] = useState({})
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password,
        }, { withCredentials: true, credentials: 'include' })
            .then(res => {
                console.log(res.data)
                // setUsers([...users, res.data])
                setLoggedIn(true)
                nav(`/`)
            })
            .catch(err => {
                if (err.response.data.errors === undefined) {
                    setEmailErr('Invalid Email / Password. User not found.')
                    setPasswordErr('Password not found.')
                }
                if(err.response.data === 'Bad Request'){
                    console.log('No User Found!!')
                }
                console.log(err.response)
                setErrors(err)
            })
    }


    return (
        <div id='body2' className='container-fluid bg-white p-3'>
            <form onSubmit={Submit} className='form-control form-floating form-control-lg bg-dark'>
                <h3 className='display-6' style={{ color: 'lightblue' }}>Login</h3>
                <p className='text-start p-2' style={{ color: 'red' }}>* Required</p>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        emailErr ?
                            <div className='form-floating'>
                                <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='w-50 text-danger'>* Email is Required!</label><br />
                            </div>
                            :
                            <div className='form-floating'>
                                <input className="form-control " id="floatingInputValue" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{ color: 'red' }}>*</span> Email</label><br />
                            </div>
                    }
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        passwordErr ?
                            <div className='form-floating'>
                                <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='w-50 text-danger'>* Password is Required!</label><br />
                            </div>
                            :
                            <div className='form-floating'>
                                <input className="form-control " id="floatingInputValue" placeholder="Password" type="text" onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{ color: 'red' }}>*</span> Password</label><br />
                            </div>
                    }
                </div>
                <input className='btn btn-success' type="submit" value={"Login"} />
            </form>
        </div>
    )
}

export default Login