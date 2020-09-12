import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Select = ({ setYears }) => {

    const [options,setOptions] = useState([])

    useEffect(() => {

        let yearOption = []
        for (let i = 2006; i <= 2021; i++) {
            yearOption.push(i)
        }
        setOptions(yearOption)

    },[])


    const selectClick = (e) => {
        setYears(e.target.value)
    }



    return (
        <>
        <select className='form-control' onChange={selectClick}>
            <option>Show launches...</option>
            {options.map(el => <option key={el} value={el}>{el}</option>)}
        </select>
        </>
    )
}

export default Select