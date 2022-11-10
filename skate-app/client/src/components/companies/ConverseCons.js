import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const ConverseCons = (props) => {
    const {users,setUsers, id,videos,setVideos} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allVideos',{withCredentials:true, credentials:'include'})
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
                <img className='w-25 h-50' src={require('../images/cons.webp')} alt='cons' />
            </div>
            {
                videos.filter(video => video.company === 'Converse-Cons').map((video, index) => {
                    return <div key={index}>
                        <table className='table table-secondary table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Created By
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link className='text-dark' to={`/video/${video._id}`}>{video.title}</Link>
                                    </td>
                                    <td>
                                        {video.creator}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 id='body' className='smallLine w-25'></h4>
                    </div>
                })
            }
        </div>
    )
}

export default ConverseCons