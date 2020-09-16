import React from 'react'

const Find = ({ id, user, setUser }) => {

    const deleteUser = () => {

        let tmp = [...user]
        tmp.splice(tmp.findIndex(el => el.id === id),1)
        setUser(tmp)
         
      // Ne znam sto mi ne radi button, ako moze objasnjenje.... Hvala :)
     
    }

    return (
        <div>
            <p>{user.first_name} {user.last_name}</p>
            <button onClick={deleteUser}>X</button>
        </div>
    )
}

export default Find