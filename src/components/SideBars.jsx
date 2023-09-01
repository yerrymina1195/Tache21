import React from 'react';
import Navigation from "./Navigation"
import Search from "./Search"
import Chats from './Chats';


const SideBars = () => {
  return (
    <div className="sidebars h-100  bg-gradient-to-r from-orange-600 to-orange-500  " >
        <Navigation />
        <Search  />
        <Chats  />
        
       
        
        </div>
    
    
  )
}

export default SideBars