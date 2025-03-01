import React,{useRef} from 'react'

const UserefHook = () => {
    const inputEl = useRef(null)
    const onButtonClick = () =>{
      inputEl.current.focus()
    }
  
  return (
    <div>
      <input type='text' ref={inputEl} />
      <button onClick={onButtonClick}>Focus the Input</button>
    </div>
  )
}

export default UserefHook