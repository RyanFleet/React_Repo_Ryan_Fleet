import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const VideoForm = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = useState('')
    const [creator, setCreator] = useState('')
    const [company, setCompany] = useState('')

    const { videos, setVideos, users, setUsers, } = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/video', {
            title,
            description,
            link,
            date,
            company,
            creator,
        }, { withCredentials: true, credentials: 'include' })
            .then(res => {
                console.log(res.data)
                setVideos([...videos, res.data])
                if (res.data.company === 'User') {
                    nav('/users/vids')
                }
                if (res.data.company === 'Palace') {
                    nav('/palace')
                }
                if (res.data.company === 'Almost') {
                    nav('/almost')
                }
                if (res.data.company === 'Baker') {
                    nav('/baker')
                }
                if (res.data.company === 'Converse-Cons') {
                    nav('/converse')
                }
                if (res.data.company === 'Welcome') {
                    nav('/welcome')
                }
                if (res.data.company === 'Creature') {
                    nav('/creature')
                }
                if (res.data.company === 'Santa Cruz') {
                    nav('/santacruz')
                }
                if (res.data.company === 'Independent') {
                    nav('/independent')
                }
                if (res.data.company === 'Bronze 56k') {
                    nav('/bronze56k')
                }
            })
            .catch(err => {
                setErrors(err.response.data.err.errors)
            })
    }

    return (
        <div className='d-flex p-5 bg-white'>
            <form onSubmit={Submit} className='form-control bg-dark p-5'>
                <Link className='' to={'/users/vids'}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg><span className="placeholder col-12 bg-dark w-50"></span></Link>
                <h1 className='text-success'>Video Info</h1>
                <p className='text-start' style={{ color: 'red' }}>* Required</p>
                <div className='form-floating'>
                    {
                        errors.title ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.title.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{ color: 'red' }}>*</span> Title</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating'>
                    <div className='form-floating'>
                        <input className="form-control " id="floatingInputValue" placeholder="Description" type="textarea" onChange={(e) => setDescription(e.target.value)} />
                        <label htmlFor="floatingInputValue" className='w-50 text-dark'> Description</label><br />
                    </div>
                </div>
                <div className='form-floating'>
                    {
                        errors.link ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Link" type="text" onChange={(e) => setLink(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* {errors.link.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Link" type="text" onChange={(e) => setLink(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{ color: 'red' }}>*</span>Youtube Link</label><br />
                        </div>
                    }
                </div>
                <div className='d-flex'>
                    <div className='form-floating mb-3 col-12 ml-5 text-start'>
                        <div style={{ color: 'red' }}>
                            {
                                errors.company && <p>{errors.company.message}</p>
                            }
                        </div>
                        <div className='form-floating'>
                            <select className='form-select' id='floatingSelect' onChange={(e) => setCompany(e.target.value)}>
                                <option defaultValue={''} placeholder='Pick User made or a Company'>Either User Made or a Specific Company</option>
                                <option value='User'>User made</option>
                                <option>------</option>
                                <option value='Almost'>Almost</option>
                                <option value='Baker'>Baker</option>
                                <option value='Palace'>Palace</option>
                                <option value='Converse-Cons'>Converse-Cons</option>
                                <option value='Welcome'>Welcome</option>
                                <option value='Creature'>Creature</option>
                                <option value='Santa Cruz'>Santa Cruz</option>
                                <option value='Independent'>Independent</option>
                                <option value='Bronze 56k'>Bronze 56k</option>
                            </select>
                            <label className='w-50 form-label' htmlFor='floatingSelect'> <span style={{ color: 'red' }}>*</span> User / Company</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex ml-2'>
                    <div className='form-floating mb-3 col-12 ml-5 text-start'>
                        <input className="form-control " id="floatingInput" type="date" onChange={(e) => setDate(e.target.value)} />
                        <label htmlFor='floatingInput' className='w-50 form-label' style={{ color: 'black' }}>Date: </label>
                    </div>
                </div>
                <div className='form-floating'>
                    {
                        errors.creator ? <div className='form-floating'>
                            <input style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Made By" type="text" onChange={(e) => setCreator(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-danger'>* Made By is Required</label><br />
                        </div> : <div className='form-floating'>
                            <input className="form-control " id="floatingInputValue" placeholder="Made By" type="text" onChange={(e) => setCreator(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='w-50 text-dark'><span style={{ color: 'red' }}>*</span> Made By</label><br />
                        </div>
                    }
                </div>
                <input className='btn btn-success' type="submit" value={"Create Video"} />
            </form>
        </div>
    )
}

export default VideoForm