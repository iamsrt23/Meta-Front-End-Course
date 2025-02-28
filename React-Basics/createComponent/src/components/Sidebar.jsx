import React from 'react'

const Sidebar = (props) => {
  return (
    <div style={{display:'flex',flex:'1'}}>
      <h2>Hello From SideBar {props.greet}</h2>
    </div>
  )
}

export default Sidebar