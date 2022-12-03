import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

    return (
        <div className='bg-light d-flex flex-wrap'>
            <div className='pb-4'></div>
            {
                videos.filter(video => video.company === 'User').map((video, index) => {
                    return <div key={index}>
                        <Card className='m-2 bg-light' style={{ width: '14rem' }}>
                            <Card.Header>{video.title}</Card.Header>
                            <Card.Footer className='bg-light bg-gradient'>Made By {video.creator}</Card.Footer>
                            <Card.Body>
                                <Link to={`/video/${video._id}`}><Button variant="dark">Watch</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                })
            }
        </div>
    )
}

export default UserVideos