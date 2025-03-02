import React from 'react'
import { useUser } from './UserContex'

const LoggedInUser = () =>{
  const {user} = useUser();
  return(
    <p style={{textAlign:'center'}}> 
      Hello <span className='Username'>{user.name}</span>
    </p>
  )
}
const Header = () =>{

  return(
    <header style={{textAlign:'center'}}>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
}
const Contex = () => {
  const {user} = useUser()
  return (
    <div>
      <Header />
      <h2>What is Lorem ipsum?</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maiores, enim et, quis animi dolores nam pariatur neque ut, dolore voluptates voluptate porro delectus nesciunt. Illo laboriosam eum libero in!</p>
      <p>Written By {user.name}</p>
    </div>
  )
}

export default Contex