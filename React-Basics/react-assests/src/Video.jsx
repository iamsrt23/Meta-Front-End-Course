import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (

    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=WqA0aZXwsFkf' playing={false} volume={0.5}/>
    </div>
  )
}

export default Video