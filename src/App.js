
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState (
    {
      myLocation: '',
      myIp: '', 
      myCity: '',
      myCountry:'',
      myCountryCode: '',
    }
  )
  
  useEffect(
    () => {
      axios
      .get('http://api.ipstack.com/check?access_key=107bb5ac8b7d6154107cd79f4be2903d')
      .then(response => {
        const myNewData = response.data 
        setState({...state, myLocation: `${myNewData.latitude} ${myNewData.longitude}`,
          myIp: myNewData.ip, 
          myCity: myNewData.city, 
          myCountry: myNewData.country_name, 
          myCountryCode: myNewData.country_code})
        console.log(response.data)
        console.log(state)

      })
      .catch(error => {console.error(error)})
    }, [state.myLocation]
  )



  return (
    <div className="App">
      <div className='App__LeftBar'>
          <p>List of all searches</p>
      </div>
      <div className='App__Container'>
        <div className='App__Container__Content'>
          <div>
              <p>Map with user location</p>
          </div>
          <div>
            <div>
            <p>Information about user location</p>
            <span>Your Country: {state.myCountry}</span>
            <span>Your City: {state.myCity}</span>
            <span>Your IP: {state.myIp}</span>
            
            </div>
          </div>
        </div>
        <div className='App__Container__Form'>
          <input type='text' placeholder=' IP address or URL'/>
          <input type='submit' value='SEARCH'/>
        </div>
        <div className='App__Container__Content'>
          <div>
          <p>Map with last search location</p>
          </div>
          <div>
          <p>Information about last search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
