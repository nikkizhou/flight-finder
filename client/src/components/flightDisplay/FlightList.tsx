import React,{useState,useEffect} from 'react'
import { Flight, ChosenFlight } from '../../interfaces'
import FlightCard from './FlightCard'

interface Props {
  flights: Flight[] | undefined|string,
  title: string,
  chosenFlights: { forth: ChosenFlight, back: ChosenFlight }
  updateChosenFlights:Function
}

function FlightList({ flights, title, chosenFlights, updateChosenFlights }: Props) {
  
  return (
    <div className="list">
      <h1>{ title }</h1>
      {flights == 'no data found'
        ?<h4>No flights found for this date...</h4>
        : (flights as Flight[])?.map(flight =>
        flight.itineraries.map(itiner =>
          <FlightCard
            key={itiner.id}
            id={itiner.id}
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
