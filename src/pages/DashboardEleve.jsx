import React from 'react'
// import img from "../data/cap0.png";
// import makhan from "../data/makhan.png";
import { useStateContext } from "../contexts/ContextProvider";
import { auth, db, storage } from "../Firebase/Firebase";
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  where,
} from "firebase/firestore";
const DashboardEleve = () => {
  const{user}=useStateContext()
  
  return (
    <div className="container">
    <div className="row">
      <h1 className='text-dark text-center'>Dashboard Elève</h1>
      <div className="col-12">
        <div className='d-flex flex-row align-items-center'>
          <div>
            <img src={makhan} alt="makhan" className='img-fluid rounded-circle w-[50px] h-[50px]' />
          </div>
          <div className='mt-3 ms-3'>
            <h4 className='fs-5'>Makhan Diakho</h4>
          </div>
          <div className='mt-4 ms-5'>
            <p className='text-secondary fs-6 mt-1'>12 août 2023, 12h30</p>
          </div>
        </div>

        <div className='mt-3 ms-3'>
          <h4 className='text-couleur2'>Tâche n° 1</h4>
        </div>
        <div className='mt-3 ms-3'>
          <img src={img} alt="img" className='img-fluid mx-auto h-[200px]'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DashboardEleve