import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import YoutubeEmbed from '../YoutubeEmbed';

const Baker = (props) => {
    const { users, setUsers, id, videos, setVideos } = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allVideos', { withCredentials: true, credentials: 'include' })
            .then((res) => {
                console.log(res.data)
                setVideos(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='bg-white container-fluid'>
            <div className='p-3'>
                <img className='w-50 h-50' src={require('../images/api8l4tqq__06822.webp')} alt='baker' />
            </div>
            <div className='d-flex flex-wrap'>
            {
                    videos.filter(video => video.company === 'Baker').map((video, index) => {
                        return <div key={index}>
                            <Card className='m-2 bg-light' style={{ width: '18rem' }}>
                                <Card.Header>{video.title}</Card.Header>
                                <Card.Subtitle className='bg-light bg-gradient m-2'><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg> {video.creator}</Card.Subtitle>
                                <div className='d-flex' style={{marginTop: '-60px', marginBottom: '-10px'}}>
                                    <Card.Body>
                                        <div className='container-fluid'>
                                            <YoutubeEmbed videos={video} url={video.link} />
                                            <Link to={`/video/${video._id}`}><Button className='m-3' variant="dark">Watch Here</Button></Link>
                                        </div>
                                    </Card.Body>
                                </div>
                            </Card>
                            </div>
                    })
                }
                </div>
        </div>
    )
}

export default Baker