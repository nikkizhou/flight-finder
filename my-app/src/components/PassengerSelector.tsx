import React,{useState} from 'react'
import './PassengerSelector.css';

interface Props {
  innerRef:any
  innerProps: any
  closeMenu: Function
}

function PassengerSelector({ innerRef, innerProps, closeMenu }: Props) {
  const [passInfo, setPassInfo] = useState({ adults: 0, children: 0 })
  console.log(passInfo);
  
  const addPassenger = (e: any, who: string) => {
    e.preventDefault()
    const newInfo = who == 'a' ? { adults: passInfo.adults + 1 } : { children: passInfo.children + 1 }
    setPassInfo(prev => ({ ...prev, ...newInfo }))
  }

  const reducePassenger = (e: any, who: string) => {
    e.preventDefault()
    let newInfo = null
    if (who == 'a' && passInfo.adults > 0) newInfo = { adults: passInfo.adults - 1 }
    if (who == 'c' && passInfo.children > 0) newInfo = { children: passInfo.children - 1 }
    setPassInfo({ ...passInfo, ...newInfo })
  }


  
  return (
    <div className="container" ref={innerRef} {...innerProps} >
      <div className="row">
        <span>Adults</span>
        <button onClick={(e)=>reducePassenger(e,'a')}> - </button>
        <div>{passInfo.adults }</div>
        <button onClick={(e) => addPassenger(e,'a')} > + </button>
      </div>
      <div className="row">
        <span>Children</span>
        <button onClick={(e) => reducePassenger(e,'c')}> - </button>
        <div>{passInfo.children}</div>
        <button onClick={(e) => addPassenger(e,'c')}> + </button>
      </div>
      <button onClick={()=>closeMenu()}>Confirm</button>
    </div>
  )
}

export default PassengerSelector
