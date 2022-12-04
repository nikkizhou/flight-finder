import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Booking from './components/booking/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/booking" element={<Booking/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
