import React,{useState,useEffect} from 'react'
import { Flight } from '../../interfaces'
import FlightCard from './FlightCard'

interface Props {
  flights: Flight[] | undefined|string,
  title: string,
  chosenFlights: {forth:number,back:number}
  updateChosenFlights:Function
}

function FlightList({ flights, title, chosenFlights, updateChosenFlights }: Props) {
  console.log(flights,'flights in line 14');
  
  return (
    <div className="list">
      <h1>{ title }</h1>
      {flights == 'no data found'
        ?<h4>No flights found for this date...</h4>
        : (flights as Flight[])?.map(flight =>
        flight.itineraries.map((itiner, index) =>
          <FlightCard
            id={index}
            title={title}
            depDes={flight.depatureDestination}
            arrDes={flight.arrivalDestination}
            flight_id={flight.flight_id}
            itiner={itiner}
            updateChosenFlights={updateChosenFlights}
            chosenFlights={chosenFlights}
          />))}
    </div>
  )
}

export default FlightList
