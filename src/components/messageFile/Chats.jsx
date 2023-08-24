import React from 'react'

const Chats = () => {
  return (
    <div className='border-none overflow-auto '>
       <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/16767210/pexels-photo-16767210/free-photo-of-route-rue-sport-amusement.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo max-sm:hidden">
     <span className='text-sm fw-bold text-black'>Baba thiame</span>
     <p className='text-sm text-gray-500'>Hellow</p>
     </div>
      </div>

      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/17042221/pexels-photo-17042221/free-photo-of-mode-femme-blond-jeune.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo  max-sm:hidden ">
     <span className='text-sm fw-bold text-black'>Yacine Diop</span>
     <p className='text-sm text-gray-500'>Hellow</p>
     </div>
      </div>


      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/17676706/pexels-photo-17676706/free-photo-of-vitor-izoldi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo max-sm:hidden">
     <span className='text-sm fw-bold text-black'>mouhamed loum</span>
     <p className='text-sm text-gray-500'>Hellow</p>
     </div>
      </div>

      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/13085787/pexels-photo-13085787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo max-sm:hidden">
     <span className='text-sm fw-bold text-black'>Rama fall</span>
     <p className='text-sm text-gray-500'>Hellow</p>
     </div>
      </div>

      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/14407803/pexels-photo-14407803.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo max-sm:hidden">
     <span className='text-sm fw-bold text-black'>saliou thioune</span>
     <p className='text-sm text-gray-500'>Hellow</p>
     </div>
      </div>

      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-400">
    <img src="https://images.pexels.com/photos/17286100/pexels-photo-17286100/free-photo-of-homme-chemise-visage-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
    <div className="userChatinfo max-sm:hidden">
     <span className='text-sm fw-bold text-black'>Mamadou niang</span>
     <p className='text-sm text-gray-500 pl-0'>Hellow</p>
     </div>
      </div>
    </div>
  )
}

export default Chats