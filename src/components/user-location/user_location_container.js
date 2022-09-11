import { useEffect, useState } from "react"
import UserLocationIP from "./user_location"
import axios from "axios"
import SearchingForm from "./searching_form/searching_form"
import ListOfSearch from "./searching_list/searching_list"
import styles from './user_location.module.css'

const UserLocationIpContainer = () => {  
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
        .get(`http://api.ipstack.com/${state.newIp ? state.newIp : 'check'}?access_key=0c473645023439454b2f0c4a23fc779b`)
        .then(response => {
            const myNewData = response.data
            const newState = {...state}
            if (!myNewData.error) {
                newState.userLocation.unshift(
                    {
                        myLatitude: myNewData.latitude, 
                        myLongtitude: myNewData.longitude,
                        myIp: myNewData.ip, 
                        myCity: myNewData.city, 
                        myCountry: myNewData.country_name, 
                        myCountryCode: myNewData.country_code,
                        }
                    )
                    newState.userRequest.unshift(newState.newIp)
                    newState.myLatitude = myNewData.latitude
                    newState.myLongtitude = myNewData.longitude
            } else {
                newState.userLocation.unshift(
                    {
                        myLatitude: 0, 
                        myLongtitude: 0,
                        myIp: 'WRONG REQUEST', 
                        myCity: '-----------', 
                        myCountry: '----------', 
                        myCountryCode: false,
                        myRequest: newState.newIp
                    }
                )
            }
            newState.userRequest.unshift(newState.newIp)
            setState(newState)
            console.log(myNewData)
            }
        )
        .catch(error => {
            console.error(error)
        })
    }, [state.newIp])

    return <>
    <div className={styles.App__LeftBar}>
        <ListOfSearch state={state} />
    </div>
    <div className={styles.App__Container}>
        <div className={styles.App__Container__Content}>
            <UserLocationIP state={state} myLoc={true}/>
        </div>
        <div className={styles.App__Container__Form}>
            <SearchingForm setState={setState} state={state}/>
        </div>
        <div className={styles.App__Container__Content}>
            <UserLocationIP state={state}/>
        </div>
    </div>
    </>
}

export default UserLocationIpContainer
