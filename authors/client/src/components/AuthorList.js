import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const AuthorList = (props) => {

    const { authors, setAuthors } = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then((res) => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthors(authors.filter(a => a._id !== id))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='bg-secondary container-fluid'>
            <h1>Welcome to Favorite Authors!</h1>
            <div>
                <Link to={'/create'}>Add Authors</Link>
            </div>
            <br></br>
            {
                authors.map((author, index) => {
                    return <div key={index}>
                        <table className='table table-dark table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        Author
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to={`/authors/${author._id}`}>{author.firstName} {author.lastName}</Link>
                                    </td>
                                    <td className='p-1'>
                                        <Link className='btn btn-outline-info btn-sm' to={`/edit/${author._id}`}>Edit</Link>
                                        <button className='btn btn-outline-danger btn-sm' onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
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

export default AuthorList