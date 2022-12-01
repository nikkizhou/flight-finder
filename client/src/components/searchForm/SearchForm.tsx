import React, { useState,useEffect } from 'react'
import './SearchForm.css';
import { FlightQuery } from '../../interfaces'
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

interface Props{
  updateData: Function,
  queryData: FlightQuery|undefined
}




function SearchForm({ updateData, queryData }: Props) {
  const [readyToSendReq, setReadyToSendReq] = useState(false)
  console.log(queryData, 'line23');

  //@ts-ignore
  useEffect(() => {
    const getFlightRes = () => {
      console.log(queryData, 'line36');
      const res = axios.get('http://localhost:5000/api/flights', { params: queryData });
      console.log(res.data);
      
    }
  }, [readyToSendReq]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { depDes, arrDes, depDate, returnDate } = e.target as typeof e.target & FormData
    let details = {
      depDes: depDes.value,
      arrDes: arrDes.value,
      depDate: depDate.value,
      returnDate: returnDate.value,
    };
    await updateData(details)
    setReadyToSendReq(true)
  }

 
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" id="depDes" placeholder="From" required />
        <input className="input" type="text" id="arrDes" placeholder="To" required />
        <DateField placeholder="Departure Date" id="depDate"/>
        <DateField placeholder="Return Date" id="returnDate" />
        <PassengerField updateData={updateData} passengers={queryData?.passengers } />
        <RoundTripField updateData={updateData} />
        <button className="submit" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm
