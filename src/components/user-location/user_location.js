
import Map from "./map_constructor/map"
import ReactCountryFlag from "react-country-flag"
import styles from './user_location.module.css'

const UserLocationIP = ({state, myLoc}) => {
    
    return (
    <>
        <div>
              <Map lat={state.myLatitude} lng={state.myLongtitude} zoom={state.zoom}/>
              
        </div>
        <div>
            <div>
            <p>{myLoc ? 'Information about Your location' : 'Information about last Search'}</p>
            {   
            
                myLoc
                ? state.newIp === '' && state.userLocation.map((el, index) => (
                    index === 0 && <div key={index}>
                        <p className={styles.App__Container__Content__line}>IP: <span>{el.myIp}</span></p>
                        <p className={styles.App__Container__Content__line}>Country: <span>{el.myCountry}</span></p>
                        <p className={styles.App__Container__Content__line}>Flag: <span>{el.myCountryCode ? <ReactCountryFlag countryCode={el.myCountryCode}/> : '---------'}</span></p>
                        <p className={styles.App__Container__Content__line}>City: <span>{el.myCity}</span></p>
                    </div>
                ))
                : state.newIp != '' && state.userLocation.map((el, index) => (
                    index === 0 && <div key={index}>
                        <p className={styles.App__Container__Content__line}>IP: <span>{el.myIp}</span></p>
                        <p className={styles.App__Container__Content__line}>Country: <span>{el.myCountry}</span></p>
                        <p className={styles.App__Container__Content__line}>Flag: <span>{el.myCountryCode ? <ReactCountryFlag countryCode={el.myCountryCode}/> : '---------'}</span></p>
                        <p className={styles.App__Container__Content__line}>City: <span>{el.myCity}</span></p>
                    </div>
                ))
            }
            

            </div>
        </div>
    </>
    )
}

export default UserLocationIP