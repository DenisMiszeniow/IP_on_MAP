import { useEffect, useState } from "react"
import UserLocationIP from "./user_location"
import axios from "axios"
import SearchingForm from "../searching_form/searching_form"
import styles from './user_location.module.css'
import ListOfSearch from "../searching_list/searching_list"

const UserLocationIpContainer = (props) => {  
const [state, setState] = useState (
    {
        userLocation: [],
        zoom: 10,
        myLatitude: 0,
        myLongtitude: 0,
        newIp: '',
        text: '',
        userRequest:[]
    }
  )
  
  useEffect(
    () => {
      axios
        .get(`http://api.ipstack.com/${state.newIp ? state.newIp : 'check'}?access_key=1166efc6e51bb0ee260f0a48193787b5`)
        .then(response => {
            const myNewData = response.data
            const newState = {...state}
            
            const newUserLocation = {
                myLatitude: myNewData.latitude, 
                myLongtitude: myNewData.longitude,
                myIp: myNewData.ip, 
                myCity: myNewData.city, 
                myCountry: myNewData.country_name, 
                myCountryCode: myNewData.country_code,
            }
            const newUserLocationWrongIp = {
                myLatitude: 0, 
                myLongtitude: 0,
                myIp: 'WRONG REQUEST', 
                myCity: '-----------', 
                myCountry: '----------', 
                myCountryCode: false,
                myRequest: newState.newIp
            }
           
            if (!myNewData.error) {
                newState.userLocation.unshift(newUserLocation)
                newState.myLatitude = myNewData.latitude
                newState.myLongtitude = myNewData.longitude
                newState.text = ''
            } else {
                newState.userLocation.unshift(newUserLocationWrongIp)
            }
            newState.userRequest.unshift(newState.newIp)
            setState(newState)
            }
        )
        .catch(error => {
            console.error(error)
        })
    }, [state.newIp])
    return <>     
        {!props.myLoc && <SearchingForm setState={setState} state={state}/>}
        <UserLocationIP state={state} myLoc={props.myLoc}/>
        {!props.myLoc && <><ListOfSearch state={state} /></>} 
    </>
}

export default UserLocationIpContainer
