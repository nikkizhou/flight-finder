import React from 'react'

interface Props{
  placeholder: string,
  id: string,
  disabled: boolean 
}

function DateField({ placeholder, id, disabled }: Props) {
  return (
    <input
      id={id}
      type="text"
      className="input"
      placeholder={placeholder}
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => (e.target.type = "text")} 
      disabled={disabled}
      required={!disabled}
    />
  )
}

export default DateField
