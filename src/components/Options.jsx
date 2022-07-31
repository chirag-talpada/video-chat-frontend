import React,{useContext,useState} from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {SocketContext} from '../SocketContext';


const Options = ({children}) => {

  const {me,callAccepted,name,setName,callEnded,leaveCall,callUser}=useContext(SocketContext);
  const [idToCall,setIdToCall]=useState('');


  return (
    <div className='optionsdiv'>
      <div className='container'>
        
        <div className='item'>
          <div>
            <span>Acccount Info</span>
          </div>
          <div>
            <input type='text' placeholder='Enter Your Name' className='inputbox' value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <CopyToClipboard text={me}>
              <button className="btn">Copy Your ID&nbsp;&nbsp;<i class="fa-solid fa-copy"></i></button>
            </CopyToClipboard>
          </div>
        </div>

        <div className='item'>
          <div>
            <span>Make a Call</span>
          </div>
          <div>
            <input type='text' placeholder='ID to Call' className='inputbox' value={idToCall} onChange={(e)=>setIdToCall(e.target.value)}/>
          </div>
          <div>
              {callAccepted && !callEnded?(
                <button className="btn btnhangup" onClick={leaveCall}>Hang Up&nbsp;&nbsp;<i class="fa-solid fa-phone-slash"></i></button>
              ):(
                <button className="btn" onClick={()=>callUser(idToCall)}>Call&nbsp;&nbsp;<i class="fa-solid fa-phone"></i></button>
              )}
              
          </div>
        </div>


      </div>

      {children}
      
    </div>
  )
}

export default Options