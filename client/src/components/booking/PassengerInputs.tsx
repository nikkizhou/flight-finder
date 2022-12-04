import React, { useState, useEffect } from 'react'
import { PassengerInfo } from '../../interfaces'

const PassengerInputs = ({ id, updateFormData }: { id: number, updateFormData: Function }) => {
  const [state, setState] = useState<PassengerInfo>({ firstName: '', lastName: '', phone: 0, email: '', passNr: '' })

  const onChange = (e: any) => {
    const value = e.target.value
    setState({ ...state, [e.target.name]: value });
  }

  useEffect(() => {
    updateFormData(id - 1, state)
  }, [state])

  return (
    <div className='passengerInput'>
      <h3>Passenger {id}</h3>
      <div className='passengerInput_fields'>
        <input type="text" id="firstName" placeholder="First Name" name="firstName" onChange={onChange} required />
        <input type="text" id="lastName" placeholder="Last Name" name="lastName" onChange={onChange} required />
        <input type="email" id="email" placeholder="Email" name="email" onChange={onChange} required />
        <input type="tel" id="phone" placeholder="Phone Number" name="phone" onChange={onChange} required />
        <input type="text" id="passNr" placeholder="Possport Number" name="passNr" onChange={onChange} required />
      </div>
    </div>
  )
}

export default PassengerInputs
//{alertStatus && <CusAlert status={alertStatus} closeAlert={closeAlert} />}
