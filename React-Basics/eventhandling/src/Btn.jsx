import React from 'react'


const Btn = () => {
  const clickHandler = () => console.log('clicked')
  const mouseOver = () =>console.log(`MouseOverf`)
  return (
    <div>
      <button onClick={clickHandler}>ClickMe</button>
      <button onMouseOver={mouseOver}>Click Mouse Over</button>
      <button onClick={()=>console.log('Second Example')}>An inline anonymous ES6 function event handler</button>
    </div>
  )
}

export default Btn