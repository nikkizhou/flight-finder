import React, { useState } from 'react'
import './SearchForm.css';
import { FlightQuery } from '../interfaces'
//@ts-ignore
import Select, { components } from 'react-select';
import PassengerSelector from './PassengerSelector';

interface FormData {
  depDes: { value: string },
  arrDes: { value: string },
  depDate: { value: string },
  passengers: { value: string },
  roundTrip: { value: string },
  returnDate: { value: string },
};

function SearchForm({ updateData }: {updateData: Function}) {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { depDes, arrDes, depDate, returnDate } = e.target as typeof e.target & FormData
    let details = {
      depDes: depDes.value,
      arrDes: arrDes.value,
      depDate: depDate.value,
      //roundTrip
      //passengers:
      returnDate: returnDate.value,
    };
    console.log(details);
    
    
  }

  const [open, setOpen] = useState(false);
  
  interface SelectedObj {
    value: boolean,
    label: string
  }

  const roundTripOptions = [
    { value:false, label: 'One Way' },
    { value: true, label: 'Round Trip' },
  ];

  const handleSelect:any = (selected: SelectedObj) => updateData({ roundTrip: selected.value });
  var closeMenu = () => setOpen(false)
  const options2 = [{ custom: true, customAbbreviation: `4 passengers` }];
  const formatOptionLabel = ({ customAbbreviation }: { customAbbreviation:any}) => (customAbbreviation)
  
  const CustomOption = (props: any, isDisabled:any) => {
    const { data, innerRef, innerProps } = props; 
    const { closeMenu } = props.selectProps;
    return data.custom
      ? <PassengerSelector innerRef={innerRef} innerProps={innerProps} closeMenu={closeMenu} />
      : <components.Option {...props} />
  };

 
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" id="depDes" placeholder="From" required />
        <input className="input" type="text" id="arrDes" placeholder="To" required />
        <input className="input" type="text" id="depDate" placeholder="Departure Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")} required />
        <input className="input" type="text" id="returnDate" placeholder="Return Date"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")} required />
       
        <Select id="roundTrip" options={roundTripOptions} onChange={handleSelect} placeholder="One Way / Round Trip" />
        <Select
          id="passengers" 
          // @ts-ignore
          options={options2}
          components={{ Option: CustomOption }}
          placeholder="Choose Passengers"
          menuIsOpen={open}
          onMenuOpen={() => setOpen(true)}
          closeMenuOnSelect={false}
          // @ts-ignore
          closeMenu={closeMenu}
          formatOptionLabel={formatOptionLabel}
          isSearchable={false}
          onSelect={(e: any) => e.preventDefault()}
          
          />
        <button className="submit" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm
