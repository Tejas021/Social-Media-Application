import React from 'react'
import SingleEvent from './SingleEvent'
import {useEffect} from "react"
const Event = () => {
// useEffect(()=>{
//     fetch()
// })
    return (
        <div>
            {/* Hero Image
            with caption as upcoming event
            event cards */}

            <h1 className="text-light">Upcoming Events</h1>
            <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/>
            
        </div>
    )
}

export default Event
