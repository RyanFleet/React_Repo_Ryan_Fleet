import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OneUser = () => {
    const { id } = useParams()
    const [users, setUsers] = useState([])

    const nav = useNavigate()

    const [liked,setLiked] = useState(false)
    const [likes,setLikes] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`,{withCredentials:true, credentials:'include'})
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    const deleteUsers = (id) => {
        axios.delete(`http://localhost:8000/api/user/${id}`,{withCredentials:true, credentials:'include'})
            .then(res => {
                alert(`${users.name} was successfully deleted!!`)
                nav('/')
                setUsers(users.filter(user => user._id !== id))
            })
            .catch(err => console.log(err))
    }
    const addLike = () =>{
        setLikes(+1)
        setLiked(true)
    }

    return (
        <div className='container-fluid bg-secondary'>
            <h2>Details for {users.name}:</h2>
            <p>Email: {users.email}</p>
            <p>Password: {users.password}</p>
            <p>Job Title: {users.job}</p>
            <p>{likes} like(s)</p>
            <button className='btn btn-danger btn-sm' onClick={(e) => { deleteUsers(id) }}>Delete {users.name}!</button>
            {
                liked ? <button className='btn btn-success btn-sm' onClick={e=>addLike(likes)} disabled>Like {users.name}</button> : 
                <button className='btn btn-success btn-sm' onClick={e=>addLike()}>Like {users.name}</button>
            }
            <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link>
        </div>
    )
}

export default OneUser