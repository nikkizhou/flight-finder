import React from 'react'

function FlightCardDetail() {
  return (
    <div className="card" >
      <div className="clickAera" onClick={handleClick}>
        <div className="flightId">✈️{flight_id}</div>
        <div className="depDes">{depDes} --- {arrDes}</div>
        <div className="itiner">{depTime} --- {arrTime}</div>
        <div className="itiner">{duration} <span>  </span>💺: {avaliableSeats}</div>
        <div className="avaliableSeats">{adult} {currency}/Adult</div>
      </div>
      <label>
        <input type="radio" value={id} checked={checkedDisplay} onChange={e => handleChange(e)} />
        Choose
      </label>
    </div>
  )
}

export default FlightCardDetail
