import React,{useState} from 'react';
import './Home.css';
import SearchForm from './searchForm/SearchForm'
import FlightDisplay from './flightDisplay/FlightDisplay'
import { FlightData } from '../interfaces'

function Home() {
  const defaultFlightData = {
    depFlights: [],
    returnFlights: []
  }
  const [flightData, setFlightData] = useState<FlightData>(defaultFlightData)
  const updateFlightData = (newFlightData: FlightData) => setFlightData(newFlightData)
  console.log(flightData,'flightData line 18');
  
  return (
    <div className="flightsPage">
      <SearchForm updateFlightData={updateFlightData} />
      <FlightDisplay flightData={flightData} />
    </div>
  );
}

export default Home;
