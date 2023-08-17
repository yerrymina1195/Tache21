import React from 'react'
import SideBars from '../components/messageFile/SideBars'
import Chat from '../components/messageFile/Chat'
import "./messageri.css"
const Messagerie = () => {
  return (
   <div class='container'>
    <div className="row">
<center>
   <div class="bor col-md-12 col-xs-12  border-none rounded-lg    flex overflow-hidden  col-sm-12">
    
     <Chat  className="border-none"/>
     <SideBars className="border-none" />
    </div>
    </center>
    </div>
    </div>
  )
}

export default Messagerie
