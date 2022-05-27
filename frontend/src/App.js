import './style/App.css';
import { Routes, Route } from 'react-router-dom'
import CreateUser from './ components/CreateUser';
import styled from "styled-components";

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='/user' element={<CreateUser/>}/>
        <Route path='/restaurant' element={<CreateRestaurant />}/>
      </Routes>
    </div>
  );
}

export default App;
