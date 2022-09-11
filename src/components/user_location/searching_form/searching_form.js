
import styles from './searching_form.module.css'

const SearchingForm = (props) => {
    const onHandlerChange = (event) => {
        props.setState({...props.state, text: event.target.value})
    }
    const onHandlerClick = () => {
        props.setState({...props.state, newIp: props.state.text})
    }
    return (
        <div className={styles.App__Container__Form}>
            <input type='text' onChange={onHandlerChange} placeholder=' IP address or URL' value={props.state.text}/>
            <input type='submit' value='SEARCH' onClick={onHandlerClick}/>
        </div>
    )
}

export default SearchingForm