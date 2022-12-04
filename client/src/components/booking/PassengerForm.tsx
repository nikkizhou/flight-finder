import React, { useState,useEffect } from 'react'
import { PassengerInfo } from '../../interfaces'
import PassengerInputs from './PassengerInputs';

interface Props{
  passengerNr: number,
  updatePassInfo: Function,
  toggleIsEditing: Function 
}

function PassengerForm({ passengerNr, updatePassInfo, toggleIsEditing }:Props) {
  const [formData, setFormData] = useState<PassengerInfo[]>([])
  console.log(formData,'formData line 6');
  

  const updateFormData = (index: number, newInfo: PassengerInfo) => {
    const newFormData: PassengerInfo[] = [...formData]
    newFormData[index] = newInfo
    setFormData(newFormData)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    updatePassInfo(formData)
    toggleIsEditing()
  }

  return (
    <div className="booking_container">
      <h1>Passengers' Info</h1>
        <form className="booking_form" onSubmit={handleSubmit}>
          {[...Array(passengerNr)].map((x, i) =>
            <PassengerInputs key={i} id={i + 1} updateFormData={updateFormData} formData={formData} />
          )}
          <button className="booking_submit" type="submit">Confirm</button>
        </form>
      </div>
  )
}
export default PassengerForm
