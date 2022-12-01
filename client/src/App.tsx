import React,{useState} from 'react';
import './App.css';
import SearchForm from './components/searchForm/SearchForm'
import FlightList from './components/FlightList'
import { FlightQuery } from './interfaces'

function App() {
  const defaultState = {
    depDes: '',
    arrDes: '',
    depDate: '',
    returnDate:'',
    passengers: { adults:0, children:0},
    roundTrip: false
  }
  const [queryData, setqueryData] = useState<FlightQuery>(defaultState)
  const updateData = (formData: FlightQuery) => setqueryData({ ...queryData, ...formData })
  
  return (
    <div className="App">
      <SearchForm updateData={updateData} queryData={queryData} />
      <FlightList />
    </div>
  );
}

export default App;
