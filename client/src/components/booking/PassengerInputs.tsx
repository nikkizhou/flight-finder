import React, { useState, useEffect } from 'react'
import { PassengerInfo } from '../../interfaces'

interface Props {
  id: number,
  updateFormData: Function,
  formData: PassengerInfo[]
}
const PassengerInputs = ({ id, updateFormData, formData }: Props) => {
  const [state, setState] = useState<PassengerInfo>({ firstName: '', lastName: '', phone: undefined, email: '', passNr: '' })

  console.log(state,'state line12 PassengerInputs');
  
  const onChange = (e: any) => {
    const value = e.target.value
    setState({ ...state, [e.target.name]: value });
  }

  useEffect(() => {
    updateFormData(id - 1, state)
  }, [state])

  const { firstName, lastName, phone, email, passNr } = state
  return (
    <div className='passengerInput'>
      <h3>Passenger {id}</h3>
      <div className='passengerInput_fields'>
        <input type="text" id="firstName" placeholder="First Name" name="firstName" onChange={onChange} value={ firstName}  required />
        <input type="text" id="lastName" placeholder="Last Name" name="lastName" onChange={onChange} value={lastName} required />
        <input type="email" id="email" placeholder="Email" name="email" onChange={onChange} value={email} required />
        <input type="tel" id="phone" placeholder="Phone Number" name="phone" onChange={onChange} value={phone} required />
        <input type="text" id="passNr" placeholder="Possport Number" name="passNr" onChange={onChange} value={passNr} required />
      </div>
    </div>
  )
}

export default PassengerInputs
//{alertStatus && <CusAlert status={alertStatus} closeAlert={closeAlert} />}
