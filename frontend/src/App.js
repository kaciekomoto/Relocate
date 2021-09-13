import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import './App.css';

import Home from './Components/Home'
import CommentsList from "./Components/CommentsList";
import LocationDetail from "./Components/LocationDetail";
import CreateComment from "./Components/CreateComment";
import EditComment from "./Components/EditComment";

function App() {

  return (
      <div className="App">
        <header className="nav-bar">
          <Link to="/"><h1 className="app-title">Relocate</h1></Link>
          {/* <Link to="#">Profile</Link> */}
        </header>
        <main>
          <Route exact path='/' component={Home}/>
          <Route exact path='/location/:id' component={LocationDetail}/>
          <Route
            exact path="/comment/:id"
            render={props => (
              <EditComment match={props.match}/>
              )} 
          />
        </main>
      </div>
  );
}

export default App;
