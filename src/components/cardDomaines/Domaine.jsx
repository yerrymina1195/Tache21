import React from 'react'
import './Domaine.css'
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Domaine = (props) => {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div class="card card-domaine" >
                <Link to='/'>
                    <img src={props.img} class="card-img-top" alt="image-domaine" />
                </Link>
                <div class="card-body">
                    <h5 class="card-title text-domaine">{props.title}</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. m fugit ratione consequatur nihil.
                    </p>
                    <div className='d-flex justify-center btn-domaine'>
                        <button type='button' class="btn">
                            <BsEyeFill />
                        </button>
                        <button type='button' class="btn mx-3">
                            <BsPencilSquare />
                        </button>
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