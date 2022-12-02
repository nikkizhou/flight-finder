import React, { useState } from 'react'
import PassengerSelector from './PassengerSelector';
//@ts-ignore
import Select, { components } from 'react-select';
import { FormDataI,Passenger } from '../../interfaces'

interface Props{
  updateFormData: Function,
  passengers: undefined | Passenger
}

function PassengerField({ updateFormData, passengers }: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  
  const options = [{
    custom: true,
    passNr: passengers ? `${passengers.adults + passengers.children} passengers` : ''
  }];
  

  const formatOptionLabel = ({ passNr }: { passNr: number }) => {
    //console.log(passNr,'line 26');
    return passNr
  }
  

  const CustomOption = (props: any, isDisabled: any) => {
    const { data, innerRef, innerProps, selectProps: { closeMenu, updateFormData,passengers } } = props;
    return data.custom
      ? <PassengerSelector
        innerRef={innerRef}
        innerProps={innerProps}
        closeMenu={closeMenu}
        updateFormData={updateFormData}
        passengers={ passengers} />
      : <components.Option {...props} />
  };


  return (
    <Select
      id="passengers"
      // @ts-ignore
      options={options}
      components={{ Option: CustomOption }}
      placeholder="Choose Passengers"
      menuIsOpen={openMenu}
      onMenuOpen={() => setOpenMenu(true)}
      closeMenuOnSelect={false}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
      onSelect={(e: any) => e.preventDefault()}
      // @ts-ignore
      closeMenu={() => setOpenMenu(false)}
      updateFormData={updateFormData}
      passengers={passengers}
    />
  )
}

export default PassengerField
