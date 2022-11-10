import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react'




const DashboardLinks = (props) => {
    const { setLoggedIn, loggedIn } = props

    return (
        <div>
            <div className='bg-dark container-fluid'>
                {
                    loggedIn && <><h4 id='body' className='smallLine w-50 container-fluid'>________________________</h4>
                        <NavLink style={{ color: 'lightgrey', marginRight: '10px' }} to={'/almost'}>Almost</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginRight: '10px' }} to={'/baker'}>Baker</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/palace'}>Palace</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/converse'}>Converse-Cons</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/welcome'}>Welcome</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/creature'}>Creature</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/santacruz'}>Santa Cruz</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/independent'}>Independent</NavLink>
                        <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/bronze56k'}>Bronze 56k</NavLink>
                        <br></br>
                        <div className='p-3 mb-2'>
                            <NavLink style={{ color: 'lightgrey', marginLeft: '10px' }} to={'/users/vids'}><svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg> User's Submissions</NavLink>
                            <div className='text-end'>
                                <div className='text-light'><p>Add your own video <Link className='text-light' style={{ textDecorationColor: 'lightblue' }} to={'/addVideo'}>Here</Link></p></div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default DashboardLinks