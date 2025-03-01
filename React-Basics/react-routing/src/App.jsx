import React from 'react'
import './index.css'
import HomePage from './HomePage'
import AboutMe from './AboutMe'
import { Link, Route, Routes } from 'react-router-dom'
import Weekday from './conditionalRendering/Weekday'
import Weekend from './conditionalRendering/Weekend'


const App = () => {
  const day = new Date().getDay()
  return (
    <div>
     
      <div style={{backgroundColor:'pink',padding:'10px'}}>
        <nav className='nav-item'>
          {/* <a href='#'>HomePage</a> */}
          <Link to='/' className='nav-item'>HomePage</Link>
          {/* <a href='#'>About Me</a> */}
          <Link to='/aboutme' className='nav-item'>AboutMe</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>

      {day>=1 && day<=5 ? <Weekday />: <Weekend/>}


    </div>
  )
}

export default App