import UserLocationIpContainer from './user_location/location/user_location_container'

const Collector = () => {

    return (
    <>
            <UserLocationIpContainer myLoc={true}/>
            <UserLocationIpContainer/>
    </>
    )
}

export default Collector