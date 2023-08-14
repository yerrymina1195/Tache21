import React from 'react'
import SideBars from '../components/SideBars'
import Chat from '../components/Chat'
import "./messageri.css"
const Messagerie = () => {
  return (
   <div class='container'>
    <div className="row">
<center>
   <div class="bor col-md-12 col-xs-12 col-lg-9  border-none rounded-lg    flex overflow-hidden  col-sm-12">
    <SideBars className="border-none" />
     <Chat  className="border-none"/>
    </div>
    </center>
    </div>
    </div>
  )
}

export default Messagerie
