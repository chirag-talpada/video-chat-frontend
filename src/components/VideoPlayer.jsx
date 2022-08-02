import React, { useContext} from 'react';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {

  const {name,callAccepted,myVideo,userVideo,callEnded,call,stream}=useContext(SocketContext);

  return (
    <div className='videodiv'>
      
      {
        !stream && (
          <div className='inner'>
            <video className='video1' playsInline muted autoPlay></video>
            <span id="username">{name||'Name'}</span>
            <i class="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      }
      
      {
        callAccepted && !callEnded && (
          <div className='inner'>
            <video className='video1' playsInline ref={userVideo} autoPlay></video>
            <span id="username">{call.name||'Name'}</span>
            <i className="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      }



      { 
        stream && (
          <div className='inner' style={{display:"block",margin:"20px 0px"}}>
            <video className='video2' playsInline muted ref={myVideo} autoPlay></video>
            <span id="username">{name||'Name'}</span>
            <i class="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      }

      {/* {
        stream && callAccepted && !callEnded &&(
          <div className='inner' style={{display:"block",margin:"39px 0px"}}>
            <video className='video2' playsInline muted ref={myVideo} autoPlay></video>
            <span id="username">{name||'Name'}</span>
            <i class="fa-3x fa-solid fa-video-slash"></i>
          </div>
        )
      } */}

    </div>
  )
}

export default VideoPlayer;