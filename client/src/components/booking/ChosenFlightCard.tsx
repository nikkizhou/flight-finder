import React from 'react'
import { ChosenFlight } from '../../interfaces'
import calculateDuration from '../../utils/calculateDuration'

interface Props {
  flight: ChosenFlight,
  passengers: {
    adults: number, children: number
  }
}
function ChosenFlightCard({ flight, passengers}: Props) {
  const { title, depDes, arrDes, flight_id, depatureAt, arriveAt, prices } = flight
  const {adult,currency,child} = prices[0]
  const duration = calculateDuration(arriveAt, depatureAt)
  const [depTime, arrTime] = [depatureAt.split("T")[1], arriveAt.split("T")[1]]


  return flight
    ? (
    <div className={`${title} flightCard`}>
      <h2>{title}</h2>
      <div className="flightId">✈️{flight_id}</div>
      <div className="depDes">{depDes} --- {arrDes}</div>
      <div className="time">{depTime} --- {arrTime}</div>
      <div className="duration">{duration}</div>
      <div className="price">{adult} {currency.toLowerCase()}/Adult</div>
      <div className="price">{child} {currency.toLowerCase()}/Child</div>
      <h3 className="price">Price {title}: {adult*passengers.adults+child*passengers.children} sek</h3>
    </div>)
    :<></>
}

export default ChosenFlightCard
