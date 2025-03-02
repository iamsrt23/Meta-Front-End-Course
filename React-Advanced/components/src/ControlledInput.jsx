import React, { useState } from 'react'

const ControlledInput = () => {
  const [value,setValue] = useState("")

  const handleChange = (e)=>{

    setValue(e.target.value)

  }
  return (
    <div>
      <form>
        <input 
        type='text'
        onChange={handleChange}
        value={value}
        />
      </form>
    </div>
  )
}

export default ControlledInput