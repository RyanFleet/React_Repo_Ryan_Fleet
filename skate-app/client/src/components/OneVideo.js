import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import YoutubeEmbed from './YoutubeEmbed'

const OneVideo = () => {
    const { id } = useParams()
    const [videos, setVideos] = useState([])

    const nav = useNavigate()

    let fixedDate = videos.date


    useEffect(() => {
        axios.get(`http://localhost:8000/api/video/${id}`, { withCredentials: true, credentials: 'include' })
            .then(res => {
                setVideos(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])

    const deleteVideo = (id) => {
        axios.delete(`http://localhost:8000/api/video/${id}`, { withCredentials: true, credentials: 'include' })
            .then(res => {
                nav('/')
                setVideos(videos.filter(video => video._id !== id))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container-fluid bg-white'>
            <div className='text-start ps-5 mt-5'>
                {
                    videos.company === 'Palace' && <Link className='' to={'/palace'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'User' && <Link className='' to={'/users/vids'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Almost' && <Link className='' to={'/almost'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Baker' && <Link className='' to={'/baker'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Converse-Cons' && <Link className='' to={'/converse'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Welcome' && <Link className='' to={'/welcome'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Creature' && <Link className='' to={'/creature'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Santa Cruz' && <Link className='' to={'/santacruz'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Independent' && <Link className='' to={'/independent'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 12 12">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
                {
                    videos.company === 'Bronze 56k' && <Link className='' to={'/bronze56k'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="bi bi-arrow-left mb-3 me-5" viewBox="0 0 14 14">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg></Link>
                }
            </div>


            <h1 className='p-5 display-4'>{videos.title}</h1>
            <span id='body' className="placeholder col-12 mb-5 mt-5 placeholder-xs"></span>
            <Accordion className='container-fluid w-50'>
                <Accordion.Item className='item' eventKey="0">
                    <Accordion.Header><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>  Description</Accordion.Header>
                    <Accordion.Body id='body' className='text-dark'>
                        {videos.description}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='item' eventKey="1">
                    <Accordion.Header><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                    </svg> Date</Accordion.Header>
                    <Accordion.Body id='body' className='text-dark'>
                        {fixedDate}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='item' eventKey="2">
                    <Accordion.Header><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg> Creator</Accordion.Header>
                    <Accordion.Body id='body' className='text-dark'>
                        {videos.creator}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <YoutubeEmbed videos={videos} url={videos.link}/>

            <h6 className='mt-5' >Youtube Link: <br></br><button type='button' className='btn btn-link'><a className='text-secondary' href={videos.link}>{videos.link}</a></button></h6>
            <div className='mb-3 mt-3'>
                <button className='btn btn-outline-danger btn-sm m-3' onClick={(e) => { deleteVideo(id) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg></button>
                <Link className='btn btn-outline-success btn-sm m-3' to={`/video/${id}/edit`}>Edit</Link>
            </div>
        </div>
    )
}

export default OneVideo