import React, { Component } from 'react';
import { Map } from 'google-maps-react';

const GoogleMap = ({ location }) => {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyDeq68VFUqjqm7Mr2WXUQ2YCxxWXvevEm4"
    //   })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
    
    
    return (
        <div>
            <h4>Google Map Here</h4>
            <iframe className="Map" src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${location.name},${location.city}+${location.state}`}>
            {console.log(process.env.REACT_APP_GOOGLE_API_KEY)}
            </iframe>
        </div>
    )
}

export default GoogleMap
