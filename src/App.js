
import './App.css';
import SearchingForm from './components/searching_form/searching_form';
import UserLocationIpContainer from './components/user-location/user_location_container';


function App() {

  return (
    <div className="App">
      <div className='App__LeftBar'>
          <p>List of all searches</p>
      </div>
      <div className='App__Container'>
          <UserLocationIpContainer myLoc={true}/>
          <UserLocationIpContainer search={true} myLoc={false}/>
      </div>
    </div>
  );
}

export default App;
