import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
const UpdateVideo = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = useState('')
    const [creator, setCreator] = useState('')
    const [company, setCompany] = useState('')

    const { videos, setVideos, users, setUsers } = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/video/${id}`, { withCredentials: true, credentials: 'include' })
            .then(res => {
                setTitle(res.data.title)
                setDescription(res.data.description)
                setLink(res.data.link)
                setDate(res.data.date)
                setCreator(res.data.creator)
                setCompany(res.data.company)
            })
            .catch(err => console.log(err))
    }, [])

    const Submit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/video/${id}`, {
            title,
            description,
            link,
            date,
            creator,
            company
        }, { withCredentials: true, credentials: 'include' })
            .then(res => {
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
            .catch(err => { setErrors(err.response.data.err.errors) })
    }


    return (
        <div className='d-flex p-5 bg-white'>
            <form style={{backgroundColor: '#5e615f'}} onSubmit={Submit} className='form-control p-5'>
                <Link className='' to={'/users/vids'}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg><span style={{backgroundColor: '#5e615f'}} className="placeholder col-12 w-50"></span></Link>
                <h3 className='text-white'>Update {title}?</h3>
                <p className='text-start' style={{ color: 'red' }}>* Required</p>
                <div className='form-floating'>
                    {
                        errors.title ? <div className='form-floating'>
                            <input value={title} style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-danger'>* {errors.title.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input value={title} className="form-control " id="floatingInputValue" placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-dark'><span style={{ color: 'red' }}>*</span> Title</label><br />
                        </div>
                    }
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    <div className='form-floating'>
                        <input value={description} className="form-control " id="floatingInputValue" placeholder="Description" type="textarea" onChange={(e) => setDescription(e.target.value)} />
                        <label htmlFor="floatingInputValue" className='text-start text-dark'> Description</label><br />
                    </div>
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.link ? <div className='form-floating'>
                            <input value={link} style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Link" type="text" onChange={(e) => setLink(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-danger'>* {errors.link.message}</label><br />
                        </div> : <div className='form-floating'>
                            <input value={link} className="form-control " id="floatingInputValue" placeholder="Link" type="text" onChange={(e) => setLink(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-dark'><span style={{ color: 'red' }}>*</span> Link</label><br />
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
                            <select value={company} className='form-select' id='floatingSelect' onChange={(e) => setCompany(e.target.value)}>
                                <option defaultValue={''} placeholder='Pick User made or a Company'>Pick either User made or a Specific Company</option>
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
                            <label className='text-start form-label' htmlFor='floatingSelect'> <span style={{ color: 'red' }}>*</span> User / Company</label>
                        </div>
                    </div>
                </div>
                <div className='d-flex ml-2'>
                    <div className='form-floating mb-3 col-12 ml-5 text-start'>
                        <input className="form-control " id="floatingInput" type="date" onChange={(e) => setDate(e.target.value)} />
                        <label htmlFor='floatingInput' className='text-start form-label' style={{ color: 'black' }}>Date: </label>
                    </div>
                </div>
                <div className='form-floating' style={{ color: '' }}>
                    {
                        errors.creator ? <div className='form-floating'>
                            <input value={creator} style={{ color: 'grey' }} className="form-control is-invalid" id="floatingInputValue" placeholder="Made By" type="text" onChange={(e) => setCreator(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-danger'>* Made By is Required</label><br />
                        </div> : <div className='form-floating'>
                            <input value={creator} className="form-control " id="floatingInputValue" placeholder="Made By" type="text" onChange={(e) => setCreator(e.target.value)} />
                            <label htmlFor="floatingInputValue" className='text-start text-dark'><span style={{ color: 'red' }}>*</span> Made By</label><br />
                        </div>
                    }
                </div>
                <input className='btn btn-success' type="submit" value={"Update"} />
            </form>
        </div>
    )
}

export default UpdateVideo