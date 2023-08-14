import React from 'react';
import Navigation from "./Navigation"
import Search from "./Search"
import Chats from './Chats';


const SideBars = () => {
  return (
    <div className="sidebars w-50 h-100 bg-light " >
        <Navigation />
        <Search  />
        <Chats  />
        
       
        
        </div>
    
    
  )
}

export default SideBars