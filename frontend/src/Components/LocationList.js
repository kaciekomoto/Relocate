import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LocationDetail from './CommentsList'

const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
    fetch('/location/')
    .then((res) => res.json())
    .then(res => setLocations(res))
    .catch(err => console.log(err))
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
