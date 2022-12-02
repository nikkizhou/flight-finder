import React,{useState} from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm'
import FlightDisplay from './components/flightDisplay/FlightDisplay'
import { FlightData } from './interfaces'

function App() {
  const defaultFlightData = {
    depFlights: [],
    returnFlights:[]
  }
  const [flightData, setFlightData] = useState<FlightData>(defaultFlightData)
  const updateFlightData = (newFlightData: FlightData) => setFlightData(newFlightData)
  console.log(flightData,'flightData line 18');
  
  return (
    <div className="App">
      <SearchForm updateFlightData={updateFlightData} />
      <FlightDisplay flightData={flightData} />
    </div>
  );
}

export default App;
