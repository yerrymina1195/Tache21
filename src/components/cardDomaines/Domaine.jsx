import React from "react";
import "./Domaine.css";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
// import { Link } from 'react-router-dom'
// import {domain} from '../../pages/Cours'

const Domaine = (props) => {
  return (
    <div>
      <div class="card py-5 card-domaine">
        {/* <Link to={`/cours/${domain.props.title}`} className='text-decoration-none'>
                </Link> */}
        <div class="card-body">
          <h5 class="card-title text-center rest">{props.title}</h5>
        </div>
        <div className="row btn-domaine">
          <div className="col-4 d-flex align-items-center justify-content-end">
            <button type="button" class="btn">
              <BsEyeFill />
            </button>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <button type="button" class="btn">
              <BsPencilSquare />
            </button>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-start">
            <button type="button" class="btn">
              <BsArchiveFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domaine;
