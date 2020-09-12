import React from 'react'
import { getCompanyInfo } from '../services'
import { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {

    const [info,setInfo] = useState('')

    useEffect(() => {
        getCompanyInfo().then(res => {
            setInfo(res.data.name)
        })
    },[])

    return (
        <>
        <h1 style={{color:'white', textAlign:'center'}}>{info}</h1>
        </>
    )
}

export default Header