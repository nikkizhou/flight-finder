import React, { useState } from 'react'
import { Flight, Itinerary,ChosenFlight } from '../../interfaces'
import calculateDuration from '../../utils/calculateDuration'

interface Props {
  id: string,
  title: string
  depDes: string,
  arrDes: string,
  flight_id: string,
  itiner: Itinerary,
  updateChosenFlights: Function,
  chosenFlights: { forth: ChosenFlight, back: ChosenFlight }
}

function FlightCard({ id, title, depDes, arrDes, flight_id, itiner, updateChosenFlights, chosenFlights }: Props) {
  const { depatureAt, arriveAt, avaliableSeats, prices } = itiner
  const { adult, child, currency } = prices[0]

  const [depTime, arrTime] = [depatureAt.split("T")[1], arriveAt.split("T")[1]]
  const duration = calculateDuration(arriveAt, depatureAt)

  const checkedDisplay = title == 'Departure' ? chosenFlights.forth?.id == id : chosenFlights.back?.id == id
  
  const handleChange = (e: any) => {
    const chosenF = { id:id,title,depDes,arrDes,flight_id,depatureAt,arriveAt,avaliableSeats,prices}
    updateChosenFlights(chosenF, title)
  }

  const [showDetails,setShowDetails] = useState(false) 
  const handleClick = () => setShowDetails(prev => !prev)
  
  return (
    <div className="card" >
      <div className="clickAera" onClick={handleClick}>
        <div className="flightId">✈️{flight_id}</div>
        <div className="destination">{depDes} --- {arrDes}</div>
        <div className="time">{depTime} --- {arrTime}</div>
        <div className="duration">{duration}</div>
        <div className="price"><span>{adult} {currency.toLowerCase()}/Adult</span></div>
        {!showDetails&&<div className="price">............</div>}
        {showDetails && (
          <div>
            <div className="price"><span>{child} {currency.toLowerCase()}/Child</span></div>
            <div className="seats">💺: {avaliableSeats}</div>
          </div>
        )}
      </div>
      <label>
        <input type="radio" value={id} checked={checkedDisplay} onChange={e => handleChange(e)} />
        Choose
      </label>
    </div>
  )
}

export default FlightCard
