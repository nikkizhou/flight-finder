import React,{useState} from 'react'
import './PassengerSelector.css';
import { FlightQuery, Passenger } from '../../interfaces'

interface Props {
  innerRef:any
  innerProps: any
  closeMenu: Function
  updateData: Function
  passengers:Passenger
}

function PassengerSelector({ innerRef, innerProps, closeMenu, updateData, passengers }: Props) {
  console.log(passengers,'passengers in passgengerselector line 13');
  
  
  const addPassenger = (e: any, who: string) => {
    e.preventDefault()
    const newInfo = who == 'a' ? { adults: passengers.adults + 1 } : { children: passengers.children + 1 }
    updateData({passengers:{...passengers, ...newInfo} })
  }

  const reducePassenger = (e: any, who: string) => {
    e.preventDefault()
    let newInfo = null
    if (who == 'a' && passengers.adults > 0) newInfo = { adults: passengers.adults - 1 }
    if (who == 'c' && passengers.children > 0) newInfo = { children: passengers.children - 1 }
    updateData({ passengers: { ...passengers, ...newInfo } })
  }
  
  return (
    <div className="container" ref={innerRef} {...innerProps} >
      <div className="row">
        <span>Adults </span>
        <button onClick={(e)=>reducePassenger(e,'a')}> - </button>
        <div>{passengers.adults}</div>
        <button onClick={(e) => addPassenger(e,'a')} > + </button>
      </div>
      <div className="row">
        <span>Children </span>
        <button onClick={(e) => reducePassenger(e,'c')}> - </button>
        <div>{passengers.children}</div>
        <button onClick={(e) => addPassenger(e,'c')}> + </button>
      </div>
      <button onClick={() => {
        closeMenu()
      }}>Confirm</button>
    </div>
  )
}

export default PassengerSelector
