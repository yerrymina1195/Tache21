import React from 'react'
import './Livraisons.css';

import img2 from "../data/Cap2.png";
import { BiSolidMessageDetail } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import ModalBouton from '../components/ModalBouton';

const Livraisons = () => {
  return (
    <div className="container">
      <div className='m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
        <h1 className=' text-couleur2 p-11 text-center'>Livraisons</h1>
        <div className='fixed top-[180px] z-[3000] right-10'>

        <ModalBouton/>
        </div>
        <div className="row g-3">
          {/* Tache 1 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 1</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* Tache 2 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 2</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* Tache 3 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 3</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2 max-w-max' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* TAche 4 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 3</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2 max-w-max' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* TAche 5 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 3</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2 max-w-max' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* TAche 6 */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-3">
              <div className="card-title">
                <h3 className='text-dark'>Tâche n° 3</h3>
              </div>
              <div className="card-body">
                <img src={img2} alt="dsre" className="img-fluid mx-auto w-75 h-75" />
                <div className='d-flex flex-row justify-content-between align-items-center justify-content-md-between  align-items-md-center my-3'>
                  <button className='btn btn-warning my-1 text-white w-50 me-2 d-flex align-items-center justify-content-center'><BiSolidMessageDetail className='icons me-2' /><span>Commentaires</span></button>
                  <button className='btn btn-danger my-1 text-white w-50 ms-2 d-flex align-items-center justify-content-center'><AiFillEye className='icons me-2 max-w-max' /><span>Livrables</span></button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Livraisons
