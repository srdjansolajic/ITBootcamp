import React from 'react'

const AllUsers = ({ user }) => {

    return (
        <div>
            {user.map(el => <p key={el.id}>{el.first_name} {el.last_name}</p>)}
        </div>
    )
}

export default AllUsers