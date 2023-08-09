import React from 'react'

const Message = () => {
  return (
    <div className='message flex gap-20 mb-12 flex-row-reverse '>
<div className="messageinfo flex flex-col text-slate-400 font-light pr-4 ">
  <img src="https://images.pexels.com/photos/17742455/pexels-photo-17742455/free-photo-of-femme-visage-portrait-cheveux-longs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-10 h-10 rounded-full object-cover ' />
  <span className="text-gray font-light text-xs  ">just&nbsp;now</span>
</div>

<div className="messagecontent w-10/12 flex flex-col gap-10  items-end">
  <p className='bg-white px-10 rounded-tr-lg rounded-br-lg  rounded-b-lg max-w-max '>bonjour</p>
 <img src="https://images.pexels.com/photos/17791302/pexels-photo-17791302/free-photo-of-femme-portrait-cheveux-noirs-afro.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""  className='w-10 h-10 rounded-full object-cover p-0 '  />
</div>
    </div>
  )
}

export default Message