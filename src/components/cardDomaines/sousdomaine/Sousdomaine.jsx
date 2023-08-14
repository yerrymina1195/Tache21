import React from 'react'
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from 'react-icons/bs'
import './Sousdomaine.css'

const Sousdomaine = (props) => {
    return (
        <div>
            <div class="card border-0" >
                    <img src={props.img} class="card-img-top img-fluid" alt={props.title} />
                    <div class="card-body">
                        <h5 class="card-title">
                            {props.title}
                        </h5>
                    </div>

                <div className="pb-3">
                    <div className='row  btn-domaine'>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button type='button' class="btn">
                                <BsEyeFill />
                            </button>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button type='button' class="btn mx-3">
                                <BsPencilSquare />
                            </button>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button type='button' class="btn">
                                <BsArchiveFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sousdomaine