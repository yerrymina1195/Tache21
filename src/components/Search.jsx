import React from 'react'

const Search = () => {
  return (
    <div className="Search border-b-slate-300">
      <div className="seachForm px-2.5">
<input type="text" placeholder="Search "  className="bg-transparent border-none  text-white outline-none "/>
      </div>
      <div className="userChat flex px-2 pt-3.5 gap-10 text-white  cursor-pointer hover:bg-blue-300">
<img src="https://images.pexels.com/photos/17791302/pexels-photo-17791302/free-photo-of-femme-portrait-cheveux-noirs-afro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className="h-10 w-10 rounded-full object-cover" />
<div className="userChatinfo">
<span>makhan</span>
</div>
      </div>
      </div>
  )
}

export default Search