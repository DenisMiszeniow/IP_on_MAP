
const SearchingForm = (props) => {
    const onHandlerChange = (event) => {
        props.setState({...props.state, text: event.target.value})
    }
    const onHandlerClick = () => {
        props.setState({...props.state, newIp: props.state.text})
    }
    return (
        <>
            <input type='text' onChange={onHandlerChange} placeholder=' IP address or URL' value={props.text}/>
            <input type='submit' value='SEARCH' onClick={onHandlerClick}/>
        </>
    )
}

export default SearchingForm