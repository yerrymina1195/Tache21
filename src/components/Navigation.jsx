import React from 'react'

const Navigation = () => {
  return (
    <div className=' flex items-center bg-orange-700 h-14 px-3 justify-between text-lime-50 max-sm:w-full  '>
        <span className='logo font-bold max-sm:hidden'>Didispher chat</span>
        <div className="user flex gap-10" >
        <img src="https://images.pexels.com/photos/17742455/pexels-photo-17742455/free-photo-of-femme-visage-portrait-cheveux-longs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-6 w-6 rounded-full object-cover" />
        <span className=' max-sm:hidden'>Coach</span>
        
        </div>
    </div>
  )
}

export default Navigation