import React from 'react'
import {IoIosContact} from 'react-icons/io'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {BsCameraVideoFill} from 'react-icons/bs'
import  Messages from './Messages'
import  Input  from './Input'


const Chat = () => {
  return (
    <div className="chat  w-9/12">
      <div className="chatInfo  h-12 bg-orange-300 flex justify-between w-full">
        <p>Coach</p>
        <div className="chatIcons flex items-center justify-between px-4">
     
          <IoIosContact className='me-3 cursor-pointer'  />
          <BsCameraVideoFill className='me-3 cursor-pointer'/>
          <AiOutlineEllipsis className='me-3 cursor-pointer'/>
          
        </div>
        
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat