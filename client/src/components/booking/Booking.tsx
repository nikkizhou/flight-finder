import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import ChosenFlightCard from './ChosenFlightCard';
import PassengerForm from './PassengerForm';
import PassInfoDisplay from './PassInfoDisplay';
import { PassengerInfo } from '../../interfaces'
import './Booking.css'

function Booking() {
  const location = useLocation();
  const { forth, back, passengers } = location.state
  const [passengerInfo, setPassengerInfo] = useState<PassengerInfo[]>([])
  console.log(passengerInfo,'passinfo line12');
  
  const passengerNr= 3
  const totalPrice =forth.prices[0].adult * passengers.adults + forth.prices[0].child * passengers.children + back.prices[0].adult * passengers.adults + back.prices[0].child * passengers.children
  const updatePassInfo = (newInfo: PassengerInfo[]) => setPassengerInfo(newInfo)
  const [isEditing, setIsEditing] = useState(true)
  console.log(isEditing,'isEditing line 19');
  
  const toggleIsEditing = () => setIsEditing(!isEditing)
  
  
  return (
    <div className="booking">
      <div className="cards">
        <ChosenFlightCard flight={forth} passengers={passengers} />
        <ChosenFlightCard flight={back} passengers={passengers} />
      </div>
      <h2>Total Price: {totalPrice} sek</h2>
      {isEditing
        ? < PassengerForm passengerNr={passengerNr} updatePassInfo={updatePassInfo} toggleIsEditing={toggleIsEditing} />
        : <PassInfoDisplay passengerInfo={passengerInfo} toggleIsEditing={toggleIsEditing} />
      }
    </div>
  )
}

export default Booking
