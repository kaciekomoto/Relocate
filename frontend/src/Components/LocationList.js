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
                <h2 className="hero-tagline">Lets get moving...</h2>
                <SearchBar placeholder="Search by neighborhood, city, or state" locations={locations}/>
            </div>
        <div className="locations-container">
            {locations.map(location => (
            <Link to={`/location/${location.id}`} key={location.id} className="location-card">
                <img src={location.image_url} alt={"location"+location.name} className="location-image"/>
                <h1 className="location-name" >{location.name}</h1>
                <span className="location">{location.city}, {location.state}</span>
            </Link>
            ))}
        </div>
        </div>
    )
}

export default LocationList