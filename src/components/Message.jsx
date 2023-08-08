import React from 'react'

const Message = () => {
  return (
    <div className='message flex gap-20 mb-12 '>
<div className="messagenfo flex flex-col text-gray  font-light ">
  <img src="https://images.pexels.com/photos/17742455/pexels-photo-17742455/free-photo-of-femme-visage-portrait-cheveux-longs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full object-cover ' />
</div>
<span className="text-gray font-light ">just now</span>
<div className="messagecontent">
  <p>bonjour</p>
 
</div>
    </div>
  )
}

export default Message