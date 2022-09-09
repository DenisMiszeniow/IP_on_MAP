import styles from './searching_list.module.css'

const ListOfSearch = ({state}) => {
    return (
        <div className={styles.searchContainer}>
            <p>List of all searches</p>
            {state.newIp && state.userLocation.map((el, i, a) => i!=a.length-1 
                && <div className={styles.serchingList} key={i}>
                    <p>No: {a.length-1 -i}</p>
                    <p>Your request: <span>{state.userRequest.map((req, index) => i===index && req)}</span></p>
                    <p>IP: <span>{el.myIp}</span></p>
                </div>)}
        </div>
    )
}
export default ListOfSearch