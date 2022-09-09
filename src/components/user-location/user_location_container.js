import { useEffect, useState } from "react"
import UserLocationIP from "./user_location"
import axios from "axios"
import SearchingForm from "./searching_form/searching_form"
import ListOfSearch from "./searching_list/searching_list"

const UserLocationIpContainer = () => {  
const [state, setState] = useState (
    {
        userLocation: [],
        zoom: 10,
        myLatitude: 0,
        myLongtitude: 0,
        newIp: '',
        userRequest:[]
    }
  )

  const [text, setText] = useState('')
  console.log(state)
  console.log(text)
  
  useEffect(
    () => {
      axios
        .get(`http://api.ipstack.com/${state.newIp ? state.newIp : 'check'}?access_key=b1b1f92983f5893c53ffa1816c5a48b`)
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
                    setText('')
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
            console.log(response)
            console.log(state)
            }
        )
        .catch(error => {
            console.log('wrong IP')
        })
    }, [state.newIp])
    return <>
    <div className='App__LeftBar'>
        <ListOfSearch state={state} />
    </div>
    <div className='App__Container'>
        <div className='App__Container__Content'>
            <UserLocationIP state={state} myLoc={true} lat={state.myLatitude} lng={state.myLongtitude}/>
        </div>
        <div className='App__Container__Form'>
            <SearchingForm setText={setText} text={text} setState={setState} state={state}/>
        </div>
        <div className='App__Container__Content'>
            <UserLocationIP state={state} lat={state.myLatitude} lng={state.myLongtitude}/>
        </div>
    </div>
    </>
}

export default UserLocationIpContainer
