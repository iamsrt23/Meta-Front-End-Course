import React, { useState } from 'react'

const ReactForm = () => {
  const[name,setName] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='Field'>
            <label>Name:</label>
            <input 
            id='name'
            type="text" placeholder='Name' name='name' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default ReactForm