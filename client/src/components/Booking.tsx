import React from 'react'
import { useLocation } from 'react-router-dom';

function Booking() {
  const location = useLocation();
  console.log(location.state);
  
  return (
    <div>Booking</div>
  )
}

export default Booking
