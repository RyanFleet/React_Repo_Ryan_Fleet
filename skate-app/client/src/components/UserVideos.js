import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const UserVideos = (props) => {
    const { users, setUsers, id, videos, setVideos } = props
    var companyInput = videos.company

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

    const [query, setQuery] = useState("") //for search bar

    const sortVideos = [...videos].sort((a, b) =>
        a.title > b.title ? 1 : -1)

    return (
        <div>
            <div>
                <div className='bg-white'>
                    <input className='mb-3 mt-3' placeholder="Search" onChange={e => setQuery(e.target.value)} />
                </div>
            </div>
            <div className='bg-light d-flex flex-wrap'>
                <div className='pb-4'></div>
                {
                    sortVideos.filter(vid => {
                        if (query === '') { //filter and below for search bar
                            return vid;
                        } else if (vid.title.toLowerCase().includes(query.toLowerCase())) {
                            return vid;
                        }
                    }).filter(video => video.company === 'User').map((video, index) => {
                        return <div key={index}>
                            <Card className='m-2 bg-light' style={{ width: '18rem' }}>
                                <Card.Header>{video.title}</Card.Header>
                                <Card.Footer className='bg-light bg-gradient'><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg> {video.creator}</Card.Footer>
                                <Card.Body>
                                    <Link to={`/video/${video._id}`}><Button variant="dark">Watch</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default UserVideos