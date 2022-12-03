import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const UpdateUser = (props) => {

    const {id} = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [job, setJob] = useState('')

    const {users,setUsers} = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`,{withCredentials:true, credentials:'include'})
            .then(res=>{
                setName(res.data.name)
                setEmail(res.data.email)
                setPassword(res.data.password)
                setJob(res.data.job)
            })
            .catch(err => console.log(err))
    },[])

    const Submit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/user/${id}`,{
            name,
            email,
            password,
            job
        },{withCredentials:true, credentials:'include'})
        .then(res=>{
            nav('/')
        })
        .catch(err => { setErrors(err.response.data.err.errors) })
    }


    return (
        <div className='container-fluid bg-secondary'>
        <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
            <div>
            <h1 style={{color:'lightblue'}}>User Authentification</h1>
            <h3 style={{color:'white'}}>Update {name}?</h3>
            </div>
            <p style={{color:'red'}}>* required</p>
            <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link>
            <h4>
                <label style={{color:'white'}}>* Name</label><br />
                <div style={{color:'red'}}>
                    {
                        errors.name && <p>{errors.name.message}</p>
                    }
                </div>
                <input name='name' value={name} type="text" onChange={(e) => setName(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Email</label><br />
                <div style={{color:'red'}}>
                {
                    errors.email && <p>{errors.email.message}</p>
                }
                </div>
                <input name='type' value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Password</label><br />
                <div style={{color:'red'}}>
                {
                    errors.password && <p>{errors.password.message}</p>
                }
                </div>
                <input  name='description' value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Job Title:</label><br />
                <div style={{color:'red'}}>
                {
                    errors.job && <p>{errors.job.message}</p>
                }
                </div>
                <input name='skill1' value={job} type="text" onChange={(e) => setJob(e.target.value)} />
            </h4>
            <input className='btn btn-success' type="submit" value={"Update"} />

        </form>
    </div>
    )
}

export default UpdateUser