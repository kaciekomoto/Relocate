import React from 'react'
import { useState, useEffect } from 'react'
import CommentsList from './CommentsList'
import GoogleMap from './GoogleMap'
import axios from 'axios'

const LocationDetail = ({ match }) => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get(`/location/${match.params.id}`)
        .then(res => setLocation(res.data));
    }, []) 

    return (
        <div>
        <div className="location-detail">
            <div className="info-container">
                <h3 className="location-name">{location.name}</h3>
                <span className="location">{location.city}, {location.state}</span>
                <p>{location.description}</p>
            </div>
            <div className="map-container">
                <GoogleMap key={location.id} location={location}/>
            </div>
        </div>
        <div className="comments-list">
            <CommentsList key={location.id} location={location}/>
        </div>
        </div>
    )
}

export default LocationDetail

// ({
//     apiKey: 'GOOGLE_API_KEY'
//   })(GoogleMap);

// {location.id == comment.location_id ?
// <CommentsList comment={comment}/> :
// <p>no comments yet</p>
// }


//USED FETCH
// fetch(`/location/`, {
//     'method':'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         //auth goes here later
//     }
// })
// .then((res) => res.json())
// .then(res => setLocation(res))
// .catch(err => console.log(err))