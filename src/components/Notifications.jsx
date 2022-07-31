import React,{useContext} from 'react'

import {SocketContext} from '../SocketContext';

const Notifications = () => {

  const {answerCall,call,callAccepted}=useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className='notificationsdiv'>
          <div className='centerdiv'>
            <h2>{call.name} is calling you...</h2>
          </div>
          <div>
            <button className="btn btnanswer" onClick={answerCall}>Answer</button>
          </div>
        </div>   
       )} 
    </>
  )
}

export default Notifications