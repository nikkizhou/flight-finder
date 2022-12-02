import React, { useState } from 'react'
import { Flight, Itinerary } from '../../interfaces'
import calculateDuration from '../../utils/calculateDuration'
import FlightCardDetail from './FlightCardDetail'

interface Props {
  id: number,
  title: string
  depDes: string,
  arrDes: string,
  flight_id: string,
  itiner: Itinerary,
  updateChosenFlights: Function,
  chosenFlights: { forth: number, back: number }
}

function FlightCard({ id, title, depDes, arrDes, flight_id, itiner, updateChosenFlights, chosenFlights }: Props) {
  const { depatureAt, arriveAt, avaliableSeats, prices } = itiner
  const { adult, child, currency } = prices[0]

  const [depTime, arrTime] = [depatureAt.split("T")[1], arriveAt.split("T")[1]]
  const duration = calculateDuration(arriveAt, depatureAt)

  const checkedDisplay = title == 'Departure' ? chosenFlights.forth == id : chosenFlights.back == id
  const handleChange = (e: any) => updateChosenFlights(e.target.value, title)

  const [showDetails,setShowDetails] = useState(false) 
  const handleClick = () => setShowDetails(prev => !prev)
  console.log(showDetails,'line 29');
  
  
  return (
    <div className="card" >
      <div className="clickAera" onClick={handleClick}>
        <div className="flightId">✈️{flight_id}</div>
        <div className="depDes">{depDes} --- {arrDes}</div>
        <div className="itiner">{depTime} --- {arrTime}</div>
        <div className="itiner">{duration}</div>
        <div className="price"><span>{adult} {currency.toLowerCase()}/Adult</span></div>
        {!showDetails&&<div className="price">............</div>}
        {showDetails && (
          <div>
            <div className="price"><span>{child} {currency.toLowerCase()}/Child</span></div>
            <div className="itiner">💺: {avaliableSeats}</div>
          </div>
        )}
      </div>
      <label>
        <input type="radio" value={id} checked={checkedDisplay} onChange={e => handleChange(e)} />
        Choose
      </label>
    </div>
  )
  
  // return showDetails
  //   ? <FlightCardDetail handleClick={handleClick} />
  //   :(
  //     <div className="card" >
  //       <div className="clickAera" onClick={handleClick}>
  //         <div className="flightId">✈️{flight_id}</div>
  //         <div className="depDes">{depDes} --- {arrDes}</div>
  //         <div className="itiner">{depTime} --- {arrTime}</div>
  //         <div className="itiner">{duration} <span>  </span>💺: {avaliableSeats}</div>
  //         <div className="avaliableSeats">{adult} {currency}/Adult</div>
  //       </div>
  //       <label>
  //         <input type="radio" value={id} checked={checkedDisplay} onChange={e=>handleChange(e)} />
  //         Choose
  //       </label>
  //     </div>
  // )
}

export default FlightCard
