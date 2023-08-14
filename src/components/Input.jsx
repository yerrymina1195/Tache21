import React from 'react'
import {MdAttachFile} from 'react-icons/md'
import {MdOutlineImage} from 'react-icons/md'
const input = () => {
  return (
    <div className='Input  h-14 px-2 bg-violet-50 justify-between flex items-center'>
       <div className="send flex items-center gap-3">
       <button className='px-2.5 border-none bg-orange-700  text-white h-10 '>Send</button>
       < MdOutlineImage className='cursor-pointer  h-6 '/>
       <input type="file" style={{display:"none"}} id="file" />
       <label htmlFor="file">
        < MdAttachFile className='cursor-pointer  h-6'/>
       </label>
      
       </div>
       <input type="text" placeholder="Text " className='w-full border-none outline-none text-blue' />
      
        </div>
  )
}

export default input