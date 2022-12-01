import React from 'react'

function DateField({ placeholder,id }: { placeholder :string, id:string}) {
  return (
    <input className="input" type="text" id={id} placeholder={placeholder}
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => (e.target.type = "text")} required />
  )
}

export default DateField
