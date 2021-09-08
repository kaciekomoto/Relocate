import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import LocationDetail from './CommentsList'

const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('/location/')
        .then(res => setLocations(res.data));
    }, []) 

    return (
        <div>
        {locations.map(location => (
        <Link to={`/location/${location.id}`} key={location.id}>
            <div className="card">
                    <div>
                        <h1>{location.name}</h1>
                        <p>{location.city}</p>
                        <p>{location.state}</p>
                        <p>{location.description}</p>
                    </div>
            </div>
        </Link>
        ))}
        </div>
    )
}

export default LocationList



//USED FETCH
//     fetch(`/location/`, {
//         'method':'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             //auth goes here later
//         }
//     })
//     .then((res) => res.json())
//     .then(res => setLocations(res))
//     .catch(err => console.log(err))