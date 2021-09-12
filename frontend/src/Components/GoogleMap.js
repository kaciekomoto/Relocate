import React, { Component } from 'react';
import { Map } from 'google-maps-react';

const GoogleMap = ({ location }) => {
    return (
        <div>
            {/* <h4>Google Map Here</h4>
            <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location.name},${location.city}+${location.state}`}>
            {console.log(process.env.REACT_APP_GOOGLE_API_KEY)}
            </iframe> */}
        </div>
    )
}

export default GoogleMap
