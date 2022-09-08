import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './maps.css'


const Map = (props) => {

const center = {lat: props.lat, lng: props.lng}
const zoom = props.zoom

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB_wiXGW2a3kMYvRSP-U5Q3R-o9wWrUXtM"
  })

const [map, setMap] = useState(null)

const onLoad = useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds(center)
    // map.fitBounds(bounds)
    map.setZoom(zoom)
    setMap(map)
}, [])
const onUnmount = useCallback(function callback(map) {
    setMap(null)
}, [])

  return isLoaded ? (
      <GoogleMap
        
        mapContainerClassName='map'
        center={center}
        onLoad={onLoad}
        zoom={zoom}
        onUnmount={onUnmount}
        
      >
        {}
        <Marker position={{lat: props.lat, lng: props.lng}}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)