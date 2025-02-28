import React from 'react'

const Sidebar = (props) => {
  const sideBarStyle={
    background:"azure",
    width : "calc(30% - 10px)",
    marginLeft:"10px",

  }
  return (
    <div style={sideBarStyle}>
      <h2>Hello From SideBar {props.greet}</h2>
    </div>
  )
}

export default Sidebar