import React, { useState} from 'react'
import {  Route } from 'react-router-dom'
import Statistics from './components/Statistics/Index';
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences';
import Topnav from './components/Nav/Topnav.js';
import Login from './components/Login/Login';

import './App.css';

function App() {

  const [token, setToken] = useState(null)

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  

  return (
    <div className="App"> 
        <Topnav />
        <h1>Game Of Thrones: Conquest</h1>
        <Route path="/stats">
          <Statistics />
        </Route>
        <Route to="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/preferences">
          <Preferences />
        </Route> 
  
      </div>
  );
}

export default App;
