import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import "./index.css"

const App = () => {
  return (
    <div className='App'>
      <Header name='Anna' color='Purple' />
      <Main greet="Howdy"/>
      <Sidebar  greet='Hi'/>
    </div>
  )
}

export default App