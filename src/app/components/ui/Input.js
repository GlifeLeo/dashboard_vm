import React from 'react'

function Input({ type = "text", defaultValue, onChange, className = "border h-10 rounded-lg px-2", ...rest }) {
  // if(...)
  return (
    <input
      type={type}
      {...rest}
      value={defaultValue}
      className={className}
      name="username"
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input