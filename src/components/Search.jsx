import React from 'react'

const Search = () => {
  return (
    <div className="Search border-b-slate-300">
      <div className="seachForm px-2.5 ">
<input type="text" placeholder="Search "  className="bg-transparent border-none  text-white outline-none max-sm:w-full shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 "/>
      </div>
      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-orange-800">
<img src="https://images.pexels.com/photos/17791302/pexels-photo-17791302/free-photo-of-femme-portrait-cheveux-noirs-afro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
<div className="userChatinfo max-sm:hidden">
<span>makhan</span>
</div>
      </div>
      </div>
  )
}

export default Search