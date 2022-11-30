import React,{useState} from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import FlightList from './components/FlightList'
import { FlightQuery } from './interfaces'

function App() {
  const [data, setData] = useState({})
  const updateData = (formData: FlightQuery) => setData({ ...data, ...formData })
  
  return (
    <div className="App">
      <SearchForm updateData={updateData} />
      <FlightList />
    </div>
  );
}

export default App;
