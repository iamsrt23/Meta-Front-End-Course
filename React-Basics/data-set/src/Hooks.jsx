import React,{useState} from 'react'


const Hooks = () => {
  const [inputText,setInputText] = useState('hello')


  function handleChange(e){
    setInputText(e.target.value)
  }
  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <p>You Typed:{inputText}</p>
      <button onClick={()=>setInputText('hello')}>Reset</button>
    </div>
  )
}

export default Hooks