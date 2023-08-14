import React from 'react'
import Rcherche from '../components/professeur/Rcherche'
import Listprof from '../components/professeur/Listprof'



const Professeurs = () => {
  return (


    <div class="container ">
  <div className="row">
  <Rcherche />
  <center>
  <div class="col-md-12 col-xs-12 col-lg-9  border-none rounded-lg flex-column  overflow-hidden   col-sm-12">
  
  <Listprof />
  
  </div>
  </center>
</div>
</div>
  )
}

export default Professeurs
