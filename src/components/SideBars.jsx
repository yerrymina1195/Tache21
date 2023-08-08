import React from 'react';
import Navigation from "./Navigation"
import Search from "./Search"
import Chats from './Chats';


const SideBars = () => {
  return (
    <div className="sidebars basis-1/3 ring ring-white-500 bg-sky-950" >
        <Navigation />
        <Search />
        <Chats />
        
        </div>
    
    
  )
}

export default SideBars