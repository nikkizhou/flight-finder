import React, { useState,useEffect } from 'react'
import './SearchForm.css';
import { FormDataI } from '../../interfaces'
import PassengerField from './PassengerField'
import RoundTripField from './RoundTripField'
import DateField from './DateField'
import axios from 'axios'

interface FormData {
  depDes: { value: string },
  arrDes: { value: string },
  depDate: { value: string },
  returnDate: { value: string },
};

// interface Props{
//   updateFormData: Function,
//   formData: FormDataI|undefined
// }

const defaultState = {
  depDes: '',
  arrDes: '',
  depDate: '',
  returnDate: '',
  passengers: { adults: 0, children: 0 },
  roundTrip: true
}

function SearchForm({ updateFlightData }: { updateFlightData :Function}) {
  const [formData, setFormData] = useState<FormDataI>(defaultState)
  const [submitFlag, setSubmitFlag] = useState(false)
  const updateFormData = (newData: FormDataI) => setFormData({ ...formData, ...newData })

  console.log(formData, 'formData in 35 in SearchForm');
  console.log(submitFlag,'submitflag in SearchForm');
  
  
  //@ts-ignore
  useEffect(() => {
    const getFlightData = async  () => {
      const res = await axios.get('http://localhost:5000/api/flights', { params: formData });
      updateFlightData({...res.data, passengers: formData.passengers});
    }
    if (submitFlag) getFlightData()
  }, [submitFlag]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { depDes, arrDes, depDate, returnDate } = e.target as typeof e.target & FormData
    let details = {
      depDes: depDes.value,
      arrDes: arrDes.value,
      depDate: depDate.value,
      returnDate: returnDate.value,
    };
    updateFormData(details)
    setSubmitFlag(!submitFlag)
  }
 
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" id="depDes" placeholder="From" required />
        <input className="input" type="text" id="arrDes" placeholder="To" required />
        <DateField placeholder="Departure Date" id="depDate" disabled={ false} />
        <DateField placeholder="Return Date" id="returnDate" disabled={!formData.roundTrip } />
        <PassengerField updateFormData={updateFormData} passengers={formData?.passengers } />
        <RoundTripField updateFormData={updateFormData} />
        <button className="submit" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm
