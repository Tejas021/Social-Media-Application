import React from 'react'
import SingleEvent from './SingleEvent'
import {useEffect,useState} from "react"

const Event = () => {
    const [events,setEvents]=useState([])
useEffect(()=>{
    fetch("http://localhost:5000/get-events").then(res=>res.json()).then(res=>setEvents(res))
})
    return (
        <div>
            {/* Hero Image
            with caption as upcoming event
            event cards */}

            <h1 className="text-light">Upcoming Events</h1>
            {events.map(e=><SingleEvent event={e} key={e._id}/>)}
            {/* <SingleEvent/>
            <SingleEvent/>
            <SingleEvent/> */}
            
        </div>
    )
}

export default Event
