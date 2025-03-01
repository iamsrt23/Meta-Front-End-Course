import React,{useState} from 'react'
import Heading from './Heading'


const State = () => {
  const [word,setWord] = useState('Eat')
  function handleClick(){
    setWord('Drink')
  }
  return (
    <div style={{textAlign:'center'}}>
      <Heading message={word+  " At Little Lemon "} />
      <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default State