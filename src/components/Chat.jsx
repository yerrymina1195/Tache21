import React from 'react'
import {IoIosContact} from 'react-icons/io'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {BsCameraVideoFill} from 'react-icons/bs'
import  Messages from './Messages'
import  Input  from './Input'


const Chat = () => {
  return (
    <div className="chat  w-11/12">
      <div className="chatInfo  h-12 bg-gradient-to-r from-orange-600 to-orange-300 flex justify-between w-full">
        <p class='px-3 font-bold pt-2 text-white '>Coach</p>
        <div className="chatIcons flex items-center justify-between px-4">
     
          <IoIosContact className='me-3 cursor-pointer text-white'  />
          <BsCameraVideoFill className='me-3 cursor-pointer text-white'/>
          <AiOutlineEllipsis className='me-3 cursor-pointer text-white'/>
          
        </div>
        
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat