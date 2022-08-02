import React,{useContext} from 'react';


import {SocketContext} from '../SocketContext';

const Notifications = () => {

  const {answerCall,call,callAccepted,pauseRing,playRing}=useContext(SocketContext);
  
  if(call.isReceivedCall && !callAccepted) {
    playRing();
  }


  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className='notificationsdiv'>
          <div className='centerdiv'>
            <h2>{call.name||'Someone'} is calling you...</h2>
          </div>
          <div>
            <button className="btn btnanswer" onClick={()=>{answerCall();pauseRing();}}>Answer</button>
          </div>
        </div>   
       )} 
    </>
  )
}

export default Notifications