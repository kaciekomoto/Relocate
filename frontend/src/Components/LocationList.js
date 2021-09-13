import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios'
import LocationDetail from './CommentsList'
import SearchBar from './SearchBar'


const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('/location/')
        .then(res => setLocations(res.data));
    }, []) 

    return (
        <div>
            <div className="hero-search-container">
                <SearchBar placeholder="Search by neighborhood, city, or state" locations={locations}/>
            </div>
        {locations.map(location => (
        <Link to={`/location/${location.id}`} key={location.id}>
            <div className="location-card">
                    <h1>{location.name}</h1>
                    <span className="location">{location.city}, {location.state}</span>
                    {/* <p>{location.description}</p> */}
            </div>
        </Link>
        ))}
        </div>
    )
}

export default LocationList