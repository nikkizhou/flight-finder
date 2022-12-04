import React from 'react'
import {PassengerInfo} from '../../interfaces'

interface Props {
  passengerInfo: PassengerInfo[],
  toggleIsEditing: Function
}

function PassInfoDisplay({ passengerInfo, toggleIsEditing }:Props) {
  return (
    <div>
      <h1>Passengers' Info</h1>
      {passengerInfo.map((p, index) => <SinglePassenger key={index} passenger={p} id={index + 1} />)}
      <div className='btns'>
        <button className="passInfoDisplay_btn" onClick={() => toggleIsEditing()}>Edit</button>
        <button className="passInfoDisplay_btn" >Continue</button>
      </div>
    </div>
  )
}


function SinglePassenger({ id, passenger }: { id: number, passenger: PassengerInfo }) {
  return (
    <div className='passInfoDisplay'>
      <h3>Passenger {id}</h3>
      <div className='passInfoDisplay_fields'>
        <div>First Name: {passenger.firstName }</div>
        <div>Last Name: {passenger.lastName }</div>
        <div>Email: {passenger.email }</div>
        <div>Phone Number: {passenger.phone }</div>
        <div>Passport Number: {passenger.passNr}</div>
      </div>
    </div>
  )
}



export default PassInfoDisplay
