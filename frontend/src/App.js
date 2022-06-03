import './style/App.css';

// React Imports
import { Routes, Route } from 'react-router-dom'
import styled from "styled-components";
import { useEffect, useState } from 'react'

// Component Imports
import CreateUser from './ components/CreateUser';
import CreateRestaurant from './ components/CreateRestaurant';
import Matches from './pages/Matches';

//API Imports
import { GetCurrentUser } from './services/UserServices';
import { GetAllRestaurants } from './services/RestaurantServices';
import axios from 'axios';


function App() {
  const [user, setUser] = useState('')
  const [restaurantsList, setRestaurantsList] = useState([])

  useEffect(() => {
    setUser()
    getAllRestaurants()
  }, [])

  const getAllRestaurants = async () => {
    const res = GetAllRestaurants()
    setRestaurantsList(res.data)
    console.log('restaurants_list:', restaurants)
  }
  return (
    // <UserContext.Provider value={user.matches}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Matches user={user} setUser={setUser}/>}/>
          <Route path='/user' element={<CreateUser user={user} setUser={setUser} restaurants={restaurants}/>}/>
          <Route path='/restaurant' element={<CreateRestaurant restaurants={restaurants} setRestaurants={setRestaurants} />}/>
        </Routes>
      </div>
    // </UserContext.Provider>
  );
}

export default App;
