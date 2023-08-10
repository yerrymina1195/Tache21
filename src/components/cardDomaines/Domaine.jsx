import React from 'react'
import './Domaine.css'
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from 'react-icons/bs'


const Domaine = (props) => {
    return (
        <div>
            <div class="card card-domaine" >
                {/* <img src={props.img} class="card-img-top" alt="image-domaine" /> */}
                <div class="card-body">
                    <h5 class="card-title my-5 d-flex justify-content-around text-domaine">
                        {props.title}
                        <span>{props.icon}</span>
                    </h5>
                    {/* <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. m fugit ratione consequatur nihil.
                    </p> */}
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

export default Domaine