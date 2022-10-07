import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const UpdateAuthor = (props) => {

    const {id} = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [books, setBooks] = useState('')
    const [rating, setRating] = useState('')

    const [errors, setErrors] = useState({})

    const nav = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setAge(res.data.age)
                setBooks(res.data.books)
                setRating(res.data.rating)
            })
            .catch(err => console.log(err))
    },[])

    const Submit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            firstName,
            lastName,
            age,
            books,
            rating
        })
        .then(res=>{
            nav('/')
        })
        .catch(err => { setErrors(err.response.data.err.errors) })
    }


    return (
        <div className='container-fluid bg-secondary'>
        <h1 style={{color:'white'}}>Update an Author</h1>
        <Link to={'/'}>Back to list</Link>
        <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
            <h4 style={{color:'white'}}>
                <label>First Name</label><br />
                <div style={{color:'red'}}>
                        {
                            errors.firstName && <p>{errors.firstName.message}</p>
                        }
                    </div>
                <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </h4>
            <h4 style={{color:'white'}}>
                <label>Last Name </label><br />
                <div style={{color:'red'}}>
                        {
                            errors.lastName && <p>{errors.lastName.message}</p>
                        }
                    </div>
                <input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }} />
            </h4>
            <h4 style={{color:'white'}}>
                <label>Age </label><br />
                <div style={{color:'red'}}>
                        {
                            errors.age && <p>{errors.age.message}</p>
                        }
                    </div>
                <input type="number"
                    name="age"
                    value={age}
                    onChange={(e) => { setAge(e.target.value) }} />
            </h4>
            <h4 style={{color:'white'}}>
                <label>Books </label><br />
                <div style={{color:'red'}}>
                        {
                            errors.books && <p>{errors.books.message}</p>
                        }
                    </div>
                <input type="text"
                    name="books"
                    value={books}
                    onChange={(e) => { setBooks(e.target.value) }} />
            </h4>
            <h4 style={{color:'white'}}>
                <label>Rating </label><br />
                <div style={{color:'red'}}>
                        {
                            errors.rating && <p>{errors.rating.message}</p>
                        }
                    </div>
                <input type="number"
                    name="rating"
                    value={rating}
                    onChange={(e) => { setRating(e.target.value) }} />
            </h4>
            <input className='btn btn-success' type="submit" value={'Update'} />
        </form>
    </div>
    )
}

export default UpdateAuthor