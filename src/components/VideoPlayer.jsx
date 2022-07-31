import React, { useContext } from 'react';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {

  const {name,callAccepted,myVideo,userVideo,callEnded,call}=useContext(SocketContext);
  console.log(call.name);
  return (
    <div className='videodiv'>
      
      {
        !callAccepted && (
          <div className='inner'>
            <video playsInline muted ref={myVideo} autoPlay></video>
            <span id="username">{name||'Name'}</span>
            <i class="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      }
      
      {
        callAccepted && !callEnded && (
          <div className='inner'>
            <video playsInline ref={userVideo} autoPlay></video>
            <span id="username">{call.name||'Name'}</span>
            <i class="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      }

      


    </div>
  )
}

export default VideoPlayer;