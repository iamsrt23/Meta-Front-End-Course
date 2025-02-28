import React from 'react'

const ModeToggler = () => {
  let darkModeOn = true
  const darkMode = <h1>Dark Mode is On</h1>
  const lightMode= <h1>Light Mode is On</h1>

  const handleClick = ()=>{
    darkModeOn = !darkModeOn
    if(darkMode==true){
      console.log('Dark Mode is On')
    }else{
      console.log('Light Mode is On')
    }
  }
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ModeToggler