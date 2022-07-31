import './App.css';

import React from 'react'

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications'

const App = () => {
  return (
    <div className='App'>
      <div className="header">Video Chat  <i class="fa-solid fa-video vicon"></i></div>

      <VideoPlayer></VideoPlayer>
      <Options>
        <Notifications></Notifications>
      </Options>

    </div>
  )
}

export default App