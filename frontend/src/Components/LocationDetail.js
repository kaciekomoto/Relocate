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
            <p>{location.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.description}</p>
            <GoogleMap key={location.id} location={location}/>
            <CommentsList key={location.id} location={location}/>
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