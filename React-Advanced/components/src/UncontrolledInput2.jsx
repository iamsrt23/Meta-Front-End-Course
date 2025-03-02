import React, { useRef } from 'react'

const UnControlledInput2 = () => {
  const inputRef = useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault()
    const inputValue = inputRef.current.value
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text' />
        
      </form>
    </div>
  )
}

export default UnControlledInput2