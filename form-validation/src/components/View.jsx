import React from 'react'

const View = (props) => {
    const {users, newUser} = props;
    return (
        <div>
            {
                users.map((user,i)=>(
                    <div key={i}>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <h3>{user.email}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default View