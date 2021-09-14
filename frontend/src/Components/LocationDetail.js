import React from 'react'
import { useState, useEffect } from 'react'
import CommentsList from './CommentsList'
import axios from 'axios'

const LocationDetail = ({ match }) => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get(`https://relocate-be.herokuapp.com/location/${match.params.id}`)
        .then(res => setLocation(res.data));
    }, []) 

    return (
        <div>
        <div className="location-detail">
            <div className="info-container">
                <h3 className="location-name detail-name">{location.name}</h3>
                <span className="location detail-location">{location.city}, {location.state}</span>
                <p>{location.description}</p>
            </div>
            <div className="map-container">
                <iframe className="google-map" src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location.name},${location.city}+${location.state}`}></iframe>
            </div>
        </div>
        <div className="comments-list">
            <CommentsList key={location.id} location={location}/>
        </div>
        </div>
    )
}

export default LocationDetail