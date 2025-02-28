import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
      <Header name='Anna' color='Purple' />
      <Main greet="Howdy"/>
      <Sidebar  greet='Hi'/>
    </div>
  )
}

export default App