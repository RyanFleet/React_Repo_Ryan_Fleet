import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const OneAuthor = (props) => {
    const {id} = useParams()
    const [authors,setAuthors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            setAuthors(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])


    return (
        <div className='container-fluid bg-secondary'>
            <h2>{authors.firstName} {authors.lastName}</h2>
            <p>{authors.age} Years Old</p>
            <p>Books: {authors.books}</p>
            <p>Rating/10: {authors.rating}</p>
            <Link to={'/'}>Back to list</Link>
        </div>
    )
}

export default OneAuthor