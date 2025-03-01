import React from 'react'
import roofTop from './assets/roofTop.jpg'
import Video from './Video'

import Song from './Audio'

const App = () => {
  const randomImageUrl = "https://www.pexels.com/photo/photography-of-city-building-1049302/"
  return (
    <div>
      <h1>Task: To Add Three Images With Some Styling</h1>
      <img src={roofTop} height={200} alt='An image of the roof top' />
      {/* <img src={require("./assets/roofTop.jpg")} height={200} alt="Roof Top 2nd Image" /> */}
      <img src="/assets/roofTop.jpg" height={200} alt="Roof Top 2nd Image" />
      <img src={randomImageUrl} alt='randomimage' height={200} />
      <Video />
      <Song />


    </div>
  )
}

export default App