import React,{useState} from 'react'
import './FlightDisplay.css';
import { FlightData, Itinerary } from '../../interfaces'
import FlightList from './FlightList';
import { useNavigate } from 'react-router-dom';

function FlightDisplay({ flightData }: { flightData: FlightData }) {
  const navigate = useNavigate();
  const { depFlights, returnFlights, passengers } = flightData
  const [chosenFlights, setChosenFlights] = useState<any>({ forth: null, back: null }) 
  const updateChosenFlights = (flight: Itinerary, title: string) => {
    const newInfo = title == 'Departure' ? { forth: flight } : { back: flight }
    setChosenFlights({...chosenFlights,...newInfo},)
  }

  console.log(chosenFlights);
  
  const gotDepFlights = !flightData.depFlights?.length 
  const gotRetFlights = !flightData.returnFlights?.length
  
  return (
    <div className="flightDisplay">
      <div className="container">
        {gotDepFlights && <FlightList
          flights={depFlights}
          title="Departure"
          chosenFlights={chosenFlights}
          updateChosenFlights={updateChosenFlights} />}
        {gotRetFlights && <FlightList
          flights={returnFlights}
          title="Return"
          chosenFlights={chosenFlights}
          updateChosenFlights={updateChosenFlights} />}
      </div>
      {chosenFlights.forth&&<button
        className='bookBtn'
        onClick={() => navigate('/booking', { state:{...chosenFlights,passengers} })}
      >Book Now</button>}
    </div>
  )
}

export default FlightDisplay
