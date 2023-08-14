import React from 'react'
import './Domaine.css'
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import {domain} from '../../pages/Cours'



const Domaine = (props) => {
    return (
        <div>
            <div class="card card-domaine" >
                {/* <Link to={`/cours/${domain.props.title}`} className='text-decoration-none'>
                </Link> */}
                <div class="card-body">
                    <h5 class="card-title text-center my-5 .text-domaine ">
                        {props.title}
                        <span>{props.icon}</span>
                    </h5>
                </div>
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

    )
}

export default Domaine