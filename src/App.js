import React from 'react'
import './App.css'
import { createRoot } from "react-dom/client";
import Home from './pages/Home'
import About from './pages/About';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
  <Router>  
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/login' element={<Login/>} />

      </Routes>
    </div>
    </Router>   
  )
}

export default App