import React from 'react'
import { useState, useEffect } from 'react'
import CommentsList from './CommentsList'

const LocationDetail = ({ match }) => {
    const [location, setLocation] = useState([])


    useEffect(() => {
        fetch(`/location/${match.params.id}`)
        .then((res) => res.json())
        .then(res => setLocation(res))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <p>{location.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.description}</p>
            <CommentsList key={location.id} location={location}/>
        </div>
    )
}

export default LocationDetail

// {location.id == comment.location_id ?
// <CommentsList comment={comment}/> :
// <p>no comments yet</p>
// }