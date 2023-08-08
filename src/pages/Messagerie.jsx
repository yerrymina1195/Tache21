import React from 'react'
import SideBars from '../components/SideBars'
import Chat from '../components/Chat'
const Messagerie = () => {
  return (
   <div className=' text-white-600 flex bg-gray-50 h-screen items-center justify-center '>
   <div className="ring ring-white-500 rounded-lg  w-8/12  h-4/5 flex overflow-hidden  ">
    <SideBars />
     <Chat />
    </div>
    </div>
  )
}

export default Messagerie
