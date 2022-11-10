import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const UserVideos = (props) => {
    const {users,setUsers, id,videos,setVideos} = props
    var companyInput = videos.company

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
                <div className='pb-4'></div>
            {
                videos.filter(video => video.company === 'User').map((video, index) => {
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
                        <p id='body' className='smallLine w-25'></p>
                    </div>
                })
            }
        </div>
    )
}

export default UserVideos