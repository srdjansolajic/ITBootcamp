import React from 'react'
import Find from './Find'

const SearchUser = ({ user, filter, setFilter }) => {

    let tmp = user.filter(el => el.first_name.toLowerCase().includes(filter.toLowerCase()) || el.last_name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <input type='text' onChange={(e) => setFilter(e.target.value)}/>
            {tmp.length > 5 ? null : tmp.map(user => <Find key={user.id} id={user.id} user={user} />)}
        </div>
    )
}

export default SearchUser