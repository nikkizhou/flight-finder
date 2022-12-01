import React from 'react'
import Select, { components } from 'react-select';

interface SelectedObj {
  value: boolean,
  label: string
}

function RoundTripField({updateData}:{updateData:Function}) {
  const handleSelect: any = (selected: SelectedObj) => updateData({ roundTrip: selected.value });
  const roundTripOptions = [
    { value: false, label: 'One Way' },
    { value: true, label: 'Round Trip' },
  ];

  return (
    <Select id="roundTrip" options={roundTripOptions} onChange={handleSelect} placeholder="One Way / Round Trip" />
  )
}

export default RoundTripField
