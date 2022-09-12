import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styles from './maps.module.css'


const Map = (props) => {

  const center = {lat: props.lat, lng: props.lng}

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "MAP API"
  })

  const [map, setMap] = useState(null)

const onLoad = useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds(center)
    map.setZoom(props.zoom)
    setMap(map)
}, [])
const onUnmount = useCallback(function callback(map) {
    setMap(null)
}, [])
  return isLoaded ? (
      <GoogleMap
        
        mapContainerClassName={styles.map}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {}
        <Marker position={{lat: props.lat, lng: props.lng}}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)