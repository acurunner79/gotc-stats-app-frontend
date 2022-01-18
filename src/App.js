import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Statistics from './components/Statistics/Index';
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences';
import Topnav from './components/Nav/Topnav.js';
import Login from './components/Login/Login';
import Form from './components/Form/Form';

import './App.css';

function App() {
  // console.log('app props', props)

  
  const gotcStatsApi = 'https://cors-anywhere.herokuapp.com/https://gotc-stat-app.herokuapp.com/'
  
  const endpoint = "users"
  
  const [statsData, setStatsData] = useState([])
  
  const emptyUser = {
    username: "",
    password: "",
    in_game_name: "",
    allegiance: "",
    keep_level: "",
    house_level: "",
    power_level: "",
    building_power: "",
    research_power: "",
    troop_power: "",
    dragon_talent_power: "",
    armory_power: ""
  }
  
  //State to hold selected user thats being updated
  const [selectedUser, setSelectedUser] = useState(emptyUser)

  const getStatsData = async () => {
    const response = await fetch(`${gotcStatsApi}${endpoint}`)
    const data = await response.json()
    setStatsData(data)
    // console.log('Stats data',statsData)
  }
  
  useEffect(() => {
    getStatsData()
  }, [])

  // Creating new user
  const handleCreate = (newUser) => {
    fetch(gotcStatsApi + "/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(() => {
      getStatsData()
    })
  }

  const selectUser = () => {
    
  }
  // const [token, setToken] = useState(null)
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

        return (
          <div className="App"> 
            <Topnav />
              <h1>Game Of Thrones: Conquest</h1>
              <Link to="/create">
                <button>Create</button>
              </Link>
            <Route path="/stats" render={(rp) => (
                <Statistics {...rp} item={statsData}/>
              )}/>
            <Route exact path="/create" render={(rp) => (
                <Form {...rp} label="create" item={emptyUser} handleSubmit={handleCreate}/>
              )}/>
            <Route to="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/preferences">
              <Preferences />
            </Route> 
          </div>
        )
}

export default App;
