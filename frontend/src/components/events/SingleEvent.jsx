import React from 'react'

const SingleEvent = ({event}) => {
    return (
        <div>

            {/* 1.Photo
            2.Name
            3.Short Desc
            4.link(know more) */}


            <h2 className="text-light">{event.name}</h2>
            <h4 className="text-light">{event.description}</h4>
            
        </div>
    )
}

export default SingleEvent
