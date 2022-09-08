
import Map from "../map_constructor/map"
import ReactCountryFlag from "react-country-flag"

const UserLocationIP = ({state, search, myLoc}) => {
    
    return (
    <>
        <div>
              <Map lat={state.myLatitude} lng={state.myLongtitude} zoom={state.zoom}/>
        </div>
        <div>
            <div>
            <p>Information about user location</p>
            {   
                search && state.newIp && !state.wrongIp || myLoc
                ? state.userLocation.map((el, index) => (
                    index === 0 && <div key={index}>
                        <p>IP: {el.myIp}</p>
                        <p>Country: {state.myCountryCode ? <ReactCountryFlag countryCode={el.myCountryCode}/> : ''} {el.myCountry}</p>
                        <p>City: {el.myCity}</p>
                        
                    </div>
                ))
                : <div></div>
            }
            

            </div>
        </div>
    </>
    )
}

export default UserLocationIP