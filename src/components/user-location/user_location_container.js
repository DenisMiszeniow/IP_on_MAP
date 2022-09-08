import { useEffect, useState } from "react"
import UserLocationIP from "./user_location"
import axios from "axios"
import SearchingForm from "../searching_form/searching_form"

const UserLocationIpContainer = ({search, myLoc, list}) => {  
const [state, setState] = useState (
    {
        userLocation: [],
        zoom: 10,
        myLatitude: 0,
        myLongtitude: 0,
        newIp: '',
    }
  )

  const [text, setText] = useState('')
  console.log(state)
  
  useEffect(
    () => {
      axios
        .get(`http://api.ipstack.com/${state.newIp ? state.newIp : 'check'}?access_key=b1b1f92983f5893c53ffa1816c5a48be`)
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
                        myCountryCode: myNewData.country_code
                        }
                    )
                    newState.myLatitude = myNewData.latitude
                    newState.myLongtitude = myNewData.longitude
            } else {
                newState.userLocation.unshift(
                    {
                        myLatitude: 0, 
                        myLongtitude: 0,
                        myIp: 'WRONG IP', 
                        myCity: '-----------', 
                        myCountry: '----------', 
                        myCountryCode: false
                    }
                )
            }
            setState(newState)
            console.log(response)
            console.log(state)
            }
        )
        .catch(error => {console.log('wrong IP')})
    }, [state.newIp])

    return <>
    {/* {list && state.newIp && state.userLocation.map((el, i) => <p key={i}>{`${i+1}. ${el.myIp}`}</p>)} */}
    {search && <div className='App__Container__Form'>
        <SearchingForm setText={setText} text={text} setState={setState} state={state}/>
    </div>}
    <div className='App__Container__Content'>
          <UserLocationIP state={state} search={search} myLoc={myLoc} lat={state.myLatitude} lng={state.myLongtitude}/>
    </div>
    </>
}

export default UserLocationIpContainer
