import './App.css';
import React, { useState } from 'react';
import Navb from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';
import User from './Pages/User';


function App() {
  const [isAuth , setIsAuth]=useState(true)
  return (
    <div className="App">
      <Navb/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/*' element={<Error/>}/>
        {isAuth?<Route path='/admin' element={<Admin/>}/>: <Route path='/*' element={<Error/>}/>}
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/all-users' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;

