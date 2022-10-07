import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [books, setBooks] = useState('')
    const [rating, setRating] = useState('')
    const { authors, setAuthors } = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            firstName,
            lastName,
            age,
            books,
            rating
        })
            .then(res => {
                console.log(res.data)
                setAuthors([...authors, res.data])
                nav('/')
            })
            .catch(err => { setErrors(err.response.data.err.errors) })
    }

    return (
        <div className='container-fluid bg-secondary'>
            <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
                <h1 style={{color:'white'}}>Add an Author?</h1>
                <Link to={'/'}>Back to list</Link>
                <h4>
                    <label style={{color:'white'}}>First Name</label><br />
                    <div style={{color:'red'}}>
                        {
                            errors.firstName && <p>{errors.firstName.message}</p>
                        }
                    </div>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </h4>
                <h4>
                    <label style={{color:'white'}}>Last Name</label><br />
                    <div style={{color:'red'}}>
                    {
                        errors.lastName && <p>{errors.lastName.message}</p>
                    }
                    </div>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </h4>
                <h4>
                    <label style={{color:'white'}}>Age</label><br />
                    <div style={{color:'red'}}>
                    {
                        errors.age && <p>{errors.age.message}</p>
                    }
                    </div>
                    <input type="number" onChange={(e) => setAge(e.target.value)} />
                </h4>
                <h4>
                    <label style={{color:'white'}}>Books</label><br />
                    <div style={{color:'red'}}>
                    {
                        errors.books && <p>{errors.books.message}</p>
                    }
                    </div>
                    <input type="text" onChange={(e) => setBooks(e.target.value)} />
                </h4>
                <h4>
                    <label style={{color:'white'}}>Rating</label><br />
                    <div style={{color:'red'}}>
                    {
                        errors.rating && <p>{errors.rating.message}</p>
                    }
                    </div>
                    <input type="number" onChange={(e) => setRating(e.target.value)} />
                </h4>
                <input className='btn btn-success' type="submit" value={"Create"} />

            </form>
        </div>
    )
}

export default AuthorForm