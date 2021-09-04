import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css';

import LocationList from './Components/LocationList'
import CommentsList from "./Components/CommentsList";
import LocationDetail from "./Components/LocationDetail";
import CreateComment from "./Components/CreateComment";

function App() {
  // const [locations, setLocations] = useState([])

  // useEffect(() => {
  // fetch('/location/')
  // .then((res) => res.json())
  // .then(res => setLocations(res))
  // .catch(err => console.log(err))
  // }, []) 

  return (
      <div className="App">
        <header>
          <h1>Relocate</h1>
          <Link to="/location">Locations</Link>
          <Link to="#">Profile</Link>
        </header>
        <main>
          <Route exact path='/location' component={LocationList}/>
          <Route exact path='/location/:id' component={LocationDetail}/>
        </main>
      </div>
  );
}

export default App;
