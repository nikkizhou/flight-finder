import React,{useState,useEffect} from 'react'
import { Flight } from '../../interfaces'
import FlightCard from './FlightCard'


interface Props {
  flights: Flight[] | undefined,
  title: string,
  chosenFlights: {forth:number,back:number}
  updateChosenFlights:Function
}

function FlightList({ flights, title, chosenFlights, updateChosenFlights }: Props) {

  return (
    <div className="list">
      <h1>{ title }</h1>
      {flights?.map(flight => 
        flight.itineraries.map((itiner,index) =>
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
