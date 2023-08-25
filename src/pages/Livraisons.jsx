import React from 'react'
import './Livraisons.css';

import img from "../data/Capture0.png";
import img2 from "../data/capture1.png";
import img3 from "../data/CAPTURE2.png";
// import { BiSolidMessageDetail } from 'react-icons/bi';
// import { AiFillEye } from 'react-icons/ai';
import ModalBouton from '../components/ModalBouton';
import ModalQuiz from './ListProfs/modaQuiz/ModalQuiz';

const Data = [
  {
    title: "Tâche n° 1",
    imgSrc: img,
  },
  {
    title: "Tâche n° 2",
    imgSrc: img2,
  },
  {
    title: "Tâche n° 3",
    imgSrc: img3,
  },

]

const Livraisons = () => {
  return (
    <div className="container">
      <div className='bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
        <h1 className=' text-couleur2 p-11 text-start'>Livraisons</h1>
        <div className='fixed top-[180px] z-[3000] right-10'>

          <ModalBouton />
        </div>
        <div className='row g-3'>
          {Data.map((item) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div className="card p-3 border-0">
                  <div className="card-title">
                    <h4 className='fs-5 fw-100 text-dark'>{item.title}</h4>
                  </div>
                  <div className="card-body">
                    <img src={item.imgSrc} alt="" className='img-fluid w-100' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

   
  )
}

export default Livraisons

