import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div style={{backgroundColor:'yellow',display:'flex',margin:'0px'}}>
      <h1>Hello Threre Indeed ,{props.name},{props.color}</h1>
    </div>
  )
}

export default Header