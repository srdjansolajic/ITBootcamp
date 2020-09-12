import React from 'react'

const Launches = ({ launch, years }) => {

    return (
        <>
        <div className='launch-list'>
        {launch.filter(el => years === 'Show launches...' ? el : el.launch_year.includes(years)).map(el => 
            <div key={el.flight_number} className='launch'>
                <div className='inner-div-0'>
                    <img src={el.links.mission_patch} alt={el.mission_name} />
                </div>
                <div className='inner-div-1'>
                    <span>{el.rocket.rocket_name}</span>
                </div>
                <div className='inner-div-2'>
                    <span>{el.launch_year}</span>
                </div>
            </div>
      )}
      </div>
        </>
    )
}

export default Launches