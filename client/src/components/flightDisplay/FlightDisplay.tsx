import React,{useState} from 'react'
import './FlightDisplay.css';
import { FlightData } from '../../interfaces'
import FlightList from './FlightList';


function FlightDisplay({ flightData }: { flightData: FlightData }) {
  const { depFlights, returnFlights } = flightData
  const [chosenFlights, setChosenFlights] = useState<any>({ forth: null, back: null }) 
  const updateChosenFlights = (id: number, title: string) => {
    const newInfo = title == 'Departure' ? { forth: id } : { back: id }
    setChosenFlights({...chosenFlights,...newInfo},)
  }
  console.log(chosenFlights);
  
  const gotDepFlights = flightData.depFlights?.length != 0 
  const hasRoundTrip = flightData.returnFlights?.length != 0 
  return (
    <div className="flightDisplay">
      <div className="container">
        {gotDepFlights && <FlightList
          flights={depFlights}
          title="Forth"
          chosenFlights={chosenFlights}
          updateChosenFlights={updateChosenFlights} />}
        {hasRoundTrip && <FlightList
          flights={returnFlights}
          title="Return"
          chosenFlights={chosenFlights}
          updateChosenFlights={updateChosenFlights} />}
      </div>
      {chosenFlights.forth&&<button className='bookBtn'>Book</button>}
    </div>
  )
}

export default FlightDisplay
